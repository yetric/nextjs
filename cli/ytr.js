const prompts = require("prompts");
const fs = require("fs");
const path = require("path");
(async () => {
    const response = await prompts({
        type: "text",
        name: "name",
        message: "What should the component be named?"
    });

    let componentTpl = __dirname + "/Component.tpl";
    let componentPath = path.resolve(__dirname + "/../src/shared/components/");
    let stylePath = path.resolve(componentPath + "/styles/");
    let componentFileName = `${response.name}.tsx`;
    let componentScssName = `${response.name}.module.scss`;

    fs.readFile(componentTpl, "utf8", function (err, contents) {
        let fullContent = contents.replace(/\$__COMPONENT__/g, response.name);
        fs.writeFile(componentPath + "/" + componentFileName, fullContent, () => {});
        fs.writeFile(stylePath + "/" + componentScssName, "/* Auto */", () => {});
    });
})();

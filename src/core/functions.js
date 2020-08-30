export const isNumeric = (num) => !isNaN(num) && isFinite(num);
export const stringToNum = (str) => (str.length > 0 ? +str : str);
export const isArray = (arr) => Array.isArray(arr);
export const isString = (arr) => typeof arr === "string";
export const isObject = (variable) =>
    Object.prototype.toString.call(variable) === "[object Object]";
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const isJson = (str) => {
    if (typeof str !== "string") return false;
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);
        return type === "[object Object]" || type === "[object Array]";
    } catch (err) {
        return false;
    }
};

export const isEmptyish = (variable) =>
    !!((isArray(variable) || isObject(variable) || isString(variable)) && isFalsy(variable));

export const isFalsy = (variable) => {
    const emptyArr = isArray(variable) && variable.length === 0;
    const emptyObj = isObject(variable) && isEmptyObject(variable);

    return (
        variable === false ||
        (typeof variable === "string" && variable.toLowerCase() === "false") ||
        variable === "" ||
        variable === 0 ||
        variable === undefined ||
        variable === null ||
        emptyArr ||
        emptyObj
    );
};

export const getURLParameters = (url) => {
    let params = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a),
        {}
    );

    Object.keys(params).forEach((key) => {
        if (!params.hasOwnProperty(key)) return;
        if (isNumeric(params[key])) {
            params[key] = stringToNum(params[key]);
        }
        if (isString(params[key])) {
            params[key] = decodeURIComponent(params[key]);
        }
        if (isJson(params[key])) {
            params[key] = JSON.parse(params[key]);
        }
        isEmptyish(params[key]) && delete params[key];

        // TODO: Handle param[0], param[1] etc
    });

    return params;
};

export const isArray = (arr) => Array.isArray(arr);
export const isObject = (variable) =>
    Object.prototype.toString.call(variable) === "[object Object]";
export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const isFalsy = (variable) => {
    const isEmptyArray = isArray(variable) && variable.length === 0;
    const isEmptyObject = isObject(variable) && isEmpty(variable);

    return (
        variable === false ||
        variable.toLowerCase() === "false" ||
        variable === "" ||
        variable === 0 ||
        variable === undefined ||
        variable === null ||
        isEmptyArray ||
        isEmptyObject
    );
};

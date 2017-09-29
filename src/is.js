/**
 * It returns function for type checking based on provided type in first call
 * @param {String} type
 * @return {Function}
 *
 **/
const isType = type => arg => typeof arg === type;
const isString = isType("string");
const isNumber = isType("number");
const isBool = isType("boolean");
const isObject = isType("object");
const isArray = Array.isArray;
const isFunction = isType("function");
const isUndefined = isType("undefined");

export {
  isString,
  isNumber,
  isBool,
  isObject,
  isArray,
  isFunction,
  isUndefined
}

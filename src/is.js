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

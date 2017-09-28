const isType = type => arg => typeof arg === type;
export {
  isString: isType("string"),
  isNumber: isType("number"),
  isBool: isType("boolean"),
  isObject: isType("object"),
  isArray: Array.isArray,
  isUndefined: isType("undefined")
}

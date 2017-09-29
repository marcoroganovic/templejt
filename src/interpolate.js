import { isObject, isArray } from "./is";
import makeDOM from "./make-dom";
import constructRegex from "./construct-regex";

/**
 * Interpolates template with values from data using Regex
 * and it return either DOM fragment or string based on asString argument
 * @param {String} tmpl
 * @param {Object|Array} data
 * @param {Boolean} asString
 * @return {DOMFragment|String}
 *
 **/
function interpolate(tmpl, data, asString) {

  if(isObject(data) && !isArray(data)) {
    for(let prop in data) {
      let regex = constructRegex(prop);
      tmpl = tmpl.replace(regex, data[prop]);
    }

    return asString ? tmpl : makeDOM(tmpl);
  } else if(isArray(data)) {
    let newTemplate = "";
    data.forEach(item => {
      if(isObject(item)) {
        newTemplate += interpolate(tmpl, item, true);
      }
    });

    return asString ? newTemplate : makeDOM(newTemplate);
  }

  return tmpl;
}

export default interpolate;

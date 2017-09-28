import { isObject, isArray } from "./is";
import makeDOM from "./make-dom";
import constructRegex from "./construct-regex";

export default const interpolate = (tmpl, data, asString) => {
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

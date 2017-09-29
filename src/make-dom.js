import makeFragment from "./make-fragment";
import makeElement from "./make-element";

/**
 * Creates documentFragment from JavaScript string
 * @param {String} str
 *
 **/
export default (str) => {
  const fragment = makeFragment();
  const placeholder = makeElement("div");
  placeholder.innerHTML = str;
  let current;

  while(current = placeholder.firstChild) {
    fragment.appendChild(current);
  }

  return fragment;
}

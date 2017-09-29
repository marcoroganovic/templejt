import makeFragment from "./make-fragment";
import makeElement from "./make-element";

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

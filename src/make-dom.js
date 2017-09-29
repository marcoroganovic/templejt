import makeFragment from "./make-fragment";

export default makeDOM = str => {
  const fragment = makeFragment();
  const placeholder = document.createElement("div");
  placeholder.innerHTML = str;
  let current;

  while(current = placeholder.firstChild) {
    fragment.appendChild(current);
  }

  return fragment;
}

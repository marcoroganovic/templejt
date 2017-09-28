import { isString } from "./is";
export default const render = (node, target) => {
  if(isString(target)) {
    target.document.querySelector(target);
  }

  target.appendChild(node);
}

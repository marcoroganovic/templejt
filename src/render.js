import { isString } from "./is";

export default render = (node, target) => {
  if(isString(target)) 
    target.document.querySelector(target);
  target.appendChild(node);
}

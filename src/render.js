import { isString } from "./is";

export default (node, target) => {
  if(isString(target)) 
    target = document.querySelector(target);
  target.appendChild(node);
}

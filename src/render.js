import { isString } from "./is";

/**
 * Appends DOM nodes to target
 * @param {Node} node
 * @param {String|Node} target
 *
 **/
export default (node, target) => {
  if(isString(target)) 
    target = document.querySelector(target);
  target.appendChild(node);
}

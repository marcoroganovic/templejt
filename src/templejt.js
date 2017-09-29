import { isFunction } from "./is";
import makeElement from "./make-element";
import getAllNodes from "./get-all-nodes";
import findIfConditions from "./find-if-conditions";
import findLoops from "./find-loops";
import interpolate from "./interpolate";

/**
 * Creates DocumentFragment from string with all interpolated values 
 * based on provided data
 * @param {String} str
 * @param {Object} data
 * @return {DocumentFragment}
 *
 **/
export default (str, data) => {
  const fragment = makeElement("div");
  fragment.innerHTML = str;
  const allNodes = getAllNodes(fragment);
  const ifConditions = findIfConditions(allNodes);
  const loops = findLoops(allNodes);

  if(ifConditions.length) {
    ifConditions.forEach(node => {
      let prop = data[node.getAttribute("data-if")];

      if(isFunction(prop)) {
        prop = prop();
      }

      node.style.display = !!prop  ? "" : "none";
    });
  }

  if(loops.length) {
    loops.forEach(node => {
      let template = node.innerHTML;
      node.innerHTML = "";
      let attribute = (
        node.getAttribute("data-for") || 
        node.getAttribute("data-context")
      );

      let prop = data[attribute];
      node.appendChild(interpolate(template, prop));
    });
  }

  return interpolate(fragment.innerHTML, data);
}

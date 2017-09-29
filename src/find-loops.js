/**
 * It returns all elements that have data-for or data-context attribute
 * @param {Array} nodes
 * @return {Array}
 *
 **/
export default (nodes) => {
  return nodes.filter(node => node.hasAttribute("data-for") || node.hasAttribute("data-context"));
}

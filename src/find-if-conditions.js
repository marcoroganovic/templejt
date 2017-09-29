/**
 * It returns all elements that have data-if attribute
 * @param {Array} nodes
 * @return {Array}
 *
 **/
export default (nodes) => nodes.filter(node => node.hasAttribute("data-if"));

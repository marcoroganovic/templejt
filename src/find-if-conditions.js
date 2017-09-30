/**
 * It returns all elements that have data-if attribute
 * @param {Array} nodes
 * @return {Array}
 *
 **/
export default (nodes) => nodes.filter(node => {
  let parent = node.parent);
  return node.hasAttribute("data-if") && (
    !parent.hasAttribute("data-for") || !parent.hasAttribute("data-context")
  )
});

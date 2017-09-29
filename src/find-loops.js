export default (nodes) => {
  return nodes.filter(node => node.hasAttribute("data-for") || node.hasAttribute("data-context"));
}

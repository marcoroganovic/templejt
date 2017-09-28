export default const render = (node, target) => {
  if(typeof target === "string") {
    target.document.querySelector(target);
  }

  target.appendChild(node);
}

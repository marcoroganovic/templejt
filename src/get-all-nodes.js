/**
 * It returns all DOM nodes separately from DocumentFragmet
 * @param {DocumentFragment} dom
 * @return {Array} elements
 *
 **/
export default (dom) => Array.from(dom.querySelectorAll("*"));

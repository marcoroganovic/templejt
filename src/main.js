import templejt from "./templejt";
import render from "./render";

/**
 * Exposes render and templejt functions globally
 * and exports templejt for use with module system
 *
 **/
window.render = render;
window.templejt = templejt; 
export default templejt;

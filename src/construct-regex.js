/**
 * Constructrs Regex for interpolating in template based on provided prop name
 * @param {String} prop
 * @return {Regex}
 *
 **/
export default (prop) => new RegExp(`{{\\s+?${prop}\\s+?}}`, "g");

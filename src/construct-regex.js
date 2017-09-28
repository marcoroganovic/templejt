export default const constructRegex = prop => new RegExp("{{\\s+?" + prop + "\\s+?}}", "g");

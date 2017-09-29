(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = constructRegex = function constructRegex(prop) {return new RegExp("{{\\s+?" + prop + "\\s+?}}", "g");};

},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = findIfConditions = function findIfConditions(nodes) {return nodes.filter(function (node) {return node.hasAttribute("data-if");});};

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = findLoops = function findLoops(nodes) {
  return nodes.filter(function (node) {return node.hasAttribute("data-for") || node.hasAttribute("data-context");});
};

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = getAllNodes = function getAllNodes(dom) {return Array.from(dom.querySelectorAll("*"));};

},{}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _is = require("./is");
var _makeDom = require("./make-dom");var _makeDom2 = _interopRequireDefault(_makeDom);
var _constructRegex = require("./construct-regex");var _constructRegex2 = _interopRequireDefault(_constructRegex);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

interpolate = function (_interpolate) {function interpolate(_x, _x2, _x3) {return _interpolate.apply(this, arguments);}interpolate.toString = function () {return _interpolate.toString();};return interpolate;}(function (tmpl, data, asString) {

  if ((0, _is.isObject)(data) && !(0, _is.isArray)(data)) {
    for (var prop in data) {
      var regex = (0, _constructRegex2.default)(prop);
      tmpl = tmpl.replace(regex, data[prop]);
    }

    return asString ? tmpl : (0, _makeDom2.default)(tmpl);
  } else if ((0, _is.isArray)(data)) {
    var newTemplate = "";
    data.forEach(function (item) {
      if ((0, _is.isObject)(item)) {
        newTemplate += interpolate(tmpl, item, true);
      }
    });

    return asString ? newTemplate : (0, _makeDom2.default)(newTemplate);
  }

  return tmpl;
});

},{"./construct-regex":1,"./is":6,"./make-dom":8}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var isType = function isType(type) {return function (arg) {return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === type;};};
var isString = isType("string");
var isNumber = isType("number");
var isBool = isType("boolean");
var isObject = isType("object");
var isArray = Array.isArray;
var isFunction = isType("function");
var isUndefined = isType("undefined");exports.


isString = isString;exports.
isNumber = isNumber;exports.
isBool = isBool;exports.
isObject = isObject;exports.
isArray = isArray;exports.
isFunction = isFunction;exports.
isUndefined = isUndefined;

},{}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _templejt = require("./templejt");var _templejt2 = _interopRequireDefault(_templejt);
var _render = require("./render");var _render2 = _interopRequireDefault(_render);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
window.render = _render2.default;
window.templejt = _templejt2.default;exports.default = _templejt2.default;

},{"./render":11,"./templejt":12}],8:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _makeFragment = require("./make-fragment");var _makeFragment2 = _interopRequireDefault(_makeFragment);
var _makeElement = require("./make-element");var _makeElement2 = _interopRequireDefault(_makeElement);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

makeDOM = function makeDOM(str) {
  var fragment = (0, _makeFragment2.default)();
  var placeholder = (0, _makeElement2.default)("div");
  placeholder.innerHTML = str;
  var current = void 0;

  while (current = placeholder.firstChild) {
    fragment.appendChild(current);
  }

  return fragment;
};

},{"./make-element":9,"./make-fragment":10}],9:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = makeElement = function makeElement(tag) {return document.createElement(tag);};

},{}],10:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = makeFragment = function makeFragment() {return document.createDocumentFragment();};

},{}],11:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _is = require("./is");exports.default =

render = function render(node, target) {
  if ((0, _is.isString)(target))
  target.document.querySelector(target);
  target.appendChild(node);
};

},{"./is":6}],12:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _is = require("./is");
var _makeElement = require("./make-element");var _makeElement2 = _interopRequireDefault(_makeElement);
var _getAllNodes = require("./get-all-nodes");var _getAllNodes2 = _interopRequireDefault(_getAllNodes);
var _findIfConditions = require("./find-if-conditions");var _findIfConditions2 = _interopRequireDefault(_findIfConditions);
var _findLoops = require("./find-loops");var _findLoops2 = _interopRequireDefault(_findLoops);
var _interpolate = require("./interpolate");var _interpolate2 = _interopRequireDefault(_interpolate);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

templejt = function templejt(str, data) {
  var fragment = (0, _makeElement2.default)("div");
  fragment.innerHTML = str;
  var allNodes = (0, _getAllNodes2.default)(fragment);
  var ifConditions = (0, _findIfConditions2.default)(allNodes);
  var loops = (0, _findLoops2.default)(allNodes);

  if (ifConditions.length) {
    ifConditions.forEach(function (node) {
      var prop = data[node.getAttribute("data-if")];

      if ((0, _is.isFunction)(prop)) {
        prop = prop();
      }

      node.style.display = !!prop ? "" : "none";
    });
  }

  if (loops.length) {
    loops.forEach(function (node) {
      var template = node.innerHTML;
      node.innerHTML = "";
      var attribute =
      node.getAttribute("data-for") ||
      node.getAttribute("data-context");


      var prop = data[attribute];
      node.appendChild((0, _interpolate2.default)(innerHTML, prop));
    });
  }

  return (0, _interpolate2.default)(fragment.innerHTML, data);
};

},{"./find-if-conditions":2,"./find-loops":3,"./get-all-nodes":4,"./interpolate":5,"./is":6,"./make-element":9}]},{},[7]);

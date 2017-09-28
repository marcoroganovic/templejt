(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = findIfConditions = function findIfConditions(nodes) {return nodes.filter(function (node) {return node.hasAttribute("data-if");});};

},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = findLoops = function findLoops(nodes) {
  return nodes.filter(function (node) {return node.hasAttribute("data-for") || node.hasAttribute("data-context");});
};

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = getAllNodes = function getAllNodes(dom) {return Array.from(dom.querySelectorAll("*"));};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _templejt = require("./templejt");var _templejt2 = _interopRequireDefault(_templejt);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = _templejt2.default;

},{"./templejt":7}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = makeElement = function makeElement(tag) {return document.createElement(tag);};

},{}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _makeElement = require("./make-element");var _makeElement2 = _interopRequireDefault(_makeElement);
var _getAllNodes = require("./get-all-nodes");var _getAllNodes2 = _interopRequireDefault(_getAllNodes);
var _findIfConditions = require("./find-if-conditions");var _findIfConditions2 = _interopRequireDefault(_findIfConditions);
var _findLoops = require("./find-loops");var _findLoops2 = _interopRequireDefault(_findLoops);
var _is = require("./is");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

templejt = function templejt(str, data) {
  var fragment = (0, _makeElement2.default)("div").innerHTML = str;
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
      node.appendChild(interpolate(innerHTML, prop));
    });
  }

  return interpolate(fragment.innerHTML, data);
};

},{"./find-if-conditions":1,"./find-loops":2,"./get-all-nodes":3,"./is":4,"./make-element":6}]},{},[5]);

'use strict';

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, '__esModule', {
  value: true
});

var deepEqual = require('fast-deep-equal');

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var deepEqual__default = /*#__PURE__*/_interopDefaultLegacy(deepEqual);

var arrNextElm = function arrNextElm(arr, elm) {
  var point = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return arrShiftElm(arr, elm, point);
};

var arrPrevElm = function arrPrevElm(arr, elm) {
  var point = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return arrShiftElm(arr, elm, -point);
};

var arrShiftElm = function arrShiftElm(arr, elm, point) {
  var nextidx = arr.findIndex(function (el) {
    return deepEqual__default["default"](el, elm);
  }) + point;
  var lastidx = arr.length - 1;
  nextidx = nextidx > lastidx ? 0 : nextidx < 0 ? lastidx : nextidx;
  return arr[nextidx];
};

exports.arrNextElm = arrNextElm;
exports.arrPrevElm = arrPrevElm;

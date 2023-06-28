import deepEqual from 'fast-deep-equal';

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
    return deepEqual(el, elm);
  }) + point;
  var lastidx = arr.length - 1;
  nextidx = nextidx > lastidx ? 0 : nextidx < 0 ? lastidx : nextidx;
  return arr[nextidx];
};

export { arrNextElm, arrPrevElm };

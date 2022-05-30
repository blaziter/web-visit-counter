/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var count = 0;
chrome.tabs.onActivated.addListener( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(activeInfo) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*chrome.storage.sync.clear(() => {
              console.log('Everything was removed');
            });*/
            getCurrentTab();
            /*const all = await chrome.storage.sync.get();
            for (const [key, val] of Object.entries(all)) {
              console.log(key + ' ' + val)
            }*/

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

var getCurrentTab = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            queryOptions = {
              active: true,
              currentWindow: true
            };
            _context2.next = 3;
            return chrome.tabs.query(queryOptions);

          case 3:
            _yield$chrome$tabs$qu = _context2.sent;
            _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
            tab = _yield$chrome$tabs$qu2[0];
            page = tab.url.split('/')[2];
            if (!getCount(page)) setCount(page, 0);
            setCount(page, count);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCurrentTab() {
    return _ref2.apply(this, arguments);
  };
}();

var setCount = function setCount(key, value) {
  chrome.storage.sync.set(_defineProperty({}, key, value), function () {
    if (chrome.runtime.lastError) console.log('Error setting');
  });
};

var getCount = function getCount(key) {
  chrome.storage.sync.get([key], function (result) {
    if (chrome.runtime.lastError) console.log('Error getting');
    count = 1 + result[key];
  });
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBLElBQUlBLEtBQUssR0FBRyxDQUFaO0FBRUFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxXQUFaLENBQXdCQyxXQUF4QjtFQUFBLHNFQUFvQyxpQkFBT0MsVUFBUDtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQ2xDO0FBQ0Y7QUFDQTtZQUNFQyxhQUFhO1lBQ2I7QUFDRjtBQUNBO0FBQ0E7O1VBUm9DO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQXBDOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQVdBLElBQU1BLGFBQWE7RUFBQSx1RUFBRztJQUFBOztJQUFBO01BQUE7UUFBQTtVQUFBO1lBQ2hCQyxZQURnQixHQUNEO2NBQUVDLE1BQU0sRUFBRSxJQUFWO2NBQWdCQyxhQUFhLEVBQUU7WUFBL0IsQ0FEQztZQUFBO1lBQUEsT0FFRlIsTUFBTSxDQUFDQyxJQUFQLENBQVlRLEtBQVosQ0FBa0JILFlBQWxCLENBRkU7O1VBQUE7WUFBQTtZQUFBO1lBRWZJLEdBRmU7WUFHcEJDLElBQUksR0FBR0QsR0FBRyxDQUFDRSxHQUFKLENBQVFDLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVA7WUFDQSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0gsSUFBRCxDQUFiLEVBQXFCSSxRQUFRLENBQUNKLElBQUQsRUFBTyxDQUFQLENBQVI7WUFDckJJLFFBQVEsQ0FBQ0osSUFBRCxFQUFPWixLQUFQLENBQVI7O1VBTG9CO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQUg7O0VBQUEsZ0JBQWJNLGFBQWE7SUFBQTtFQUFBO0FBQUEsR0FBbkI7O0FBUUEsSUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0VBQy9CakIsTUFBTSxDQUFDa0IsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixxQkFBMkJKLEdBQTNCLEVBQWlDQyxLQUFqQyxHQUEwQyxZQUFNO0lBQzlDLElBQUlqQixNQUFNLENBQUNxQixPQUFQLENBQWVDLFNBQW5CLEVBQ0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7RUFDSCxDQUhEO0FBSUQsQ0FMRDs7QUFPQSxJQUFNVixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRSxHQUFELEVBQVM7RUFDeEJoQixNQUFNLENBQUNrQixPQUFQLENBQWVDLElBQWYsQ0FBb0JNLEdBQXBCLENBQXdCLENBQUNULEdBQUQsQ0FBeEIsRUFBK0IsVUFBQ1UsTUFBRCxFQUFZO0lBQ3pDLElBQUkxQixNQUFNLENBQUNxQixPQUFQLENBQWVDLFNBQW5CLEVBQ0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7SUFFRnpCLEtBQUssR0FBRyxJQUFJMkIsTUFBTSxDQUFDVixHQUFELENBQWxCO0VBQ0QsQ0FMRDtBQU1ELENBUEQsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi12aXNpdC1jb3VudGVyLy4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvdW50ID0gMDtcclxuXHJcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFzeW5jIChhY3RpdmVJbmZvKSA9PiB7XHJcbiAgLypjaHJvbWUuc3RvcmFnZS5zeW5jLmNsZWFyKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdFdmVyeXRoaW5nIHdhcyByZW1vdmVkJyk7XHJcbiAgfSk7Ki9cclxuICBnZXRDdXJyZW50VGFiKCk7XHJcbiAgLypjb25zdCBhbGwgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhhbGwpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhrZXkgKyAnICcgKyB2YWwpXHJcbiAgfSovXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0Q3VycmVudFRhYiA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfTtcclxuICBsZXQgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpO1xyXG4gIHBhZ2UgPSB0YWIudXJsLnNwbGl0KCcvJylbMl07XHJcbiAgaWYgKCFnZXRDb3VudChwYWdlKSkgc2V0Q291bnQocGFnZSwgMCk7XHJcbiAgc2V0Q291bnQocGFnZSwgY291bnQpO1xyXG59XHJcblxyXG5jb25zdCBzZXRDb3VudCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBba2V5XTogdmFsdWUgfSwgKCkgPT4ge1xyXG4gICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcilcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNldHRpbmcnKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgZ2V0Q291bnQgPSAoa2V5KSA9PiB7XHJcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIChyZXN1bHQpID0+IHtcclxuICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nJyk7XHJcblxyXG4gICAgY291bnQgPSAxICsgcmVzdWx0W2tleV07XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvdW50IiwiY2hyb21lIiwidGFicyIsIm9uQWN0aXZhdGVkIiwiYWRkTGlzdGVuZXIiLCJhY3RpdmVJbmZvIiwiZ2V0Q3VycmVudFRhYiIsInF1ZXJ5T3B0aW9ucyIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJxdWVyeSIsInRhYiIsInBhZ2UiLCJ1cmwiLCJzcGxpdCIsImdldENvdW50Iiwic2V0Q291bnQiLCJrZXkiLCJ2YWx1ZSIsInN0b3JhZ2UiLCJzeW5jIiwic2V0IiwicnVudGltZSIsImxhc3RFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9
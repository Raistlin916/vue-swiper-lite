'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var extend = Object.assign.bind(Object);

function EventEmitter() {
  this.__events = {};
}
EventEmitter.prototype = {
  on: function on(name, cb) {
    this.__events[name] || (this.__events[name] = []);
    this.__events[name].push(cb);
    return this;
  },
  emit: function emit(name) {
    var arr = this.__events[name];
    var argus = Array.prototype.slice.call(arguments, 1);
    var self = this;
    if (arr) {
      arr.forEach(function (cb) {
        cb.apply(self, argus);
      });
    }
  },
  removeListener: function removeListener(name, fn) {
    if (this.__events[name] == undefined) {
      return;
    }
    var index = void 0;
    if (fn) {
      index = this.__events[name].indexOf(fn);
      if (index > 0) {
        this.__events[name].splice(index, 1);
      }
    } else {
      delete this.__events[name];
    }
  }
};

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
  return window.setTimeout(callback, 1000 / 60);
};

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msRequestAnimationFrame || function (id) {
  clearTimeout(id);
};

var bindEvents = function bindEvents(elem, eventNames, fn) {
  eventNames = eventNames.split(/\s+/);
  eventNames.forEach(function (eventName) {
    return elem.addEventListener(eventName, fn);
  });
};

var removeEvents = function removeEvents(elem, eventNames, fn) {
  eventNames = eventNames.split(/\s+/);
  eventNames.forEach(function (eventName) {
    return elem.removeEventListener(eventName, fn);
  });
};

exports.extend = extend;
exports.EventEmitter = EventEmitter;
exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.bindEvents = bindEvents;
exports.removeEvents = removeEvents;
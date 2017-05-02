'use strict';

var extend = Object.assign.bind(Object)

function EventEmitter() {
  this.__events = {};
}
EventEmitter.prototype = {
  on: function(name, cb) {
    this.__events[name] || (this.__events[name] = []);
    this.__events[name].push(cb);
    return this;
  },
  emit: function(name) {
    var arr = this.__events[name];
    var argus = Array.prototype.slice.call(arguments, 1);
    var self = this;
    if (arr) {
      arr.forEach(function(cb) {
        cb.apply(self, argus);
      })
    }
  },
  removeListener: function(name, fn) {
    if (this.__events[name] == undefined) {
      return;
    }
    let index;
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

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
              function(callback, element) {
                return window.setTimeout(callback, 1000 / 60);
              };

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame || window.msRequestAnimationFrame ||
              function(id) {
                clearTimeout(id);
              };

const bindEvents = (elem, eventNames, fn) => {
  eventNames = eventNames.split(/\s+/)
  eventNames.forEach(eventName => elem.addEventListener(eventName, fn))
}

const removeEvents = (elem, eventNames, fn) => {
  eventNames = eventNames.split(/\s+/)
  eventNames.forEach(eventName => elem.removeEventListener(eventName, fn))
}

export {
  extend,
  EventEmitter,
  requestAnimationFrame,
  cancelAnimationFrame,
  bindEvents,
  removeEvents
};


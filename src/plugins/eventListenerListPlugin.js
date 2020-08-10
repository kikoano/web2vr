// https://gist.github.com/stringparser/a3b0555fd915138a0ed3 edited version from DOM2AFrame
;[Element].forEach(function (self) {

  //self.prototype.eventListenerList = {}; // shared STATIC object across all instances... NOT what we want
  self.prototype._addEventListener = self.prototype.addEventListener;
  self.prototype.addEventListener = function (type, handle, useCapture) {

    if (!this.eventListenerList)
      this.eventListenerList = {};

    useCapture = useCapture === void 0 ? false : useCapture;
    var node = this;

    node._addEventListener(type, handle, useCapture);
    if (!node.eventListenerList[type]) {
      node.eventListenerList[type] = [];
    }

    node.eventListenerList[type].push({
      type: type,
      handle: handle,
      useCapture: useCapture,
      remove: function () {
        node.removeEventListener(
          this.type, this.handle, this.useCapture
        );
        return node.eventListenerList[type];
      }
    });

    if (type != "eventListenerAdded" && type != "eventListenerRemoved") {
      let eventDetail = {
        'type': type,
        'handle': handle,
        'useCapture': useCapture
      };
      let addedEvent = new CustomEvent("eventListenerAdded", { detail: eventDetail });
      this.dispatchEvent(addedEvent);
    }
  };


  self.prototype._removeEventListener = self.prototype.removeEventListener;
  self.prototype.removeEventListener = function (type, handle, useCapture) {

    if (!this.eventListenerList)
      this.eventListenerList = {};

    var node = this;
    if (!node.eventListenerList[type])
      return;

    node._removeEventListener(type, handle, useCapture);
    node.eventListenerList[type] = node.eventListenerList[type].filter(
      function (listener) {
        return listener && listener.handle && handle && (listener.handle.toString() !== handle.toString()); // native event listener API supports empty handles/listeners, but .toString obviously doesn't
      }
    )

    if (node.eventListenerList[type].length === 0) {
      delete node.eventListenerList[type];
    }


    if (type != "eventListenerAdded" && type != "eventListenerRemoved") {
      let eventDetail = {
        'type': type,
        'handle': handle,
        'useCapture': useCapture
      };
      let removedEvent = new CustomEvent("eventListenerRemoved", { detail: eventDetail });
      this.dispatchEvent(removedEvent);
    }
  }
});
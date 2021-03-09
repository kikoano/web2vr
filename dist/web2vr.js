(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("aframe"));
	else if(typeof define === 'function' && define.amd)
		define(["aframe"], factory);
	else if(typeof exports === 'object')
		exports["Web2VR"] = factory(require("aframe"));
	else
		root["Web2VR"] = factory(root["aframe"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_aframe__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web2vr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aframe-gif-shader/dist/aframe-gif-shader.js":
/*!******************************************************************!*\
  !*** ./node_modules/aframe-gif-shader/dist/aframe-gif-shader.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _gifsparser = __webpack_require__(1);

	if (typeof AFRAME === 'undefined') {
	  throw 'Component attempted to register before AFRAME was available.';
	}

	/* get util from AFRAME */
	var parseUrl = AFRAME.utils.srcLoader.parseUrl;
	var debug = AFRAME.utils.debug;
	// debug.enable('shader:gif:*')

	debug.enable('shader:gif:warn');
	var warn = debug('shader:gif:warn');
	var log = debug('shader:gif:debug');

	/* store data so that you won't load same data */
	var gifData = {};

	/* create error message */
	function createError(err, src) {
	  return { status: 'error', src: src, message: err, timestamp: Date.now() };
	}

	AFRAME.registerShader('gif', {

	  /**
	   * For material component:
	   * @see https://github.com/aframevr/aframe/blob/60d198ef8e2bfbc57a13511ae5fca7b62e01691b/src/components/material.js
	   * For example of `registerShader`:
	   * @see https://github.com/aframevr/aframe/blob/41a50cd5ac65e462120ecc2e5091f5daefe3bd1e/src/shaders/flat.js
	   * For MeshBasicMaterial
	   * @see http://threejs.org/docs/#Reference/Materials/MeshBasicMaterial
	   */

	  schema: {

	    /* For material */
	    color: { type: 'color' },
	    fog: { default: true },

	    /* For texuture */
	    src: { default: null },
	    autoplay: { default: true }

	  },

	  /**
	   * Initialize material. Called once.
	   * @protected
	   */
	  init: function init(data) {
	    log('init', data);
	    log(this.el.components);
	    this.__cnv = document.createElement('canvas');
	    this.__cnv.width = 2;
	    this.__cnv.height = 2;
	    this.__ctx = this.__cnv.getContext('2d');
	    this.__texture = new THREE.Texture(this.__cnv); //renders straight from a canvas
	    this.__material = {};
	    this.__reset();
	    this.material = new THREE.MeshBasicMaterial({ map: this.__texture });
	    this.el.sceneEl.addBehavior(this);
	    this.__addPublicFunctions();
	    return this.material;
	  },


	  /**
	   * Update or create material.
	   * @param {object|null} oldData
	   */
	  update: function update(oldData) {
	    log('update', oldData);
	    this.__updateMaterial(oldData);
	    this.__updateTexture(oldData);
	    return this.material;
	  },


	  /**
	   * Called on each scene tick.
	   * @protected
	   */
	  tick: function tick(t) {
	    if (!this.__frames || this.paused()) return;
	    if (Date.now() - this.__startTime >= this.__nextFrameTime) {
	      this.nextFrame();
	    }
	  },


	  /*================================
	  =            material            =
	  ================================*/

	  /**
	   * Updating existing material.
	   * @param {object} data - Material component data.
	   */
	  __updateMaterial: function __updateMaterial(data) {
	    var material = this.material;

	    var newData = this.__getMaterialData(data);
	    Object.keys(newData).forEach(function (key) {
	      material[key] = newData[key];
	    });
	  },


	  /**
	   * Builds and normalize material data, normalizing stuff along the way.
	   * @param {Object} data - Material data.
	   * @return {Object} data - Processed material data.
	   */
	  __getMaterialData: function __getMaterialData(data) {
	    return {
	      fog: data.fog,
	      color: new THREE.Color(data.color)
	    };
	  },


	  /*==============================
	  =            texure            =
	  ==============================*/

	  /**
	   * set texure
	   * @private
	   * @param {Object} data
	   * @property {string} status - success / error
	   * @property {string} src - src url
	   * @property {array} times - array of time length of each image
	   * @property {number} cnt - total counts of gif images
	   * @property {array} frames - array of each image
	   * @property {Date} timestamp - created at the texure
	   */

	  __setTexure: function __setTexure(data) {
	    log('__setTexure', data);
	    if (data.status === 'error') {
	      warn('Error: ' + data.message + '\nsrc: ' + data.src);
	      this.__reset();
	    } else if (data.status === 'success' && data.src !== this.__textureSrc) {
	      this.__reset();
	      /* Texture added or changed */
	      this.__ready(data);
	    }
	  },


	  /**
	   * Update or create texure.
	   * @param {Object} data - Material component data.
	   */
	  __updateTexture: function __updateTexture(data) {
	    var src = data.src;
	    var autoplay = data.autoplay;

	    /* autoplay */

	    if (typeof autoplay === 'boolean') {
	      this.__autoplay = autoplay;
	    } else if (typeof autoplay === 'undefined') {
	      this.__autoplay = true;
	    }
	    if (this.__autoplay && this.__frames) {
	      this.play();
	    }

	    /* src */
	    if (src) {
	      this.__validateSrc(src, this.__setTexure.bind(this));
	    } else {
	      /* Texture removed */
	      this.__reset();
	    }
	  },


	  /*=============================================
	  =            varidation for texure            =
	  =============================================*/

	  __validateSrc: function __validateSrc(src, cb) {

	    /* check if src is a url */
	    var url = parseUrl(src);
	    if (url) {
	      this.__getImageSrc(url, cb);
	      return;
	    }

	    var message = void 0;

	    /* check if src is a query selector */
	    var el = this.__validateAndGetQuerySelector(src);
	    if (!el || (typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object') {
	      return;
	    }
	    if (el.error) {
	      message = el.error;
	    } else {
	      var tagName = el.tagName.toLowerCase();
	      if (tagName === 'video') {
	        src = el.src;
	        message = 'For video, please use `aframe-video-shader`';
	      } else if (tagName === 'img') {
	        this.__getImageSrc(el.src, cb);
	        return;
	      } else {
	        message = 'For <' + tagName + '> element, please use `aframe-html-shader`';
	      }
	    }

	    /* if there is message, create error data */
	    if (message) {
	      (function () {
	        var srcData = gifData[src];
	        var errData = createError(message, src);
	        /* callbacks */
	        if (srcData && srcData.callbacks) {
	          srcData.callbacks.forEach(function (cb) {
	            return cb(errData);
	          });
	        } else {
	          cb(errData);
	        }
	        /* overwrite */
	        gifData[src] = errData;
	      })();
	    }
	  },


	  /**
	   * Validate src is a valid image url
	   * @param  {string} src - url that will be tested
	   * @param  {function} cb - callback with the test result
	   */
	  __getImageSrc: function __getImageSrc(src, cb) {
	    var _this = this;

	    /* if src is same as previous, ignore this */
	    if (src === this.__textureSrc) {
	      return;
	    }

	    /* check if we already get the srcData */
	    var srcData = gifData[src];
	    if (!srcData || !srcData.callbacks) {
	      /* create callback */
	      srcData = gifData[src] = { callbacks: [] };
	      srcData.callbacks.push(cb);
	    } else if (srcData.src) {
	      cb(srcData);
	      return;
	    } else if (srcData.callbacks) {
	      /* add callback */
	      srcData.callbacks.push(cb);
	      return;
	    }
	    var tester = new Image();
	    tester.crossOrigin = 'Anonymous';
	    tester.addEventListener('load', function (e) {
	      /* check if it is gif */
	      _this.__getUnit8Array(src, function (arr) {
	        if (!arr) {
	          onError('This is not gif. Please use `shader:flat` instead');
	          return;
	        }
	        /* parse data */
	        (0, _gifsparser.parseGIF)(arr, function (times, cnt, frames) {
	          /* store data */
	          var newData = { status: 'success', src: src, times: times, cnt: cnt, frames: frames, timestamp: Date.now() };
	          /* callbacks */
	          if (srcData.callbacks) {
	            srcData.callbacks.forEach(function (cb) {
	              return cb(newData);
	            });
	            /* overwrite */
	            gifData[src] = newData;
	          }
	        }, function (err) {
	          return onError(err);
	        });
	      });
	    });
	    tester.addEventListener('error', function (e) {
	      return onError('Could be the following issue\n - Not Image\n - Not Found\n - Server Error\n - Cross-Origin Issue');
	    });
	    function onError(message) {
	      /* create error data */
	      var errData = createError(message, src);
	      /* callbacks */
	      if (srcData.callbacks) {
	        srcData.callbacks.forEach(function (cb) {
	          return cb(errData);
	        });
	        /* overwrite */
	        gifData[src] = errData;
	      }
	    }
	    tester.src = src;
	  },


	  /**
	   *
	   * get mine type
	   *
	   */
	  __getUnit8Array: function __getUnit8Array(src, cb) {
	    if (typeof cb !== 'function') {
	      return;
	    }

	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', src);
	    xhr.responseType = 'arraybuffer';
	    xhr.addEventListener('load', function (e) {
	      var uint8Array = new Uint8Array(e.target.response);
	      var arr = uint8Array.subarray(0, 4);
	      // const header = arr.map(value => value.toString(16)).join('')
	      var header = '';
	      for (var i = 0; i < arr.length; i++) {
	        header += arr[i].toString(16);
	      }
	      if (header === '47494638') {
	        cb(uint8Array);
	      } else {
	        cb();
	      }
	    });
	    xhr.addEventListener('error', function (e) {
	      log(e);
	      cb();
	    });
	    xhr.send();
	  },


	  /**
	   * Query and validate a query selector,
	   *
	   * @param  {string} selector - DOM selector.
	   * @return {object} Selected DOM element | error message object.
	   */
	  __validateAndGetQuerySelector: function __validateAndGetQuerySelector(selector) {
	    try {
	      var el = document.querySelector(selector);
	      if (!el) {
	        return { error: 'No element was found matching the selector' };
	      }
	      return el;
	    } catch (e) {
	      // Capture exception if it's not a valid selector.
	      return { error: 'no valid selector' };
	    }
	  },


	  /*================================
	  =            playback            =
	  ================================*/

	  /**
	   * add public functions
	   * @private
	   */
	  __addPublicFunctions: function __addPublicFunctions() {
	    this.el.gif = {
	      play: this.play.bind(this),
	      pause: this.pause.bind(this),
	      togglePlayback: this.togglePlayback.bind(this),
	      paused: this.paused.bind(this),
	      nextFrame: this.nextFrame.bind(this)
	    };
	  },


	  /**
	   * Pause gif
	   * @public
	   */
	  pause: function pause() {
	    log('pause');
	    this.__paused = true;
	  },


	  /**
	   * Play gif
	   * @public
	   */
	  play: function play() {
	    log('play');
	    this.__paused = false;
	  },


	  /**
	   * Toggle playback. play if paused and pause if played.
	   * @public
	   */

	  togglePlayback: function togglePlayback() {

	    if (this.paused()) {
	      this.play();
	    } else {
	      this.pause();
	    }
	  },


	  /**
	   * Return if the playback is paused.
	   * @public
	   * @return {boolean}
	   */
	  paused: function paused() {
	    return this.__paused;
	  },


	  /**
	   * Go to next frame
	   * @public
	   */
	  nextFrame: function nextFrame() {
		this.__clearCanvas();
	    this.__draw();

	    /* update next frame time */
	    while (Date.now() - this.__startTime >= this.__nextFrameTime) {

	      this.__nextFrameTime += this.__delayTimes[this.__frameIdx++];
	      if ((this.__infinity || this.__loopCnt) && this.__frameCnt <= this.__frameIdx) {
	        /* go back to the first */
	        this.__frameIdx = 0;
	      }
	    }
	  },


	  /*==============================
	   =            canvas            =
	   ==============================*/

	  /**
	   * clear canvas
	   * @private
	   */
	  __clearCanvas: function __clearCanvas() {
	    this.__ctx.clearRect(0, 0, this.__width, this.__height);
	    this.__texture.needsUpdate = true;
	  },


	  /**
	   * draw
	   * @private
	   */
	  __draw: function __draw() {
	    this.__ctx.drawImage(this.__frames[this.__frameIdx], 0, 0, this.__width, this.__height);
	    this.__texture.needsUpdate = true;
	  },


	  /*============================
	  =            ready            =
	  ============================*/

	  /**
	   * setup gif animation and play if autoplay is true
	   * @private
	   * @property {string} src - src url
	   * @param {array} times - array of time length of each image
	   * @param {number} cnt - total counts of gif images
	   * @param {array} frames - array of each image
	   */
	  __ready: function __ready(_ref) {
	    var src = _ref.src;
	    var times = _ref.times;
	    var cnt = _ref.cnt;
	    var frames = _ref.frames;

	    log('__ready');
	    this.__textureSrc = src;
	    this.__delayTimes = times;
	    cnt ? this.__loopCnt = cnt : this.__infinity = true;
	    this.__frames = frames;
	    this.__frameCnt = times.length;
	    this.__startTime = Date.now();
	    this.__width = THREE.Math.floorPowerOfTwo(frames[0].width);
	    this.__height = THREE.Math.floorPowerOfTwo(frames[0].height);
	    this.__cnv.width = this.__width;
	    this.__cnv.height = this.__height;
	    this.__draw();
	    if (this.__autoplay) {
	      this.play();
	    } else {
	      this.pause();
	    }
	  },


	  /*=============================
	  =            reset            =
	  =============================*/

	  /**
	   * @private
	   */

	  __reset: function __reset() {
	    this.pause();
	    this.__clearCanvas();
	    this.__startTime = 0;
	    this.__nextFrameTime = 0;
	    this.__frameIdx = 0;
	    this.__frameCnt = 0;
	    this.__delayTimes = null;
	    this.__infinity = false;
	    this.__loopCnt = 0;
	    this.__frames = null;
	    this.__textureSrc = null;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 
	 * Gif parser by @gtk2k
	 * https://github.com/gtk2k/gtk2k.github.io/tree/master/animation_gif
	 *
	 */

	exports.parseGIF = function (gif, successCB, errorCB) {

	  var pos = 0;
	  var delayTimes = [];
	  var loadCnt = 0;
	  var graphicControl = null;
	  var imageData = null;
	  var frames = [];
	  var loopCnt = 0;
	  if (gif[0] === 0x47 && gif[1] === 0x49 && gif[2] === 0x46 && // 'GIF'
	  gif[3] === 0x38 && gif[4] === 0x39 && gif[5] === 0x61) {
	    // '89a'
	    pos += 13 + +!!(gif[10] & 0x80) * Math.pow(2, (gif[10] & 0x07) + 1) * 3;
	    var gifHeader = gif.subarray(0, pos);
	    while (gif[pos] && gif[pos] !== 0x3b) {
	      var offset = pos,
	          blockId = gif[pos];
	      if (blockId === 0x21) {
	        var label = gif[++pos];
	        if ([0x01, 0xfe, 0xf9, 0xff].indexOf(label) !== -1) {
	          label === 0xf9 && delayTimes.push((gif[pos + 3] + (gif[pos + 4] << 8)) * 10);
	          label === 0xff && (loopCnt = gif[pos + 15] + (gif[pos + 16] << 8));
	          while (gif[++pos]) {
	            pos += gif[pos];
	          }label === 0xf9 && (graphicControl = gif.subarray(offset, pos + 1));
	        } else {
	          errorCB && errorCB('parseGIF: unknown label');break;
	        }
	      } else if (blockId === 0x2c) {
	        pos += 9;
	        pos += 1 + +!!(gif[pos] & 0x80) * (Math.pow(2, (gif[pos] & 0x07) + 1) * 3);
	        while (gif[++pos]) {
	          pos += gif[pos];
	        }var imageData = gif.subarray(offset, pos + 1);
	        frames.push(URL.createObjectURL(new Blob([gifHeader, graphicControl, imageData])));
	      } else {
	        errorCB && errorCB('parseGIF: unknown blockId');break;
	      }
	      pos++;
	    }
	  } else {
	    errorCB && errorCB('parseGIF: no GIF89a');
	  }
	  if (frames.length) {

	    var cnv = document.createElement('canvas');
	    var loadImg = function loadImg() {
	      frames.forEach(function (src, i) {
	        var img = new Image();
	        img.onload = function (e, i) {
	          if (i === 0) {
	            cnv.width = img.width;
	            cnv.height = img.height;
	          }
	          loadCnt++;
	          frames[i] = this;
	          if (loadCnt === frames.length) {
	            loadCnt = 0;
	            imageFix(1);
	          }
	        }.bind(img, null, i);
	        img.src = src;
	      });
	    };
	    var imageFix = function imageFix(i) {
	      var img = new Image();
	      img.onload = function (e, i) {
	        loadCnt++;
	        frames[i] = this;
	        if (loadCnt === frames.length) {
	          cnv = null;
	          successCB && successCB(delayTimes, loopCnt, frames);
	        } else {
	          imageFix(++i);
	        }
	      }.bind(img);
	      img.src = cnv.toDataURL('image/gif');
	    };
	    loadImg();
	  }
	};

/***/ }
/******/ ]);


/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/super-hands/index.js":
/*!*******************************************!*\
  !*** ./node_modules/super-hands/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

__webpack_require__(/*! ./systems/super-hands-system.js */ "./node_modules/super-hands/systems/super-hands-system.js")
__webpack_require__(/*! ./reaction_components/hoverable.js */ "./node_modules/super-hands/reaction_components/hoverable.js")
__webpack_require__(/*! ./reaction_components/grabbable.js */ "./node_modules/super-hands/reaction_components/grabbable.js")
__webpack_require__(/*! ./reaction_components/stretchable.js */ "./node_modules/super-hands/reaction_components/stretchable.js")
__webpack_require__(/*! ./reaction_components/drag-droppable.js */ "./node_modules/super-hands/reaction_components/drag-droppable.js")
__webpack_require__(/*! ./reaction_components/draggable.js */ "./node_modules/super-hands/reaction_components/draggable.js")
__webpack_require__(/*! ./reaction_components/droppable.js */ "./node_modules/super-hands/reaction_components/droppable.js")
__webpack_require__(/*! ./reaction_components/clickable.js */ "./node_modules/super-hands/reaction_components/clickable.js")

/**
 * Super Hands component for A-Frame.
 */
AFRAME.registerComponent('super-hands', {
  schema: {
    colliderEvent: {default: 'hit'},
    colliderEventProperty: {default: 'el'},
    colliderEndEvent: {default: 'hitend'},
    colliderEndEventProperty: {default: 'el'},
    grabStartButtons: {
      default: ['gripdown', 'trackpaddown', 'triggerdown', 'gripclose',
        'abuttondown', 'bbuttondown', 'xbuttondown', 'ybuttondown',
        'pointup', 'thumbup', 'pointingstart', 'pistolstart',
        'thumbstickdown', 'mousedown', 'touchstart']
    },
    grabEndButtons: {
      default: ['gripup', 'trackpadup', 'triggerup', 'gripopen',
        'abuttonup', 'bbuttonup', 'xbuttonup', 'ybuttonup',
        'pointdown', 'thumbdown', 'pointingend', 'pistolend',
        'thumbstickup', 'mouseup', 'touchend']
    },
    stretchStartButtons: {
      default: ['gripdown', 'trackpaddown', 'triggerdown', 'gripclose',
        'abuttondown', 'bbuttondown', 'xbuttondown', 'ybuttondown',
        'pointup', 'thumbup', 'pointingstart', 'pistolstart',
        'thumbstickdown', 'mousedown', 'touchstart']
    },
    stretchEndButtons: {
      default: ['gripup', 'trackpadup', 'triggerup', 'gripopen',
        'abuttonup', 'bbuttonup', 'xbuttonup', 'ybuttonup',
        'pointdown', 'thumbdown', 'pointingend', 'pistolend',
        'thumbstickup', 'mouseup', 'touchend']
    },
    dragDropStartButtons: {
      default: ['gripdown', 'trackpaddown', 'triggerdown', 'gripclose',
        'abuttondown', 'bbuttondown', 'xbuttondown', 'ybuttondown',
        'pointup', 'thumbup', 'pointingstart', 'pistolstart',
        'thumbstickdown', 'mousedown', 'touchstart']
    },
    dragDropEndButtons: {
      default: ['gripup', 'trackpadup', 'triggerup', 'gripopen',
        'abuttonup', 'bbuttonup', 'xbuttonup', 'ybuttonup',
        'pointdown', 'thumbdown', 'pointingend', 'pistolend',
        'thumbstickup', 'mouseup', 'touchend']
    },
    interval: { default: 0 }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    // constants
    this.HOVER_EVENT = 'hover-start'
    this.UNHOVER_EVENT = 'hover-end'
    this.GRAB_EVENT = 'grab-start'
    this.UNGRAB_EVENT = 'grab-end'
    this.STRETCH_EVENT = 'stretch-start'
    this.UNSTRETCH_EVENT = 'stretch-end'
    this.DRAG_EVENT = 'drag-start'
    this.UNDRAG_EVENT = 'drag-end'
    this.DRAGOVER_EVENT = 'dragover-start'
    this.UNDRAGOVER_EVENT = 'dragover-end'
    this.DRAGDROP_EVENT = 'drag-drop'

    // links to other systems/components
    this.otherSuperHand = null

    // state tracking - global event handlers (GEH)
    this.gehDragged = new Set()
    this.gehClicking = new Set()

    // state tracking - reaction components
    this.hoverEls = []
    this.hoverElsIntersections = []
    this.prevCheckTime = null
    this.state = new Map()
    this.dragging = false

    this.unHover = this.unHover.bind(this)
    this.unWatch = this.unWatch.bind(this)
    this.onHit = this.onHit.bind(this)
    this.onGrabStartButton = this.onGrabStartButton.bind(this)
    this.onGrabEndButton = this.onGrabEndButton.bind(this)
    this.onStretchStartButton = this.onStretchStartButton.bind(this)
    this.onStretchEndButton = this.onStretchEndButton.bind(this)
    this.onDragDropStartButton = this.onDragDropStartButton.bind(this)
    this.onDragDropEndButton = this.onDragDropEndButton.bind(this)
    this.system.registerMe(this)
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    this.unRegisterListeners(oldData)
    this.registerListeners()
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    this.system.unregisterMe(this)
    this.unRegisterListeners()
    this.hoverEls.length = 0
    if (this.state.get(this.HOVER_EVENT)) {
      this._unHover(this.state.get(this.HOVER_EVENT))
    }
    this.onGrabEndButton()
    this.onStretchEndButton()
    this.onDragDropEndButton()
  },
  tick: (function () {
    // closer objects and objects with no distance come later in list
    function sorter (a, b) {
      const aDist = a.distance == null ? -1 : a.distance
      const bDist = b.distance == null ? -1 : b.distance
      if (aDist < bDist) {
        return 1
      }
      if (bDist < aDist) {
        return -1
      }
      return 0
    }
    return function (time) {
      const data = this.data
      const prevCheckTime = this.prevCheckTime
      if (prevCheckTime && (time - prevCheckTime < data.interval)) { return }
      this.prevCheckTime = time

      let orderChanged = false
      this.hoverElsIntersections.sort(sorter)
      for (let i = 0; i < this.hoverElsIntersections.length; i++) {
        if (this.hoverEls[i] !== this.hoverElsIntersections[i].object.el) {
          orderChanged = true
          this.hoverEls[i] = this.hoverElsIntersections[i].object.el
        }
      }
      if (orderChanged) {
        this.hover()
      }
    }
  })(),
  onGrabStartButton: function (evt) {
    let carried = this.state.get(this.GRAB_EVENT)
    this.dispatchMouseEventAll('mousedown', this.el)
    this.gehClicking = new Set(this.hoverEls)
    if (!carried) {
      carried = this.findTarget(this.GRAB_EVENT, {
        hand: this.el,
        buttonEvent: evt
      })
      if (carried) {
        this.state.set(this.GRAB_EVENT, carried)
        this._unHover(carried)
      }
    }
  },
  onGrabEndButton: function (evt) {
    const clickables = this.hoverEls.filter(h => this.gehClicking.has(h))
    const grabbed = this.state.get(this.GRAB_EVENT)
    const endEvt = {hand: this.el, buttonEvent: evt}
    this.dispatchMouseEventAll('mouseup', this.el)
    for (let i = 0; i < clickables.length; i++) {
      this.dispatchMouseEvent(clickables[i], 'click', this.el)
    }
    this.gehClicking.clear()
    // check if grabbed entity accepts ungrab event
    if (grabbed && !this.emitCancelable(grabbed, this.UNGRAB_EVENT, endEvt)) {
      /* push to top of stack so a drop followed by re-grab gets the same
         target */
      this.promoteHoveredEl(this.state.get(this.GRAB_EVENT))
      this.state.delete(this.GRAB_EVENT)
      this.hover()
    }
  },
  onStretchStartButton: function (evt) {
    let stretched = this.state.get(this.STRETCH_EVENT)
    if (!stretched) {
      stretched = this.findTarget(this.STRETCH_EVENT, {
        hand: this.el,
        buttonEvent: evt
      })
      if (stretched) {
        this.state.set(this.STRETCH_EVENT, stretched)
        this._unHover(stretched)
      }
    }
  },
  onStretchEndButton: function (evt) {
    const stretched = this.state.get(this.STRETCH_EVENT)
    const endEvt = {hand: this.el, buttonEvent: evt}
    // check if end event accepted
    if (stretched &&
        !this.emitCancelable(stretched, this.UNSTRETCH_EVENT, endEvt)) {
      this.promoteHoveredEl(stretched)
      this.state.delete(this.STRETCH_EVENT)
      this.hover()
    }
  },
  onDragDropStartButton: function (evt) {
    let dragged = this.state.get(this.DRAG_EVENT)
    this.dragging = true
    if (this.hoverEls.length) {
      this.gehDragged = new Set(this.hoverEls)
      this.dispatchMouseEventAll('dragstart', this.el)
    }
    if (!dragged) {
      /* prefer carried so that a drag started after a grab will work
       with carried element rather than a currently intersected drop target.
       fall back to queue in case a drag is initiated independent
       of a grab */
      if (this.state.get(this.GRAB_EVENT) &&
          !this.emitCancelable(this.state.get(this.GRAB_EVENT), this.DRAG_EVENT,
              {hand: this.el, buttonEvent: evt})) {
        dragged = this.state.get(this.GRAB_EVENT)
      } else {
        dragged = this.findTarget(this.DRAG_EVENT, {
          hand: this.el,
          buttonEvent: evt
        })
      }
      if (dragged) {
        this.state.set(this.DRAG_EVENT, dragged)
        this._unHover(dragged)
      }
    }
  },
  onDragDropEndButton: function (evt) {
    const carried = this.state.get(this.DRAG_EVENT)
    this.dragging = false // keep _unHover() from activating another droptarget
    this.gehDragged.forEach(carried => {
      this.dispatchMouseEvent(carried, 'dragend', this.el)
      // fire event both ways for all intersected targets
      this.dispatchMouseEventAll('drop', carried, true, true)
      this.dispatchMouseEventAll('dragleave', carried, true, true)
    })
    this.gehDragged.clear()
    if (carried) {
      const ddEvt = {
        hand: this.el,
        dropped: carried,
        on: null,
        buttonEvent: evt
      }
      const endEvt = {hand: this.el, buttonEvent: evt}
      const dropTarget = this.findTarget(this.DRAGDROP_EVENT, ddEvt, true)
      if (dropTarget) {
        ddEvt.on = dropTarget
        this.emitCancelable(carried, this.DRAGDROP_EVENT, ddEvt)
        this._unHover(dropTarget)
      }
      // check if end event accepted
      if (!this.emitCancelable(carried, this.UNDRAG_EVENT, endEvt)) {
        this.promoteHoveredEl(carried)
        this.state.delete(this.DRAG_EVENT)
        this.hover()
      }
    }
  },
  processHitEl: function (hitEl, intersection) {
    const dist = intersection && intersection.distance
    const sects = this.hoverElsIntersections
    const hoverEls = this.hoverEls
    const hitElIndex = this.hoverEls.indexOf(hitEl)
    let hoverNeedsUpdate = false
    if (hitElIndex === -1) {
      hoverNeedsUpdate = true
      // insert in order of distance when available
      if (dist != null) {
        let i = 0
        while (i < sects.length && dist < sects[i].distance) { i++ }
        hoverEls.splice(i, 0, hitEl)
        sects.splice(i, 0, intersection)
      } else {
        hoverEls.push(hitEl)
        sects.push({ object: { el: hitEl } })
      }
      this.dispatchMouseEvent(hitEl, 'mouseover', this.el)
      if (this.dragging && this.gehDragged.size) {
        // events on targets and on dragged
        this.gehDragged.forEach(dragged => {
          this.dispatchMouseEventAll('dragenter', dragged, true, true)
        })
      }
    }
    return hoverNeedsUpdate
  },
  onHit: function (evt) {
    const hitEl = evt.detail[this.data.colliderEventProperty]
    let hoverNeedsUpdate = 0
    if (!hitEl) { return }
    if (Array.isArray(hitEl)) {
      for (let i = 0, sect; i < hitEl.length; i++) {
        sect = evt.detail.intersections && evt.detail.intersections[i]
        hoverNeedsUpdate += this.processHitEl(hitEl[i], sect)
      }
    } else {
      hoverNeedsUpdate += this.processHitEl(hitEl, null)
    }
    if (hoverNeedsUpdate) { this.hover() }
  },
  /* search collided entities for target to hover/dragover */
  hover: function () {
    var hvrevt, hoverEl
    // end previous hover
    if (this.state.has(this.HOVER_EVENT)) {
      this._unHover(this.state.get(this.HOVER_EVENT), true)
    }
    if (this.state.has(this.DRAGOVER_EVENT)) {
      this._unHover(this.state.get(this.DRAGOVER_EVENT), true)
    }
    if (this.dragging && this.state.get(this.DRAG_EVENT)) {
      hvrevt = {
        hand: this.el,
        hovered: hoverEl,
        carried: this.state.get(this.DRAG_EVENT)
      }
      hoverEl = this.findTarget(this.DRAGOVER_EVENT, hvrevt, true)
      if (hoverEl) {
        this.emitCancelable(this.state.get(this.DRAG_EVENT), this.DRAGOVER_EVENT, hvrevt)
        this.state.set(this.DRAGOVER_EVENT, hoverEl)
      }
    }
    // fallback to hover if not dragging or dragover wasn't successful
    if (!this.state.has(this.DRAGOVER_EVENT)) {
      hoverEl = this.findTarget(this.HOVER_EVENT, { hand: this.el }, true)
      if (hoverEl) {
        this.state.set(this.HOVER_EVENT, hoverEl)
      }
    }
  },
  /* called when controller moves out of collision range of entity */
  unHover: function (evt) {
    const clearedEls = evt.detail[this.data.colliderEndEventProperty]
    if (clearedEls) {
      if (Array.isArray(clearedEls)) {
        clearedEls.forEach(el => this._unHover(el))
      } else {
        this._unHover(clearedEls)
      }
    }
  },
  /* inner unHover steps needed regardless of cause of unHover */
  _unHover: function (el, skipNextHover) {
    let unHovered = false
    let evt
    if (el === this.state.get(this.DRAGOVER_EVENT)) {
      this.state.delete(this.DRAGOVER_EVENT)
      unHovered = true
      evt = {
        hand: this.el,
        hovered: el,
        carried: this.state.get(this.DRAG_EVENT)
      }
      this.emitCancelable(el, this.UNDRAGOVER_EVENT, evt)
      if (this.state.has(this.DRAG_EVENT)) {
        this.emitCancelable(
          this.state.get(this.DRAG_EVENT),
          this.UNDRAGOVER_EVENT,
          evt
        )
      }
    }
    if (el === this.state.get(this.HOVER_EVENT)) {
      this.state.delete(this.HOVER_EVENT)
      unHovered = true
      this.emitCancelable(el, this.UNHOVER_EVENT, { hand: this.el })
    }
    // activate next target, if present
    if (unHovered && !skipNextHover) {
      this.hover()
    }
  },
  unWatch: function (evt) {
    const clearedEls = evt.detail[this.data.colliderEndEventProperty]
    if (clearedEls) {
      if (Array.isArray(clearedEls)) {
        clearedEls.forEach(el => this._unWatch(el))
      } else {
        // deprecation path: sphere-collider
        this._unWatch(clearedEls)
      }
    }
  },
  _unWatch: function (target) {
    var hoverIndex = this.hoverEls.indexOf(target)
    if (hoverIndex !== -1) {
      this.hoverEls.splice(hoverIndex, 1)
      this.hoverElsIntersections.splice(hoverIndex, 1)
    }
    this.gehDragged.forEach(dragged => {
      this.dispatchMouseEvent(target, 'dragleave', dragged)
      this.dispatchMouseEvent(dragged, 'dragleave', target)
    })
    this.dispatchMouseEvent(target, 'mouseout', this.el)
  },
  registerListeners: function () {
    this.el.addEventListener(this.data.colliderEvent, this.onHit)
    this.el.addEventListener(this.data.colliderEndEvent, this.unWatch)
    this.el.addEventListener(this.data.colliderEndEvent, this.unHover)

    // binding order to keep grabEnd from triggering dragover
    // again before dragDropEnd can delete its carried state
    this.data.grabStartButtons.forEach(b => {
      this.el.addEventListener(b, this.onGrabStartButton)
    })
    this.data.stretchStartButtons.forEach(b => {
      this.el.addEventListener(b, this.onStretchStartButton)
    })
    this.data.dragDropStartButtons.forEach(b => {
      this.el.addEventListener(b, this.onDragDropStartButton)
    })
    this.data.dragDropEndButtons.forEach(b => {
      this.el.addEventListener(b, this.onDragDropEndButton)
    })
    this.data.stretchEndButtons.forEach(b => {
      this.el.addEventListener(b, this.onStretchEndButton)
    })
    this.data.grabEndButtons.forEach(b => {
      this.el.addEventListener(b, this.onGrabEndButton)
    })
  },
  unRegisterListeners: function (data) {
    data = data || this.data
    if (Object.keys(data).length === 0) {
      // Empty object passed on initalization
      return
    }
    this.el.removeEventListener(data.colliderEvent, this.onHit)
    this.el.removeEventListener(data.colliderEndEvent, this.unHover)
    this.el.removeEventListener(data.colliderEndEvent, this.unWatch)

    data.grabStartButtons.forEach(b => {
      this.el.removeEventListener(b, this.onGrabStartButton)
    })
    data.grabEndButtons.forEach(b => {
      this.el.removeEventListener(b, this.onGrabEndButton)
    })
    data.stretchStartButtons.forEach(b => {
      this.el.removeEventListener(b, this.onStretchStartButton)
    })
    data.stretchEndButtons.forEach(b => {
      this.el.removeEventListener(b, this.onStretchEndButton)
    })
    data.dragDropStartButtons.forEach(b => {
      this.el.removeEventListener(b, this.onDragDropStartButton)
    })
    data.dragDropEndButtons.forEach(b => {
      this.el.removeEventListener(b, this.onDragDropEndButton)
    })
  },
  emitCancelable: function (target, name, detail) {
    var data, evt
    detail = detail || {}
    data = { bubbles: true, cancelable: true, detail: detail }
    data.detail.target = data.detail.target || target
    evt = new window.CustomEvent(name, data)
    return target.dispatchEvent(evt)
  },
  dispatchMouseEvent: function (target, name, relatedTarget) {
    var mEvt = new window.MouseEvent(name, { relatedTarget: relatedTarget })
    target.dispatchEvent(mEvt)
  },
  dispatchMouseEventAll: function (name, relatedTarget, filterUsed, alsoReverse) {
    let els = this.hoverEls
    if (filterUsed) {
      els = els
        .filter(el => el !== this.state.get(this.GRAB_EVENT) &&
                el !== this.state.get(this.DRAG_EVENT) &&
                el !== this.state.get(this.STRETCH_EVENT) &&
                !this.gehDragged.has(el))
    }
    if (alsoReverse) {
      for (let i = 0; i < els.length; i++) {
        this.dispatchMouseEvent(els[i], name, relatedTarget)
        this.dispatchMouseEvent(relatedTarget, name, els[i])
      }
    } else {
      for (let i = 0; i < els.length; i++) {
        this.dispatchMouseEvent(els[i], name, relatedTarget)
      }
    }
  },
  findTarget: function (evType, detail, filterUsed) {
    var elIndex
    var eligibleEls = this.hoverEls
    if (filterUsed) {
      eligibleEls = eligibleEls
        .filter(el => el !== this.state.get(this.GRAB_EVENT) &&
                el !== this.state.get(this.DRAG_EVENT) &&
                el !== this.state.get(this.STRETCH_EVENT))
    }
    for (elIndex = eligibleEls.length - 1; elIndex >= 0; elIndex--) {
      if (!this.emitCancelable(eligibleEls[elIndex], evType, detail)) {
        return eligibleEls[elIndex]
      }
    }
    return null
  },
  // Helper to ensure dropping and regrabbing finds the same target for
  // for order-sorted hoverEls (grabbing; no-op for distance-sorted (pointing)
  promoteHoveredEl: function (el) {
    var hoverIndex = this.hoverEls.indexOf(el)
    if (hoverIndex !== -1 &&
        this.hoverElsIntersections[hoverIndex].distance == null) {
      this.hoverEls.splice(hoverIndex, 1)
      const sect = this.hoverElsIntersections.splice(hoverIndex, 1)
      this.hoverEls.push(el)
      this.hoverElsIntersections.push(sect[0])
    }
  }
})


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/clickable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/clickable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME */
const buttonCore = __webpack_require__(/*! ./prototypes/buttons-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js")
AFRAME.registerComponent('clickable', AFRAME.utils.extendDeep({}, buttonCore, {
  schema: {
    onclick: { type: 'string' }
  },
  init: function () {
    this.CLICKED_STATE = 'clicked'
    this.CLICK_EVENT = 'grab-start'
    this.UNCLICK_EVENT = 'grab-end'
    this.clickers = []

    this.start = this.start.bind(this)
    this.end = this.end.bind(this)
    this.el.addEventListener(this.CLICK_EVENT, this.start)
    this.el.addEventListener(this.UNCLICK_EVENT, this.end)
  },
  remove: function () {
    this.el.removeEventListener(this.CLICK_EVENT, this.start)
    this.el.removeEventListener(this.UNCLICK_EVENT, this.end)
  },
  start: function (evt) {
    if (evt.defaultPrevented || !this.startButtonOk(evt)) { return }
    this.el.addState(this.CLICKED_STATE)
    if (this.clickers.indexOf(evt.detail.hand) === -1) {
      this.clickers.push(evt.detail.hand)
      if (evt.preventDefault) { evt.preventDefault() }
    }
  },
  end: function (evt) {
    const handIndex = this.clickers.indexOf(evt.detail.hand)
    if (evt.defaultPrevented || !this.endButtonOk(evt)) { return }
    if (handIndex !== -1) {
      this.clickers.splice(handIndex, 1)
    }
    if (this.clickers.length < 1) {
      this.el.removeState(this.CLICKED_STATE)
    }
    if (evt.preventDefault) { evt.preventDefault() }
  }
}))


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/drag-droppable.js":
/*!************************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/drag-droppable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME */
const inherit = AFRAME.utils.extendDeep
const buttonCore = __webpack_require__(/*! ./prototypes/buttons-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js")

AFRAME.registerComponent('drag-droppable', inherit({}, buttonCore, {
  init: function () {
    console.warn('Warning: drag-droppable is deprecated. Use draggable and droppable components instead')
    this.HOVERED_STATE = 'dragover'
    this.DRAGGED_STATE = 'dragged'
    this.HOVER_EVENT = 'dragover-start'
    this.UNHOVER_EVENT = 'dragover-end'
    this.DRAG_EVENT = 'drag-start'
    this.UNDRAG_EVENT = 'drag-end'
    this.DRAGDROP_EVENT = 'drag-drop'

    this.hoverStart = this.hoverStart.bind(this)
    this.dragStart = this.dragStart.bind(this)
    this.hoverEnd = this.hoverEnd.bind(this)
    this.dragEnd = this.dragEnd.bind(this)
    this.dragDrop = this.dragDrop.bind(this)

    this.el.addEventListener(this.HOVER_EVENT, this.hoverStart)
    this.el.addEventListener(this.DRAG_EVENT, this.dragStart)
    this.el.addEventListener(this.UNHOVER_EVENT, this.hoverEnd)
    this.el.addEventListener(this.UNDRAG_EVENT, this.dragEnd)
    this.el.addEventListener(this.DRAGDROP_EVENT, this.dragDrop)
  },
  remove: function () {
    this.el.removeEventListener(this.HOVER_EVENT, this.hoverStart)
    this.el.removeEventListener(this.DRAG_EVENT, this.dragStart)
    this.el.removeEventListener(this.UNHOVER_EVENT, this.hoverEnd)
    this.el.removeEventListener(this.UNDRAG_EVENT, this.dragEnd)
    this.el.removeEventListener(this.DRAGDROP_EVENT, this.dragDrop)
  },
  hoverStart: function (evt) {
    this.el.addState(this.HOVERED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  },
  dragStart: function (evt) {
    if (!this.startButtonOk(evt)) { return }
    this.el.addState(this.DRAGGED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  },
  hoverEnd: function (evt) {
    this.el.removeState(this.HOVERED_STATE)
  },
  dragEnd: function (evt) {
    if (!this.endButtonOk(evt)) { return }
    this.el.removeState(this.DRAGGED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  },
  dragDrop: function (evt) {
    if (!this.endButtonOk(evt)) { return }
    if (evt.preventDefault) { evt.preventDefault() }
  }
}))


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/draggable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/draggable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME */
const inherit = AFRAME.utils.extendDeep
const buttonCore = __webpack_require__(/*! ./prototypes/buttons-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js")

AFRAME.registerComponent('draggable', inherit({}, buttonCore, {
  init: function () {
    this.DRAGGED_STATE = 'dragged'
    this.DRAG_EVENT = 'drag-start'
    this.UNDRAG_EVENT = 'drag-end'

    this.dragStartBound = this.dragStart.bind(this)
    this.dragEndBound = this.dragEnd.bind(this)

    this.el.addEventListener(this.DRAG_EVENT, this.dragStartBound)
    this.el.addEventListener(this.UNDRAG_EVENT, this.dragEndBound)
  },
  remove: function () {
    this.el.removeEventListener(this.DRAG_EVENT, this.dragStart)
    this.el.removeEventListener(this.UNDRAG_EVENT, this.dragEnd)
  },
  dragStart: function (evt) {
    if (evt.defaultPrevented || !this.startButtonOk(evt)) { return }
    this.el.addState(this.DRAGGED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  },
  dragEnd: function (evt) {
    if (evt.defaultPrevented || !this.endButtonOk(evt)) { return }
    this.el.removeState(this.DRAGGED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  }
}))


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/droppable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/droppable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global AFRAME */
function elementMatches (el, selector) {
  if (el.matches) { return el.matches(selector) }
  if (el.msMatchesSelector) { return el.msMatchesSelector(selector) }
  if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector) }
}
AFRAME.registerComponent('droppable', {
  schema: {
    accepts: {default: ''},
    autoUpdate: {default: true},
    acceptEvent: {default: ''},
    rejectEvent: {default: ''}
  },
  multiple: true,
  init: function () {
    this.HOVERED_STATE = 'dragover'
    this.HOVER_EVENT = 'dragover-start'
    this.UNHOVER_EVENT = 'dragover-end'
    this.DRAGDROP_EVENT = 'drag-drop'

    // better for Sinon spying if original method not overwritten
    this.hoverStartBound = this.hoverStart.bind(this)
    this.hoverEndBound = this.hoverEnd.bind(this)
    this.dragDropBound = this.dragDrop.bind(this)
    this.mutateAcceptsBound = this.mutateAccepts.bind(this)

    this.acceptableEntities = []
    this.observer = new window.MutationObserver(this.mutateAcceptsBound)
    this.observerOpts = {childList: true, subtree: true}

    this.el.addEventListener(this.HOVER_EVENT, this.hoverStartBound)
    this.el.addEventListener(this.UNHOVER_EVENT, this.hoverEndBound)
    this.el.addEventListener(this.DRAGDROP_EVENT, this.dragDropBound)
  },
  update: function () {
    if (this.data.accepts.length) {
      this.acceptableEntities = Array.prototype.slice.call(
        this.el.sceneEl.querySelectorAll(this.data.accepts)
      )
    } else {
      this.acceptableEntities = null
    }
    if (this.data.autoUpdate && this.acceptableEntities != null) {
      this.observer.observe(this.el.sceneEl, this.observerOpts)
    } else {
      this.observer.disconnect()
    }
  },
  remove: function () {
    this.el.removeEventListener(this.HOVER_EVENT, this.hoverStartBound)
    this.el.removeEventListener(this.UNHOVER_EVENT, this.hoverEndBound)
    this.el.removeEventListener(this.DRAGDROP_EVENT, this.dragDropBound)
    this.observer.disconnect()
  },
  mutateAccepts: function (mutations) {
    const query = this.data.accepts
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(added => {
        if (elementMatches(added, query)) {
          this.acceptableEntities.push(added)
        }
      })
    })
  },
  entityAcceptable: function (entity) {
    const acceptableEntities = this.acceptableEntities
    if (acceptableEntities == null) { return true }
    for (let item of acceptableEntities) {
      if (item === entity) {
        return true
      }
    }
    return false
  },
  hoverStart: function (evt) {
    if (evt.defaultPrevented || !this.entityAcceptable(evt.detail.carried)) {
      return
    }
    this.el.addState(this.HOVERED_STATE)
    if (evt.preventDefault) { evt.preventDefault() }
  },
  hoverEnd: function (evt) {
    if (evt.defaultPrevented) { return }
    this.el.removeState(this.HOVERED_STATE)
  },
  dragDrop: function (evt) {
    if (evt.defaultPrevented) { return }
    const dropped = evt.detail.dropped
    if (!this.entityAcceptable(dropped)) {
      if (this.data.rejectEvent.length) {
        this.el.emit(this.data.rejectEvent, {el: dropped})
      }
      return
    }
    if (this.data.acceptEvent.length) {
      this.el.emit(this.data.acceptEvent, {el: dropped})
    }
    if (evt.preventDefault) { evt.preventDefault() }
  }
})


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/grabbable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/grabbable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME, THREE */
const inherit = AFRAME.utils.extendDeep
const physicsCore = __webpack_require__(/*! ./prototypes/physics-grab-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/physics-grab-proto.js")
const buttonsCore = __webpack_require__(/*! ./prototypes/buttons-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js")
// new object with all core modules
const base = inherit({}, physicsCore, buttonsCore)
AFRAME.registerComponent('grabbable', inherit(base, {
  schema: {
    maxGrabbers: {type: 'int', default: NaN},
    invert: {default: false},
    suppressY: {default: false}
  },
  init: function () {
    this.GRABBED_STATE = 'grabbed'
    this.GRAB_EVENT = 'grab-start'
    this.UNGRAB_EVENT = 'grab-end'
    this.grabbed = false
    this.grabbers = []
    this.constraints = new Map()
    this.deltaPositionIsValid = false
    this.grabDistance = undefined
    this.grabDirection = {x: 0, y: 0, z: -1}
    this.grabOffset = {x: 0, y: 0, z: 0}
    // persistent object speeds up repeat setAttribute calls
    this.destPosition = {x: 0, y: 0, z: 0}
    this.deltaPosition = new THREE.Vector3()
    this.targetPosition = new THREE.Vector3()
    this.physicsInit()

    this.el.addEventListener(this.GRAB_EVENT, e => this.start(e))
    this.el.addEventListener(this.UNGRAB_EVENT, e => this.end(e))
    this.el.addEventListener('mouseout', e => this.lostGrabber(e))
  },
  update: function () {
    this.physicsUpdate()
    this.xFactor = (this.data.invert) ? -1 : 1
    this.zFactor = (this.data.invert) ? -1 : 1
    this.yFactor = ((this.data.invert) ? -1 : 1) * !this.data.suppressY
  },
  tick: (function () {
    var q = new THREE.Quaternion()
    var v = new THREE.Vector3()

    return function () {
      var entityPosition
      if (this.grabber) {
        // reflect on z-axis to point in same direction as the laser
        this.targetPosition.copy(this.grabDirection)
        this.targetPosition
            .applyQuaternion(this.grabber.object3D.getWorldQuaternion(q))
            .setLength(this.grabDistance)
            .add(this.grabber.object3D.getWorldPosition(v))
            .add(this.grabOffset)
        if (this.deltaPositionIsValid) {
          // relative position changes work better with nested entities
          this.deltaPosition.sub(this.targetPosition)
          entityPosition = this.el.getAttribute('position')
          this.destPosition.x =
              entityPosition.x - this.deltaPosition.x * this.xFactor
          this.destPosition.y =
              entityPosition.y - this.deltaPosition.y * this.yFactor
          this.destPosition.z =
              entityPosition.z - this.deltaPosition.z * this.zFactor
          this.el.setAttribute('position', this.destPosition)
        } else {
          this.deltaPositionIsValid = true
        }
        this.deltaPosition.copy(this.targetPosition)
      }
    }
  })(),
  remove: function () {
    this.el.removeEventListener(this.GRAB_EVENT, this.start)
    this.el.removeEventListener(this.UNGRAB_EVENT, this.end)
    this.physicsRemove()
  },
  start: function (evt) {
    if (evt.defaultPrevented || !this.startButtonOk(evt)) {
      return
    }
    // room for more grabbers?
    const grabAvailable = !Number.isFinite(this.data.maxGrabbers) ||
        this.grabbers.length < this.data.maxGrabbers

    if (this.grabbers.indexOf(evt.detail.hand) === -1 && grabAvailable) {
      if (!evt.detail.hand.object3D) {
        console.warn('grabbable entities must have an object3D')
        return
      }
      this.grabbers.push(evt.detail.hand)
      // initiate physics if available, otherwise manual
      if (!this.physicsStart(evt) && !this.grabber) {
        this.grabber = evt.detail.hand
        this.resetGrabber()
      }
      // notify super-hands that the gesture was accepted
      if (evt.preventDefault) { evt.preventDefault() }
      this.grabbed = true
      this.el.addState(this.GRABBED_STATE)
    }
  },
  end: function (evt) {
    const handIndex = this.grabbers.indexOf(evt.detail.hand)
    if (evt.defaultPrevented || !this.endButtonOk(evt)) { return }
    if (handIndex !== -1) {
      this.grabbers.splice(handIndex, 1)
      this.grabber = this.grabbers[0]
    }
    this.physicsEnd(evt)
    if (!this.resetGrabber()) {
      this.grabbed = false
      this.el.removeState(this.GRABBED_STATE)
    }
    if (evt.preventDefault) { evt.preventDefault() }
  },
  resetGrabber: (function () {
    var objPos = new THREE.Vector3()
    var grabPos = new THREE.Vector3()
    return function () {
      let raycaster
      if (!this.grabber) {
        return false
      }
      raycaster = this.grabber.getAttribute('raycaster')
      this.deltaPositionIsValid = false
      this.grabDistance = this.el.object3D.getWorldPosition(objPos).distanceTo(this.grabber.object3D.getWorldPosition(grabPos))
      if (raycaster) {
        this.grabDirection = raycaster.direction
        this.grabOffset = raycaster.origin
      }
      return true
    }
  })(),
  lostGrabber: function (evt) {
    let i = this.grabbers.indexOf(evt.relatedTarget)
    // if a queued, non-physics grabber leaves the collision zone, forget it
    if (i !== -1 && evt.relatedTarget !== this.grabber &&
        !this.physicsIsConstrained(evt.relatedTarget)) {
      this.grabbers.splice(i, 1)
    }
  }
}))


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/hoverable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/hoverable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global AFRAME */
AFRAME.registerComponent('hoverable', {
  init: function () {
    this.HOVERED_STATE = 'hovered'
    this.HOVER_EVENT = 'hover-start'
    this.UNHOVER_EVENT = 'hover-end'

    this.hoverers = []

    this.start = this.start.bind(this)
    this.end = this.end.bind(this)

    this.el.addEventListener(this.HOVER_EVENT, this.start)
    this.el.addEventListener(this.UNHOVER_EVENT, this.end)
  },
  remove: function () {
    this.el.removeEventListener(this.HOVER_EVENT, this.start)
    this.el.removeEventListener(this.UNHOVER_EVENT, this.end)
  },
  start: function (evt) {
    if (evt.defaultPrevented) { return }
    this.el.addState(this.HOVERED_STATE)
    if (this.hoverers.indexOf(evt.detail.hand) === -1) {
      this.hoverers.push(evt.detail.hand)
    }
    if (evt.preventDefault) { evt.preventDefault() }
  },
  end: function (evt) {
    if (evt.defaultPrevented) { return }
    var handIndex = this.hoverers.indexOf(evt.detail.hand)
    if (handIndex !== -1) {
      this.hoverers.splice(handIndex, 1)
    }
    if (this.hoverers.length < 1) {
      this.el.removeState(this.HOVERED_STATE)
    }
  }
})


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// common code used in customizing reaction components by button
module.exports = (function () {
  function buttonIsValid (evt, buttonList) {
    return buttonList.length === 0 ||
        buttonList.indexOf(evt.detail.buttonEvent.type) !== -1
  }
  return {
    schema: {
      startButtons: {default: []},
      endButtons: {default: []}
    },
    startButtonOk: function (evt) {
      return buttonIsValid(evt, this.data['startButtons'])
    },
    endButtonOk: function (evt) {
      return buttonIsValid(evt, this.data['endButtons'])
    }
  }
})()


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/prototypes/physics-grab-proto.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/prototypes/physics-grab-proto.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// base code used by grabbable for physics interactions
module.exports = {
  schema: {
    usePhysics: {default: 'ifavailable'}
  },
  physicsInit: function () {
    this.constraints = new Map()
  },
  physicsUpdate: function () {
    if (this.data.usePhysics === 'never' && this.constraints.size) {
      this.physicsClear()
    }
  },
  physicsRemove: function () {
    this.physicsClear()
  },
  physicsStart: function (evt) {
    // initiate physics constraint if available and not already existing
    if (this.data.usePhysics !== 'never' && this.el.body &&
        evt.detail.hand.body && !this.constraints.has(evt.detail.hand)) {
      const newConId = Math.random().toString(36).substr(2, 9)
      this.el.setAttribute('constraint__' + newConId, {
        target: evt.detail.hand
      })
      this.constraints.set(evt.detail.hand, newConId)
      return true
    }
    // Prevent manual grab by returning true
    if (this.data.usePhysics === 'only') { return true }
    return false
  },
  physicsEnd: function (evt) {
    let constraintId = this.constraints.get(evt.detail.hand)
    if (constraintId) {
      this.el.removeAttribute('constraint__' + constraintId)
      this.constraints.delete(evt.detail.hand)
    }
  },
  physicsClear: function () {
    if (this.el.body) {
      for (let c of this.constraints.values()) {
        this.el.body.world.removeConstraint(c)
      }
    }
    this.constraints.clear()
  },
  physicsIsConstrained: function (el) {
    return this.constraints.has(el)
  },
  physicsIsGrabbing () {
    return this.constraints.size > 0
  }
}


/***/ }),

/***/ "./node_modules/super-hands/reaction_components/stretchable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/super-hands/reaction_components/stretchable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global AFRAME, THREE */
const inherit = AFRAME.utils.extendDeep
const buttonsCore = __webpack_require__(/*! ./prototypes/buttons-proto.js */ "./node_modules/super-hands/reaction_components/prototypes/buttons-proto.js")
// new object with all core modules
const base = inherit({}, buttonsCore)
AFRAME.registerComponent('stretchable', inherit(base, {
  schema: {
    usePhysics: {default: 'ifavailable'},
    invert: {default: false},
    physicsUpdateRate: {default: 100}
  },
  init: function () {
    this.STRETCHED_STATE = 'stretched'
    this.STRETCH_EVENT = 'stretch-start'
    this.UNSTRETCH_EVENT = 'stretch-end'
    this.stretched = false
    this.stretchers = []

    this.scale = new THREE.Vector3()
    this.handPos = new THREE.Vector3()
    this.otherHandPos = new THREE.Vector3()

    this.start = this.start.bind(this)
    this.end = this.end.bind(this)

    this.el.addEventListener(this.STRETCH_EVENT, this.start)
    this.el.addEventListener(this.UNSTRETCH_EVENT, this.end)
  },
  update: function (oldDat) {
    this.updateBodies = AFRAME.utils.throttleTick(
      this._updateBodies,
      this.data.physicsUpdateRate,
      this
    )
  },
  tick: function (time, timeDelta) {
    if (!this.stretched) { return }
    this.scale.copy(this.el.getAttribute('scale'))
    this.stretchers[0].object3D.getWorldPosition(this.handPos)
    this.stretchers[1].object3D.getWorldPosition(this.otherHandPos)
    const currentStretch = this.handPos.distanceTo(this.otherHandPos)
    let deltaStretch = 1
    if (this.previousStretch !== null && currentStretch !== 0) {
      deltaStretch = Math.pow(
          currentStretch / this.previousStretch,
          (this.data.invert)
            ? -1
            : 1
      )
    }
    this.previousStretch = currentStretch
    if (this.previousPhysicsStretch == null) {
      // establish correct baseline even if throttled function isn't called
      this.previousPhysicsStretch = currentStretch
    }
    this.scale.multiplyScalar(deltaStretch)
    this.el.setAttribute('scale', this.scale)
    // scale update for all nested physics bodies (throttled)
    this.updateBodies(time, timeDelta)
  },
  remove: function () {
    this.el.removeEventListener(this.STRETCH_EVENT, this.start)
    this.el.removeEventListener(this.UNSTRETCH_EVENT, this.end)
  },
  start: function (evt) {
    if (this.stretched || this.stretchers.includes(evt.detail.hand) ||
        !this.startButtonOk(evt) || evt.defaultPrevented) {
      return
    } // already stretched or already captured this hand or wrong button
    this.stretchers.push(evt.detail.hand)
    if (this.stretchers.length === 2) {
      this.stretched = true
      this.previousStretch = null
      this.previousPhysicsStretch = null
      this.el.addState(this.STRETCHED_STATE)
    }
    if (evt.preventDefault) { evt.preventDefault() } // gesture accepted
  },
  end: function (evt) {
    var stretcherIndex = this.stretchers.indexOf(evt.detail.hand)
    if (evt.defaultPrevented || !this.endButtonOk(evt)) { return }
    if (stretcherIndex !== -1) {
      this.stretchers.splice(stretcherIndex, 1)
      this.stretched = false
      this.el.removeState(this.STRETCHED_STATE)
      // override throttle to push last stretch to physics bodies
      this._updateBodies()
    }
    if (evt.preventDefault) { evt.preventDefault() }
  },
  _updateBodies: function () {
    if (!this.el.body || this.data.usePhysics === 'never') { return }
    const currentStretch = this.previousStretch // last visible geometry stretch
    let deltaStretch = 1
    if (this.previousPhysicsStretch !== null && currentStretch > 0) {
      deltaStretch = Math.pow(
          currentStretch / this.previousPhysicsStretch,
          (this.data.invert)
            ? -1
            : 1
      )
    }
    this.previousPhysicsStretch = currentStretch
    if (deltaStretch === 1) { return }
    for (let c of this.el.childNodes) { this.stretchBody(c, deltaStretch) }
    this.stretchBody(this.el, deltaStretch)
  },
  stretchBody: function (el, deltaStretch) {
    if (!el.body) { return }
    let physicsShape
    let offset
    for (let i = 0; i < el.body.shapes.length; i++) {
      physicsShape = el.body.shapes[i]
      if (physicsShape.halfExtents) {
        physicsShape.halfExtents
            .scale(deltaStretch, physicsShape.halfExtents)
        physicsShape.updateConvexPolyhedronRepresentation()
      } else if (physicsShape.radius) {
        physicsShape.radius *= deltaStretch
        physicsShape.updateBoundingSphereRadius()
      } else if (!this.shapeWarned) {
        console.warn('Unable to stretch physics body: unsupported shape')
        this.shapeWarned = true
      }
      // also move offset to match scale change
      offset = el.body.shapeOffsets[i]
      offset.scale(deltaStretch, offset)
    }
    el.body.updateBoundingRadius()
  }
}))


/***/ }),

/***/ "./node_modules/super-hands/systems/super-hands-system.js":
/*!****************************************************************!*\
  !*** ./node_modules/super-hands/systems/super-hands-system.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global AFRAME */
AFRAME.registerSystem('super-hands', {
  init: function () {
    this.superHands = []
  },
  registerMe: function (comp) {
    // when second hand registers, store links
    if (this.superHands.length === 1) {
      this.superHands[0].otherSuperHand = comp
      comp.otherSuperHand = this.superHands[0]
    }
    this.superHands.push(comp)
  },
  unregisterMe: function (comp) {
    var index = this.superHands.indexOf(comp)
    if (index !== -1) {
      this.superHands.splice(index, 1)
    }
    this.superHands.forEach(x => {
      if (x.otherSuperHand === comp) { x.otherSuperHand = null }
    })
  }
})


/***/ }),

/***/ "./src/aframeContext.js":
/*!******************************!*\
  !*** ./src/aframeContext.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AframeContext; });
/* harmony import */ var _assetManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetManager */ "./src/assetManager.js");
/* harmony import */ var _components_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/renderer */ "./src/components/renderer.js");
/* harmony import */ var _components_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_renderer__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AframeContext = /*#__PURE__*/function () {
  function AframeContext(settings) {
    _classCallCheck(this, AframeContext);

    this.inVR = false; // settings pointer

    this.settings = settings;
    this.createScene(); // create asset manager

    this.assetManager = new _assetManager__WEBPACK_IMPORTED_MODULE_0__["default"](this.scene);
  }

  _createClass(AframeContext, [{
    key: "createScene",
    value: function createScene() {
      var _this = this;

      // find scene if exists else create scene
      var scene = document.getElementsByTagName("a-scene");
      if (scene.length > 0) this.scene = scene[0];else {
        this.scene = document.createElement("a-scene");
        document.body.appendChild(this.scene);
        this.newScene = true;
      } // add stats to scene if debug

      if (this.settings.debug) this.scene.setAttribute("stats", ""); //custom renderer params like local clipping

      this.scene.setAttribute("vr-renderer", ""); // check if in VR

      this.scene.addEventListener("enter-vr", function () {
        _this.inVR = true;
      }.bind(this));
      this.scene.addEventListener("exit-vr", function () {
        _this.inVR = false;
      }.bind(this));
    }
  }, {
    key: "createContainer",
    value: function createContainer(web2vr) {
      // conttainer for all aframe elements
      this.container = document.createElement("a-entity");
      this.container.classList.add("vr-container");
      this.container.classList.add(this.settings.interactiveTag); // position container

      var width = parseFloat(window.getComputedStyle(web2vr.container).width) * (1 / this.settings.scale);
      var x = this.settings.position.x; // if x=0 then then we want to be in center for testing and showcase

      if (x == 0) x = x - width / 2;
      this.container.object3D.position.set(x, this.settings.position.y, this.settings.position.z); // update rotation from aframe(1.0.4) because there is bug(rotation x will be wrong) if you update with three.js

      this.container.setAttribute("rotation", {
        x: this.settings.rotation.x,
        y: this.settings.rotation.y,
        z: this.settings.rotation.z
      });
      var parentElement = document.querySelector(this.settings.parentSelector);
      if (parentElement) parentElement.appendChild(this.container);else {
        this.container.setAttribute("vr-grab-rotate-static", "");
        this.container.setAttribute("grabbable", "");
        this.container.setAttribute("stretchable", "");
        this.scene.appendChild(this.container);
      } // pointer for grabRotateStatic

      this.container.web2vr = web2vr;
    }
  }, {
    key: "createSky",
    value: function createSky() {
      // create sky if sky doesnt exist
      if (document.getElementsByTagName("a-sky").length == 0 && this.settings.skybox) {
        this.sky = document.createElement("a-sky");
        this.sky.setAttribute("color", "#a9f8fe");
        this.scene.appendChild(this.sky);
      }
    }
  }, {
    key: "createControllers",
    value: function createControllers() {
      var _this2 = this;

      // cursor only for dev testing on desktop
      if (!document.getElementById("mouseCursor")) {
        var cursor = document.createElement("a-entity");
        cursor.id = "mouseCursor";
        cursor.setAttribute("cursor", "rayOrigin", "mouse");
        cursor.setAttribute("raycaster", "objects: .".concat(this.settings.interactiveTag, ", .collidable"));
        this.scene.appendChild(cursor);
      } // super hands 6DOF


      if (this.settings.createControllers && !document.getElementById("leftHand")) {
        var raycaster = "objects: .".concat(this.settings.interactiveTag, ", .collidable; far: ").concat(this.settings.raycasterFar);
        var superhands = "colliderEvent: raycaster-intersection; colliderEventProperty: els; colliderEndEvent:raycaster-intersection-cleared; colliderEndEventProperty: clearedEls; grabStartButtons: gripdown; grabEndButtons: gripup; stretchStartButtons: gripdown; stretchEndButtons: gripup";
        var leftHand = document.createElement("a-entity");
        leftHand.id = "leftHand";
        leftHand.setAttribute("hand-controls", "hand:left; handModelStyle: highPoly; color: #ffcccc");
        leftHand.setAttribute("laser-controls", "");
        leftHand.setAttribute("raycaster", raycaster);
        leftHand.setAttribute("super-hands", superhands);
        var rightHand = document.createElement("a-entity");
        rightHand.id = "rightHand";
        rightHand.setAttribute("hand-controls", "hand:right; handModelStyle: highPoly; color: #ffcccc");
        rightHand.setAttribute("laser-controls", "");
        rightHand.setAttribute("raycaster", raycaster);
        rightHand.setAttribute("super-hands", superhands);
        this.scene.appendChild(leftHand);
        this.scene.appendChild(rightHand);
      } // keyboard


      this.keyboard = document.getElementById("vr-keyboard");

      if (!this.keyboard) {
        this.keyboard = document.createElement("a-entity");
        this.keyboard.id = "vr-keyboard";
        this.keyboard.setAttribute("a-keyboard", "");
        this.keyboard.setAttribute("grabbable", "");
        this.scene.appendChild(this.keyboard);
        this.keyboard.object3D.visible = false; // current active input

        this.keyboard.activeInput = null; // event listener for the keyboard key press 

        document.addEventListener('a-keyboard-update', function (e) {
          if (_this2.keyboard.activeInput) {
            var code = parseInt(e.detail.code);
            var value = _this2.keyboard.activeInput.value; // backspace

            if (code == 8) value = value.slice(0, -1); // submit or cancel
            else if (code == 6 || code == 24) {
                _this2.keyboard.object3D.visible = false;
                _this2.keyboard.object3D.position.y = 10000; // because raycasting still collides with invisible objects

                _this2.keyboard.activeInput.element.active = false;

                _this2.keyboard.activeInput.element.update();

                _this2.keyboard.activeInput = null;
                return;
              } // ignore arrow keys
              else if (![37, 38, 39, 40].includes(code)) value += e.detail.value;
            _this2.keyboard.activeInput.value = value;

            _this2.keyboard.activeInput.element.update();
          }
        });
      }
    }
  }]);

  return AframeContext;
}();



/***/ }),

/***/ "./src/assetManager.js":
/*!*****************************!*\
  !*** ./src/assetManager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetManager; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssetManager = /*#__PURE__*/function () {
  function AssetManager(scene) {
    _classCallCheck(this, AssetManager);

    var assets = document.getElementsByTagName("a-assets")[0];
    if (assets) this.assets = assets;else {
      this.assets = document.createElement("a-assets");
      scene.appendChild(this.assets);
    }
  } // update current-id attribute


  _createClass(AssetManager, [{
    key: "updateCurrentAssetId",
    value: function updateCurrentAssetId() {
      var currentAssetId = parseInt(this.assets.getAttribute("current-id"));

      if (!this.assets.getAttribute("current-id")) {
        this.assets.setAttribute("current-id", 0);
        currentAssetId = 0;
      }

      this.assets.setAttribute("current-id", currentAssetId + 1);
    } // update current-id attribute and return it.
    // used for elements (ex. video) outside a-assets tag

  }, {
    key: "updateCurrentAssetIdReturn",
    value: function updateCurrentAssetIdReturn() {
      this.updateCurrentAssetId();
      return "asset-" + this.assets.getAttribute("current-id");
    } // find asset if exists if not create and return it

  }, {
    key: "getAsset",
    value: function getAsset(path, type) {
      var assets = this.assets.getChildren();

      var _iterator = _createForOfIteratorHelper(assets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var asset = _step.value;
          if (asset.getAttribute("src") === path) return asset.getAttribute("id");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.createAsset(path, type);
    }
  }, {
    key: "createAsset",
    value: function createAsset(path, type) {
      var asset = document.createElement(type);
      asset.setAttribute("src", path);
      this.updateCurrentAssetId();
      var id = "asset-" + this.assets.getAttribute("current-id");
      asset.setAttribute("id", id); // have to manualy add crossorigin for all external assets to load

      asset.setAttribute("crossorigin", "Anonymous");
      this.assets.appendChild(asset);
      return id;
    }
  }, {
    key: "removeAsset",
    value: function removeAsset(id) {
      this.assets.querySelector("#" + id).remove();
    }
  }]);

  return AssetManager;
}();



/***/ }),

/***/ "./src/components/animate.js":
/*!***********************************!*\
  !*** ./src/components/animate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent("vr-animate", {
  init: function init() {
    this.running = false; // listenes for css animation and translation

    this.el.element.domElement.addEventListener("animationstart", this.startAnimation.bind(this));
    this.el.element.domElement.addEventListener("animationend", this.stopAnimation.bind(this));
    this.el.element.domElement.addEventListener("transitionstart", this.startAnimation.bind(this));
    this.el.element.domElement.addEventListener("transitionend", this.stopAnimation.bind(this));
  },
  tick: function tick() {
    if (this.running) this.el.element.web2vr.update();
  },
  startAnimation: function startAnimation() {
    this.running = true;
  },
  stopAnimation: function stopAnimation() {
    this.running = false; // one final update

    this.el.element.web2vr.update();
  }
});

/***/ }),

/***/ "./src/components/border.js":
/*!**********************************!*\
  !*** ./src/components/border.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent("vr-border", {
  schema: {
    width: {
      type: "number"
    },
    color: {
      type: "string"
    }
  },
  init: function init() {
    this.running = true;
    var plane = this.el.object3D.children[0];
    var edges = new THREE.EdgesGeometry(plane.geometry);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: this.data.width
    }));
    this.borderObject = line;
    this.el.element.web2vr.aframe.container.object3D.add(this.borderObject); //maybe clippingContext inside tick?

    if (this.el.element.clippingContext) {
      line.material.clippingPlanes = this.el.element.clippingContext.planes;
      line.material.needsUpdate = true;
    }
  },
  update: function update() {
    // waiting for three.js(WebGL) to add lineWidth support for Windows(DirectX) browsers for now linewidth is 1 no matter what you set it.
    // lineWidth works for other OS.
    var borderWidth = this.data.width; // custom element border width

    if (this.el.element.borderWidth) this.borderObject.material.linewidth = this.el.element.borderWidth;else this.borderObject.material.linewidth = borderWidth; // custom element border color

    if (this.el.element.borderColor) this.borderObject.material.color = this.el.element.borderColor;else this.borderObject.material.color = new THREE.Color(this.data.color);
  },
  updateBorder: function updateBorder() {
    if (this.el.element.visible) {
      this.running = true;
      this.borderObject.material.visible = true;
    } else this.borderObject.material.visible = false;
  },
  tick: function tick() {
    if (this.running) {
      var scale = this.el.object3D.scale;
      var plane = this.el.object3D.children[0].geometry.clone();
      plane.scale(scale.x, scale.y, scale.z);
      var edges = new THREE.EdgesGeometry(plane);
      var position = this.el.object3D.position;
      this.borderObject.geometry = edges;
      this.borderObject.position.set(position.x, position.y, position.z + this.el.element.web2vr.settings.layerStep * 2);
      this.running = false;
    }
  },
  remove: function remove() {
    this.el.element.web2vr.aframe.container.object3D.remove(this.borderObject);
  }
});

/***/ }),

/***/ "./src/components/grabRotateStatic.js":
/*!********************************************!*\
  !*** ./src/components/grabRotateStatic.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

AFRAME.registerComponent("vr-grab-rotate-static", {
  tick: function tick() {
    if (this.el.components["grabbable"].grabbed) {
      // update clipping when moving
      if (this.el.web2vr.scroll.hasScroll) {
        var _iterator = _createForOfIteratorHelper(this.el.web2vr.elements),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            element.updateClipping();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var obj = this.el.object3D;
      var hand = this.el.components["grabbable"].grabbers[0].object3D;
      obj.rotation.y = Math.atan2(hand.position.x - (obj.position.x + this.el.children[0].getAttribute("width") / 2), hand.position.z - obj.position.z); //obj.rotation.x = hand.rotation.x;
      //obj.rotation.y = hand.rotation.y;
      //obj.rotation.z = hand.rotation.z;
    }
  }
});

/***/ }),

/***/ "./src/components/renderer.js":
/*!************************************!*\
  !*** ./src/components/renderer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent("vr-renderer", {
  init: function init() {
    this.el.sceneEl.renderer.localClippingEnabled = true;
  }
});

/***/ }),

/***/ "./src/components/scrollbar.js":
/*!*************************************!*\
  !*** ./src/components/scrollbar.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

AFRAME.registerComponent("vr-scrollbar", {
  init: function init() {
    this.el.addEventListener("click", function (evt) {
      var scrollHeight = parseFloat(this.el.web2vr.aframe.container.firstElementChild.element.style.height) - this.el.web2vr.settings.scrollWindowHeight;
      if (this.el.web2vr.scroll.scrollContainer == this.el.web2vr.container) scrollHeight = this.el.web2vr.scroll.scrollContainer.scrollHeight - this.el.web2vr.scroll.scrollContainer.clientHeight;
      var scrollY = (1 - evt.detail.intersection.uv.y) * scrollHeight / this.el.web2vr.settings.scale;

      var elements = _toConsumableArray(this.el.web2vr.elements); // remove first element that is the backgorund of container


      elements.shift();
      this.el.pointer.object3D.position.setY(this.pointEndY + evt.detail.intersection.uv.y * (this.pointStartY - this.pointEndY));

      var _iterator = _createForOfIteratorHelper(elements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          element.position.scrollY = scrollY;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.el.web2vr.update();
    }.bind(this));
  },
  play: function play() {
    var width = parseFloat(this.el.web2vr.aframe.container.firstElementChild.getAttribute("width"));
    var height = parseFloat(this.el.web2vr.aframe.container.firstElementChild.getAttribute("height")); // init plane size

    this.el.setAttribute("width", width / 20);
    this.el.setAttribute("height", height); //init scrollbar position

    this.el.scrollbar.object3D.position.setX(width + parseFloat(this.el.getAttribute("width") / 2));
    this.el.scrollbar.object3D.position.setY(0 - height / 2); //1.96

    this.el.scrollbar.object3D.position.setZ(-(this.el.web2vr.settings.layerStep * 4)); // init pointer position and size

    this.el.pointer.setAttribute("height", width / 20);
    this.el.pointer.setAttribute("width", width / 20);
    this.pointStartY = height / 2 - parseFloat(this.el.pointer.getAttribute("height")) / 2;
    this.pointEndY = this.pointStartY - height + parseFloat(this.el.pointer.getAttribute("height"));
    this.el.pointer.object3D.position.setY(this.pointStartY);
    this.el.pointer.object3D.position.setZ(this.el.web2vr.settings.layerStep * 2);
  }
});

/***/ }),

/***/ "./src/elements/buttonElement.js":
/*!***************************************!*\
  !*** ./src/elements/buttonElement.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtomElement; });
/* harmony import */ var _textElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textElement */ "./src/elements/textElement.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ButtomElement = /*#__PURE__*/function (_TextElement) {
  _inherits(ButtomElement, _TextElement);

  var _super = _createSuper(ButtomElement);

  function ButtomElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, ButtomElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.borderColor = new THREE.Color(0x000000);
    _this.borderWidth = 1;
    return _this;
  }

  _createClass(ButtomElement, [{
    key: "updateTextPadding",
    value: function updateTextPadding() {// ignore padding for buttons
    }
  }, {
    key: "updateText",
    value: function updateText() {
      if (this.domElement.tagName == "INPUT") this.textValue = this.domElement.value.replace(/\s{2,}/g, ' ');
    }
  }]);

  return ButtomElement;
}(_textElement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/canvasElement.js":
/*!***************************************!*\
  !*** ./src/elements/canvasElement.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CanvasElement = /*#__PURE__*/function (_Element) {
  _inherits(CanvasElement, _Element);

  var _super = _createSuper(CanvasElement);

  function CanvasElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, CanvasElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.imageId = null;
    _this.entity = document.createElement("a-image");
    return _this;
  }

  _createClass(CanvasElement, [{
    key: "updateImage",
    value: function updateImage(src) {
      var assetId = this.web2vr.aframe.assetManager.getAsset(src, "img"); // remove old image if there is new image

      if (this.imageId && this.imageId != assetId) this.web2vr.aframe.assetManager.removeAsset(this.imageId);
      this.entity.setAttribute("id", "IMAGE_" + assetId);
      this.entity.setAttribute("src", "#" + assetId);
      this.imageId = assetId;
    }
  }, {
    key: "specificUpdate",
    value: function specificUpdate() {
      this.updateImage(this.domElement.toDataURL());
    }
  }]);

  return CanvasElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/checkboxElement.js":
/*!*****************************************!*\
  !*** ./src/elements/checkboxElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBoxElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CheckBoxElement = /*#__PURE__*/function (_Element) {
  _inherits(CheckBoxElement, _Element);

  var _super = _createSuper(CheckBoxElement);

  function CheckBoxElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, CheckBoxElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.borderColor = new THREE.Color(0x000000);
    _this.borderWidth = 1;
    _this.entity = document.createElement("a-plane");

    _this.domElement.addEventListener("click", function () {
      _this.specificUpdate();
    }.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(CheckBoxElement, [{
    key: "specificUpdate",
    value: function specificUpdate() {
      if (this.domElement.checked) this.entity.setAttribute("color", "#0075FF");else this.entity.setAttribute("color", "#FFFFFF");
    }
  }]);

  return CheckBoxElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/containerElement.js":
/*!******************************************!*\
  !*** ./src/elements/containerElement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ContainerElement = /*#__PURE__*/function (_Element) {
  _inherits(ContainerElement, _Element);

  var _super = _createSuper(ContainerElement);

  function ContainerElement(web2vr, domElement, layer) {
    var _this;

    var textOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, ContainerElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.textOnly = textOnly;
    _this.entity = document.createElement("a-plane"); // if hyperlink trigger a click event

    if (_this.domElement.tagName == "A") {
      _this.entity.addEventListener("click", function () {
        console.log("Link clicked!", _this.domElement.click());
      });
    }

    if (!_this.textOnly) {
      // show back plane for the main container
      if (_this.domElement == _this.web2vr.container) _this.entity.setAttribute("material", "side", "double"); // only needed for experimental background

      _this.expImageId = null;
      _this.oldBackgroundImage = null;
      _this.oldDomPosition = null;
    }

    return _this;
  }

  _createClass(ContainerElement, [{
    key: "specificUpdate",
    value: function specificUpdate() {
      var _this2 = this;

      if (!this.textOnly) {
        var backgroundColor = this.style.backgroundColor;
        var backgroundImage = this.style.backgroundImage; // to get 1:1 as html have to use background-size: cover; or use experimental

        if (backgroundImage != "none") {
          // cannot use animations that require update to be called every frame. html2canvas is very performance heavy.
          if (this.web2vr.settings.experimental) {
            if (backgroundImage != this.oldBackgroundImage || this.oldDomPosition && !this.position.equalsDOMPosition(this.oldDomPosition)) {
              var id = this.domElement.id;
              var customId = false;

              if (!id) {
                customId = true;
                id = "html2canvas-" + this.web2vr.html2canvasIDcounter++;
                this.domElement.id = id;
              }

              html2canvas(this.domElement, {
                onclone: function onclone(clone) {
                  var style = document.createElement('style');
                  clone.head.appendChild(style); // ignoring opacity because we use opacity from aframe

                  style.sheet.insertRule("\n                    #".concat(id, " {\n                        opacity: 1;\n                    }")); // hide the text

                  style.sheet.insertRule("\n                    #".concat(id, " {\n                        color: transparent;\n                    }")); // hide the children elements

                  style.sheet.insertRule("\n                    #".concat(id, " > * {\n                        display:none\n                    }")); // vr-span has to be block so it can render properly

                  style.sheet.insertRule("\n                    #".concat(id, " > .vr-span {\n                        display:block\n                    }"));
                  if (customId) _this2.domElement.removeAttribute("id");
                }
              }).then(function (canvas) {
                if (_this2.expImageId) _this2.web2vr.aframe.assetManager.removeAsset(_this2.expImageId);
                _this2.expImageId = _this2.web2vr.aframe.assetManager.getAsset(canvas.toDataURL(), "img");

                _this2.entity.setAttribute("material", "src: #" + _this2.expImageId);
              });
              this.oldBackgroundImage = backgroundImage;
            }
          } else if (_utils_helper__WEBPACK_IMPORTED_MODULE_1__["default"].isUrl(backgroundImage)) {
            // remove url("")
            backgroundImage = backgroundImage.substring(backgroundImage.lastIndexOf('(\"') + 2, backgroundImage.lastIndexOf('\")'));
            this.entity.setAttribute("material", "src: #" + this.web2vr.aframe.assetManager.getAsset(backgroundImage, "img")); // transparent images support

            this.entity.setAttribute("material", "transparent", true);
          }
        } else {
          // if there is no backgroundColor dont renders
          if (backgroundColor == "rgba(0, 0, 0, 0)") {
            this.entity.setAttribute("material", "visible", false);
          } else {
            this.entity.setAttribute("material", "visible", true);
            this.entity.setAttribute("color", backgroundColor);
            this.updateOpacity();
          }
        }

        this.oldDomPosition = this.position.domPosition;
      }
    }
  }, {
    key: "updateOpacity",
    value: function updateOpacity() {
      var alpha = parseFloat(this.style.backgroundColor.split(',')[3]); // calculate final alpha channel result

      if (alpha) {
        var a = alpha;
        var b = this.style.opacity;

        if (a < b) {
          b = alpha;
          a = this.style.opacity;
        }

        this.entity.setAttribute("opacity", a - (a - b));
      }
    }
  }]);

  return ContainerElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/element.js":
/*!*********************************!*\
  !*** ./src/elements/element.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Element; });
/* harmony import */ var _utils_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/position */ "./src/utils/position.js");
/* harmony import */ var _utils_mouseEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mouseEventHandler */ "./src/utils/mouseEventHandler.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Element = /*#__PURE__*/function () {
  function Element(web2vr, domElement, layer) {
    _classCallCheck(this, Element);

    this.web2vr = web2vr;
    this.domElement = domElement;
    this.layer = layer;
    this.domElement.element = this; // so we can do domeElement.parentNode.element

    this.childElements = new Set();
    this.entity = null; // aframe entity this null becasue Element class is abstract

    this.visible = true;
    if (this.domElement.classList.contains("vr-span")) this.paddingToMargin();
    this.position = new _utils_position__WEBPACK_IMPORTED_MODULE_0__["default"](this.domElement.getBoundingClientRect(), layer * this.web2vr.settings.layerStep, web2vr.settings.scale);
    this.style = window.getComputedStyle(this.domElement);
    this.parentTransform = "none";
    this.needsStartingTransformSize = true;
  } // call after entity is created in inheriting class


  _createClass(Element, [{
    key: "initEventHandlers",
    value: function initEventHandlers() {
      var _this = this;

      this.initHover(); // setting up MouseEventHandler

      this.mouseEventHandle = new _utils_mouseEventHandler__WEBPACK_IMPORTED_MODULE_1__["default"](this); // dynamic listeners

      this.domElement.addEventListener("eventListenerAdded", function () {
        return _this.mouseEventHandle.resync();
      });
      this.domElement.addEventListener("eventListenerRemoved", function () {
        return _this.mouseEventHandle.resync();
      });
    } // add animation compoment if dom element has animation

  }, {
    key: "checkAnimation",
    value: function checkAnimation() {
      if (parseFloat(this.style.animationDuration) || parseFloat(this.style.transitionDuration)) this.entity.setAttribute("vr-animate", "");else this.entity.removeAttribute("vr-animate");
    }
  }, {
    key: "initHover",
    value: function initHover() {
      var _this2 = this;

      // find what has hover
      var tag = null;
      if (this.web2vr.hoverSelectors.has(this.domElement.tagName.toLowerCase())) tag = this.domElement.tagName.toLowerCase();
      var classes = [];

      var _iterator = _createForOfIteratorHelper(this.domElement.classList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cls = _step.value;
          if (this.web2vr.hoverSelectors.has("." + cls)) classes.push(cls);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var id = null;
      if (this.web2vr.hoverSelectors.has("#" + this.domElement.id)) id = this.domElement.id; // add mouseenter and mouseleave if element has hover.

      if (tag || classes.length > 0 || id) {
        this.entity.addEventListener("mouseenter", function () {
          if (tag) _this2.domElement.classList.add(tag + "hover");

          if (classes.length > 0) {
            var _iterator2 = _createForOfIteratorHelper(classes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var cls = _step2.value;

                _this2.domElement.classList.add(cls + "hover");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (id) _this2.domElement.classList.add(id + "hover"); // this is only for hover transform. Update all elements when transform gets added

          if (_this2.style.transform != "none") {
            _this2.web2vr.update();

            _this2.hoverTransform = true;
          }
        });
        this.entity.addEventListener("mouseleave", function () {
          if (tag) _this2.domElement.classList.remove(tag + "hover");

          if (classes.length > 0) {
            var _iterator3 = _createForOfIteratorHelper(classes),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var cls = _step3.value;

                _this2.domElement.classList.remove(cls + "hover");
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          if (id) _this2.domElement.classList.remove(id + "hover");

          if (_this2.hoverTransform) {
            _this2.position.depth = _this2.position.startDepth;

            var _iterator4 = _createForOfIteratorHelper(_this2.domElement.querySelectorAll('*')),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var element = _step4.value;

                if (element.element) {
                  element.element.parentTransform = "none";
                  element.element.position.depth = element.element.position.startDepth;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        });
      }
    } // getBoundingClientRect works great with margin while with padding it has problems with paddingRight that needs to be manualy calculated and set
    // because dealing with paddingRight is problematic we can make the padding be margin for the textNode(vr-span)

  }, {
    key: "paddingToMargin",
    value: function paddingToMargin() {
      // only if element has text
      if (this.domElement.textContent.trim()) {
        //const left = this.domElement.parentElement.element.style.paddingLeft;
        var right = this.domElement.parentElement.element.style.paddingRight; //const top = this.domElement.parentElement.element.style.paddingTop;
        //const bottom = this.domElement.parentElement.element.style.paddingBottom;

        /*if (parseFloat(left)) {
            this.domElement.style.marginLeft = left;
            this.domElement.parentElement.style.paddingLeft = "0px";
        }*/

        if (parseFloat(right)) {
          this.domElement.style.marginRight = right;
          this.domElement.parentElement.style.paddingRight = "0px";
        }
        /*if (parseFloat(top)) {
            this.domElement.style.marginTop = top;
            //this.domElement.parentElement.style.paddingTop = "0px";
        }
        if (parseFloat(bottom)) {
            this.domElement.style.marginBottom = bottom;
            //this.domElement.parentElement.style.paddingBottom = "0px";
        }*/

      }
    }
  }, {
    key: "init",
    value: function init() {
      // reference of the element for aframe compoment
      this.entity.element = this; // dont need light to affect material

      this.entity.setAttribute("material", "shader", "flat"); //init sizes at start

      this.entity.setAttribute("width", this.position.width);
      this.entity.setAttribute("height", this.position.height);
      this.initEventHandlers();
      this.setupClipping();
    }
  }, {
    key: "update",
    value: function update() {
      var clientRect = this.domElement.getBoundingClientRect(); // its not on the screen

      if (clientRect.width == 0 || clientRect.height == 0) {
        this.entity.object3D.visible = false;
        if (!this.domElement.classList.contains("vr-span")) this.entity.classList.remove(this.web2vr.settings.interactiveTag);
        this.position.aframePosition.y = 1000; // for some reason raycast still hits so have to move position

        return;
      } // for future move this in TextElement class


      if (this.domElement.classList.contains("vr-span")) {
        // dont need interaction with the text when we always have the background as interaction
        this.entity.classList.remove(this.web2vr.settings.interactiveTag); // so all inline text width is good, dont do this if its text inside button

        if (this.domElement.parentElement.tagName != "BUTTON") {
          clientRect.width += 8;
          clientRect.x -= 2;
        }
      } // set fixed container height if its using scrollBody, best is to move this code outside update loop for future


      if (this.web2vr.scroll.hasScroll && this.domElement == this.web2vr.container && this.web2vr.scroll.scrollBody) clientRect.height = this.web2vr.settings.scrollWindowHeight;
      this.position.updatePosition(clientRect);
      this.checkVisible();

      if (this.visible) {
        this.style = window.getComputedStyle(this.domElement); // its on visible screen but its hidden by style

        if (this.style.visibility === "hidden" || this.style.display === "none") {
          this.entity.object3D.visible = false;
          if (!this.domElement.classList.contains("vr-span")) this.entity.classList.remove(this.web2vr.settings.interactiveTag);
          this.position.aframePosition.y = 1000; // for some reason raycast still hits so have to move position
          // update border so we can remove it because element is hidden

          this.updateBorder();
          return;
        } else {
          this.entity.object3D.visible = true; // for input text because it has custom event for entity it cannot detect with this.mouseEventHandle.listeningForMouseEvents
          // we have to check tagName and type to see if its input text, for future make this work with mouseEventHandle
          // also add interactiveTag if its main container

          if (!this.domElement.classList.contains("vr-span") && (this.mouseEventHandle.listeningForMouseEvents || this.domElement.tagName == "INPUT" && this.domElement.type == "text") || this.domElement == this.web2vr.container) this.entity.classList.add(this.web2vr.settings.interactiveTag);
        } // if there is transform then width and height will be set with the transform matrix scale
        // using needsStartingTransformSize so width and height are never 0 when doing transform scale


        if (this.style.transform == "none" || this.needsStartingTransformSize) {
          this.entity.setAttribute("width", this.position.width);
          this.entity.setAttribute("height", this.position.height);
        }

        this.checkAnimation();
        var opacity = this.style.opacity;
        this.entity.setAttribute("opacity", opacity);
        this.specificUpdate();
        this.updateTransform();
        this.updateClipping();
      }

      this.updateBorder();
    }
  }, {
    key: "updateTransform",
    value: function updateTransform() {
      var transform = this.style.transform;
      if (transform == "none") transform = this.parentTransform;else {
        // give transform to all descendents
        var _iterator5 = _createForOfIteratorHelper(this.domElement.querySelectorAll('*')),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;
            if (element.element) element.element.parentTransform = transform;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      if (transform != "none") {
        this.needsStartingTransformSize = false;
        var matrixType = transform.split('(')[0]; // get matrix values in float

        var values = transform.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        values = values.map(function (v) {
          return parseFloat(v);
        });
        var matrix = null;

        if (matrixType == "matrix") {
          // transform to matrix4x4 and invert skewX to match three.js
          matrix = new THREE.Matrix4().fromArray([values[0], values[1], 0, 0, -values[2], values[3], 0, 0, 0, 0, 1, 0, values[4], values[5], 0, 1]);
        } else if (matrixType == "matrix3d") {
          // invert skewX and skewZ? to match three.js
          values[4] *= -1;
          values[9] *= -1;
          matrix = new THREE.Matrix4().fromArray(values);
        }

        var position = new THREE.Vector3();
        var quaternion = new THREE.Quaternion();
        var scale = new THREE.Vector3();
        matrix.decompose(position, quaternion, scale); // position

        this.position.domPosition.x += position.x;
        this.position.domPosition.y += position.y;
        if (position.z != 0) this.position.depth = position.z * this.position.scalingFactor + this.position.startDepth; // rotation

        this.entity.object3D.rotation.setFromRotationMatrix(matrix); // calcualte scale and set it to entity

        if (this.parentTransform == "none") {
          var elements = matrix.elements;
          var scaleX = Math.sqrt(elements[0] * elements[0] + elements[1] * elements[1]);
          var scaleY = Math.sqrt(elements[5] * elements[5] + elements[4] * elements[4]); // for radio scale is 2 times smaller because its circle, for some rason checkbox scale needs to be in half else its too big

          if (this.domElement.tagName == "INPUT" && (this.domElement.type == "radio" || this.domElement.type == "checkbox")) this.entity.object3D.scale.set(scaleX / 2, scaleY / 2, 1);else this.entity.object3D.scale.set(scaleX, scaleY, 1);
        }
      }

      this.entity.object3D.position.set(this.position.x, this.position.y, this.position.z);
    } // abstract method

  }, {
    key: "specificUpdate",
    value: function specificUpdate() {}
  }, {
    key: "updateBorder",
    value: function updateBorder() {
      if (this.web2vr.settings.border) {
        // using borderTopWidth and borderTopColor because borderWidth and borderColor doesnt work in firefox
        var borderWidth = parseFloat(this.style.borderTopWidth);

        if ((borderWidth || this.borderWidth) && this.entity.object3D.visible) {
          this.entity.setAttribute("vr-border", "width:".concat(borderWidth, "; color:").concat(this.style.borderTopColor, ";"));
          this.entity.components["vr-border"].updateBorder();
        } else if (this.entity.components["vr-border"]) this.entity.removeAttribute("vr-border");
      }
    }
  }, {
    key: "rotateNormal",
    value: function rotateNormal(normal) {
      var normalMatrix = new THREE.Matrix3().getNormalMatrix(this.web2vr.aframe.container.object3D.matrixWorld);
      var output = normal.clone().applyMatrix3(normalMatrix).normalize();
      return output;
    }
  }, {
    key: "getClippingContext",
    value: function getClippingContext() {
      var output = null;
      if (this.domElement.parentNode && this.domElement.parentNode.element && this.domElement.parentNode.element.clippingContext) output = this.domElement.parentNode.element.clippingContext;else {
        if (this.style.overflow && this.style.overflow == "hidden" || this.web2vr.scroll.hasScroll && this.domElement == this.web2vr.container || this.web2vr.settings.forceClipping && this.domElement == this.web2vr.container) {
          // ignore if its svg
          if (this.domElement.tagName != "svg") {
            var clippingContext = {};
            clippingContext.authority = this;
            clippingContext.bottom = new THREE.Plane(this.rotateNormal(new THREE.Vector3(0, 1, 0))); // normal up

            clippingContext.top = new THREE.Plane(this.rotateNormal(new THREE.Vector3(0, -1, 0))); // normal down

            clippingContext.left = new THREE.Plane(this.rotateNormal(new THREE.Vector3(1, 0, 0))); // normal right

            clippingContext.right = new THREE.Plane(this.rotateNormal(new THREE.Vector3(-1, 0, 0))); // normal left

            clippingContext.planes = [clippingContext.bottom, clippingContext.top, clippingContext.left, clippingContext.right];
            output = clippingContext;
          }
        }
      }
      return output;
    }
  }, {
    key: "setupClipping",
    value: function setupClipping() {
      var _this3 = this;

      var clippingContext = this.getClippingContext();

      if (clippingContext) {
        this.clippingContext = clippingContext; // we are sure the renderer is loaded

        var object3D = this.entity.object3D;

        if (!object3D || !object3D.children || !object3D.children.length > 0 || !object3D.children[0].material) {
          return;
        }

        var material = object3D.children[0].material;
        material.clippingPlanes = clippingContext.planes; //this.updateClipping();

        setTimeout(function () {
          _this3.updateClipping();
        }, 200); // if it doesnt work use this
      }
    }
  }, {
    key: "updateClipping",
    value: function updateClipping() {
      // only element with authority can change the clipping planes position
      if (!this.clippingContext || this.clippingContext.authority != this) return;
      var position = this.entity.object3D.position;
      var bottomLocal = position.clone().add(new THREE.Vector3(0, -1, 0).multiplyScalar(this.position.height / 2));
      var topLocal = position.clone().add(new THREE.Vector3(0, 1, 0).multiplyScalar(this.position.height / 2));
      var leftLocal = position.clone().add(new THREE.Vector3(-1, 0, 0).multiplyScalar(this.position.width / 2));
      var rightLocal = position.clone().add(new THREE.Vector3(1, 0, 0).multiplyScalar(this.position.width / 2));
      var bottomGlobal = this.web2vr.aframe.container.object3D.localToWorld(bottomLocal.clone());
      var topGlobal = this.web2vr.aframe.container.object3D.localToWorld(topLocal.clone());
      var leftGlobal = this.web2vr.aframe.container.object3D.localToWorld(leftLocal.clone());
      var rightGlobal = this.web2vr.aframe.container.object3D.localToWorld(rightLocal.clone());
      this.clippingContext.bottom.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(0, 1, 0)), bottomGlobal).normalize();
      this.clippingContext.top.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(0, -1, 0)), topGlobal).normalize();
      this.clippingContext.left.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(1, 0, 0)), leftGlobal).normalize();
      this.clippingContext.right.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(-1, 0, 0)), rightGlobal).normalize();

      if (this.web2vr.settings.showClipping) {
        if (!this.clippingPlaneHelpers) {
          this.clippingPlaneHelpers = [];

          var _iterator6 = _createForOfIteratorHelper(this.clippingContext.planes),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var plane = _step6.value;
              var material = new THREE.MeshBasicMaterial({
                color: 0x00e33d,
                side: THREE.DoubleSide
              });
              var geometry = new THREE.PlaneGeometry(200 * this.position.scalingFactor, 200 * this.position.scalingFactor); // no need same width and height as container because this is only for debugging

              var mesh = new THREE.Mesh(geometry, material);
              mesh.debugPlane = plane;
              this.clippingPlaneHelpers.push(mesh);
              var axisHelper = new THREE.AxesHelper(5);
              mesh.add(axisHelper);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var _iterator7 = _createForOfIteratorHelper(this.clippingPlaneHelpers),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var helper = _step7.value;
              this.web2vr.aframe.scene.object3D.add(helper);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        var _iterator8 = _createForOfIteratorHelper(this.clippingPlaneHelpers),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _mesh = _step8.value;
            _mesh.visible = true;
            var worldPos = new THREE.Vector3();
            this.entity.object3D.getWorldPosition(worldPos);
            var point = new THREE.Vector3();

            _mesh.debugPlane.projectPoint(worldPos, point);

            _mesh.position.set(point.x, point.y, point.z); // clipping plane normals are inverted, we multiply by -1


            var focalPoint = point.clone().add(_mesh.debugPlane.normal.clone().multiplyScalar(-1));

            _mesh.lookAt(focalPoint);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      } else {
        if (this.clippingPlaneHelpers) {
          var _iterator9 = _createForOfIteratorHelper(this.clippingPlaneHelpers),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _mesh2 = _step9.value;
              _mesh2.visible = false;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      }
    }
  }, {
    key: "checkVisible",
    value: function checkVisible() {
      if (this.clippingContext) {
        var container = this.clippingContext.authority;

        if (this.position.bottom.y > container.position.top.y || this.position.top.y < container.position.bottom.y) {
          this.visible = false;
          this.entity.object3D.visible = false; // remove interactive tag

          if (!this.domElement.classList.contains("vr-span")) this.entity.classList.remove(this.web2vr.settings.interactiveTag);
        } else {
          this.visible = true;
          this.entity.object3D.visible = true; // interactive tag so we can do raycasting if it has mouse events or its container background

          if (!this.domElement.classList.contains("vr-span") && this.mouseEventHandle.listeningForMouseEvents || this.domElement == this.web2vr.container) this.entity.classList.add(this.web2vr.settings.interactiveTag);
        }
      }
    }
  }]);

  return Element;
}();



/***/ }),

/***/ "./src/elements/imageElement.js":
/*!**************************************!*\
  !*** ./src/elements/imageElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ImageElement = /*#__PURE__*/function (_Element) {
  _inherits(ImageElement, _Element);

  var _super = _createSuper(ImageElement);

  function ImageElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, ImageElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.currentSrc = null;
    _this.changed = false;
    _this.entity = document.createElement("a-image");

    _this.entity.setAttribute("material", "side", "front"); // know when image is loaded


    _this.loaded = false;

    _this.domElement.addEventListener("load", function () {
      _this.loaded = true; // if image changed update all after image loaded

      if (_this.changed) {
        _this.changed = false;

        _this.web2vr.update();
      }
    });

    return _this;
  }

  _createClass(ImageElement, [{
    key: "updateImage",
    value: function updateImage(src) {
      var assetID = this.web2vr.aframe.assetManager.getAsset(src, "img");
      this.entity.setAttribute("id", "IMAGE_" + assetID);
      var isGif = /\.(gif)$/i;

      if (isGif.test(src)) {
        this.entity.setAttribute("material", "shader", "gif");
        this.entity.setAttribute("material", "src", "#" + assetID);
      } else {
        this.entity.setAttribute("material", "shader", "flat");
        this.entity.setAttribute("src", "#" + assetID);
      }
    }
  }, {
    key: "specificUpdate",
    value: function specificUpdate() {
      var src = this.domElement.getAttribute("src");

      if (src != this.currentSrc) {
        if (this.currentSrc) {
          this.loaded = false;
          this.changed = true;
        }

        this.currentSrc = src;
        this.updateImage(this.currentSrc);
      }
    }
  }]);

  return ImageElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]); // TODO: No need to save image copy in assets you can directly read it from the orignal




/***/ }),

/***/ "./src/elements/inputElement.js":
/*!**************************************!*\
  !*** ./src/elements/inputElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputElement; });
/* harmony import */ var _textElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textElement */ "./src/elements/textElement.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var InputElement = /*#__PURE__*/function (_TextElement) {
  _inherits(InputElement, _TextElement);

  var _super = _createSuper(InputElement);

  function InputElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, InputElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.borderColor = new THREE.Color(0x000000);
    _this.borderWidth = 1;
    _this.active = false; // update when there is change of value

    _this.domElement.addEventListener("input", function () {
      return _this.update();
    }); // when clicked make it active input for the keyboard and position the keyboard relative to camera


    _this.entity.addEventListener("click", function () {
      var camera = _this.web2vr.aframe.scene.camera.parent;
      var keyboard = _this.web2vr.aframe.keyboard.object3D;
      keyboard.position.copy(camera.position);
      keyboard.rotation.copy(camera.rotation);
      keyboard.rotation.z = 0;
      keyboard.rotation.x = THREE.Math.degToRad(-30);
      keyboard.translateX(-0.24);
      keyboard.translateY(-0.1);
      keyboard.translateZ(-0.6);
      keyboard.visible = true;

      if (_this.web2vr.aframe.keyboard.activeInput) {
        _this.web2vr.aframe.keyboard.activeInput.element.active = false; // update web2vr where activeInput is located

        _this.web2vr.aframe.keyboard.activeInput.element.web2vr.update();
      }

      _this.active = true;
      _this.web2vr.aframe.keyboard.activeInput = _this.domElement;

      _this.web2vr.update();
    });

    return _this;
  }

  _createClass(InputElement, [{
    key: "updateText",
    value: function updateText() {
      var value = this.domElement.value;
      if (value) this.textValue = value;else this.textValue = this.domElement.placeholder;
    }
  }, {
    key: "updateTextColor",
    value: function updateTextColor() {
      var value = this.domElement.value;
      if (value) _get(_getPrototypeOf(InputElement.prototype), "updateTextColor", this).call(this);else this.entity.setAttribute("text", "color", "#999");
      if (this.active) this.entity.setAttribute("color", "#ffffcc");
    }
  }]);

  return InputElement;
}(_textElement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/radioElement.js":
/*!**************************************!*\
  !*** ./src/elements/radioElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var RadioElement = /*#__PURE__*/function (_Element) {
  _inherits(RadioElement, _Element);

  var _super = _createSuper(RadioElement);

  function RadioElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, RadioElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.borderColor = new THREE.Color(0x000000);
    _this.borderWidth = 1;
    _this.entity = document.createElement("a-circle");

    _this.domElement.addEventListener("click", function () {
      _this.web2vr.update();
    }.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(RadioElement, [{
    key: "specificUpdate",
    value: function specificUpdate() {
      this.entity.setAttribute("radius", this.position.width / 2);
      if (this.domElement.checked) this.entity.setAttribute("color", "#0075FF");else this.entity.setAttribute("color", "#FFFFFF");
    }
  }]);

  return RadioElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/svgElement.js":
/*!************************************!*\
  !*** ./src/elements/svgElement.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SvgElement = /*#__PURE__*/function (_Element) {
  _inherits(SvgElement, _Element);

  var _super = _createSuper(SvgElement);

  function SvgElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, SvgElement);

    _this = _super.call(this, web2vr, domElement, layer);
    _this.imageId = null;
    _this.entity = document.createElement("a-image");
    return _this;
  }

  _createClass(SvgElement, [{
    key: "svgToImage",
    value: function svgToImage() {
      var _this2 = this;

      var svgString = new XMLSerializer().serializeToString(this.domElement);
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = this.position.domPosition.width * 2;
      canvas.height = this.position.domPosition.height * 2;
      var DOMURL = self.URL || self.webkitURL || self;
      var img = new Image();
      var svg = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
      });
      var url = DOMURL.createObjectURL(svg);

      img.onload = function () {
        if (_this2.domElement.style.width) ctx.drawImage(img, 0, 0, canvas.width * 2, canvas.height * 2);else ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        DOMURL.revokeObjectURL(url);

        _this2.updateImage(canvas.toDataURL());

        canvas.remove();
      };

      img.src = url;
    }
  }, {
    key: "updateImage",
    value: function updateImage(src) {
      var assetId = this.web2vr.aframe.assetManager.getAsset(src, "img"); // remove old image if there is new image

      if (this.imageId && this.imageId != assetId) this.web2vr.aframe.assetManager.removeAsset(this.imageId);
      this.entity.setAttribute("id", "IMAGE_" + assetId);
      this.entity.setAttribute("src", "#" + assetId);
      this.imageId = assetId;
    }
  }, {
    key: "specificUpdate",
    value: function specificUpdate() {
      this.svgToImage();
    }
  }]);

  return SvgElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/textElement.js":
/*!*************************************!*\
  !*** ./src/elements/textElement.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextElement; });
/* harmony import */ var _containerElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerElement */ "./src/elements/containerElement.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TextElement = /*#__PURE__*/function (_ContainerElement) {
  _inherits(TextElement, _ContainerElement);

  var _super = _createSuper(TextElement);

  function TextElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, TextElement);

    _this = _super.call(this, web2vr, domElement, layer, false);

    _this.entity.setAttribute("text", "value", "");

    _this.textValue = null;
    return _this;
  }

  _createClass(TextElement, [{
    key: "setupClipping",
    value: function setupClipping() {
      var clippingContext = this.getClippingContext();

      if (clippingContext) {
        this.clippingContext = clippingContext;
        var material = this.entity.components.text.material; // text component uses custom shader so default three.js clipping doesnt work, needed to inject clipping shader code inside the custom shader code(RawShaderMaterial)
        // help from https://stackoverflow.com/questions/42532545/add-clipping-to-three-shadermaterial
        // 1.1.0 version changes: Because Aframe 1.1.0 changes text material shader to use webgl 2(glsl 3) some of the three.js ShaderChunk had to be converted to glsl 3.

        var fragmentShader = "#version 300 es\n            precision highp float;\n            uniform bool negate;\n            uniform float alphaTest;\n            uniform float opacity;\n            uniform sampler2D map;\n            uniform vec3 color;\n            in vec2 vUV;\n            out vec4 fragColor;\n            float median(float r, float g, float b) {\n                return max(min(r, g), min(max(r, g), b));\n            }\n            #define BIG_ENOUGH 0.001\n            #define MODIFIED_ALPHATEST (0.02 * isBigEnough / BIG_ENOUGH)\n            \n            // clipping_planes_pars_fragment converted to glsl 3\n            #if NUM_CLIPPING_PLANES > 0\n                in vec3 vClipPosition;\n                uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n            #endif\n            \n            void main() {\n                // compatible with glsl 3\n                #include <clipping_planes_fragment>\n\n                vec3 sampleColor = texture(map, vUV).rgb;\n                if (negate) { sampleColor = 1.0 - sampleColor; }\n                float sigDist = median(sampleColor.r, sampleColor.g, sampleColor.b) - 0.5;\n                float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);\n                float dscale = 0.353505;\n                vec2 duv = dscale * (dFdx(vUV) + dFdy(vUV));\n                float isBigEnough = max(abs(duv.x), abs(duv.y));\n                // Do modified alpha test.\n                if (isBigEnough > BIG_ENOUGH) {\n                    float ratio = BIG_ENOUGH / isBigEnough;\n                    alpha = ratio * alpha + (1.0 - ratio) * (sigDist + 0.5);\n                }\n                // Do modified alpha test.\n                if (alpha < alphaTest * MODIFIED_ALPHATEST) { discard; return; }\n                fragColor = vec4(color.xyz, alpha * opacity);\n            }";
        var vertexShader = "#version 300 es\n            in vec2 uv;\n            in vec3 position;\n            uniform mat4 projectionMatrix;\n            uniform mat4 modelViewMatrix;\n            out vec2 vUV;\n\n            // clipping_planes_pars_vertex converted to glsl 3\n            #if NUM_CLIPPING_PLANES > 0\n\t            out vec3 vClipPosition;\n            #endif\n\n            void main(void) {\n                // compatible with glsl 3\n                #include <begin_vertex>\n\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                vUV = uv;\n\n                // compatible with glsl 3\n                #include <project_vertex>\n                #include <clipping_planes_vertex>\n\n            }";
        material.fragmentShader = fragmentShader;
        material.vertexShader = vertexShader;
        material.clipping = true;
        material.clippingPlanes = clippingContext.planes;
        this.updateClipping();
      }
    }
  }, {
    key: "updateTextAlignment",
    value: function updateTextAlignment() {
      // align css text-align to text component
      var align = this.style.textAlign;
      if (!["left", "right", "center"].includes(align)) align = "left";
      this.entity.setAttribute("text", "align", align); // set text lineHeight if it has custom css lineHeight

      var text = this.entity.components.text;

      if (this.style.lineHeight != "normal" && typeof text.currentFont != "undefined") {
        this.entity.setAttribute("text", "lineHeight", text.currentFont.common.lineHeight + parseFloat(this.style.lineHeight));
      }
    }
  }, {
    key: "updateTextSize",
    value: function updateTextSize() {
      var actualFontSize = parseFloat(this.style.fontSize);
      var width = this.position.width;
      var widthInPixels = width / this.position.scalingFactor;
      var wrapPixels = widthInPixels * 42 / actualFontSize;
      wrapPixels *= 1.107; //1.10706774183070233

      this.entity.setAttribute("text", "wrapPixels", wrapPixels);
      this.entity.setAttribute("text", "width", width);
    }
  }, {
    key: "updateTextColor",
    value: function updateTextColor() {
      // opacity from parent because it doesnt pass it to children
      var opacity = this.domElement.parentElement.element.style.opacity;
      this.entity.setAttribute("text", "opacity", opacity);
      var textColor = this.style.color;
      this.entity.setAttribute("text", "color", textColor);
    }
  }, {
    key: "updateText",
    value: function updateText() {
      // remove new lines and whitespaces
      this.textValue = this.domElement.textContent.replace(/\s{2,}/g, ' ');
    }
  }, {
    key: "specificUpdate",
    value: function specificUpdate() {
      _get(_getPrototypeOf(TextElement.prototype), "specificUpdate", this).call(this);

      this.updateTextSize();
      this.updateTextAlignment();
      this.updateText();
      this.entity.setAttribute("text", "value", this.textValue);
      this.updateTextColor();
    }
  }]);

  return TextElement;
}(_containerElement__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/elements/videoElement.js":
/*!**************************************!*\
  !*** ./src/elements/videoElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoElement; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var VideoElement = /*#__PURE__*/function (_Element) {
  _inherits(VideoElement, _Element);

  var _super = _createSuper(VideoElement);

  function VideoElement(web2vr, domElement, layer) {
    var _this;

    _classCallCheck(this, VideoElement);

    _this = _super.call(this, web2vr, domElement, layer); // normal video

    _this.entity = document.createElement("a-video"); // 360 video

    _this.video360 = document.createElement("a-videosphere");

    _this.web2vr.aframe.scene.appendChild(_this.video360);

    _this.createClickEvent();

    _this.domElement.addEventListener("play", function () {
      if (_this.domElement.hasAttribute("vr")) _this.video360.components.material.material.map.image.play();
    });

    _this.domElement.addEventListener("pause", function () {
      if (_this.domElement.hasAttribute("vr")) _this.video360.components.material.material.map.image.pause();
    });

    return _this;
  }

  _createClass(VideoElement, [{
    key: "createClickEvent",
    value: function createClickEvent() {
      var _this2 = this;

      // for normal video
      this.domElement.addEventListener("click", function () {
        _this2.domElement.paused ? _this2.domElement.play() : _this2.domElement.pause();
      });
    }
  }, {
    key: "specificUpdate",
    value: function specificUpdate() {
      var src = this.domElement.currentSrc;
      var id = this.domElement.id; // if there is no video id generate new id

      if (!id) {
        id = this.web2vr.aframe.assetManager.updateCurrentAssetIdReturn();
        this.domElement.id = id;
      }

      if (this.domElement.hasAttribute("vr")) {
        this.video360.object3D.visible = true;
        this.video360.classList.add(this.web2vr.settings.interactiveTag);
        this.entity.object3D.visible = false;
        this.entity.classList.remove(this.web2vr.settings.interactiveTag);
        this.video360.setAttribute("src", "#" + id); // set video360 rotation

        var rotation = this.domElement.getAttribute("vr");
        if (rotation) this.video360.object3D.rotation.y = THREE.Math.degToRad(rotation);else this.video360.object3D.rotation.y = 0;
      } else {
        this.video360.object3D.visible = false;
        this.video360.classList.remove(this.web2vr.settings.interactiveTag);
        this.entity.object3D.visible = true;
        this.entity.classList.add(this.web2vr.settings.interactiveTag);
        this.entity.setAttribute("src", "#" + id);
      }
    }
  }]);

  return VideoElement;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/plugins/aframe-keyboard.min.js":
/*!********************************************!*\
  !*** ./src/plugins/aframe-keyboard.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function a(d) {
    if (t[d]) return t[d].exports;
    var n = t[d] = {
      i: d,
      l: !1,
      exports: {}
    };
    return e[d].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.m = e, a.c = t, a.d = function (e, t, d) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: d
    });
  }, a.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var d = Object.create(null);
    if (a.r(d), Object.defineProperty(d, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      a.d(d, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return d;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "", a(a.s = 0);
}([function (e, t, a) {
  a(1), a(3);
  var d = a(4),
      n = {
    mode: "normal"
  };
  n.template = new d(), e.exports = window.AFK = n;
}, function (e, t, a) {
  var d = a(2);
  if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
  AFRAME.registerComponent("a-keyboard", {
    schema: {
      audio: {
        "default": !1
      },
      color: {
        "default": "#fff"
      },
      highlightColor: {
        "default": "#1a79dc"
      },
      dismissable: {
        "default": !0
      },
      font: {
        "default": "monoid"
      },
      fontSize: {
        "default": "0.39"
      },
      locale: {
        "default": "en"
      },
      model: {
        "default": ""
      },
      baseTexture: {
        "default": ""
      },
      keyTexture: {
        "default": ""
      },
      verticalAlign: {
        "default": "center"
      }
    },
    init: function init() {
      AFK.template.draw(_objectSpread(_objectSpread({}, this.data), {}, {
        el: this.el
      })), this.attachEventListeners();
    },
    attachEventListeners: function attachEventListeners() {
      window.addEventListener("keydown", this.handleKeyboardPress), this.el.addEventListener("click", this.handleKeyboardVR);
    },
    removeEventListeners: function removeEventListeners() {
      window.removeEventListener("keydown", this.handleKeyboardPress), this.el.removeEventListener("click", this.handleKeyboardVR);
    },
    handleKeyboardPress: function handleKeyboardPress(e) {
      d(e);
    },
    handleKeyboardVR: function handleKeyboardVR(e) {
      d(e, "vr");
    },
    remove: function remove() {
      this.removeEventListeners();
    }
  });
}, function (e, t) {
  e.exports = function (e, t) {
    var a;
    var d = new Set([16, 17, 18, 20, 33, 34, 35, 36, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123]),
        n = e.key && e.key.charCodeAt(0);
    var r = e.key,
        s = e.keyCode;
    if ("vr" === t) s = parseInt(document.querySelector("#".concat(e.target.id)).getAttribute("key-code")), r = document.querySelector("#".concat(e.target.id)).getAttribute("value");else if (d.has(e.keyCode)) return;

    switch (s) {
      case 9:
        a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: "\t"
          }
        }), document.dispatchEvent(a);
        break;

      case 8:
        a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: ""
          }
        }), document.dispatchEvent(a);
        break;

      case 13:
        a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: "\n"
          }
        }), document.dispatchEvent(a);
        break;

      case 16:
        AFK.template.toggleActiveMode("shift");
        break;

      case 18:
        AFK.template.toggleActiveMode("alt");
        break;

      case 27:
        this.dismissable && (a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: ""
          }
        }), document.dispatchEvent(a));
        break;

      case 32:
        a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: " "
          }
        }), document.dispatchEvent(a);
        break;

      default:
        a = new CustomEvent("a-keyboard-update", {
          detail: {
            code: s,
            value: r
          }
        }), document.dispatchEvent(a);
    }

    if ("vr" !== t) {
      var _t = document.querySelector("#a-keyboard-".concat(n)) || document.querySelector("#a-keyboard-".concat(e.keyCode));

      _t && (_t.dispatchEvent(new Event("mousedown")), setTimeout(function () {
        _t.dispatchEvent(new Event("mouseleave"));
      }, 80));
    }
  };
}, function (e, t) {
  if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
  AFRAME.registerComponent("keyboard-button", {
    init: function init() {
      var _this = this;

      var e = this.el;
      e.addEventListener("mousedown", function () {
        e.setAttribute("material", "opacity", "0.7");
      }), e.addEventListener("mouseup", function () {
        e.setAttribute("material", "opacity", _this.isMouseEnter ? "0.9" : "0");
      }), e.addEventListener("mouseenter", function () {
        e.setAttribute("material", "opacity", "0.9"), self.isMouseEnter = !0;
      }), e.addEventListener("mouseleave", function () {
        e.setAttribute("material", "opacity", "0"), self.isMouseEnter = !1;
      });
    }
  });
}, function (e, t, a) {
  var d = a(5);

  e.exports = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.keyboardKeys = {}, this.activeMode = "normal";
    }

    _createClass(_class, [{
      key: "draw",
      value: function draw(e) {
        for (var _t2 in e) {
          this[_t2] = e[_t2];
        }

        this.keyboardKeys = d(e.locale), this.drawKeyboard();
      }
    }, {
      key: "drawButton",
      value: function drawButton(e) {
        var t = e.key,
            a = t.size.split(" ")[0],
            d = t.size.split(" ")[1],
            n = document.createElement("a-entity");
        n.setAttribute("position", e.position);
        var r = document.createElement("a-entity");
        r.setAttribute("geometry", "primitive: plane; width: ".concat(a, "; height: ").concat(d, ";")), this.keyTexture && this.keyTexture.length > 0 ? r.setAttribute("material", "src: ".concat(this.keyTexture)) : r.setAttribute("material", "color: #4a4a4a; opacity: 0.9");
        var s = document.createElement("a-text");
        s.id = "a-keyboard-".concat(t.code), s.setAttribute("key-code", t.code), s.setAttribute("value", t.value), s.setAttribute("align", "center"), s.setAttribute("baseline", this.verticalAlign), s.setAttribute("position", "0 0 0.001"), s.setAttribute("width", this.fontSize), s.setAttribute("height", this.fontSize), s.setAttribute("geometry", "primitive: plane; width: ".concat(a, "; height: ").concat(d)), s.setAttribute("material", "opacity: 0.0; transparent: true; color: ".concat(this.highlightColor)), s.setAttribute("color", this.color), s.setAttribute("font", this.font), s.setAttribute("shader", "msdf"), s.setAttribute("negate", "false"), s.setAttribute("keyboard-button", !0), s.setAttribute("class", "collidable"), n.appendChild(r), n.appendChild(s), this.el.appendChild(n);
      }
    }, {
      key: "drawKeyboard",
      value: function drawKeyboard() {
        for (; this.el.firstChild;) {
          this.el.removeChild(this.el.firstChild);
        }

        if (this.keyboardKeys) {
          var _e = this.keyboardKeys[this.activeMode] || this.keyboardKeys.normal,
              _t3 = document.createElement("a-entity"),
              _a = .52,
              _d = .04 * _e.length + .004 * (_e.length - 1) + .04;

          _t3.setAttribute("position", "".concat(_a / 2 - .02, " ").concat(-_d / 2 + .02, " -0.01")), _t3.setAttribute("geometry", "primitive: plane; width: ".concat(_a, "; height: ").concat(_d)), this.baseTexture && this.baseTexture.length > 0 ? _t3.setAttribute("material", "src: ".concat(this.baseTexture)) : _t3.setAttribute("material", "color: #4a4a4a; side: double; opacity: 0.7"), this.el.appendChild(_t3);
          var n = 0;

          for (var _t4 = 0; _t4 < _e.length; _t4++) {
            var _a2 = _e[_t4];
            var _d2 = 0;

            for (var _e2 = 0; _e2 < _a2.length; _e2++) {
              var _t5 = _a2[_e2],
                  r = this.parseKeyObjects(_t5);
              if (!this.dismissable && "cancel" === _t5.type) continue;
              var s = r.size.split(" ")[0],
                  l = r.size.split(" ")[1];
              this.drawButton({
                key: r,
                position: "".concat(_d2 + s / 2, " ").concat(n - l / 2, " 0")
              }), _d2 += parseFloat(s) + .004, _a2.length === _e2 + 1 && (n -= .044);
            }
          }
        }
      }
    }, {
      key: "toggleActiveMode",
      value: function toggleActiveMode(e) {
        e === this.activeMode ? (this.activeMode = "normal", this.drawKeyboard()) : (this.activeMode = e, this.drawKeyboard());
      }
    }, {
      key: "parseKeyObjects",
      value: function parseKeyObjects(e) {
        var t = e.type,
            a = e.value;

        switch (t) {
          case "delete":
            return {
              size: "0.04 0.04 0",
              value: a,
              code: "8"
            };

          case "enter":
            return {
              size: "0.04 0.084 0",
              value: a,
              code: "13"
            };

          case "shift":
            return {
              size: "0.084 0.04 0",
              value: a,
              code: "16"
            };

          case "alt":
            return {
              size: "0.084 0.04 0",
              value: a,
              code: "18"
            };

          case "space":
            return {
              size: "".concat(.2 + .016, " 0.04 0"),
              value: a,
              code: "32"
            };

          case "cancel":
            return {
              size: "0.084 0.04 0",
              value: a,
              code: "24"
            };

          case "submit":
            return {
              size: "0.084 0.04 0",
              value: a,
              code: "06"
            };

          default:
            return {
              size: "0.04 0.04 0",
              value: a,
              code: a.charCodeAt(0)
            };
        }
      }
    }]);

    return _class;
  }();
}, function (e, t, a) {
  var d = a(6);

  e.exports = function (e) {
    switch (e) {
      case "en":
      default:
        return d;
    }
  };
}, function (e, t) {
  e.exports = {
    name: "ms-US-International",
    normal: [[{
      value: "1",
      type: "standard"
    }, {
      value: "2",
      type: "standard"
    }, {
      value: "3",
      type: "standard"
    }, {
      value: "4",
      type: "standard"
    }, {
      value: "5",
      type: "standard"
    }, {
      value: "6",
      type: "standard"
    }, {
      value: "7",
      type: "standard"
    }, {
      value: "8",
      type: "standard"
    }, {
      value: "9",
      type: "standard"
    }, {
      value: "0",
      type: "standard"
    }, {
      value: "<-",
      type: "delete"
    }], [{
      value: "q",
      type: "standard"
    }, {
      value: "w",
      type: "standard"
    }, {
      value: "e",
      type: "standard"
    }, {
      value: "r",
      type: "standard"
    }, {
      value: "t",
      type: "standard"
    }, {
      value: "y",
      type: "standard"
    }, {
      value: "u",
      type: "standard"
    }, {
      value: "i",
      type: "standard"
    }, {
      value: "o",
      type: "standard"
    }, {
      value: "p",
      type: "standard"
    }, {
      value: "Ent",
      type: "enter"
    }], [{
      value: "a",
      type: "standard"
    }, {
      value: "s",
      type: "standard"
    }, {
      value: "d",
      type: "standard"
    }, {
      value: "f",
      type: "standard"
    }, {
      value: "g",
      type: "standard"
    }, {
      value: "h",
      type: "standard"
    }, {
      value: "j",
      type: "standard"
    }, {
      value: "k",
      type: "standard"
    }, {
      value: "l",
      type: "standard"
    }, {
      value: '"',
      type: "standard"
    }], [{
      value: "Shift",
      type: "shift"
    }, {
      value: "z",
      type: "standard"
    }, {
      value: "x",
      type: "standard"
    }, {
      value: "c",
      type: "standard"
    }, {
      value: "v",
      type: "standard"
    }, {
      value: "b",
      type: "standard"
    }, {
      value: "n",
      type: "standard"
    }, {
      value: "m",
      type: "standard"
    }, {
      value: "Alt",
      type: "alt"
    }], [{
      value: "Cancel",
      type: "cancel"
    }, {
      value: "",
      type: "space"
    }, {
      value: ",",
      type: "standard"
    }, {
      value: ".",
      type: "standard"
    }, {
      value: "Submit",
      type: "submit"
    }]],
    shift: [[{
      value: "1",
      type: "standard"
    }, {
      value: "2",
      type: "standard"
    }, {
      value: "3",
      type: "standard"
    }, {
      value: "4",
      type: "standard"
    }, {
      value: "5",
      type: "standard"
    }, {
      value: "6",
      type: "standard"
    }, {
      value: "7",
      type: "standard"
    }, {
      value: "8",
      type: "standard"
    }, {
      value: "9",
      type: "standard"
    }, {
      value: "0",
      type: "standard"
    }, {
      value: "<-",
      type: "delete"
    }], [{
      value: "Q",
      type: "standard"
    }, {
      value: "W",
      type: "standard"
    }, {
      value: "E",
      type: "standard"
    }, {
      value: "R",
      type: "standard"
    }, {
      value: "T",
      type: "standard"
    }, {
      value: "Y",
      type: "standard"
    }, {
      value: "U",
      type: "standard"
    }, {
      value: "I",
      type: "standard"
    }, {
      value: "O",
      type: "standard"
    }, {
      value: "P",
      type: "standard"
    }, {
      value: "Ent",
      type: "enter"
    }], [{
      value: "A",
      type: "standard"
    }, {
      value: "S",
      type: "standard"
    }, {
      value: "D",
      type: "standard"
    }, {
      value: "F",
      type: "standard"
    }, {
      value: "G",
      type: "standard"
    }, {
      value: "H",
      type: "standard"
    }, {
      value: "J",
      type: "standard"
    }, {
      value: "K",
      type: "standard"
    }, {
      value: "L",
      type: "standard"
    }, {
      value: '"',
      type: "standard"
    }], [{
      value: "Shift",
      type: "shift"
    }, {
      value: "Z",
      type: "standard"
    }, {
      value: "X",
      type: "standard"
    }, {
      value: "C",
      type: "standard"
    }, {
      value: "V",
      type: "standard"
    }, {
      value: "B",
      type: "standard"
    }, {
      value: "N",
      type: "standard"
    }, {
      value: "M",
      type: "standard"
    }, {
      value: "Alt",
      type: "alt"
    }], [{
      value: "Cancel",
      type: "cancel"
    }, {
      value: "",
      type: "space"
    }, {
      value: ",",
      type: "standard"
    }, {
      value: ".",
      type: "standard"
    }, {
      value: "Submit",
      type: "submit"
    }]],
    alt: [[{
      value: "1",
      type: "standard"
    }, {
      value: "2",
      type: "standard"
    }, {
      value: "3",
      type: "standard"
    }, {
      value: "4",
      type: "standard"
    }, {
      value: "5",
      type: "standard"
    }, {
      value: "6",
      type: "standard"
    }, {
      value: "7",
      type: "standard"
    }, {
      value: "8",
      type: "standard"
    }, {
      value: "9",
      type: "standard"
    }, {
      value: "0",
      type: "standard"
    }, {
      value: "<-",
      type: "delete"
    }], [{
      value: "~",
      type: "standard"
    }, {
      value: "`",
      type: "standard"
    }, {
      value: "|",
      type: "standard"
    }, {
      value: "(",
      type: "standard"
    }, {
      value: ")",
      type: "standard"
    }, {
      value: "^",
      type: "standard"
    }, {
      value: "_",
      type: "standard"
    }, {
      value: "-",
      type: "standard"
    }, {
      value: "=",
      type: "standard"
    }, {
      value: "!",
      type: "standard"
    }, {
      value: "Ent",
      type: "enter"
    }], [{
      value: "@",
      type: "standard"
    }, {
      value: "#",
      type: "standard"
    }, {
      value: "$",
      type: "standard"
    }, {
      value: "%",
      type: "standard"
    }, {
      value: "*",
      type: "standard"
    }, {
      value: "[",
      type: "standard"
    }, {
      value: "]",
      type: "standard"
    }, {
      value: "#",
      type: "standard"
    }, {
      value: "<",
      type: "standard"
    }, {
      value: "?",
      type: "standard"
    }], [{
      value: "Shift",
      type: "shift"
    }, {
      value: ":",
      type: "standard"
    }, {
      value: ";",
      type: "standard"
    }, {
      value: "{",
      type: "standard"
    }, {
      value: "}",
      type: "standard"
    }, {
      value: "/",
      type: "standard"
    }, {
      value: "\\",
      type: "standard"
    }, {
      value: ">",
      type: "standard"
    }, {
      value: "Alt",
      type: "alt"
    }], [{
      value: "Cancel",
      type: "cancel"
    }, {
      value: "",
      type: "space"
    }, {
      value: ",",
      type: "standard"
    }, {
      value: ".",
      type: "standard"
    }, {
      value: "Submit",
      type: "submit"
    }]]
  };
}]);

/***/ }),

/***/ "./src/plugins/eventListenerListPlugin.js":
/*!************************************************!*\
  !*** ./src/plugins/eventListenerListPlugin.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://gist.github.com/stringparser/a3b0555fd915138a0ed3 edited version from DOM2AFrame
;
[Element].forEach(function (self) {
  //self.prototype.eventListenerList = {}; // shared STATIC object across all instances... NOT what we want
  self.prototype._addEventListener = self.prototype.addEventListener;

  self.prototype.addEventListener = function (type, handle, useCapture) {
    if (!this.eventListenerList) this.eventListenerList = {};
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
      remove: function remove() {
        node.removeEventListener(this.type, this.handle, this.useCapture);
        return node.eventListenerList[type];
      }
    });

    if (type != "eventListenerAdded" && type != "eventListenerRemoved") {
      var eventDetail = {
        'type': type,
        'handle': handle,
        'useCapture': useCapture
      };
      var addedEvent = new CustomEvent("eventListenerAdded", {
        detail: eventDetail
      });
      this.dispatchEvent(addedEvent);
    }
  };

  self.prototype._removeEventListener = self.prototype.removeEventListener;

  self.prototype.removeEventListener = function (type, handle, useCapture) {
    if (!this.eventListenerList) this.eventListenerList = {};
    var node = this;
    if (!node.eventListenerList[type]) return;

    node._removeEventListener(type, handle, useCapture);

    node.eventListenerList[type] = node.eventListenerList[type].filter(function (listener) {
      return listener && listener.handle && handle && listener.handle.toString() !== handle.toString(); // native event listener API supports empty handles/listeners, but .toString obviously doesn't
    });

    if (node.eventListenerList[type].length === 0) {
      delete node.eventListenerList[type];
    }

    if (type != "eventListenerAdded" && type != "eventListenerRemoved") {
      var eventDetail = {
        'type': type,
        'handle': handle,
        'useCapture': useCapture
      };
      var removedEvent = new CustomEvent("eventListenerRemoved", {
        detail: eventDetail
      });
      this.dispatchEvent(removedEvent);
    }
  };
});

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var _components_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrollbar */ "./src/components/scrollbar.js");
/* harmony import */ var _components_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Scroll = /*#__PURE__*/function () {
  function Scroll(web2vr) {
    _classCallCheck(this, Scroll);

    this.web2vr = web2vr;
    this.hasScroll = false;
    this.scrollBody = false;
    this.scrollContainer = null;

    if (this.web2vr.settings.scroll) {
      this.checkScrollbar();
      if (this.hasScroll) this.createScrollbar();
    }
  }

  _createClass(Scroll, [{
    key: "checkScrollbar",
    value: function checkScrollbar() {
      // entire body scroll
      var body = document.scrollingElement; // div container scroll

      var container = this.web2vr.container;

      if (body.scrollHeight > body.clientHeight) {
        this.hasScroll = true;
        this.scrollContainer = body;
        this.scrollBody = true;
      } else if (container.element.style.overflow == "scroll") {
        //container.scrollHeight > container.clientHeight
        this.hasScroll = true;
        this.scrollContainer = container;
      }
    }
  }, {
    key: "createScrollbar",
    value: function createScrollbar() {
      this.scrollbar = document.createElement("a-entity");
      this.pointer = document.createElement("a-plane");
      this.pointer.setAttribute("material", "shader", "flat");
      this.pointer.setAttribute("color", "#C1C1C1");
      this.plane = document.createElement("a-plane");
      this.plane.setAttribute("material", "shader", "flat");
      this.plane.setAttribute("material", "side", "double");
      this.plane.classList.add(this.web2vr.settings.interactiveTag);
      this.plane.setAttribute("color", "#F1F1F1");
      this.plane.setAttribute("width", 1);
      this.plane.setAttribute("vr-scrollbar", ""); // pointers for scroll compoment

      this.plane.web2vr = this.web2vr;
      this.plane.pointer = this.pointer;
      this.plane.scrollbar = this.scrollbar;
      this.plane.appendChild(this.pointer);
      this.scrollbar.appendChild(this.plane);
      this.web2vr.aframe.container.appendChild(this.scrollbar);
    }
  }, {
    key: "update",
    value: function update() {
      // there is no need to show scrollbar if the main container is hidden
      if (this.hasScroll) {
        if (this.web2vr.container.element.style.visibility == "visible") {
          this.scrollbar.object3D.visible = true;
          this.plane.classList.add(this.web2vr.settings.interactiveTag);
        } else if (this.web2vr.container.element.style.visibility == "hidden") {
          this.scrollbar.object3D.visible = false;
          this.plane.classList.remove(this.web2vr.settings.interactiveTag);
        }
      }
    }
  }]);

  return Scroll;
}();



/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function Settings() {
  _classCallCheck(this, Settings);

  this.scale = 600;
  this.position = {
    x: 0,
    y: 2,
    z: -1
  };
  this.rotation = {
    x: 0,
    y: 0,
    z: 0
  };
  this.layerStep = 0.0005; // z space between the layers

  this.parentSelector = null;
  this.interactiveTag = "vr-interactable";
  this.ignoreTags = ["BR", "SOURCE", "SCRIPT", "AUDIO", "NOSCRIPT"];
  this.debug = false;
  this.showClipping = false;
  this.forceClipping = false;
  this.experimental = false;
  this.scroll = true;
  this.scrollWindowHeight = 800;
  this.createControllers = true;
  this.raycasterFar = 5;
  this.skybox = true;
  this.border = true;
};



/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "isUrl",
    value: function isUrl(string) {
      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(string);
    }
  }, {
    key: "clamp",
    value: function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }
  }]);

  return Helper;
}();



/***/ }),

/***/ "./src/utils/mouseEventHandler.js":
/*!****************************************!*\
  !*** ./src/utils/mouseEventHandler.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseEventHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseEventHandler = /*#__PURE__*/function () {
  function MouseEventHandler(element) {
    _classCallCheck(this, MouseEventHandler);

    this.element = element;
    this.listeningForMouseEvents = false;
    this.resync();
    this.checkEntityEvents();
  }

  _createClass(MouseEventHandler, [{
    key: "resync",
    value: function resync() {
      var mouseEvents = ["click", "mouseenter", "mouseleave", "mousedown", "mouseup"];
      var mouseProperties = ["onclick", "onmouseenter", "onmouseleave", "onmousedown", "onmouseup"];
      var hasMouseEventRegistered = false;

      for (var _i = 0, _mouseEvents = mouseEvents; _i < _mouseEvents.length; _i++) {
        var mouseEvent = _mouseEvents[_i];

        if (this.element.domElement.eventListenerList && this.element.domElement.eventListenerList[mouseEvent]) {
          hasMouseEventRegistered = true;
          break;
        }
      }

      var hasMouseProperty = false;

      for (var _i2 = 0, _mouseProperties = mouseProperties; _i2 < _mouseProperties.length; _i2++) {
        var mouseProperty = _mouseProperties[_i2];

        if (this.element.domElement[mouseProperty]) {
          hasMouseProperty = true;
          break;
        }
      }

      if (hasMouseEventRegistered || hasMouseProperty) {
        if (!this.listeningForMouseEvents) {
          this.addMouseListeners(mouseEvents);
          this.listeningForMouseEvents = true;
        }
      } // no event handlers or event properties registered, so we can safely remove our listeners
      else if (this.listeningForMouseEvents) {
          this.removeMouseListeners(mouseEvents);
          this.listeningForMouseEvents = false;
        }
    }
  }, {
    key: "mouseEventHandler",
    value: function mouseEventHandler(evt) {
      var mouseEvent = new MouseEvent(evt.type, {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "target": this.element.domElement // maybe?

      });
      this.element.domElement.dispatchEvent(mouseEvent);
    }
  }, {
    key: "addMouseListeners",
    value: function addMouseListeners(mouseEvents) {
      var _this = this;

      mouseEvents.forEach(function (eventName) {
        _this.element.entity.addEventListener(eventName, _this.mouseEventHandler.bind(_this));
      });
    }
  }, {
    key: "removeMouseListeners",
    value: function removeMouseListeners(mouseEvents) {
      var _this2 = this;

      mouseEvents.forEach(function (eventName) {
        _this2.element.entity.removeEventListener(eventName, _this2.mouseEventHandler.bind(_this2));
      });
    } // for hover and input element

  }, {
    key: "checkEntityEvents",
    value: function checkEntityEvents() {
      var mouseEvents = ["click", "mouseenter", "mouseleave", "mousedown", "mouseup"];

      for (var _i3 = 0, _mouseEvents2 = mouseEvents; _i3 < _mouseEvents2.length; _i3++) {
        var mouseEvent = _mouseEvents2[_i3];

        if (this.element.entity.eventListenerList && this.element.entity.eventListenerList[mouseEvent]) {
          this.listeningForMouseEvents = true;
          break;
        }
      }
    }
  }]);

  return MouseEventHandler;
}();



/***/ }),

/***/ "./src/utils/position.js":
/*!*******************************!*\
  !*** ./src/utils/position.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Position = /*#__PURE__*/function () {
  function Position(domPosition, depth, scale) {
    _classCallCheck(this, Position);

    // depth = z
    this.depth = depth;
    this.startDepth = depth;
    this.scale = scale;
    this.scrollY = 0;
    this.updatePosition(domPosition);
  }

  _createClass(Position, [{
    key: "updatePosition",
    value: function updatePosition(domPosition) {
      this.domPosition = domPosition;
      this.aframePosition = this.calculateAFramePosition(this.domPosition);
    }
  }, {
    key: "calculateAFramePosition",
    value: function calculateAFramePosition(domPosition) {
      // making positions be in center because dom positions are in top left
      var aframePosition = {
        x: domPosition.x + domPosition.width / 2,
        y: domPosition.y + domPosition.height / 2,
        z: this.depth
      }; // scaling

      aframePosition.x *= this.scalingFactor;
      aframePosition.y *= this.scalingFactor * -1; // * -1 to match aframe y-axis

      aframePosition.width = domPosition.width * this.scalingFactor;
      aframePosition.height = domPosition.height * this.scalingFactor;
      return aframePosition;
    }
  }, {
    key: "equalsDOMPosition",
    value: function equalsDOMPosition(domPosition) {
      return this.domPosition.top == domPosition.top && this.domPosition.bottom == domPosition.bottom && this.domPosition.left == domPosition.left && this.domPosition.right == domPosition.right;
    }
  }, {
    key: "scalingFactor",
    get: function get() {
      return 1 / this.scale;
    }
  }, {
    key: "x",
    get: function get() {
      return this.aframePosition.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.aframePosition.y + this.scrollY;
    }
  }, {
    key: "z",
    get: function get() {
      return this.aframePosition.z;
    }
  }, {
    key: "width",
    get: function get() {
      return this.aframePosition.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.aframePosition.height;
    } // vector3

  }, {
    key: "xyz",
    get: function get() {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    }
  }, {
    key: "left",
    get: function get() {
      return {
        x: this.x - this.width / 2,
        y: this.y,
        z: this.z
      };
    }
  }, {
    key: "right",
    get: function get() {
      return {
        x: this.x + this.width / 2,
        y: this.y,
        z: this.z
      };
    }
  }, {
    key: "top",
    get: function get() {
      return {
        x: this.x,
        y: this.y + this.height / 2,
        z: this.z
      };
    }
  }, {
    key: "bottom",
    get: function get() {
      return {
        x: this.x,
        y: this.y - this.height / 2,
        z: this.z
      };
    }
  }]);

  return Position;
}();



/***/ }),

/***/ "./src/web2vr.js":
/*!***********************!*\
  !*** ./src/web2vr.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Web2VR; });
/* harmony import */ var _plugins_eventListenerListPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/eventListenerListPlugin */ "./src/plugins/eventListenerListPlugin.js");
/* harmony import */ var _plugins_eventListenerListPlugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_eventListenerListPlugin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aframe */ "aframe");
/* harmony import */ var aframe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aframe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aframe_gif_shader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aframe-gif-shader */ "./node_modules/aframe-gif-shader/dist/aframe-gif-shader.js");
/* harmony import */ var aframe_gif_shader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aframe_gif_shader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_aframe_keyboard_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/aframe-keyboard.min */ "./src/plugins/aframe-keyboard.min.js");
/* harmony import */ var _plugins_aframe_keyboard_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_aframe_keyboard_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var super_hands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! super-hands */ "./node_modules/super-hands/index.js");
/* harmony import */ var super_hands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(super_hands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/border */ "./src/components/border.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_border__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/animate */ "./src/components/animate.js");
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_animate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_grabRotateStatic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/grabRotateStatic */ "./src/components/grabRotateStatic.js");
/* harmony import */ var _components_grabRotateStatic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_grabRotateStatic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll */ "./src/scroll.js");
/* harmony import */ var _aframeContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aframeContext */ "./src/aframeContext.js");
/* harmony import */ var _elements_containerElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/containerElement */ "./src/elements/containerElement.js");
/* harmony import */ var _elements_textElement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/textElement */ "./src/elements/textElement.js");
/* harmony import */ var _elements_imageElement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/imageElement */ "./src/elements/imageElement.js");
/* harmony import */ var _elements_videoElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/videoElement */ "./src/elements/videoElement.js");
/* harmony import */ var _elements_checkboxElement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/checkboxElement */ "./src/elements/checkboxElement.js");
/* harmony import */ var _elements_radioElement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./elements/radioElement */ "./src/elements/radioElement.js");
/* harmony import */ var _elements_inputElement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./elements/inputElement */ "./src/elements/inputElement.js");
/* harmony import */ var _elements_buttonElement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./elements/buttonElement */ "./src/elements/buttonElement.js");
/* harmony import */ var _elements_svgElement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./elements/svgElement */ "./src/elements/svgElement.js");
/* harmony import */ var _elements_canvasElement__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./elements/canvasElement */ "./src/elements/canvasElement.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Get all event listeners for DOM elements























var Web2VR = /*#__PURE__*/function () {
  function Web2VR(container) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Web2VR);

    // main div container
    if (container.nodeType == Node.ELEMENT_NODE) this.container = container;else this.container = document.querySelector(container); // deep merge settings

    this.settings = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(new _settings__WEBPACK_IMPORTED_MODULE_6__["default"](), settings, {
      arrayMerge: function arrayMerge(destination, source) {
        return [].concat(_toConsumableArray(destination), _toConsumableArray(source));
      }
    }); // aframe context

    this.aframe = new _aframeContext__WEBPACK_IMPORTED_MODULE_11__["default"](this.settings); // vr elements

    this.elements = new Set(); // set of all the hover css selectors

    this.hoverSelectors = new Set();
    this.observer = null; // observer parametars

    this.observerConfig = {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    }; //attributeFilter: ["style", "class", "id"]

    this.updating = false; // experimental only

    this.html2canvasIDcounter = 0;
  } // find all hover css rules and add {selector}hover class to them


  _createClass(Web2VR, [{
    key: "findHoverCss",
    value: function findHoverCss() {
      try {
        for (var _i = 0, _arr = _toConsumableArray(document.styleSheets); _i < _arr.length; _i++) {
          var styleSheet = _arr[_i];

          for (var _i2 = 0, _arr2 = _toConsumableArray(styleSheet.cssRules); _i2 < _arr2.length; _i2++) {
            var rule = _arr2[_i2];

            if (rule instanceof CSSStyleRule) {
              var selectors = rule.selectorText.split(",");

              var _iterator = _createForOfIteratorHelper(selectors),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var selector = _step.value;
                  var sel = selector.split(":"); // is hover

                  if (sel[1] == "hover") {
                    var s = sel[0].replace(/\s/g, '');
                    if (s[0] == ".") rule.selectorText += ", ".concat(s, "hover");else if (s[0] == "#") rule.selectorText += ", .".concat(s.substr(1), "hover");else rule.selectorText += ", .".concat(s, "hover");
                    this.hoverSelectors.add(s);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    } // add all svg needed styles to defs inside svg so we can convert svg to png with all styles applied 

  }, {
    key: "generateStyleDefs",
    value: function generateStyleDefs(svgDomElement) {
      var styleDefs = "";
      var sheets = document.styleSheets;

      for (var i = 0; i < sheets.length; i++) {
        var rules = sheets[i].cssRules;

        for (var j = 0; j < rules.length; j++) {
          var rule = rules[j];

          if (rule.style) {
            var selectorText = rule.selectorText;
            var elems = svgDomElement.querySelectorAll(selectorText);

            if (elems.length) {
              styleDefs += selectorText + " { " + rule.style.cssText + " }\n";
            }
          }
        }
      }

      var s = document.createElement('style');
      s.setAttribute('type', 'text/css');
      s.innerHTML = styleDefs;
      var defs = document.createElement('defs');
      defs.appendChild(s);
      svgDomElement.insertBefore(defs, svgDomElement.firstChild);
    }
  }, {
    key: "start",
    value: function start() {
      this.findHoverCss();
      if (!this.aframe.scene.hasLoaded) this.aframe.scene.addEventListener("loaded", this.init(), {
        once: true
      });else this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.aframe.createContainer(this);
      this.aframe.createSky();
      this.aframe.createControllers();
      this.convertToVR(); // scroll feature

      this.scroll = new _scroll__WEBPACK_IMPORTED_MODULE_10__["default"](this);
      this.allLoadedUpdate();
    } // update once after all images are loaded in the dom

  }, {
    key: "allLoadedUpdate",
    value: function allLoadedUpdate() {
      var _this = this;

      var interval = setInterval(function () {
        var allLoaded = true;

        var _iterator2 = _createForOfIteratorHelper(_this.elements),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var element = _step2.value;
            if (element instanceof _elements_imageElement__WEBPACK_IMPORTED_MODULE_14__["default"] && !element.loaded) allLoaded = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (allLoaded) {
          _this.update();

          clearInterval(interval);
        }
      }, 100);
    }
  }, {
    key: "addElement",
    value: function addElement(domElement, parentElement, layer) {
      // ignore tag if in ignoreTags list or text element(vr-span) is already added
      if (this.settings.ignoreTags.includes(domElement.tagName) || domElement.classList && domElement.classList.contains("vr-span")) return null;
      var element = null; // its text node and not empty

      if (domElement.nodeType == Node.TEXT_NODE && domElement.nodeValue.trim()) {
        var span = document.createElement("span");
        span.classList.add("vr-span");
        span.textContent = domElement.textContent; // dont want observer to listen changes when adding(replacing) span text into dom

        if (this.observer) this.observer.disconnect();
        domElement.replaceWith(span);
        if (this.observer) this.observer.observe(this.container, this.observerConfig);
        element = new _elements_textElement__WEBPACK_IMPORTED_MODULE_13__["default"](this, span, layer);
      } // for future convert this to switch statement
      else if (domElement.tagName == "VIDEO") element = new _elements_videoElement__WEBPACK_IMPORTED_MODULE_15__["default"](this, domElement, layer);else if (domElement.tagName == "IMG") element = new _elements_imageElement__WEBPACK_IMPORTED_MODULE_14__["default"](this, domElement, layer);else if (domElement.tagName == "svg") element = new _elements_svgElement__WEBPACK_IMPORTED_MODULE_20__["default"](this, domElement, layer);else if (domElement.tagName == "CANVAS") element = new _elements_canvasElement__WEBPACK_IMPORTED_MODULE_21__["default"](this, domElement, layer);else if (domElement.tagName == "BUTTON") element = new _elements_buttonElement__WEBPACK_IMPORTED_MODULE_19__["default"](this, domElement, layer);else if (domElement.tagName == "TEXTAREA") element = new _elements_inputElement__WEBPACK_IMPORTED_MODULE_18__["default"](this, domElement, layer);else if (domElement.tagName == "INPUT") {
          var type = domElement.getAttribute("type");
          if (type == "checkbox") element = new _elements_checkboxElement__WEBPACK_IMPORTED_MODULE_16__["default"](this, domElement, layer);else if (type == "radio") element = new _elements_radioElement__WEBPACK_IMPORTED_MODULE_17__["default"](this, domElement, layer);else if (["text", "email", "number", "password", "search", "tel", "url"].includes(type)) element = new _elements_inputElement__WEBPACK_IMPORTED_MODULE_18__["default"](this, domElement, layer);else if (["button", "submit", "reset"].includes(type)) {
            element = new _elements_buttonElement__WEBPACK_IMPORTED_MODULE_19__["default"](this, domElement, layer);
          } else return;
        } // any other type of element will be container
        else if (domElement.nodeType == Node.ELEMENT_NODE) {
            element = new _elements_containerElement__WEBPACK_IMPORTED_MODULE_12__["default"](this, domElement, layer);
          } else return;

      this.elements.add(element);
      this.aframe.container.appendChild(element.entity);
      if (this.settings.debug) console.log("Added element", element); // init element and add element to parent children when aframe entity is loaded(play)

      var onLoaded = function onLoaded(event) {
        if (parentElement) parentElement.childElements.add(element);
        element.init();
        element.update();
      };

      element.entity.addEventListener("play", onLoaded, {
        once: true
      });
      return element;
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      // remove the element
      this.aframe.container.removeChild(element.entity);
      this.elements["delete"](element); // remove all the children of the element recursively

      var _iterator3 = _createForOfIteratorHelper(element.childElements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          this.removeElement(child);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // start at root and interate over child nodes recursively

  }, {
    key: "addElementChildren",
    value: function addElementChildren(currentNode) {
      var parentElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (currentNode.tagName == "svg") this.generateStyleDefs(currentNode);
      var element = this.addElement(currentNode, parentElement, layer); // not supported tags or svg element that we dont need to check its children

      if (!element || element instanceof _elements_svgElement__WEBPACK_IMPORTED_MODULE_20__["default"]) return;

      if (currentNode.childNodes && currentNode.childNodes.length > 0) {
        layer++;

        var _iterator4 = _createForOfIteratorHelper(currentNode.childNodes),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var child = _step4.value;
            this.addElementChildren(child, element, layer);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "convertToVR",
    value: function convertToVR() {
      var _this2 = this;

      this.addElementChildren(this.container); // observer dom element changes and for newly added and deleted dom elements

      this.observer = new MutationObserver(function (mutations) {
        var _iterator5 = _createForOfIteratorHelper(mutations),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var mutation = _step5.value;
            var emptyRemove = false;

            var _iterator6 = _createForOfIteratorHelper(mutation.removedNodes),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var node = _step6.value;
                // not empty textNode
                if (!(node.nodeType == Node.TEXT_NODE && !node.nodeValue.trim())) _this2.removeElement(node.element);else emptyRemove = true;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var _iterator7 = _createForOfIteratorHelper(mutation.addedNodes),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _node = _step7.value;

                _this2.addElementChildren(_node, mutation.target.element, mutation.target.element.layer + 1);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            if (!emptyRemove) {
              // when adding new nodes we also need to check for new loaded images
              if (mutation.addedNodes.length > 0) _this2.allLoadedUpdate();else _this2.update();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      });
      this.observer.observe(this.container, this.observerConfig);
    }
  }, {
    key: "update",
    value: function update() {
      // we check for updating so we dont do multiple updating at same time from the async functions
      this.updating = true;

      if (this.updating) {
        // using try and catch because sometimes when element is removed it calls update after and it wont find element, the errors doesnt matter because the final result is the same
        try {
          var _iterator8 = _createForOfIteratorHelper(this.elements),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var element = _step8.value;
              element.update();
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } catch (err) {
          console.error(err);
        }

        this.scroll.update();
        this.updating = false;
      }
    }
  }]);

  return Web2VR;
}();



/***/ }),

/***/ "aframe":
/*!*************************!*\
  !*** external "aframe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_aframe__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=web2vr.js.map
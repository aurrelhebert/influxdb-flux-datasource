define(
  [
    'app/core/app_events',
    'app/core/core_module',
    'app/core/utils/datemath',
    'app/plugins/sdk',
    'lodash',
    'prismjs',
    'react',
    'react-dom',
    'slate',
    'slate-plain-serializer',
    'slate-react',
  ],
  function(
    __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__,
    __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core_module__,
    __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__,
    __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__,
    __WEBPACK_EXTERNAL_MODULE_lodash__,
    __WEBPACK_EXTERNAL_MODULE_prismjs__,
    __WEBPACK_EXTERNAL_MODULE_react__,
    __WEBPACK_EXTERNAL_MODULE_react_dom__,
    __WEBPACK_EXTERNAL_MODULE_slate__,
    __WEBPACK_EXTERNAL_MODULE_slate_plain_serializer__,
    __WEBPACK_EXTERNAL_MODULE_slate_react__
  ) {
    return /******/ (function(modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {}; // The require function
      /******/
      /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports;
          /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
      } // expose the modules object (__webpack_modules__)
      /******/
      /******/
      /******/ /******/ __webpack_require__.m = modules; // expose the module cache
      /******/
      /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
      /******/
      /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            /******/ configurable: false,
            /******/ enumerable: true,
            /******/ get: getter,
            /******/
          });
          /******/
        }
        /******/
      }; // define __esModule on exports
      /******/
      /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ Object.defineProperty(exports, '__esModule', {value: true});
        /******/
      }; // getDefaultExport function for compatibility with non-harmony modules
      /******/
      /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module['default'];
              }
            : /******/ function getModuleExports() {
                return module;
              };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
      }; // Object.prototype.hasOwnProperty.call
      /******/
      /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      }; // __webpack_public_path__
      /******/
      /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
      /******/
      /******/
      /******/ /******/ return __webpack_require__(
        (__webpack_require__.s = './module.ts')
      );
      /******/
    })(
      /************************************************************************/
      /******/ {
        /***/ '../node_modules/base64-js/index.js':
          /*!******************************************!*\
  !*** ../node_modules/base64-js/index.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;

            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

            var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            for (var i = 0, len = code.length; i < len; ++i) {
              lookup[i] = code[i];
              revLookup[code.charCodeAt(i)] = i;
            }

            // Support decoding URL-safe base64 strings, as Node.js does.
            // See: https://en.wikipedia.org/wiki/Base64#URL_applications
            revLookup['-'.charCodeAt(0)] = 62;
            revLookup['_'.charCodeAt(0)] = 63;

            function getLens(b64) {
              var len = b64.length;

              if (len % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4');
              }

              // Trim off extra bytes after placeholder bytes are found
              // See: https://github.com/beatgammit/base64-js/issues/42
              var validLen = b64.indexOf('=');
              if (validLen === -1) validLen = len;

              var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

              return [validLen, placeHoldersLen];
            }

            // base64 is 4/3 + up to two characters of the original data
            function byteLength(b64) {
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }

            function _byteLength(b64, validLen, placeHoldersLen) {
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }

            function toByteArray(b64) {
              var tmp;
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];

              var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

              var curByte = 0;

              // if there are placeholders, only get up to the last complete 4 chars
              var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

              for (var i = 0; i < len; i += 4) {
                tmp =
                  (revLookup[b64.charCodeAt(i)] << 18) |
                  (revLookup[b64.charCodeAt(i + 1)] << 12) |
                  (revLookup[b64.charCodeAt(i + 2)] << 6) |
                  revLookup[b64.charCodeAt(i + 3)];
                arr[curByte++] = (tmp >> 16) & 0xff;
                arr[curByte++] = (tmp >> 8) & 0xff;
                arr[curByte++] = tmp & 0xff;
              }

              if (placeHoldersLen === 2) {
                tmp =
                  (revLookup[b64.charCodeAt(i)] << 2) |
                  (revLookup[b64.charCodeAt(i + 1)] >> 4);
                arr[curByte++] = tmp & 0xff;
              }

              if (placeHoldersLen === 1) {
                tmp =
                  (revLookup[b64.charCodeAt(i)] << 10) |
                  (revLookup[b64.charCodeAt(i + 1)] << 4) |
                  (revLookup[b64.charCodeAt(i + 2)] >> 2);
                arr[curByte++] = (tmp >> 8) & 0xff;
                arr[curByte++] = tmp & 0xff;
              }

              return arr;
            }

            function tripletToBase64(num) {
              return (
                lookup[(num >> 18) & 0x3f] +
                lookup[(num >> 12) & 0x3f] +
                lookup[(num >> 6) & 0x3f] +
                lookup[num & 0x3f]
              );
            }

            function encodeChunk(uint8, start, end) {
              var tmp;
              var output = [];
              for (var i = start; i < end; i += 3) {
                tmp =
                  ((uint8[i] << 16) & 0xff0000) +
                  ((uint8[i + 1] << 8) & 0xff00) +
                  (uint8[i + 2] & 0xff);
                output.push(tripletToBase64(tmp));
              }
              return output.join('');
            }

            function fromByteArray(uint8) {
              var tmp;
              var len = uint8.length;
              var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
              var parts = [];
              var maxChunkLength = 16383; // must be multiple of 3

              // go through the array every three bytes, we'll deal with trailing stuff later
              for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(
                  encodeChunk(
                    uint8,
                    i,
                    i + maxChunkLength > len2 ? len2 : i + maxChunkLength
                  )
                );
              }

              // pad the end with zeros, but make sure to not forget the extra bytes
              if (extraBytes === 1) {
                tmp = uint8[len - 1];
                parts.push(lookup[tmp >> 2] + lookup[(tmp << 4) & 0x3f] + '==');
              } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                parts.push(
                  lookup[tmp >> 10] +
                    lookup[(tmp >> 4) & 0x3f] +
                    lookup[(tmp << 2) & 0x3f] +
                    '='
                );
              }

              return parts.join('');
            }

            /***/
          },

        /***/ '../node_modules/buffer/index.js':
          /*!***************************************!*\
  !*** ../node_modules/buffer/index.js ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            /* WEBPACK VAR INJECTION */ (function(global) {
              /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
              /* eslint-disable no-proto */

              var base64 = __webpack_require__(
                /*! base64-js */ '../node_modules/base64-js/index.js'
              );
              var ieee754 = __webpack_require__(
                /*! ieee754 */ '../node_modules/ieee754/index.js'
              );
              var isArray = __webpack_require__(
                /*! isarray */ '../node_modules/isarray/index.js'
              );

              exports.Buffer = Buffer;
              exports.SlowBuffer = SlowBuffer;
              exports.INSPECT_MAX_BYTES = 50;

              /**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
              Buffer.TYPED_ARRAY_SUPPORT =
                global.TYPED_ARRAY_SUPPORT !== undefined
                  ? global.TYPED_ARRAY_SUPPORT
                  : typedArraySupport();

              /*
 * Export kMaxLength after typed array support is determined.
 */
              exports.kMaxLength = kMaxLength();

              function typedArraySupport() {
                try {
                  var arr = new Uint8Array(1);
                  arr.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                      return 42;
                    },
                  };
                  return (
                    arr.foo() === 42 && // typed array instances can be augmented
                    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                    arr.subarray(1, 1).byteLength === 0
                  ); // ie10 has broken `subarray`
                } catch (e) {
                  return false;
                }
              }

              function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
              }

              function createBuffer(that, length) {
                if (kMaxLength() < length) {
                  throw new RangeError('Invalid typed array length');
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  // Return an augmented `Uint8Array` instance, for best performance
                  that = new Uint8Array(length);
                  that.__proto__ = Buffer.prototype;
                } else {
                  // Fallback: Return an object instance of the Buffer class
                  if (that === null) {
                    that = new Buffer(length);
                  }
                  that.length = length;
                }

                return that;
              }

              /**
               * The Buffer constructor returns instances of `Uint8Array` that have their
               * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
               * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
               * and the `Uint8Array` methods. Square bracket notation works as expected -- it
               * returns a single octet.
               *
               * The `Uint8Array` prototype remains unmodified.
               */

              function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                  return new Buffer(arg, encodingOrOffset, length);
                }

                // Common case.
                if (typeof arg === 'number') {
                  if (typeof encodingOrOffset === 'string') {
                    throw new Error(
                      'If encoding is specified then the first argument must be a string'
                    );
                  }
                  return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
              }

              Buffer.poolSize = 8192; // not used by this implementation

              // TODO: Legacy, not needed anymore. Remove in next major version.
              Buffer._augment = function(arr) {
                arr.__proto__ = Buffer.prototype;
                return arr;
              };

              function from(that, value, encodingOrOffset, length) {
                if (typeof value === 'number') {
                  throw new TypeError('"value" argument must not be a number');
                }

                if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
                  return fromArrayBuffer(that, value, encodingOrOffset, length);
                }

                if (typeof value === 'string') {
                  return fromString(that, value, encodingOrOffset);
                }

                return fromObject(that, value);
              }

              /**
               * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
               * if value is a number.
               * Buffer.from(str[, encoding])
               * Buffer.from(array)
               * Buffer.from(buffer)
               * Buffer.from(arrayBuffer[, byteOffset[, length]])
               **/
              Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
              };

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                if (
                  typeof Symbol !== 'undefined' &&
                  Symbol.species &&
                  Buffer[Symbol.species] === Buffer
                ) {
                  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                  Object.defineProperty(Buffer, Symbol.species, {
                    value: null,
                    configurable: true,
                  });
                }
              }

              function assertSize(size) {
                if (typeof size !== 'number') {
                  throw new TypeError('"size" argument must be a number');
                } else if (size < 0) {
                  throw new RangeError('"size" argument must not be negative');
                }
              }

              function alloc(that, size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                  return createBuffer(that, size);
                }
                if (fill !== undefined) {
                  // Only pay attention to encoding if it's a string. This
                  // prevents accidentally sending in a number that would
                  // be interpretted as a start offset.
                  return typeof encoding === 'string'
                    ? createBuffer(that, size).fill(fill, encoding)
                    : createBuffer(that, size).fill(fill);
                }
                return createBuffer(that, size);
              }

              /**
               * Creates a new filled Buffer instance.
               * alloc(size[, fill[, encoding]])
               **/
              Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
              };

              function allocUnsafe(that, size) {
                assertSize(size);
                that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                  for (var i = 0; i < size; ++i) {
                    that[i] = 0;
                  }
                }
                return that;
              }

              /**
               * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
               * */
              Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
              };
              /**
               * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
               */
              Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
              };

              function fromString(that, string, encoding) {
                if (typeof encoding !== 'string' || encoding === '') {
                  encoding = 'utf8';
                }

                if (!Buffer.isEncoding(encoding)) {
                  throw new TypeError('"encoding" must be a valid string encoding');
                }

                var length = byteLength(string, encoding) | 0;
                that = createBuffer(that, length);

                var actual = that.write(string, encoding);

                if (actual !== length) {
                  // Writing a hex string, for example, that contains invalid characters will
                  // cause everything after the first invalid character to be ignored. (e.g.
                  // 'abxxcd' will be treated as 'ab')
                  that = that.slice(0, actual);
                }

                return that;
              }

              function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                that = createBuffer(that, length);
                for (var i = 0; i < length; i += 1) {
                  that[i] = array[i] & 255;
                }
                return that;
              }

              function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength; // this throws if `array` is not a valid ArrayBuffer

                if (byteOffset < 0 || array.byteLength < byteOffset) {
                  throw new RangeError("'offset' is out of bounds");
                }

                if (array.byteLength < byteOffset + (length || 0)) {
                  throw new RangeError("'length' is out of bounds");
                }

                if (byteOffset === undefined && length === undefined) {
                  array = new Uint8Array(array);
                } else if (length === undefined) {
                  array = new Uint8Array(array, byteOffset);
                } else {
                  array = new Uint8Array(array, byteOffset, length);
                }

                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  // Return an augmented `Uint8Array` instance, for best performance
                  that = array;
                  that.__proto__ = Buffer.prototype;
                } else {
                  // Fallback: Return an object instance of the Buffer class
                  that = fromArrayLike(that, array);
                }
                return that;
              }

              function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                  var len = checked(obj.length) | 0;
                  that = createBuffer(that, len);

                  if (that.length === 0) {
                    return that;
                  }

                  obj.copy(that, 0, 0, len);
                  return that;
                }

                if (obj) {
                  if (
                    (typeof ArrayBuffer !== 'undefined' &&
                      obj.buffer instanceof ArrayBuffer) ||
                    'length' in obj
                  ) {
                    if (typeof obj.length !== 'number' || isnan(obj.length)) {
                      return createBuffer(that, 0);
                    }
                    return fromArrayLike(that, obj);
                  }

                  if (obj.type === 'Buffer' && isArray(obj.data)) {
                    return fromArrayLike(that, obj.data);
                  }
                }

                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                );
              }

              function checked(length) {
                // Note: cannot use `length < kMaxLength()` here because that fails when
                // length is NaN (which is otherwise coerced to zero.)
                if (length >= kMaxLength()) {
                  throw new RangeError(
                    'Attempt to allocate Buffer larger than maximum ' +
                      'size: 0x' +
                      kMaxLength().toString(16) +
                      ' bytes'
                  );
                }
                return length | 0;
              }

              function SlowBuffer(length) {
                if (+length != length) {
                  // eslint-disable-line eqeqeq
                  length = 0;
                }
                return Buffer.alloc(+length);
              }

              Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
              };

              Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                  throw new TypeError('Arguments must be Buffers');
                }

                if (a === b) return 0;

                var x = a.length;
                var y = b.length;

                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                  if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                  }
                }

                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
              };

              Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return true;
                  default:
                    return false;
                }
              };

              Buffer.concat = function concat(list, length) {
                if (!isArray(list)) {
                  throw new TypeError('"list" argument must be an Array of Buffers');
                }

                if (list.length === 0) {
                  return Buffer.alloc(0);
                }

                var i;
                if (length === undefined) {
                  length = 0;
                  for (i = 0; i < list.length; ++i) {
                    length += list[i].length;
                  }
                }

                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                  var buf = list[i];
                  if (!Buffer.isBuffer(buf)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  }
                  buf.copy(buffer, pos);
                  pos += buf.length;
                }
                return buffer;
              };

              function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                  return string.length;
                }
                if (
                  typeof ArrayBuffer !== 'undefined' &&
                  typeof ArrayBuffer.isView === 'function' &&
                  (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)
                ) {
                  return string.byteLength;
                }
                if (typeof string !== 'string') {
                  string = '' + string;
                }

                var len = string.length;
                if (len === 0) return 0;

                // Use a for loop to avoid recursion
                var loweredCase = false;
                for (;;) {
                  switch (encoding) {
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                      return len;
                    case 'utf8':
                    case 'utf-8':
                    case undefined:
                      return utf8ToBytes(string).length;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return len * 2;
                    case 'hex':
                      return len >>> 1;
                    case 'base64':
                      return base64ToBytes(string).length;
                    default:
                      if (loweredCase) return utf8ToBytes(string).length; // assume utf8
                      encoding = ('' + encoding).toLowerCase();
                      loweredCase = true;
                  }
                }
              }
              Buffer.byteLength = byteLength;

              function slowToString(encoding, start, end) {
                var loweredCase = false;

                // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                // property of a typed array.

                // This behaves neither like String nor Uint8Array in that we set start/end
                // to their upper/lower bounds if the value passed is out of range.
                // undefined is handled specially as per ECMA-262 6th Edition,
                // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                if (start === undefined || start < 0) {
                  start = 0;
                }
                // Return early if start > this.length. Done here to prevent potential uint32
                // coercion fail below.
                if (start > this.length) {
                  return '';
                }

                if (end === undefined || end > this.length) {
                  end = this.length;
                }

                if (end <= 0) {
                  return '';
                }

                // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                end >>>= 0;
                start >>>= 0;

                if (end <= start) {
                  return '';
                }

                if (!encoding) encoding = 'utf8';

                while (true) {
                  switch (encoding) {
                    case 'hex':
                      return hexSlice(this, start, end);

                    case 'utf8':
                    case 'utf-8':
                      return utf8Slice(this, start, end);

                    case 'ascii':
                      return asciiSlice(this, start, end);

                    case 'latin1':
                    case 'binary':
                      return latin1Slice(this, start, end);

                    case 'base64':
                      return base64Slice(this, start, end);

                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return utf16leSlice(this, start, end);

                    default:
                      if (loweredCase)
                        throw new TypeError('Unknown encoding: ' + encoding);
                      encoding = (encoding + '').toLowerCase();
                      loweredCase = true;
                  }
                }
              }

              // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
              // Buffer instances.
              Buffer.prototype._isBuffer = true;

              function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
              }

              Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                  throw new RangeError('Buffer size must be a multiple of 16-bits');
                }
                for (var i = 0; i < len; i += 2) {
                  swap(this, i, i + 1);
                }
                return this;
              };

              Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                  throw new RangeError('Buffer size must be a multiple of 32-bits');
                }
                for (var i = 0; i < len; i += 4) {
                  swap(this, i, i + 3);
                  swap(this, i + 1, i + 2);
                }
                return this;
              };

              Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                  throw new RangeError('Buffer size must be a multiple of 64-bits');
                }
                for (var i = 0; i < len; i += 8) {
                  swap(this, i, i + 7);
                  swap(this, i + 1, i + 6);
                  swap(this, i + 2, i + 5);
                  swap(this, i + 3, i + 4);
                }
                return this;
              };

              Buffer.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0) return '';
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
              };

              Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
              };

              Buffer.prototype.inspect = function inspect() {
                var str = '';
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                  str = this.toString('hex', 0, max)
                    .match(/.{2}/g)
                    .join(' ');
                  if (this.length > max) str += ' ... ';
                }
                return '<Buffer ' + str + '>';
              };

              Buffer.prototype.compare = function compare(
                target,
                start,
                end,
                thisStart,
                thisEnd
              ) {
                if (!Buffer.isBuffer(target)) {
                  throw new TypeError('Argument must be a Buffer');
                }

                if (start === undefined) {
                  start = 0;
                }
                if (end === undefined) {
                  end = target ? target.length : 0;
                }
                if (thisStart === undefined) {
                  thisStart = 0;
                }
                if (thisEnd === undefined) {
                  thisEnd = this.length;
                }

                if (
                  start < 0 ||
                  end > target.length ||
                  thisStart < 0 ||
                  thisEnd > this.length
                ) {
                  throw new RangeError('out of range index');
                }

                if (thisStart >= thisEnd && start >= end) {
                  return 0;
                }
                if (thisStart >= thisEnd) {
                  return -1;
                }
                if (start >= end) {
                  return 1;
                }

                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;

                if (this === target) return 0;

                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);

                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);

                for (var i = 0; i < len; ++i) {
                  if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                  }
                }

                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
              };

              // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
              // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
              //
              // Arguments:
              // - buffer - a Buffer to search
              // - val - a string, Buffer, or number
              // - byteOffset - an index into `buffer`; will be clamped to an int32
              // - encoding - an optional encoding, relevant is val is a string
              // - dir - true for indexOf, false for lastIndexOf
              function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                // Empty buffer means no match
                if (buffer.length === 0) return -1;

                // Normalize byteOffset
                if (typeof byteOffset === 'string') {
                  encoding = byteOffset;
                  byteOffset = 0;
                } else if (byteOffset > 0x7fffffff) {
                  byteOffset = 0x7fffffff;
                } else if (byteOffset < -0x80000000) {
                  byteOffset = -0x80000000;
                }
                byteOffset = +byteOffset; // Coerce to Number.
                if (isNaN(byteOffset)) {
                  // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                  byteOffset = dir ? 0 : buffer.length - 1;
                }

                // Normalize byteOffset: negative offsets start from the end of the buffer
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                  if (dir) return -1;
                  else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                  if (dir) byteOffset = 0;
                  else return -1;
                }

                // Normalize val
                if (typeof val === 'string') {
                  val = Buffer.from(val, encoding);
                }

                // Finally, search either indexOf (if dir is true) or lastIndexOf
                if (Buffer.isBuffer(val)) {
                  // Special case: looking for empty string/buffer always fails
                  if (val.length === 0) {
                    return -1;
                  }
                  return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === 'number') {
                  val = val & 0xff; // Search for a byte value [0-255]
                  if (
                    Buffer.TYPED_ARRAY_SUPPORT &&
                    typeof Uint8Array.prototype.indexOf === 'function'
                  ) {
                    if (dir) {
                      return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                    } else {
                      return Uint8Array.prototype.lastIndexOf.call(
                        buffer,
                        val,
                        byteOffset
                      );
                    }
                  }
                  return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                }

                throw new TypeError('val must be string, number or Buffer');
              }

              function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;

                if (encoding !== undefined) {
                  encoding = String(encoding).toLowerCase();
                  if (
                    encoding === 'ucs2' ||
                    encoding === 'ucs-2' ||
                    encoding === 'utf16le' ||
                    encoding === 'utf-16le'
                  ) {
                    if (arr.length < 2 || val.length < 2) {
                      return -1;
                    }
                    indexSize = 2;
                    arrLength /= 2;
                    valLength /= 2;
                    byteOffset /= 2;
                  }
                }

                function read(buf, i) {
                  if (indexSize === 1) {
                    return buf[i];
                  } else {
                    return buf.readUInt16BE(i * indexSize);
                  }
                }

                var i;
                if (dir) {
                  var foundIndex = -1;
                  for (i = byteOffset; i < arrLength; i++) {
                    if (
                      read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)
                    ) {
                      if (foundIndex === -1) foundIndex = i;
                      if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else {
                      if (foundIndex !== -1) i -= i - foundIndex;
                      foundIndex = -1;
                    }
                  }
                } else {
                  if (byteOffset + valLength > arrLength)
                    byteOffset = arrLength - valLength;
                  for (i = byteOffset; i >= 0; i--) {
                    var found = true;
                    for (var j = 0; j < valLength; j++) {
                      if (read(arr, i + j) !== read(val, j)) {
                        found = false;
                        break;
                      }
                    }
                    if (found) return i;
                  }
                }

                return -1;
              }

              Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
              };

              Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
              };

              Buffer.prototype.lastIndexOf = function lastIndexOf(
                val,
                byteOffset,
                encoding
              ) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
              };

              function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                  length = remaining;
                } else {
                  length = Number(length);
                  if (length > remaining) {
                    length = remaining;
                  }
                }

                // must be an even number of digits
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

                if (length > strLen / 2) {
                  length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                  var parsed = parseInt(string.substr(i * 2, 2), 16);
                  if (isNaN(parsed)) return i;
                  buf[offset + i] = parsed;
                }
                return i;
              }

              function utf8Write(buf, string, offset, length) {
                return blitBuffer(
                  utf8ToBytes(string, buf.length - offset),
                  buf,
                  offset,
                  length
                );
              }

              function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
              }

              function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
              }

              function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
              }

              function ucs2Write(buf, string, offset, length) {
                return blitBuffer(
                  utf16leToBytes(string, buf.length - offset),
                  buf,
                  offset,
                  length
                );
              }

              Buffer.prototype.write = function write(string, offset, length, encoding) {
                // Buffer#write(string)
                if (offset === undefined) {
                  encoding = 'utf8';
                  length = this.length;
                  offset = 0;
                  // Buffer#write(string, encoding)
                } else if (length === undefined && typeof offset === 'string') {
                  encoding = offset;
                  length = this.length;
                  offset = 0;
                  // Buffer#write(string, offset[, length][, encoding])
                } else if (isFinite(offset)) {
                  offset = offset | 0;
                  if (isFinite(length)) {
                    length = length | 0;
                    if (encoding === undefined) encoding = 'utf8';
                  } else {
                    encoding = length;
                    length = undefined;
                  }
                  // legacy write(string, encoding, offset, length) - remove in v0.13
                } else {
                  throw new Error(
                    'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                  );
                }

                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;

                if (
                  (string.length > 0 && (length < 0 || offset < 0)) ||
                  offset > this.length
                ) {
                  throw new RangeError('Attempt to write outside buffer bounds');
                }

                if (!encoding) encoding = 'utf8';

                var loweredCase = false;
                for (;;) {
                  switch (encoding) {
                    case 'hex':
                      return hexWrite(this, string, offset, length);

                    case 'utf8':
                    case 'utf-8':
                      return utf8Write(this, string, offset, length);

                    case 'ascii':
                      return asciiWrite(this, string, offset, length);

                    case 'latin1':
                    case 'binary':
                      return latin1Write(this, string, offset, length);

                    case 'base64':
                      // Warning: maxLength not taken into account in base64Write
                      return base64Write(this, string, offset, length);

                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return ucs2Write(this, string, offset, length);

                    default:
                      if (loweredCase)
                        throw new TypeError('Unknown encoding: ' + encoding);
                      encoding = ('' + encoding).toLowerCase();
                      loweredCase = true;
                  }
                }
              };

              Buffer.prototype.toJSON = function toJSON() {
                return {
                  type: 'Buffer',
                  data: Array.prototype.slice.call(this._arr || this, 0),
                };
              };

              function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                  return base64.fromByteArray(buf);
                } else {
                  return base64.fromByteArray(buf.slice(start, end));
                }
              }

              function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];

                var i = start;
                while (i < end) {
                  var firstByte = buf[i];
                  var codePoint = null;
                  var bytesPerSequence =
                    firstByte > 0xef
                      ? 4
                      : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

                  if (i + bytesPerSequence <= end) {
                    var secondByte, thirdByte, fourthByte, tempCodePoint;

                    switch (bytesPerSequence) {
                      case 1:
                        if (firstByte < 0x80) {
                          codePoint = firstByte;
                        }
                        break;
                      case 2:
                        secondByte = buf[i + 1];
                        if ((secondByte & 0xc0) === 0x80) {
                          tempCodePoint =
                            ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
                          if (tempCodePoint > 0x7f) {
                            codePoint = tempCodePoint;
                          }
                        }
                        break;
                      case 3:
                        secondByte = buf[i + 1];
                        thirdByte = buf[i + 2];
                        if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
                          tempCodePoint =
                            ((firstByte & 0xf) << 0xc) |
                            ((secondByte & 0x3f) << 0x6) |
                            (thirdByte & 0x3f);
                          if (
                            tempCodePoint > 0x7ff &&
                            (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
                          ) {
                            codePoint = tempCodePoint;
                          }
                        }
                        break;
                      case 4:
                        secondByte = buf[i + 1];
                        thirdByte = buf[i + 2];
                        fourthByte = buf[i + 3];
                        if (
                          (secondByte & 0xc0) === 0x80 &&
                          (thirdByte & 0xc0) === 0x80 &&
                          (fourthByte & 0xc0) === 0x80
                        ) {
                          tempCodePoint =
                            ((firstByte & 0xf) << 0x12) |
                            ((secondByte & 0x3f) << 0xc) |
                            ((thirdByte & 0x3f) << 0x6) |
                            (fourthByte & 0x3f);
                          if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
                            codePoint = tempCodePoint;
                          }
                        }
                    }
                  }

                  if (codePoint === null) {
                    // we did not generate a valid codePoint so insert a
                    // replacement char (U+FFFD) and advance only 1 byte
                    codePoint = 0xfffd;
                    bytesPerSequence = 1;
                  } else if (codePoint > 0xffff) {
                    // encode to utf16 (surrogate pair dance)
                    codePoint -= 0x10000;
                    res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
                    codePoint = 0xdc00 | (codePoint & 0x3ff);
                  }

                  res.push(codePoint);
                  i += bytesPerSequence;
                }

                return decodeCodePointsArray(res);
              }

              // Based on http://stackoverflow.com/a/22747272/680742, the browser with
              // the lowest limit is Chrome, with 0x10000 args.
              // We go 1 magnitude less, for safety
              var MAX_ARGUMENTS_LENGTH = 0x1000;

              function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                  return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
                }

                // Decode in chunks to avoid "call stack size exceeded".
                var res = '';
                var i = 0;
                while (i < len) {
                  res += String.fromCharCode.apply(
                    String,
                    codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
                  );
                }
                return res;
              }

              function asciiSlice(buf, start, end) {
                var ret = '';
                end = Math.min(buf.length, end);

                for (var i = start; i < end; ++i) {
                  ret += String.fromCharCode(buf[i] & 0x7f);
                }
                return ret;
              }

              function latin1Slice(buf, start, end) {
                var ret = '';
                end = Math.min(buf.length, end);

                for (var i = start; i < end; ++i) {
                  ret += String.fromCharCode(buf[i]);
                }
                return ret;
              }

              function hexSlice(buf, start, end) {
                var len = buf.length;

                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;

                var out = '';
                for (var i = start; i < end; ++i) {
                  out += toHex(buf[i]);
                }
                return out;
              }

              function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = '';
                for (var i = 0; i < bytes.length; i += 2) {
                  res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
              }

              Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;

                if (start < 0) {
                  start += len;
                  if (start < 0) start = 0;
                } else if (start > len) {
                  start = len;
                }

                if (end < 0) {
                  end += len;
                  if (end < 0) end = 0;
                } else if (end > len) {
                  end = len;
                }

                if (end < start) end = start;

                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  newBuf = this.subarray(start, end);
                  newBuf.__proto__ = Buffer.prototype;
                } else {
                  var sliceLen = end - start;
                  newBuf = new Buffer(sliceLen, undefined);
                  for (var i = 0; i < sliceLen; ++i) {
                    newBuf[i] = this[i + start];
                  }
                }

                return newBuf;
              };

              /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
              function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0)
                  throw new RangeError('offset is not uint');
                if (offset + ext > length)
                  throw new RangeError('Trying to access beyond buffer length');
              }

              Buffer.prototype.readUIntLE = function readUIntLE(
                offset,
                byteLength,
                noAssert
              ) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);

                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 0x100)) {
                  val += this[offset + i] * mul;
                }

                return val;
              };

              Buffer.prototype.readUIntBE = function readUIntBE(
                offset,
                byteLength,
                noAssert
              ) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                  checkOffset(offset, byteLength, this.length);
                }

                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 0x100)) {
                  val += this[offset + --byteLength] * mul;
                }

                return val;
              };

              Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
              };

              Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | (this[offset + 1] << 8);
              };

              Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return (this[offset] << 8) | this[offset + 1];
              };

              Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);

                return (
                  (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) +
                  this[offset + 3] * 0x1000000
                );
              };

              Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);

                return (
                  this[offset] * 0x1000000 +
                  ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
                );
              };

              Buffer.prototype.readIntLE = function readIntLE(
                offset,
                byteLength,
                noAssert
              ) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);

                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 0x100)) {
                  val += this[offset + i] * mul;
                }
                mul *= 0x80;

                if (val >= mul) val -= Math.pow(2, 8 * byteLength);

                return val;
              };

              Buffer.prototype.readIntBE = function readIntBE(
                offset,
                byteLength,
                noAssert
              ) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);

                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 0x100)) {
                  val += this[offset + --i] * mul;
                }
                mul *= 0x80;

                if (val >= mul) val -= Math.pow(2, 8 * byteLength);

                return val;
              };

              Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 0x80)) return this[offset];
                return (0xff - this[offset] + 1) * -1;
              };

              Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | (this[offset + 1] << 8);
                return val & 0x8000 ? val | 0xffff0000 : val;
              };

              Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | (this[offset] << 8);
                return val & 0x8000 ? val | 0xffff0000 : val;
              };

              Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);

                return (
                  this[offset] |
                  (this[offset + 1] << 8) |
                  (this[offset + 2] << 16) |
                  (this[offset + 3] << 24)
                );
              };

              Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);

                return (
                  (this[offset] << 24) |
                  (this[offset + 1] << 16) |
                  (this[offset + 2] << 8) |
                  this[offset + 3]
                );
              };

              Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
              };

              Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
              };

              Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
              };

              Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
              };

              function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf))
                  throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min)
                  throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError('Index out of range');
              }

              Buffer.prototype.writeUIntLE = function writeUIntLE(
                value,
                offset,
                byteLength,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                  var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                  checkInt(this, value, offset, byteLength, maxBytes, 0);
                }

                var mul = 1;
                var i = 0;
                this[offset] = value & 0xff;
                while (++i < byteLength && (mul *= 0x100)) {
                  this[offset + i] = (value / mul) & 0xff;
                }

                return offset + byteLength;
              };

              Buffer.prototype.writeUIntBE = function writeUIntBE(
                value,
                offset,
                byteLength,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                  var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                  checkInt(this, value, offset, byteLength, maxBytes, 0);
                }

                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 0xff;
                while (--i >= 0 && (mul *= 0x100)) {
                  this[offset + i] = (value / mul) & 0xff;
                }

                return offset + byteLength;
              };

              Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                this[offset] = value & 0xff;
                return offset + 1;
              };

              function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0) value = 0xffff + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                  buf[offset + i] =
                    (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
                    ((littleEndian ? i : 1 - i) * 8);
                }
              }

              Buffer.prototype.writeUInt16LE = function writeUInt16LE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 0xff;
                  this[offset + 1] = value >>> 8;
                } else {
                  objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
              };

              Buffer.prototype.writeUInt16BE = function writeUInt16BE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 0xff;
                } else {
                  objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
              };

              function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0) value = 0xffffffff + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                  buf[offset + i] = (value >>> ((littleEndian ? i : 3 - i) * 8)) & 0xff;
                }
              }

              Buffer.prototype.writeUInt32LE = function writeUInt32LE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset + 3] = value >>> 24;
                  this[offset + 2] = value >>> 16;
                  this[offset + 1] = value >>> 8;
                  this[offset] = value & 0xff;
                } else {
                  objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
              };

              Buffer.prototype.writeUInt32BE = function writeUInt32BE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 0xff;
                } else {
                  objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
              };

              Buffer.prototype.writeIntLE = function writeIntLE(
                value,
                offset,
                byteLength,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                  var limit = Math.pow(2, 8 * byteLength - 1);

                  checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }

                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 0xff;
                while (++i < byteLength && (mul *= 0x100)) {
                  if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                    sub = 1;
                  }
                  this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
                }

                return offset + byteLength;
              };

              Buffer.prototype.writeIntBE = function writeIntBE(
                value,
                offset,
                byteLength,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                  var limit = Math.pow(2, 8 * byteLength - 1);

                  checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }

                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 0xff;
                while (--i >= 0 && (mul *= 0x100)) {
                  if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                    sub = 1;
                  }
                  this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
                }

                return offset + byteLength;
              };

              Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                if (value < 0) value = 0xff + value + 1;
                this[offset] = value & 0xff;
                return offset + 1;
              };

              Buffer.prototype.writeInt16LE = function writeInt16LE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 0xff;
                  this[offset + 1] = value >>> 8;
                } else {
                  objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
              };

              Buffer.prototype.writeInt16BE = function writeInt16BE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 0xff;
                } else {
                  objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
              };

              Buffer.prototype.writeInt32LE = function writeInt32LE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 0xff;
                  this[offset + 1] = value >>> 8;
                  this[offset + 2] = value >>> 16;
                  this[offset + 3] = value >>> 24;
                } else {
                  objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
              };

              Buffer.prototype.writeInt32BE = function writeInt32BE(
                value,
                offset,
                noAssert
              ) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
                if (value < 0) value = 0xffffffff + value + 1;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 0xff;
                } else {
                  objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
              };

              function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError('Index out of range');
                if (offset < 0) throw new RangeError('Index out of range');
              }

              function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                  checkIEEE754(
                    buf,
                    value,
                    offset,
                    4,
                    3.4028234663852886e38,
                    -3.4028234663852886e38
                  );
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
              }

              Buffer.prototype.writeFloatLE = function writeFloatLE(
                value,
                offset,
                noAssert
              ) {
                return writeFloat(this, value, offset, true, noAssert);
              };

              Buffer.prototype.writeFloatBE = function writeFloatBE(
                value,
                offset,
                noAssert
              ) {
                return writeFloat(this, value, offset, false, noAssert);
              };

              function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                  checkIEEE754(
                    buf,
                    value,
                    offset,
                    8,
                    1.7976931348623157e308,
                    -1.7976931348623157e308
                  );
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
              }

              Buffer.prototype.writeDoubleLE = function writeDoubleLE(
                value,
                offset,
                noAssert
              ) {
                return writeDouble(this, value, offset, true, noAssert);
              };

              Buffer.prototype.writeDoubleBE = function writeDoubleBE(
                value,
                offset,
                noAssert
              ) {
                return writeDouble(this, value, offset, false, noAssert);
              };

              // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
              Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;

                // Copy 0 bytes; we're done
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;

                // Fatal error conditions
                if (targetStart < 0) {
                  throw new RangeError('targetStart out of bounds');
                }
                if (start < 0 || start >= this.length)
                  throw new RangeError('sourceStart out of bounds');
                if (end < 0) throw new RangeError('sourceEnd out of bounds');

                // Are we oob?
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                  end = target.length - targetStart + start;
                }

                var len = end - start;
                var i;

                if (this === target && start < targetStart && targetStart < end) {
                  // descending copy from end
                  for (i = len - 1; i >= 0; --i) {
                    target[i + targetStart] = this[i + start];
                  }
                } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
                  // ascending copy from start
                  for (i = 0; i < len; ++i) {
                    target[i + targetStart] = this[i + start];
                  }
                } else {
                  Uint8Array.prototype.set.call(
                    target,
                    this.subarray(start, start + len),
                    targetStart
                  );
                }

                return len;
              };

              // Usage:
              //    buffer.fill(number[, offset[, end]])
              //    buffer.fill(buffer[, offset[, end]])
              //    buffer.fill(string[, offset[, end]][, encoding])
              Buffer.prototype.fill = function fill(val, start, end, encoding) {
                // Handle string cases:
                if (typeof val === 'string') {
                  if (typeof start === 'string') {
                    encoding = start;
                    start = 0;
                    end = this.length;
                  } else if (typeof end === 'string') {
                    encoding = end;
                    end = this.length;
                  }
                  if (val.length === 1) {
                    var code = val.charCodeAt(0);
                    if (code < 256) {
                      val = code;
                    }
                  }
                  if (encoding !== undefined && typeof encoding !== 'string') {
                    throw new TypeError('encoding must be a string');
                  }
                  if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                    throw new TypeError('Unknown encoding: ' + encoding);
                  }
                } else if (typeof val === 'number') {
                  val = val & 255;
                }

                // Invalid ranges are not set to a default, so can range check early.
                if (start < 0 || this.length < start || this.length < end) {
                  throw new RangeError('Out of range index');
                }

                if (end <= start) {
                  return this;
                }

                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;

                if (!val) val = 0;

                var i;
                if (typeof val === 'number') {
                  for (i = start; i < end; ++i) {
                    this[i] = val;
                  }
                } else {
                  var bytes = Buffer.isBuffer(val)
                    ? val
                    : utf8ToBytes(new Buffer(val, encoding).toString());
                  var len = bytes.length;
                  for (i = 0; i < end - start; ++i) {
                    this[i + start] = bytes[i % len];
                  }
                }

                return this;
              };

              // HELPER FUNCTIONS
              // ================

              var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

              function base64clean(str) {
                // Node strips out invalid characters like \n and \t from the string, base64-js does not
                str = stringtrim(str).replace(INVALID_BASE64_RE, '');
                // Node converts strings with length < 2 to ''
                if (str.length < 2) return '';
                // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                while (str.length % 4 !== 0) {
                  str = str + '=';
                }
                return str;
              }

              function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, '');
              }

              function toHex(n) {
                if (n < 16) return '0' + n.toString(16);
                return n.toString(16);
              }

              function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];

                for (var i = 0; i < length; ++i) {
                  codePoint = string.charCodeAt(i);

                  // is surrogate component
                  if (codePoint > 0xd7ff && codePoint < 0xe000) {
                    // last char was a lead
                    if (!leadSurrogate) {
                      // no lead yet
                      if (codePoint > 0xdbff) {
                        // unexpected trail
                        if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                        continue;
                      } else if (i + 1 === length) {
                        // unpaired lead
                        if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                        continue;
                      }

                      // valid lead
                      leadSurrogate = codePoint;

                      continue;
                    }

                    // 2 leads in a row
                    if (codePoint < 0xdc00) {
                      if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                      leadSurrogate = codePoint;
                      continue;
                    }

                    // valid surrogate pair
                    codePoint =
                      (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) + 0x10000;
                  } else if (leadSurrogate) {
                    // valid bmp char, but last char was a lead
                    if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                  }

                  leadSurrogate = null;

                  // encode utf8
                  if (codePoint < 0x80) {
                    if ((units -= 1) < 0) break;
                    bytes.push(codePoint);
                  } else if (codePoint < 0x800) {
                    if ((units -= 2) < 0) break;
                    bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
                  } else if (codePoint < 0x10000) {
                    if ((units -= 3) < 0) break;
                    bytes.push(
                      (codePoint >> 0xc) | 0xe0,
                      ((codePoint >> 0x6) & 0x3f) | 0x80,
                      (codePoint & 0x3f) | 0x80
                    );
                  } else if (codePoint < 0x110000) {
                    if ((units -= 4) < 0) break;
                    bytes.push(
                      (codePoint >> 0x12) | 0xf0,
                      ((codePoint >> 0xc) & 0x3f) | 0x80,
                      ((codePoint >> 0x6) & 0x3f) | 0x80,
                      (codePoint & 0x3f) | 0x80
                    );
                  } else {
                    throw new Error('Invalid code point');
                  }
                }

                return bytes;
              }

              function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                  // Node's code seems to be doing this and not & 0x7F..
                  byteArray.push(str.charCodeAt(i) & 0xff);
                }
                return byteArray;
              }

              function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                  if ((units -= 2) < 0) break;

                  c = str.charCodeAt(i);
                  hi = c >> 8;
                  lo = c % 256;
                  byteArray.push(lo);
                  byteArray.push(hi);
                }

                return byteArray;
              }

              function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
              }

              function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                  if (i + offset >= dst.length || i >= src.length) break;
                  dst[i + offset] = src[i];
                }
                return i;
              }

              function isnan(val) {
                return val !== val; // eslint-disable-line no-self-compare
              }

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/core-util-is/lib/util.js':
          /*!************************************************!*\
  !*** ../node_modules/core-util-is/lib/util.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(Buffer) {
              // Copyright Joyent, Inc. and other Node contributors.
              //
              // Permission is hereby granted, free of charge, to any person obtaining a
              // copy of this software and associated documentation files (the
              // "Software"), to deal in the Software without restriction, including
              // without limitation the rights to use, copy, modify, merge, publish,
              // distribute, sublicense, and/or sell copies of the Software, and to permit
              // persons to whom the Software is furnished to do so, subject to the
              // following conditions:
              //
              // The above copyright notice and this permission notice shall be included
              // in all copies or substantial portions of the Software.
              //
              // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
              // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
              // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
              // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
              // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
              // USE OR OTHER DEALINGS IN THE SOFTWARE.

              // NOTE: These type checking functions intentionally don't use `instanceof`
              // because it is fragile and can be easily faked with `Object.create()`.

              function isArray(arg) {
                if (Array.isArray) {
                  return Array.isArray(arg);
                }
                return objectToString(arg) === '[object Array]';
              }
              exports.isArray = isArray;

              function isBoolean(arg) {
                return typeof arg === 'boolean';
              }
              exports.isBoolean = isBoolean;

              function isNull(arg) {
                return arg === null;
              }
              exports.isNull = isNull;

              function isNullOrUndefined(arg) {
                return arg == null;
              }
              exports.isNullOrUndefined = isNullOrUndefined;

              function isNumber(arg) {
                return typeof arg === 'number';
              }
              exports.isNumber = isNumber;

              function isString(arg) {
                return typeof arg === 'string';
              }
              exports.isString = isString;

              function isSymbol(arg) {
                return typeof arg === 'symbol';
              }
              exports.isSymbol = isSymbol;

              function isUndefined(arg) {
                return arg === void 0;
              }
              exports.isUndefined = isUndefined;

              function isRegExp(re) {
                return objectToString(re) === '[object RegExp]';
              }
              exports.isRegExp = isRegExp;

              function isObject(arg) {
                return typeof arg === 'object' && arg !== null;
              }
              exports.isObject = isObject;

              function isDate(d) {
                return objectToString(d) === '[object Date]';
              }
              exports.isDate = isDate;

              function isError(e) {
                return objectToString(e) === '[object Error]' || e instanceof Error;
              }
              exports.isError = isError;

              function isFunction(arg) {
                return typeof arg === 'function';
              }
              exports.isFunction = isFunction;

              function isPrimitive(arg) {
                return (
                  arg === null ||
                  typeof arg === 'boolean' ||
                  typeof arg === 'number' ||
                  typeof arg === 'string' ||
                  typeof arg === 'symbol' || // ES6 symbol
                  typeof arg === 'undefined'
                );
              }
              exports.isPrimitive = isPrimitive;

              exports.isBuffer = Buffer.isBuffer;

              function objectToString(o) {
                return Object.prototype.toString.call(o);
              }

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../../buffer/index.js */ '../node_modules/buffer/index.js'
              ).Buffer
            ));

            /***/
          },

        /***/ '../node_modules/css-loader/index.js??ref--5-1!./styles.css':
          /*!*********************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./styles.css ***!
  \*********************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(
              /*! ../node_modules/css-loader/lib/css-base.js */ '../node_modules/css-loader/lib/css-base.js'
            )(true);
            // imports

            // module
            exports.push([
              module.i,
              '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
              '',
              {
                version: 3,
                sources: [
                  '/home/ahebert/workspace/metrics/influxdb-flux-datasource/src/styles.css',
                ],
                names: [],
                mappings:
                  'AAAA;EACE,gBAAgB;EAChB,+DAA+D;EAC/D,aAAa,EAAE;;AAEjB;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,mBAAmB;EACnB,qBAAqB,EAAE;;AAEzB;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,kCAAkC;EAClC,iCAAiC,EAAE;;AAErC;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB,EAAE;;AAEtB;EACE,aAAa;EACb,+DAA+D;EAC/D,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,8NAA8N,EAAE;;AAElO;EACE,0BAA0B;EAC1B,eAAe,EAAE;EACjB;IACE,gBAAgB;IAChB,eAAe,EAAE;;AAErB,YAAY;AACZ;;;;;EAKE,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE;;AAEnB;;;;;;;;EAQE,eAAe,EAAE;;AAEnB;;;;;;;EAOE,eAAe,EAAE;;AAEnB;;;;EAIE,eAAe,EAAE;;AAEnB;;;;EAIE,eAAe,EAAE;;AAEnB;;EAEE,eAAe,EAAE;;AAEnB;EACE,oBAAoB,EAAE;;AAExB;EACE,kBAAkB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;;AAEvB;EACE,aAAa,EAAE;;AAEjB;EACE,aAAa,EAAE',
                file: 'styles.css',
                sourcesContent: [
                  '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
                ],
                sourceRoot: '',
              },
            ]);

            // exports

            /***/
          },

        /***/ '../node_modules/css-loader/lib/css-base.js':
          /*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
            // css base code, injected by the css-loader
            module.exports = function(useSourceMap) {
              var list = [];

              // return the list of modules as css string
              list.toString = function toString() {
                return this.map(function(item) {
                  var content = cssWithMappingToString(item, useSourceMap);
                  if (item[2]) {
                    return '@media ' + item[2] + '{' + content + '}';
                  } else {
                    return content;
                  }
                }).join('');
              };

              // import a list of modules into the list
              list.i = function(modules, mediaQuery) {
                if (typeof modules === 'string') modules = [[null, modules, '']];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                  var id = this[i][0];
                  if (typeof id === 'number') alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                  var item = modules[i];
                  // skip already imported module
                  // this implementation is not 100% perfect for weird media query combinations
                  //  when a module is imported multiple times with different media queries.
                  //  I hope this will never occur (Hey this way we have smaller bundles)
                  if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                    if (mediaQuery && !item[2]) {
                      item[2] = mediaQuery;
                    } else if (mediaQuery) {
                      item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                    }
                    list.push(item);
                  }
                }
              };
              return list;
            };

            function cssWithMappingToString(item, useSourceMap) {
              var content = item[1] || '';
              var cssMapping = item[3];
              if (!cssMapping) {
                return content;
              }

              if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function(source) {
                  return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                });

                return [content]
                  .concat(sourceURLs)
                  .concat([sourceMapping])
                  .join('\n');
              }

              return [content].join('\n');
            }

            // Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
              // eslint-disable-next-line no-undef
              var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
              var data =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

              return '/*# ' + data + ' */';
            }

            /***/
          },

        /***/ '../node_modules/events/events.js':
          /*!****************************************!*\
  !*** ../node_modules/events/events.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            function EventEmitter() {
              this._events = this._events || {};
              this._maxListeners = this._maxListeners || undefined;
            }
            module.exports = EventEmitter;

            // Backwards-compat with node 0.10.x
            EventEmitter.EventEmitter = EventEmitter;

            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._maxListeners = undefined;

            // By default EventEmitters will print a warning if more than 10 listeners are
            // added to it. This is a useful default which helps finding memory leaks.
            EventEmitter.defaultMaxListeners = 10;

            // Obviously not all Emitters should be limited to 10. This function allows
            // that to be increased. Set to zero for unlimited.
            EventEmitter.prototype.setMaxListeners = function(n) {
              if (!isNumber(n) || n < 0 || isNaN(n))
                throw TypeError('n must be a positive number');
              this._maxListeners = n;
              return this;
            };

            EventEmitter.prototype.emit = function(type) {
              var er, handler, len, args, i, listeners;

              if (!this._events) this._events = {};

              // If there is no 'error' event listener then throw.
              if (type === 'error') {
                if (
                  !this._events.error ||
                  (isObject(this._events.error) && !this._events.error.length)
                ) {
                  er = arguments[1];
                  if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                  } else {
                    // At least give some kind of context to the user
                    var err = new Error(
                      'Uncaught, unspecified "error" event. (' + er + ')'
                    );
                    err.context = er;
                    throw err;
                  }
                }
              }

              handler = this._events[type];

              if (isUndefined(handler)) return false;

              if (isFunction(handler)) {
                switch (arguments.length) {
                  // fast cases
                  case 1:
                    handler.call(this);
                    break;
                  case 2:
                    handler.call(this, arguments[1]);
                    break;
                  case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                  // slower
                  default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
                }
              } else if (isObject(handler)) {
                args = Array.prototype.slice.call(arguments, 1);
                listeners = handler.slice();
                len = listeners.length;
                for (i = 0; i < len; i++) listeners[i].apply(this, args);
              }

              return true;
            };

            EventEmitter.prototype.addListener = function(type, listener) {
              var m;

              if (!isFunction(listener)) throw TypeError('listener must be a function');

              if (!this._events) this._events = {};

              // To avoid recursion in the case that type === "newListener"! Before
              // adding it to the listeners, first emit "newListener".
              if (this._events.newListener)
                this.emit(
                  'newListener',
                  type,
                  isFunction(listener.listener) ? listener.listener : listener
                );

              if (!this._events[type])
                // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
              else if (isObject(this._events[type]))
                // If we've already got an array, just append.
                this._events[type].push(listener);
              else
                // Adding the second element, need to change to array.
                this._events[type] = [this._events[type], listener];

              // Check for listener leak
              if (isObject(this._events[type]) && !this._events[type].warned) {
                if (!isUndefined(this._maxListeners)) {
                  m = this._maxListeners;
                } else {
                  m = EventEmitter.defaultMaxListeners;
                }

                if (m && m > 0 && this._events[type].length > m) {
                  this._events[type].warned = true;
                  console.error(
                    '(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length
                  );
                  if (typeof console.trace === 'function') {
                    // not supported in IE 10
                    console.trace();
                  }
                }
              }

              return this;
            };

            EventEmitter.prototype.on = EventEmitter.prototype.addListener;

            EventEmitter.prototype.once = function(type, listener) {
              if (!isFunction(listener)) throw TypeError('listener must be a function');

              var fired = false;

              function g() {
                this.removeListener(type, g);

                if (!fired) {
                  fired = true;
                  listener.apply(this, arguments);
                }
              }

              g.listener = listener;
              this.on(type, g);

              return this;
            };

            // emits a 'removeListener' event iff the listener was removed
            EventEmitter.prototype.removeListener = function(type, listener) {
              var list, position, length, i;

              if (!isFunction(listener)) throw TypeError('listener must be a function');

              if (!this._events || !this._events[type]) return this;

              list = this._events[type];
              length = list.length;
              position = -1;

              if (
                list === listener ||
                (isFunction(list.listener) && list.listener === listener)
              ) {
                delete this._events[type];
                if (this._events.removeListener)
                  this.emit('removeListener', type, listener);
              } else if (isObject(list)) {
                for (i = length; i-- > 0; ) {
                  if (
                    list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)
                  ) {
                    position = i;
                    break;
                  }
                }

                if (position < 0) return this;

                if (list.length === 1) {
                  list.length = 0;
                  delete this._events[type];
                } else {
                  list.splice(position, 1);
                }

                if (this._events.removeListener)
                  this.emit('removeListener', type, listener);
              }

              return this;
            };

            EventEmitter.prototype.removeAllListeners = function(type) {
              var key, listeners;

              if (!this._events) return this;

              // not listening for removeListener, no need to emit
              if (!this._events.removeListener) {
                if (arguments.length === 0) this._events = {};
                else if (this._events[type]) delete this._events[type];
                return this;
              }

              // emit removeListener for all listeners on all events
              if (arguments.length === 0) {
                for (key in this._events) {
                  if (key === 'removeListener') continue;
                  this.removeAllListeners(key);
                }
                this.removeAllListeners('removeListener');
                this._events = {};
                return this;
              }

              listeners = this._events[type];

              if (isFunction(listeners)) {
                this.removeListener(type, listeners);
              } else if (listeners) {
                // LIFO order
                while (listeners.length)
                  this.removeListener(type, listeners[listeners.length - 1]);
              }
              delete this._events[type];

              return this;
            };

            EventEmitter.prototype.listeners = function(type) {
              var ret;
              if (!this._events || !this._events[type]) ret = [];
              else if (isFunction(this._events[type])) ret = [this._events[type]];
              else ret = this._events[type].slice();
              return ret;
            };

            EventEmitter.prototype.listenerCount = function(type) {
              if (this._events) {
                var evlistener = this._events[type];

                if (isFunction(evlistener)) return 1;
                else if (evlistener) return evlistener.length;
              }
              return 0;
            };

            EventEmitter.listenerCount = function(emitter, type) {
              return emitter.listenerCount(type);
            };

            function isFunction(arg) {
              return typeof arg === 'function';
            }

            function isNumber(arg) {
              return typeof arg === 'number';
            }

            function isObject(arg) {
              return typeof arg === 'object' && arg !== null;
            }

            function isUndefined(arg) {
              return arg === void 0;
            }

            /***/
          },

        /***/ '../node_modules/ieee754/index.js':
          /*!****************************************!*\
  !*** ../node_modules/ieee754/index.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            exports.read = function(buffer, offset, isLE, mLen, nBytes) {
              var e, m;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var nBits = -7;
              var i = isLE ? nBytes - 1 : 0;
              var d = isLE ? -1 : 1;
              var s = buffer[offset + i];

              i += d;

              e = s & ((1 << -nBits) - 1);
              s >>= -nBits;
              nBits += eLen;
              for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

              m = e & ((1 << -nBits) - 1);
              e >>= -nBits;
              nBits += mLen;
              for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

              if (e === 0) {
                e = 1 - eBias;
              } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
              } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
              }
              return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };

            exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
              var e, m, c;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
              var i = isLE ? 0 : nBytes - 1;
              var d = isLE ? 1 : -1;
              var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

              value = Math.abs(value);

              if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
              } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                  e--;
                  c *= 2;
                }
                if (e + eBias >= 1) {
                  value += rt / c;
                } else {
                  value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                  e++;
                  c /= 2;
                }

                if (e + eBias >= eMax) {
                  m = 0;
                  e = eMax;
                } else if (e + eBias >= 1) {
                  m = (value * c - 1) * Math.pow(2, mLen);
                  e = e + eBias;
                } else {
                  m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                  e = 0;
                }
              }

              for (
                ;
                mLen >= 8;
                buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8
              ) {}

              e = (e << mLen) | m;
              eLen += mLen;
              for (
                ;
                eLen > 0;
                buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8
              ) {}

              buffer[offset + i - d] |= s * 128;
            };

            /***/
          },

        /***/ '../node_modules/inherits/inherits_browser.js':
          /*!****************************************************!*\
  !*** ../node_modules/inherits/inherits_browser.js ***!
  \****************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            if (typeof Object.create === 'function') {
              // implementation from standard node.js 'util' module
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                  constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true,
                  },
                });
              };
            } else {
              // old school shim for old browsers
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function() {};
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
              };
            }

            /***/
          },

        /***/ '../node_modules/isarray/index.js':
          /*!****************************************!*\
  !*** ../node_modules/isarray/index.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            var toString = {}.toString;

            module.exports =
              Array.isArray ||
              function(arr) {
                return toString.call(arr) == '[object Array]';
              };

            /***/
          },

        /***/ '../node_modules/lodash/_DataView.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_DataView.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
                /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
              ),
              root = __webpack_require__(
                /*! ./_root */ '../node_modules/lodash/_root.js'
              );

            /* Built-in method references that are verified to be native. */
            var DataView = getNative(root, 'DataView');

            module.exports = DataView;

            /***/
          },

        /***/ '../node_modules/lodash/_Hash.js':
          /*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var hashClear = __webpack_require__(
                /*! ./_hashClear */ '../node_modules/lodash/_hashClear.js'
              ),
              hashDelete = __webpack_require__(
                /*! ./_hashDelete */ '../node_modules/lodash/_hashDelete.js'
              ),
              hashGet = __webpack_require__(
                /*! ./_hashGet */ '../node_modules/lodash/_hashGet.js'
              ),
              hashHas = __webpack_require__(
                /*! ./_hashHas */ '../node_modules/lodash/_hashHas.js'
              ),
              hashSet = __webpack_require__(
                /*! ./_hashSet */ '../node_modules/lodash/_hashSet.js'
              );

            /**
             * Creates a hash object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function Hash(entries) {
              var index = -1,
                length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `Hash`.
            Hash.prototype.clear = hashClear;
            Hash.prototype['delete'] = hashDelete;
            Hash.prototype.get = hashGet;
            Hash.prototype.has = hashHas;
            Hash.prototype.set = hashSet;

            module.exports = Hash;

            /***/
          },

        /***/ '../node_modules/lodash/_ListCache.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var listCacheClear = __webpack_require__(
                /*! ./_listCacheClear */ '../node_modules/lodash/_listCacheClear.js'
              ),
              listCacheDelete = __webpack_require__(
                /*! ./_listCacheDelete */ '../node_modules/lodash/_listCacheDelete.js'
              ),
              listCacheGet = __webpack_require__(
                /*! ./_listCacheGet */ '../node_modules/lodash/_listCacheGet.js'
              ),
              listCacheHas = __webpack_require__(
                /*! ./_listCacheHas */ '../node_modules/lodash/_listCacheHas.js'
              ),
              listCacheSet = __webpack_require__(
                /*! ./_listCacheSet */ '../node_modules/lodash/_listCacheSet.js'
              );

            /**
             * Creates an list cache object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function ListCache(entries) {
              var index = -1,
                length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `ListCache`.
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype['delete'] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;

            module.exports = ListCache;

            /***/
          },

        /***/ '../node_modules/lodash/_Map.js':
          /*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
                /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
              ),
              root = __webpack_require__(
                /*! ./_root */ '../node_modules/lodash/_root.js'
              );

            /* Built-in method references that are verified to be native. */
            var Map = getNative(root, 'Map');

            module.exports = Map;

            /***/
          },

        /***/ '../node_modules/lodash/_MapCache.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var mapCacheClear = __webpack_require__(
                /*! ./_mapCacheClear */ '../node_modules/lodash/_mapCacheClear.js'
              ),
              mapCacheDelete = __webpack_require__(
                /*! ./_mapCacheDelete */ '../node_modules/lodash/_mapCacheDelete.js'
              ),
              mapCacheGet = __webpack_require__(
                /*! ./_mapCacheGet */ '../node_modules/lodash/_mapCacheGet.js'
              ),
              mapCacheHas = __webpack_require__(
                /*! ./_mapCacheHas */ '../node_modules/lodash/_mapCacheHas.js'
              ),
              mapCacheSet = __webpack_require__(
                /*! ./_mapCacheSet */ '../node_modules/lodash/_mapCacheSet.js'
              );

            /**
             * Creates a map cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function MapCache(entries) {
              var index = -1,
                length = entries == null ? 0 : entries.length;

              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }

            // Add methods to `MapCache`.
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype['delete'] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;

            module.exports = MapCache;

            /***/
          },

        /***/ '../node_modules/lodash/_Promise.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_Promise.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
                /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
              ),
              root = __webpack_require__(
                /*! ./_root */ '../node_modules/lodash/_root.js'
              );

            /* Built-in method references that are verified to be native. */
            var Promise = getNative(root, 'Promise');

            module.exports = Promise;

            /***/
          },

        /***/ '../node_modules/lodash/_Set.js':
          /*!**************************************!*\
  !*** ../node_modules/lodash/_Set.js ***!
  \**************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
                /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
              ),
              root = __webpack_require__(
                /*! ./_root */ '../node_modules/lodash/_root.js'
              );

            /* Built-in method references that are verified to be native. */
            var Set = getNative(root, 'Set');

            module.exports = Set;

            /***/
          },

        /***/ '../node_modules/lodash/_SetCache.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_SetCache.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var MapCache = __webpack_require__(
                /*! ./_MapCache */ '../node_modules/lodash/_MapCache.js'
              ),
              setCacheAdd = __webpack_require__(
                /*! ./_setCacheAdd */ '../node_modules/lodash/_setCacheAdd.js'
              ),
              setCacheHas = __webpack_require__(
                /*! ./_setCacheHas */ '../node_modules/lodash/_setCacheHas.js'
              );

            /**
             *
             * Creates an array cache object to store unique values.
             *
             * @private
             * @constructor
             * @param {Array} [values] The values to cache.
             */
            function SetCache(values) {
              var index = -1,
                length = values == null ? 0 : values.length;

              this.__data__ = new MapCache();
              while (++index < length) {
                this.add(values[index]);
              }
            }

            // Add methods to `SetCache`.
            SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
            SetCache.prototype.has = setCacheHas;

            module.exports = SetCache;

            /***/
          },

        /***/ '../node_modules/lodash/_Stack.js':
          /*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var ListCache = __webpack_require__(
                /*! ./_ListCache */ '../node_modules/lodash/_ListCache.js'
              ),
              stackClear = __webpack_require__(
                /*! ./_stackClear */ '../node_modules/lodash/_stackClear.js'
              ),
              stackDelete = __webpack_require__(
                /*! ./_stackDelete */ '../node_modules/lodash/_stackDelete.js'
              ),
              stackGet = __webpack_require__(
                /*! ./_stackGet */ '../node_modules/lodash/_stackGet.js'
              ),
              stackHas = __webpack_require__(
                /*! ./_stackHas */ '../node_modules/lodash/_stackHas.js'
              ),
              stackSet = __webpack_require__(
                /*! ./_stackSet */ '../node_modules/lodash/_stackSet.js'
              );

            /**
             * Creates a stack cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */
            function Stack(entries) {
              var data = (this.__data__ = new ListCache(entries));
              this.size = data.size;
            }

            // Add methods to `Stack`.
            Stack.prototype.clear = stackClear;
            Stack.prototype['delete'] = stackDelete;
            Stack.prototype.get = stackGet;
            Stack.prototype.has = stackHas;
            Stack.prototype.set = stackSet;

            module.exports = Stack;

            /***/
          },

        /***/ '../node_modules/lodash/_Symbol.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var root = __webpack_require__(
              /*! ./_root */ '../node_modules/lodash/_root.js'
            );

            /** Built-in value references. */
            var Symbol = root.Symbol;

            module.exports = Symbol;

            /***/
          },

        /***/ '../node_modules/lodash/_Uint8Array.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var root = __webpack_require__(
              /*! ./_root */ '../node_modules/lodash/_root.js'
            );

            /** Built-in value references. */
            var Uint8Array = root.Uint8Array;

            module.exports = Uint8Array;

            /***/
          },

        /***/ '../node_modules/lodash/_WeakMap.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_WeakMap.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
                /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
              ),
              root = __webpack_require__(
                /*! ./_root */ '../node_modules/lodash/_root.js'
              );

            /* Built-in method references that are verified to be native. */
            var WeakMap = getNative(root, 'WeakMap');

            module.exports = WeakMap;

            /***/
          },

        /***/ '../node_modules/lodash/_arrayAggregator.js':
          /*!**************************************************!*\
  !*** ../node_modules/lodash/_arrayAggregator.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * A specialized version of `baseAggregator` for arrays.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} setter The function to set `accumulator` values.
             * @param {Function} iteratee The iteratee to transform keys.
             * @param {Object} accumulator The initial aggregated object.
             * @returns {Function} Returns `accumulator`.
             */
            function arrayAggregator(array, setter, iteratee, accumulator) {
              var index = -1,
                length = array == null ? 0 : array.length;

              while (++index < length) {
                var value = array[index];
                setter(accumulator, value, iteratee(value), array);
              }
              return accumulator;
            }

            module.exports = arrayAggregator;

            /***/
          },

        /***/ '../node_modules/lodash/_arrayFilter.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayFilter.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * A specialized version of `_.filter` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {Array} Returns the new filtered array.
             */
            function arrayFilter(array, predicate) {
              var index = -1,
                length = array == null ? 0 : array.length,
                resIndex = 0,
                result = [];

              while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                  result[resIndex++] = value;
                }
              }
              return result;
            }

            module.exports = arrayFilter;

            /***/
          },

        /***/ '../node_modules/lodash/_arrayLikeKeys.js':
          /*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseTimes = __webpack_require__(
                /*! ./_baseTimes */ '../node_modules/lodash/_baseTimes.js'
              ),
              isArguments = __webpack_require__(
                /*! ./isArguments */ '../node_modules/lodash/isArguments.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isBuffer = __webpack_require__(
                /*! ./isBuffer */ '../node_modules/lodash/isBuffer.js'
              ),
              isIndex = __webpack_require__(
                /*! ./_isIndex */ '../node_modules/lodash/_isIndex.js'
              ),
              isTypedArray = __webpack_require__(
                /*! ./isTypedArray */ '../node_modules/lodash/isTypedArray.js'
              );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Creates an array of the enumerable property names of the array-like `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @param {boolean} inherited Specify returning inherited property names.
             * @returns {Array} Returns the array of property names.
             */
            function arrayLikeKeys(value, inherited) {
              var isArr = isArray(value),
                isArg = !isArr && isArguments(value),
                isBuff = !isArr && !isArg && isBuffer(value),
                isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                skipIndexes = isArr || isArg || isBuff || isType,
                result = skipIndexes ? baseTimes(value.length, String) : [],
                length = result.length;

              for (var key in value) {
                if (
                  (inherited || hasOwnProperty.call(value, key)) &&
                  !(
                    skipIndexes &&
                    // Safari 9 has enumerable `arguments.length` in strict mode.
                    (key == 'length' ||
                      // Node.js 0.10 has enumerable non-index properties on buffers.
                      (isBuff && (key == 'offset' || key == 'parent')) ||
                      // PhantomJS 2 has enumerable non-index properties on typed arrays.
                      (isType &&
                        (key == 'buffer' ||
                          key == 'byteLength' ||
                          key == 'byteOffset')) ||
                      // Skip index properties.
                      isIndex(key, length))
                  )
                ) {
                  result.push(key);
                }
              }
              return result;
            }

            module.exports = arrayLikeKeys;

            /***/
          },

        /***/ '../node_modules/lodash/_arrayMap.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_arrayMap.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * A specialized version of `_.map` for arrays without support for iteratee
             * shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the new mapped array.
             */
            function arrayMap(array, iteratee) {
              var index = -1,
                length = array == null ? 0 : array.length,
                result = Array(length);

              while (++index < length) {
                result[index] = iteratee(array[index], index, array);
              }
              return result;
            }

            module.exports = arrayMap;

            /***/
          },

        /***/ '../node_modules/lodash/_arrayPush.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_arrayPush.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Appends the elements of `values` to `array`.
             *
             * @private
             * @param {Array} array The array to modify.
             * @param {Array} values The values to append.
             * @returns {Array} Returns `array`.
             */
            function arrayPush(array, values) {
              var index = -1,
                length = values.length,
                offset = array.length;

              while (++index < length) {
                array[offset + index] = values[index];
              }
              return array;
            }

            module.exports = arrayPush;

            /***/
          },

        /***/ '../node_modules/lodash/_arraySome.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_arraySome.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * A specialized version of `_.some` for arrays without support for iteratee
             * shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} predicate The function invoked per iteration.
             * @returns {boolean} Returns `true` if any element passes the predicate check,
             *  else `false`.
             */
            function arraySome(array, predicate) {
              var index = -1,
                length = array == null ? 0 : array.length;

              while (++index < length) {
                if (predicate(array[index], index, array)) {
                  return true;
                }
              }
              return false;
            }

            module.exports = arraySome;

            /***/
          },

        /***/ '../node_modules/lodash/_assocIndexOf.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var eq = __webpack_require__(/*! ./eq */ '../node_modules/lodash/eq.js');

            /**
             * Gets the index at which the `key` is found in `array` of key-value pairs.
             *
             * @private
             * @param {Array} array The array to inspect.
             * @param {*} key The key to search for.
             * @returns {number} Returns the index of the matched value, else `-1`.
             */
            function assocIndexOf(array, key) {
              var length = array.length;
              while (length--) {
                if (eq(array[length][0], key)) {
                  return length;
                }
              }
              return -1;
            }

            module.exports = assocIndexOf;

            /***/
          },

        /***/ '../node_modules/lodash/_baseAggregator.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_baseAggregator.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseEach = __webpack_require__(
              /*! ./_baseEach */ '../node_modules/lodash/_baseEach.js'
            );

            /**
             * Aggregates elements of `collection` on `accumulator` with keys transformed
             * by `iteratee` and values set by `setter`.
             *
             * @private
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} setter The function to set `accumulator` values.
             * @param {Function} iteratee The iteratee to transform keys.
             * @param {Object} accumulator The initial aggregated object.
             * @returns {Function} Returns `accumulator`.
             */
            function baseAggregator(collection, setter, iteratee, accumulator) {
              baseEach(collection, function(value, key, collection) {
                setter(accumulator, value, iteratee(value), collection);
              });
              return accumulator;
            }

            module.exports = baseAggregator;

            /***/
          },

        /***/ '../node_modules/lodash/_baseAssignValue.js':
          /*!**************************************************!*\
  !*** ../node_modules/lodash/_baseAssignValue.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var defineProperty = __webpack_require__(
              /*! ./_defineProperty */ '../node_modules/lodash/_defineProperty.js'
            );

            /**
             * The base implementation of `assignValue` and `assignMergeValue` without
             * value checks.
             *
             * @private
             * @param {Object} object The object to modify.
             * @param {string} key The key of the property to assign.
             * @param {*} value The value to assign.
             */
            function baseAssignValue(object, key, value) {
              if (key == '__proto__' && defineProperty) {
                defineProperty(object, key, {
                  configurable: true,
                  enumerable: true,
                  value: value,
                  writable: true,
                });
              } else {
                object[key] = value;
              }
            }

            module.exports = baseAssignValue;

            /***/
          },

        /***/ '../node_modules/lodash/_baseEach.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_baseEach.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseForOwn = __webpack_require__(
                /*! ./_baseForOwn */ '../node_modules/lodash/_baseForOwn.js'
              ),
              createBaseEach = __webpack_require__(
                /*! ./_createBaseEach */ '../node_modules/lodash/_createBaseEach.js'
              );

            /**
             * The base implementation of `_.forEach` without support for iteratee shorthands.
             *
             * @private
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array|Object} Returns `collection`.
             */
            var baseEach = createBaseEach(baseForOwn);

            module.exports = baseEach;

            /***/
          },

        /***/ '../node_modules/lodash/_baseFlatten.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_baseFlatten.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var arrayPush = __webpack_require__(
                /*! ./_arrayPush */ '../node_modules/lodash/_arrayPush.js'
              ),
              isFlattenable = __webpack_require__(
                /*! ./_isFlattenable */ '../node_modules/lodash/_isFlattenable.js'
              );

            /**
             * The base implementation of `_.flatten` with support for restricting flattening.
             *
             * @private
             * @param {Array} array The array to flatten.
             * @param {number} depth The maximum recursion depth.
             * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
             * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
             * @param {Array} [result=[]] The initial result value.
             * @returns {Array} Returns the new flattened array.
             */
            function baseFlatten(array, depth, predicate, isStrict, result) {
              var index = -1,
                length = array.length;

              predicate || (predicate = isFlattenable);
              result || (result = []);

              while (++index < length) {
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                  if (depth > 1) {
                    // Recursively flatten arrays (susceptible to call stack limits).
                    baseFlatten(value, depth - 1, predicate, isStrict, result);
                  } else {
                    arrayPush(result, value);
                  }
                } else if (!isStrict) {
                  result[result.length] = value;
                }
              }
              return result;
            }

            module.exports = baseFlatten;

            /***/
          },

        /***/ '../node_modules/lodash/_baseFor.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var createBaseFor = __webpack_require__(
              /*! ./_createBaseFor */ '../node_modules/lodash/_createBaseFor.js'
            );

            /**
             * The base implementation of `baseForOwn` which iterates over `object`
             * properties returned by `keysFunc` and invokes `iteratee` for each property.
             * Iteratee functions may exit iteration early by explicitly returning `false`.
             *
             * @private
             * @param {Object} object The object to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @param {Function} keysFunc The function to get the keys of `object`.
             * @returns {Object} Returns `object`.
             */
            var baseFor = createBaseFor();

            module.exports = baseFor;

            /***/
          },

        /***/ '../node_modules/lodash/_baseForOwn.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_baseForOwn.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseFor = __webpack_require__(
                /*! ./_baseFor */ '../node_modules/lodash/_baseFor.js'
              ),
              keys = __webpack_require__(/*! ./keys */ '../node_modules/lodash/keys.js');

            /**
             * The base implementation of `_.forOwn` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The object to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Object} Returns `object`.
             */
            function baseForOwn(object, iteratee) {
              return object && baseFor(object, iteratee, keys);
            }

            module.exports = baseForOwn;

            /***/
          },

        /***/ '../node_modules/lodash/_baseGet.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_baseGet.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var castPath = __webpack_require__(
                /*! ./_castPath */ '../node_modules/lodash/_castPath.js'
              ),
              toKey = __webpack_require__(
                /*! ./_toKey */ '../node_modules/lodash/_toKey.js'
              );

            /**
             * The base implementation of `_.get` without support for default values.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Array|string} path The path of the property to get.
             * @returns {*} Returns the resolved value.
             */
            function baseGet(object, path) {
              path = castPath(path, object);

              var index = 0,
                length = path.length;

              while (object != null && index < length) {
                object = object[toKey(path[index++])];
              }
              return index && index == length ? object : undefined;
            }

            module.exports = baseGet;

            /***/
          },

        /***/ '../node_modules/lodash/_baseGetAllKeys.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_baseGetAllKeys.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var arrayPush = __webpack_require__(
                /*! ./_arrayPush */ '../node_modules/lodash/_arrayPush.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              );

            /**
             * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
             * `keysFunc` and `symbolsFunc` to get the enumerable property names and
             * symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Function} keysFunc The function to get the keys of `object`.
             * @param {Function} symbolsFunc The function to get the symbols of `object`.
             * @returns {Array} Returns the array of property names and symbols.
             */
            function baseGetAllKeys(object, keysFunc, symbolsFunc) {
              var result = keysFunc(object);
              return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
            }

            module.exports = baseGetAllKeys;

            /***/
          },

        /***/ '../node_modules/lodash/_baseGetTag.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Symbol = __webpack_require__(
                /*! ./_Symbol */ '../node_modules/lodash/_Symbol.js'
              ),
              getRawTag = __webpack_require__(
                /*! ./_getRawTag */ '../node_modules/lodash/_getRawTag.js'
              ),
              objectToString = __webpack_require__(
                /*! ./_objectToString */ '../node_modules/lodash/_objectToString.js'
              );

            /** `Object#toString` result references. */
            var nullTag = '[object Null]',
              undefinedTag = '[object Undefined]';

            /** Built-in value references. */
            var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

            /**
             * The base implementation of `getTag` without fallbacks for buggy environments.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            function baseGetTag(value) {
              if (value == null) {
                return value === undefined ? undefinedTag : nullTag;
              }
              return symToStringTag && symToStringTag in Object(value)
                ? getRawTag(value)
                : objectToString(value);
            }

            module.exports = baseGetTag;

            /***/
          },

        /***/ '../node_modules/lodash/_baseHasIn.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_baseHasIn.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * The base implementation of `_.hasIn` without support for deep paths.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {Array|string} key The key to check.
             * @returns {boolean} Returns `true` if `key` exists, else `false`.
             */
            function baseHasIn(object, key) {
              return object != null && key in Object(object);
            }

            module.exports = baseHasIn;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsArguments.js':
          /*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGetTag = __webpack_require__(
                /*! ./_baseGetTag */ '../node_modules/lodash/_baseGetTag.js'
              ),
              isObjectLike = __webpack_require__(
                /*! ./isObjectLike */ '../node_modules/lodash/isObjectLike.js'
              );

            /** `Object#toString` result references. */
            var argsTag = '[object Arguments]';

            /**
             * The base implementation of `_.isArguments`.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             */
            function baseIsArguments(value) {
              return isObjectLike(value) && baseGetTag(value) == argsTag;
            }

            module.exports = baseIsArguments;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsEqual.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsEqual.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsEqualDeep = __webpack_require__(
                /*! ./_baseIsEqualDeep */ '../node_modules/lodash/_baseIsEqualDeep.js'
              ),
              isObjectLike = __webpack_require__(
                /*! ./isObjectLike */ '../node_modules/lodash/isObjectLike.js'
              );

            /**
             * The base implementation of `_.isEqual` which supports partial comparisons
             * and tracks traversed objects.
             *
             * @private
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @param {boolean} bitmask The bitmask flags.
             *  1 - Unordered comparison
             *  2 - Partial comparison
             * @param {Function} [customizer] The function to customize comparisons.
             * @param {Object} [stack] Tracks traversed `value` and `other` objects.
             * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
             */
            function baseIsEqual(value, other, bitmask, customizer, stack) {
              if (value === other) {
                return true;
              }
              if (
                value == null ||
                other == null ||
                (!isObjectLike(value) && !isObjectLike(other))
              ) {
                return value !== value && other !== other;
              }
              return baseIsEqualDeep(
                value,
                other,
                bitmask,
                customizer,
                baseIsEqual,
                stack
              );
            }

            module.exports = baseIsEqual;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsEqualDeep.js':
          /*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsEqualDeep.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Stack = __webpack_require__(
                /*! ./_Stack */ '../node_modules/lodash/_Stack.js'
              ),
              equalArrays = __webpack_require__(
                /*! ./_equalArrays */ '../node_modules/lodash/_equalArrays.js'
              ),
              equalByTag = __webpack_require__(
                /*! ./_equalByTag */ '../node_modules/lodash/_equalByTag.js'
              ),
              equalObjects = __webpack_require__(
                /*! ./_equalObjects */ '../node_modules/lodash/_equalObjects.js'
              ),
              getTag = __webpack_require__(
                /*! ./_getTag */ '../node_modules/lodash/_getTag.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isBuffer = __webpack_require__(
                /*! ./isBuffer */ '../node_modules/lodash/isBuffer.js'
              ),
              isTypedArray = __webpack_require__(
                /*! ./isTypedArray */ '../node_modules/lodash/isTypedArray.js'
              );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1;

            /** `Object#toString` result references. */
            var argsTag = '[object Arguments]',
              arrayTag = '[object Array]',
              objectTag = '[object Object]';

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * A specialized version of `baseIsEqual` for arrays and objects which performs
             * deep comparisons and tracks traversed objects enabling objects with circular
             * references to be compared.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} [stack] Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function baseIsEqualDeep(
              object,
              other,
              bitmask,
              customizer,
              equalFunc,
              stack
            ) {
              var objIsArr = isArray(object),
                othIsArr = isArray(other),
                objTag = objIsArr ? arrayTag : getTag(object),
                othTag = othIsArr ? arrayTag : getTag(other);

              objTag = objTag == argsTag ? objectTag : objTag;
              othTag = othTag == argsTag ? objectTag : othTag;

              var objIsObj = objTag == objectTag,
                othIsObj = othTag == objectTag,
                isSameTag = objTag == othTag;

              if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) {
                  return false;
                }
                objIsArr = true;
                objIsObj = false;
              }
              if (isSameTag && !objIsObj) {
                stack || (stack = new Stack());
                return objIsArr || isTypedArray(object)
                  ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
                  : equalByTag(
                      object,
                      other,
                      objTag,
                      bitmask,
                      customizer,
                      equalFunc,
                      stack
                    );
              }
              if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                  othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

                if (objIsWrapped || othIsWrapped) {
                  var objUnwrapped = objIsWrapped ? object.value() : object,
                    othUnwrapped = othIsWrapped ? other.value() : other;

                  stack || (stack = new Stack());
                  return equalFunc(
                    objUnwrapped,
                    othUnwrapped,
                    bitmask,
                    customizer,
                    stack
                  );
                }
              }
              if (!isSameTag) {
                return false;
              }
              stack || (stack = new Stack());
              return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
            }

            module.exports = baseIsEqualDeep;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsMatch.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsMatch.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Stack = __webpack_require__(
                /*! ./_Stack */ '../node_modules/lodash/_Stack.js'
              ),
              baseIsEqual = __webpack_require__(
                /*! ./_baseIsEqual */ '../node_modules/lodash/_baseIsEqual.js'
              );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1,
              COMPARE_UNORDERED_FLAG = 2;

            /**
             * The base implementation of `_.isMatch` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The object to inspect.
             * @param {Object} source The object of property values to match.
             * @param {Array} matchData The property names, values, and compare flags to match.
             * @param {Function} [customizer] The function to customize comparisons.
             * @returns {boolean} Returns `true` if `object` is a match, else `false`.
             */
            function baseIsMatch(object, source, matchData, customizer) {
              var index = matchData.length,
                length = index,
                noCustomizer = !customizer;

              if (object == null) {
                return !length;
              }
              object = Object(object);
              while (index--) {
                var data = matchData[index];
                if (
                  noCustomizer && data[2]
                    ? data[1] !== object[data[0]]
                    : !(data[0] in object)
                ) {
                  return false;
                }
              }
              while (++index < length) {
                data = matchData[index];
                var key = data[0],
                  objValue = object[key],
                  srcValue = data[1];

                if (noCustomizer && data[2]) {
                  if (objValue === undefined && !(key in object)) {
                    return false;
                  }
                } else {
                  var stack = new Stack();
                  if (customizer) {
                    var result = customizer(
                      objValue,
                      srcValue,
                      key,
                      object,
                      source,
                      stack
                    );
                  }
                  if (
                    !(result === undefined
                      ? baseIsEqual(
                          srcValue,
                          objValue,
                          COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
                          customizer,
                          stack
                        )
                      : result)
                  ) {
                    return false;
                  }
                }
              }
              return true;
            }

            module.exports = baseIsMatch;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsNative.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isFunction = __webpack_require__(
                /*! ./isFunction */ '../node_modules/lodash/isFunction.js'
              ),
              isMasked = __webpack_require__(
                /*! ./_isMasked */ '../node_modules/lodash/_isMasked.js'
              ),
              isObject = __webpack_require__(
                /*! ./isObject */ '../node_modules/lodash/isObject.js'
              ),
              toSource = __webpack_require__(
                /*! ./_toSource */ '../node_modules/lodash/_toSource.js'
              );

            /**
             * Used to match `RegExp`
             * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
             */
            var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

            /** Used to detect host constructors (Safari). */
            var reIsHostCtor = /^\[object .+?Constructor\]$/;

            /** Used for built-in method references. */
            var funcProto = Function.prototype,
              objectProto = Object.prototype;

            /** Used to resolve the decompiled source of functions. */
            var funcToString = funcProto.toString;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /** Used to detect if a method is native. */
            var reIsNative = RegExp(
              '^' +
                funcToString
                  .call(hasOwnProperty)
                  .replace(reRegExpChar, '\\$&')
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?'
                  ) +
                '$'
            );

            /**
             * The base implementation of `_.isNative` without bad shim checks.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a native function,
             *  else `false`.
             */
            function baseIsNative(value) {
              if (!isObject(value) || isMasked(value)) {
                return false;
              }
              var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
              return pattern.test(toSource(value));
            }

            module.exports = baseIsNative;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIsTypedArray.js':
          /*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGetTag = __webpack_require__(
                /*! ./_baseGetTag */ '../node_modules/lodash/_baseGetTag.js'
              ),
              isLength = __webpack_require__(
                /*! ./isLength */ '../node_modules/lodash/isLength.js'
              ),
              isObjectLike = __webpack_require__(
                /*! ./isObjectLike */ '../node_modules/lodash/isObjectLike.js'
              );

            /** `Object#toString` result references. */
            var argsTag = '[object Arguments]',
              arrayTag = '[object Array]',
              boolTag = '[object Boolean]',
              dateTag = '[object Date]',
              errorTag = '[object Error]',
              funcTag = '[object Function]',
              mapTag = '[object Map]',
              numberTag = '[object Number]',
              objectTag = '[object Object]',
              regexpTag = '[object RegExp]',
              setTag = '[object Set]',
              stringTag = '[object String]',
              weakMapTag = '[object WeakMap]';

            var arrayBufferTag = '[object ArrayBuffer]',
              dataViewTag = '[object DataView]',
              float32Tag = '[object Float32Array]',
              float64Tag = '[object Float64Array]',
              int8Tag = '[object Int8Array]',
              int16Tag = '[object Int16Array]',
              int32Tag = '[object Int32Array]',
              uint8Tag = '[object Uint8Array]',
              uint8ClampedTag = '[object Uint8ClampedArray]',
              uint16Tag = '[object Uint16Array]',
              uint32Tag = '[object Uint32Array]';

            /** Used to identify `toStringTag` values of typed arrays. */
            var typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
              int8Tag
            ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
              uint8Tag
            ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
              uint16Tag
            ] = typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
              arrayBufferTag
            ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
              dateTag
            ] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[
              mapTag
            ] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
              regexpTag
            ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[
              weakMapTag
            ] = false;

            /**
             * The base implementation of `_.isTypedArray` without Node.js optimizations.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
             */
            function baseIsTypedArray(value) {
              return (
                isObjectLike(value) &&
                isLength(value.length) &&
                !!typedArrayTags[baseGetTag(value)]
              );
            }

            module.exports = baseIsTypedArray;

            /***/
          },

        /***/ '../node_modules/lodash/_baseIteratee.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIteratee.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseMatches = __webpack_require__(
                /*! ./_baseMatches */ '../node_modules/lodash/_baseMatches.js'
              ),
              baseMatchesProperty = __webpack_require__(
                /*! ./_baseMatchesProperty */ '../node_modules/lodash/_baseMatchesProperty.js'
              ),
              identity = __webpack_require__(
                /*! ./identity */ '../node_modules/lodash/identity.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              property = __webpack_require__(
                /*! ./property */ '../node_modules/lodash/property.js'
              );

            /**
             * The base implementation of `_.iteratee`.
             *
             * @private
             * @param {*} [value=_.identity] The value to convert to an iteratee.
             * @returns {Function} Returns the iteratee.
             */
            function baseIteratee(value) {
              // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
              // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
              if (typeof value == 'function') {
                return value;
              }
              if (value == null) {
                return identity;
              }
              if (typeof value == 'object') {
                return isArray(value)
                  ? baseMatchesProperty(value[0], value[1])
                  : baseMatches(value);
              }
              return property(value);
            }

            module.exports = baseIteratee;

            /***/
          },

        /***/ '../node_modules/lodash/_baseKeys.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isPrototype = __webpack_require__(
                /*! ./_isPrototype */ '../node_modules/lodash/_isPrototype.js'
              ),
              nativeKeys = __webpack_require__(
                /*! ./_nativeKeys */ '../node_modules/lodash/_nativeKeys.js'
              );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             */
            function baseKeys(object) {
              if (!isPrototype(object)) {
                return nativeKeys(object);
              }
              var result = [];
              for (var key in Object(object)) {
                if (hasOwnProperty.call(object, key) && key != 'constructor') {
                  result.push(key);
                }
              }
              return result;
            }

            module.exports = baseKeys;

            /***/
          },

        /***/ '../node_modules/lodash/_baseMatches.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_baseMatches.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsMatch = __webpack_require__(
                /*! ./_baseIsMatch */ '../node_modules/lodash/_baseIsMatch.js'
              ),
              getMatchData = __webpack_require__(
                /*! ./_getMatchData */ '../node_modules/lodash/_getMatchData.js'
              ),
              matchesStrictComparable = __webpack_require__(
                /*! ./_matchesStrictComparable */ '../node_modules/lodash/_matchesStrictComparable.js'
              );

            /**
             * The base implementation of `_.matches` which doesn't clone `source`.
             *
             * @private
             * @param {Object} source The object of property values to match.
             * @returns {Function} Returns the new spec function.
             */
            function baseMatches(source) {
              var matchData = getMatchData(source);
              if (matchData.length == 1 && matchData[0][2]) {
                return matchesStrictComparable(matchData[0][0], matchData[0][1]);
              }
              return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
              };
            }

            module.exports = baseMatches;

            /***/
          },

        /***/ '../node_modules/lodash/_baseMatchesProperty.js':
          /*!******************************************************!*\
  !*** ../node_modules/lodash/_baseMatchesProperty.js ***!
  \******************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsEqual = __webpack_require__(
                /*! ./_baseIsEqual */ '../node_modules/lodash/_baseIsEqual.js'
              ),
              get = __webpack_require__(/*! ./get */ '../node_modules/lodash/get.js'),
              hasIn = __webpack_require__(
                /*! ./hasIn */ '../node_modules/lodash/hasIn.js'
              ),
              isKey = __webpack_require__(
                /*! ./_isKey */ '../node_modules/lodash/_isKey.js'
              ),
              isStrictComparable = __webpack_require__(
                /*! ./_isStrictComparable */ '../node_modules/lodash/_isStrictComparable.js'
              ),
              matchesStrictComparable = __webpack_require__(
                /*! ./_matchesStrictComparable */ '../node_modules/lodash/_matchesStrictComparable.js'
              ),
              toKey = __webpack_require__(
                /*! ./_toKey */ '../node_modules/lodash/_toKey.js'
              );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1,
              COMPARE_UNORDERED_FLAG = 2;

            /**
             * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
             *
             * @private
             * @param {string} path The path of the property to get.
             * @param {*} srcValue The value to match.
             * @returns {Function} Returns the new spec function.
             */
            function baseMatchesProperty(path, srcValue) {
              if (isKey(path) && isStrictComparable(srcValue)) {
                return matchesStrictComparable(toKey(path), srcValue);
              }
              return function(object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue
                  ? hasIn(object, path)
                  : baseIsEqual(
                      srcValue,
                      objValue,
                      COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
                    );
              };
            }

            module.exports = baseMatchesProperty;

            /***/
          },

        /***/ '../node_modules/lodash/_baseProperty.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_baseProperty.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * The base implementation of `_.property` without support for deep paths.
             *
             * @private
             * @param {string} key The key of the property to get.
             * @returns {Function} Returns the new accessor function.
             */
            function baseProperty(key) {
              return function(object) {
                return object == null ? undefined : object[key];
              };
            }

            module.exports = baseProperty;

            /***/
          },

        /***/ '../node_modules/lodash/_basePropertyDeep.js':
          /*!***************************************************!*\
  !*** ../node_modules/lodash/_basePropertyDeep.js ***!
  \***************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGet = __webpack_require__(
              /*! ./_baseGet */ '../node_modules/lodash/_baseGet.js'
            );

            /**
             * A specialized version of `baseProperty` which supports deep paths.
             *
             * @private
             * @param {Array|string} path The path of the property to get.
             * @returns {Function} Returns the new accessor function.
             */
            function basePropertyDeep(path) {
              return function(object) {
                return baseGet(object, path);
              };
            }

            module.exports = basePropertyDeep;

            /***/
          },

        /***/ '../node_modules/lodash/_baseTimes.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * The base implementation of `_.times` without support for iteratee shorthands
             * or max array length checks.
             *
             * @private
             * @param {number} n The number of times to invoke `iteratee`.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the array of results.
             */
            function baseTimes(n, iteratee) {
              var index = -1,
                result = Array(n);

              while (++index < n) {
                result[index] = iteratee(index);
              }
              return result;
            }

            module.exports = baseTimes;

            /***/
          },

        /***/ '../node_modules/lodash/_baseToString.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_baseToString.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Symbol = __webpack_require__(
                /*! ./_Symbol */ '../node_modules/lodash/_Symbol.js'
              ),
              arrayMap = __webpack_require__(
                /*! ./_arrayMap */ '../node_modules/lodash/_arrayMap.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isSymbol = __webpack_require__(
                /*! ./isSymbol */ '../node_modules/lodash/isSymbol.js'
              );

            /** Used as references for various `Number` constants. */
            var INFINITY = 1 / 0;

            /** Used to convert symbols to primitives and strings. */
            var symbolProto = Symbol ? Symbol.prototype : undefined,
              symbolToString = symbolProto ? symbolProto.toString : undefined;

            /**
             * The base implementation of `_.toString` which doesn't convert nullish
             * values to empty strings.
             *
             * @private
             * @param {*} value The value to process.
             * @returns {string} Returns the string.
             */
            function baseToString(value) {
              // Exit early for strings to avoid a performance hit in some environments.
              if (typeof value == 'string') {
                return value;
              }
              if (isArray(value)) {
                // Recursively convert values (susceptible to call stack limits).
                return arrayMap(value, baseToString) + '';
              }
              if (isSymbol(value)) {
                return symbolToString ? symbolToString.call(value) : '';
              }
              var result = value + '';
              return result == '0' && 1 / value == -INFINITY ? '-0' : result;
            }

            module.exports = baseToString;

            /***/
          },

        /***/ '../node_modules/lodash/_baseUnary.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * The base implementation of `_.unary` without support for storing metadata.
             *
             * @private
             * @param {Function} func The function to cap arguments for.
             * @returns {Function} Returns the new capped function.
             */
            function baseUnary(func) {
              return function(value) {
                return func(value);
              };
            }

            module.exports = baseUnary;

            /***/
          },

        /***/ '../node_modules/lodash/_cacheHas.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_cacheHas.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if a `cache` value for `key` exists.
             *
             * @private
             * @param {Object} cache The cache to query.
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function cacheHas(cache, key) {
              return cache.has(key);
            }

            module.exports = cacheHas;

            /***/
          },

        /***/ '../node_modules/lodash/_castPath.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_castPath.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isKey = __webpack_require__(
                /*! ./_isKey */ '../node_modules/lodash/_isKey.js'
              ),
              stringToPath = __webpack_require__(
                /*! ./_stringToPath */ '../node_modules/lodash/_stringToPath.js'
              ),
              toString = __webpack_require__(
                /*! ./toString */ '../node_modules/lodash/toString.js'
              );

            /**
             * Casts `value` to a path array if it's not one.
             *
             * @private
             * @param {*} value The value to inspect.
             * @param {Object} [object] The object to query keys on.
             * @returns {Array} Returns the cast property path array.
             */
            function castPath(value, object) {
              if (isArray(value)) {
                return value;
              }
              return isKey(value, object) ? [value] : stringToPath(toString(value));
            }

            module.exports = castPath;

            /***/
          },

        /***/ '../node_modules/lodash/_coreJsData.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var root = __webpack_require__(
              /*! ./_root */ '../node_modules/lodash/_root.js'
            );

            /** Used to detect overreaching core-js shims. */
            var coreJsData = root['__core-js_shared__'];

            module.exports = coreJsData;

            /***/
          },

        /***/ '../node_modules/lodash/_createAggregator.js':
          /*!***************************************************!*\
  !*** ../node_modules/lodash/_createAggregator.js ***!
  \***************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var arrayAggregator = __webpack_require__(
                /*! ./_arrayAggregator */ '../node_modules/lodash/_arrayAggregator.js'
              ),
              baseAggregator = __webpack_require__(
                /*! ./_baseAggregator */ '../node_modules/lodash/_baseAggregator.js'
              ),
              baseIteratee = __webpack_require__(
                /*! ./_baseIteratee */ '../node_modules/lodash/_baseIteratee.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              );

            /**
             * Creates a function like `_.groupBy`.
             *
             * @private
             * @param {Function} setter The function to set accumulator values.
             * @param {Function} [initializer] The accumulator object initializer.
             * @returns {Function} Returns the new aggregator function.
             */
            function createAggregator(setter, initializer) {
              return function(collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator,
                  accumulator = initializer ? initializer() : {};

                return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
              };
            }

            module.exports = createAggregator;

            /***/
          },

        /***/ '../node_modules/lodash/_createBaseEach.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_createBaseEach.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isArrayLike = __webpack_require__(
              /*! ./isArrayLike */ '../node_modules/lodash/isArrayLike.js'
            );

            /**
             * Creates a `baseEach` or `baseEachRight` function.
             *
             * @private
             * @param {Function} eachFunc The function to iterate over a collection.
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {Function} Returns the new base function.
             */
            function createBaseEach(eachFunc, fromRight) {
              return function(collection, iteratee) {
                if (collection == null) {
                  return collection;
                }
                if (!isArrayLike(collection)) {
                  return eachFunc(collection, iteratee);
                }
                var length = collection.length,
                  index = fromRight ? length : -1,
                  iterable = Object(collection);

                while (fromRight ? index-- : ++index < length) {
                  if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                  }
                }
                return collection;
              };
            }

            module.exports = createBaseEach;

            /***/
          },

        /***/ '../node_modules/lodash/_createBaseFor.js':
          /*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Creates a base function for methods like `_.forIn` and `_.forOwn`.
             *
             * @private
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {Function} Returns the new base function.
             */
            function createBaseFor(fromRight) {
              return function(object, iteratee, keysFunc) {
                var index = -1,
                  iterable = Object(object),
                  props = keysFunc(object),
                  length = props.length;

                while (length--) {
                  var key = props[fromRight ? length : ++index];
                  if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                  }
                }
                return object;
              };
            }

            module.exports = createBaseFor;

            /***/
          },

        /***/ '../node_modules/lodash/_defineProperty.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
              /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
            );

            var defineProperty = (function() {
              try {
                var func = getNative(Object, 'defineProperty');
                func({}, '', {});
                return func;
              } catch (e) {}
            })();

            module.exports = defineProperty;

            /***/
          },

        /***/ '../node_modules/lodash/_equalArrays.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_equalArrays.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var SetCache = __webpack_require__(
                /*! ./_SetCache */ '../node_modules/lodash/_SetCache.js'
              ),
              arraySome = __webpack_require__(
                /*! ./_arraySome */ '../node_modules/lodash/_arraySome.js'
              ),
              cacheHas = __webpack_require__(
                /*! ./_cacheHas */ '../node_modules/lodash/_cacheHas.js'
              );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1,
              COMPARE_UNORDERED_FLAG = 2;

            /**
             * A specialized version of `baseIsEqualDeep` for arrays with support for
             * partial deep comparisons.
             *
             * @private
             * @param {Array} array The array to compare.
             * @param {Array} other The other array to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `array` and `other` objects.
             * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
             */
            function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                arrLength = array.length,
                othLength = other.length;

              if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(array);
              if (stacked && stack.get(other)) {
                return stacked == other;
              }
              var index = -1,
                result = true,
                seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

              stack.set(array, other);
              stack.set(other, array);

              // Ignore non-index properties.
              while (++index < arrLength) {
                var arrValue = array[index],
                  othValue = other[index];

                if (customizer) {
                  var compared = isPartial
                    ? customizer(othValue, arrValue, index, other, array, stack)
                    : customizer(arrValue, othValue, index, array, other, stack);
                }
                if (compared !== undefined) {
                  if (compared) {
                    continue;
                  }
                  result = false;
                  break;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (seen) {
                  if (
                    !arraySome(other, function(othValue, othIndex) {
                      if (
                        !cacheHas(seen, othIndex) &&
                        (arrValue === othValue ||
                          equalFunc(arrValue, othValue, bitmask, customizer, stack))
                      ) {
                        return seen.push(othIndex);
                      }
                    })
                  ) {
                    result = false;
                    break;
                  }
                } else if (
                  !(
                    arrValue === othValue ||
                    equalFunc(arrValue, othValue, bitmask, customizer, stack)
                  )
                ) {
                  result = false;
                  break;
                }
              }
              stack['delete'](array);
              stack['delete'](other);
              return result;
            }

            module.exports = equalArrays;

            /***/
          },

        /***/ '../node_modules/lodash/_equalByTag.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_equalByTag.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Symbol = __webpack_require__(
                /*! ./_Symbol */ '../node_modules/lodash/_Symbol.js'
              ),
              Uint8Array = __webpack_require__(
                /*! ./_Uint8Array */ '../node_modules/lodash/_Uint8Array.js'
              ),
              eq = __webpack_require__(/*! ./eq */ '../node_modules/lodash/eq.js'),
              equalArrays = __webpack_require__(
                /*! ./_equalArrays */ '../node_modules/lodash/_equalArrays.js'
              ),
              mapToArray = __webpack_require__(
                /*! ./_mapToArray */ '../node_modules/lodash/_mapToArray.js'
              ),
              setToArray = __webpack_require__(
                /*! ./_setToArray */ '../node_modules/lodash/_setToArray.js'
              );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1,
              COMPARE_UNORDERED_FLAG = 2;

            /** `Object#toString` result references. */
            var boolTag = '[object Boolean]',
              dateTag = '[object Date]',
              errorTag = '[object Error]',
              mapTag = '[object Map]',
              numberTag = '[object Number]',
              regexpTag = '[object RegExp]',
              setTag = '[object Set]',
              stringTag = '[object String]',
              symbolTag = '[object Symbol]';

            var arrayBufferTag = '[object ArrayBuffer]',
              dataViewTag = '[object DataView]';

            /** Used to convert symbols to primitives and strings. */
            var symbolProto = Symbol ? Symbol.prototype : undefined,
              symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

            /**
             * A specialized version of `baseIsEqualDeep` for comparing objects of
             * the same `toStringTag`.
             *
             * **Note:** This function only supports comparing values with tags of
             * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {string} tag The `toStringTag` of the objects to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function equalByTag(
              object,
              other,
              tag,
              bitmask,
              customizer,
              equalFunc,
              stack
            ) {
              switch (tag) {
                case dataViewTag:
                  if (
                    object.byteLength != other.byteLength ||
                    object.byteOffset != other.byteOffset
                  ) {
                    return false;
                  }
                  object = object.buffer;
                  other = other.buffer;

                case arrayBufferTag:
                  if (
                    object.byteLength != other.byteLength ||
                    !equalFunc(new Uint8Array(object), new Uint8Array(other))
                  ) {
                    return false;
                  }
                  return true;

                case boolTag:
                case dateTag:
                case numberTag:
                  // Coerce booleans to `1` or `0` and dates to milliseconds.
                  // Invalid dates are coerced to `NaN`.
                  return eq(+object, +other);

                case errorTag:
                  return object.name == other.name && object.message == other.message;

                case regexpTag:
                case stringTag:
                  // Coerce regexes to strings and treat strings, primitives and objects,
                  // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                  // for more details.
                  return object == other + '';

                case mapTag:
                  var convert = mapToArray;

                case setTag:
                  var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                  convert || (convert = setToArray);

                  if (object.size != other.size && !isPartial) {
                    return false;
                  }
                  // Assume cyclic values are equal.
                  var stacked = stack.get(object);
                  if (stacked) {
                    return stacked == other;
                  }
                  bitmask |= COMPARE_UNORDERED_FLAG;

                  // Recursively compare objects (susceptible to call stack limits).
                  stack.set(object, other);
                  var result = equalArrays(
                    convert(object),
                    convert(other),
                    bitmask,
                    customizer,
                    equalFunc,
                    stack
                  );
                  stack['delete'](object);
                  return result;

                case symbolTag:
                  if (symbolValueOf) {
                    return symbolValueOf.call(object) == symbolValueOf.call(other);
                  }
              }
              return false;
            }

            module.exports = equalByTag;

            /***/
          },

        /***/ '../node_modules/lodash/_equalObjects.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_equalObjects.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getAllKeys = __webpack_require__(
              /*! ./_getAllKeys */ '../node_modules/lodash/_getAllKeys.js'
            );

            /** Used to compose bitmasks for value comparisons. */
            var COMPARE_PARTIAL_FLAG = 1;

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * A specialized version of `baseIsEqualDeep` for objects with support for
             * partial deep comparisons.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
             * @param {Function} customizer The function to customize comparisons.
             * @param {Function} equalFunc The function to determine equivalents of values.
             * @param {Object} stack Tracks traversed `object` and `other` objects.
             * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
             */
            function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                objProps = getAllKeys(object),
                objLength = objProps.length,
                othProps = getAllKeys(other),
                othLength = othProps.length;

              if (objLength != othLength && !isPartial) {
                return false;
              }
              var index = objLength;
              while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                  return false;
                }
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(object);
              if (stacked && stack.get(other)) {
                return stacked == other;
              }
              var result = true;
              stack.set(object, other);
              stack.set(other, object);

              var skipCtor = isPartial;
              while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key],
                  othValue = other[key];

                if (customizer) {
                  var compared = isPartial
                    ? customizer(othValue, objValue, key, other, object, stack)
                    : customizer(objValue, othValue, key, object, other, stack);
                }
                // Recursively compare objects (susceptible to call stack limits).
                if (
                  !(compared === undefined
                    ? objValue === othValue ||
                      equalFunc(objValue, othValue, bitmask, customizer, stack)
                    : compared)
                ) {
                  result = false;
                  break;
                }
                skipCtor || (skipCtor = key == 'constructor');
              }
              if (result && !skipCtor) {
                var objCtor = object.constructor,
                  othCtor = other.constructor;

                // Non `Object` object instances with different constructors are not equal.
                if (
                  objCtor != othCtor &&
                  ('constructor' in object && 'constructor' in other) &&
                  !(
                    typeof objCtor == 'function' &&
                    objCtor instanceof objCtor &&
                    typeof othCtor == 'function' &&
                    othCtor instanceof othCtor
                  )
                ) {
                  result = false;
                }
              }
              stack['delete'](object);
              stack['delete'](other);
              return result;
            }

            module.exports = equalObjects;

            /***/
          },

        /***/ '../node_modules/lodash/_freeGlobal.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
              /** Detect free variable `global` from Node.js. */
              var freeGlobal =
                typeof global == 'object' && global && global.Object === Object && global;

              module.exports = freeGlobal;

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/lodash/_getAllKeys.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_getAllKeys.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGetAllKeys = __webpack_require__(
                /*! ./_baseGetAllKeys */ '../node_modules/lodash/_baseGetAllKeys.js'
              ),
              getSymbols = __webpack_require__(
                /*! ./_getSymbols */ '../node_modules/lodash/_getSymbols.js'
              ),
              keys = __webpack_require__(/*! ./keys */ '../node_modules/lodash/keys.js');

            /**
             * Creates an array of own enumerable property names and symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names and symbols.
             */
            function getAllKeys(object) {
              return baseGetAllKeys(object, keys, getSymbols);
            }

            module.exports = getAllKeys;

            /***/
          },

        /***/ '../node_modules/lodash/_getMapData.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isKeyable = __webpack_require__(
              /*! ./_isKeyable */ '../node_modules/lodash/_isKeyable.js'
            );

            /**
             * Gets the data for `map`.
             *
             * @private
             * @param {Object} map The map to query.
             * @param {string} key The reference key.
             * @returns {*} Returns the map data.
             */
            function getMapData(map, key) {
              var data = map.__data__;
              return isKeyable(key)
                ? data[typeof key == 'string' ? 'string' : 'hash']
                : data.map;
            }

            module.exports = getMapData;

            /***/
          },

        /***/ '../node_modules/lodash/_getMatchData.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_getMatchData.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isStrictComparable = __webpack_require__(
                /*! ./_isStrictComparable */ '../node_modules/lodash/_isStrictComparable.js'
              ),
              keys = __webpack_require__(/*! ./keys */ '../node_modules/lodash/keys.js');

            /**
             * Gets the property names, values, and compare flags of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the match data of `object`.
             */
            function getMatchData(object) {
              var result = keys(object),
                length = result.length;

              while (length--) {
                var key = result[length],
                  value = object[key];

                result[length] = [key, value, isStrictComparable(value)];
              }
              return result;
            }

            module.exports = getMatchData;

            /***/
          },

        /***/ '../node_modules/lodash/_getNative.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsNative = __webpack_require__(
                /*! ./_baseIsNative */ '../node_modules/lodash/_baseIsNative.js'
              ),
              getValue = __webpack_require__(
                /*! ./_getValue */ '../node_modules/lodash/_getValue.js'
              );

            /**
             * Gets the native function at `key` of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {string} key The key of the method to get.
             * @returns {*} Returns the function if it's native, else `undefined`.
             */
            function getNative(object, key) {
              var value = getValue(object, key);
              return baseIsNative(value) ? value : undefined;
            }

            module.exports = getNative;

            /***/
          },

        /***/ '../node_modules/lodash/_getRawTag.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Symbol = __webpack_require__(
              /*! ./_Symbol */ '../node_modules/lodash/_Symbol.js'
            );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString = objectProto.toString;

            /** Built-in value references. */
            var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

            /**
             * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the raw `toStringTag`.
             */
            function getRawTag(value) {
              var isOwn = hasOwnProperty.call(value, symToStringTag),
                tag = value[symToStringTag];

              try {
                value[symToStringTag] = undefined;
                var unmasked = true;
              } catch (e) {}

              var result = nativeObjectToString.call(value);
              if (unmasked) {
                if (isOwn) {
                  value[symToStringTag] = tag;
                } else {
                  delete value[symToStringTag];
                }
              }
              return result;
            }

            module.exports = getRawTag;

            /***/
          },

        /***/ '../node_modules/lodash/_getSymbols.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_getSymbols.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var arrayFilter = __webpack_require__(
                /*! ./_arrayFilter */ '../node_modules/lodash/_arrayFilter.js'
              ),
              stubArray = __webpack_require__(
                /*! ./stubArray */ '../node_modules/lodash/stubArray.js'
              );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Built-in value references. */
            var propertyIsEnumerable = objectProto.propertyIsEnumerable;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeGetSymbols = Object.getOwnPropertySymbols;

            /**
             * Creates an array of the own enumerable symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of symbols.
             */
            var getSymbols = !nativeGetSymbols
              ? stubArray
              : function(object) {
                  if (object == null) {
                    return [];
                  }
                  object = Object(object);
                  return arrayFilter(nativeGetSymbols(object), function(symbol) {
                    return propertyIsEnumerable.call(object, symbol);
                  });
                };

            module.exports = getSymbols;

            /***/
          },

        /***/ '../node_modules/lodash/_getTag.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/_getTag.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var DataView = __webpack_require__(
                /*! ./_DataView */ '../node_modules/lodash/_DataView.js'
              ),
              Map = __webpack_require__(/*! ./_Map */ '../node_modules/lodash/_Map.js'),
              Promise = __webpack_require__(
                /*! ./_Promise */ '../node_modules/lodash/_Promise.js'
              ),
              Set = __webpack_require__(/*! ./_Set */ '../node_modules/lodash/_Set.js'),
              WeakMap = __webpack_require__(
                /*! ./_WeakMap */ '../node_modules/lodash/_WeakMap.js'
              ),
              baseGetTag = __webpack_require__(
                /*! ./_baseGetTag */ '../node_modules/lodash/_baseGetTag.js'
              ),
              toSource = __webpack_require__(
                /*! ./_toSource */ '../node_modules/lodash/_toSource.js'
              );

            /** `Object#toString` result references. */
            var mapTag = '[object Map]',
              objectTag = '[object Object]',
              promiseTag = '[object Promise]',
              setTag = '[object Set]',
              weakMapTag = '[object WeakMap]';

            var dataViewTag = '[object DataView]';

            /** Used to detect maps, sets, and weakmaps. */
            var dataViewCtorString = toSource(DataView),
              mapCtorString = toSource(Map),
              promiseCtorString = toSource(Promise),
              setCtorString = toSource(Set),
              weakMapCtorString = toSource(WeakMap);

            /**
             * Gets the `toStringTag` of `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            var getTag = baseGetTag;

            // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
            if (
              (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
              (Map && getTag(new Map()) != mapTag) ||
              (Promise && getTag(Promise.resolve()) != promiseTag) ||
              (Set && getTag(new Set()) != setTag) ||
              (WeakMap && getTag(new WeakMap()) != weakMapTag)
            ) {
              getTag = function(value) {
                var result = baseGetTag(value),
                  Ctor = result == objectTag ? value.constructor : undefined,
                  ctorString = Ctor ? toSource(Ctor) : '';

                if (ctorString) {
                  switch (ctorString) {
                    case dataViewCtorString:
                      return dataViewTag;
                    case mapCtorString:
                      return mapTag;
                    case promiseCtorString:
                      return promiseTag;
                    case setCtorString:
                      return setTag;
                    case weakMapCtorString:
                      return weakMapTag;
                  }
                }
                return result;
              };
            }

            module.exports = getTag;

            /***/
          },

        /***/ '../node_modules/lodash/_getValue.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Gets the value at `key` of `object`.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {string} key The key of the property to get.
             * @returns {*} Returns the property value.
             */
            function getValue(object, key) {
              return object == null ? undefined : object[key];
            }

            module.exports = getValue;

            /***/
          },

        /***/ '../node_modules/lodash/_hasPath.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_hasPath.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var castPath = __webpack_require__(
                /*! ./_castPath */ '../node_modules/lodash/_castPath.js'
              ),
              isArguments = __webpack_require__(
                /*! ./isArguments */ '../node_modules/lodash/isArguments.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isIndex = __webpack_require__(
                /*! ./_isIndex */ '../node_modules/lodash/_isIndex.js'
              ),
              isLength = __webpack_require__(
                /*! ./isLength */ '../node_modules/lodash/isLength.js'
              ),
              toKey = __webpack_require__(
                /*! ./_toKey */ '../node_modules/lodash/_toKey.js'
              );

            /**
             * Checks if `path` exists on `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Array|string} path The path to check.
             * @param {Function} hasFunc The function to check properties.
             * @returns {boolean} Returns `true` if `path` exists, else `false`.
             */
            function hasPath(object, path, hasFunc) {
              path = castPath(path, object);

              var index = -1,
                length = path.length,
                result = false;

              while (++index < length) {
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) {
                  break;
                }
                object = object[key];
              }
              if (result || ++index != length) {
                return result;
              }
              length = object == null ? 0 : object.length;
              return (
                !!length &&
                isLength(length) &&
                isIndex(key, length) &&
                (isArray(object) || isArguments(object))
              );
            }

            module.exports = hasPath;

            /***/
          },

        /***/ '../node_modules/lodash/_hashClear.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var nativeCreate = __webpack_require__(
              /*! ./_nativeCreate */ '../node_modules/lodash/_nativeCreate.js'
            );

            /**
             * Removes all key-value entries from the hash.
             *
             * @private
             * @name clear
             * @memberOf Hash
             */
            function hashClear() {
              this.__data__ = nativeCreate ? nativeCreate(null) : {};
              this.size = 0;
            }

            module.exports = hashClear;

            /***/
          },

        /***/ '../node_modules/lodash/_hashDelete.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Removes `key` and its value from the hash.
             *
             * @private
             * @name delete
             * @memberOf Hash
             * @param {Object} hash The hash to modify.
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function hashDelete(key) {
              var result = this.has(key) && delete this.__data__[key];
              this.size -= result ? 1 : 0;
              return result;
            }

            module.exports = hashDelete;

            /***/
          },

        /***/ '../node_modules/lodash/_hashGet.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var nativeCreate = __webpack_require__(
              /*! ./_nativeCreate */ '../node_modules/lodash/_nativeCreate.js'
            );

            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED = '__lodash_hash_undefined__';

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Gets the hash value for `key`.
             *
             * @private
             * @name get
             * @memberOf Hash
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function hashGet(key) {
              var data = this.__data__;
              if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
              }
              return hasOwnProperty.call(data, key) ? data[key] : undefined;
            }

            module.exports = hashGet;

            /***/
          },

        /***/ '../node_modules/lodash/_hashHas.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var nativeCreate = __webpack_require__(
              /*! ./_nativeCreate */ '../node_modules/lodash/_nativeCreate.js'
            );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Checks if a hash value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Hash
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function hashHas(key) {
              var data = this.__data__;
              return nativeCreate
                ? data[key] !== undefined
                : hasOwnProperty.call(data, key);
            }

            module.exports = hashHas;

            /***/
          },

        /***/ '../node_modules/lodash/_hashSet.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var nativeCreate = __webpack_require__(
              /*! ./_nativeCreate */ '../node_modules/lodash/_nativeCreate.js'
            );

            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED = '__lodash_hash_undefined__';

            /**
             * Sets the hash `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Hash
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the hash instance.
             */
            function hashSet(key, value) {
              var data = this.__data__;
              this.size += this.has(key) ? 0 : 1;
              data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
              return this;
            }

            module.exports = hashSet;

            /***/
          },

        /***/ '../node_modules/lodash/_isFlattenable.js':
          /*!************************************************!*\
  !*** ../node_modules/lodash/_isFlattenable.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Symbol = __webpack_require__(
                /*! ./_Symbol */ '../node_modules/lodash/_Symbol.js'
              ),
              isArguments = __webpack_require__(
                /*! ./isArguments */ '../node_modules/lodash/isArguments.js'
              ),
              isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              );

            /** Built-in value references. */
            var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

            /**
             * Checks if `value` is a flattenable `arguments` object or array.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
             */
            function isFlattenable(value) {
              return (
                isArray(value) ||
                isArguments(value) ||
                !!(spreadableSymbol && value && value[spreadableSymbol])
              );
            }

            module.exports = isFlattenable;

            /***/
          },

        /***/ '../node_modules/lodash/_isIndex.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used as references for various `Number` constants. */
            var MAX_SAFE_INTEGER = 9007199254740991;

            /** Used to detect unsigned integer values. */
            var reIsUint = /^(?:0|[1-9]\d*)$/;

            /**
             * Checks if `value` is a valid array-like index.
             *
             * @private
             * @param {*} value The value to check.
             * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
             * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
             */
            function isIndex(value, length) {
              length = length == null ? MAX_SAFE_INTEGER : length;
              return (
                !!length &&
                (typeof value == 'number' || reIsUint.test(value)) &&
                (value > -1 && value % 1 == 0 && value < length)
              );
            }

            module.exports = isIndex;

            /***/
          },

        /***/ '../node_modules/lodash/_isKey.js':
          /*!****************************************!*\
  !*** ../node_modules/lodash/_isKey.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isArray = __webpack_require__(
                /*! ./isArray */ '../node_modules/lodash/isArray.js'
              ),
              isSymbol = __webpack_require__(
                /*! ./isSymbol */ '../node_modules/lodash/isSymbol.js'
              );

            /** Used to match property names within property paths. */
            var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              reIsPlainProp = /^\w*$/;

            /**
             * Checks if `value` is a property name and not a property path.
             *
             * @private
             * @param {*} value The value to check.
             * @param {Object} [object] The object to query keys on.
             * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
             */
            function isKey(value, object) {
              if (isArray(value)) {
                return false;
              }
              var type = typeof value;
              if (
                type == 'number' ||
                type == 'symbol' ||
                type == 'boolean' ||
                value == null ||
                isSymbol(value)
              ) {
                return true;
              }
              return (
                reIsPlainProp.test(value) ||
                !reIsDeepProp.test(value) ||
                (object != null && value in Object(object))
              );
            }

            module.exports = isKey;

            /***/
          },

        /***/ '../node_modules/lodash/_isKeyable.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if `value` is suitable for use as unique object key.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
             */
            function isKeyable(value) {
              var type = typeof value;
              return type == 'string' ||
                type == 'number' ||
                type == 'symbol' ||
                type == 'boolean'
                ? value !== '__proto__'
                : value === null;
            }

            module.exports = isKeyable;

            /***/
          },

        /***/ '../node_modules/lodash/_isMasked.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var coreJsData = __webpack_require__(
              /*! ./_coreJsData */ '../node_modules/lodash/_coreJsData.js'
            );

            /** Used to detect methods masquerading as native. */
            var maskSrcKey = (function() {
              var uid = /[^.]+$/.exec(
                (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
              );
              return uid ? 'Symbol(src)_1.' + uid : '';
            })();

            /**
             * Checks if `func` has its source masked.
             *
             * @private
             * @param {Function} func The function to check.
             * @returns {boolean} Returns `true` if `func` is masked, else `false`.
             */
            function isMasked(func) {
              return !!maskSrcKey && maskSrcKey in func;
            }

            module.exports = isMasked;

            /***/
          },

        /***/ '../node_modules/lodash/_isPrototype.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /**
             * Checks if `value` is likely a prototype object.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
             */
            function isPrototype(value) {
              var Ctor = value && value.constructor,
                proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

              return value === proto;
            }

            module.exports = isPrototype;

            /***/
          },

        /***/ '../node_modules/lodash/_isStrictComparable.js':
          /*!*****************************************************!*\
  !*** ../node_modules/lodash/_isStrictComparable.js ***!
  \*****************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(
              /*! ./isObject */ '../node_modules/lodash/isObject.js'
            );

            /**
             * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` if suitable for strict
             *  equality comparisons, else `false`.
             */
            function isStrictComparable(value) {
              return value === value && !isObject(value);
            }

            module.exports = isStrictComparable;

            /***/
          },

        /***/ '../node_modules/lodash/_listCacheClear.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Removes all key-value entries from the list cache.
             *
             * @private
             * @name clear
             * @memberOf ListCache
             */
            function listCacheClear() {
              this.__data__ = [];
              this.size = 0;
            }

            module.exports = listCacheClear;

            /***/
          },

        /***/ '../node_modules/lodash/_listCacheDelete.js':
          /*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var assocIndexOf = __webpack_require__(
              /*! ./_assocIndexOf */ '../node_modules/lodash/_assocIndexOf.js'
            );

            /** Used for built-in method references. */
            var arrayProto = Array.prototype;

            /** Built-in value references. */
            var splice = arrayProto.splice;

            /**
             * Removes `key` and its value from the list cache.
             *
             * @private
             * @name delete
             * @memberOf ListCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function listCacheDelete(key) {
              var data = this.__data__,
                index = assocIndexOf(data, key);

              if (index < 0) {
                return false;
              }
              var lastIndex = data.length - 1;
              if (index == lastIndex) {
                data.pop();
              } else {
                splice.call(data, index, 1);
              }
              --this.size;
              return true;
            }

            module.exports = listCacheDelete;

            /***/
          },

        /***/ '../node_modules/lodash/_listCacheGet.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var assocIndexOf = __webpack_require__(
              /*! ./_assocIndexOf */ '../node_modules/lodash/_assocIndexOf.js'
            );

            /**
             * Gets the list cache value for `key`.
             *
             * @private
             * @name get
             * @memberOf ListCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function listCacheGet(key) {
              var data = this.__data__,
                index = assocIndexOf(data, key);

              return index < 0 ? undefined : data[index][1];
            }

            module.exports = listCacheGet;

            /***/
          },

        /***/ '../node_modules/lodash/_listCacheHas.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var assocIndexOf = __webpack_require__(
              /*! ./_assocIndexOf */ '../node_modules/lodash/_assocIndexOf.js'
            );

            /**
             * Checks if a list cache value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf ListCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function listCacheHas(key) {
              return assocIndexOf(this.__data__, key) > -1;
            }

            module.exports = listCacheHas;

            /***/
          },

        /***/ '../node_modules/lodash/_listCacheSet.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var assocIndexOf = __webpack_require__(
              /*! ./_assocIndexOf */ '../node_modules/lodash/_assocIndexOf.js'
            );

            /**
             * Sets the list cache `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf ListCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the list cache instance.
             */
            function listCacheSet(key, value) {
              var data = this.__data__,
                index = assocIndexOf(data, key);

              if (index < 0) {
                ++this.size;
                data.push([key, value]);
              } else {
                data[index][1] = value;
              }
              return this;
            }

            module.exports = listCacheSet;

            /***/
          },

        /***/ '../node_modules/lodash/_mapCacheClear.js':
          /*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var Hash = __webpack_require__(
                /*! ./_Hash */ '../node_modules/lodash/_Hash.js'
              ),
              ListCache = __webpack_require__(
                /*! ./_ListCache */ '../node_modules/lodash/_ListCache.js'
              ),
              Map = __webpack_require__(/*! ./_Map */ '../node_modules/lodash/_Map.js');

            /**
             * Removes all key-value entries from the map.
             *
             * @private
             * @name clear
             * @memberOf MapCache
             */
            function mapCacheClear() {
              this.size = 0;
              this.__data__ = {
                hash: new Hash(),
                map: new (Map || ListCache)(),
                string: new Hash(),
              };
            }

            module.exports = mapCacheClear;

            /***/
          },

        /***/ '../node_modules/lodash/_mapCacheDelete.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getMapData = __webpack_require__(
              /*! ./_getMapData */ '../node_modules/lodash/_getMapData.js'
            );

            /**
             * Removes `key` and its value from the map.
             *
             * @private
             * @name delete
             * @memberOf MapCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function mapCacheDelete(key) {
              var result = getMapData(this, key)['delete'](key);
              this.size -= result ? 1 : 0;
              return result;
            }

            module.exports = mapCacheDelete;

            /***/
          },

        /***/ '../node_modules/lodash/_mapCacheGet.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getMapData = __webpack_require__(
              /*! ./_getMapData */ '../node_modules/lodash/_getMapData.js'
            );

            /**
             * Gets the map value for `key`.
             *
             * @private
             * @name get
             * @memberOf MapCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function mapCacheGet(key) {
              return getMapData(this, key).get(key);
            }

            module.exports = mapCacheGet;

            /***/
          },

        /***/ '../node_modules/lodash/_mapCacheHas.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getMapData = __webpack_require__(
              /*! ./_getMapData */ '../node_modules/lodash/_getMapData.js'
            );

            /**
             * Checks if a map value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf MapCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function mapCacheHas(key) {
              return getMapData(this, key).has(key);
            }

            module.exports = mapCacheHas;

            /***/
          },

        /***/ '../node_modules/lodash/_mapCacheSet.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getMapData = __webpack_require__(
              /*! ./_getMapData */ '../node_modules/lodash/_getMapData.js'
            );

            /**
             * Sets the map `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf MapCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the map cache instance.
             */
            function mapCacheSet(key, value) {
              var data = getMapData(this, key),
                size = data.size;

              data.set(key, value);
              this.size += data.size == size ? 0 : 1;
              return this;
            }

            module.exports = mapCacheSet;

            /***/
          },

        /***/ '../node_modules/lodash/_mapToArray.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_mapToArray.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Converts `map` to its key-value pairs.
             *
             * @private
             * @param {Object} map The map to convert.
             * @returns {Array} Returns the key-value pairs.
             */
            function mapToArray(map) {
              var index = -1,
                result = Array(map.size);

              map.forEach(function(value, key) {
                result[++index] = [key, value];
              });
              return result;
            }

            module.exports = mapToArray;

            /***/
          },

        /***/ '../node_modules/lodash/_matchesStrictComparable.js':
          /*!**********************************************************!*\
  !*** ../node_modules/lodash/_matchesStrictComparable.js ***!
  \**********************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * A specialized version of `matchesProperty` for source values suitable
             * for strict equality comparisons, i.e. `===`.
             *
             * @private
             * @param {string} key The key of the property to get.
             * @param {*} srcValue The value to match.
             * @returns {Function} Returns the new spec function.
             */
            function matchesStrictComparable(key, srcValue) {
              return function(object) {
                if (object == null) {
                  return false;
                }
                return (
                  object[key] === srcValue &&
                  (srcValue !== undefined || key in Object(object))
                );
              };
            }

            module.exports = matchesStrictComparable;

            /***/
          },

        /***/ '../node_modules/lodash/_memoizeCapped.js':
          /*!************************************************!*\
  !*** ../node_modules/lodash/_memoizeCapped.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var memoize = __webpack_require__(
              /*! ./memoize */ '../node_modules/lodash/memoize.js'
            );

            /** Used as the maximum memoize cache size. */
            var MAX_MEMOIZE_SIZE = 500;

            /**
             * A specialized version of `_.memoize` which clears the memoized function's
             * cache when it exceeds `MAX_MEMOIZE_SIZE`.
             *
             * @private
             * @param {Function} func The function to have its output memoized.
             * @returns {Function} Returns the new memoized function.
             */
            function memoizeCapped(func) {
              var result = memoize(func, function(key) {
                if (cache.size === MAX_MEMOIZE_SIZE) {
                  cache.clear();
                }
                return key;
              });

              var cache = result.cache;
              return result;
            }

            module.exports = memoizeCapped;

            /***/
          },

        /***/ '../node_modules/lodash/_nativeCreate.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var getNative = __webpack_require__(
              /*! ./_getNative */ '../node_modules/lodash/_getNative.js'
            );

            /* Built-in method references that are verified to be native. */
            var nativeCreate = getNative(Object, 'create');

            module.exports = nativeCreate;

            /***/
          },

        /***/ '../node_modules/lodash/_nativeKeys.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var overArg = __webpack_require__(
              /*! ./_overArg */ '../node_modules/lodash/_overArg.js'
            );

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeKeys = overArg(Object.keys, Object);

            module.exports = nativeKeys;

            /***/
          },

        /***/ '../node_modules/lodash/_nodeUtil.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(module) {
              var freeGlobal = __webpack_require__(
                /*! ./_freeGlobal */ '../node_modules/lodash/_freeGlobal.js'
              );

              /** Detect free variable `exports`. */
              var freeExports =
                typeof exports == 'object' && exports && !exports.nodeType && exports;

              /** Detect free variable `module`. */
              var freeModule =
                freeExports &&
                typeof module == 'object' &&
                module &&
                !module.nodeType &&
                module;

              /** Detect the popular CommonJS extension `module.exports`. */
              var moduleExports = freeModule && freeModule.exports === freeExports;

              /** Detect free variable `process` from Node.js. */
              var freeProcess = moduleExports && freeGlobal.process;

              /** Used to access faster Node.js helpers. */
              var nodeUtil = (function() {
                try {
                  return (
                    freeProcess && freeProcess.binding && freeProcess.binding('util')
                  );
                } catch (e) {}
              })();

              module.exports = nodeUtil;

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/module.js */ '../node_modules/webpack/buildin/module.js'
              )(module)
            ));

            /***/
          },

        /***/ '../node_modules/lodash/_objectToString.js':
          /*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString = objectProto.toString;

            /**
             * Converts `value` to a string using `Object.prototype.toString`.
             *
             * @private
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             */
            function objectToString(value) {
              return nativeObjectToString.call(value);
            }

            module.exports = objectToString;

            /***/
          },

        /***/ '../node_modules/lodash/_overArg.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Creates a unary function that invokes `func` with its argument transformed.
             *
             * @private
             * @param {Function} func The function to wrap.
             * @param {Function} transform The argument transform.
             * @returns {Function} Returns the new function.
             */
            function overArg(func, transform) {
              return function(arg) {
                return func(transform(arg));
              };
            }

            module.exports = overArg;

            /***/
          },

        /***/ '../node_modules/lodash/_root.js':
          /*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var freeGlobal = __webpack_require__(
              /*! ./_freeGlobal */ '../node_modules/lodash/_freeGlobal.js'
            );

            /** Detect free variable `self`. */
            var freeSelf =
              typeof self == 'object' && self && self.Object === Object && self;

            /** Used as a reference to the global object. */
            var root = freeGlobal || freeSelf || Function('return this')();

            module.exports = root;

            /***/
          },

        /***/ '../node_modules/lodash/_setCacheAdd.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheAdd.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used to stand-in for `undefined` hash values. */
            var HASH_UNDEFINED = '__lodash_hash_undefined__';

            /**
             * Adds `value` to the array cache.
             *
             * @private
             * @name add
             * @memberOf SetCache
             * @alias push
             * @param {*} value The value to cache.
             * @returns {Object} Returns the cache instance.
             */
            function setCacheAdd(value) {
              this.__data__.set(value, HASH_UNDEFINED);
              return this;
            }

            module.exports = setCacheAdd;

            /***/
          },

        /***/ '../node_modules/lodash/_setCacheHas.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheHas.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if `value` is in the array cache.
             *
             * @private
             * @name has
             * @memberOf SetCache
             * @param {*} value The value to search for.
             * @returns {number} Returns `true` if `value` is found, else `false`.
             */
            function setCacheHas(value) {
              return this.__data__.has(value);
            }

            module.exports = setCacheHas;

            /***/
          },

        /***/ '../node_modules/lodash/_setToArray.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_setToArray.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Converts `set` to an array of its values.
             *
             * @private
             * @param {Object} set The set to convert.
             * @returns {Array} Returns the values.
             */
            function setToArray(set) {
              var index = -1,
                result = Array(set.size);

              set.forEach(function(value) {
                result[++index] = value;
              });
              return result;
            }

            module.exports = setToArray;

            /***/
          },

        /***/ '../node_modules/lodash/_stackClear.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var ListCache = __webpack_require__(
              /*! ./_ListCache */ '../node_modules/lodash/_ListCache.js'
            );

            /**
             * Removes all key-value entries from the stack.
             *
             * @private
             * @name clear
             * @memberOf Stack
             */
            function stackClear() {
              this.__data__ = new ListCache();
              this.size = 0;
            }

            module.exports = stackClear;

            /***/
          },

        /***/ '../node_modules/lodash/_stackDelete.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Removes `key` and its value from the stack.
             *
             * @private
             * @name delete
             * @memberOf Stack
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */
            function stackDelete(key) {
              var data = this.__data__,
                result = data['delete'](key);

              this.size = data.size;
              return result;
            }

            module.exports = stackDelete;

            /***/
          },

        /***/ '../node_modules/lodash/_stackGet.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Gets the stack value for `key`.
             *
             * @private
             * @name get
             * @memberOf Stack
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */
            function stackGet(key) {
              return this.__data__.get(key);
            }

            module.exports = stackGet;

            /***/
          },

        /***/ '../node_modules/lodash/_stackHas.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if a stack value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Stack
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */
            function stackHas(key) {
              return this.__data__.has(key);
            }

            module.exports = stackHas;

            /***/
          },

        /***/ '../node_modules/lodash/_stackSet.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var ListCache = __webpack_require__(
                /*! ./_ListCache */ '../node_modules/lodash/_ListCache.js'
              ),
              Map = __webpack_require__(/*! ./_Map */ '../node_modules/lodash/_Map.js'),
              MapCache = __webpack_require__(
                /*! ./_MapCache */ '../node_modules/lodash/_MapCache.js'
              );

            /** Used as the size to enable large array optimizations. */
            var LARGE_ARRAY_SIZE = 200;

            /**
             * Sets the stack `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Stack
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the stack cache instance.
             */
            function stackSet(key, value) {
              var data = this.__data__;
              if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                  pairs.push([key, value]);
                  this.size = ++data.size;
                  return this;
                }
                data = this.__data__ = new MapCache(pairs);
              }
              data.set(key, value);
              this.size = data.size;
              return this;
            }

            module.exports = stackSet;

            /***/
          },

        /***/ '../node_modules/lodash/_stringToPath.js':
          /*!***********************************************!*\
  !*** ../node_modules/lodash/_stringToPath.js ***!
  \***********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var memoizeCapped = __webpack_require__(
              /*! ./_memoizeCapped */ '../node_modules/lodash/_memoizeCapped.js'
            );

            /** Used to match property names within property paths. */
            var reLeadingDot = /^\./,
              rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

            /** Used to match backslashes in property paths. */
            var reEscapeChar = /\\(\\)?/g;

            /**
             * Converts `string` to a property path array.
             *
             * @private
             * @param {string} string The string to convert.
             * @returns {Array} Returns the property path array.
             */
            var stringToPath = memoizeCapped(function(string) {
              var result = [];
              if (reLeadingDot.test(string)) {
                result.push('');
              }
              string.replace(rePropName, function(match, number, quote, string) {
                result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
              });
              return result;
            });

            module.exports = stringToPath;

            /***/
          },

        /***/ '../node_modules/lodash/_toKey.js':
          /*!****************************************!*\
  !*** ../node_modules/lodash/_toKey.js ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isSymbol = __webpack_require__(
              /*! ./isSymbol */ '../node_modules/lodash/isSymbol.js'
            );

            /** Used as references for various `Number` constants. */
            var INFINITY = 1 / 0;

            /**
             * Converts `value` to a string key if it's not a string or symbol.
             *
             * @private
             * @param {*} value The value to inspect.
             * @returns {string|symbol} Returns the key.
             */
            function toKey(value) {
              if (typeof value == 'string' || isSymbol(value)) {
                return value;
              }
              var result = value + '';
              return result == '0' && 1 / value == -INFINITY ? '-0' : result;
            }

            module.exports = toKey;

            /***/
          },

        /***/ '../node_modules/lodash/_toSource.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used for built-in method references. */
            var funcProto = Function.prototype;

            /** Used to resolve the decompiled source of functions. */
            var funcToString = funcProto.toString;

            /**
             * Converts `func` to its source code.
             *
             * @private
             * @param {Function} func The function to convert.
             * @returns {string} Returns the source code.
             */
            function toSource(func) {
              if (func != null) {
                try {
                  return funcToString.call(func);
                } catch (e) {}
                try {
                  return func + '';
                } catch (e) {}
              }
              return '';
            }

            module.exports = toSource;

            /***/
          },

        /***/ '../node_modules/lodash/eq.js':
          /*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Performs a
             * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
             * comparison between two values to determine if they are equivalent.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
             * @example
             *
             * var object = { 'a': 1 };
             * var other = { 'a': 1 };
             *
             * _.eq(object, object);
             * // => true
             *
             * _.eq(object, other);
             * // => false
             *
             * _.eq('a', 'a');
             * // => true
             *
             * _.eq('a', Object('a'));
             * // => false
             *
             * _.eq(NaN, NaN);
             * // => true
             */
            function eq(value, other) {
              return value === other || (value !== value && other !== other);
            }

            module.exports = eq;

            /***/
          },

        /***/ '../node_modules/lodash/flatten.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/flatten.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseFlatten = __webpack_require__(
              /*! ./_baseFlatten */ '../node_modules/lodash/_baseFlatten.js'
            );

            /**
             * Flattens `array` a single level deep.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Array
             * @param {Array} array The array to flatten.
             * @returns {Array} Returns the new flattened array.
             * @example
             *
             * _.flatten([1, [2, [3, [4]], 5]]);
             * // => [1, 2, [3, [4]], 5]
             */
            function flatten(array) {
              var length = array == null ? 0 : array.length;
              return length ? baseFlatten(array, 1) : [];
            }

            module.exports = flatten;

            /***/
          },

        /***/ '../node_modules/lodash/get.js':
          /*!*************************************!*\
  !*** ../node_modules/lodash/get.js ***!
  \*************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGet = __webpack_require__(
              /*! ./_baseGet */ '../node_modules/lodash/_baseGet.js'
            );

            /**
             * Gets the value at `path` of `object`. If the resolved value is
             * `undefined`, the `defaultValue` is returned in its place.
             *
             * @static
             * @memberOf _
             * @since 3.7.0
             * @category Object
             * @param {Object} object The object to query.
             * @param {Array|string} path The path of the property to get.
             * @param {*} [defaultValue] The value returned for `undefined` resolved values.
             * @returns {*} Returns the resolved value.
             * @example
             *
             * var object = { 'a': [{ 'b': { 'c': 3 } }] };
             *
             * _.get(object, 'a[0].b.c');
             * // => 3
             *
             * _.get(object, ['a', '0', 'b', 'c']);
             * // => 3
             *
             * _.get(object, 'a.b.c', 'default');
             * // => 'default'
             */
            function get(object, path, defaultValue) {
              var result = object == null ? undefined : baseGet(object, path);
              return result === undefined ? defaultValue : result;
            }

            module.exports = get;

            /***/
          },

        /***/ '../node_modules/lodash/groupBy.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/groupBy.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseAssignValue = __webpack_require__(
                /*! ./_baseAssignValue */ '../node_modules/lodash/_baseAssignValue.js'
              ),
              createAggregator = __webpack_require__(
                /*! ./_createAggregator */ '../node_modules/lodash/_createAggregator.js'
              );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Creates an object composed of keys generated from the results of running
             * each element of `collection` thru `iteratee`. The order of grouped values
             * is determined by the order they occur in `collection`. The corresponding
             * value of each key is an array of elements responsible for generating the
             * key. The iteratee is invoked with one argument: (value).
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Collection
             * @param {Array|Object} collection The collection to iterate over.
             * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
             * @returns {Object} Returns the composed aggregate object.
             * @example
             *
             * _.groupBy([6.1, 4.2, 6.3], Math.floor);
             * // => { '4': [4.2], '6': [6.1, 6.3] }
             *
             * // The `_.property` iteratee shorthand.
             * _.groupBy(['one', 'two', 'three'], 'length');
             * // => { '3': ['one', 'two'], '5': ['three'] }
             */
            var groupBy = createAggregator(function(result, value, key) {
              if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
              } else {
                baseAssignValue(result, key, [value]);
              }
            });

            module.exports = groupBy;

            /***/
          },

        /***/ '../node_modules/lodash/hasIn.js':
          /*!***************************************!*\
  !*** ../node_modules/lodash/hasIn.js ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseHasIn = __webpack_require__(
                /*! ./_baseHasIn */ '../node_modules/lodash/_baseHasIn.js'
              ),
              hasPath = __webpack_require__(
                /*! ./_hasPath */ '../node_modules/lodash/_hasPath.js'
              );

            /**
             * Checks if `path` is a direct or inherited property of `object`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Object
             * @param {Object} object The object to query.
             * @param {Array|string} path The path to check.
             * @returns {boolean} Returns `true` if `path` exists, else `false`.
             * @example
             *
             * var object = _.create({ 'a': _.create({ 'b': 2 }) });
             *
             * _.hasIn(object, 'a');
             * // => true
             *
             * _.hasIn(object, 'a.b');
             * // => true
             *
             * _.hasIn(object, ['a', 'b']);
             * // => true
             *
             * _.hasIn(object, 'b');
             * // => false
             */
            function hasIn(object, path) {
              return object != null && hasPath(object, path, baseHasIn);
            }

            module.exports = hasIn;

            /***/
          },

        /***/ '../node_modules/lodash/identity.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * This method returns the first argument it receives.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Util
             * @param {*} value Any value.
             * @returns {*} Returns `value`.
             * @example
             *
             * var object = { 'a': 1 };
             *
             * console.log(_.identity(object) === object);
             * // => true
             */
            function identity(value) {
              return value;
            }

            module.exports = identity;

            /***/
          },

        /***/ '../node_modules/lodash/isArguments.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsArguments = __webpack_require__(
                /*! ./_baseIsArguments */ '../node_modules/lodash/_baseIsArguments.js'
              ),
              isObjectLike = __webpack_require__(
                /*! ./isObjectLike */ '../node_modules/lodash/isObjectLike.js'
              );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /** Built-in value references. */
            var propertyIsEnumerable = objectProto.propertyIsEnumerable;

            /**
             * Checks if `value` is likely an `arguments` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             *  else `false`.
             * @example
             *
             * _.isArguments(function() { return arguments; }());
             * // => true
             *
             * _.isArguments([1, 2, 3]);
             * // => false
             */
            var isArguments = baseIsArguments(
              (function() {
                return arguments;
              })()
            )
              ? baseIsArguments
              : function(value) {
                  return (
                    isObjectLike(value) &&
                    hasOwnProperty.call(value, 'callee') &&
                    !propertyIsEnumerable.call(value, 'callee')
                  );
                };

            module.exports = isArguments;

            /***/
          },

        /***/ '../node_modules/lodash/isArray.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if `value` is classified as an `Array` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array, else `false`.
             * @example
             *
             * _.isArray([1, 2, 3]);
             * // => true
             *
             * _.isArray(document.body.children);
             * // => false
             *
             * _.isArray('abc');
             * // => false
             *
             * _.isArray(_.noop);
             * // => false
             */
            var isArray = Array.isArray;

            module.exports = isArray;

            /***/
          },

        /***/ '../node_modules/lodash/isArrayLike.js':
          /*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var isFunction = __webpack_require__(
                /*! ./isFunction */ '../node_modules/lodash/isFunction.js'
              ),
              isLength = __webpack_require__(
                /*! ./isLength */ '../node_modules/lodash/isLength.js'
              );

            /**
             * Checks if `value` is array-like. A value is considered array-like if it's
             * not a function and has a `value.length` that's an integer greater than or
             * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
             * @example
             *
             * _.isArrayLike([1, 2, 3]);
             * // => true
             *
             * _.isArrayLike(document.body.children);
             * // => true
             *
             * _.isArrayLike('abc');
             * // => true
             *
             * _.isArrayLike(_.noop);
             * // => false
             */
            function isArrayLike(value) {
              return value != null && isLength(value.length) && !isFunction(value);
            }

            module.exports = isArrayLike;

            /***/
          },

        /***/ '../node_modules/lodash/isBuffer.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(module) {
              var root = __webpack_require__(
                  /*! ./_root */ '../node_modules/lodash/_root.js'
                ),
                stubFalse = __webpack_require__(
                  /*! ./stubFalse */ '../node_modules/lodash/stubFalse.js'
                );

              /** Detect free variable `exports`. */
              var freeExports =
                typeof exports == 'object' && exports && !exports.nodeType && exports;

              /** Detect free variable `module`. */
              var freeModule =
                freeExports &&
                typeof module == 'object' &&
                module &&
                !module.nodeType &&
                module;

              /** Detect the popular CommonJS extension `module.exports`. */
              var moduleExports = freeModule && freeModule.exports === freeExports;

              /** Built-in value references. */
              var Buffer = moduleExports ? root.Buffer : undefined;

              /* Built-in method references for those with the same name as other `lodash` methods. */
              var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

              /**
               * Checks if `value` is a buffer.
               *
               * @static
               * @memberOf _
               * @since 4.3.0
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
               * @example
               *
               * _.isBuffer(new Buffer(2));
               * // => true
               *
               * _.isBuffer(new Uint8Array(2));
               * // => false
               */
              var isBuffer = nativeIsBuffer || stubFalse;

              module.exports = isBuffer;

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/module.js */ '../node_modules/webpack/buildin/module.js'
              )(module)
            ));

            /***/
          },

        /***/ '../node_modules/lodash/isFunction.js':
          /*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGetTag = __webpack_require__(
                /*! ./_baseGetTag */ '../node_modules/lodash/_baseGetTag.js'
              ),
              isObject = __webpack_require__(
                /*! ./isObject */ '../node_modules/lodash/isObject.js'
              );

            /** `Object#toString` result references. */
            var asyncTag = '[object AsyncFunction]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              proxyTag = '[object Proxy]';

            /**
             * Checks if `value` is classified as a `Function` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a function, else `false`.
             * @example
             *
             * _.isFunction(_);
             * // => true
             *
             * _.isFunction(/abc/);
             * // => false
             */
            function isFunction(value) {
              if (!isObject(value)) {
                return false;
              }
              // The use of `Object#toString` avoids issues with the `typeof` operator
              // in Safari 9 which returns 'object' for typed arrays and other constructors.
              var tag = baseGetTag(value);
              return (
                tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
              );
            }

            module.exports = isFunction;

            /***/
          },

        /***/ '../node_modules/lodash/isLength.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /** Used as references for various `Number` constants. */
            var MAX_SAFE_INTEGER = 9007199254740991;

            /**
             * Checks if `value` is a valid array-like length.
             *
             * **Note:** This method is loosely based on
             * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
             * @example
             *
             * _.isLength(3);
             * // => true
             *
             * _.isLength(Number.MIN_VALUE);
             * // => false
             *
             * _.isLength(Infinity);
             * // => false
             *
             * _.isLength('3');
             * // => false
             */
            function isLength(value) {
              return (
                typeof value == 'number' &&
                value > -1 &&
                value % 1 == 0 &&
                value <= MAX_SAFE_INTEGER
              );
            }

            module.exports = isLength;

            /***/
          },

        /***/ '../node_modules/lodash/isObject.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */
            function isObject(value) {
              var type = typeof value;
              return value != null && (type == 'object' || type == 'function');
            }

            module.exports = isObject;

            /***/
          },

        /***/ '../node_modules/lodash/isObjectLike.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */
            function isObjectLike(value) {
              return value != null && typeof value == 'object';
            }

            module.exports = isObjectLike;

            /***/
          },

        /***/ '../node_modules/lodash/isSymbol.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/isSymbol.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseGetTag = __webpack_require__(
                /*! ./_baseGetTag */ '../node_modules/lodash/_baseGetTag.js'
              ),
              isObjectLike = __webpack_require__(
                /*! ./isObjectLike */ '../node_modules/lodash/isObjectLike.js'
              );

            /** `Object#toString` result references. */
            var symbolTag = '[object Symbol]';

            /**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */
            function isSymbol(value) {
              return (
                typeof value == 'symbol' ||
                (isObjectLike(value) && baseGetTag(value) == symbolTag)
              );
            }

            module.exports = isSymbol;

            /***/
          },

        /***/ '../node_modules/lodash/isTypedArray.js':
          /*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseIsTypedArray = __webpack_require__(
                /*! ./_baseIsTypedArray */ '../node_modules/lodash/_baseIsTypedArray.js'
              ),
              baseUnary = __webpack_require__(
                /*! ./_baseUnary */ '../node_modules/lodash/_baseUnary.js'
              ),
              nodeUtil = __webpack_require__(
                /*! ./_nodeUtil */ '../node_modules/lodash/_nodeUtil.js'
              );

            /* Node.js helper references. */
            var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

            /**
             * Checks if `value` is classified as a typed array.
             *
             * @static
             * @memberOf _
             * @since 3.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
             * @example
             *
             * _.isTypedArray(new Uint8Array);
             * // => true
             *
             * _.isTypedArray([]);
             * // => false
             */
            var isTypedArray = nodeIsTypedArray
              ? baseUnary(nodeIsTypedArray)
              : baseIsTypedArray;

            module.exports = isTypedArray;

            /***/
          },

        /***/ '../node_modules/lodash/keys.js':
          /*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var arrayLikeKeys = __webpack_require__(
                /*! ./_arrayLikeKeys */ '../node_modules/lodash/_arrayLikeKeys.js'
              ),
              baseKeys = __webpack_require__(
                /*! ./_baseKeys */ '../node_modules/lodash/_baseKeys.js'
              ),
              isArrayLike = __webpack_require__(
                /*! ./isArrayLike */ '../node_modules/lodash/isArrayLike.js'
              );

            /**
             * Creates an array of the own enumerable property names of `object`.
             *
             * **Note:** Non-object values are coerced to objects. See the
             * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
             * for more details.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             * @example
             *
             * function Foo() {
             *   this.a = 1;
             *   this.b = 2;
             * }
             *
             * Foo.prototype.c = 3;
             *
             * _.keys(new Foo);
             * // => ['a', 'b'] (iteration order is not guaranteed)
             *
             * _.keys('hi');
             * // => ['0', '1']
             */
            function keys(object) {
              return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
            }

            module.exports = keys;

            /***/
          },

        /***/ '../node_modules/lodash/memoize.js':
          /*!*****************************************!*\
  !*** ../node_modules/lodash/memoize.js ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var MapCache = __webpack_require__(
              /*! ./_MapCache */ '../node_modules/lodash/_MapCache.js'
            );

            /** Error message constants. */
            var FUNC_ERROR_TEXT = 'Expected a function';

            /**
             * Creates a function that memoizes the result of `func`. If `resolver` is
             * provided, it determines the cache key for storing the result based on the
             * arguments provided to the memoized function. By default, the first argument
             * provided to the memoized function is used as the map cache key. The `func`
             * is invoked with the `this` binding of the memoized function.
             *
             * **Note:** The cache is exposed as the `cache` property on the memoized
             * function. Its creation may be customized by replacing the `_.memoize.Cache`
             * constructor with one whose instances implement the
             * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
             * method interface of `clear`, `delete`, `get`, `has`, and `set`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Function
             * @param {Function} func The function to have its output memoized.
             * @param {Function} [resolver] The function to resolve the cache key.
             * @returns {Function} Returns the new memoized function.
             * @example
             *
             * var object = { 'a': 1, 'b': 2 };
             * var other = { 'c': 3, 'd': 4 };
             *
             * var values = _.memoize(_.values);
             * values(object);
             * // => [1, 2]
             *
             * values(other);
             * // => [3, 4]
             *
             * object.a = 2;
             * values(object);
             * // => [1, 2]
             *
             * // Modify the result cache.
             * values.cache.set(object, ['a', 'b']);
             * values(object);
             * // => ['a', 'b']
             *
             * // Replace `_.memoize.Cache`.
             * _.memoize.Cache = WeakMap;
             */
            function memoize(func, resolver) {
              if (
                typeof func != 'function' ||
                (resolver != null && typeof resolver != 'function')
              ) {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              var memoized = function() {
                var args = arguments,
                  key = resolver ? resolver.apply(this, args) : args[0],
                  cache = memoized.cache;

                if (cache.has(key)) {
                  return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
              };
              memoized.cache = new (memoize.Cache || MapCache)();
              return memoized;
            }

            // Expose `MapCache`.
            memoize.Cache = MapCache;

            module.exports = memoize;

            /***/
          },

        /***/ '../node_modules/lodash/property.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/property.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseProperty = __webpack_require__(
                /*! ./_baseProperty */ '../node_modules/lodash/_baseProperty.js'
              ),
              basePropertyDeep = __webpack_require__(
                /*! ./_basePropertyDeep */ '../node_modules/lodash/_basePropertyDeep.js'
              ),
              isKey = __webpack_require__(
                /*! ./_isKey */ '../node_modules/lodash/_isKey.js'
              ),
              toKey = __webpack_require__(
                /*! ./_toKey */ '../node_modules/lodash/_toKey.js'
              );

            /**
             * Creates a function that returns the value at `path` of a given object.
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Util
             * @param {Array|string} path The path of the property to get.
             * @returns {Function} Returns the new accessor function.
             * @example
             *
             * var objects = [
             *   { 'a': { 'b': 2 } },
             *   { 'a': { 'b': 1 } }
             * ];
             *
             * _.map(objects, _.property('a.b'));
             * // => [2, 1]
             *
             * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
             * // => [1, 2]
             */
            function property(path) {
              return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
            }

            module.exports = property;

            /***/
          },

        /***/ '../node_modules/lodash/stubArray.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/stubArray.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * This method returns a new empty array.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {Array} Returns the new empty array.
             * @example
             *
             * var arrays = _.times(2, _.stubArray);
             *
             * console.log(arrays);
             * // => [[], []]
             *
             * console.log(arrays[0] === arrays[1]);
             * // => false
             */
            function stubArray() {
              return [];
            }

            module.exports = stubArray;

            /***/
          },

        /***/ '../node_modules/lodash/stubFalse.js':
          /*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * This method returns `false`.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {boolean} Returns `false`.
             * @example
             *
             * _.times(2, _.stubFalse);
             * // => [false, false]
             */
            function stubFalse() {
              return false;
            }

            module.exports = stubFalse;

            /***/
          },

        /***/ '../node_modules/lodash/toString.js':
          /*!******************************************!*\
  !*** ../node_modules/lodash/toString.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var baseToString = __webpack_require__(
              /*! ./_baseToString */ '../node_modules/lodash/_baseToString.js'
            );

            /**
             * Converts `value` to a string. An empty string is returned for `null`
             * and `undefined` values. The sign of `-0` is preserved.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             * @example
             *
             * _.toString(null);
             * // => ''
             *
             * _.toString(-0);
             * // => '-0'
             *
             * _.toString([1, 2, 3]);
             * // => '1,2,3'
             */
            function toString(value) {
              return value == null ? '' : baseToString(value);
            }

            module.exports = toString;

            /***/
          },

        /***/ '../node_modules/papaparse/papaparse.js':
          /*!**********************************************!*\
  !*** ../node_modules/papaparse/papaparse.js ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__,
              __WEBPACK_AMD_DEFINE_ARRAY__,
              __WEBPACK_AMD_DEFINE_RESULT__; /*@license
	Papa Parse
	v4.5.0
	https://github.com/mholt/PapaParse
	License: MIT
*/
            (function(root, factory) {
              /* globals define */
              if (true) {
                // AMD. Register as an anonymous module.
                !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
                (__WEBPACK_AMD_DEFINE_RESULT__ =
                  typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                    ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                        exports,
                        __WEBPACK_AMD_DEFINE_ARRAY__
                      )
                    : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
              } else {
              }
            })(this, function() {
              'use strict';

              var global = (function() {
                // alternative method, similar to `Function('return this')()`
                // but without using `eval` (which is disabled when
                // using Content Security Policy).

                if (typeof self !== 'undefined') {
                  return self;
                }
                if (typeof window !== 'undefined') {
                  return window;
                }
                if (typeof global !== 'undefined') {
                  return global;
                }

                // When running tests none of the above have been defined
                return {};
              })();

              var IS_WORKER = !global.document && !!global.postMessage,
                IS_PAPA_WORKER =
                  IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
                LOADED_SYNC = false,
                AUTO_SCRIPT_PATH;
              var workers = {},
                workerIdCounter = 0;

              var Papa = {};

              Papa.parse = CsvToJson;
              Papa.unparse = JsonToCsv;

              Papa.RECORD_SEP = String.fromCharCode(30);
              Papa.UNIT_SEP = String.fromCharCode(31);
              Papa.BYTE_ORDER_MARK = '\ufeff';
              Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
              Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
              Papa.SCRIPT_PATH = null; // Must be set by your code if you use workers and this lib is loaded asynchronously
              Papa.NODE_STREAM_INPUT = 1;

              // Configurable chunk sizes for local and remote files, respectively
              Papa.LocalChunkSize = 1024 * 1024 * 10; // 10 MB
              Papa.RemoteChunkSize = 1024 * 1024 * 5; // 5 MB
              Papa.DefaultDelimiter = ','; // Used if not specified and detection fails

              // Exposed for testing and development only
              Papa.Parser = Parser;
              Papa.ParserHandle = ParserHandle;
              Papa.NetworkStreamer = NetworkStreamer;
              Papa.FileStreamer = FileStreamer;
              Papa.StringStreamer = StringStreamer;
              Papa.ReadableStreamStreamer = ReadableStreamStreamer;
              Papa.DuplexStreamStreamer = DuplexStreamStreamer;

              if (global.jQuery) {
                var $ = global.jQuery;
                $.fn.parse = function(options) {
                  var config = options.config || {};
                  var queue = [];

                  this.each(function(idx) {
                    var supported =
                      $(this)
                        .prop('tagName')
                        .toUpperCase() === 'INPUT' &&
                      $(this)
                        .attr('type')
                        .toLowerCase() === 'file' &&
                      global.FileReader;

                    if (!supported || !this.files || this.files.length === 0) return true; // continue to next input element

                    for (var i = 0; i < this.files.length; i++) {
                      queue.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: $.extend({}, config),
                      });
                    }
                  });

                  parseNextFile(); // begin parsing
                  return this; // maintains chainability

                  function parseNextFile() {
                    if (queue.length === 0) {
                      if (isFunction(options.complete)) options.complete();
                      return;
                    }

                    var f = queue[0];

                    if (isFunction(options.before)) {
                      var returned = options.before(f.file, f.inputElem);

                      if (typeof returned === 'object') {
                        if (returned.action === 'abort') {
                          error('AbortError', f.file, f.inputElem, returned.reason);
                          return; // Aborts all queued files immediately
                        } else if (returned.action === 'skip') {
                          fileComplete(); // parse the next file in the queue, if any
                          return;
                        } else if (typeof returned.config === 'object')
                          f.instanceConfig = $.extend(f.instanceConfig, returned.config);
                      } else if (returned === 'skip') {
                        fileComplete(); // parse the next file in the queue, if any
                        return;
                      }
                    }

                    // Wrap up the user's complete callback, if any, so that ours also gets executed
                    var userCompleteFunc = f.instanceConfig.complete;
                    f.instanceConfig.complete = function(results) {
                      if (isFunction(userCompleteFunc))
                        userCompleteFunc(results, f.file, f.inputElem);
                      fileComplete();
                    };

                    Papa.parse(f.file, f.instanceConfig);
                  }

                  function error(name, file, elem, reason) {
                    if (isFunction(options.error))
                      options.error({name: name}, file, elem, reason);
                  }

                  function fileComplete() {
                    queue.splice(0, 1);
                    parseNextFile();
                  }
                };
              }

              if (IS_PAPA_WORKER) {
                global.onmessage = workerThreadReceivedMessage;
              } else if (Papa.WORKERS_SUPPORTED) {
                AUTO_SCRIPT_PATH = getScriptPath();

                // Check if the script was loaded synchronously
                if (!document.body) {
                  // Body doesn't exist yet, must be synchronous
                  LOADED_SYNC = true;
                } else {
                  document.addEventListener(
                    'DOMContentLoaded',
                    function() {
                      LOADED_SYNC = true;
                    },
                    true
                  );
                }
              }

              function CsvToJson(_input, _config) {
                _config = _config || {};
                var dynamicTyping = _config.dynamicTyping || false;
                if (isFunction(dynamicTyping)) {
                  _config.dynamicTypingFunction = dynamicTyping;
                  // Will be filled on first row call
                  dynamicTyping = {};
                }
                _config.dynamicTyping = dynamicTyping;

                _config.transform = isFunction(_config.transform)
                  ? _config.transform
                  : false;

                if (_config.worker && Papa.WORKERS_SUPPORTED) {
                  var w = newWorker();

                  w.userStep = _config.step;
                  w.userChunk = _config.chunk;
                  w.userComplete = _config.complete;
                  w.userError = _config.error;

                  _config.step = isFunction(_config.step);
                  _config.chunk = isFunction(_config.chunk);
                  _config.complete = isFunction(_config.complete);
                  _config.error = isFunction(_config.error);
                  delete _config.worker; // prevent infinite loop

                  w.postMessage({
                    input: _input,
                    config: _config,
                    workerId: w.id,
                  });

                  return;
                }

                var streamer = null;
                if (_input === Papa.NODE_STREAM_INPUT) {
                  // create a node Duplex stream for use
                  // with .pipe
                  streamer = new DuplexStreamStreamer(_config);
                  return streamer.getStream();
                } else if (typeof _input === 'string') {
                  if (_config.download) streamer = new NetworkStreamer(_config);
                  else streamer = new StringStreamer(_config);
                } else if (
                  _input.readable === true &&
                  isFunction(_input.read) &&
                  isFunction(_input.on)
                ) {
                  streamer = new ReadableStreamStreamer(_config);
                } else if (
                  (global.File && _input instanceof File) ||
                  _input instanceof Object
                )
                  // ...Safari. (see issue #106)
                  streamer = new FileStreamer(_config);

                return streamer.stream(_input);
              }

              function JsonToCsv(_input, _config) {
                // Default configuration

                /** whether to surround every datum with quotes */
                var _quotes = false;

                /** whether to write headers */
                var _writeHeader = true;

                /** delimiting character */
                var _delimiter = ',';

                /** newline character(s) */
                var _newline = '\r\n';

                /** quote character */
                var _quoteChar = '"';

                unpackConfig();

                var quoteCharRegex = new RegExp(_quoteChar, 'g');

                if (typeof _input === 'string') _input = JSON.parse(_input);

                if (_input instanceof Array) {
                  if (!_input.length || _input[0] instanceof Array)
                    return serialize(null, _input);
                  else if (typeof _input[0] === 'object')
                    return serialize(objectKeys(_input[0]), _input);
                } else if (typeof _input === 'object') {
                  if (typeof _input.data === 'string')
                    _input.data = JSON.parse(_input.data);

                  if (_input.data instanceof Array) {
                    if (!_input.fields) _input.fields = _input.meta && _input.meta.fields;

                    if (!_input.fields)
                      _input.fields =
                        _input.data[0] instanceof Array
                          ? _input.fields
                          : objectKeys(_input.data[0]);

                    if (
                      !(_input.data[0] instanceof Array) &&
                      typeof _input.data[0] !== 'object'
                    )
                      _input.data = [_input.data]; // handles input like [1,2,3] or ['asdf']
                  }

                  return serialize(_input.fields || [], _input.data || []);
                }

                // Default (any valid paths should return before this)
                throw 'exception: Unable to serialize unrecognized input';

                function unpackConfig() {
                  if (typeof _config !== 'object') return;

                  if (
                    typeof _config.delimiter === 'string' &&
                    _config.delimiter.length === 1 &&
                    Papa.BAD_DELIMITERS.indexOf(_config.delimiter) === -1
                  ) {
                    _delimiter = _config.delimiter;
                  }

                  if (
                    typeof _config.quotes === 'boolean' ||
                    _config.quotes instanceof Array
                  )
                    _quotes = _config.quotes;

                  if (typeof _config.newline === 'string') _newline = _config.newline;

                  if (typeof _config.quoteChar === 'string')
                    _quoteChar = _config.quoteChar;

                  if (typeof _config.header === 'boolean') _writeHeader = _config.header;
                }

                /** Turns an object's keys into an array */
                function objectKeys(obj) {
                  if (typeof obj !== 'object') return [];
                  var keys = [];
                  for (var key in obj) keys.push(key);
                  return keys;
                }

                /** The double for loop that iterates the data and writes out a CSV string including header row */
                function serialize(fields, data) {
                  var csv = '';

                  if (typeof fields === 'string') fields = JSON.parse(fields);
                  if (typeof data === 'string') data = JSON.parse(data);

                  var hasHeader = fields instanceof Array && fields.length > 0;
                  var dataKeyedByField = !(data[0] instanceof Array);

                  // If there a header row, write it first
                  if (hasHeader && _writeHeader) {
                    for (var i = 0; i < fields.length; i++) {
                      if (i > 0) csv += _delimiter;
                      csv += safe(fields[i], i);
                    }
                    if (data.length > 0) csv += _newline;
                  }

                  // Then write out the data
                  for (var row = 0; row < data.length; row++) {
                    var maxCol = hasHeader ? fields.length : data[row].length;

                    for (var col = 0; col < maxCol; col++) {
                      if (col > 0) csv += _delimiter;
                      var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
                      csv += safe(data[row][colIdx], col);
                    }

                    if (row < data.length - 1) csv += _newline;
                  }

                  return csv;
                }

                /** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
                function safe(str, col) {
                  if (typeof str === 'undefined' || str === null) return '';

                  if (str.constructor === Date) return JSON.stringify(str).slice(1, 25);

                  str = str.toString().replace(quoteCharRegex, _quoteChar + _quoteChar);

                  var needsQuotes =
                    (typeof _quotes === 'boolean' && _quotes) ||
                    (_quotes instanceof Array && _quotes[col]) ||
                    hasAny(str, Papa.BAD_DELIMITERS) ||
                    str.indexOf(_delimiter) > -1 ||
                    str.charAt(0) === ' ' ||
                    str.charAt(str.length - 1) === ' ';

                  return needsQuotes ? _quoteChar + str + _quoteChar : str;
                }

                function hasAny(str, substrings) {
                  for (var i = 0; i < substrings.length; i++)
                    if (str.indexOf(substrings[i]) > -1) return true;
                  return false;
                }
              }

              /** ChunkStreamer is the base prototype for various streamer implementations. */
              function ChunkStreamer(config) {
                this._handle = null;
                this._finished = false;
                this._completed = false;
                this._input = null;
                this._baseIndex = 0;
                this._partialLine = '';
                this._rowCount = 0;
                this._start = 0;
                this._nextChunk = null;
                this.isFirstChunk = true;
                this._completeResults = {
                  data: [],
                  errors: [],
                  meta: {},
                };
                replaceConfig.call(this, config);

                this.parseChunk = function(chunk, isFakeChunk) {
                  // First chunk pre-processing
                  if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
                    var modifiedChunk = this._config.beforeFirstChunk(chunk);
                    if (modifiedChunk !== undefined) chunk = modifiedChunk;
                  }
                  this.isFirstChunk = false;

                  // Rejoin the line we likely just split in two by chunking the file
                  var aggregate = this._partialLine + chunk;
                  this._partialLine = '';

                  var results = this._handle.parse(
                    aggregate,
                    this._baseIndex,
                    !this._finished
                  );

                  if (this._handle.paused() || this._handle.aborted()) return;

                  var lastIndex = results.meta.cursor;

                  if (!this._finished) {
                    this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
                    this._baseIndex = lastIndex;
                  }

                  if (results && results.data) this._rowCount += results.data.length;

                  var finishedIncludingPreview =
                    this._finished ||
                    (this._config.preview && this._rowCount >= this._config.preview);

                  if (IS_PAPA_WORKER) {
                    global.postMessage({
                      results: results,
                      workerId: Papa.WORKER_ID,
                      finished: finishedIncludingPreview,
                    });
                  } else if (isFunction(this._config.chunk) && !isFakeChunk) {
                    this._config.chunk(results, this._handle);
                    if (this._handle.paused() || this._handle.aborted()) return;
                    results = undefined;
                    this._completeResults = undefined;
                  }

                  if (!this._config.step && !this._config.chunk) {
                    this._completeResults.data = this._completeResults.data.concat(
                      results.data
                    );
                    this._completeResults.errors = this._completeResults.errors.concat(
                      results.errors
                    );
                    this._completeResults.meta = results.meta;
                  }

                  if (
                    !this._completed &&
                    finishedIncludingPreview &&
                    isFunction(this._config.complete) &&
                    (!results || !results.meta.aborted)
                  ) {
                    this._config.complete(this._completeResults, this._input);
                    this._completed = true;
                  }

                  if (!finishedIncludingPreview && (!results || !results.meta.paused))
                    this._nextChunk();

                  return results;
                };

                this._sendError = function(error) {
                  if (isFunction(this._config.error)) this._config.error(error);
                  else if (IS_PAPA_WORKER && this._config.error) {
                    global.postMessage({
                      workerId: Papa.WORKER_ID,
                      error: error,
                      finished: false,
                    });
                  }
                };

                function replaceConfig(config) {
                  // Deep-copy the config so we can edit it
                  var configCopy = copy(config);
                  configCopy.chunkSize = parseInt(configCopy.chunkSize); // parseInt VERY important so we don't concatenate strings!
                  if (!config.step && !config.chunk) configCopy.chunkSize = null; // disable Range header if not streaming; bad values break IIS - see issue #196
                  this._handle = new ParserHandle(configCopy);
                  this._handle.streamer = this;
                  this._config = configCopy; // persist the copy to the caller
                }
              }

              function NetworkStreamer(config) {
                config = config || {};
                if (!config.chunkSize) config.chunkSize = Papa.RemoteChunkSize;
                ChunkStreamer.call(this, config);

                var xhr;

                if (IS_WORKER) {
                  this._nextChunk = function() {
                    this._readChunk();
                    this._chunkLoaded();
                  };
                } else {
                  this._nextChunk = function() {
                    this._readChunk();
                  };
                }

                this.stream = function(url) {
                  this._input = url;
                  this._nextChunk(); // Starts streaming
                };

                this._readChunk = function() {
                  if (this._finished) {
                    this._chunkLoaded();
                    return;
                  }

                  xhr = new XMLHttpRequest();

                  if (this._config.withCredentials) {
                    xhr.withCredentials = this._config.withCredentials;
                  }

                  if (!IS_WORKER) {
                    xhr.onload = bindFunction(this._chunkLoaded, this);
                    xhr.onerror = bindFunction(this._chunkError, this);
                  }

                  xhr.open('GET', this._input, !IS_WORKER);
                  // Headers can only be set when once the request state is OPENED
                  if (this._config.downloadRequestHeaders) {
                    var headers = this._config.downloadRequestHeaders;

                    for (var headerName in headers) {
                      xhr.setRequestHeader(headerName, headers[headerName]);
                    }
                  }

                  if (this._config.chunkSize) {
                    var end = this._start + this._config.chunkSize - 1; // minus one because byte range is inclusive
                    xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
                    xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
                  }

                  try {
                    xhr.send();
                  } catch (err) {
                    this._chunkError(err.message);
                  }

                  if (IS_WORKER && xhr.status === 0) this._chunkError();
                  else this._start += this._config.chunkSize;
                };

                this._chunkLoaded = function() {
                  if (xhr.readyState !== 4) return;

                  if (xhr.status < 200 || xhr.status >= 400) {
                    this._chunkError();
                    return;
                  }

                  this._finished =
                    !this._config.chunkSize || this._start > getFileSize(xhr);
                  this.parseChunk(xhr.responseText);
                };

                this._chunkError = function(errorMessage) {
                  var errorText = xhr.statusText || errorMessage;
                  this._sendError(new Error(errorText));
                };

                function getFileSize(xhr) {
                  var contentRange = xhr.getResponseHeader('Content-Range');
                  if (contentRange === null) {
                    // no content range, then finish!
                    return -1;
                  }
                  return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
                }
              }
              NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
              NetworkStreamer.prototype.constructor = NetworkStreamer;

              function FileStreamer(config) {
                config = config || {};
                if (!config.chunkSize) config.chunkSize = Papa.LocalChunkSize;
                ChunkStreamer.call(this, config);

                var reader, slice;

                // FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
                // But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
                var usingAsyncReader = typeof FileReader !== 'undefined'; // Safari doesn't consider it a function - see issue #105

                this.stream = function(file) {
                  this._input = file;
                  slice = file.slice || file.webkitSlice || file.mozSlice;

                  if (usingAsyncReader) {
                    reader = new FileReader(); // Preferred method of reading files, even in workers
                    reader.onload = bindFunction(this._chunkLoaded, this);
                    reader.onerror = bindFunction(this._chunkError, this);
                  } else reader = new FileReaderSync(); // Hack for running in a web worker in Firefox

                  this._nextChunk(); // Starts streaming
                };

                this._nextChunk = function() {
                  if (
                    !this._finished &&
                    (!this._config.preview || this._rowCount < this._config.preview)
                  )
                    this._readChunk();
                };

                this._readChunk = function() {
                  var input = this._input;
                  if (this._config.chunkSize) {
                    var end = Math.min(
                      this._start + this._config.chunkSize,
                      this._input.size
                    );
                    input = slice.call(input, this._start, end);
                  }
                  var txt = reader.readAsText(input, this._config.encoding);
                  if (!usingAsyncReader) this._chunkLoaded({target: {result: txt}}); // mimic the async signature
                };

                this._chunkLoaded = function(event) {
                  // Very important to increment start each time before handling results
                  this._start += this._config.chunkSize;
                  this._finished =
                    !this._config.chunkSize || this._start >= this._input.size;
                  this.parseChunk(event.target.result);
                };

                this._chunkError = function() {
                  this._sendError(reader.error);
                };
              }
              FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
              FileStreamer.prototype.constructor = FileStreamer;

              function StringStreamer(config) {
                config = config || {};
                ChunkStreamer.call(this, config);

                var remaining;
                this.stream = function(s) {
                  remaining = s;
                  return this._nextChunk();
                };
                this._nextChunk = function() {
                  if (this._finished) return;
                  var size = this._config.chunkSize;
                  var chunk = size ? remaining.substr(0, size) : remaining;
                  remaining = size ? remaining.substr(size) : '';
                  this._finished = !remaining;
                  return this.parseChunk(chunk);
                };
              }
              StringStreamer.prototype = Object.create(StringStreamer.prototype);
              StringStreamer.prototype.constructor = StringStreamer;

              function ReadableStreamStreamer(config) {
                config = config || {};

                ChunkStreamer.call(this, config);

                var queue = [];
                var parseOnData = true;
                var streamHasEnded = false;

                this.pause = function() {
                  ChunkStreamer.prototype.pause.apply(this, arguments);
                  this._input.pause();
                };

                this.resume = function() {
                  ChunkStreamer.prototype.resume.apply(this, arguments);
                  this._input.resume();
                };

                this.stream = function(stream) {
                  this._input = stream;

                  this._input.on('data', this._streamData);
                  this._input.on('end', this._streamEnd);
                  this._input.on('error', this._streamError);
                };

                this._checkIsFinished = function() {
                  if (streamHasEnded && queue.length === 1) {
                    this._finished = true;
                  }
                };

                this._nextChunk = function() {
                  this._checkIsFinished();
                  if (queue.length) {
                    this.parseChunk(queue.shift());
                  } else {
                    parseOnData = true;
                  }
                };

                this._streamData = bindFunction(function(chunk) {
                  try {
                    queue.push(
                      typeof chunk === 'string'
                        ? chunk
                        : chunk.toString(this._config.encoding)
                    );

                    if (parseOnData) {
                      parseOnData = false;
                      this._checkIsFinished();
                      this.parseChunk(queue.shift());
                    }
                  } catch (error) {
                    this._streamError(error);
                  }
                }, this);

                this._streamError = bindFunction(function(error) {
                  this._streamCleanUp();
                  this._sendError(error);
                }, this);

                this._streamEnd = bindFunction(function() {
                  this._streamCleanUp();
                  streamHasEnded = true;
                  this._streamData('');
                }, this);

                this._streamCleanUp = bindFunction(function() {
                  this._input.removeListener('data', this._streamData);
                  this._input.removeListener('end', this._streamEnd);
                  this._input.removeListener('error', this._streamError);
                }, this);
              }
              ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
              ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;

              function DuplexStreamStreamer(_config) {
                var Duplex = __webpack_require__(
                  /*! stream */ '../node_modules/stream-browserify/index.js'
                ).Duplex;
                var config = copy(_config);
                var parseOnWrite = true;
                var writeStreamHasFinished = false;
                var parseCallbackQueue = [];
                var stream = null;

                this._onCsvData = function(results) {
                  var data = results.data;
                  for (var i = 0; i < data.length; i++) {
                    if (!stream.push(data[i]) && !this._handle.paused()) {
                      // the writeable consumer buffer has filled up
                      // so we need to pause until more items
                      // can be processed
                      this._handle.pause();
                    }
                  }
                };

                this._onCsvComplete = function() {
                  // node will finish the read stream when
                  // null is pushed
                  stream.push(null);
                };

                config.step = bindFunction(this._onCsvData, this);
                config.complete = bindFunction(this._onCsvComplete, this);
                ChunkStreamer.call(this, config);

                this._nextChunk = function() {
                  if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
                    this._finished = true;
                  }
                  if (parseCallbackQueue.length) {
                    parseCallbackQueue.shift()();
                  } else {
                    parseOnWrite = true;
                  }
                };

                this._addToParseQueue = function(chunk, callback) {
                  // add to queue so that we can indicate
                  // completion via callback
                  // node will automatically pause the incoming stream
                  // when too many items have been added without their
                  // callback being invoked
                  parseCallbackQueue.push(
                    bindFunction(function() {
                      this.parseChunk(
                        typeof chunk === 'string'
                          ? chunk
                          : chunk.toString(config.encoding)
                      );
                      if (isFunction(callback)) {
                        return callback();
                      }
                    }, this)
                  );
                  if (parseOnWrite) {
                    parseOnWrite = false;
                    this._nextChunk();
                  }
                };

                this._onRead = function() {
                  if (this._handle.paused()) {
                    // the writeable consumer can handle more data
                    // so resume the chunk parsing
                    this._handle.resume();
                  }
                };

                this._onWrite = function(chunk, encoding, callback) {
                  this._addToParseQueue(chunk, callback);
                };

                this._onWriteComplete = function() {
                  writeStreamHasFinished = true;
                  // have to write empty string
                  // so parser knows its done
                  this._addToParseQueue('');
                };

                this.getStream = function() {
                  return stream;
                };
                stream = new Duplex({
                  readableObjectMode: true,
                  decodeStrings: false,
                  read: bindFunction(this._onRead, this),
                  write: bindFunction(this._onWrite, this),
                });
                stream.once('finish', bindFunction(this._onWriteComplete, this));
              }
              DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
              DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;

              // Use one ParserHandle per entire CSV file or string
              function ParserHandle(_config) {
                // One goal is to minimize the use of regular expressions...
                var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
                var ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

                var self = this;
                var _stepCounter = 0; // Number of times step was called (number of rows parsed)
                var _rowCounter = 0; // Number of rows that have been parsed so far
                var _input; // The input being parsed
                var _parser; // The core parser being used
                var _paused = false; // Whether we are paused or not
                var _aborted = false; // Whether the parser has aborted or not
                var _delimiterError; // Temporary state between delimiter detection and processing results
                var _fields = []; // Fields are from the header row of the input, if there is one
                var _results = {
                  // The last results returned from the parser
                  data: [],
                  errors: [],
                  meta: {},
                };

                if (isFunction(_config.step)) {
                  var userStep = _config.step;
                  _config.step = function(results) {
                    _results = results;

                    if (needsHeaderRow()) processResults();
                    else {
                      // only call user's step function after header row
                      processResults();

                      // It's possbile that this line was empty and there's no row here after all
                      if (_results.data.length === 0) return;

                      _stepCounter += results.data.length;
                      if (_config.preview && _stepCounter > _config.preview)
                        _parser.abort();
                      else userStep(_results, self);
                    }
                  };
                }

                /**
                 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
                 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
                 * when an input comes in multiple chunks, like from a file.
                 */
                this.parse = function(input, baseIndex, ignoreLastRow) {
                  if (!_config.newline) _config.newline = guessLineEndings(input);

                  _delimiterError = false;
                  if (!_config.delimiter) {
                    var delimGuess = guessDelimiter(
                      input,
                      _config.newline,
                      _config.skipEmptyLines,
                      _config.comments
                    );
                    if (delimGuess.successful)
                      _config.delimiter = delimGuess.bestDelimiter;
                    else {
                      _delimiterError = true; // add error after parsing (otherwise it would be overwritten)
                      _config.delimiter = Papa.DefaultDelimiter;
                    }
                    _results.meta.delimiter = _config.delimiter;
                  } else if (isFunction(_config.delimiter)) {
                    _config.delimiter = _config.delimiter(input);
                    _results.meta.delimiter = _config.delimiter;
                  }

                  var parserConfig = copy(_config);
                  if (_config.preview && _config.header) parserConfig.preview++; // to compensate for header row

                  _input = input;
                  _parser = new Parser(parserConfig);
                  _results = _parser.parse(_input, baseIndex, ignoreLastRow);
                  processResults();
                  return _paused
                    ? {meta: {paused: true}}
                    : _results || {meta: {paused: false}};
                };

                this.paused = function() {
                  return _paused;
                };

                this.pause = function() {
                  _paused = true;
                  _parser.abort();
                  _input = _input.substr(_parser.getCharIndex());
                };

                this.resume = function() {
                  _paused = false;
                  self.streamer.parseChunk(_input, true);
                };

                this.aborted = function() {
                  return _aborted;
                };

                this.abort = function() {
                  _aborted = true;
                  _parser.abort();
                  _results.meta.aborted = true;
                  if (isFunction(_config.complete)) _config.complete(_results);
                  _input = '';
                };

                function processResults() {
                  if (_results && _delimiterError) {
                    addError(
                      'Delimiter',
                      'UndetectableDelimiter',
                      "Unable to auto-detect delimiting character; defaulted to '" +
                        Papa.DefaultDelimiter +
                        "'"
                    );
                    _delimiterError = false;
                  }

                  if (_config.skipEmptyLines) {
                    for (var i = 0; i < _results.data.length; i++)
                      if (_results.data[i].length === 1 && _results.data[i][0] === '')
                        _results.data.splice(i--, 1);
                  }

                  if (needsHeaderRow()) fillHeaderFields();

                  return applyHeaderAndDynamicTypingAndTransformation();
                }

                function needsHeaderRow() {
                  return _config.header && _fields.length === 0;
                }

                function fillHeaderFields() {
                  if (!_results) return;
                  for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
                    for (var j = 0; j < _results.data[i].length; j++) {
                      var header = _results.data[i][j];

                      if (_config.trimHeaders) {
                        header = header.trim();
                      }

                      _fields.push(header);
                    }
                  _results.data.splice(0, 1);
                }

                function shouldApplyDynamicTyping(field) {
                  // Cache function values to avoid calling it for each row
                  if (
                    _config.dynamicTypingFunction &&
                    _config.dynamicTyping[field] === undefined
                  ) {
                    _config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
                  }
                  return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
                }

                function parseDynamic(field, value) {
                  if (shouldApplyDynamicTyping(field)) {
                    if (value === 'true' || value === 'TRUE') return true;
                    else if (value === 'false' || value === 'FALSE') return false;
                    else if (FLOAT.test(value)) return parseFloat(value);
                    else if (ISO_DATE.test(value)) return new Date(value);
                    else return value === '' ? null : value;
                  }
                  return value;
                }

                function applyHeaderAndDynamicTypingAndTransformation() {
                  if (
                    !_results ||
                    (!_config.header && !_config.dynamicTyping && !_config.transform)
                  )
                    return _results;

                  for (var i = 0; i < _results.data.length; i++) {
                    var row = _config.header ? {} : [];

                    var j;
                    for (j = 0; j < _results.data[i].length; j++) {
                      var field = j;
                      var value = _results.data[i][j];

                      if (_config.header)
                        field = j >= _fields.length ? '__parsed_extra' : _fields[j];

                      if (_config.transform) value = _config.transform(value, field);

                      value = parseDynamic(field, value);

                      if (field === '__parsed_extra') {
                        row[field] = row[field] || [];
                        row[field].push(value);
                      } else row[field] = value;
                    }

                    _results.data[i] = row;

                    if (_config.header) {
                      if (j > _fields.length)
                        addError(
                          'FieldMismatch',
                          'TooManyFields',
                          'Too many fields: expected ' +
                            _fields.length +
                            ' fields but parsed ' +
                            j,
                          _rowCounter + i
                        );
                      else if (j < _fields.length)
                        addError(
                          'FieldMismatch',
                          'TooFewFields',
                          'Too few fields: expected ' +
                            _fields.length +
                            ' fields but parsed ' +
                            j,
                          _rowCounter + i
                        );
                    }
                  }

                  if (_config.header && _results.meta) _results.meta.fields = _fields;

                  _rowCounter += _results.data.length;
                  return _results;
                }

                function guessDelimiter(input, newline, skipEmptyLines, comments) {
                  var delimChoices = [
                    ',',
                    '\t',
                    '|',
                    ';',
                    Papa.RECORD_SEP,
                    Papa.UNIT_SEP,
                  ];
                  var bestDelim, bestDelta, fieldCountPrevRow;

                  for (var i = 0; i < delimChoices.length; i++) {
                    var delim = delimChoices[i];
                    var delta = 0,
                      avgFieldCount = 0,
                      emptyLinesCount = 0;
                    fieldCountPrevRow = undefined;

                    var preview = new Parser({
                      comments: comments,
                      delimiter: delim,
                      newline: newline,
                      preview: 10,
                    }).parse(input);

                    for (var j = 0; j < preview.data.length; j++) {
                      if (
                        skipEmptyLines &&
                        preview.data[j].length === 1 &&
                        preview.data[j][0].length === 0
                      ) {
                        emptyLinesCount++;
                        continue;
                      }
                      var fieldCount = preview.data[j].length;
                      avgFieldCount += fieldCount;

                      if (typeof fieldCountPrevRow === 'undefined') {
                        fieldCountPrevRow = fieldCount;
                        continue;
                      } else if (fieldCount > 1) {
                        delta += Math.abs(fieldCount - fieldCountPrevRow);
                        fieldCountPrevRow = fieldCount;
                      }
                    }

                    if (preview.data.length > 0)
                      avgFieldCount /= preview.data.length - emptyLinesCount;

                    if (
                      (typeof bestDelta === 'undefined' || delta < bestDelta) &&
                      avgFieldCount > 1.99
                    ) {
                      bestDelta = delta;
                      bestDelim = delim;
                    }
                  }

                  _config.delimiter = bestDelim;

                  return {
                    successful: !!bestDelim,
                    bestDelimiter: bestDelim,
                  };
                }

                function guessLineEndings(input) {
                  input = input.substr(0, 1024 * 1024); // max length 1 MB

                  var r = input.split('\r');

                  var n = input.split('\n');

                  var nAppearsFirst = n.length > 1 && n[0].length < r[0].length;

                  if (r.length === 1 || nAppearsFirst) return '\n';

                  var numWithN = 0;
                  for (var i = 0; i < r.length; i++) {
                    if (r[i][0] === '\n') numWithN++;
                  }

                  return numWithN >= r.length / 2 ? '\r\n' : '\r';
                }

                function addError(type, code, msg, row) {
                  _results.errors.push({
                    type: type,
                    code: code,
                    message: msg,
                    row: row,
                  });
                }
              }

              /** The core parser implements speedy and correct CSV parsing */
              function Parser(config) {
                // Unpack the config object
                config = config || {};
                var delim = config.delimiter;
                var newline = config.newline;
                var comments = config.comments;
                var step = config.step;
                var preview = config.preview;
                var fastMode = config.fastMode;
                var quoteChar;
                /** Allows for no quoteChar by setting quoteChar to undefined in config */
                if (config.quoteChar === undefined) {
                  quoteChar = '"';
                } else {
                  quoteChar = config.quoteChar;
                }
                var escapeChar = quoteChar;
                if (config.escapeChar !== undefined) {
                  escapeChar = config.escapeChar;
                }

                // Delimiter must be valid
                if (typeof delim !== 'string' || Papa.BAD_DELIMITERS.indexOf(delim) > -1)
                  delim = ',';

                // Comment character must be valid
                if (comments === delim) throw 'Comment character same as delimiter';
                else if (comments === true) comments = '#';
                else if (
                  typeof comments !== 'string' ||
                  Papa.BAD_DELIMITERS.indexOf(comments) > -1
                )
                  comments = false;

                // Newline must be valid: \r, \n, or \r\n
                if (newline !== '\n' && newline !== '\r' && newline !== '\r\n')
                  newline = '\n';

                // We're gonna need these at the Parser scope
                var cursor = 0;
                var aborted = false;

                this.parse = function(input, baseIndex, ignoreLastRow) {
                  // For some reason, in Chrome, this speeds things up (!?)
                  if (typeof input !== 'string') throw 'Input must be a string';

                  // We don't need to compute some of these every time parse() is called,
                  // but having them in a more local scope seems to perform better
                  var inputLen = input.length,
                    delimLen = delim.length,
                    newlineLen = newline.length,
                    commentsLen = comments.length;
                  var stepIsFunction = isFunction(step);

                  // Establish starting state
                  cursor = 0;
                  var data = [],
                    errors = [],
                    row = [],
                    lastCursor = 0;

                  if (!input) return returnable();

                  if (
                    fastMode ||
                    (fastMode !== false && input.indexOf(quoteChar) === -1)
                  ) {
                    var rows = input.split(newline);
                    for (var i = 0; i < rows.length; i++) {
                      row = rows[i];
                      cursor += row.length;
                      if (i !== rows.length - 1) cursor += newline.length;
                      else if (ignoreLastRow) return returnable();
                      if (comments && row.substr(0, commentsLen) === comments) continue;
                      if (stepIsFunction) {
                        data = [];
                        pushRow(row.split(delim));
                        doStep();
                        if (aborted) return returnable();
                      } else pushRow(row.split(delim));
                      if (preview && i >= preview) {
                        data = data.slice(0, preview);
                        return returnable(true);
                      }
                    }
                    return returnable();
                  }

                  var nextDelim = input.indexOf(delim, cursor);
                  var nextNewline = input.indexOf(newline, cursor);
                  var quoteCharRegex = new RegExp(
                    escapeChar.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') + quoteChar,
                    'g'
                  );
                  var quoteSearch;

                  // Parser loop
                  for (;;) {
                    // Field has opening quote
                    if (input[cursor] === quoteChar) {
                      // Start our search for the closing quote where the cursor is
                      quoteSearch = cursor;

                      // Skip the opening quote
                      cursor++;

                      for (;;) {
                        // Find closing quote
                        quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

                        //No other quotes are found - no other delimiters
                        if (quoteSearch === -1) {
                          if (!ignoreLastRow) {
                            // No closing quote... what a pity
                            errors.push({
                              type: 'Quotes',
                              code: 'MissingQuotes',
                              message: 'Quoted field unterminated',
                              row: data.length, // row has yet to be inserted
                              index: cursor,
                            });
                          }
                          return finish();
                        }

                        // Closing quote at EOF
                        if (quoteSearch === inputLen - 1) {
                          var value = input
                            .substring(cursor, quoteSearch)
                            .replace(quoteCharRegex, quoteChar);
                          return finish(value);
                        }

                        // If this quote is escaped, it's part of the data; skip it
                        // If the quote character is the escape character, then check if the next character is the escape character
                        if (
                          quoteChar === escapeChar &&
                          input[quoteSearch + 1] === escapeChar
                        ) {
                          quoteSearch++;
                          continue;
                        }

                        // If the quote character is not the escape character, then check if the previous character was the escape character
                        if (
                          quoteChar !== escapeChar &&
                          quoteSearch !== 0 &&
                          input[quoteSearch - 1] === escapeChar
                        ) {
                          continue;
                        }

                        var spacesBetweenQuoteAndDelimiter = extraSpaces(nextDelim);

                        // Closing quote followed by delimiter or 'unnecessary steps + delimiter'
                        if (
                          input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] ===
                          delim
                        ) {
                          row.push(
                            input
                              .substring(cursor, quoteSearch)
                              .replace(quoteCharRegex, quoteChar)
                          );
                          cursor =
                            quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
                          nextDelim = input.indexOf(delim, cursor);
                          nextNewline = input.indexOf(newline, cursor);
                          break;
                        }

                        var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

                        // Closing quote followed by newline or 'unnecessary spaces + newLine'
                        if (
                          input.substr(
                            quoteSearch + 1 + spacesBetweenQuoteAndNewLine,
                            newlineLen
                          ) === newline
                        ) {
                          row.push(
                            input
                              .substring(cursor, quoteSearch)
                              .replace(quoteCharRegex, quoteChar)
                          );
                          saveRow(
                            quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen
                          );
                          nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field

                          if (stepIsFunction) {
                            doStep();
                            if (aborted) return returnable();
                          }

                          if (preview && data.length >= preview) return returnable(true);

                          break;
                        }

                        // Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
                        errors.push({
                          type: 'Quotes',
                          code: 'InvalidQuotes',
                          message: 'Trailing quote on quoted field is malformed',
                          row: data.length, // row has yet to be inserted
                          index: cursor,
                        });

                        quoteSearch++;
                        continue;
                      }

                      continue;
                    }

                    // Comment found at start of new line
                    if (
                      comments &&
                      row.length === 0 &&
                      input.substr(cursor, commentsLen) === comments
                    ) {
                      if (nextNewline === -1)
                        // Comment ends at EOF
                        return returnable();
                      cursor = nextNewline + newlineLen;
                      nextNewline = input.indexOf(newline, cursor);
                      nextDelim = input.indexOf(delim, cursor);
                      continue;
                    }

                    // Next delimiter comes before next newline, so we've reached end of field
                    if (
                      nextDelim !== -1 &&
                      (nextDelim < nextNewline || nextNewline === -1)
                    ) {
                      row.push(input.substring(cursor, nextDelim));
                      cursor = nextDelim + delimLen;
                      nextDelim = input.indexOf(delim, cursor);
                      continue;
                    }

                    // End of row
                    if (nextNewline !== -1) {
                      row.push(input.substring(cursor, nextNewline));
                      saveRow(nextNewline + newlineLen);

                      if (stepIsFunction) {
                        doStep();
                        if (aborted) return returnable();
                      }

                      if (preview && data.length >= preview) return returnable(true);

                      continue;
                    }

                    break;
                  }

                  return finish();

                  function pushRow(row) {
                    data.push(row);
                    lastCursor = cursor;
                  }

                  /**
                   * checks if there are extra spaces after closing quote and given index without any text
                   * if Yes, returns the number of spaces
                   */
                  function extraSpaces(index) {
                    var spaceLength = 0;
                    if (index !== -1) {
                      var textBetweenClosingQuoteAndIndex = input.substring(
                        quoteSearch + 1,
                        index
                      );
                      if (
                        textBetweenClosingQuoteAndIndex &&
                        textBetweenClosingQuoteAndIndex.trim() === ''
                      ) {
                        spaceLength = textBetweenClosingQuoteAndIndex.length;
                      }
                    }
                    return spaceLength;
                  }

                  /**
                   * Appends the remaining input from cursor to the end into
                   * row, saves the row, calls step, and returns the results.
                   */
                  function finish(value) {
                    if (ignoreLastRow) return returnable();
                    if (typeof value === 'undefined') value = input.substr(cursor);
                    row.push(value);
                    cursor = inputLen; // important in case parsing is paused
                    pushRow(row);
                    if (stepIsFunction) doStep();
                    return returnable();
                  }

                  /**
                   * Appends the current row to the results. It sets the cursor
                   * to newCursor and finds the nextNewline. The caller should
                   * take care to execute user's step function and check for
                   * preview and end parsing if necessary.
                   */
                  function saveRow(newCursor) {
                    cursor = newCursor;
                    pushRow(row);
                    row = [];
                    nextNewline = input.indexOf(newline, cursor);
                  }

                  /** Returns an object with the results, errors, and meta. */
                  function returnable(stopped) {
                    return {
                      data: data,
                      errors: errors,
                      meta: {
                        delimiter: delim,
                        linebreak: newline,
                        aborted: aborted,
                        truncated: !!stopped,
                        cursor: lastCursor + (baseIndex || 0),
                      },
                    };
                  }

                  /** Executes the user's step function and resets data & errors. */
                  function doStep() {
                    step(returnable());
                    data = [];
                    errors = [];
                  }
                };

                /** Sets the abort flag */
                this.abort = function() {
                  aborted = true;
                };

                /** Gets the cursor position */
                this.getCharIndex = function() {
                  return cursor;
                };
              }

              // If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
              // the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
              function getScriptPath() {
                var scripts = document.getElementsByTagName('script');
                return scripts.length ? scripts[scripts.length - 1].src : '';
              }

              function newWorker() {
                if (!Papa.WORKERS_SUPPORTED) return false;
                if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
                  throw new Error(
                    'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
                      'You need to set Papa.SCRIPT_PATH manually.'
                  );
                var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
                // Append 'papaworker' to the search string to tell papaparse that this is our worker.
                workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
                var w = new global.Worker(workerUrl);
                w.onmessage = mainThreadReceivedMessage;
                w.id = workerIdCounter++;
                workers[w.id] = w;
                return w;
              }

              /** Callback when main thread receives a message */
              function mainThreadReceivedMessage(e) {
                var msg = e.data;
                var worker = workers[msg.workerId];
                var aborted = false;

                if (msg.error) worker.userError(msg.error, msg.file);
                else if (msg.results && msg.results.data) {
                  var abort = function() {
                    aborted = true;
                    completeWorker(msg.workerId, {
                      data: [],
                      errors: [],
                      meta: {aborted: true},
                    });
                  };

                  var handle = {
                    abort: abort,
                    pause: notImplemented,
                    resume: notImplemented,
                  };

                  if (isFunction(worker.userStep)) {
                    for (var i = 0; i < msg.results.data.length; i++) {
                      worker.userStep(
                        {
                          data: [msg.results.data[i]],
                          errors: msg.results.errors,
                          meta: msg.results.meta,
                        },
                        handle
                      );
                      if (aborted) break;
                    }
                    delete msg.results; // free memory ASAP
                  } else if (isFunction(worker.userChunk)) {
                    worker.userChunk(msg.results, handle, msg.file);
                    delete msg.results;
                  }
                }

                if (msg.finished && !aborted) completeWorker(msg.workerId, msg.results);
              }

              function completeWorker(workerId, results) {
                var worker = workers[workerId];
                if (isFunction(worker.userComplete)) worker.userComplete(results);
                worker.terminate();
                delete workers[workerId];
              }

              function notImplemented() {
                throw 'Not implemented.';
              }

              /** Callback when worker thread receives a message */
              function workerThreadReceivedMessage(e) {
                var msg = e.data;

                if (typeof Papa.WORKER_ID === 'undefined' && msg)
                  Papa.WORKER_ID = msg.workerId;

                if (typeof msg.input === 'string') {
                  global.postMessage({
                    workerId: Papa.WORKER_ID,
                    results: Papa.parse(msg.input, msg.config),
                    finished: true,
                  });
                } else if (
                  (global.File && msg.input instanceof File) ||
                  msg.input instanceof Object
                ) {
                  // thank you, Safari (see issue #106)
                  var results = Papa.parse(msg.input, msg.config);
                  if (results)
                    global.postMessage({
                      workerId: Papa.WORKER_ID,
                      results: results,
                      finished: true,
                    });
                }
              }

              /** Makes a deep copy of an array or object (mostly) */
              function copy(obj) {
                if (typeof obj !== 'object' || obj === null) return obj;
                var cpy = obj instanceof Array ? [] : {};
                for (var key in obj) cpy[key] = copy(obj[key]);
                return cpy;
              }

              function bindFunction(f, self) {
                return function() {
                  f.apply(self, arguments);
                };
              }

              function isFunction(func) {
                return typeof func === 'function';
              }

              return Papa;
            });

            /***/
          },

        /***/ '../node_modules/process/browser.js':
          /*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            // shim for using process in browser
            var process = (module.exports = {});

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
              throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
              throw new Error('clearTimeout has not been defined');
            }
            (function() {
              try {
                if (typeof setTimeout === 'function') {
                  cachedSetTimeout = setTimeout;
                } else {
                  cachedSetTimeout = defaultSetTimout;
                }
              } catch (e) {
                cachedSetTimeout = defaultSetTimout;
              }
              try {
                if (typeof clearTimeout === 'function') {
                  cachedClearTimeout = clearTimeout;
                } else {
                  cachedClearTimeout = defaultClearTimeout;
                }
              } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
              }
            })();
            function runTimeout(fun) {
              if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
              }
              // if setTimeout wasn't available but was latter defined
              if (
                (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
                setTimeout
              ) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
              }
              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                  return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                  return cachedSetTimeout.call(this, fun, 0);
                }
              }
            }
            function runClearTimeout(marker) {
              if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
              }
              // if clearTimeout wasn't available but was latter defined
              if (
                (cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
                clearTimeout
              ) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
              }
              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                  return cachedClearTimeout.call(null, marker);
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                  // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                  return cachedClearTimeout.call(this, marker);
                }
              }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
              if (!draining || !currentQueue) {
                return;
              }
              draining = false;
              if (currentQueue.length) {
                queue = currentQueue.concat(queue);
              } else {
                queueIndex = -1;
              }
              if (queue.length) {
                drainQueue();
              }
            }

            function drainQueue() {
              if (draining) {
                return;
              }
              var timeout = runTimeout(cleanUpNextTick);
              draining = true;

              var len = queue.length;
              while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                  if (currentQueue) {
                    currentQueue[queueIndex].run();
                  }
                }
                queueIndex = -1;
                len = queue.length;
              }
              currentQueue = null;
              draining = false;
              runClearTimeout(timeout);
            }

            process.nextTick = function(fun) {
              var args = new Array(arguments.length - 1);
              if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                  args[i - 1] = arguments[i];
                }
              }
              queue.push(new Item(fun, args));
              if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
              }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
              this.fun = fun;
              this.array = array;
            }
            Item.prototype.run = function() {
              this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function(name) {
              return [];
            };

            process.binding = function(name) {
              throw new Error('process.binding is not supported');
            };

            process.cwd = function() {
              return '/';
            };
            process.chdir = function(dir) {
              throw new Error('process.chdir is not supported');
            };
            process.umask = function() {
              return 0;
            };

            /***/
          },

        /***/ '../node_modules/safe-buffer/index.js':
          /*!********************************************!*\
  !*** ../node_modules/safe-buffer/index.js ***!
  \********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* eslint-disable node/no-deprecated-api */
            var buffer = __webpack_require__(
              /*! buffer */ '../node_modules/buffer/index.js'
            );
            var Buffer = buffer.Buffer;

            // alternative to using Object.keys for old browsers
            function copyProps(src, dst) {
              for (var key in src) {
                dst[key] = src[key];
              }
            }
            if (
              Buffer.from &&
              Buffer.alloc &&
              Buffer.allocUnsafe &&
              Buffer.allocUnsafeSlow
            ) {
              module.exports = buffer;
            } else {
              // Copy properties from require('buffer')
              copyProps(buffer, exports);
              exports.Buffer = SafeBuffer;
            }

            function SafeBuffer(arg, encodingOrOffset, length) {
              return Buffer(arg, encodingOrOffset, length);
            }

            // Copy static methods from Buffer
            copyProps(Buffer, SafeBuffer);

            SafeBuffer.from = function(arg, encodingOrOffset, length) {
              if (typeof arg === 'number') {
                throw new TypeError('Argument must not be a number');
              }
              return Buffer(arg, encodingOrOffset, length);
            };

            SafeBuffer.alloc = function(size, fill, encoding) {
              if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
              }
              var buf = Buffer(size);
              if (fill !== undefined) {
                if (typeof encoding === 'string') {
                  buf.fill(fill, encoding);
                } else {
                  buf.fill(fill);
                }
              } else {
                buf.fill(0);
              }
              return buf;
            };

            SafeBuffer.allocUnsafe = function(size) {
              if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
              }
              return Buffer(size);
            };

            SafeBuffer.allocUnsafeSlow = function(size) {
              if (typeof size !== 'number') {
                throw new TypeError('Argument must be a number');
              }
              return buffer.SlowBuffer(size);
            };

            /***/
          },

        /***/ '../node_modules/setimmediate/setImmediate.js':
          /*!****************************************************!*\
  !*** ../node_modules/setimmediate/setImmediate.js ***!
  \****************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global, process) {
              (function(global, undefined) {
                'use strict';

                if (global.setImmediate) {
                  return;
                }

                var nextHandle = 1; // Spec says greater than zero
                var tasksByHandle = {};
                var currentlyRunningATask = false;
                var doc = global.document;
                var registerImmediate;

                function setImmediate(callback) {
                  // Callback can either be a function or a string
                  if (typeof callback !== 'function') {
                    callback = new Function('' + callback);
                  }
                  // Copy function arguments
                  var args = new Array(arguments.length - 1);
                  for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i + 1];
                  }
                  // Store and register the task
                  var task = {callback: callback, args: args};
                  tasksByHandle[nextHandle] = task;
                  registerImmediate(nextHandle);
                  return nextHandle++;
                }

                function clearImmediate(handle) {
                  delete tasksByHandle[handle];
                }

                function run(task) {
                  var callback = task.callback;
                  var args = task.args;
                  switch (args.length) {
                    case 0:
                      callback();
                      break;
                    case 1:
                      callback(args[0]);
                      break;
                    case 2:
                      callback(args[0], args[1]);
                      break;
                    case 3:
                      callback(args[0], args[1], args[2]);
                      break;
                    default:
                      callback.apply(undefined, args);
                      break;
                  }
                }

                function runIfPresent(handle) {
                  // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                  // So if we're currently running a task, we'll need to delay this invocation.
                  if (currentlyRunningATask) {
                    // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                    // "too much recursion" error.
                    setTimeout(runIfPresent, 0, handle);
                  } else {
                    var task = tasksByHandle[handle];
                    if (task) {
                      currentlyRunningATask = true;
                      try {
                        run(task);
                      } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                      }
                    }
                  }
                }

                function installNextTickImplementation() {
                  registerImmediate = function(handle) {
                    process.nextTick(function() {
                      runIfPresent(handle);
                    });
                  };
                }

                function canUsePostMessage() {
                  // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                  // where `global.postMessage` means something completely different and can't be used for this purpose.
                  if (global.postMessage && !global.importScripts) {
                    var postMessageIsAsynchronous = true;
                    var oldOnMessage = global.onmessage;
                    global.onmessage = function() {
                      postMessageIsAsynchronous = false;
                    };
                    global.postMessage('', '*');
                    global.onmessage = oldOnMessage;
                    return postMessageIsAsynchronous;
                  }
                }

                function installPostMessageImplementation() {
                  // Installs an event handler on `global` for the `message` event: see
                  // * https://developer.mozilla.org/en/DOM/window.postMessage
                  // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

                  var messagePrefix = 'setImmediate$' + Math.random() + '$';
                  var onGlobalMessage = function(event) {
                    if (
                      event.source === global &&
                      typeof event.data === 'string' &&
                      event.data.indexOf(messagePrefix) === 0
                    ) {
                      runIfPresent(+event.data.slice(messagePrefix.length));
                    }
                  };

                  if (global.addEventListener) {
                    global.addEventListener('message', onGlobalMessage, false);
                  } else {
                    global.attachEvent('onmessage', onGlobalMessage);
                  }

                  registerImmediate = function(handle) {
                    global.postMessage(messagePrefix + handle, '*');
                  };
                }

                function installMessageChannelImplementation() {
                  var channel = new MessageChannel();
                  channel.port1.onmessage = function(event) {
                    var handle = event.data;
                    runIfPresent(handle);
                  };

                  registerImmediate = function(handle) {
                    channel.port2.postMessage(handle);
                  };
                }

                function installReadyStateChangeImplementation() {
                  var html = doc.documentElement;
                  registerImmediate = function(handle) {
                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                    var script = doc.createElement('script');
                    script.onreadystatechange = function() {
                      runIfPresent(handle);
                      script.onreadystatechange = null;
                      html.removeChild(script);
                      script = null;
                    };
                    html.appendChild(script);
                  };
                }

                function installSetTimeoutImplementation() {
                  registerImmediate = function(handle) {
                    setTimeout(runIfPresent, 0, handle);
                  };
                }

                // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

                // Don't get fooled by e.g. browserify environments.
                if ({}.toString.call(global.process) === '[object process]') {
                  // For Node.js before 0.9
                  installNextTickImplementation();
                } else if (canUsePostMessage()) {
                  // For non-IE10 modern browsers
                  installPostMessageImplementation();
                } else if (global.MessageChannel) {
                  // For web workers, where supported
                  installMessageChannelImplementation();
                } else if (doc && 'onreadystatechange' in doc.createElement('script')) {
                  // For IE 6–8
                  installReadyStateChangeImplementation();
                } else {
                  // For older browsers
                  installSetTimeoutImplementation();
                }

                attachTo.setImmediate = setImmediate;
                attachTo.clearImmediate = clearImmediate;
              })(
                typeof self === 'undefined'
                  ? typeof global === 'undefined' ? this : global
                  : self
              );

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              ),
              __webpack_require__(
                /*! ./../process/browser.js */ '../node_modules/process/browser.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/stream-browserify/index.js':
          /*!**************************************************!*\
  !*** ../node_modules/stream-browserify/index.js ***!
  \**************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            module.exports = Stream;

            var EE = __webpack_require__(/*! events */ '../node_modules/events/events.js')
              .EventEmitter;
            var inherits = __webpack_require__(
              /*! inherits */ '../node_modules/inherits/inherits_browser.js'
            );

            inherits(Stream, EE);
            Stream.Readable = __webpack_require__(
              /*! readable-stream/readable.js */ '../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
            );
            Stream.Writable = __webpack_require__(
              /*! readable-stream/writable.js */ '../node_modules/stream-browserify/node_modules/readable-stream/writable-browser.js'
            );
            Stream.Duplex = __webpack_require__(
              /*! readable-stream/duplex.js */ '../node_modules/stream-browserify/node_modules/readable-stream/duplex-browser.js'
            );
            Stream.Transform = __webpack_require__(
              /*! readable-stream/transform.js */ '../node_modules/stream-browserify/node_modules/readable-stream/transform.js'
            );
            Stream.PassThrough = __webpack_require__(
              /*! readable-stream/passthrough.js */ '../node_modules/stream-browserify/node_modules/readable-stream/passthrough.js'
            );

            // Backwards-compat with node 0.4.x
            Stream.Stream = Stream;

            // old-style streams.  Note that the pipe method (the only relevant
            // part of this class) is overridden in the Readable class.

            function Stream() {
              EE.call(this);
            }

            Stream.prototype.pipe = function(dest, options) {
              var source = this;

              function ondata(chunk) {
                if (dest.writable) {
                  if (false === dest.write(chunk) && source.pause) {
                    source.pause();
                  }
                }
              }

              source.on('data', ondata);

              function ondrain() {
                if (source.readable && source.resume) {
                  source.resume();
                }
              }

              dest.on('drain', ondrain);

              // If the 'end' option is not supplied, dest.end() will be called when
              // source gets the 'end' or 'close' events.  Only dest.end() once.
              if (!dest._isStdio && (!options || options.end !== false)) {
                source.on('end', onend);
                source.on('close', onclose);
              }

              var didOnEnd = false;
              function onend() {
                if (didOnEnd) return;
                didOnEnd = true;

                dest.end();
              }

              function onclose() {
                if (didOnEnd) return;
                didOnEnd = true;

                if (typeof dest.destroy === 'function') dest.destroy();
              }

              // don't leave dangling pipes when there are errors.
              function onerror(er) {
                cleanup();
                if (EE.listenerCount(this, 'error') === 0) {
                  throw er; // Unhandled stream error in pipe.
                }
              }

              source.on('error', onerror);
              dest.on('error', onerror);

              // remove all the event listeners that were added.
              function cleanup() {
                source.removeListener('data', ondata);
                dest.removeListener('drain', ondrain);

                source.removeListener('end', onend);
                source.removeListener('close', onclose);

                source.removeListener('error', onerror);
                dest.removeListener('error', onerror);

                source.removeListener('end', cleanup);
                source.removeListener('close', cleanup);

                dest.removeListener('close', cleanup);
              }

              source.on('end', cleanup);
              source.on('close', cleanup);

              dest.on('close', cleanup);

              dest.emit('pipe', source);

              // Allow for unix-like usage: A.pipe(B).pipe(C)
              return dest;
            };

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/process-nextick-args/index.js':
          /*!************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/process-nextick-args/index.js ***!
  \************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            /* WEBPACK VAR INJECTION */ (function(process) {
              if (
                !process.version ||
                process.version.indexOf('v0.') === 0 ||
                (process.version.indexOf('v1.') === 0 &&
                  process.version.indexOf('v1.8.') !== 0)
              ) {
                module.exports = nextTick;
              } else {
                module.exports = process.nextTick;
              }

              function nextTick(fn, arg1, arg2, arg3) {
                if (typeof fn !== 'function') {
                  throw new TypeError('"callback" argument must be a function');
                }
                var len = arguments.length;
                var args, i;
                switch (len) {
                  case 0:
                  case 1:
                    return process.nextTick(fn);
                  case 2:
                    return process.nextTick(function afterTickOne() {
                      fn.call(null, arg1);
                    });
                  case 3:
                    return process.nextTick(function afterTickTwo() {
                      fn.call(null, arg1, arg2);
                    });
                  case 4:
                    return process.nextTick(function afterTickThree() {
                      fn.call(null, arg1, arg2, arg3);
                    });
                  default:
                    args = new Array(len - 1);
                    i = 0;
                    while (i < args.length) {
                      args[i++] = arguments[i];
                    }
                    return process.nextTick(function afterTick() {
                      fn.apply(null, args);
                    });
                }
              }

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../../../process/browser.js */ '../node_modules/process/browser.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/duplex-browser.js':
          /*!****************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/duplex-browser.js ***!
  \****************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
              /*! ./lib/_stream_duplex.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
            );

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js':
          /*!********************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js ***!
  \********************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            // a duplex stream is just a stream that is both readable and writable.
            // Since JS doesn't have multiple prototypal inheritance, this class
            // prototypally inherits from Readable, and then parasitically from
            // Writable.

            /*<replacement>*/

            var processNextTick = __webpack_require__(
              /*! process-nextick-args */ '../node_modules/stream-browserify/node_modules/process-nextick-args/index.js'
            );
            /*</replacement>*/

            /*<replacement>*/
            var objectKeys =
              Object.keys ||
              function(obj) {
                var keys = [];
                for (var key in obj) {
                  keys.push(key);
                }
                return keys;
              };
            /*</replacement>*/

            module.exports = Duplex;

            /*<replacement>*/
            var util = __webpack_require__(
              /*! core-util-is */ '../node_modules/core-util-is/lib/util.js'
            );
            util.inherits = __webpack_require__(
              /*! inherits */ '../node_modules/inherits/inherits_browser.js'
            );
            /*</replacement>*/

            var Readable = __webpack_require__(
              /*! ./_stream_readable */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js'
            );
            var Writable = __webpack_require__(
              /*! ./_stream_writable */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
            );

            util.inherits(Duplex, Readable);

            var keys = objectKeys(Writable.prototype);
            for (var v = 0; v < keys.length; v++) {
              var method = keys[v];
              if (!Duplex.prototype[method])
                Duplex.prototype[method] = Writable.prototype[method];
            }

            function Duplex(options) {
              if (!(this instanceof Duplex)) return new Duplex(options);

              Readable.call(this, options);
              Writable.call(this, options);

              if (options && options.readable === false) this.readable = false;

              if (options && options.writable === false) this.writable = false;

              this.allowHalfOpen = true;
              if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

              this.once('end', onend);
            }

            // the no-half-open enforcer
            function onend() {
              // if we allow half-open state, or if the writable side ended,
              // then we're ok.
              if (this.allowHalfOpen || this._writableState.ended) return;

              // no more data can be written.
              // But allow more writes to happen in this tick.
              processNextTick(onEndNT, this);
            }

            function onEndNT(self) {
              self.end();
            }

            Object.defineProperty(Duplex.prototype, 'destroyed', {
              get: function() {
                if (
                  this._readableState === undefined ||
                  this._writableState === undefined
                ) {
                  return false;
                }
                return this._readableState.destroyed && this._writableState.destroyed;
              },
              set: function(value) {
                // we ignore the value if the stream
                // has not been initialized yet
                if (
                  this._readableState === undefined ||
                  this._writableState === undefined
                ) {
                  return;
                }

                // backward compatibility, the user is explicitly
                // managing destroyed
                this._readableState.destroyed = value;
                this._writableState.destroyed = value;
              },
            });

            Duplex.prototype._destroy = function(err, cb) {
              this.push(null);
              this.end();

              processNextTick(cb, err);
            };

            function forEach(xs, f) {
              for (var i = 0, l = xs.length; i < l; i++) {
                f(xs[i], i);
              }
            }

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js':
          /*!*************************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*************************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            // a passthrough stream.
            // basically just the most minimal sort of Transform stream.
            // Every written chunk gets output as-is.

            module.exports = PassThrough;

            var Transform = __webpack_require__(
              /*! ./_stream_transform */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js'
            );

            /*<replacement>*/
            var util = __webpack_require__(
              /*! core-util-is */ '../node_modules/core-util-is/lib/util.js'
            );
            util.inherits = __webpack_require__(
              /*! inherits */ '../node_modules/inherits/inherits_browser.js'
            );
            /*</replacement>*/

            util.inherits(PassThrough, Transform);

            function PassThrough(options) {
              if (!(this instanceof PassThrough)) return new PassThrough(options);

              Transform.call(this, options);
            }

            PassThrough.prototype._transform = function(chunk, encoding, cb) {
              cb(null, chunk);
            };

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js':
          /*!**********************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js ***!
  \**********************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            /* WEBPACK VAR INJECTION */ (function(global, process) {
              // Copyright Joyent, Inc. and other Node contributors.
              //
              // Permission is hereby granted, free of charge, to any person obtaining a
              // copy of this software and associated documentation files (the
              // "Software"), to deal in the Software without restriction, including
              // without limitation the rights to use, copy, modify, merge, publish,
              // distribute, sublicense, and/or sell copies of the Software, and to permit
              // persons to whom the Software is furnished to do so, subject to the
              // following conditions:
              //
              // The above copyright notice and this permission notice shall be included
              // in all copies or substantial portions of the Software.
              //
              // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
              // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
              // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
              // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
              // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
              // USE OR OTHER DEALINGS IN THE SOFTWARE.

              /*<replacement>*/

              var processNextTick = __webpack_require__(
                /*! process-nextick-args */ '../node_modules/stream-browserify/node_modules/process-nextick-args/index.js'
              );
              /*</replacement>*/

              module.exports = Readable;

              /*<replacement>*/
              var isArray = __webpack_require__(
                /*! isarray */ '../node_modules/isarray/index.js'
              );
              /*</replacement>*/

              /*<replacement>*/
              var Duplex;
              /*</replacement>*/

              Readable.ReadableState = ReadableState;

              /*<replacement>*/
              var EE = __webpack_require__(
                /*! events */ '../node_modules/events/events.js'
              ).EventEmitter;

              var EElistenerCount = function(emitter, type) {
                return emitter.listeners(type).length;
              };
              /*</replacement>*/

              /*<replacement>*/
              var Stream = __webpack_require__(
                /*! ./internal/streams/stream */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
              );
              /*</replacement>*/

              // TODO(bmeurer): Change this back to const once hole checks are
              // properly optimized away early in Ignition+TurboFan.
              /*<replacement>*/
              var Buffer = __webpack_require__(
                /*! safe-buffer */ '../node_modules/safe-buffer/index.js'
              ).Buffer;
              var OurUint8Array = global.Uint8Array || function() {};
              function _uint8ArrayToBuffer(chunk) {
                return Buffer.from(chunk);
              }
              function _isUint8Array(obj) {
                return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
              }
              /*</replacement>*/

              /*<replacement>*/
              var util = __webpack_require__(
                /*! core-util-is */ '../node_modules/core-util-is/lib/util.js'
              );
              util.inherits = __webpack_require__(
                /*! inherits */ '../node_modules/inherits/inherits_browser.js'
              );
              /*</replacement>*/

              /*<replacement>*/
              var debugUtil = __webpack_require__(/*! util */ 0);
              var debug = void 0;
              if (debugUtil && debugUtil.debuglog) {
                debug = debugUtil.debuglog('stream');
              } else {
                debug = function() {};
              }
              /*</replacement>*/

              var BufferList = __webpack_require__(
                /*! ./internal/streams/BufferList */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/BufferList.js'
              );
              var destroyImpl = __webpack_require__(
                /*! ./internal/streams/destroy */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js'
              );
              var StringDecoder;

              util.inherits(Readable, Stream);

              var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

              function prependListener(emitter, event, fn) {
                // Sadly this is not cacheable as some libraries bundle their own
                // event emitter implementation with them.
                if (typeof emitter.prependListener === 'function') {
                  return emitter.prependListener(event, fn);
                } else {
                  // This is a hack to make sure that our error handler is attached before any
                  // userland ones.  NEVER DO THIS. This is here only because this code needs
                  // to continue to work with older versions of Node.js that do not include
                  // the prependListener() method. The goal is to eventually remove this hack.
                  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
                  else if (isArray(emitter._events[event]))
                    emitter._events[event].unshift(fn);
                  else emitter._events[event] = [fn, emitter._events[event]];
                }
              }

              function ReadableState(options, stream) {
                Duplex =
                  Duplex ||
                  __webpack_require__(
                    /*! ./_stream_duplex */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
                  );

                options = options || {};

                // object stream flag. Used to make read(n) ignore n and to
                // make all the buffer merging and length checks go away
                this.objectMode = !!options.objectMode;

                if (stream instanceof Duplex)
                  this.objectMode = this.objectMode || !!options.readableObjectMode;

                // the point at which it stops calling _read() to fill the buffer
                // Note: 0 is a valid value, means "don't call _read preemptively ever"
                var hwm = options.highWaterMark;
                var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

                // cast to ints.
                this.highWaterMark = Math.floor(this.highWaterMark);

                // A linked list is used to store data chunks instead of an array because the
                // linked list can remove elements from the beginning faster than
                // array.shift()
                this.buffer = new BufferList();
                this.length = 0;
                this.pipes = null;
                this.pipesCount = 0;
                this.flowing = null;
                this.ended = false;
                this.endEmitted = false;
                this.reading = false;

                // a flag to be able to tell if the event 'readable'/'data' is emitted
                // immediately, or on a later tick.  We set this to true at first, because
                // any actions that shouldn't happen until "later" should generally also
                // not happen before the first read call.
                this.sync = true;

                // whenever we return null, then we set a flag to say
                // that we're awaiting a 'readable' event emission.
                this.needReadable = false;
                this.emittedReadable = false;
                this.readableListening = false;
                this.resumeScheduled = false;

                // has it been destroyed
                this.destroyed = false;

                // Crypto is kind of old and crusty.  Historically, its default string
                // encoding is 'binary' so we have to make this configurable.
                // Everything else in the universe uses 'utf8', though.
                this.defaultEncoding = options.defaultEncoding || 'utf8';

                // the number of writers that are awaiting a drain event in .pipe()s
                this.awaitDrain = 0;

                // if true, a maybeReadMore has been scheduled
                this.readingMore = false;

                this.decoder = null;
                this.encoding = null;
                if (options.encoding) {
                  if (!StringDecoder)
                    StringDecoder = __webpack_require__(
                      /*! string_decoder/ */ '../node_modules/string_decoder/lib/string_decoder.js'
                    ).StringDecoder;
                  this.decoder = new StringDecoder(options.encoding);
                  this.encoding = options.encoding;
                }
              }

              function Readable(options) {
                Duplex =
                  Duplex ||
                  __webpack_require__(
                    /*! ./_stream_duplex */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
                  );

                if (!(this instanceof Readable)) return new Readable(options);

                this._readableState = new ReadableState(options, this);

                // legacy
                this.readable = true;

                if (options) {
                  if (typeof options.read === 'function') this._read = options.read;

                  if (typeof options.destroy === 'function')
                    this._destroy = options.destroy;
                }

                Stream.call(this);
              }

              Object.defineProperty(Readable.prototype, 'destroyed', {
                get: function() {
                  if (this._readableState === undefined) {
                    return false;
                  }
                  return this._readableState.destroyed;
                },
                set: function(value) {
                  // we ignore the value if the stream
                  // has not been initialized yet
                  if (!this._readableState) {
                    return;
                  }

                  // backward compatibility, the user is explicitly
                  // managing destroyed
                  this._readableState.destroyed = value;
                },
              });

              Readable.prototype.destroy = destroyImpl.destroy;
              Readable.prototype._undestroy = destroyImpl.undestroy;
              Readable.prototype._destroy = function(err, cb) {
                this.push(null);
                cb(err);
              };

              // Manually shove something into the read() buffer.
              // This returns true if the highWaterMark has not been hit yet,
              // similar to how Writable.write() returns true if you should
              // write() some more.
              Readable.prototype.push = function(chunk, encoding) {
                var state = this._readableState;
                var skipChunkCheck;

                if (!state.objectMode) {
                  if (typeof chunk === 'string') {
                    encoding = encoding || state.defaultEncoding;
                    if (encoding !== state.encoding) {
                      chunk = Buffer.from(chunk, encoding);
                      encoding = '';
                    }
                    skipChunkCheck = true;
                  }
                } else {
                  skipChunkCheck = true;
                }

                return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
              };

              // Unshift should *always* be something directly out of read()
              Readable.prototype.unshift = function(chunk) {
                return readableAddChunk(this, chunk, null, true, false);
              };

              function readableAddChunk(
                stream,
                chunk,
                encoding,
                addToFront,
                skipChunkCheck
              ) {
                var state = stream._readableState;
                if (chunk === null) {
                  state.reading = false;
                  onEofChunk(stream, state);
                } else {
                  var er;
                  if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                  if (er) {
                    stream.emit('error', er);
                  } else if (state.objectMode || (chunk && chunk.length > 0)) {
                    if (
                      typeof chunk !== 'string' &&
                      !state.objectMode &&
                      Object.getPrototypeOf(chunk) !== Buffer.prototype
                    ) {
                      chunk = _uint8ArrayToBuffer(chunk);
                    }

                    if (addToFront) {
                      if (state.endEmitted)
                        stream.emit(
                          'error',
                          new Error('stream.unshift() after end event')
                        );
                      else addChunk(stream, state, chunk, true);
                    } else if (state.ended) {
                      stream.emit('error', new Error('stream.push() after EOF'));
                    } else {
                      state.reading = false;
                      if (state.decoder && !encoding) {
                        chunk = state.decoder.write(chunk);
                        if (state.objectMode || chunk.length !== 0)
                          addChunk(stream, state, chunk, false);
                        else maybeReadMore(stream, state);
                      } else {
                        addChunk(stream, state, chunk, false);
                      }
                    }
                  } else if (!addToFront) {
                    state.reading = false;
                  }
                }

                return needMoreData(state);
              }

              function addChunk(stream, state, chunk, addToFront) {
                if (state.flowing && state.length === 0 && !state.sync) {
                  stream.emit('data', chunk);
                  stream.read(0);
                } else {
                  // update the buffer info.
                  state.length += state.objectMode ? 1 : chunk.length;
                  if (addToFront) state.buffer.unshift(chunk);
                  else state.buffer.push(chunk);

                  if (state.needReadable) emitReadable(stream);
                }
                maybeReadMore(stream, state);
              }

              function chunkInvalid(state, chunk) {
                var er;
                if (
                  !_isUint8Array(chunk) &&
                  typeof chunk !== 'string' &&
                  chunk !== undefined &&
                  !state.objectMode
                ) {
                  er = new TypeError('Invalid non-string/buffer chunk');
                }
                return er;
              }

              // if it's past the high water mark, we can push in some more.
              // Also, if we have no data yet, we can stand some
              // more bytes.  This is to work around cases where hwm=0,
              // such as the repl.  Also, if the push() triggered a
              // readable event, and the user called read(largeNumber) such that
              // needReadable was set, then we ought to push more, so that another
              // 'readable' event will be triggered.
              function needMoreData(state) {
                return (
                  !state.ended &&
                  (state.needReadable ||
                    state.length < state.highWaterMark ||
                    state.length === 0)
                );
              }

              Readable.prototype.isPaused = function() {
                return this._readableState.flowing === false;
              };

              // backwards compatibility.
              Readable.prototype.setEncoding = function(enc) {
                if (!StringDecoder)
                  StringDecoder = __webpack_require__(
                    /*! string_decoder/ */ '../node_modules/string_decoder/lib/string_decoder.js'
                  ).StringDecoder;
                this._readableState.decoder = new StringDecoder(enc);
                this._readableState.encoding = enc;
                return this;
              };

              // Don't raise the hwm > 8MB
              var MAX_HWM = 0x800000;
              function computeNewHighWaterMark(n) {
                if (n >= MAX_HWM) {
                  n = MAX_HWM;
                } else {
                  // Get the next highest power of 2 to prevent increasing hwm excessively in
                  // tiny amounts
                  n--;
                  n |= n >>> 1;
                  n |= n >>> 2;
                  n |= n >>> 4;
                  n |= n >>> 8;
                  n |= n >>> 16;
                  n++;
                }
                return n;
              }

              // This function is designed to be inlinable, so please take care when making
              // changes to the function body.
              function howMuchToRead(n, state) {
                if (n <= 0 || (state.length === 0 && state.ended)) return 0;
                if (state.objectMode) return 1;
                if (n !== n) {
                  // Only flow one buffer at a time
                  if (state.flowing && state.length) return state.buffer.head.data.length;
                  else return state.length;
                }
                // If we're asking for more than the current hwm, then raise the hwm.
                if (n > state.highWaterMark)
                  state.highWaterMark = computeNewHighWaterMark(n);
                if (n <= state.length) return n;
                // Don't have enough
                if (!state.ended) {
                  state.needReadable = true;
                  return 0;
                }
                return state.length;
              }

              // you can override either this method, or the async _read(n) below.
              Readable.prototype.read = function(n) {
                debug('read', n);
                n = parseInt(n, 10);
                var state = this._readableState;
                var nOrig = n;

                if (n !== 0) state.emittedReadable = false;

                // if we're doing read(0) to trigger a readable event, but we
                // already have a bunch of data in the buffer, then just trigger
                // the 'readable' event and move on.
                if (
                  n === 0 &&
                  state.needReadable &&
                  (state.length >= state.highWaterMark || state.ended)
                ) {
                  debug('read: emitReadable', state.length, state.ended);
                  if (state.length === 0 && state.ended) endReadable(this);
                  else emitReadable(this);
                  return null;
                }

                n = howMuchToRead(n, state);

                // if we've ended, and we're now clear, then finish it up.
                if (n === 0 && state.ended) {
                  if (state.length === 0) endReadable(this);
                  return null;
                }

                // All the actual chunk generation logic needs to be
                // *below* the call to _read.  The reason is that in certain
                // synthetic stream cases, such as passthrough streams, _read
                // may be a completely synchronous operation which may change
                // the state of the read buffer, providing enough data when
                // before there was *not* enough.
                //
                // So, the steps are:
                // 1. Figure out what the state of things will be after we do
                // a read from the buffer.
                //
                // 2. If that resulting state will trigger a _read, then call _read.
                // Note that this may be asynchronous, or synchronous.  Yes, it is
                // deeply ugly to write APIs this way, but that still doesn't mean
                // that the Readable class should behave improperly, as streams are
                // designed to be sync/async agnostic.
                // Take note if the _read call is sync or async (ie, if the read call
                // has returned yet), so that we know whether or not it's safe to emit
                // 'readable' etc.
                //
                // 3. Actually pull the requested chunks out of the buffer and return.

                // if we need a readable event, then we need to do some reading.
                var doRead = state.needReadable;
                debug('need readable', doRead);

                // if we currently have less than the highWaterMark, then also read some
                if (state.length === 0 || state.length - n < state.highWaterMark) {
                  doRead = true;
                  debug('length less than watermark', doRead);
                }

                // however, if we've ended, then there's no point, and if we're already
                // reading, then it's unnecessary.
                if (state.ended || state.reading) {
                  doRead = false;
                  debug('reading or ended', doRead);
                } else if (doRead) {
                  debug('do read');
                  state.reading = true;
                  state.sync = true;
                  // if the length is currently zero, then we *need* a readable event.
                  if (state.length === 0) state.needReadable = true;
                  // call internal read method
                  this._read(state.highWaterMark);
                  state.sync = false;
                  // If _read pushed data synchronously, then `reading` will be false,
                  // and we need to re-evaluate how much data we can return to the user.
                  if (!state.reading) n = howMuchToRead(nOrig, state);
                }

                var ret;
                if (n > 0) ret = fromList(n, state);
                else ret = null;

                if (ret === null) {
                  state.needReadable = true;
                  n = 0;
                } else {
                  state.length -= n;
                }

                if (state.length === 0) {
                  // If we have nothing in the buffer, then we want to know
                  // as soon as we *do* get something into the buffer.
                  if (!state.ended) state.needReadable = true;

                  // If we tried to read() past the EOF, then emit end on the next tick.
                  if (nOrig !== n && state.ended) endReadable(this);
                }

                if (ret !== null) this.emit('data', ret);

                return ret;
              };

              function onEofChunk(stream, state) {
                if (state.ended) return;
                if (state.decoder) {
                  var chunk = state.decoder.end();
                  if (chunk && chunk.length) {
                    state.buffer.push(chunk);
                    state.length += state.objectMode ? 1 : chunk.length;
                  }
                }
                state.ended = true;

                // emit 'readable' now to make sure it gets picked up.
                emitReadable(stream);
              }

              // Don't emit readable right away in sync mode, because this can trigger
              // another read() call => stack overflow.  This way, it might trigger
              // a nextTick recursion warning, but that's not so bad.
              function emitReadable(stream) {
                var state = stream._readableState;
                state.needReadable = false;
                if (!state.emittedReadable) {
                  debug('emitReadable', state.flowing);
                  state.emittedReadable = true;
                  if (state.sync) processNextTick(emitReadable_, stream);
                  else emitReadable_(stream);
                }
              }

              function emitReadable_(stream) {
                debug('emit readable');
                stream.emit('readable');
                flow(stream);
              }

              // at this point, the user has presumably seen the 'readable' event,
              // and called read() to consume some data.  that may have triggered
              // in turn another _read(n) call, in which case reading = true if
              // it's in progress.
              // However, if we're not ended, or reading, and the length < hwm,
              // then go ahead and try to read some more preemptively.
              function maybeReadMore(stream, state) {
                if (!state.readingMore) {
                  state.readingMore = true;
                  processNextTick(maybeReadMore_, stream, state);
                }
              }

              function maybeReadMore_(stream, state) {
                var len = state.length;
                while (
                  !state.reading &&
                  !state.flowing &&
                  !state.ended &&
                  state.length < state.highWaterMark
                ) {
                  debug('maybeReadMore read 0');
                  stream.read(0);
                  if (len === state.length)
                    // didn't get any data, stop spinning.
                    break;
                  else len = state.length;
                }
                state.readingMore = false;
              }

              // abstract method.  to be overridden in specific implementation classes.
              // call cb(er, data) where data is <= n in length.
              // for virtual (non-string, non-buffer) streams, "length" is somewhat
              // arbitrary, and perhaps not very meaningful.
              Readable.prototype._read = function(n) {
                this.emit('error', new Error('_read() is not implemented'));
              };

              Readable.prototype.pipe = function(dest, pipeOpts) {
                var src = this;
                var state = this._readableState;

                switch (state.pipesCount) {
                  case 0:
                    state.pipes = dest;
                    break;
                  case 1:
                    state.pipes = [state.pipes, dest];
                    break;
                  default:
                    state.pipes.push(dest);
                    break;
                }
                state.pipesCount += 1;
                debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

                var doEnd =
                  (!pipeOpts || pipeOpts.end !== false) &&
                  dest !== process.stdout &&
                  dest !== process.stderr;

                var endFn = doEnd ? onend : unpipe;
                if (state.endEmitted) processNextTick(endFn);
                else src.once('end', endFn);

                dest.on('unpipe', onunpipe);
                function onunpipe(readable, unpipeInfo) {
                  debug('onunpipe');
                  if (readable === src) {
                    if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                      unpipeInfo.hasUnpiped = true;
                      cleanup();
                    }
                  }
                }

                function onend() {
                  debug('onend');
                  dest.end();
                }

                // when the dest drains, it reduces the awaitDrain counter
                // on the source.  This would be more elegant with a .once()
                // handler in flow(), but adding and removing repeatedly is
                // too slow.
                var ondrain = pipeOnDrain(src);
                dest.on('drain', ondrain);

                var cleanedUp = false;
                function cleanup() {
                  debug('cleanup');
                  // cleanup event handlers once the pipe is broken
                  dest.removeListener('close', onclose);
                  dest.removeListener('finish', onfinish);
                  dest.removeListener('drain', ondrain);
                  dest.removeListener('error', onerror);
                  dest.removeListener('unpipe', onunpipe);
                  src.removeListener('end', onend);
                  src.removeListener('end', unpipe);
                  src.removeListener('data', ondata);

                  cleanedUp = true;

                  // if the reader is waiting for a drain event from this
                  // specific writer, then it would cause it to never start
                  // flowing again.
                  // So, if this is awaiting a drain, then we just call it now.
                  // If we don't know, then assume that we are waiting for one.
                  if (
                    state.awaitDrain &&
                    (!dest._writableState || dest._writableState.needDrain)
                  )
                    ondrain();
                }

                // If the user pushes more data while we're writing to dest then we'll end up
                // in ondata again. However, we only want to increase awaitDrain once because
                // dest will only emit one 'drain' event for the multiple writes.
                // => Introduce a guard on increasing awaitDrain.
                var increasedAwaitDrain = false;
                src.on('data', ondata);
                function ondata(chunk) {
                  debug('ondata');
                  increasedAwaitDrain = false;
                  var ret = dest.write(chunk);
                  if (false === ret && !increasedAwaitDrain) {
                    // If the user unpiped during `dest.write()`, it is possible
                    // to get stuck in a permanently paused state if that write
                    // also returned false.
                    // => Check whether `dest` is still a piping destination.
                    if (
                      ((state.pipesCount === 1 && state.pipes === dest) ||
                        (state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1)) &&
                      !cleanedUp
                    ) {
                      debug('false write response, pause', src._readableState.awaitDrain);
                      src._readableState.awaitDrain++;
                      increasedAwaitDrain = true;
                    }
                    src.pause();
                  }
                }

                // if the dest has an error, then stop piping into it.
                // however, don't suppress the throwing behavior for this.
                function onerror(er) {
                  debug('onerror', er);
                  unpipe();
                  dest.removeListener('error', onerror);
                  if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
                }

                // Make sure our error handler is attached before userland ones.
                prependListener(dest, 'error', onerror);

                // Both close and finish should trigger unpipe, but only once.
                function onclose() {
                  dest.removeListener('finish', onfinish);
                  unpipe();
                }
                dest.once('close', onclose);
                function onfinish() {
                  debug('onfinish');
                  dest.removeListener('close', onclose);
                  unpipe();
                }
                dest.once('finish', onfinish);

                function unpipe() {
                  debug('unpipe');
                  src.unpipe(dest);
                }

                // tell the dest that it's being piped to
                dest.emit('pipe', src);

                // start the flow if it hasn't been started already.
                if (!state.flowing) {
                  debug('pipe resume');
                  src.resume();
                }

                return dest;
              };

              function pipeOnDrain(src) {
                return function() {
                  var state = src._readableState;
                  debug('pipeOnDrain', state.awaitDrain);
                  if (state.awaitDrain) state.awaitDrain--;
                  if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
                    state.flowing = true;
                    flow(src);
                  }
                };
              }

              Readable.prototype.unpipe = function(dest) {
                var state = this._readableState;
                var unpipeInfo = {hasUnpiped: false};

                // if we're not piping anywhere, then do nothing.
                if (state.pipesCount === 0) return this;

                // just one destination.  most common case.
                if (state.pipesCount === 1) {
                  // passed in one, but it's not the right one.
                  if (dest && dest !== state.pipes) return this;

                  if (!dest) dest = state.pipes;

                  // got a match.
                  state.pipes = null;
                  state.pipesCount = 0;
                  state.flowing = false;
                  if (dest) dest.emit('unpipe', this, unpipeInfo);
                  return this;
                }

                // slow case. multiple pipe destinations.

                if (!dest) {
                  // remove all.
                  var dests = state.pipes;
                  var len = state.pipesCount;
                  state.pipes = null;
                  state.pipesCount = 0;
                  state.flowing = false;

                  for (var i = 0; i < len; i++) {
                    dests[i].emit('unpipe', this, unpipeInfo);
                  }
                  return this;
                }

                // try to find the right one.
                var index = indexOf(state.pipes, dest);
                if (index === -1) return this;

                state.pipes.splice(index, 1);
                state.pipesCount -= 1;
                if (state.pipesCount === 1) state.pipes = state.pipes[0];

                dest.emit('unpipe', this, unpipeInfo);

                return this;
              };

              // set up data events if they are asked for
              // Ensure readable listeners eventually get something
              Readable.prototype.on = function(ev, fn) {
                var res = Stream.prototype.on.call(this, ev, fn);

                if (ev === 'data') {
                  // Start flowing on next tick if stream isn't explicitly paused
                  if (this._readableState.flowing !== false) this.resume();
                } else if (ev === 'readable') {
                  var state = this._readableState;
                  if (!state.endEmitted && !state.readableListening) {
                    state.readableListening = state.needReadable = true;
                    state.emittedReadable = false;
                    if (!state.reading) {
                      processNextTick(nReadingNextTick, this);
                    } else if (state.length) {
                      emitReadable(this);
                    }
                  }
                }

                return res;
              };
              Readable.prototype.addListener = Readable.prototype.on;

              function nReadingNextTick(self) {
                debug('readable nexttick read 0');
                self.read(0);
              }

              // pause() and resume() are remnants of the legacy readable stream API
              // If the user uses them, then switch into old mode.
              Readable.prototype.resume = function() {
                var state = this._readableState;
                if (!state.flowing) {
                  debug('resume');
                  state.flowing = true;
                  resume(this, state);
                }
                return this;
              };

              function resume(stream, state) {
                if (!state.resumeScheduled) {
                  state.resumeScheduled = true;
                  processNextTick(resume_, stream, state);
                }
              }

              function resume_(stream, state) {
                if (!state.reading) {
                  debug('resume read 0');
                  stream.read(0);
                }

                state.resumeScheduled = false;
                state.awaitDrain = 0;
                stream.emit('resume');
                flow(stream);
                if (state.flowing && !state.reading) stream.read(0);
              }

              Readable.prototype.pause = function() {
                debug('call pause flowing=%j', this._readableState.flowing);
                if (false !== this._readableState.flowing) {
                  debug('pause');
                  this._readableState.flowing = false;
                  this.emit('pause');
                }
                return this;
              };

              function flow(stream) {
                var state = stream._readableState;
                debug('flow', state.flowing);
                while (state.flowing && stream.read() !== null) {}
              }

              // wrap an old-style stream as the async data source.
              // This is *not* part of the readable stream interface.
              // It is an ugly unfortunate mess of history.
              Readable.prototype.wrap = function(stream) {
                var state = this._readableState;
                var paused = false;

                var self = this;
                stream.on('end', function() {
                  debug('wrapped end');
                  if (state.decoder && !state.ended) {
                    var chunk = state.decoder.end();
                    if (chunk && chunk.length) self.push(chunk);
                  }

                  self.push(null);
                });

                stream.on('data', function(chunk) {
                  debug('wrapped data');
                  if (state.decoder) chunk = state.decoder.write(chunk);

                  // don't skip over falsy values in objectMode
                  if (state.objectMode && (chunk === null || chunk === undefined)) return;
                  else if (!state.objectMode && (!chunk || !chunk.length)) return;

                  var ret = self.push(chunk);
                  if (!ret) {
                    paused = true;
                    stream.pause();
                  }
                });

                // proxy all the other methods.
                // important when wrapping filters and duplexes.
                for (var i in stream) {
                  if (this[i] === undefined && typeof stream[i] === 'function') {
                    this[i] = (function(method) {
                      return function() {
                        return stream[method].apply(stream, arguments);
                      };
                    })(i);
                  }
                }

                // proxy certain important events.
                for (var n = 0; n < kProxyEvents.length; n++) {
                  stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
                }

                // when we try to consume some more bytes, simply unpause the
                // underlying stream.
                self._read = function(n) {
                  debug('wrapped _read', n);
                  if (paused) {
                    paused = false;
                    stream.resume();
                  }
                };

                return self;
              };

              // exposed for testing purposes only.
              Readable._fromList = fromList;

              // Pluck off n bytes from an array of buffers.
              // Length is the combined lengths of all the buffers in the list.
              // This function is designed to be inlinable, so please take care when making
              // changes to the function body.
              function fromList(n, state) {
                // nothing buffered
                if (state.length === 0) return null;

                var ret;
                if (state.objectMode) ret = state.buffer.shift();
                else if (!n || n >= state.length) {
                  // read it all, truncate the list
                  if (state.decoder) ret = state.buffer.join('');
                  else if (state.buffer.length === 1) ret = state.buffer.head.data;
                  else ret = state.buffer.concat(state.length);
                  state.buffer.clear();
                } else {
                  // read part of list
                  ret = fromListPartial(n, state.buffer, state.decoder);
                }

                return ret;
              }

              // Extracts only enough buffered data to satisfy the amount requested.
              // This function is designed to be inlinable, so please take care when making
              // changes to the function body.
              function fromListPartial(n, list, hasStrings) {
                var ret;
                if (n < list.head.data.length) {
                  // slice is the same for buffers and strings
                  ret = list.head.data.slice(0, n);
                  list.head.data = list.head.data.slice(n);
                } else if (n === list.head.data.length) {
                  // first chunk is a perfect match
                  ret = list.shift();
                } else {
                  // result spans more than one buffer
                  ret = hasStrings
                    ? copyFromBufferString(n, list)
                    : copyFromBuffer(n, list);
                }
                return ret;
              }

              // Copies a specified amount of characters from the list of buffered data
              // chunks.
              // This function is designed to be inlinable, so please take care when making
              // changes to the function body.
              function copyFromBufferString(n, list) {
                var p = list.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while ((p = p.next)) {
                  var str = p.data;
                  var nb = n > str.length ? str.length : n;
                  if (nb === str.length) ret += str;
                  else ret += str.slice(0, n);
                  n -= nb;
                  if (n === 0) {
                    if (nb === str.length) {
                      ++c;
                      if (p.next) list.head = p.next;
                      else list.head = list.tail = null;
                    } else {
                      list.head = p;
                      p.data = str.slice(nb);
                    }
                    break;
                  }
                  ++c;
                }
                list.length -= c;
                return ret;
              }

              // Copies a specified amount of bytes from the list of buffered data chunks.
              // This function is designed to be inlinable, so please take care when making
              // changes to the function body.
              function copyFromBuffer(n, list) {
                var ret = Buffer.allocUnsafe(n);
                var p = list.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while ((p = p.next)) {
                  var buf = p.data;
                  var nb = n > buf.length ? buf.length : n;
                  buf.copy(ret, ret.length - n, 0, nb);
                  n -= nb;
                  if (n === 0) {
                    if (nb === buf.length) {
                      ++c;
                      if (p.next) list.head = p.next;
                      else list.head = list.tail = null;
                    } else {
                      list.head = p;
                      p.data = buf.slice(nb);
                    }
                    break;
                  }
                  ++c;
                }
                list.length -= c;
                return ret;
              }

              function endReadable(stream) {
                var state = stream._readableState;

                // If we get here before consuming all the bytes, then that is a
                // bug in node.  Should never happen.
                if (state.length > 0)
                  throw new Error('"endReadable()" called on non-empty stream');

                if (!state.endEmitted) {
                  state.ended = true;
                  processNextTick(endReadableNT, state, stream);
                }
              }

              function endReadableNT(state, stream) {
                // Check that we didn't get one last unshift.
                if (!state.endEmitted && state.length === 0) {
                  state.endEmitted = true;
                  stream.readable = false;
                  stream.emit('end');
                }
              }

              function forEach(xs, f) {
                for (var i = 0, l = xs.length; i < l; i++) {
                  f(xs[i], i);
                }
              }

              function indexOf(xs, x) {
                for (var i = 0, l = xs.length; i < l; i++) {
                  if (xs[i] === x) return i;
                }
                return -1;
              }
              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../../../../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              ),
              __webpack_require__(
                /*! ./../../../../process/browser.js */ '../node_modules/process/browser.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js':
          /*!***********************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js ***!
  \***********************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            // a transform stream is a readable/writable stream where you do
            // something with the data.  Sometimes it's called a "filter",
            // but that's not a great name for it, since that implies a thing where
            // some bits pass through, and others are simply ignored.  (That would
            // be a valid example of a transform, of course.)
            //
            // While the output is causally related to the input, it's not a
            // necessarily symmetric or synchronous transformation.  For example,
            // a zlib stream might take multiple plain-text writes(), and then
            // emit a single compressed chunk some time in the future.
            //
            // Here's how this works:
            //
            // The Transform stream has all the aspects of the readable and writable
            // stream classes.  When you write(chunk), that calls _write(chunk,cb)
            // internally, and returns false if there's a lot of pending writes
            // buffered up.  When you call read(), that calls _read(n) until
            // there's enough pending readable data buffered up.
            //
            // In a transform stream, the written data is placed in a buffer.  When
            // _read(n) is called, it transforms the queued up data, calling the
            // buffered _write cb's as it consumes chunks.  If consuming a single
            // written chunk would result in multiple output chunks, then the first
            // outputted bit calls the readcb, and subsequent chunks just go into
            // the read buffer, and will cause it to emit 'readable' if necessary.
            //
            // This way, back-pressure is actually determined by the reading side,
            // since _read has to be called to start processing a new chunk.  However,
            // a pathological inflate type of transform can cause excessive buffering
            // here.  For example, imagine a stream where every byte of input is
            // interpreted as an integer from 0-255, and then results in that many
            // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
            // 1kb of data being output.  In this case, you could write a very small
            // amount of input, and end up with a very large amount of output.  In
            // such a pathological inflating mechanism, there'd be no way to tell
            // the system to stop doing the transform.  A single 4MB write could
            // cause the system to run out of memory.
            //
            // However, even in such a pathological case, only a single written chunk
            // would be consumed, and then the rest would wait (un-transformed) until
            // the results of the previous transformed chunk were consumed.

            module.exports = Transform;

            var Duplex = __webpack_require__(
              /*! ./_stream_duplex */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
            );

            /*<replacement>*/
            var util = __webpack_require__(
              /*! core-util-is */ '../node_modules/core-util-is/lib/util.js'
            );
            util.inherits = __webpack_require__(
              /*! inherits */ '../node_modules/inherits/inherits_browser.js'
            );
            /*</replacement>*/

            util.inherits(Transform, Duplex);

            function TransformState(stream) {
              this.afterTransform = function(er, data) {
                return afterTransform(stream, er, data);
              };

              this.needTransform = false;
              this.transforming = false;
              this.writecb = null;
              this.writechunk = null;
              this.writeencoding = null;
            }

            function afterTransform(stream, er, data) {
              var ts = stream._transformState;
              ts.transforming = false;

              var cb = ts.writecb;

              if (!cb) {
                return stream.emit(
                  'error',
                  new Error('write callback called multiple times')
                );
              }

              ts.writechunk = null;
              ts.writecb = null;

              if (data !== null && data !== undefined) stream.push(data);

              cb(er);

              var rs = stream._readableState;
              rs.reading = false;
              if (rs.needReadable || rs.length < rs.highWaterMark) {
                stream._read(rs.highWaterMark);
              }
            }

            function Transform(options) {
              if (!(this instanceof Transform)) return new Transform(options);

              Duplex.call(this, options);

              this._transformState = new TransformState(this);

              var stream = this;

              // start out asking for a readable event once data is transformed.
              this._readableState.needReadable = true;

              // we have implemented the _read method, and done the other things
              // that Readable wants before the first _read call, so unset the
              // sync guard flag.
              this._readableState.sync = false;

              if (options) {
                if (typeof options.transform === 'function')
                  this._transform = options.transform;

                if (typeof options.flush === 'function') this._flush = options.flush;
              }

              // When the writable side finishes, then flush out anything remaining.
              this.once('prefinish', function() {
                if (typeof this._flush === 'function')
                  this._flush(function(er, data) {
                    done(stream, er, data);
                  });
                else done(stream);
              });
            }

            Transform.prototype.push = function(chunk, encoding) {
              this._transformState.needTransform = false;
              return Duplex.prototype.push.call(this, chunk, encoding);
            };

            // This is the part where you do stuff!
            // override this function in implementation classes.
            // 'chunk' is an input chunk.
            //
            // Call `push(newChunk)` to pass along transformed output
            // to the readable side.  You may call 'push' zero or more times.
            //
            // Call `cb(err)` when you are done with this chunk.  If you pass
            // an error, then that'll put the hurt on the whole operation.  If you
            // never call cb(), then you'll never get another chunk.
            Transform.prototype._transform = function(chunk, encoding, cb) {
              throw new Error('_transform() is not implemented');
            };

            Transform.prototype._write = function(chunk, encoding, cb) {
              var ts = this._transformState;
              ts.writecb = cb;
              ts.writechunk = chunk;
              ts.writeencoding = encoding;
              if (!ts.transforming) {
                var rs = this._readableState;
                if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
                  this._read(rs.highWaterMark);
              }
            };

            // Doesn't matter what the args are here.
            // _transform does all the work.
            // That we got here means that the readable side wants more data.
            Transform.prototype._read = function(n) {
              var ts = this._transformState;

              if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
                ts.transforming = true;
                this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
              } else {
                // mark that we need a transform, so that any data that comes in
                // will get processed, now that we've asked for it.
                ts.needTransform = true;
              }
            };

            Transform.prototype._destroy = function(err, cb) {
              var _this = this;

              Duplex.prototype._destroy.call(this, err, function(err2) {
                cb(err2);
                _this.emit('close');
              });
            };

            function done(stream, er, data) {
              if (er) return stream.emit('error', er);

              if (data !== null && data !== undefined) stream.push(data);

              // if there's nothing in the write buffer, then that means
              // that nothing more will ever be provided
              var ws = stream._writableState;
              var ts = stream._transformState;

              if (ws.length)
                throw new Error('Calling transform done when ws.length != 0');

              if (ts.transforming)
                throw new Error('Calling transform done when still transforming');

              return stream.push(null);
            }

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js':
          /*!**********************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js ***!
  \**********************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            /* WEBPACK VAR INJECTION */ (function(process, setImmediate, global) {
              // Copyright Joyent, Inc. and other Node contributors.
              //
              // Permission is hereby granted, free of charge, to any person obtaining a
              // copy of this software and associated documentation files (the
              // "Software"), to deal in the Software without restriction, including
              // without limitation the rights to use, copy, modify, merge, publish,
              // distribute, sublicense, and/or sell copies of the Software, and to permit
              // persons to whom the Software is furnished to do so, subject to the
              // following conditions:
              //
              // The above copyright notice and this permission notice shall be included
              // in all copies or substantial portions of the Software.
              //
              // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
              // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
              // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
              // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
              // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
              // USE OR OTHER DEALINGS IN THE SOFTWARE.

              // A bit simpler than readable streams.
              // Implement an async ._write(chunk, encoding, cb), and it'll handle all
              // the drain event emission and buffering.

              /*<replacement>*/

              var processNextTick = __webpack_require__(
                /*! process-nextick-args */ '../node_modules/stream-browserify/node_modules/process-nextick-args/index.js'
              );
              /*</replacement>*/

              module.exports = Writable;

              /* <replacement> */
              function WriteReq(chunk, encoding, cb) {
                this.chunk = chunk;
                this.encoding = encoding;
                this.callback = cb;
                this.next = null;
              }

              // It seems a linked list but it is not
              // there will be only 2 of these for each stream
              function CorkedRequest(state) {
                var _this = this;

                this.next = null;
                this.entry = null;
                this.finish = function() {
                  onCorkedFinish(_this, state);
                };
              }
              /* </replacement> */

              /*<replacement>*/
              var asyncWrite =
                !process.browser &&
                ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1
                  ? setImmediate
                  : processNextTick;
              /*</replacement>*/

              /*<replacement>*/
              var Duplex;
              /*</replacement>*/

              Writable.WritableState = WritableState;

              /*<replacement>*/
              var util = __webpack_require__(
                /*! core-util-is */ '../node_modules/core-util-is/lib/util.js'
              );
              util.inherits = __webpack_require__(
                /*! inherits */ '../node_modules/inherits/inherits_browser.js'
              );
              /*</replacement>*/

              /*<replacement>*/
              var internalUtil = {
                deprecate: __webpack_require__(
                  /*! util-deprecate */ '../node_modules/util-deprecate/browser.js'
                ),
              };
              /*</replacement>*/

              /*<replacement>*/
              var Stream = __webpack_require__(
                /*! ./internal/streams/stream */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
              );
              /*</replacement>*/

              /*<replacement>*/
              var Buffer = __webpack_require__(
                /*! safe-buffer */ '../node_modules/safe-buffer/index.js'
              ).Buffer;
              var OurUint8Array = global.Uint8Array || function() {};
              function _uint8ArrayToBuffer(chunk) {
                return Buffer.from(chunk);
              }
              function _isUint8Array(obj) {
                return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
              }
              /*</replacement>*/

              var destroyImpl = __webpack_require__(
                /*! ./internal/streams/destroy */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js'
              );

              util.inherits(Writable, Stream);

              function nop() {}

              function WritableState(options, stream) {
                Duplex =
                  Duplex ||
                  __webpack_require__(
                    /*! ./_stream_duplex */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
                  );

                options = options || {};

                // object stream flag to indicate whether or not this stream
                // contains buffers or objects.
                this.objectMode = !!options.objectMode;

                if (stream instanceof Duplex)
                  this.objectMode = this.objectMode || !!options.writableObjectMode;

                // the point at which write() starts returning false
                // Note: 0 is a valid value, means that we always return false if
                // the entire buffer is not flushed immediately on write()
                var hwm = options.highWaterMark;
                var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

                // cast to ints.
                this.highWaterMark = Math.floor(this.highWaterMark);

                // if _final has been called
                this.finalCalled = false;

                // drain event flag.
                this.needDrain = false;
                // at the start of calling end()
                this.ending = false;
                // when end() has been called, and returned
                this.ended = false;
                // when 'finish' is emitted
                this.finished = false;

                // has it been destroyed
                this.destroyed = false;

                // should we decode strings into buffers before passing to _write?
                // this is here so that some node-core streams can optimize string
                // handling at a lower level.
                var noDecode = options.decodeStrings === false;
                this.decodeStrings = !noDecode;

                // Crypto is kind of old and crusty.  Historically, its default string
                // encoding is 'binary' so we have to make this configurable.
                // Everything else in the universe uses 'utf8', though.
                this.defaultEncoding = options.defaultEncoding || 'utf8';

                // not an actual buffer we keep track of, but a measurement
                // of how much we're waiting to get pushed to some underlying
                // socket or file.
                this.length = 0;

                // a flag to see when we're in the middle of a write.
                this.writing = false;

                // when true all writes will be buffered until .uncork() call
                this.corked = 0;

                // a flag to be able to tell if the onwrite cb is called immediately,
                // or on a later tick.  We set this to true at first, because any
                // actions that shouldn't happen until "later" should generally also
                // not happen before the first write call.
                this.sync = true;

                // a flag to know if we're processing previously buffered items, which
                // may call the _write() callback in the same tick, so that we don't
                // end up in an overlapped onwrite situation.
                this.bufferProcessing = false;

                // the callback that's passed to _write(chunk,cb)
                this.onwrite = function(er) {
                  onwrite(stream, er);
                };

                // the callback that the user supplies to write(chunk,encoding,cb)
                this.writecb = null;

                // the amount that is being written when _write is called.
                this.writelen = 0;

                this.bufferedRequest = null;
                this.lastBufferedRequest = null;

                // number of pending user-supplied write callbacks
                // this must be 0 before 'finish' can be emitted
                this.pendingcb = 0;

                // emit prefinish if the only thing we're waiting for is _write cbs
                // This is relevant for synchronous Transform streams
                this.prefinished = false;

                // True if the error was already emitted and should not be thrown again
                this.errorEmitted = false;

                // count buffered requests
                this.bufferedRequestCount = 0;

                // allocate the first CorkedRequest, there is always
                // one allocated and free to use, and we maintain at most two
                this.corkedRequestsFree = new CorkedRequest(this);
              }

              WritableState.prototype.getBuffer = function getBuffer() {
                var current = this.bufferedRequest;
                var out = [];
                while (current) {
                  out.push(current);
                  current = current.next;
                }
                return out;
              };

              (function() {
                try {
                  Object.defineProperty(WritableState.prototype, 'buffer', {
                    get: internalUtil.deprecate(
                      function() {
                        return this.getBuffer();
                      },
                      '_writableState.buffer is deprecated. Use _writableState.getBuffer ' +
                        'instead.',
                      'DEP0003'
                    ),
                  });
                } catch (_) {}
              })();

              // Test _writableState for inheritance to account for Duplex streams,
              // whose prototype chain only points to Readable.
              var realHasInstance;
              if (
                typeof Symbol === 'function' &&
                Symbol.hasInstance &&
                typeof Function.prototype[Symbol.hasInstance] === 'function'
              ) {
                realHasInstance = Function.prototype[Symbol.hasInstance];
                Object.defineProperty(Writable, Symbol.hasInstance, {
                  value: function(object) {
                    if (realHasInstance.call(this, object)) return true;

                    return object && object._writableState instanceof WritableState;
                  },
                });
              } else {
                realHasInstance = function(object) {
                  return object instanceof this;
                };
              }

              function Writable(options) {
                Duplex =
                  Duplex ||
                  __webpack_require__(
                    /*! ./_stream_duplex */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
                  );

                // Writable ctor is applied to Duplexes, too.
                // `realHasInstance` is necessary because using plain `instanceof`
                // would return false, as no `_writableState` property is attached.

                // Trying to use the custom `instanceof` for Writable here will also break the
                // Node.js LazyTransform implementation, which has a non-trivial getter for
                // `_writableState` that would lead to infinite recursion.
                if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
                  return new Writable(options);
                }

                this._writableState = new WritableState(options, this);

                // legacy.
                this.writable = true;

                if (options) {
                  if (typeof options.write === 'function') this._write = options.write;

                  if (typeof options.writev === 'function') this._writev = options.writev;

                  if (typeof options.destroy === 'function')
                    this._destroy = options.destroy;

                  if (typeof options.final === 'function') this._final = options.final;
                }

                Stream.call(this);
              }

              // Otherwise people can pipe Writable streams, which is just wrong.
              Writable.prototype.pipe = function() {
                this.emit('error', new Error('Cannot pipe, not readable'));
              };

              function writeAfterEnd(stream, cb) {
                var er = new Error('write after end');
                // TODO: defer error events consistently everywhere, not just the cb
                stream.emit('error', er);
                processNextTick(cb, er);
              }

              // Checks that a user-supplied chunk is valid, especially for the particular
              // mode the stream is in. Currently this means that `null` is never accepted
              // and undefined/non-string values are only allowed in object mode.
              function validChunk(stream, state, chunk, cb) {
                var valid = true;
                var er = false;

                if (chunk === null) {
                  er = new TypeError('May not write null values to stream');
                } else if (
                  typeof chunk !== 'string' &&
                  chunk !== undefined &&
                  !state.objectMode
                ) {
                  er = new TypeError('Invalid non-string/buffer chunk');
                }
                if (er) {
                  stream.emit('error', er);
                  processNextTick(cb, er);
                  valid = false;
                }
                return valid;
              }

              Writable.prototype.write = function(chunk, encoding, cb) {
                var state = this._writableState;
                var ret = false;
                var isBuf = _isUint8Array(chunk) && !state.objectMode;

                if (isBuf && !Buffer.isBuffer(chunk)) {
                  chunk = _uint8ArrayToBuffer(chunk);
                }

                if (typeof encoding === 'function') {
                  cb = encoding;
                  encoding = null;
                }

                if (isBuf) encoding = 'buffer';
                else if (!encoding) encoding = state.defaultEncoding;

                if (typeof cb !== 'function') cb = nop;

                if (state.ended) writeAfterEnd(this, cb);
                else if (isBuf || validChunk(this, state, chunk, cb)) {
                  state.pendingcb++;
                  ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                }

                return ret;
              };

              Writable.prototype.cork = function() {
                var state = this._writableState;

                state.corked++;
              };

              Writable.prototype.uncork = function() {
                var state = this._writableState;

                if (state.corked) {
                  state.corked--;

                  if (
                    !state.writing &&
                    !state.corked &&
                    !state.finished &&
                    !state.bufferProcessing &&
                    state.bufferedRequest
                  )
                    clearBuffer(this, state);
                }
              };

              Writable.prototype.setDefaultEncoding = function setDefaultEncoding(
                encoding
              ) {
                // node::ParseEncoding() requires lower case.
                if (typeof encoding === 'string') encoding = encoding.toLowerCase();
                if (
                  !(
                    [
                      'hex',
                      'utf8',
                      'utf-8',
                      'ascii',
                      'binary',
                      'base64',
                      'ucs2',
                      'ucs-2',
                      'utf16le',
                      'utf-16le',
                      'raw',
                    ].indexOf((encoding + '').toLowerCase()) > -1
                  )
                )
                  throw new TypeError('Unknown encoding: ' + encoding);
                this._writableState.defaultEncoding = encoding;
                return this;
              };

              function decodeChunk(state, chunk, encoding) {
                if (
                  !state.objectMode &&
                  state.decodeStrings !== false &&
                  typeof chunk === 'string'
                ) {
                  chunk = Buffer.from(chunk, encoding);
                }
                return chunk;
              }

              // if we're already writing something, then just put this
              // in the queue, and wait our turn.  Otherwise, call _write
              // If we return false, then we need a drain event, so set that flag.
              function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                if (!isBuf) {
                  var newChunk = decodeChunk(state, chunk, encoding);
                  if (chunk !== newChunk) {
                    isBuf = true;
                    encoding = 'buffer';
                    chunk = newChunk;
                  }
                }
                var len = state.objectMode ? 1 : chunk.length;

                state.length += len;

                var ret = state.length < state.highWaterMark;
                // we must ensure that previous needDrain will not be reset to false.
                if (!ret) state.needDrain = true;

                if (state.writing || state.corked) {
                  var last = state.lastBufferedRequest;
                  state.lastBufferedRequest = {
                    chunk: chunk,
                    encoding: encoding,
                    isBuf: isBuf,
                    callback: cb,
                    next: null,
                  };
                  if (last) {
                    last.next = state.lastBufferedRequest;
                  } else {
                    state.bufferedRequest = state.lastBufferedRequest;
                  }
                  state.bufferedRequestCount += 1;
                } else {
                  doWrite(stream, state, false, len, chunk, encoding, cb);
                }

                return ret;
              }

              function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                state.writelen = len;
                state.writecb = cb;
                state.writing = true;
                state.sync = true;
                if (writev) stream._writev(chunk, state.onwrite);
                else stream._write(chunk, encoding, state.onwrite);
                state.sync = false;
              }

              function onwriteError(stream, state, sync, er, cb) {
                --state.pendingcb;

                if (sync) {
                  // defer the callback if we are being called synchronously
                  // to avoid piling up things on the stack
                  processNextTick(cb, er);
                  // this can emit finish, and it will always happen
                  // after error
                  processNextTick(finishMaybe, stream, state);
                  stream._writableState.errorEmitted = true;
                  stream.emit('error', er);
                } else {
                  // the caller expect this to happen before if
                  // it is async
                  cb(er);
                  stream._writableState.errorEmitted = true;
                  stream.emit('error', er);
                  // this can emit finish, but finish must
                  // always follow error
                  finishMaybe(stream, state);
                }
              }

              function onwriteStateUpdate(state) {
                state.writing = false;
                state.writecb = null;
                state.length -= state.writelen;
                state.writelen = 0;
              }

              function onwrite(stream, er) {
                var state = stream._writableState;
                var sync = state.sync;
                var cb = state.writecb;

                onwriteStateUpdate(state);

                if (er) onwriteError(stream, state, sync, er, cb);
                else {
                  // Check if we're actually ready to finish, but don't emit yet
                  var finished = needFinish(state);

                  if (
                    !finished &&
                    !state.corked &&
                    !state.bufferProcessing &&
                    state.bufferedRequest
                  ) {
                    clearBuffer(stream, state);
                  }

                  if (sync) {
                    /*<replacement>*/
                    asyncWrite(afterWrite, stream, state, finished, cb);
                    /*</replacement>*/
                  } else {
                    afterWrite(stream, state, finished, cb);
                  }
                }
              }

              function afterWrite(stream, state, finished, cb) {
                if (!finished) onwriteDrain(stream, state);
                state.pendingcb--;
                cb();
                finishMaybe(stream, state);
              }

              // Must force callback to be called on nextTick, so that we don't
              // emit 'drain' before the write() consumer gets the 'false' return
              // value, and has a chance to attach a 'drain' listener.
              function onwriteDrain(stream, state) {
                if (state.length === 0 && state.needDrain) {
                  state.needDrain = false;
                  stream.emit('drain');
                }
              }

              // if there's something in the buffer waiting, then process it
              function clearBuffer(stream, state) {
                state.bufferProcessing = true;
                var entry = state.bufferedRequest;

                if (stream._writev && entry && entry.next) {
                  // Fast case, write everything using _writev()
                  var l = state.bufferedRequestCount;
                  var buffer = new Array(l);
                  var holder = state.corkedRequestsFree;
                  holder.entry = entry;

                  var count = 0;
                  var allBuffers = true;
                  while (entry) {
                    buffer[count] = entry;
                    if (!entry.isBuf) allBuffers = false;
                    entry = entry.next;
                    count += 1;
                  }
                  buffer.allBuffers = allBuffers;

                  doWrite(stream, state, true, state.length, buffer, '', holder.finish);

                  // doWrite is almost always async, defer these to save a bit of time
                  // as the hot path ends with doWrite
                  state.pendingcb++;
                  state.lastBufferedRequest = null;
                  if (holder.next) {
                    state.corkedRequestsFree = holder.next;
                    holder.next = null;
                  } else {
                    state.corkedRequestsFree = new CorkedRequest(state);
                  }
                } else {
                  // Slow case, write chunks one-by-one
                  while (entry) {
                    var chunk = entry.chunk;
                    var encoding = entry.encoding;
                    var cb = entry.callback;
                    var len = state.objectMode ? 1 : chunk.length;

                    doWrite(stream, state, false, len, chunk, encoding, cb);
                    entry = entry.next;
                    // if we didn't call the onwrite immediately, then
                    // it means that we need to wait until it does.
                    // also, that means that the chunk and cb are currently
                    // being processed, so move the buffer counter past them.
                    if (state.writing) {
                      break;
                    }
                  }

                  if (entry === null) state.lastBufferedRequest = null;
                }

                state.bufferedRequestCount = 0;
                state.bufferedRequest = entry;
                state.bufferProcessing = false;
              }

              Writable.prototype._write = function(chunk, encoding, cb) {
                cb(new Error('_write() is not implemented'));
              };

              Writable.prototype._writev = null;

              Writable.prototype.end = function(chunk, encoding, cb) {
                var state = this._writableState;

                if (typeof chunk === 'function') {
                  cb = chunk;
                  chunk = null;
                  encoding = null;
                } else if (typeof encoding === 'function') {
                  cb = encoding;
                  encoding = null;
                }

                if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

                // .end() fully uncorks
                if (state.corked) {
                  state.corked = 1;
                  this.uncork();
                }

                // ignore unnecessary end() calls.
                if (!state.ending && !state.finished) endWritable(this, state, cb);
              };

              function needFinish(state) {
                return (
                  state.ending &&
                  state.length === 0 &&
                  state.bufferedRequest === null &&
                  !state.finished &&
                  !state.writing
                );
              }
              function callFinal(stream, state) {
                stream._final(function(err) {
                  state.pendingcb--;
                  if (err) {
                    stream.emit('error', err);
                  }
                  state.prefinished = true;
                  stream.emit('prefinish');
                  finishMaybe(stream, state);
                });
              }
              function prefinish(stream, state) {
                if (!state.prefinished && !state.finalCalled) {
                  if (typeof stream._final === 'function') {
                    state.pendingcb++;
                    state.finalCalled = true;
                    processNextTick(callFinal, stream, state);
                  } else {
                    state.prefinished = true;
                    stream.emit('prefinish');
                  }
                }
              }

              function finishMaybe(stream, state) {
                var need = needFinish(state);
                if (need) {
                  prefinish(stream, state);
                  if (state.pendingcb === 0) {
                    state.finished = true;
                    stream.emit('finish');
                  }
                }
                return need;
              }

              function endWritable(stream, state, cb) {
                state.ending = true;
                finishMaybe(stream, state);
                if (cb) {
                  if (state.finished) processNextTick(cb);
                  else stream.once('finish', cb);
                }
                state.ended = true;
                stream.writable = false;
              }

              function onCorkedFinish(corkReq, state, err) {
                var entry = corkReq.entry;
                corkReq.entry = null;
                while (entry) {
                  var cb = entry.callback;
                  state.pendingcb--;
                  cb(err);
                  entry = entry.next;
                }
                if (state.corkedRequestsFree) {
                  state.corkedRequestsFree.next = corkReq;
                } else {
                  state.corkedRequestsFree = corkReq;
                }
              }

              Object.defineProperty(Writable.prototype, 'destroyed', {
                get: function() {
                  if (this._writableState === undefined) {
                    return false;
                  }
                  return this._writableState.destroyed;
                },
                set: function(value) {
                  // we ignore the value if the stream
                  // has not been initialized yet
                  if (!this._writableState) {
                    return;
                  }

                  // backward compatibility, the user is explicitly
                  // managing destroyed
                  this._writableState.destroyed = value;
                },
              });

              Writable.prototype.destroy = destroyImpl.destroy;
              Writable.prototype._undestroy = destroyImpl.undestroy;
              Writable.prototype._destroy = function(err, cb) {
                this.end();
                cb(err);
              };
              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../../../../process/browser.js */ '../node_modules/process/browser.js'
              ),
              __webpack_require__(
                /*! ./../../../../timers-browserify/main.js */ '../node_modules/timers-browserify/main.js'
              ).setImmediate,
              __webpack_require__(
                /*! ./../../../../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/BufferList.js':
          /*!*********************************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*********************************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            /*<replacement>*/

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            var Buffer = __webpack_require__(
              /*! safe-buffer */ '../node_modules/safe-buffer/index.js'
            ).Buffer;
            /*</replacement>*/

            function copyBuffer(src, target, offset) {
              src.copy(target, offset);
            }

            module.exports = (function() {
              function BufferList() {
                _classCallCheck(this, BufferList);

                this.head = null;
                this.tail = null;
                this.length = 0;
              }

              BufferList.prototype.push = function push(v) {
                var entry = {data: v, next: null};
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
              };

              BufferList.prototype.unshift = function unshift(v) {
                var entry = {data: v, next: this.head};
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
              };

              BufferList.prototype.shift = function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
              };

              BufferList.prototype.clear = function clear() {
                this.head = this.tail = null;
                this.length = 0;
              };

              BufferList.prototype.join = function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while ((p = p.next)) {
                  ret += s + p.data;
                }
                return ret;
              };

              BufferList.prototype.concat = function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                if (this.length === 1) return this.head.data;
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while (p) {
                  copyBuffer(p.data, ret, i);
                  i += p.data.length;
                  p = p.next;
                }
                return ret;
              };

              return BufferList;
            })();

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js':
          /*!******************************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \******************************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            /*<replacement>*/

            var processNextTick = __webpack_require__(
              /*! process-nextick-args */ '../node_modules/stream-browserify/node_modules/process-nextick-args/index.js'
            );
            /*</replacement>*/

            // undocumented cb() API, needed for core, not for public API
            function destroy(err, cb) {
              var _this = this;

              var readableDestroyed =
                this._readableState && this._readableState.destroyed;
              var writableDestroyed =
                this._writableState && this._writableState.destroyed;

              if (readableDestroyed || writableDestroyed) {
                if (cb) {
                  cb(err);
                } else if (
                  err &&
                  (!this._writableState || !this._writableState.errorEmitted)
                ) {
                  processNextTick(emitErrorNT, this, err);
                }
                return;
              }

              // we set destroyed to true before firing error callbacks in order
              // to make it re-entrance safe in case destroy() is called within callbacks

              if (this._readableState) {
                this._readableState.destroyed = true;
              }

              // if this is a duplex stream mark the writable part as destroyed as well
              if (this._writableState) {
                this._writableState.destroyed = true;
              }

              this._destroy(err || null, function(err) {
                if (!cb && err) {
                  processNextTick(emitErrorNT, _this, err);
                  if (_this._writableState) {
                    _this._writableState.errorEmitted = true;
                  }
                } else if (cb) {
                  cb(err);
                }
              });
            }

            function undestroy() {
              if (this._readableState) {
                this._readableState.destroyed = false;
                this._readableState.reading = false;
                this._readableState.ended = false;
                this._readableState.endEmitted = false;
              }

              if (this._writableState) {
                this._writableState.destroyed = false;
                this._writableState.ended = false;
                this._writableState.ending = false;
                this._writableState.finished = false;
                this._writableState.errorEmitted = false;
              }
            }

            function emitErrorNT(self, err) {
              self.emit('error', err);
            }

            module.exports = {
              destroy: destroy,
              undestroy: undestroy,
            };

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js':
          /*!*************************************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*************************************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
              /*! events */ '../node_modules/events/events.js'
            ).EventEmitter;

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/passthrough.js':
          /*!*************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/passthrough.js ***!
  \*************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
              /*! ./readable */ '../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
            ).PassThrough;

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js':
          /*!******************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js ***!
  \******************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(
              /*! ./lib/_stream_readable.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js'
            );
            exports.Stream = exports;
            exports.Readable = exports;
            exports.Writable = __webpack_require__(
              /*! ./lib/_stream_writable.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
            );
            exports.Duplex = __webpack_require__(
              /*! ./lib/_stream_duplex.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
            );
            exports.Transform = __webpack_require__(
              /*! ./lib/_stream_transform.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js'
            );
            exports.PassThrough = __webpack_require__(
              /*! ./lib/_stream_passthrough.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js'
            );

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/transform.js':
          /*!***********************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/transform.js ***!
  \***********************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
              /*! ./readable */ '../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
            ).Transform;

            /***/
          },

        /***/ '../node_modules/stream-browserify/node_modules/readable-stream/writable-browser.js':
          /*!******************************************************************************************!*\
  !*** ../node_modules/stream-browserify/node_modules/readable-stream/writable-browser.js ***!
  \******************************************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
              /*! ./lib/_stream_writable.js */ '../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
            );

            /***/
          },

        /***/ '../node_modules/string_decoder/lib/string_decoder.js':
          /*!************************************************************!*\
  !*** ../node_modules/string_decoder/lib/string_decoder.js ***!
  \************************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            /*<replacement>*/

            var Buffer = __webpack_require__(
              /*! safe-buffer */ '../node_modules/safe-buffer/index.js'
            ).Buffer;
            /*</replacement>*/

            var isEncoding =
              Buffer.isEncoding ||
              function(encoding) {
                encoding = '' + encoding;
                switch (encoding && encoding.toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                  case 'raw':
                    return true;
                  default:
                    return false;
                }
              };

            function _normalizeEncoding(enc) {
              if (!enc) return 'utf8';
              var retried;
              while (true) {
                switch (enc) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return enc;
                  default:
                    if (retried) return; // undefined
                    enc = ('' + enc).toLowerCase();
                    retried = true;
                }
              }
            }

            // Do not cache `Buffer.isEncoding` when checking encoding names as some
            // modules monkey-patch it to support additional encodings
            function normalizeEncoding(enc) {
              var nenc = _normalizeEncoding(enc);
              if (
                typeof nenc !== 'string' &&
                (Buffer.isEncoding === isEncoding || !isEncoding(enc))
              )
                throw new Error('Unknown encoding: ' + enc);
              return nenc || enc;
            }

            // StringDecoder provides an interface for efficiently splitting a series of
            // buffers into a series of JS strings without breaking apart multi-byte
            // characters.
            exports.StringDecoder = StringDecoder;
            function StringDecoder(encoding) {
              this.encoding = normalizeEncoding(encoding);
              var nb;
              switch (this.encoding) {
                case 'utf16le':
                  this.text = utf16Text;
                  this.end = utf16End;
                  nb = 4;
                  break;
                case 'utf8':
                  this.fillLast = utf8FillLast;
                  nb = 4;
                  break;
                case 'base64':
                  this.text = base64Text;
                  this.end = base64End;
                  nb = 3;
                  break;
                default:
                  this.write = simpleWrite;
                  this.end = simpleEnd;
                  return;
              }
              this.lastNeed = 0;
              this.lastTotal = 0;
              this.lastChar = Buffer.allocUnsafe(nb);
            }

            StringDecoder.prototype.write = function(buf) {
              if (buf.length === 0) return '';
              var r;
              var i;
              if (this.lastNeed) {
                r = this.fillLast(buf);
                if (r === undefined) return '';
                i = this.lastNeed;
                this.lastNeed = 0;
              } else {
                i = 0;
              }
              if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
              return r || '';
            };

            StringDecoder.prototype.end = utf8End;

            // Returns only complete characters in a Buffer
            StringDecoder.prototype.text = utf8Text;

            // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
            StringDecoder.prototype.fillLast = function(buf) {
              if (this.lastNeed <= buf.length) {
                buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
              }
              buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
              this.lastNeed -= buf.length;
            };

            // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
            // continuation byte. If an invalid byte is detected, -2 is returned.
            function utf8CheckByte(byte) {
              if (byte <= 0x7f) return 0;
              else if (byte >> 5 === 0x06) return 2;
              else if (byte >> 4 === 0x0e) return 3;
              else if (byte >> 3 === 0x1e) return 4;
              return byte >> 6 === 0x02 ? -1 : -2;
            }

            // Checks at most 3 bytes at the end of a Buffer in order to detect an
            // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
            // needed to complete the UTF-8 character (if applicable) are returned.
            function utf8CheckIncomplete(self, buf, i) {
              var j = buf.length - 1;
              if (j < i) return 0;
              var nb = utf8CheckByte(buf[j]);
              if (nb >= 0) {
                if (nb > 0) self.lastNeed = nb - 1;
                return nb;
              }
              if (--j < i || nb === -2) return 0;
              nb = utf8CheckByte(buf[j]);
              if (nb >= 0) {
                if (nb > 0) self.lastNeed = nb - 2;
                return nb;
              }
              if (--j < i || nb === -2) return 0;
              nb = utf8CheckByte(buf[j]);
              if (nb >= 0) {
                if (nb > 0) {
                  if (nb === 2) nb = 0;
                  else self.lastNeed = nb - 3;
                }
                return nb;
              }
              return 0;
            }

            // Validates as many continuation bytes for a multi-byte UTF-8 character as
            // needed or are available. If we see a non-continuation byte where we expect
            // one, we "replace" the validated continuation bytes we've seen so far with
            // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
            // behavior. The continuation byte check is included three times in the case
            // where all of the continuation bytes for a character exist in the same buffer.
            // It is also done this way as a slight performance increase instead of using a
            // loop.
            function utf8CheckExtraBytes(self, buf, p) {
              if ((buf[0] & 0xc0) !== 0x80) {
                self.lastNeed = 0;
                return '\ufffd';
              }
              if (self.lastNeed > 1 && buf.length > 1) {
                if ((buf[1] & 0xc0) !== 0x80) {
                  self.lastNeed = 1;
                  return '\ufffd';
                }
                if (self.lastNeed > 2 && buf.length > 2) {
                  if ((buf[2] & 0xc0) !== 0x80) {
                    self.lastNeed = 2;
                    return '\ufffd';
                  }
                }
              }
            }

            // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
            function utf8FillLast(buf) {
              var p = this.lastTotal - this.lastNeed;
              var r = utf8CheckExtraBytes(this, buf, p);
              if (r !== undefined) return r;
              if (this.lastNeed <= buf.length) {
                buf.copy(this.lastChar, p, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
              }
              buf.copy(this.lastChar, p, 0, buf.length);
              this.lastNeed -= buf.length;
            }

            // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
            // partial character, the character's bytes are buffered until the required
            // number of bytes are available.
            function utf8Text(buf, i) {
              var total = utf8CheckIncomplete(this, buf, i);
              if (!this.lastNeed) return buf.toString('utf8', i);
              this.lastTotal = total;
              var end = buf.length - (total - this.lastNeed);
              buf.copy(this.lastChar, 0, end);
              return buf.toString('utf8', i, end);
            }

            // For UTF-8, a replacement character is added when ending on a partial
            // character.
            function utf8End(buf) {
              var r = buf && buf.length ? this.write(buf) : '';
              if (this.lastNeed) return r + '\ufffd';
              return r;
            }

            // UTF-16LE typically needs two bytes per character, but even if we have an even
            // number of bytes available, we need to check if we end on a leading/high
            // surrogate. In that case, we need to wait for the next two bytes in order to
            // decode the last character properly.
            function utf16Text(buf, i) {
              if ((buf.length - i) % 2 === 0) {
                var r = buf.toString('utf16le', i);
                if (r) {
                  var c = r.charCodeAt(r.length - 1);
                  if (c >= 0xd800 && c <= 0xdbff) {
                    this.lastNeed = 2;
                    this.lastTotal = 4;
                    this.lastChar[0] = buf[buf.length - 2];
                    this.lastChar[1] = buf[buf.length - 1];
                    return r.slice(0, -1);
                  }
                }
                return r;
              }
              this.lastNeed = 1;
              this.lastTotal = 2;
              this.lastChar[0] = buf[buf.length - 1];
              return buf.toString('utf16le', i, buf.length - 1);
            }

            // For UTF-16LE we do not explicitly append special replacement characters if we
            // end on a partial character, we simply let v8 handle that.
            function utf16End(buf) {
              var r = buf && buf.length ? this.write(buf) : '';
              if (this.lastNeed) {
                var end = this.lastTotal - this.lastNeed;
                return r + this.lastChar.toString('utf16le', 0, end);
              }
              return r;
            }

            function base64Text(buf, i) {
              var n = (buf.length - i) % 3;
              if (n === 0) return buf.toString('base64', i);
              this.lastNeed = 3 - n;
              this.lastTotal = 3;
              if (n === 1) {
                this.lastChar[0] = buf[buf.length - 1];
              } else {
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
              }
              return buf.toString('base64', i, buf.length - n);
            }

            function base64End(buf) {
              var r = buf && buf.length ? this.write(buf) : '';
              if (this.lastNeed)
                return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
              return r;
            }

            // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
            function simpleWrite(buf) {
              return buf.toString(this.encoding);
            }

            function simpleEnd(buf) {
              return buf && buf.length ? this.write(buf) : '';
            }

            /***/
          },

        /***/ '../node_modules/style-loader/lib/addStyles.js':
          /*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

            var stylesInDom = {};

            var memoize = function(fn) {
              var memo;

              return function() {
                if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
                return memo;
              };
            };

            var isOldIE = memoize(function() {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              return window && document && document.all && !window.atob;
            });

            var getTarget = function(target) {
              return document.querySelector(target);
            };

            var getElement = (function(fn) {
              var memo = {};

              return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                  return target();
                }
                if (typeof memo[target] === 'undefined') {
                  var styleTarget = getTarget.call(this, target);
                  // Special case to return head of iframe instead of iframe itself
                  if (
                    window.HTMLIFrameElement &&
                    styleTarget instanceof window.HTMLIFrameElement
                  ) {
                    try {
                      // This will throw an exception if access to iframe is blocked
                      // due to cross-origin restrictions
                      styleTarget = styleTarget.contentDocument.head;
                    } catch (e) {
                      styleTarget = null;
                    }
                  }
                  memo[target] = styleTarget;
                }
                return memo[target];
              };
            })();

            var singleton = null;
            var singletonCounter = 0;
            var stylesInsertedAtTop = [];

            var fixUrls = __webpack_require__(
              /*! ./urls */ '../node_modules/style-loader/lib/urls.js'
            );

            module.exports = function(list, options) {
              if (typeof DEBUG !== 'undefined' && DEBUG) {
                if (typeof document !== 'object')
                  throw new Error(
                    'The style-loader cannot be used in a non-browser environment'
                  );
              }

              options = options || {};

              options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

              // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
              // tags it will allow on a page
              if (!options.singleton && typeof options.singleton !== 'boolean')
                options.singleton = isOldIE();

              // By default, add <style> tags to the <head> element
              if (!options.insertInto) options.insertInto = 'head';

              // By default, add <style> tags to the bottom of the target
              if (!options.insertAt) options.insertAt = 'bottom';

              var styles = listToStyles(list, options);

              addStylesToDom(styles, options);

              return function update(newList) {
                var mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                  var item = styles[i];
                  var domStyle = stylesInDom[item.id];

                  domStyle.refs--;
                  mayRemove.push(domStyle);
                }

                if (newList) {
                  var newStyles = listToStyles(newList, options);
                  addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                  var domStyle = mayRemove[i];

                  if (domStyle.refs === 0) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                    delete stylesInDom[domStyle.id];
                  }
                }
              };
            };

            function addStylesToDom(styles, options) {
              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                if (domStyle) {
                  domStyle.refs++;

                  for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                  }

                  for (; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                  }
                } else {
                  var parts = [];

                  for (var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                  }

                  stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
                }
              }
            }

            function listToStyles(list, options) {
              var styles = [];
              var newStyles = {};

              for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {css: css, media: media, sourceMap: sourceMap};

                if (!newStyles[id])
                  styles.push((newStyles[id] = {id: id, parts: [part]}));
                else newStyles[id].parts.push(part);
              }

              return styles;
            }

            function insertStyleElement(options, style) {
              var target = getElement(options.insertInto);

              if (!target) {
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                );
              }

              var lastStyleElementInsertedAtTop =
                stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

              if (options.insertAt === 'top') {
                if (!lastStyleElementInsertedAtTop) {
                  target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                  target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                  target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
              } else if (options.insertAt === 'bottom') {
                target.appendChild(style);
              } else if (
                typeof options.insertAt === 'object' &&
                options.insertAt.before
              ) {
                var nextSibling = getElement(
                  options.insertInto + ' ' + options.insertAt.before
                );
                target.insertBefore(style, nextSibling);
              } else {
                throw new Error(
                  "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                );
              }
            }

            function removeStyleElement(style) {
              if (style.parentNode === null) return false;
              style.parentNode.removeChild(style);

              var idx = stylesInsertedAtTop.indexOf(style);
              if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
              }
            }

            function createStyleElement(options) {
              var style = document.createElement('style');

              if (options.attrs.type === undefined) {
                options.attrs.type = 'text/css';
              }

              addAttrs(style, options.attrs);
              insertStyleElement(options, style);

              return style;
            }

            function createLinkElement(options) {
              var link = document.createElement('link');

              if (options.attrs.type === undefined) {
                options.attrs.type = 'text/css';
              }
              options.attrs.rel = 'stylesheet';

              addAttrs(link, options.attrs);
              insertStyleElement(options, link);

              return link;
            }

            function addAttrs(el, attrs) {
              Object.keys(attrs).forEach(function(key) {
                el.setAttribute(key, attrs[key]);
              });
            }

            function addStyle(obj, options) {
              var style, update, remove, result;

              // If a transform function was defined, run it on the css
              if (options.transform && obj.css) {
                result = options.transform(obj.css);

                if (result) {
                  // If transform returns a value, use that instead of the original css.
                  // This allows running runtime transformations on the css.
                  obj.css = result;
                } else {
                  // If the transform function returns a falsy value, don't add this css.
                  // This allows conditional loading of css
                  return function() {
                    // noop
                  };
                }
              }

              if (options.singleton) {
                var styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);
              } else if (
                obj.sourceMap &&
                typeof URL === 'function' &&
                typeof URL.createObjectURL === 'function' &&
                typeof URL.revokeObjectURL === 'function' &&
                typeof Blob === 'function' &&
                typeof btoa === 'function'
              ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function() {
                  removeStyleElement(style);

                  if (style.href) URL.revokeObjectURL(style.href);
                };
              } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function() {
                  removeStyleElement(style);
                };
              }

              update(obj);

              return function updateStyle(newObj) {
                if (newObj) {
                  if (
                    newObj.css === obj.css &&
                    newObj.media === obj.media &&
                    newObj.sourceMap === obj.sourceMap
                  ) {
                    return;
                  }

                  update((obj = newObj));
                } else {
                  remove();
                }
              };
            }

            var replaceText = (function() {
              var textStore = [];

              return function(index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
              };
            })();

            function applyToSingletonTag(style, index, remove, obj) {
              var css = remove ? '' : obj.css;

              if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
              } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) style.removeChild(childNodes[index]);

                if (childNodes.length) {
                  style.insertBefore(cssNode, childNodes[index]);
                } else {
                  style.appendChild(cssNode);
                }
              }
            }

            function applyToTag(style, obj) {
              var css = obj.css;
              var media = obj.media;

              if (media) {
                style.setAttribute('media', media);
              }

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                while (style.firstChild) {
                  style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
              }
            }

            function updateLink(link, options, obj) {
              var css = obj.css;
              var sourceMap = obj.sourceMap;

              /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
              var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

              if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
              }

              if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
                  ' */';
              }

              var blob = new Blob([css], {type: 'text/css'});

              var oldSrc = link.href;

              link.href = URL.createObjectURL(blob);

              if (oldSrc) URL.revokeObjectURL(oldSrc);
            }

            /***/
          },

        /***/ '../node_modules/style-loader/lib/urls.js':
          /*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /**
             * When source maps are enabled, `style-loader` uses a link element with a data-uri to
             * embed the css on the page. This breaks all relative urls because now they are relative to a
             * bundle instead of the current page.
             *
             * One solution is to only use full urls, but that may be impossible.
             *
             * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
             *
             * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
             *
             */

            module.exports = function(css) {
              // get current location
              var location = typeof window !== 'undefined' && window.location;

              if (!location) {
                throw new Error('fixUrls requires window.location');
              }

              // blank or null?
              if (!css || typeof css !== 'string') {
                return css;
              }

              var baseUrl = location.protocol + '//' + location.host;
              var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

              // convert each url(...)
              /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
              var fixedCss = css.replace(
                /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function(fullMatch, origUrl) {
                  // strip quotes (if they exist)
                  var unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, function(o, $1) {
                      return $1;
                    })
                    .replace(/^'(.*)'$/, function(o, $1) {
                      return $1;
                    });

                  // already a full url? no change
                  if (
                    /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                      unquotedOrigUrl
                    )
                  ) {
                    return fullMatch;
                  }

                  // convert the url to a full url
                  var newUrl;

                  if (unquotedOrigUrl.indexOf('//') === 0) {
                    //TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                  } else if (unquotedOrigUrl.indexOf('/') === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                  } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
                  }

                  // send back the fixed url(...)
                  return 'url(' + JSON.stringify(newUrl) + ')';
                }
              );

              // send back the fixed css
              return fixedCss;
            };

            /***/
          },

        /***/ '../node_modules/timers-browserify/main.js':
          /*!*************************************************!*\
  !*** ../node_modules/timers-browserify/main.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
              var scope =
                (typeof global !== 'undefined' && global) ||
                (typeof self !== 'undefined' && self) ||
                window;
              var apply = Function.prototype.apply;

              // DOM APIs, for completeness

              exports.setTimeout = function() {
                return new Timeout(
                  apply.call(setTimeout, scope, arguments),
                  clearTimeout
                );
              };
              exports.setInterval = function() {
                return new Timeout(
                  apply.call(setInterval, scope, arguments),
                  clearInterval
                );
              };
              exports.clearTimeout = exports.clearInterval = function(timeout) {
                if (timeout) {
                  timeout.close();
                }
              };

              function Timeout(id, clearFn) {
                this._id = id;
                this._clearFn = clearFn;
              }
              Timeout.prototype.unref = Timeout.prototype.ref = function() {};
              Timeout.prototype.close = function() {
                this._clearFn.call(scope, this._id);
              };

              // Does not start the time, just sets up the members needed.
              exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = msecs;
              };

              exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = -1;
              };

              exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);

                var msecs = item._idleTimeout;
                if (msecs >= 0) {
                  item._idleTimeoutId = setTimeout(function onTimeout() {
                    if (item._onTimeout) item._onTimeout();
                  }, msecs);
                }
              };

              // setimmediate attaches itself to the global object
              __webpack_require__(
                /*! setimmediate */ '../node_modules/setimmediate/setImmediate.js'
              );
              // On some exotic environments, it's not clear which object `setimmediate` was
              // able to install onto.  Search each possibility in the same order as the
              // `setimmediate` library.
              exports.setImmediate =
                (typeof self !== 'undefined' && self.setImmediate) ||
                (typeof global !== 'undefined' && global.setImmediate) ||
                (this && this.setImmediate);
              exports.clearImmediate =
                (typeof self !== 'undefined' && self.clearImmediate) ||
                (typeof global !== 'undefined' && global.clearImmediate) ||
                (this && this.clearImmediate);

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/util-deprecate/browser.js':
          /*!*************************************************!*\
  !*** ../node_modules/util-deprecate/browser.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
              /**
               * Module exports.
               */

              module.exports = deprecate;

              /**
               * Mark that a method should not be used.
               * Returns a modified function which warns once by default.
               *
               * If `localStorage.noDeprecation = true` is set, then it is a no-op.
               *
               * If `localStorage.throwDeprecation = true` is set, then deprecated functions
               * will throw an Error when invoked.
               *
               * If `localStorage.traceDeprecation = true` is set, then deprecated functions
               * will invoke `console.trace()` instead of `console.error()`.
               *
               * @param {Function} fn - the function to deprecate
               * @param {String} msg - the string to print to the console when `fn` is invoked
               * @returns {Function} a new "deprecated" version of `fn`
               * @api public
               */

              function deprecate(fn, msg) {
                if (config('noDeprecation')) {
                  return fn;
                }

                var warned = false;
                function deprecated() {
                  if (!warned) {
                    if (config('throwDeprecation')) {
                      throw new Error(msg);
                    } else if (config('traceDeprecation')) {
                      console.trace(msg);
                    } else {
                      console.warn(msg);
                    }
                    warned = true;
                  }
                  return fn.apply(this, arguments);
                }

                return deprecated;
              }

              /**
               * Checks `localStorage` for boolean values for the given `name`.
               *
               * @param {String} name
               * @returns {Boolean}
               * @api private
               */

              function config(name) {
                // accessing global.localStorage can trigger a DOMException in sandboxed iframes
                try {
                  if (!global.localStorage) return false;
                } catch (_) {
                  return false;
                }
                var val = global.localStorage[name];
                if (null == val) return false;
                return String(val).toLowerCase() === 'true';
              }

              /* WEBPACK VAR INJECTION */
            }.call(
              this,
              __webpack_require__(
                /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
              )
            ));

            /***/
          },

        /***/ '../node_modules/webpack/buildin/global.js':
          /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            var g;

            // This works in non-strict mode
            g = (function() {
              return this;
            })();

            try {
              // This works if eval is allowed (see CSP)
              g = g || Function('return this')() || (1, eval)('this');
            } catch (e) {
              // This works if the window reference is available
              if (typeof window === 'object') g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;

            /***/
          },

        /***/ '../node_modules/webpack/buildin/module.js':
          /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = function(module) {
              if (!module.webpackPolyfill) {
                module.deprecate = function() {};
                module.paths = [];
                // module.parent = undefined by default
                if (!module.children) module.children = [];
                Object.defineProperty(module, 'loaded', {
                  enumerable: true,
                  get: function() {
                    return module.l;
                  },
                });
                Object.defineProperty(module, 'id', {
                  enumerable: true,
                  get: function() {
                    return module.i;
                  },
                });
                module.webpackPolyfill = 1;
              }
              return module;
            };

            /***/
          },

        /***/ './datasource.ts':
          /*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });

            var _lodash = __webpack_require__(/*! lodash */ 'lodash');

            var _lodash2 = _interopRequireDefault(_lodash);

            var _datemath = __webpack_require__(
              /*! grafana/app/core/utils/datemath */ 'grafana/app/core/utils/datemath'
            );

            var dateMath = _interopRequireWildcard(_datemath);

            var _response_parser = __webpack_require__(
              /*! ./response_parser */ './response_parser.ts'
            );

            var _metric_find_query = __webpack_require__(
              /*! ./metric_find_query */ './metric_find_query.ts'
            );

            var _metric_find_query2 = _interopRequireDefault(_metric_find_query);

            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              } else {
                var newObj = {};
                if (obj != null) {
                  for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key))
                      newObj[key] = obj[key];
                  }
                }
                newObj.default = obj;
                return newObj;
              }
            }

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __assign =
              (undefined && undefined.__assign) ||
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                  }
                }
                return t;
              };

            var MAX_SERIES = 20;
            var InfluxDatasource = /** @class */ (function() {
              /** @ngInject */
              function InfluxDatasource(instanceSettings, backendSrv, templateSrv) {
                this.backendSrv = backendSrv;
                this.templateSrv = templateSrv;
                this.type = 'influxdb-flux';
                this.url = instanceSettings.url.trim();
                this.username = instanceSettings.username;
                this.password = instanceSettings.password;
                this.name = instanceSettings.name;
                this.orgName = instanceSettings.orgName || 'defaultorgname';
                this.basicAuth = instanceSettings.basicAuth;
                this.withCredentials = instanceSettings.withCredentials;
                this.interval = (instanceSettings.jsonData || {}).timeInterval;
                this.database = (instanceSettings.jsonData || {}).database;
                this.supportAnnotations = true;
                this.supportMetrics = true;
              }
              InfluxDatasource.prototype.prepareQueryTarget = function(target, options) {
                // Replace grafana variables
                var timeFilter = this.getTimeFilter(options);
                options.scopedVars.range = {value: timeFilter};
                var interpolated = this.templateSrv.replace(
                  target.query,
                  options.scopedVars
                );
                return __assign({}, target, {query: interpolated});
              };
              InfluxDatasource.prototype.query = function(options) {
                var _this = this;
                var queryTargets = options.targets
                  .filter(function(target) {
                    return target.query;
                  })
                  .map(function(target) {
                    return _this.prepareQueryTarget(target, options);
                  });
                if (queryTargets.length === 0) {
                  return Promise.resolve({data: []});
                }
                var queries = queryTargets.map(function(target) {
                  var query = target.query,
                    resultFormat = target.resultFormat;
                  if (resultFormat === 'table') {
                    return _this
                      ._seriesQuery(query, options)
                      .then(function(response) {
                        return (0, _response_parser.parseResults)(response.data);
                      })
                      .then(function(results) {
                        return results.map(_response_parser.getTableModelFromResult);
                      });
                  } else {
                    return _this
                      ._seriesQuery(query, options)
                      .then(function(response) {
                        return (0, _response_parser.parseResults)(response.data);
                      })
                      .then(function(results) {
                        return results.map(_response_parser.getTimeSeriesFromResult);
                      });
                  }
                });
                return Promise.all(queries).then(function(series) {
                  var seriesList = _lodash2.default
                    .flattenDeep(series)
                    .slice(0, MAX_SERIES);
                  return {data: seriesList};
                });
              };
              InfluxDatasource.prototype.annotationQuery = function(options) {
                if (!options.annotation.query) {
                  return Promise.reject({
                    message: 'Query missing in annotation definition',
                  });
                }
                var query = options.annotation.query;
                var queryOptions = __assign({scopedVars: {}}, options, {silent: true});
                var target = this.prepareQueryTarget({query: query}, queryOptions);
                return this._seriesQuery(target.query, queryOptions).then(function(
                  response
                ) {
                  var results = (0, _response_parser.parseResults)(response.data);
                  if (results.length === 0) {
                    throw {message: 'No results in response from InfluxDB'};
                  }
                  var annotations = _lodash2.default.flatten(
                    results.map(function(result) {
                      return (0,
                      _response_parser.getAnnotationsFromResult)(result, options.annotation);
                    })
                  );
                  return annotations;
                });
              };
              InfluxDatasource.prototype.metricFindQuery = function(query, options) {
                var interpreted = (0, _metric_find_query2.default)(query);
                // Use normal querier in silent mode
                var queryOptions = __assign(
                  {rangeRaw: {to: 'now', from: 'now - 1h'}, scopedVars: {}},
                  options,
                  {silent: true}
                );
                var target = this.prepareQueryTarget({query: interpreted}, queryOptions);
                return this._seriesQuery(target.query, queryOptions).then(function(
                  response
                ) {
                  var results = (0, _response_parser.parseResults)(response.data);
                  var values = _lodash2.default.uniq(
                    _lodash2.default.flatten(
                      results.map(_response_parser.getValuesFromResult)
                    )
                  );
                  return values
                    .filter(function(value) {
                      return value && value[0] !== '_';
                    }) // Ignore internal fields
                    .map(function(value) {
                      return {text: value};
                    });
                });
              };
              InfluxDatasource.prototype._seriesQuery = function(query, options) {
                if (!query) {
                  return Promise.resolve({data: ''});
                }
                return this._influxRequest('POST', '/v2/query', {
                  query: query,
                  range: options.range,
                });
              };
              InfluxDatasource.prototype.testDatasource = function() {
                var query = 'fromMetrics(token:"' + this.database + '")';
                return this._influxRequest('POST', '/v2/query', {query: query})
                  .then(function(res) {
                    if (res && res.data && res.data.trim()) {
                      return {
                        status: 'success',
                        message:
                          'Data source connected and main token saved can be re-used with "${this.database}"',
                      };
                    }
                    return {
                      status: 'error',
                      message:
                        'Data source connected, but has no data. Verify the "Database" field and make sure the database has data.',
                    };
                  })
                  .catch(function(err) {
                    return {status: 'error', message: err.message};
                  });
              };
              InfluxDatasource.prototype._influxRequest = function(
                method,
                url,
                data,
                options
              ) {
                var params = {
                  organization: 'my-org',
                };
                if (this.username) {
                  params.u = this.username;
                  params.p = this.password;
                }
                var req = {
                  method: method,
                  url: this.url + url,
                  params: params,
                  data: data,
                  precision: 'ms',
                  inspect: {type: this.type},
                };
                req.headers = {};
                if (this.basicAuth || this.withCredentials) {
                  req.withCredentials = true;
                }
                if (this.basicAuth) {
                  req.headers.Authorization = this.basicAuth;
                }
                return this.backendSrv.datasourceRequest(req).then(
                  function(result) {
                    return result;
                  },
                  function(err) {
                    if (err.status !== 0 || err.status >= 300) {
                      if (err.data && err.data.error) {
                        throw {
                          message: 'InfluxDB Error: ' + err.data.error,
                          data: err.data,
                          config: err.config,
                        };
                      } else {
                        throw {
                          message:
                            'Network Error: ' + err.statusText + '(' + err.status + ')',
                          data: err.data,
                          config: err.config,
                        };
                      }
                    }
                  }
                );
              };
              InfluxDatasource.prototype.getTimeFilter = function(options) {
                var from = this.getInfluxTime(options.rangeRaw.from, false);
                var to = this.getInfluxTime(options.rangeRaw.to, true);
                if (to === 'now') {
                  return 'start: ' + from;
                }
                return 'start: ' + from + ', stop: ' + to;
              };
              InfluxDatasource.prototype.getInfluxTime = function(date, roundUp) {
                if (_lodash2.default.isString(date)) {
                  if (date === 'now') {
                    return date;
                  }
                  var parts = /^now\s*-\s*(\d+)([d|h|m|s])$/.exec(date);
                  if (parts) {
                    var amount = parseInt(parts[1]);
                    var unit = parts[2];
                    return '-' + amount + unit;
                  }
                  date = dateMath.parse(date, roundUp);
                }
                return date.toISOString();
              };
              return InfluxDatasource;
            })();
            exports.default = InfluxDatasource;

            /***/
          },

        /***/ './editor/FluxQueryField.tsx':
          /*!***********************************!*\
  !*** ./editor/FluxQueryField.tsx ***!
  \***********************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });

            var _slatePlainSerializer = __webpack_require__(
              /*! slate-plain-serializer */ 'slate-plain-serializer'
            );

            var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

            var _QueryField = __webpack_require__(
              /*! ./QueryField */ './editor/QueryField.tsx'
            );

            var _QueryField2 = _interopRequireDefault(_QueryField);

            var _debounce = __webpack_require__(
              /*! ./utils/debounce */ './editor/utils/debounce.ts'
            );

            var _debounce2 = _interopRequireDefault(_debounce);

            var _dom = __webpack_require__(/*! ./utils/dom */ './editor/utils/dom.ts');

            var _flux = __webpack_require__(/*! ./flux */ './editor/flux.ts');

            __webpack_require__(/*! ../styles.css */ './styles.css');

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) {
                      if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var __awaiter =
              (undefined && undefined.__awaiter) ||
              function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function(resolve, reject) {
                  function fulfilled(value) {
                    try {
                      step(generator.next(value));
                    } catch (e) {
                      reject(e);
                    }
                  }
                  function rejected(value) {
                    try {
                      step(generator['throw'](value));
                    } catch (e) {
                      reject(e);
                    }
                  }
                  function step(result) {
                    result.done
                      ? resolve(result.value)
                      : new P(function(resolve) {
                          resolve(result.value);
                        }).then(fulfilled, rejected);
                  }
                  step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
              };
            var __generator =
              (undefined && undefined.__generator) ||
              function(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function sent() {
                      if (t[0] & 1) throw t[1];
                      return t[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  f,
                  y,
                  t,
                  g;
                return (
                  (g = {next: verb(0), throw: verb(1), return: verb(2)}),
                  typeof Symbol === 'function' &&
                    (g[Symbol.iterator] = function() {
                      return this;
                    }),
                  g
                );
                function verb(n) {
                  return function(v) {
                    return step([n, v]);
                  };
                }
                function step(op) {
                  if (f) throw new TypeError('Generator is already executing.');
                  while (_) {
                    try {
                      if (
                        ((f = 1),
                        y &&
                          (t =
                            op[0] & 2
                              ? y['return']
                              : op[0]
                                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                : y.next) &&
                          !(t = t.call(y, op[1])).done)
                      )
                        return t;
                      if (((y = 0), t)) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return {value: op[1], done: false};
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (
                            !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                            (op[0] === 6 || op[0] === 2)
                          ) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                  }
                  if (op[0] & 5) throw op[1];
                  return {value: op[0] ? op[1] : void 0, done: true};
                }
              };

            var cleanText = function cleanText(s) {
              return s.replace(/[{}[\]="(),!~+\-*/^%]/g, '').trim();
            };
            var wrapText = function wrapText(text) {
              return {text: text};
            };
            var RATE_RANGES = ['1m', '5m', '10m', '30m', '1h'];
            var DEFAULT_DATABASE = 'telegraf';
            function expandQuery(database, measurement, field) {
              if (field) {
                return (
                  'fromMetrics(token: "' +
                  database +
                  '")\n' +
                  ('  |> filter(fn: (r) => r["_measurement"] == "' +
                    measurement +
                    '" AND r["_field"] == "' +
                    field +
                    '")\n  |> range($range)\n  |> limit(n: 1000)')
                );
              }
              return (
                'fromMetrics(token: "' +
                database +
                '")\n  |> filter(fn: (r) => r["_measurement"] == "' +
                measurement +
                '")\n  |> range($range)\n  |> limit(n: 1000)'
              );
            }
            var FluxQueryField = /** @class */ (function(_super) {
              __extends(FluxQueryField, _super);
              function FluxQueryField() {
                var _this = (_super !== null && _super.apply(this, arguments)) || this;
                _this.handleTypeahead = (0, _debounce2.default)(function() {
                  var selection = window.getSelection();
                  if (selection.anchorNode) {
                    var wrapperNode = selection.anchorNode.parentElement;
                    if (wrapperNode === null) {
                      return;
                    }
                    var editorNode = wrapperNode.closest('.slate-query-field');
                    if (!editorNode || _this.state.value.isBlurred) {
                      // Not inside this editor
                      return;
                    }
                    // DOM ranges
                    var range = selection.getRangeAt(0);
                    var text = selection.anchorNode.textContent;
                    if (text === null) {
                      return;
                    }
                    var offset = range.startOffset;
                    var prefix_1 = cleanText(text.substr(0, offset));
                    // Model ranges
                    var modelOffset = _this.state.value.anchorOffset;
                    var modelPrefix = _this.state.value.anchorText.text.slice(
                      0,
                      modelOffset
                    );
                    // Determine candidates by context
                    var suggestionGroups = [];
                    var wrapperClasses = wrapperNode.classList;
                    var typeaheadContext = null;
                    var database = _this.props.defaultDatabase || DEFAULT_DATABASE;
                    if (wrapperClasses.contains('context-range')) {
                      // Rate ranges
                      typeaheadContext = 'context-range';
                      suggestionGroups.push({
                        label: 'Range vector',
                        items: RATE_RANGES.slice().map(wrapText),
                      });
                    } else if (
                      wrapperClasses.contains('short-delimiter') ||
                      wrapperClasses.contains('short-field')
                    ) {
                      // Suggest measurements or fields
                      var databaseNode = (0, _dom.getPreviousCousin)(
                        wrapperNode,
                        '.short-root'
                      );
                      var db = databaseNode && databaseNode.textContent.replace('..', '');
                      var measurementNode = (0, _dom.getPreviousCousin)(
                        wrapperNode,
                        '.short-field'
                      );
                      var measurement = measurementNode && measurementNode.textContent;
                      if (db && measurement) {
                        prefix_1 = prefix_1.replace(/\w*\.\./g, '');
                        // Expand
                        var expandedQuery = expandQuery(db, measurement, prefix_1);
                        suggestionGroups.push({
                          label: 'Expand',
                          items: [
                            {
                              deleteBackwards: modelOffset,
                              text: expandedQuery,
                            },
                          ],
                          skipFilter: true,
                        });
                        // Additional fields
                        var fields =
                          _this.fields &&
                          _this.fields[db] &&
                          _this.fields[db][measurement];
                        if (fields) {
                          typeaheadContext = 'context-fields';
                          suggestionGroups.push({label: 'Fields', items: fields});
                        } else {
                          _this.fetchFields(db, measurement);
                          return;
                        }
                      } else if (db) {
                        var measurements = _this.measurements && _this.measurements[db];
                        if (measurements) {
                          prefix_1 = prefix_1.replace(/\w*\.\./g, '');
                          typeaheadContext = 'context-measurements';
                          suggestionGroups.push({
                            label: 'Measurements',
                            items: measurements,
                          });
                        } else {
                          _this.fetchMeasurements(db);
                          return;
                        }
                      }
                    } else if (modelPrefix.match(/(^\s+$)|(\)\s+$)/)) {
                      // Operators after functions
                      typeaheadContext = 'context-operator';
                      suggestionGroups.push({
                        prefixMatch: true,
                        label: 'Operators',
                        items: [
                          '|>',
                          '<-',
                          '+',
                          '-',
                          '*',
                          '/',
                          '<',
                          '>',
                          '<=',
                          '=>',
                          '==',
                          '=~',
                          '!=',
                          '!~',
                        ].map(wrapText),
                      });
                    } else if (prefix_1 && !wrapperClasses.contains('argument')) {
                      // Need prefix for functions
                      typeaheadContext = 'context-builtin';
                      suggestionGroups.push({
                        prefixMatch: true,
                        label: 'Functions',
                        items: _flux.FUNCTIONS,
                      });
                    } else if (
                      _slatePlainSerializer2.default.serialize(_this.state.value) ===
                        '' ||
                      text.match(/[+\-*/^%]/)
                    ) {
                      // Need prefix for functions
                      typeaheadContext = 'context-new';
                      suggestionGroups.push({
                        prefixMatch: true,
                        label: 'Templates',
                        items: ['from(db: "' + database + '") |> range($range) '].map(
                          wrapText
                        ),
                      });
                      suggestionGroups.push({
                        prefixMatch: true,
                        label: 'Shortcodes',
                        items: [database + '..'].map(wrapText),
                      });
                    }
                    var results_1 = 0;
                    var filteredSuggestions = suggestionGroups.map(function(group) {
                      if (group.items && prefix_1 && !group.skipFilter) {
                        group.items = group.items.filter(function(c) {
                          return c.text.length >= prefix_1.length;
                        });
                        if (group.prefixMatch) {
                          group.items = group.items.filter(function(c) {
                            return c.text.indexOf(prefix_1) === 0;
                          });
                        } else {
                          group.items = group.items.filter(function(c) {
                            return c.text.indexOf(prefix_1) > -1;
                          });
                        }
                      }
                      results_1 += group.items.length;
                      return group;
                    });
                    console.log(
                      'handleTypeahead',
                      selection.anchorNode,
                      wrapperClasses,
                      text,
                      offset,
                      prefix_1,
                      typeaheadContext
                    );
                    _this.setState({
                      typeaheadPrefix: prefix_1,
                      typeaheadContext: typeaheadContext,
                      typeaheadText: text,
                      suggestions: results_1 > 0 ? filteredSuggestions : [],
                    });
                  }
                }, 500);
                return _this;
              }
              FluxQueryField.prototype.componentDidMount = function() {
                this.updateMenu();
              };
              FluxQueryField.prototype.componentWillReceiveProps = function(nextProps) {
                // initialQuery is null in case the user typed
                if (
                  nextProps.initialQuery !== null &&
                  nextProps.initialQuery !== this.props.initialQuery
                ) {
                  this.setState({
                    value: (0, _QueryField.getInitialValue)(nextProps.initialQuery),
                  });
                }
              };
              FluxQueryField.prototype.applyTypeahead = function(change, suggestion) {
                var _a = this.state,
                  typeaheadPrefix = _a.typeaheadPrefix,
                  typeaheadContext = _a.typeaheadContext,
                  typeaheadText = _a.typeaheadText;
                var suggestionText = suggestion.display || suggestion.text;
                var move = 0;
                // Modify suggestion based on context
                switch (typeaheadContext) {
                  case 'context-operator': {
                    var nextChar = (0, _dom.getNextCharacter)();
                    if (!nextChar && nextChar !== ' ') {
                      suggestionText += ' ';
                    }
                    break;
                  }
                  case 'context-measurements': {
                    var nextChar = (0, _dom.getNextCharacter)();
                    if (!nextChar && nextChar !== '.') {
                      suggestionText += '..';
                    }
                    break;
                  }
                  default:
                }
                this.resetTypeahead();
                // Remove the current, incomplete text and replace it with the selected suggestion
                var backward = suggestion.deleteBackwards || typeaheadPrefix.length;
                var text = cleanText(typeaheadText);
                var suffixLength = text.length - typeaheadPrefix.length;
                var offset = typeaheadText.indexOf(typeaheadPrefix);
                var midWord =
                  typeaheadPrefix &&
                  ((suffixLength > 0 && offset > -1) || suggestionText === typeaheadText);
                var forward = midWord ? suffixLength + offset : 0;
                // If new-lines, apply suggestion as block
                if (suggestionText.match(/\n/)) {
                  var fragment = (0, _QueryField.makeFragment)(suggestionText);
                  return change
                    .deleteBackward(backward)
                    .deleteForward(forward)
                    .insertFragment(fragment)
                    .focus();
                }
                return change
                  .deleteBackward(backward)
                  .deleteForward(forward)
                  .insertText(suggestionText)
                  .move(move)
                  .focus();
              };
              FluxQueryField.prototype.fetchFields = function(db, measurement) {
                return __awaiter(this, void 0, void 0, function() {
                  var query, result;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        query = 'field_keys(' + db + ',' + measurement + ')';
                        return [4 /*yield*/, this.request(query)];
                      case 1:
                        result = _a.sent();
                        if (!this.fields) {
                          this.fields = {};
                        }
                        if (!this.fields[db]) {
                          this.fields[db] = {};
                        }
                        this.fields[db][measurement] = result;
                        setTimeout(this.handleTypeahead, 0);
                        return [2 /*return*/];
                    }
                  });
                });
              };
              FluxQueryField.prototype.fetchMeasurements = function(db) {
                return __awaiter(this, void 0, void 0, function() {
                  var query, result;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        query = 'measurements(' + db + ')';
                        return [4 /*yield*/, this.request(query)];
                      case 1:
                        result = _a.sent();
                        if (!this.measurements) {
                          this.measurements = {};
                        }
                        this.measurements[db] = result;
                        setTimeout(this.handleTypeahead, 0);
                        return [2 /*return*/];
                    }
                  });
                });
              };
              return FluxQueryField;
            })(_QueryField2.default);
            exports.default = FluxQueryField;

            /***/
          },

        /***/ './editor/QueryField.tsx':
          /*!*******************************!*\
  !*** ./editor/QueryField.tsx ***!
  \*******************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.getInitialValue = exports.makeFragment = exports.TYPEAHEAD_DEBOUNCE = undefined;

            var _typeof =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(obj) {
                    return typeof obj;
                  }
                : function(obj) {
                    return obj &&
                      typeof Symbol === 'function' &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  };

            var _react = __webpack_require__(/*! react */ 'react');

            var _react2 = _interopRequireDefault(_react);

            var _reactDom = __webpack_require__(/*! react-dom */ 'react-dom');

            var _reactDom2 = _interopRequireDefault(_reactDom);

            var _slate = __webpack_require__(/*! slate */ 'slate');

            var _slateReact = __webpack_require__(/*! slate-react */ 'slate-react');

            var _slatePlainSerializer = __webpack_require__(
              /*! slate-plain-serializer */ 'slate-plain-serializer'
            );

            var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

            var _braces = __webpack_require__(
              /*! ./slate-plugins/braces */ './editor/slate-plugins/braces.ts'
            );

            var _braces2 = _interopRequireDefault(_braces);

            var _clear = __webpack_require__(
              /*! ./slate-plugins/clear */ './editor/slate-plugins/clear.ts'
            );

            var _clear2 = _interopRequireDefault(_clear);

            var _newline = __webpack_require__(
              /*! ./slate-plugins/newline */ './editor/slate-plugins/newline.ts'
            );

            var _newline2 = _interopRequireDefault(_newline);

            var _index = __webpack_require__(
              /*! ./slate-plugins/prism/index */ './editor/slate-plugins/prism/index.tsx'
            );

            var _index2 = _interopRequireDefault(_index);

            var _runner = __webpack_require__(
              /*! ./slate-plugins/runner */ './editor/slate-plugins/runner.ts'
            );

            var _runner2 = _interopRequireDefault(_runner);

            var _Typeahead = __webpack_require__(
              /*! ./Typeahead */ './editor/Typeahead.tsx'
            );

            var _Typeahead2 = _interopRequireDefault(_Typeahead);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) {
                      if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var TYPEAHEAD_DEBOUNCE = (exports.TYPEAHEAD_DEBOUNCE = 300);
            function flattenSuggestions(s) {
              return s
                ? s.reduce(function(acc, g) {
                    return acc.concat(g.items);
                  }, [])
                : [];
            }
            var makeFragment = (exports.makeFragment = function makeFragment(text) {
              var lines = text.split('\n').map(function(line) {
                return _slate.Block.create({
                  type: 'paragraph',
                  nodes: [_slate.Text.create(line)],
                });
              });
              var fragment = _slate.Document.create({
                nodes: lines,
              });
              return fragment;
            });
            var getInitialValue = (exports.getInitialValue = function getInitialValue(
              query
            ) {
              return _slate.Value.create({document: makeFragment(query)});
            });
            var Portal = /** @class */ (function(_super) {
              __extends(Portal, _super);
              function Portal(props) {
                var _this = _super.call(this, props) || this;
                var _a = props.index,
                  index = _a === void 0 ? 0 : _a,
                  _b = props.prefix,
                  prefix = _b === void 0 ? 'query' : _b;
                _this.node = document.createElement('div');
                _this.node.classList.add(
                  'slate-typeahead',
                  'slate-typeahead-' + prefix + '-' + index
                );
                document.body.appendChild(_this.node);
                return _this;
              }
              Portal.prototype.componentWillUnmount = function() {
                document.body.removeChild(this.node);
              };
              Portal.prototype.render = function() {
                return _reactDom2.default.createPortal(this.props.children, this.node);
              };
              return Portal;
            })(_react2.default.Component);
            var QueryField = /** @class */ (function(_super) {
              __extends(QueryField, _super);
              function QueryField(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.onChange = function(_a) {
                  var value = _a.value;
                  var changed = value.document !== _this.state.value.document;
                  _this.setState({value: value}, function() {
                    if (changed) {
                      _this.handleChangeQuery();
                    }
                  });
                  window.requestAnimationFrame(_this.handleTypeahead);
                };
                _this.onMetricsReceived = function() {
                  if (!_this.state.metrics) {
                    return;
                  }
                  (0, _index.setPrismTokens)(
                    _this.props.language,
                    'metrics',
                    _this.state.metrics
                  );
                  // Trigger re-render
                  window.requestAnimationFrame(function() {
                    // Bogus edit to trigger highlighting
                    var change = _this.state.value
                      .change()
                      .insertText(' ')
                      .deleteBackward(1);
                    _this.onChange(change);
                  });
                };
                _this.request = function(url) {
                  if (_this.props.request) {
                    return _this.props.request(url);
                  }
                  return fetch(url);
                };
                _this.handleChangeQuery = function() {
                  // Send text change to parent
                  var onQueryChange = _this.props.onQueryChange;
                  if (onQueryChange) {
                    onQueryChange(
                      _slatePlainSerializer2.default.serialize(_this.state.value)
                    );
                  }
                };
                _this.onKeyDown = function(event, change) {
                  var _a = _this.state,
                    typeaheadIndex = _a.typeaheadIndex,
                    suggestions = _a.suggestions;
                  switch (event.key) {
                    case 'Escape': {
                      if (_this.menuEl) {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.resetTypeahead();
                        return true;
                      }
                      break;
                    }
                    case ' ': {
                      if (event.ctrlKey) {
                        event.preventDefault();
                        _this.handleTypeahead();
                        return true;
                      }
                      break;
                    }
                    case 'Tab': {
                      if (_this.menuEl) {
                        // Dont blur input
                        event.preventDefault();
                        if (!suggestions || suggestions.length === 0) {
                          return undefined;
                        }
                        // Get the currently selected suggestion
                        var flattenedSuggestions = flattenSuggestions(suggestions);
                        var selected = Math.abs(typeaheadIndex);
                        var selectedIndex = selected % flattenedSuggestions.length || 0;
                        var suggestion = flattenedSuggestions[selectedIndex];
                        _this.applyTypeahead(change, suggestion);
                        return true;
                      }
                      break;
                    }
                    case 'ArrowDown': {
                      if (_this.menuEl) {
                        // Select next suggestion
                        event.preventDefault();
                        _this.setState({typeaheadIndex: typeaheadIndex + 1});
                      }
                      break;
                    }
                    case 'ArrowUp': {
                      if (_this.menuEl) {
                        // Select previous suggestion
                        event.preventDefault();
                        _this.setState({typeaheadIndex: Math.max(0, typeaheadIndex - 1)});
                      }
                      break;
                    }
                    default: {
                      // console.log('default key', event.key, event.which, event.charCode, event.locale, data.key);
                      break;
                    }
                  }
                  return undefined;
                };
                _this.handleTypeahead = function(change, item) {
                  return change || _this.state.value.change();
                };
                _this.resetTypeahead = function() {
                  _this.setState({
                    suggestions: [],
                    typeaheadIndex: 0,
                    typeaheadPrefix: '',
                    typeaheadContext: null,
                  });
                };
                _this.handleBlur = function() {
                  var onBlur = _this.props.onBlur;
                  // If we dont wait here, menu clicks wont work because the menu
                  // will be gone.
                  _this.resetTimer = setTimeout(_this.resetTypeahead, 100);
                  if (onBlur) {
                    onBlur();
                  }
                };
                _this.handleFocus = function() {
                  var onFocus = _this.props.onFocus;
                  if (onFocus) {
                    onFocus();
                  }
                };
                _this.handleClickMenu = function(item) {
                  // Manually triggering change
                  var change = _this.applyTypeahead(_this.state.value.change(), item);
                  _this.onChange(change);
                };
                _this.updateMenu = function() {
                  var suggestions = _this.state.suggestions;
                  var menu = _this.menuEl;
                  var selection = window.getSelection();
                  var node = selection.anchorNode;
                  // No menu, nothing to do
                  if (!menu) {
                    return;
                  }
                  // No suggestions or blur, remove menu
                  var hasSuggesstions = suggestions && suggestions.length > 0;
                  if (!hasSuggesstions) {
                    menu.removeAttribute('style');
                    return;
                  }
                  // Align menu overlay to editor node
                  if (node && node.parentElement) {
                    // Read from DOM
                    var rect_1 = node.parentElement.getBoundingClientRect();
                    var scrollX_1 = window.scrollX;
                    var scrollY_1 = window.scrollY;
                    // Write DOM
                    requestAnimationFrame(function() {
                      menu.style.opacity = 1;
                      menu.style.top = rect_1.top + scrollY_1 + rect_1.height + 4 + 'px';
                      menu.style.left = rect_1.left + scrollX_1 - 2 + 'px';
                    });
                  }
                };
                _this.menuRef = function(el) {
                  _this.menuEl = el;
                };
                _this.renderMenu = function() {
                  var portalPrefix = _this.props.portalPrefix;
                  var suggestions = _this.state.suggestions;
                  var hasSuggesstions = suggestions && suggestions.length > 0;
                  if (!hasSuggesstions) {
                    return null;
                  }
                  // Guard selectedIndex to be within the length of the suggestions
                  var selectedIndex = Math.max(_this.state.typeaheadIndex, 0);
                  var flattenedSuggestions = flattenSuggestions(suggestions);
                  selectedIndex = selectedIndex % flattenedSuggestions.length || 0;
                  var selectedKeys = (flattenedSuggestions.length > 0
                    ? [flattenedSuggestions[selectedIndex]]
                    : []
                  ).map(function(i) {
                    return (typeof i === 'undefined' ? 'undefined' : _typeof(i)) ===
                      'object'
                      ? i.text
                      : i;
                  });
                  // Create typeahead in DOM root so we can later position it absolutely
                  return _react2.default.createElement(
                    Portal,
                    {prefix: portalPrefix},
                    _react2.default.createElement(_Typeahead2.default, {
                      menuRef: _this.menuRef,
                      selectedItems: selectedKeys,
                      onClickItem: _this.handleClickMenu,
                      groupedItems: suggestions,
                    })
                  );
                };
                var _a = props.prismDefinition,
                  prismDefinition = _a === void 0 ? {} : _a,
                  _b = props.prismLanguage,
                  prismLanguage = _b === void 0 ? 'promql' : _b;
                _this.plugins = [
                  (0, _braces2.default)(),
                  (0, _clear2.default)(),
                  (0, _runner2.default)({handler: props.onPressEnter}),
                  (0, _newline2.default)(),
                  (0, _index2.default)({
                    definition: prismDefinition,
                    language: prismLanguage,
                  }),
                ];
                _this.state = {
                  labelKeys: {},
                  labelValues: {},
                  metrics: props.metrics || [],
                  suggestions: [],
                  typeaheadIndex: 0,
                  typeaheadPrefix: '',
                  value: getInitialValue(props.initialQuery || ''),
                };
                return _this;
              }
              QueryField.prototype.componentDidMount = function() {
                this.updateMenu();
              };
              QueryField.prototype.componentWillUnmount = function() {
                clearTimeout(this.resetTimer);
              };
              QueryField.prototype.componentDidUpdate = function() {
                this.updateMenu();
              };
              QueryField.prototype.componentWillReceiveProps = function(nextProps) {
                if (nextProps.metrics && nextProps.metrics !== this.props.metrics) {
                  this.setState({metrics: nextProps.metrics}, this.onMetricsReceived);
                }
                // initialQuery is null in case the user typed
                if (
                  nextProps.initialQuery !== null &&
                  nextProps.initialQuery !== this.props.initialQuery
                ) {
                  this.setState({value: getInitialValue(nextProps.initialQuery)});
                }
              };
              QueryField.prototype.applyTypeahead = function(change, suggestion) {
                return {value: {}};
              };
              QueryField.prototype.render = function() {
                return _react2.default.createElement(
                  'div',
                  {className: 'slate-query-field'},
                  this.renderMenu(),
                  _react2.default.createElement(_slateReact.Editor, {
                    autoCorrect: false,
                    onBlur: this.handleBlur,
                    onKeyDown: this.onKeyDown,
                    onChange: this.onChange,
                    onFocus: this.handleFocus,
                    placeholder: this.props.placeholder,
                    plugins: this.plugins,
                    spellCheck: false,
                    value: this.state.value,
                  })
                );
              };
              return QueryField;
            })(_react2.default.Component);
            exports.default = QueryField;

            /***/
          },

        /***/ './editor/Typeahead.tsx':
          /*!******************************!*\
  !*** ./editor/Typeahead.tsx ***!
  \******************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });

            var _typeof =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function(obj) {
                    return typeof obj;
                  }
                : function(obj) {
                    return obj &&
                      typeof Symbol === 'function' &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  };

            var _react = __webpack_require__(/*! react */ 'react');

            var _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) {
                      if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var __assign =
              (undefined && undefined.__assign) ||
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                  }
                }
                return t;
              };

            function scrollIntoView(el) {
              if (!el || !el.offsetParent) {
                return;
              }
              var container = el.offsetParent;
              if (
                el.offsetTop > container.scrollTop + container.offsetHeight ||
                el.offsetTop < container.scrollTop
              ) {
                container.scrollTop = el.offsetTop - container.offsetTop;
              }
            }
            var TypeaheadItem = /** @class */ (function(_super) {
              __extends(TypeaheadItem, _super);
              function TypeaheadItem() {
                var _this = (_super !== null && _super.apply(this, arguments)) || this;
                _this.getRef = function(el) {
                  _this.el = el;
                };
                return _this;
              }
              TypeaheadItem.prototype.componentDidUpdate = function(prevProps) {
                if (this.props.isSelected && !prevProps.isSelected) {
                  scrollIntoView(this.el);
                }
              };
              TypeaheadItem.prototype.render = function() {
                var _a = this.props,
                  hint = _a.hint,
                  isSelected = _a.isSelected,
                  label = _a.label,
                  onClickItem = _a.onClickItem;
                var className = isSelected
                  ? 'typeahead-item typeahead-item__selected'
                  : 'typeahead-item';
                var onClick = function onClick() {
                  return onClickItem(label);
                };
                return _react2.default.createElement(
                  'li',
                  {ref: this.getRef, className: className, onClick: onClick},
                  label,
                  hint && isSelected
                    ? _react2.default.createElement(
                        'div',
                        {className: 'typeahead-item-hint'},
                        hint
                      )
                    : null
                );
              };
              return TypeaheadItem;
            })(_react2.default.PureComponent);
            var TypeaheadGroup = /** @class */ (function(_super) {
              __extends(TypeaheadGroup, _super);
              function TypeaheadGroup() {
                return (_super !== null && _super.apply(this, arguments)) || this;
              }
              TypeaheadGroup.prototype.render = function() {
                var _a = this.props,
                  items = _a.items,
                  label = _a.label,
                  selected = _a.selected,
                  onClickItem = _a.onClickItem;
                return _react2.default.createElement(
                  'li',
                  {className: 'typeahead-group'},
                  _react2.default.createElement(
                    'div',
                    {className: 'typeahead-group__title'},
                    label
                  ),
                  _react2.default.createElement(
                    'ul',
                    {className: 'typeahead-group__list'},
                    items.map(function(item) {
                      var text =
                        (typeof item === 'undefined' ? 'undefined' : _typeof(item)) ===
                        'object'
                          ? item.text
                          : item;
                      var label =
                        (typeof item === 'undefined' ? 'undefined' : _typeof(item)) ===
                        'object'
                          ? item.display || item.text
                          : item;
                      return _react2.default.createElement(TypeaheadItem, {
                        key: text,
                        onClickItem: onClickItem,
                        isSelected: selected.indexOf(text) > -1,
                        hint: item.hint,
                        label: label,
                      });
                    })
                  )
                );
              };
              return TypeaheadGroup;
            })(_react2.default.PureComponent);
            var Typeahead = /** @class */ (function(_super) {
              __extends(Typeahead, _super);
              function Typeahead() {
                return (_super !== null && _super.apply(this, arguments)) || this;
              }
              Typeahead.prototype.render = function() {
                var _a = this.props,
                  groupedItems = _a.groupedItems,
                  menuRef = _a.menuRef,
                  selectedItems = _a.selectedItems,
                  onClickItem = _a.onClickItem;
                return _react2.default.createElement(
                  'ul',
                  {className: 'typeahead', ref: menuRef},
                  groupedItems.map(function(g) {
                    return _react2.default.createElement(
                      TypeaheadGroup,
                      __assign(
                        {key: g.label, onClickItem: onClickItem, selected: selectedItems},
                        g
                      )
                    );
                  })
                );
              };
              return Typeahead;
            })(_react2.default.PureComponent);
            exports.default = Typeahead;

            /***/
          },

        /***/ './editor/editor_component.tsx':
          /*!*************************************!*\
  !*** ./editor/editor_component.tsx ***!
  \*************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var _react = __webpack_require__(/*! react */ 'react');

            var _react2 = _interopRequireDefault(_react);

            var _core_module = __webpack_require__(
              /*! grafana/app/core/core_module */ 'grafana/app/core/core_module'
            );

            var _core_module2 = _interopRequireDefault(_core_module);

            var _FluxQueryField = __webpack_require__(
              /*! ./FluxQueryField */ './editor/FluxQueryField.tsx'
            );

            var _FluxQueryField2 = _interopRequireDefault(_FluxQueryField);

            var _flux = __webpack_require__(/*! ./flux */ './editor/flux.ts');

            var _flux2 = _interopRequireDefault(_flux);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) {
                      if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();

            /**
             * Angular wrapper around the FLux query field
             */
            var Editor = /** @class */ (function(_super) {
              __extends(Editor, _super);
              function Editor(props) {
                var _this = _super.call(this, props) || this;
                _this.handleChangeQuery = function(value) {
                  var _a = _this.props,
                    index = _a.index,
                    change = _a.change;
                  var query = _this.state.query;
                  var edited = query !== value;
                  _this.setState({edited: edited, query: value});
                  if (change) {
                    change(value, index);
                  }
                };
                _this.handlePressEnter = function() {
                  var execute = _this.props.execute;
                  if (execute) {
                    execute();
                  }
                };
                _this.state = {
                  edited: false,
                  query: props.query || '',
                };
                return _this;
              }
              Editor.prototype.render = function() {
                var _a = this.props,
                  database = _a.database,
                  request = _a.request;
                var _b = this.state,
                  edited = _b.edited,
                  query = _b.query;
                return _react2.default.createElement(
                  'div',
                  {className: 'gf-form-input'},
                  _react2.default.createElement(_FluxQueryField2.default, {
                    defaultDatabase: database,
                    initialQuery: edited ? null : query,
                    onPressEnter: this.handlePressEnter,
                    onQueryChange: this.handleChangeQuery,
                    prismLanguage: 'python',
                    prismDefinition: _flux2.default,
                    placeholder: 'Enter a FLUX query',
                    request: request,
                  })
                );
              };
              return Editor;
            })(_react.Component);
            _core_module2.default.directive('fluxEditor', [
              'reactDirective',
              function(reactDirective) {
                return reactDirective(Editor, [
                  'change',
                  'database',
                  'execute',
                  'query',
                  'request',
                ]);
              },
            ]);

            /***/
          },

        /***/ './editor/flux.ts':
          /*!************************!*\
  !*** ./editor/flux.ts ***!
  \************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            var FUNCTIONS = (exports.FUNCTIONS = [
              {
                text: 'count',
                display: 'count()',
                hint: 'For each aggregated column, ouput the number of non-null records.',
              },
              {
                text: 'covariance',
                display: 'covariance(columns: ["valA", "valB"])',
                hint: 'Compute covariance between two columns and write it to "_value".',
              },
              {
                text: 'derivative',
                display: 'derivative()',
                hint: 'Computes the time based difference between subsequent records',
              },
              {
                text: 'difference',
                display: 'difference()',
                hint: 'Computes the difference between subsequent records.',
              },
              {
                text: 'distinct',
                display: 'distinct(column: "host")',
                hint: 'Produce unique values for a given column',
              },
              {
                text: 'filter',
                display: 'filter(fn: (r) => r["_value"] > 0)',
                hint:
                  'Applies a predicate function to each input record, output tables contain only records that matched the predicate.',
              },
              {
                text: 'first',
                display: 'first()',
                hint: 'Selects the first non-null record from the input table.',
              },
              {
                text: 'from',
                display: 'from(db: "database)',
                hint: 'Starting point of a query, produces a table from the given "db".',
              },
              {
                text: 'group',
                display: 'group(by: ["host"]) ',
                hint: 'Groups results by a specified list of columns',
              },
              {
                text: 'integral',
                display: 'integral()',
                hint: 'For each aggregate column, output the area under the curve.',
              },
              {
                text: 'join',
                display: 'join(tables: {cpu: cpu, mem: mem}, on: ["host"])',
                hint:
                  'Join two time series together on time and the list of "on" column keys.',
              },
              {
                text: 'last',
                display: 'last()',
                hint: 'Selects the last non-null record from the input table.',
              },
              {
                text: 'limit',
                display: 'limit(n: 10)',
                hint:
                  'Limit the output table to the first "n" records of the input table. ',
              },
              {
                text: 'map',
                display: 'map(fn: (r) => r)',
                hint: 'Applies a function to each record of the input tables.',
              },
              {
                text: 'max',
                display: 'max()',
                hint: 'Selects the maximum record from the input table.',
              },
              {
                text: 'mean',
                display: 'mean()',
                hint: 'For each aggregated column, it outputs the mean as a float.',
              },
              {
                text: 'min',
                display: 'min()',
                hint: 'Selects the minimum record from the input table.',
              },
              {
                text: 'percentile',
                display: 'percentile(percentile: 0.95)',
                hint:
                  ' For each aggregated column, it outputs the value that represents the specified percentile of the non-null record as a float.',
              },
              {
                text: 'range',
                display: 'range($range)',
                hint:
                  'Filters the results by time boundaries "start" and "stop". Use "$range" to apply the dashboard range.',
              },
              {
                text: 'sample',
                display: 'sample(n: 10)',
                hint: 'Selects a every "n"-th record from the input table.',
              },
              {
                text: 'set',
                display: 'set(key: "myKey", value: "42")',
                hint: 'Assigns a static value to each record',
              },
              {
                text: 'shift',
                display: 'shift(shift: +12h)',
                hint: 'Add a fixed duration to time columns.',
              },
              {
                text: 'skew',
                display: 'skew()',
                hint: 'For each aggregated column, it outputs the skew as a float.',
              },
              {
                text: 'sort',
                display: 'sort(cols: ["host", "value"], desc: true)',
                hint:
                  'Sorts the results by the specified columns, default sort is ascending',
              },
              {
                text: 'spread',
                display: 'spread()',
                hint:
                  'For each aggregated column, it outputs the difference between the min and max values.',
              },
              // { text: 'stateTracking', display: '', hint: '' },
              {
                text: 'stddev',
                display: 'stddev()',
                hint:
                  'For each aggregated column, it outputs the standard deviation as a float.',
              },
              {
                text: 'sum',
                display: 'sum()',
                hint: 'For each aggregated column, it outputs the sum of all records. ',
              },
              {
                text: 'window',
                display: 'window(every: 10m)',
                hint: 'Partitions the results by a given time range.',
              },
              {
                text: 'yield',
                display: 'yield()',
                hint: 'Yield the input table as the result of the query.',
              },
            ]);
            var tokenizer = {
              comment: {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true,
              },
              'context-short': {
                pattern: /^\w+\.\.(\w+\.\.)?\w*$/i,
                alias: 'symbol',
                inside: {
                  'short-root': /^\w+(?=\.\.)/,
                  'short-delimiter': /\.\./,
                  'short-field': /\w+$/,
                },
              },
              'function-context': {
                pattern: /[a-z0-9_]+\(.*?\)/i,
                inside: {},
              },
              duration: {
                pattern: /-?\d+(ns|u|µ|ms|s|m|h|d|w)/i,
                alias: 'number',
              },
              builtin: new RegExp(
                '\\b(?:' +
                  FUNCTIONS.map(function(f) {
                    return f.text;
                  }).join('|') +
                  ')(?=\\s*\\()',
                'i'
              ),
              string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: true,
              },
              keyword: /\b(?:and|empty|import|in|not|or|return)\b/,
              boolean: /\b(?:true|false)\b/,
              number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
              operator: /-|\+|\*|\/|%|==|<=?|>=?|!=|!~|=~|=|<-|\|>/,
              punctuation: /[{}[\];(),.:]/,
            };
            tokenizer['function-context'].inside = {
              argument: {
                pattern: /[a-z0-9_]+(?=:)/i,
                alias: 'symbol',
              },
              duration: tokenizer.duration,
              number: tokenizer.number,
              builtin: tokenizer.builtin,
              string: tokenizer.string,
            };
            exports.default = tokenizer;

            /***/
          },

        /***/ './editor/slate-plugins/braces.ts':
          /*!****************************************!*\
  !*** ./editor/slate-plugins/braces.ts ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = BracesPlugin;
            var BRACES = {
              '[': ']',
              '{': '}',
              '(': ')',
            };
            function BracesPlugin() {
              return {
                onKeyDown: function onKeyDown(event, change) {
                  var value = change.value;
                  if (!value.isCollapsed) {
                    return undefined;
                  }
                  switch (event.key) {
                    case '{':
                    case '[': {
                      event.preventDefault();
                      // Insert matching braces
                      change
                        .insertText('' + event.key + BRACES[event.key])
                        .move(-1)
                        .focus();
                      return true;
                    }
                    case '(': {
                      event.preventDefault();
                      var text = value.anchorText.text;
                      var offset = value.anchorOffset;
                      var space = text.indexOf(' ', offset);
                      var length_1 = space > 0 ? space : text.length;
                      var forward = length_1 - offset;
                      // Insert matching braces
                      change
                        .insertText(event.key)
                        .move(forward)
                        .insertText(BRACES[event.key])
                        .move(-1 - forward)
                        .focus();
                      return true;
                    }
                    default: {
                      break;
                    }
                  }
                  return undefined;
                },
              };
            }

            /***/
          },

        /***/ './editor/slate-plugins/clear.ts':
          /*!***************************************!*\
  !*** ./editor/slate-plugins/clear.ts ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = ClearPlugin;
            // Clears the rest of the line after the caret
            function ClearPlugin() {
              return {
                onKeyDown: function onKeyDown(event, change) {
                  var value = change.value;
                  if (!value.isCollapsed) {
                    return undefined;
                  }
                  if (event.key === 'k' && event.ctrlKey) {
                    event.preventDefault();
                    var text = value.anchorText.text;
                    var offset = value.anchorOffset;
                    var length_1 = text.length;
                    var forward = length_1 - offset;
                    change.deleteForward(forward);
                    return true;
                  }
                  return undefined;
                },
              };
            }

            /***/
          },

        /***/ './editor/slate-plugins/newline.ts':
          /*!*****************************************!*\
  !*** ./editor/slate-plugins/newline.ts ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = NewlinePlugin;
            function getIndent(text) {
              var offset = text.length - text.trimLeft().length;
              if (offset) {
                var indent = text[0];
                while (--offset) {
                  indent += text[0];
                }
                return indent;
              }
              return '';
            }
            function NewlinePlugin() {
              return {
                onKeyDown: function onKeyDown(event, change) {
                  var value = change.value;
                  if (!value.isCollapsed) {
                    return undefined;
                  }
                  if (event.key === 'Enter' && event.shiftKey) {
                    event.preventDefault();
                    var startBlock = value.startBlock;
                    var currentLineText = startBlock.text;
                    var indent = getIndent(currentLineText);
                    return change
                      .splitBlock()
                      .insertText(indent)
                      .focus();
                  }
                },
              };
            }

            /***/
          },

        /***/ './editor/slate-plugins/prism/index.tsx':
          /*!**********************************************!*\
  !*** ./editor/slate-plugins/prism/index.tsx ***!
  \**********************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.setPrismTokens = setPrismTokens;
            exports.default = PrismPlugin;

            var _react = __webpack_require__(/*! react */ 'react');

            var _react2 = _interopRequireDefault(_react);

            var _prismjs = __webpack_require__(/*! prismjs */ 'prismjs');

            var _prismjs2 = _interopRequireDefault(_prismjs);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var TOKEN_MARK = 'prism-token';
            function setPrismTokens(language, field, values, alias) {
              if (alias === void 0) {
                alias = 'variable';
              }
              _prismjs2.default.languages[language][field] = {
                alias: alias,
                pattern: new RegExp('(?:^|\\s)(' + values.join('|') + ')(?:$|\\s)'),
              };
            }
            /**
             * Code-highlighting plugin based on Prism and
             * https://github.com/ianstormtaylor/slate/blob/master/examples/code-highlighting/index.js
             *
             * (Adapted to handle nested grammar definitions.)
             */
            function PrismPlugin(_a) {
              var definition = _a.definition,
                language = _a.language;
              if (definition) {
                // Don't override exising modified definitions
                _prismjs2.default.languages[language] =
                  _prismjs2.default.languages[language] || definition;
              }
              return {
                /**
                 * Render a Slate mark with appropiate CSS class names
                 *
                 * @param {Object} props
                 * @return {Element}
                 */
                renderMark: function renderMark(props) {
                  var children = props.children,
                    mark = props.mark;
                  // Only apply spans to marks identified by this plugin
                  if (mark.type !== TOKEN_MARK) {
                    return undefined;
                  }
                  var className = 'token ' + mark.data.get('types');
                  return _react2.default.createElement(
                    'span',
                    {className: className},
                    children
                  );
                },
                /**
                 * Decorate code blocks with Prism.js highlighting.
                 *
                 * @param {Node} node
                 * @return {Array}
                 */
                decorateNode: function decorateNode(node) {
                  if (node.type !== 'paragraph') {
                    return [];
                  }
                  var texts = node.getTexts().toArray();
                  var tstring = texts
                    .map(function(t) {
                      return t.text;
                    })
                    .join('\n');
                  var grammar = _prismjs2.default.languages[language];
                  var tokens = _prismjs2.default.tokenize(tstring, grammar);
                  var decorations = [];
                  var startText = texts.shift();
                  var endText = startText;
                  var startOffset = 0;
                  var endOffset = 0;
                  var start = 0;
                  function processToken(token, acc) {
                    // Accumulate token types down the tree
                    var types =
                      (acc || '') + ' ' + (token.type || '') + ' ' + (token.alias || '');
                    // Add mark for token node
                    if (typeof token === 'string' || typeof token.content === 'string') {
                      startText = endText;
                      startOffset = endOffset;
                      var content = typeof token === 'string' ? token : token.content;
                      var newlines = content.split('\n').length - 1;
                      var length_1 = content.length - newlines;
                      var end = start + length_1;
                      var available = startText.text.length - startOffset;
                      var remaining = length_1;
                      endOffset = startOffset + remaining;
                      while (available < remaining) {
                        endText = texts.shift();
                        remaining = length_1 - available;
                        available = endText.text.length;
                        endOffset = remaining;
                      }
                      // Inject marks from up the tree (acc) as well
                      if (typeof token !== 'string' || acc) {
                        var range = {
                          anchorKey: startText.key,
                          anchorOffset: startOffset,
                          focusKey: endText.key,
                          focusOffset: endOffset,
                          marks: [{type: TOKEN_MARK, data: {types: types}}],
                        };
                        decorations.push(range);
                      }
                      start = end;
                    } else if (token.content && token.content.length) {
                      // Tokens can be nested
                      for (var _i = 0, _a = token.content; _i < _a.length; _i++) {
                        var subToken = _a[_i];
                        processToken(subToken, types);
                      }
                    }
                  }
                  // Process top-level tokens
                  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
                    var token = tokens_1[_i];
                    processToken(token);
                  }
                  return decorations;
                },
              };
            }

            /***/
          },

        /***/ './editor/slate-plugins/runner.ts':
          /*!****************************************!*\
  !*** ./editor/slate-plugins/runner.ts ***!
  \****************************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = RunnerPlugin;
            function RunnerPlugin(_a) {
              var handler = _a.handler;
              return {
                onKeyDown: function onKeyDown(event) {
                  // Handle enter
                  if (handler && event.key === 'Enter' && !event.shiftKey) {
                    // Submit on Enter
                    event.preventDefault();
                    handler(event);
                    return true;
                  }
                  return undefined;
                },
              };
            }

            /***/
          },

        /***/ './editor/utils/debounce.ts':
          /*!**********************************!*\
  !*** ./editor/utils/debounce.ts ***!
  \**********************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = debounce;
            // Based on underscore.js debounce()
            function debounce(func, wait) {
              var timeout;
              return function() {
                var context = this;
                var args = arguments;
                var later = function later() {
                  timeout = null;
                  func.apply(context, args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
              };
            }

            /***/
          },

        /***/ './editor/utils/dom.ts':
          /*!*****************************!*\
  !*** ./editor/utils/dom.ts ***!
  \*****************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.getPreviousCousin = getPreviousCousin;
            exports.getNextCharacter = getNextCharacter;
            // Node.closest() polyfill
            if ('Element' in window && !Element.prototype.closest) {
              Element.prototype.closest = function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s);
                var el = this;
                var i;
                // eslint-disable-next-line
                do {
                  i = matches.length;
                  // eslint-disable-next-line
                  while (--i >= 0 && matches.item(i) !== el) {}
                } while (i < 0 && (el = el.parentElement));
                return el;
              };
            }
            function getPreviousCousin(node, selector) {
              var sibling = node.parentElement.previousSibling;
              var el;
              while (sibling) {
                el = sibling.querySelector(selector);
                if (el) {
                  return el;
                }
                sibling = sibling.previousSibling;
              }
              return undefined;
            }
            function getNextCharacter(global) {
              if (global === void 0) {
                global = window;
              }
              var selection = global.getSelection();
              if (!selection.anchorNode) {
                return null;
              }
              var range = selection.getRangeAt(0);
              var text = selection.anchorNode.textContent;
              if (text === null) {
                return null;
              }
              var offset = range.startOffset;
              return text.substr(offset, 1);
            }

            /***/
          },

        /***/ './metric_find_query.ts':
          /*!******************************!*\
  !*** ./metric_find_query.ts ***!
  \******************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.default = expandMacros;
            // MACROS
            // List all measurements for a given database: `measurements(database)`
            var MEASUREMENTS_REGEXP = /^\s*measurements\((.+)\)\s*$/;
            // List all tags for a given database and measurement: `tags(database, measurement)`
            var TAGS_REGEXP = /^\s*tags\((.+)\s*,\s*(.+)\)\s*$/;
            // List all tag values for a given database, measurement, and tag: `tag_valuess(database, measurement, tag)`
            var TAG_VALUES_REGEXP = /^\s*tag_values\((.+)\s*,\s*(.+)\s*,\s*(.+)\)\s*$/;
            // List all field keys for a given database and measurement: `field_keys(database, measurement)`
            var FIELD_KEYS_REGEXP = /^\s*field_keys\((.+)\s*,\s*(.+)\)\s*$/;
            function expandMacros(query) {
              var measurementsQuery = query.match(MEASUREMENTS_REGEXP);
              if (measurementsQuery) {
                var database = measurementsQuery[1];
                return (
                  'fromMetrics(token:"' +
                  database +
                  '")\n    |> range($range)\n    |> group(by:["_measurement"])\n    |> distinct(column:"_measurement")\n    |> group(none:true)'
                );
              }
              var tagsQuery = query.match(TAGS_REGEXP);
              if (tagsQuery) {
                var database = tagsQuery[1];
                var measurement = tagsQuery[2];
                return (
                  'fromMetrics(token:"' +
                  database +
                  '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                  measurement +
                  '")\n    |> keys()'
                );
              }
              var tagValuesQuery = query.match(TAG_VALUES_REGEXP);
              if (tagValuesQuery) {
                var database = tagValuesQuery[1];
                var measurement = tagValuesQuery[2];
                var tag = tagValuesQuery[3];
                return (
                  'fromMetrics(token:"' +
                  database +
                  '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                  measurement +
                  '")\n    |> group(by:["' +
                  tag +
                  '"])\n    |> distinct(column:"' +
                  tag +
                  '")\n    |> group(none:true)'
                );
              }
              var fieldKeysQuery = query.match(FIELD_KEYS_REGEXP);
              if (fieldKeysQuery) {
                var database = fieldKeysQuery[1];
                var measurement = fieldKeysQuery[2];
                return (
                  'fromMetrics(token:"' +
                  database +
                  '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                  measurement +
                  '")\n    |> group(by:["_field"])\n    |> distinct(column:"_field")\n    |> group(none:true)'
                );
              }
              // By default return pure query
              return query;
            }

            /***/
          },

        /***/ './module.ts':
          /*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.AnnotationsQueryCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

            var _datasource = __webpack_require__(/*! ./datasource */ './datasource.ts');

            var _datasource2 = _interopRequireDefault(_datasource);

            var _query_ctrl = __webpack_require__(/*! ./query_ctrl */ './query_ctrl.ts');

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var InfluxConfigCtrl = /** @class */ (function() {
              function InfluxConfigCtrl() {}
              InfluxConfigCtrl.templateUrl = 'partials/config.html';
              return InfluxConfigCtrl;
            })();
            var InfluxAnnotationsQueryCtrl = /** @class */ (function() {
              function InfluxAnnotationsQueryCtrl() {}
              InfluxAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
              return InfluxAnnotationsQueryCtrl;
            })();
            exports.Datasource = _datasource2.default;
            exports.QueryCtrl = _query_ctrl.InfluxFluxQueryCtrl;
            exports.ConfigCtrl = InfluxConfigCtrl;
            exports.AnnotationsQueryCtrl = InfluxAnnotationsQueryCtrl;

            /***/
          },

        /***/ './query_ctrl.ts':
          /*!***********************!*\
  !*** ./query_ctrl.ts ***!
  \***********************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.InfluxFluxQueryCtrl = undefined;

            var _app_events = __webpack_require__(
              /*! grafana/app/core/app_events */ 'grafana/app/core/app_events'
            );

            var _app_events2 = _interopRequireDefault(_app_events);

            var _sdk = __webpack_require__(
              /*! grafana/app/plugins/sdk */ 'grafana/app/plugins/sdk'
            );

            __webpack_require__(
              /*! ./editor/editor_component */ './editor/editor_component.tsx'
            );

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) {
                      if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();

            function makeDefaultQuery(database) {
              return (
                'fromMetrics(token: "' +
                database +
                '")\n  |> range($range)\n  |> limit(n:1000)\n'
              );
            }
            var InfluxFluxQueryCtrl = /** @class */ (function(_super) {
              __extends(InfluxFluxQueryCtrl, _super);
              /** @ngInject **/
              function InfluxFluxQueryCtrl($scope, $injector) {
                var _this = _super.call(this, $scope, $injector) || this;
                _this.onDataReceived = function(dataList) {
                  _this.resultRecordCount = dataList.reduce(function(count, model) {
                    var records =
                      model.type === 'table'
                        ? model.rows.length
                        : model.datapoints.length;
                    return count + records;
                  }, 0);
                  _this.resultTableCount = dataList.length;
                };
                _this.onResponseReceived = function(response) {
                  _this.dataPreview = response.data;
                };
                _this.onRefresh = function() {
                  _this.dataPreview = '';
                  _this.resultRecordCount = '';
                  _this.resultTableCount = '';
                };
                _this.onChange = function(nextQuery) {
                  console.log('nextQuery', nextQuery);
                  _this.target.query = nextQuery;
                };
                _this.onExecute = function() {
                  console.log('Influx refresh metric data', _this.target);
                  _this.panelCtrl.refresh();
                };
                _this.requestMetadata = function(query) {
                  return _this.datasource.metricFindQuery(query);
                };
                _this.resultRecordCount = '';
                _this.resultTableCount = '';
                if (_this.target.query === undefined) {
                  _this.target.query = makeDefaultQuery(_this.datasource.database);
                }
                _this.defaultDatabase = _this.datasource.database;
                _this.resultFormats = [
                  {text: 'Time series', value: 'time_series'},
                  {text: 'Table', value: 'table'},
                ];
                _app_events2.default.on(
                  'ds-request-response',
                  _this.onResponseReceived,
                  $scope
                );
                _this.panelCtrl.events.on('refresh', _this.onRefresh, $scope);
                _this.panelCtrl.events.on('data-received', _this.onDataReceived, $scope);
                return _this;
              }
              InfluxFluxQueryCtrl.prototype.getCollapsedText = function() {
                return this.target.query;
              };
              InfluxFluxQueryCtrl.templateUrl = 'partials/query.editor.html';
              return InfluxFluxQueryCtrl;
            })(_sdk.QueryCtrl);
            exports.InfluxFluxQueryCtrl = InfluxFluxQueryCtrl;

            /***/
          },

        /***/ './response_parser.ts':
          /*!****************************!*\
  !*** ./response_parser.ts ***!
  \****************************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            'use strict';

            Object.defineProperty(exports, '__esModule', {
              value: true,
            });
            exports.parseTime = exports.parseValue = exports.getNameFromRecord = exports.getTagsFromRecord = undefined;
            exports.parseResults = parseResults;
            exports.getAnnotationsFromResult = getAnnotationsFromResult;
            exports.getTableModelFromResult = getTableModelFromResult;
            exports.getTimeSeriesFromResult = getTimeSeriesFromResult;
            exports.getValuesFromResult = getValuesFromResult;

            var _papaparse = __webpack_require__(
              /*! papaparse */ '../node_modules/papaparse/papaparse.js'
            );

            var _papaparse2 = _interopRequireDefault(_papaparse);

            var _flatten = __webpack_require__(
              /*! lodash/flatten */ '../node_modules/lodash/flatten.js'
            );

            var _flatten2 = _interopRequireDefault(_flatten);

            var _groupBy = __webpack_require__(
              /*! lodash/groupBy */ '../node_modules/lodash/groupBy.js'
            );

            var _groupBy2 = _interopRequireDefault(_groupBy);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {default: obj};
            }

            var filterColumnKeys = function filterColumnKeys(key) {
              return key && key[0] !== '_' && key !== 'result' && key !== 'table';
            };
            var IGNORE_FIELDS_FOR_NAME = ['result', '', 'table'];
            var getTagsFromRecord = (exports.getTagsFromRecord = function getTagsFromRecord(
              record
            ) {
              return Object.keys(record)
                .filter(function(key) {
                  return key[0] !== '_';
                })
                .filter(function(key) {
                  return IGNORE_FIELDS_FOR_NAME.indexOf(key) === -1;
                })
                .reduce(function(tags, key) {
                  tags[key] = record[key];
                  return tags;
                }, {});
            });
            var getNameFromRecord = (exports.getNameFromRecord = function getNameFromRecord(
              record
            ) {
              // Measurement and field
              var metric = [record._measurement, record._field];
              // Add tags
              var tags = getTagsFromRecord(record);
              var tagValues = Object.keys(tags).map(function(key) {
                return key + '=' + tags[key];
              });
              return metric.concat(tagValues).join(' ');
            });
            var determineFieldTypes = function determineFieldTypes(input, meta) {
              var typesByField = {};
              if (input[0] === '#') {
                var firstLine = input.split('\n')[0];
                var types_1 = firstLine.slice(1).split(',');
                if (types_1.length === meta.fields.length) {
                  meta.fields.forEach(function(f, i) {
                    typesByField[f] = types_1[i];
                  });
                }
              }
              return typesByField;
            };
            var parseCSV = function parseCSV(input) {
              var _a = _papaparse2.default.parse(input, {
                  header: true,
                  comments: '#',
                }),
                data = _a.data,
                meta = _a.meta;
              var types = determineFieldTypes(input, meta);
              return {data: data, types: types};
            };
            var parseValue = (exports.parseValue = function parseValue(input) {
              var value = parseFloat(input);
              return isNaN(value) ? null : value;
            });
            var parseValueWithType = function parseValueWithType(value, type) {
              var parsed = value;
              if (type) {
                try {
                  switch (type) {
                    case 'float':
                    case 'double':
                      parsed = parseFloat(value);
                      break;
                    case 'integer':
                    case 'long':
                      parsed = parseInt(value, 10);
                      break;
                    default:
                      break;
                  }
                } catch (error) {
                  console.error(error);
                }
              }
              return parsed;
            };
            var parseTime = (exports.parseTime = function parseTime(input) {
              return Date.parse(input);
            });
            function parseResults(response) {
              return response.trim().split(/\n\s*\s/);
            }
            function getAnnotationsFromResult(result, options) {
              var data = parseCSV(result).data;
              if (data.length === 0) {
                return [];
              }
              var annotations = [];
              var textSelector = options.textCol || '_value';
              var tagsSelector = options.tagsCol || '';
              var tagSelection = tagsSelector.split(',').map(function(t) {
                return t.trim();
              });
              data.forEach(function(record) {
                // Remove empty values, then split in different tags for comma separated values
                var tags = getTagsFromRecord(record);
                var tagValues = (0, _flatten2.default)(
                  tagSelection
                    .filter(function(tag) {
                      return tags[tag];
                    })
                    .map(function(tag) {
                      return tags[tag].split(',');
                    })
                );
                annotations.push({
                  annotation: options,
                  time: parseTime(record._time),
                  tags: tagValues,
                  text: record[textSelector],
                });
              });
              return annotations;
            }
            function getTableModelFromResult(result) {
              var _a = parseCSV(result),
                data = _a.data,
                types = _a.types;
              var table = {type: 'table', columns: [], rows: []};
              if (data.length > 0) {
                // First columns are fixed
                var firstColumns = [
                  {text: 'Time', id: '_time'},
                  {text: 'Measurement', id: '_measurement'},
                  {text: 'Field', id: '_field'},
                ];
                // Dynamically add columns for tags
                var firstRecord = data[0];
                var tags = Object.keys(firstRecord)
                  .filter(filterColumnKeys)
                  .map(function(key) {
                    return {id: key, text: key};
                  });
                var valueColumn = {id: '_value', text: 'Value'};
                var columns_1 = firstColumns.concat(tags, [valueColumn]);
                columns_1.forEach(function(c) {
                  return table.columns.push(c);
                });
                // Add rows
                var valueColumnIndex_1 = columns_1.length - 1;
                var valueColumnType_1 = types[valueColumn.id];
                data.forEach(function(record) {
                  var row = columns_1.map(function(c) {
                    return record[c.id];
                  });
                  row[valueColumnIndex_1] = parseValueWithType(
                    row[valueColumnIndex_1],
                    valueColumnType_1
                  );
                  table.rows.push(row);
                });
              }
              return table;
            }
            function getTimeSeriesFromResult(result) {
              var data = parseCSV(result).data;
              if (data.length === 0) {
                return [];
              }
              // Group results by table ID (assume one table per timeseries for now)
              var tables = (0, _groupBy2.default)(data, 'table');
              var seriesList = Object.keys(tables)
                .map(function(id) {
                  return tables[id];
                })
                .map(function(series) {
                  var datapoints = series.map(function(record) {
                    return [parseValue(record['_value']), parseTime(record['_time'])];
                  });
                  var alias = getNameFromRecord(series[0]);
                  return {datapoints: datapoints, target: alias};
                });
              return seriesList;
            }
            function getValuesFromResult(result) {
              var data = parseCSV(result).data;
              return data.map(function(record) {
                return record['_value'];
              });
            }

            /***/
          },

        /***/ './styles.css':
          /*!********************!*\
  !*** ./styles.css ***!
  \********************/
          /*! no static exports found */
          /***/ function(module, exports, __webpack_require__) {
            var content = __webpack_require__(
              /*! !../node_modules/css-loader??ref--5-1!./styles.css */ '../node_modules/css-loader/index.js??ref--5-1!./styles.css'
            );

            if (typeof content === 'string') content = [[module.i, content, '']];

            var transform;
            var insertInto;

            var options = {hmr: true};

            options.transform = transform;
            options.insertInto = undefined;

            var update = __webpack_require__(
              /*! ../node_modules/style-loader/lib/addStyles.js */ '../node_modules/style-loader/lib/addStyles.js'
            )(content, options);

            if (content.locals) module.exports = content.locals;

            if (false) {
            }

            /***/
          },

        /***/ 0:
          /*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
          /*! no static exports found */
          /***/ function(module, exports) {
            /* (ignored) */
            /***/
          },

        /***/ 'grafana/app/core/app_events':
          /*!**************************************!*\
  !*** external "app/core/app_events" ***!
  \**************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__;

            /***/
          },

        /***/ 'grafana/app/core/core_module':
          /*!***************************************!*\
  !*** external "app/core/core_module" ***!
  \***************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core_module__;

            /***/
          },

        /***/ 'grafana/app/core/utils/datemath':
          /*!******************************************!*\
  !*** external "app/core/utils/datemath" ***!
  \******************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__;

            /***/
          },

        /***/ 'grafana/app/plugins/sdk':
          /*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

            /***/
          },

        /***/ lodash:
          /*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

            /***/
          },

        /***/ prismjs:
          /*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_prismjs__;

            /***/
          },

        /***/ react:
          /*!************************!*\
  !*** external "react" ***!
  \************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

            /***/
          },

        /***/ 'react-dom':
          /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

            /***/
          },

        /***/ slate:
          /*!************************!*\
  !*** external "slate" ***!
  \************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_slate__;

            /***/
          },

        /***/ 'slate-plain-serializer':
          /*!*****************************************!*\
  !*** external "slate-plain-serializer" ***!
  \*****************************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_slate_plain_serializer__;

            /***/
          },

        /***/ 'slate-react':
          /*!******************************!*\
  !*** external "slate-react" ***!
  \******************************/
          /*! no static exports found */
          /***/ function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_slate_react__;

            /***/
          },

        /******/
      }
    );
  }
);
//# sourceMappingURL=module.js.map

import {
  Amplify,
  AmplifyError,
  AmplifyErrorCode,
  AmplifyUrl,
  AmplifyUrlSearchParams,
  Category,
  ConsoleLogger,
  EMPTY_HASH,
  Sha256,
  StorageAction,
  amzSdkInvocationIdHeaderMiddlewareFactory,
  amzSdkRequestHeaderMiddlewareFactory,
  awsConfig,
  composeServiceApi,
  composeTransferHandler,
  defaultStorage,
  extendedEncodeURIComponent,
  fetchAuthSession,
  getAmplifyUserAgent,
  getCurrentUser,
  getDnsSuffix,
  getHashedPayload,
  getRetryDecider,
  hasAwsConfig,
  jitteredBackoff,
  parseMetadata,
  presignUrl,
  retryMiddlewareFactory,
  signOut,
  signingMiddlewareFactory,
  userAgentMiddlewareFactory,
  withMemoization
} from "./chunk-SSBODX2K.js";
import {
  Client,
  Command,
  EndpointCache,
  HttpRequest,
  HttpResponse,
  NoOpLogger,
  ServiceException,
  _json,
  buildQueryString,
  calculateBodyLength,
  collectBody,
  customEndpointFunctions,
  decorateServiceException,
  escapeUri,
  expectBoolean,
  expectInt32,
  expectString,
  expectUnion,
  fromBase64,
  fromHex,
  fromUtf8,
  getContentLengthPlugin,
  getDefaultExtensionConfiguration,
  getEndpointPlugin,
  getHttpHandlerExtensionConfiguration,
  getSerdePlugin,
  getSmithyContext,
  invalidProvider,
  isArrayBuffer,
  isIpAddress,
  isValidHostLabel,
  limitedParseDouble,
  loadConfigsForDefaultMode,
  normalizeProvider,
  parseRfc7231DateTime,
  parseUrl,
  resolveDefaultRuntimeConfig,
  resolveEndpoint,
  resolveEndpointConfig,
  resolveHttpHandlerRuntimeConfig,
  take,
  toBase64,
  toHex,
  toUint8Array,
  toUtf8,
  v4,
  withBaseException
} from "./chunk-OITV5RAF.js";
import {
  __commonJS,
  __toESM,
  convertToBuffer,
  isEmptyData
} from "./chunk-NYHZIGVN.js";

// node_modules/crc-32/crc32.js
var require_crc32 = __commonJS({
  "node_modules/crc-32/crc32.js"(exports) {
    var CRC32;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_CRC === "undefined") {
        if ("object" === typeof exports) {
          factory(exports);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(CRC32 = {});
        }
      } else {
        factory(CRC32 = {});
      }
    })(function(CRC322) {
      CRC322.version = "1.2.2";
      function signed_crc_table() {
        var c2 = 0, table = new Array(256);
        for (var n2 = 0; n2 != 256; ++n2) {
          c2 = n2;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
          table[n2] = c2;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T10) {
        var c2 = 0, v2 = 0, n2 = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for (n2 = 0; n2 != 256; ++n2) table[n2] = T10[n2];
        for (n2 = 0; n2 != 256; ++n2) {
          v2 = T10[n2];
          for (c2 = 256 + n2; c2 < 4096; c2 += 256) v2 = table[c2] = v2 >>> 8 ^ T10[v2 & 255];
        }
        var out = [];
        for (n2 = 1; n2 != 16; ++n2) out[n2 - 1] = typeof Int32Array !== "undefined" ? table.subarray(n2 * 256, n2 * 256 + 256) : table.slice(n2 * 256, n2 * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0);
      var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
      var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
      var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        var C2 = seed ^ -1;
        for (var i2 = 0, L2 = bstr.length; i2 < L2; ) C2 = C2 >>> 8 ^ T0[(C2 ^ bstr.charCodeAt(i2++)) & 255];
        return ~C2;
      }
      function crc32_buf(B2, seed) {
        var C2 = seed ^ -1, L2 = B2.length - 15, i2 = 0;
        for (; i2 < L2; ) C2 = Tf[B2[i2++] ^ C2 & 255] ^ Te[B2[i2++] ^ C2 >> 8 & 255] ^ Td[B2[i2++] ^ C2 >> 16 & 255] ^ Tc[B2[i2++] ^ C2 >>> 24] ^ Tb[B2[i2++]] ^ Ta[B2[i2++]] ^ T9[B2[i2++]] ^ T8[B2[i2++]] ^ T7[B2[i2++]] ^ T6[B2[i2++]] ^ T5[B2[i2++]] ^ T4[B2[i2++]] ^ T3[B2[i2++]] ^ T2[B2[i2++]] ^ T1[B2[i2++]] ^ T0[B2[i2++]];
        L2 += 15;
        while (i2 < L2) C2 = C2 >>> 8 ^ T0[(C2 ^ B2[i2++]) & 255];
        return ~C2;
      }
      function crc32_str(str, seed) {
        var C2 = seed ^ -1;
        for (var i2 = 0, L2 = str.length, c2 = 0, d2 = 0; i2 < L2; ) {
          c2 = str.charCodeAt(i2++);
          if (c2 < 128) {
            C2 = C2 >>> 8 ^ T0[(C2 ^ c2) & 255];
          } else if (c2 < 2048) {
            C2 = C2 >>> 8 ^ T0[(C2 ^ (192 | c2 >> 6 & 31)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c2 & 63)) & 255];
          } else if (c2 >= 55296 && c2 < 57344) {
            c2 = (c2 & 1023) + 64;
            d2 = str.charCodeAt(i2++) & 1023;
            C2 = C2 >>> 8 ^ T0[(C2 ^ (240 | c2 >> 8 & 7)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c2 >> 2 & 63)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d2 >> 6 & 15 | (c2 & 3) << 4)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d2 & 63)) & 255];
          } else {
            C2 = C2 >>> 8 ^ T0[(C2 ^ (224 | c2 >> 12 & 15)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c2 >> 6 & 63)) & 255];
            C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c2 & 63)) & 255];
          }
        }
        return ~C2;
      }
      CRC322.table = T0;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
    });
  }
});

// node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/obliterator/iterator.js"(exports, module) {
    function Iterator(next) {
      Object.defineProperty(this, "_next", {
        writable: false,
        enumerable: false,
        value: next
      });
      this.done = false;
    }
    Iterator.prototype.next = function() {
      if (this.done)
        return { done: true };
      var step = this._next();
      if (step.done)
        this.done = true;
      return step;
    };
    if (typeof Symbol !== "undefined")
      Iterator.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator.of = function() {
      var args = arguments, l2 = args.length, i2 = 0;
      return new Iterator(function() {
        if (i2 >= l2)
          return { done: true };
        return { done: false, value: args[i2++] };
      });
    };
    Iterator.empty = function() {
      var iterator = new Iterator(null);
      iterator.done = true;
      return iterator;
    };
    Iterator.is = function(value2) {
      if (value2 instanceof Iterator)
        return true;
      return typeof value2 === "object" && value2 !== null && typeof value2.next === "function";
    };
    module.exports = Iterator;
  }
});

// node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/obliterator/foreach.js"(exports, module) {
    var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
    function forEach(iterable, callback) {
      var iterator, k2, i2, l2, s2;
      if (!iterable)
        throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i2 = 0, l2 = iterable.length; i2 < l2; i2++)
          callback(iterable[i2], i2);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i2 = 0;
        while (s2 = iterator.next(), s2.done !== true) {
          callback(s2.value, i2);
          i2++;
        }
        return;
      }
      for (k2 in iterable) {
        if (iterable.hasOwnProperty(k2)) {
          callback(iterable[k2], k2);
        }
      }
      return;
    }
    forEach.forEachWithNullKeys = function(iterable, callback) {
      var iterator, k2, i2, l2, s2;
      if (!iterable)
        throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i2 = 0, l2 = iterable.length; i2 < l2; i2++)
          callback(iterable[i2], null);
        return;
      }
      if (iterable instanceof Set) {
        iterable.forEach(function(value2) {
          callback(value2, null);
        });
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i2 = 0;
        while (s2 = iterator.next(), s2.done !== true) {
          callback(s2.value, null);
          i2++;
        }
        return;
      }
      for (k2 in iterable) {
        if (iterable.hasOwnProperty(k2)) {
          callback(iterable[k2], k2);
        }
      }
      return;
    };
    module.exports = forEach;
  }
});

// node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      return Float64Array;
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value2) {
      if (value2 === (value2 | 0)) {
        if (Math.sign(value2) === -1) {
          if (value2 <= 127 && value2 >= -128)
            return Int8Array;
          if (value2 <= 32767 && value2 >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value2 <= 255)
            return Uint8Array;
          if (value2 <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p2, t2, v2, i2, l2;
      for (i2 = 0, l2 = array.length; i2 < l2; i2++) {
        v2 = getter ? getter(array[i2]) : array[i2];
        t2 = exports.getNumberType(v2);
        p2 = TYPE_PRIORITY[t2.name];
        if (p2 > maxPriority) {
          maxPriority = p2;
          maxType = t2;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value2) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value2);
    };
    exports.concat = function() {
      var length = 0, i2, o2, l2;
      for (i2 = 0, l2 = arguments.length; i2 < l2; i2++)
        length += arguments[i2].length;
      var array = new arguments[0].constructor(length);
      for (i2 = 0, o2 = 0; i2 < l2; i2++) {
        array.set(arguments[i2], o2);
        o2 += arguments[i2].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i2 = 0; i2 < length; i2++)
        array[i2] = i2;
      return array;
    };
  }
});

// node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/mnemonist/utils/iterables.js"(exports) {
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    function toArray(target) {
      var l2 = guessLength(target);
      var array = typeof l2 === "number" ? new Array(l2) : [];
      var i2 = 0;
      forEach(target, function(value2) {
        array[i2++] = value2;
      });
      return array;
    }
    function toArrayWithIndices(target) {
      var l2 = guessLength(target);
      var IndexArray = typeof l2 === "number" ? typed.getPointerArray(l2) : Array;
      var array = typeof l2 === "number" ? new Array(l2) : [];
      var indices = typeof l2 === "number" ? new IndexArray(l2) : [];
      var i2 = 0;
      forEach(target, function(value2) {
        array[i2] = value2;
        indices[i2] = i2++;
      });
      return [array, indices];
    }
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/mnemonist/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/mnemonist/lru-cache.js"(exports, module) {
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCache2(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }
    LRUCache2.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    };
    LRUCache2.prototype.splayOnTop = function(pointer) {
      var oldHead = this.head;
      if (this.head === pointer)
        return this;
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.tail === pointer) {
        this.tail = previous;
      } else {
        this.backward[next] = previous;
      }
      this.forward[previous] = next;
      this.backward[oldHead] = pointer;
      this.head = pointer;
      this.forward[pointer] = oldHead;
      return this;
    };
    LRUCache2.prototype.set = function(key, value2) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value2;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value2;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCache2.prototype.setpop = function(key, value2) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value2;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value2;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCache2.prototype.has = function(key) {
      return key in this.items;
    };
    LRUCache2.prototype.get = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUCache2.prototype.peek = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUCache2.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      while (i2 < l2) {
        callback.call(scope, values[pointer], keys[pointer], this);
        pointer = forward[pointer];
        i2++;
      }
    };
    LRUCache2.prototype.keys = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, forward = this.forward;
      return new Iterator(function() {
        if (i2 >= l2)
          return { done: true };
        var key = keys[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value: key
        };
      });
    };
    LRUCache2.prototype.values = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i2 >= l2)
          return { done: true };
        var value2 = values[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value: value2
        };
      });
    };
    LRUCache2.prototype.entries = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i2 >= l2)
          return { done: true };
        var key = keys[pointer], value2 = values[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value: [key, value2]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
    LRUCache2.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      var iterator = this.entries(), step;
      while (step = iterator.next(), !step.done)
        proxy.set(step.value[0], step.value[1]);
      Object.defineProperty(proxy, "constructor", {
        value: LRUCache2,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
    LRUCache2.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache2 = new LRUCache2(Keys, Values, capacity);
      forEach(iterable, function(value2, key) {
        cache2.set(key, value2);
      });
      return cache2;
    };
    module.exports = LRUCache2;
  }
});

// node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "node_modules/bowser/es5.js"(exports, module) {
    !(function(e2, t2) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports ? exports.bowser = t2() : e2.bowser = t2();
    })(exports, (function() {
      return (function(e2) {
        var t2 = {};
        function r2(i2) {
          if (t2[i2]) return t2[i2].exports;
          var n2 = t2[i2] = { i: i2, l: false, exports: {} };
          return e2[i2].call(n2.exports, n2, n2.exports, r2), n2.l = true, n2.exports;
        }
        return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, i2) {
          r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: i2 });
        }, r2.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r2.t = function(e3, t3) {
          if (1 & t3 && (e3 = r2(e3)), 8 & t3) return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
          var i2 = /* @__PURE__ */ Object.create(null);
          if (r2.r(i2), Object.defineProperty(i2, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var n2 in e3) r2.d(i2, n2, function(t4) {
            return e3[t4];
          }.bind(null, n2));
          return i2;
        }, r2.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r2.p = "", r2(r2.s = 90);
      })({ 17: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2 = r2(18), n2 = (function() {
          function e3() {
          }
          return e3.getFirstMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 0 && r3[1] || "";
          }, e3.getSecondMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 1 && r3[2] || "";
          }, e3.matchAndReturnConst = function(e4, t3, r3) {
            if (e4.test(t3)) return r3;
          }, e3.getWindowsVersionName = function(e4) {
            switch (e4) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e3.getMacOSVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map((function(e5) {
              return parseInt(e5, 10) || 0;
            }));
            t3.push(0);
            var r3 = t3[0], i3 = t3[1];
            if (10 === r3) switch (i3) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
            switch (r3) {
              case 11:
                return "Big Sur";
              case 12:
                return "Monterey";
              case 13:
                return "Ventura";
              case 14:
                return "Sonoma";
              case 15:
                return "Sequoia";
              default:
                return;
            }
          }, e3.getAndroidVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map((function(e5) {
              return parseInt(e5, 10) || 0;
            }));
            if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
          }, e3.getVersionPrecision = function(e4) {
            return e4.split(".").length;
          }, e3.compareVersions = function(t3, r3, i3) {
            void 0 === i3 && (i3 = false);
            var n3 = e3.getVersionPrecision(t3), a2 = e3.getVersionPrecision(r3), o2 = Math.max(n3, a2), s2 = 0, u2 = e3.map([t3, r3], (function(t4) {
              var r4 = o2 - e3.getVersionPrecision(t4), i4 = t4 + new Array(r4 + 1).join(".0");
              return e3.map(i4.split("."), (function(e4) {
                return new Array(20 - e4.length).join("0") + e4;
              })).reverse();
            }));
            for (i3 && (s2 = o2 - Math.min(n3, a2)), o2 -= 1; o2 >= s2; ) {
              if (u2[0][o2] > u2[1][o2]) return 1;
              if (u2[0][o2] === u2[1][o2]) {
                if (o2 === s2) return 0;
                o2 -= 1;
              } else if (u2[0][o2] < u2[1][o2]) return -1;
            }
          }, e3.map = function(e4, t3) {
            var r3, i3 = [];
            if (Array.prototype.map) return Array.prototype.map.call(e4, t3);
            for (r3 = 0; r3 < e4.length; r3 += 1) i3.push(t3(e4[r3]));
            return i3;
          }, e3.find = function(e4, t3) {
            var r3, i3;
            if (Array.prototype.find) return Array.prototype.find.call(e4, t3);
            for (r3 = 0, i3 = e4.length; r3 < i3; r3 += 1) {
              var n3 = e4[r3];
              if (t3(n3, r3)) return n3;
            }
          }, e3.assign = function(e4) {
            for (var t3, r3, i3 = e4, n3 = arguments.length, a2 = new Array(n3 > 1 ? n3 - 1 : 0), o2 = 1; o2 < n3; o2++) a2[o2 - 1] = arguments[o2];
            if (Object.assign) return Object.assign.apply(Object, [e4].concat(a2));
            var s2 = function() {
              var e5 = a2[t3];
              "object" == typeof e5 && null !== e5 && Object.keys(e5).forEach((function(t4) {
                i3[t4] = e5[t4];
              }));
            };
            for (t3 = 0, r3 = a2.length; t3 < r3; t3 += 1) s2();
            return e4;
          }, e3.getBrowserAlias = function(e4) {
            return i2.BROWSER_ALIASES_MAP[e4];
          }, e3.getBrowserTypeByAlias = function(e4) {
            return i2.BROWSER_MAP[e4] || "";
          }, e3;
        })();
        t2.default = n2, e2.exports = t2.default;
      }, 18: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
        t2.BROWSER_ALIASES_MAP = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" };
        t2.BROWSER_MAP = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" };
        t2.PLATFORMS_MAP = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" };
        t2.OS_MAP = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" };
        t2.ENGINE_MAP = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
      }, 90: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(91)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        function o2(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var i3 = t3[r3];
            i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(e3, i3.key, i3);
          }
        }
        var s2 = (function() {
          function e3() {
          }
          var t3, r3, i3;
          return e3.getParser = function(e4, t4, r4) {
            if (void 0 === t4 && (t4 = false), void 0 === r4 && (r4 = null), "string" != typeof e4) throw new Error("UserAgent should be a string");
            return new n2.default(e4, t4, r4);
          }, e3.parse = function(e4, t4) {
            return void 0 === t4 && (t4 = null), new n2.default(e4, t4).getResult();
          }, t3 = e3, i3 = [{ key: "BROWSER_MAP", get: function() {
            return a2.BROWSER_MAP;
          } }, { key: "ENGINE_MAP", get: function() {
            return a2.ENGINE_MAP;
          } }, { key: "OS_MAP", get: function() {
            return a2.OS_MAP;
          } }, { key: "PLATFORMS_MAP", get: function() {
            return a2.PLATFORMS_MAP;
          } }], (r3 = null) && o2(t3.prototype, r3), i3 && o2(t3, i3), e3;
        })();
        t2.default = s2, e2.exports = t2.default;
      }, 91: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2 = u2(r2(92)), n2 = u2(r2(93)), a2 = u2(r2(94)), o2 = u2(r2(95)), s2 = u2(r2(17));
        function u2(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        var d2 = (function() {
          function e3(e4, t4, r3) {
            if (void 0 === t4 && (t4 = false), void 0 === r3 && (r3 = null), null == e4 || "" === e4) throw new Error("UserAgent parameter can't be empty");
            this._ua = e4;
            var i3 = false;
            "boolean" == typeof t4 ? (i3 = t4, this._hints = r3) : this._hints = null != t4 && "object" == typeof t4 ? t4 : null, this.parsedResult = {}, true !== i3 && this.parse();
          }
          var t3 = e3.prototype;
          return t3.getHints = function() {
            return this._hints;
          }, t3.hasBrand = function(e4) {
            if (!this._hints || !Array.isArray(this._hints.brands)) return false;
            var t4 = e4.toLowerCase();
            return this._hints.brands.some((function(e5) {
              return e5.brand && e5.brand.toLowerCase() === t4;
            }));
          }, t3.getBrandVersion = function(e4) {
            if (this._hints && Array.isArray(this._hints.brands)) {
              var t4 = e4.toLowerCase(), r3 = this._hints.brands.find((function(e5) {
                return e5.brand && e5.brand.toLowerCase() === t4;
              }));
              return r3 ? r3.version : void 0;
            }
          }, t3.getUA = function() {
            return this._ua;
          }, t3.test = function(e4) {
            return e4.test(this._ua);
          }, t3.parseBrowser = function() {
            var e4 = this;
            this.parsedResult.browser = {};
            var t4 = s2.default.find(i2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.browser = t4.describe(this.getUA(), this)), this.parsedResult.browser;
          }, t3.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t3.getBrowserName = function(e4) {
            return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t3.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t3.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t3.parseOS = function() {
            var e4 = this;
            this.parsedResult.os = {};
            var t4 = s2.default.find(n2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
          }, t3.getOSName = function(e4) {
            var t4 = this.getOS().name;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.getOSVersion = function() {
            return this.getOS().version;
          }, t3.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t3.getPlatformType = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.getPlatform().type;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.parsePlatform = function() {
            var e4 = this;
            this.parsedResult.platform = {};
            var t4 = s2.default.find(a2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
          }, t3.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t3.getEngineName = function(e4) {
            return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t3.parseEngine = function() {
            var e4 = this;
            this.parsedResult.engine = {};
            var t4 = s2.default.find(o2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
          }, t3.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t3.getResult = function() {
            return s2.default.assign({}, this.parsedResult);
          }, t3.satisfies = function(e4) {
            var t4 = this, r3 = {}, i3 = 0, n3 = {}, a3 = 0;
            if (Object.keys(e4).forEach((function(t5) {
              var o4 = e4[t5];
              "string" == typeof o4 ? (n3[t5] = o4, a3 += 1) : "object" == typeof o4 && (r3[t5] = o4, i3 += 1);
            })), i3 > 0) {
              var o3 = Object.keys(r3), u3 = s2.default.find(o3, (function(e5) {
                return t4.isOS(e5);
              }));
              if (u3) {
                var d3 = this.satisfies(r3[u3]);
                if (void 0 !== d3) return d3;
              }
              var c2 = s2.default.find(o3, (function(e5) {
                return t4.isPlatform(e5);
              }));
              if (c2) {
                var f2 = this.satisfies(r3[c2]);
                if (void 0 !== f2) return f2;
              }
            }
            if (a3 > 0) {
              var l2 = Object.keys(n3), b2 = s2.default.find(l2, (function(e5) {
                return t4.isBrowser(e5, true);
              }));
              if (void 0 !== b2) return this.compareVersion(n3[b2]);
            }
          }, t3.isBrowser = function(e4, t4) {
            void 0 === t4 && (t4 = false);
            var r3 = this.getBrowserName().toLowerCase(), i3 = e4.toLowerCase(), n3 = s2.default.getBrowserTypeByAlias(i3);
            return t4 && n3 && (i3 = n3.toLowerCase()), i3 === r3;
          }, t3.compareVersion = function(e4) {
            var t4 = [0], r3 = e4, i3 = false, n3 = this.getBrowserVersion();
            if ("string" == typeof n3) return ">" === e4[0] || "<" === e4[0] ? (r3 = e4.substr(1), "=" === e4[1] ? (i3 = true, r3 = e4.substr(2)) : t4 = [], ">" === e4[0] ? t4.push(1) : t4.push(-1)) : "=" === e4[0] ? r3 = e4.substr(1) : "~" === e4[0] && (i3 = true, r3 = e4.substr(1)), t4.indexOf(s2.default.compareVersions(n3, r3, i3)) > -1;
          }, t3.isOS = function(e4) {
            return this.getOSName(true) === String(e4).toLowerCase();
          }, t3.isPlatform = function(e4) {
            return this.getPlatformType(true) === String(e4).toLowerCase();
          }, t3.isEngine = function(e4) {
            return this.getEngineName(true) === String(e4).toLowerCase();
          }, t3.is = function(e4, t4) {
            return void 0 === t4 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
          }, t3.some = function(e4) {
            var t4 = this;
            return void 0 === e4 && (e4 = []), e4.some((function(e5) {
              return t4.is(e5);
            }));
          }, e3;
        })();
        t2.default = d2, e2.exports = t2.default;
      }, 92: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 };
        var a2 = /version\/(\d+(\.?_?\d+)+)/i, o2 = [{ test: [/gptbot/i], describe: function(e3) {
          var t3 = { name: "GPTBot" }, r3 = n2.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chatgpt-user/i], describe: function(e3) {
          var t3 = { name: "ChatGPT-User" }, r3 = n2.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/oai-searchbot/i], describe: function(e3) {
          var t3 = { name: "OAI-SearchBot" }, r3 = n2.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: function(e3) {
          var t3 = { name: "ClaudeBot" }, r3 = n2.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/omgilibot/i, /webzio-extended/i], describe: function(e3) {
          var t3 = { name: "Omgilibot" }, r3 = n2.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/diffbot/i], describe: function(e3) {
          var t3 = { name: "Diffbot" }, r3 = n2.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/perplexitybot/i], describe: function(e3) {
          var t3 = { name: "PerplexityBot" }, r3 = n2.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/perplexity-user/i], describe: function(e3) {
          var t3 = { name: "Perplexity-User" }, r3 = n2.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/youbot/i], describe: function(e3) {
          var t3 = { name: "YouBot" }, r3 = n2.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/meta-webindexer/i], describe: function(e3) {
          var t3 = { name: "Meta-WebIndexer" }, r3 = n2.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/meta-externalads/i], describe: function(e3) {
          var t3 = { name: "Meta-ExternalAds" }, r3 = n2.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/meta-externalagent/i], describe: function(e3) {
          var t3 = { name: "Meta-ExternalAgent" }, r3 = n2.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/meta-externalfetcher/i], describe: function(e3) {
          var t3 = { name: "Meta-ExternalFetcher" }, r3 = n2.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/googlebot/i], describe: function(e3) {
          var t3 = { name: "Googlebot" }, r3 = n2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/linespider/i], describe: function(e3) {
          var t3 = { name: "Linespider" }, r3 = n2.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/amazonbot/i], describe: function(e3) {
          var t3 = { name: "AmazonBot" }, r3 = n2.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/bingbot/i], describe: function(e3) {
          var t3 = { name: "BingCrawler" }, r3 = n2.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/baiduspider/i], describe: function(e3) {
          var t3 = { name: "BaiduSpider" }, r3 = n2.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/duckduckbot/i], describe: function(e3) {
          var t3 = { name: "DuckDuckBot" }, r3 = n2.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/ia_archiver/i], describe: function(e3) {
          var t3 = { name: "InternetArchiveCrawler" }, r3 = n2.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: function() {
          return { name: "FacebookExternalHit" };
        } }, { test: [/slackbot/i, /slack-imgProxy/i], describe: function(e3) {
          var t3 = { name: "SlackBot" }, r3 = n2.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/yahoo!?[\s/]*slurp/i], describe: function() {
          return { name: "YahooSlurp" };
        } }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: function() {
          return { name: "YandexBot" };
        } }, { test: [/pingdom/i], describe: function() {
          return { name: "PingdomBot" };
        } }, { test: [/opera/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opr\/|opios/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/SamsungBrowser/i], describe: function(e3) {
          var t3 = { name: "Samsung Internet for Android" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Whale/i], describe: function(e3) {
          var t3 = { name: "NAVER Whale Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/PaleMoon/i], describe: function(e3) {
          var t3 = { name: "Pale Moon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/MZBrowser/i], describe: function(e3) {
          var t3 = { name: "MZ Browser" }, r3 = n2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/focus/i], describe: function(e3) {
          var t3 = { name: "Focus" }, r3 = n2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/swing/i], describe: function(e3) {
          var t3 = { name: "Swing" }, r3 = n2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/coast/i], describe: function(e3) {
          var t3 = { name: "Opera Coast" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e3) {
          var t3 = { name: "Opera Touch" }, r3 = n2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/yabrowser/i], describe: function(e3) {
          var t3 = { name: "Yandex Browser" }, r3 = n2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/ucbrowser/i], describe: function(e3) {
          var t3 = { name: "UC Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Maxthon|mxios/i], describe: function(e3) {
          var t3 = { name: "Maxthon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/epiphany/i], describe: function(e3) {
          var t3 = { name: "Epiphany" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/puffin/i], describe: function(e3) {
          var t3 = { name: "Puffin" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sleipnir/i], describe: function(e3) {
          var t3 = { name: "Sleipnir" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/k-meleon/i], describe: function(e3) {
          var t3 = { name: "K-Meleon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/micromessenger/i], describe: function(e3) {
          var t3 = { name: "WeChat" }, r3 = n2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qqbrowser/i], describe: function(e3) {
          var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = n2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/msie|trident/i], describe: function(e3) {
          var t3 = { name: "Internet Explorer" }, r3 = n2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/\sedg\//i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/edg([ea]|ios)/i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/vivaldi/i], describe: function(e3) {
          var t3 = { name: "Vivaldi" }, r3 = n2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/seamonkey/i], describe: function(e3) {
          var t3 = { name: "SeaMonkey" }, r3 = n2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sailfish/i], describe: function(e3) {
          var t3 = { name: "Sailfish" }, r3 = n2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/silk/i], describe: function(e3) {
          var t3 = { name: "Amazon Silk" }, r3 = n2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/phantom/i], describe: function(e3) {
          var t3 = { name: "PhantomJS" }, r3 = n2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/slimerjs/i], describe: function(e3) {
          var t3 = { name: "SlimerJS" }, r3 = n2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = { name: "BlackBerry" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = { name: "WebOS Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = { name: "Bada" }, r3 = n2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = { name: "Tizen" }, r3 = n2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qupzilla/i], describe: function(e3) {
          var t3 = { name: "QupZilla" }, r3 = n2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/librewolf/i], describe: function(e3) {
          var t3 = { name: "LibreWolf" }, r3 = n2.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e3) {
          var t3 = { name: "Firefox" }, r3 = n2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/electron/i], describe: function(e3) {
          var t3 = { name: "Electron" }, r3 = n2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i], describe: function(e3) {
          var t3 = { name: "Sogou Browser" }, r3 = n2.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, e3), i3 = n2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3), a3 = n2.default.getFirstMatch(/se ([\d.]+)x/i, e3), o3 = r3 || i3 || a3;
          return o3 && (t3.version = o3), t3;
        } }, { test: [/MiuiBrowser/i], describe: function(e3) {
          var t3 = { name: "Miui" }, r3 = n2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          return !!e3.hasBrand("DuckDuckGo") || e3.test(/\sDdg\/[\d.]+$/i);
        }, describe: function(e3, t3) {
          var r3 = { name: "DuckDuckGo" };
          if (t3) {
            var i3 = t3.getBrandVersion("DuckDuckGo");
            if (i3) return r3.version = i3, r3;
          }
          var a3 = n2.default.getFirstMatch(/\sDdg\/([\d.]+)$/i, e3);
          return a3 && (r3.version = a3), r3;
        } }, { test: function(e3) {
          return e3.hasBrand("Brave");
        }, describe: function(e3, t3) {
          var r3 = { name: "Brave" };
          if (t3) {
            var i3 = t3.getBrandVersion("Brave");
            if (i3) return r3.version = i3, r3;
          }
          return r3;
        } }, { test: [/chromium/i], describe: function(e3) {
          var t3 = { name: "Chromium" }, r3 = n2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chrome|crios|crmo/i], describe: function(e3) {
          var t3 = { name: "Chrome" }, r3 = n2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/GSA/i], describe: function(e3) {
          var t3 = { name: "Google Search" }, r3 = n2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = { name: "Android Browser" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/playstation 4/i], describe: function(e3) {
          var t3 = { name: "PlayStation 4" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/safari|applewebkit/i], describe: function(e3) {
          var t3 = { name: "Safari" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/.*/i], describe: function(e3) {
          var t3 = -1 !== e3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: n2.default.getFirstMatch(t3, e3), version: n2.default.getSecondMatch(t3, e3) };
        } }];
        t2.default = o2, e2.exports = t2.default;
      }, 93: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: [/Roku\/DVP/], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
          return { name: a2.OS_MAP.Roku, version: t3 };
        } }, { test: [/windows phone/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.WindowsPhone, version: t3 };
        } }, { test: [/windows /i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = n2.default.getWindowsVersionName(t3);
          return { name: a2.OS_MAP.Windows, version: t3, versionName: r3 };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e3) {
          var t3 = { name: a2.OS_MAP.iOS }, r3 = n2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/macintosh/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = n2.default.getMacOSVersionName(t3), i3 = { name: a2.OS_MAP.MacOS, version: t3 };
          return r3 && (i3.versionName = r3), i3;
        } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
          return { name: a2.OS_MAP.iOS, version: t3 };
        } }, { test: [/OpenHarmony/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.HarmonyOS, version: t3 };
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = n2.default.getAndroidVersionName(t3), i3 = { name: a2.OS_MAP.Android, version: t3 };
          return r3 && (i3.versionName = r3), i3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: a2.OS_MAP.WebOS };
          return t3 && t3.length && (r3.version = t3), r3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || n2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || n2.default.getFirstMatch(/\bbb(\d+)/i, e3);
          return { name: a2.OS_MAP.BlackBerry, version: t3 };
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.Bada, version: t3 };
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.Tizen, version: t3 };
        } }, { test: [/linux/i], describe: function() {
          return { name: a2.OS_MAP.Linux };
        } }, { test: [/CrOS/], describe: function() {
          return { name: a2.OS_MAP.ChromeOS };
        } }, { test: [/PlayStation 4/], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.PlayStation4, version: t3 };
        } }];
        t2.default = o2, e2.exports = t2.default;
      }, 94: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: [/googlebot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Google" };
        } }, { test: [/linespider/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Line" };
        } }, { test: [/amazonbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Amazon" };
        } }, { test: [/gptbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        } }, { test: [/chatgpt-user/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        } }, { test: [/oai-searchbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        } }, { test: [/baiduspider/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Baidu" };
        } }, { test: [/bingbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Bing" };
        } }, { test: [/duckduckbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "DuckDuckGo" };
        } }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Anthropic" };
        } }, { test: [/omgilibot/i, /webzio-extended/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Webz.io" };
        } }, { test: [/diffbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Diffbot" };
        } }, { test: [/perplexitybot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Perplexity AI" };
        } }, { test: [/perplexity-user/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Perplexity AI" };
        } }, { test: [/youbot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "You.com" };
        } }, { test: [/ia_archiver/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Internet Archive" };
        } }, { test: [/meta-webindexer/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        } }, { test: [/meta-externalads/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        } }, { test: [/meta-externalagent/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        } }, { test: [/meta-externalfetcher/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        } }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        } }, { test: [/slackbot/i, /slack-imgProxy/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Slack" };
        } }, { test: [/yahoo/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Yahoo" };
        } }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Yandex" };
        } }, { test: [/pingdom/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Pingdom" };
        } }, { test: [/huawei/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: a2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t3 && (r3.model = t3), r3;
        } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        } }, { test: [/ipad/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/kftt build/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        } }, { test: [/silk/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        } }, { test: [/tablet(?! pc)/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/(ipod|iphone)/i, e3);
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
        } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        } }, { test: [/Nokia/i], describe: function(e3) {
          var t3 = n2.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, e3), r3 = { type: a2.PLATFORMS_MAP.mobile, vendor: "Nokia" };
          return t3 && (r3.model = t3), r3;
        } }, { test: [/[^-]mobi/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "blackberry" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        } }, { test: function(e3) {
          return "bada" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "windows phone" === e3.getBrowserName();
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        } }, { test: function(e3) {
          var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
          return "android" === e3.getOSName(true) && t3 >= 3;
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          return "android" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        } }, { test: [/smart-?tv|smarttv/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tv };
        } }, { test: [/netcast/i], describe: function() {
          return { type: a2.PLATFORMS_MAP.tv };
        } }, { test: function(e3) {
          return "macos" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.desktop, vendor: "Apple" };
        } }, { test: function(e3) {
          return "windows" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "linux" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "playstation 4" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.tv };
        } }, { test: function(e3) {
          return "roku" === e3.getOSName(true);
        }, describe: function() {
          return { type: a2.PLATFORMS_MAP.tv };
        } }];
        t2.default = o2, e2.exports = t2.default;
      }, 95: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: function(e3) {
          return "microsoft edge" === e3.getBrowserName(true);
        }, describe: function(e3) {
          if (/\sedg\//i.test(e3)) return { name: a2.ENGINE_MAP.Blink };
          var t3 = n2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
          return { name: a2.ENGINE_MAP.EdgeHTML, version: t3 };
        } }, { test: [/trident/i], describe: function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Trident }, r3 = n2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          return e3.test(/presto/i);
        }, describe: function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Presto }, r3 = n2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Gecko }, r3 = n2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
          return { name: a2.ENGINE_MAP.Blink };
        } }, { test: [/(apple)?webkit/i], describe: function(e3) {
          var t3 = { name: a2.ENGINE_MAP.WebKit }, r3 = n2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }];
        t2.default = o2, e2.exports = t2.default;
      } });
    }));
  }
});

// node_modules/@smithy/md5-js/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf82 = (input) => new TextEncoder().encode(input);

// node_modules/@smithy/md5-js/dist-es/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 16;
var INIT = [1732584193, 4023233417, 2562383102, 271733878];

// node_modules/@smithy/md5-js/dist-es/index.js
var Md5 = class {
  constructor() {
    this.reset();
  }
  update(sourceData) {
    if (isEmptyData2(sourceData)) {
      return;
    } else if (this.finished) {
      throw new Error("Attempted to update an already finished hash.");
    }
    const data = convertToBuffer2(sourceData);
    let position = 0;
    let { byteLength: byteLength2 } = data;
    this.bytesHashed += byteLength2;
    while (byteLength2 > 0) {
      this.buffer.setUint8(this.bufferLength++, data[position++]);
      byteLength2--;
      if (this.bufferLength === BLOCK_SIZE) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  }
  async digest() {
    if (!this.finished) {
      const { buffer, bufferLength: undecoratedLength, bytesHashed } = this;
      const bitsHashed = bytesHashed * 8;
      buffer.setUint8(this.bufferLength++, 128);
      if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
        for (let i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
          buffer.setUint8(i2, 0);
        }
        this.hashBuffer();
        this.bufferLength = 0;
      }
      for (let i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
        buffer.setUint8(i2, 0);
      }
      buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
      buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 4294967296), true);
      this.hashBuffer();
      this.finished = true;
    }
    const out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
    for (let i2 = 0; i2 < 4; i2++) {
      out.setUint32(i2 * 4, this.state[i2], true);
    }
    return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
  }
  hashBuffer() {
    const { buffer, state } = this;
    let a2 = state[0], b2 = state[1], c2 = state[2], d2 = state[3];
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(0, true), 7, 3614090360);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(4, true), 12, 3905402710);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(8, true), 17, 606105819);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(12, true), 22, 3250441966);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(16, true), 7, 4118548399);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(20, true), 12, 1200080426);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(24, true), 17, 2821735955);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(28, true), 22, 4249261313);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(32, true), 7, 1770035416);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(36, true), 12, 2336552879);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(40, true), 17, 4294925233);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(44, true), 22, 2304563134);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(48, true), 7, 1804603682);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(52, true), 12, 4254626195);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(56, true), 17, 2792965006);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(60, true), 22, 1236535329);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(4, true), 5, 4129170786);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(24, true), 9, 3225465664);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(44, true), 14, 643717713);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(0, true), 20, 3921069994);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(20, true), 5, 3593408605);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(40, true), 9, 38016083);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(60, true), 14, 3634488961);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(16, true), 20, 3889429448);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(36, true), 5, 568446438);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(56, true), 9, 3275163606);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(12, true), 14, 4107603335);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(32, true), 20, 1163531501);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(52, true), 5, 2850285829);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(8, true), 9, 4243563512);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(28, true), 14, 1735328473);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(48, true), 20, 2368359562);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(20, true), 4, 4294588738);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(32, true), 11, 2272392833);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(44, true), 16, 1839030562);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(56, true), 23, 4259657740);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(4, true), 4, 2763975236);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(16, true), 11, 1272893353);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(28, true), 16, 4139469664);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(40, true), 23, 3200236656);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(52, true), 4, 681279174);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(0, true), 11, 3936430074);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(12, true), 16, 3572445317);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(24, true), 23, 76029189);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(36, true), 4, 3654602809);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(48, true), 11, 3873151461);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(60, true), 16, 530742520);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(8, true), 23, 3299628645);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(0, true), 6, 4096336452);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(28, true), 10, 1126891415);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(56, true), 15, 2878612391);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(20, true), 21, 4237533241);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(48, true), 6, 1700485571);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(12, true), 10, 2399980690);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(40, true), 15, 4293915773);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(4, true), 21, 2240044497);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(32, true), 6, 1873313359);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(60, true), 10, 4264355552);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(24, true), 15, 2734768916);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(52, true), 21, 1309151649);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(16, true), 6, 4149444226);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(44, true), 10, 3174756917);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(8, true), 15, 718787259);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(36, true), 21, 3951481745);
    state[0] = a2 + state[0] & 4294967295;
    state[1] = b2 + state[1] & 4294967295;
    state[2] = c2 + state[2] & 4294967295;
    state[3] = d2 + state[3] & 4294967295;
  }
  reset() {
    this.state = Uint32Array.from(INIT);
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
  }
};
function cmn(q2, a2, b2, x2, s2, t2) {
  a2 = (a2 + q2 & 4294967295) + (x2 + t2 & 4294967295) & 4294967295;
  return (a2 << s2 | a2 >>> 32 - s2) + b2 & 4294967295;
}
function ff(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & c2 | ~b2 & d2, a2, b2, x2, s2, t2);
}
function gg(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & d2 | c2 & ~d2, a2, b2, x2, s2, t2);
}
function hh(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 ^ c2 ^ d2, a2, b2, x2, s2, t2);
}
function ii(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(c2 ^ (b2 | ~d2), a2, b2, x2, s2, t2);
}
function isEmptyData2(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
function convertToBuffer2(data) {
  if (typeof data === "string") {
    return fromUtf82(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/constants.mjs
var NETWORK_ERROR_MESSAGE = "Network Error";
var NETWORK_ERROR_CODE = "ERR_NETWORK";
var ABORT_ERROR_MESSAGE = "Request aborted";
var ABORT_ERROR_CODE = "ERR_ABORTED";
var CANCELED_ERROR_MESSAGE = "canceled";
var CANCELED_ERROR_CODE = "ERR_CANCELED";
var CONTENT_SHA256_HEADER = "x-amz-content-sha256";

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/contentSha256middleware.mjs
var contentSha256MiddlewareFactory = () => (next) => async function contentSha256Middleware(request) {
  if (request.headers[CONTENT_SHA256_HEADER]) {
    return next(request);
  } else {
    const hash = await getHashedPayload(request.body);
    request.headers[CONTENT_SHA256_HEADER] = hash;
    return next(request);
  }
};

// node_modules/@aws-amplify/storage/dist/esm/errors/StorageError.mjs
var StorageError = class _StorageError extends AmplifyError {
  constructor(params) {
    super(params);
    this.constructor = _StorageError;
    Object.setPrototypeOf(this, _StorageError.prototype);
  }
};

// node_modules/@aws-amplify/storage/dist/esm/errors/CanceledError.mjs
var CanceledError = class _CanceledError extends StorageError {
  constructor(params = {}) {
    super({
      name: "CanceledError",
      message: "Upload is canceled by user",
      ...params
    });
    this.constructor = _CanceledError;
    Object.setPrototypeOf(this, _CanceledError.prototype);
  }
};
var isCancelError = (error) => !!error && error instanceof CanceledError;

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/xhrTransferHandler.mjs
var logger = new ConsoleLogger("xhr-http-handler");
var xhrTransferHandler = (request, options) => {
  const { url, method, headers, body } = request;
  const { onDownloadProgress, onUploadProgress, responseType, abortSignal } = options;
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url.toString());
    Object.entries(headers).filter(([header]) => !FORBIDDEN_HEADERS.includes(header)).forEach(([header, value2]) => {
      xhr.setRequestHeader(header, value2);
    });
    xhr.responseType = responseType;
    if (onDownloadProgress) {
      xhr.addEventListener("progress", (event) => {
        onDownloadProgress(convertToTransferProgressEvent(event));
        logger.debug(event);
      });
    }
    if (onUploadProgress) {
      xhr.upload.addEventListener("progress", (event) => {
        onUploadProgress(convertToTransferProgressEvent(event));
        logger.debug(event);
      });
    }
    xhr.addEventListener("error", () => {
      const networkError = new StorageError({
        message: NETWORK_ERROR_MESSAGE,
        name: NETWORK_ERROR_CODE
      });
      logger.error(NETWORK_ERROR_MESSAGE);
      reject(networkError);
      xhr = null;
    });
    xhr.addEventListener("abort", () => {
      if (!xhr || abortSignal?.aborted)
        return;
      const error = buildHandlerError(ABORT_ERROR_MESSAGE, ABORT_ERROR_CODE);
      logger.error(ABORT_ERROR_MESSAGE);
      reject(error);
      xhr = null;
    });
    xhr.addEventListener("readystatechange", () => {
      if (!xhr || xhr.readyState !== xhr.DONE) {
        return;
      }
      const onloadend = () => {
        if (!xhr)
          return;
        const responseHeaders = convertResponseHeaders(xhr.getAllResponseHeaders());
        const { responseType: loadEndResponseType } = xhr;
        const responseBlob = xhr.response;
        const responseText = loadEndResponseType === "text" ? xhr.responseText : "";
        const bodyMixIn = {
          blob: () => Promise.resolve(responseBlob),
          text: withMemoization(() => loadEndResponseType === "blob" ? readBlobAsText(responseBlob) : Promise.resolve(responseText)),
          json: () => Promise.reject(
            // S3 does not support JSON response. So fail-fast here with nicer error message.
            new Error("Parsing response to JSON is not implemented. Please use response.text() instead.")
          )
        };
        const response = {
          statusCode: xhr.status,
          headers: responseHeaders,
          // The xhr.responseType is only set to 'blob' for streaming binary S3 object data. The streaming data is
          // exposed via public interface of Storage.get(). So we need to return the response as a Blob object for
          // backward compatibility. In other cases, the response payload is only used internally, we return it is
          // {@link ResponseBodyMixin}
          body: xhr.responseType === "blob" ? Object.assign(responseBlob, bodyMixIn) : bodyMixIn
        };
        resolve(response);
        xhr = null;
      };
      setTimeout(onloadend);
    });
    if (abortSignal) {
      const onCanceled = () => {
        if (!xhr) {
          return;
        }
        const canceledError = new CanceledError({
          name: CANCELED_ERROR_CODE,
          message: CANCELED_ERROR_MESSAGE
        });
        reject(canceledError);
        xhr.abort();
        xhr = null;
      };
      abortSignal.aborted ? onCanceled() : abortSignal.addEventListener("abort", onCanceled);
    }
    if (typeof ReadableStream === "function" && body instanceof ReadableStream) {
      throw new Error("ReadableStream request payload is not supported.");
    }
    xhr.send(body ?? null);
  });
};
var convertToTransferProgressEvent = (event) => ({
  // `loaded` can exceed the `total` in some cases due to platform issues/bugs e.g. React Native & Expo Android
  // clamp `loaded` values down to `total` if possible.
  transferredBytes: event.lengthComputable ? Math.min(event.loaded, event.total) : event.loaded,
  totalBytes: event.lengthComputable ? event.total : void 0
});
var buildHandlerError = (message2, name) => {
  const error = new Error(message2);
  error.name = name;
  return error;
};
var convertResponseHeaders = (xhrHeaders) => {
  if (!xhrHeaders) {
    return {};
  }
  return xhrHeaders.split("\r\n").reduce((headerMap, line) => {
    const parts = line.split(": ");
    const header = parts.shift();
    const value2 = parts.join(": ");
    headerMap[header.toLowerCase()] = value2;
    return headerMap;
  }, {});
};
var readBlobAsText = (blob) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      if (reader.readyState !== FileReader.DONE) {
        return;
      }
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
    reader.readAsText(blob);
  });
};
var FORBIDDEN_HEADERS = ["host"];

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/s3TransferHandler/xhr.mjs
var s3TransferHandler = composeTransferHandler(xhrTransferHandler, [
  contentSha256MiddlewareFactory,
  userAgentMiddlewareFactory,
  amzSdkInvocationIdHeaderMiddlewareFactory,
  retryMiddlewareFactory,
  amzSdkRequestHeaderMiddlewareFactory,
  signingMiddlewareFactory
]);

// node_modules/@aws-amplify/storage/dist/esm/errors/types/validation.mjs
var StorageValidationErrorCode;
(function(StorageValidationErrorCode2) {
  StorageValidationErrorCode2["NoCredentials"] = "NoCredentials";
  StorageValidationErrorCode2["NoIdentityId"] = "NoIdentityId";
  StorageValidationErrorCode2["NoKey"] = "NoKey";
  StorageValidationErrorCode2["NoSourceKey"] = "NoSourceKey";
  StorageValidationErrorCode2["NoDestinationKey"] = "NoDestinationKey";
  StorageValidationErrorCode2["NoSourcePath"] = "NoSourcePath";
  StorageValidationErrorCode2["NoDestinationPath"] = "NoDestinationPath";
  StorageValidationErrorCode2["NoBucket"] = "NoBucket";
  StorageValidationErrorCode2["NoRegion"] = "NoRegion";
  StorageValidationErrorCode2["InvalidStorageBucket"] = "InvalidStorageBucket";
  StorageValidationErrorCode2["InvalidCopyOperationStorageBucket"] = "InvalidCopyOperationStorageBucket";
  StorageValidationErrorCode2["InvalidStorageOperationPrefixInput"] = "InvalidStorageOperationPrefixInput";
  StorageValidationErrorCode2["InvalidStorageOperationInput"] = "InvalidStorageOperationInput";
  StorageValidationErrorCode2["InvalidAWSAccountID"] = "InvalidAWSAccountID";
  StorageValidationErrorCode2["InvalidStoragePathInput"] = "InvalidStoragePathInput";
  StorageValidationErrorCode2["InvalidUploadSource"] = "InvalidUploadSource";
  StorageValidationErrorCode2["ObjectIsTooLarge"] = "ObjectIsTooLarge";
  StorageValidationErrorCode2["UrlExpirationMaxLimitExceed"] = "UrlExpirationMaxLimitExceed";
  StorageValidationErrorCode2["InvalidLocationCredentialsCacheSize"] = "InvalidLocationCredentialsCacheSize";
  StorageValidationErrorCode2["LocationCredentialsStoreDestroyed"] = "LocationCredentialsStoreDestroyed";
  StorageValidationErrorCode2["InvalidS3Uri"] = "InvalidS3Uri";
  StorageValidationErrorCode2["InvalidCustomEndpoint"] = "InvalidCustomEndpoint";
  StorageValidationErrorCode2["ForcePathStyleEndpointNotSupported"] = "ForcePathStyleEndpointNotSupported";
  StorageValidationErrorCode2["DnsIncompatibleBucketName"] = "DnsIncompatibleBucketName";
})(StorageValidationErrorCode || (StorageValidationErrorCode = {}));
var validationErrorMap = {
  [StorageValidationErrorCode.NoCredentials]: {
    message: "Credentials should not be empty."
  },
  [StorageValidationErrorCode.NoIdentityId]: {
    message: "Missing identity ID when accessing objects in protected or private access level."
  },
  [StorageValidationErrorCode.NoKey]: {
    message: "Missing key in api call."
  },
  [StorageValidationErrorCode.NoSourceKey]: {
    message: "Missing source key in copy api call."
  },
  [StorageValidationErrorCode.NoDestinationKey]: {
    message: "Missing destination key in copy api call."
  },
  [StorageValidationErrorCode.NoSourcePath]: {
    message: "Missing source path in copy api call."
  },
  [StorageValidationErrorCode.NoDestinationPath]: {
    message: "Missing destination path in copy api call."
  },
  [StorageValidationErrorCode.NoBucket]: {
    message: "Missing bucket name while accessing object."
  },
  [StorageValidationErrorCode.NoRegion]: {
    message: "Missing region while accessing object."
  },
  [StorageValidationErrorCode.UrlExpirationMaxLimitExceed]: {
    message: "Url Expiration can not be greater than 7 Days."
  },
  [StorageValidationErrorCode.ObjectIsTooLarge]: {
    message: "Object size cannot not be greater than 5TB."
  },
  [StorageValidationErrorCode.InvalidUploadSource]: {
    message: "Upload source type can only be a `Blob`, `File`, `ArrayBuffer`, or `string`."
  },
  [StorageValidationErrorCode.InvalidStorageOperationInput]: {
    message: "Path or key parameter must be specified in the input. Both can not be specified at the same time."
  },
  [StorageValidationErrorCode.InvalidAWSAccountID]: {
    message: "Invalid AWS account ID was provided."
  },
  [StorageValidationErrorCode.InvalidStorageOperationPrefixInput]: {
    message: "Both path and prefix can not be specified at the same time."
  },
  [StorageValidationErrorCode.InvalidStoragePathInput]: {
    message: "Input `path` does not allow a leading slash (/)."
  },
  [StorageValidationErrorCode.InvalidLocationCredentialsCacheSize]: {
    message: "locationCredentialsCacheSize must be a positive integer."
  },
  [StorageValidationErrorCode.LocationCredentialsStoreDestroyed]: {
    message: `Location-specific credentials store has been destroyed.`
  },
  [StorageValidationErrorCode.InvalidS3Uri]: {
    message: "Invalid S3 URI."
  },
  [StorageValidationErrorCode.InvalidStorageBucket]: {
    message: "Unable to lookup bucket from provided name in Amplify configuration."
  },
  [StorageValidationErrorCode.InvalidCopyOperationStorageBucket]: {
    message: "Missing bucket option in either source or destination."
  },
  [StorageValidationErrorCode.InvalidCustomEndpoint]: {
    message: "Invalid S3 custom endpoint."
  },
  [StorageValidationErrorCode.ForcePathStyleEndpointNotSupported]: {
    message: "Path style URLs are not supported with S3 Transfer Acceleration."
  },
  [StorageValidationErrorCode.DnsIncompatibleBucketName]: {
    message: `The bucket name isn't DNS compatible.`
  }
};

// node_modules/@aws-amplify/storage/dist/esm/errors/utils/assertValidationError.mjs
function assertValidationError(assertion, name) {
  const { message: message2, recoverySuggestion } = validationErrorMap[name];
  if (!assertion) {
    throw new StorageError({ name, message: message2, recoverySuggestion });
  }
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/constants.mjs
var LOCAL_TESTING_S3_ENDPOINT = "http://localhost:20005";
var DEFAULT_ACCESS_LEVEL = "guest";
var DEFAULT_PRESIGN_EXPIRATION = 900;
var MAX_URL_EXPIRATION = 7 * 24 * 60 * 60 * 1e3;
var MiB = 1024 * 1024;
var GiB = 1024 * MiB;
var TiB = 1024 * GiB;
var DEFAULT_PART_SIZE = 5 * MiB;
var MAX_OBJECT_SIZE = 5 * TiB;
var MAX_PARTS_COUNT = 1e4;
var DEFAULT_QUEUE_SIZE = 4;
var UPLOADS_STORAGE_KEY = "__uploadInProgress";
var STORAGE_INPUT_KEY = "key";
var STORAGE_INPUT_PATH = "path";
var CHECKSUM_ALGORITHM_CRC32 = "crc-32";

// node_modules/@aws-amplify/storage/dist/esm/utils/logger.mjs
var logger2 = new ConsoleLogger("Storage");

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/transferTask.mjs
var createCancellableTask = ({ job, onCancel }) => {
  const state = "IN_PROGRESS";
  let canceledErrorMessage;
  const cancelableTask = {
    cancel: (message2) => {
      const { state: taskState } = cancelableTask;
      if (taskState === "CANCELED" || taskState === "ERROR" || taskState === "SUCCESS") {
        logger2.debug(`This task cannot be canceled. State: ${taskState}`);
        return;
      }
      cancelableTask.state = "CANCELED";
      canceledErrorMessage = message2;
      onCancel(canceledErrorMessage);
    },
    state
  };
  const wrappedJobPromise = (async () => {
    try {
      const result = await job();
      cancelableTask.state = "SUCCESS";
      return result;
    } catch (e2) {
      if (isCancelError(e2)) {
        cancelableTask.state = "CANCELED";
        e2.message = canceledErrorMessage ?? e2.message;
      }
      cancelableTask.state = "ERROR";
      throw e2;
    }
  })();
  return Object.assign(cancelableTask, {
    result: wrappedJobPromise
  });
};
var createUploadTask = ({ job, onCancel, onResume, onPause, isMultipartUpload }) => {
  const cancellableTask = createCancellableTask({
    job,
    onCancel
  });
  const uploadTask = Object.assign(cancellableTask, {
    pause: () => {
      const { state } = uploadTask;
      if (!isMultipartUpload || state !== "IN_PROGRESS") {
        logger2.debug(`This task cannot be paused. State: ${state}`);
        return;
      }
      uploadTask.state = "PAUSED";
      onPause?.();
    },
    resume: () => {
      const { state } = uploadTask;
      if (!isMultipartUpload || state !== "PAUSED") {
        logger2.debug(`This task cannot be resumed. State: ${state}`);
        return;
      }
      uploadTask.state = "IN_PROGRESS";
      onResume?.();
    }
  });
  return uploadTask;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/byteLength.mjs
var byteLength = (input) => {
  if (input === null || input === void 0)
    return 0;
  if (typeof input === "string") {
    const blob = new Blob([input]);
    return blob.size;
  } else if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.size === "number") {
    return input.size;
  }
  return void 0;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/base64/index.browser.mjs
function bytesToBase64(bytes) {
  const base64Str = Array.from(bytes, (x2) => String.fromCodePoint(x2)).join("");
  return btoa(base64Str);
}
function toBase642(input) {
  if (typeof input === "string") {
    return bytesToBase64(new TextEncoder().encode(input));
  }
  return bytesToBase64(new Uint8Array(input.buffer, input.byteOffset, input.byteLength));
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/readFile.mjs
var readFile = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onabort = () => {
    reject(new Error("Read aborted"));
  };
  reader.onerror = () => {
    reject(reader.error);
  };
  reader.readAsArrayBuffer(file);
});

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/md5.mjs
var calculateContentMd5 = async (content) => {
  const hasher = new Md5();
  const buffer = content instanceof Blob ? await readFile(content) : content;
  hasher.update(buffer);
  const digest = await hasher.digest();
  return toBase642(digest);
};

// node_modules/@aws-amplify/storage/dist/esm/utils/resolvePrefix.mjs
var resolvePrefix = ({ accessLevel, targetIdentityId }) => {
  if (accessLevel === "private") {
    assertValidationError(!!targetIdentityId, StorageValidationErrorCode.NoIdentityId);
    return `private/${targetIdentityId}/`;
  } else if (accessLevel === "protected") {
    assertValidationError(!!targetIdentityId, StorageValidationErrorCode.NoIdentityId);
    return `protected/${targetIdentityId}/`;
  } else {
    return "public/";
  }
};

// node_modules/@aws-amplify/storage/dist/esm/errors/constants.mjs
var INVALID_STORAGE_INPUT = "InvalidStorageInput";

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/resolveS3ConfigAndInput.mjs
var resolveS3ConfigAndInput = async (amplify, apiInput) => {
  const { options: apiOptions } = apiInput ?? {};
  const { identityId } = await amplify.Auth.fetchAuthSession();
  const credentialsProvider = async (options) => {
    if (isLocationCredentialsProvider(apiOptions)) {
      assertStorageInput(apiInput);
    }
    const { credentials } = isLocationCredentialsProvider(apiOptions) ? await apiOptions.locationCredentialsProvider(options) : await amplify.Auth.fetchAuthSession();
    assertValidationError(!!credentials, StorageValidationErrorCode.NoCredentials);
    return credentials;
  };
  const { bucket: defaultBucket, region: defaultRegion, dangerouslyConnectToHttpEndpointForTesting, buckets } = amplify.getConfig()?.Storage?.S3 ?? {};
  const { bucket = defaultBucket, region = defaultRegion } = apiOptions?.bucket && resolveBucketConfig(apiOptions, buckets) || {};
  assertValidationError(!!bucket, StorageValidationErrorCode.NoBucket);
  assertValidationError(!!region, StorageValidationErrorCode.NoRegion);
  const { defaultAccessLevel, prefixResolver = resolvePrefix, isObjectLockEnabled } = amplify.libraryOptions?.Storage?.S3 ?? {};
  const accessLevel = apiOptions?.accessLevel ?? defaultAccessLevel ?? DEFAULT_ACCESS_LEVEL;
  const targetIdentityId = accessLevel === "protected" ? apiOptions?.targetIdentityId ?? identityId : identityId;
  const keyPrefix = await prefixResolver({ accessLevel, targetIdentityId });
  return {
    s3Config: {
      credentials: credentialsProvider,
      region,
      useAccelerateEndpoint: apiOptions?.useAccelerateEndpoint,
      ...apiOptions?.customEndpoint ? { customEndpoint: apiOptions.customEndpoint } : {},
      ...dangerouslyConnectToHttpEndpointForTesting ? {
        customEndpoint: LOCAL_TESTING_S3_ENDPOINT,
        forcePathStyle: true
      } : {}
    },
    bucket,
    keyPrefix,
    identityId,
    isObjectLockEnabled
  };
};
var isLocationCredentialsProvider = (options) => {
  return !!options?.locationCredentialsProvider;
};
var isInputWithCallbackPath = (input) => {
  return input?.path && typeof input.path === "function" || input?.destination?.path && typeof input.destination?.path === "function" || input?.source?.path && typeof input.source?.path === "function";
};
var isDeprecatedInput = (input) => {
  return isInputWithKey(input) || isInputWithPrefix(input) || isInputWithCopySourceOrDestination(input);
};
var assertStorageInput = (input) => {
  if (isDeprecatedInput(input) || isInputWithCallbackPath(input)) {
    throw new StorageError({
      name: INVALID_STORAGE_INPUT,
      message: "The input needs to have a path as a string value.",
      recoverySuggestion: "Please provide a valid path as a string value for the input."
    });
  }
};
var isInputWithKey = (input) => {
  return !!(typeof input.key === "string");
};
var isInputWithPrefix = (input) => {
  return !!(typeof input.prefix === "string");
};
var isInputWithCopySourceOrDestination = (input) => {
  return !!(typeof input.source?.key === "string" || typeof input.destination?.key === "string");
};
var resolveBucketConfig = (apiOptions, buckets) => {
  if (typeof apiOptions.bucket === "string") {
    const bucketConfig = buckets?.[apiOptions.bucket];
    assertValidationError(!!bucketConfig, StorageValidationErrorCode.InvalidStorageBucket);
    return { bucket: bucketConfig.bucketName, region: bucketConfig.region };
  }
  if (typeof apiOptions.bucket === "object") {
    return {
      bucket: apiOptions.bucket.bucketName,
      region: apiOptions.bucket.region
    };
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/validateBucketOwnerID.mjs
var VALID_AWS_ACCOUNT_ID_PATTERN = /^\d{12}/;
var validateBucketOwnerID = (accountID) => {
  if (accountID === void 0) {
    return;
  }
  assertValidationError(VALID_AWS_ACCOUNT_ID_PATTERN.test(accountID), StorageValidationErrorCode.InvalidAWSAccountID);
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/isInputWithPath.mjs
var isInputWithPath = (input) => {
  return input.path !== void 0;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/resolveIdentityId.mjs
var resolveIdentityId = (identityId) => {
  assertValidationError(!!identityId, StorageValidationErrorCode.NoIdentityId);
  return identityId;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/validateStorageOperationInput.mjs
var validateStorageOperationInput = (input, identityId) => {
  assertValidationError(
    // Key present without a path
    !!input.key && !input.path || // Path present without a key
    !input.key && !!input.path,
    StorageValidationErrorCode.InvalidStorageOperationInput
  );
  if (isInputWithPath(input)) {
    const { path } = input;
    const objectKey = typeof path === "string" ? path : path({ identityId: resolveIdentityId(identityId) });
    assertValidationError(!objectKey.startsWith("/"), StorageValidationErrorCode.InvalidStoragePathInput);
    return {
      inputType: STORAGE_INPUT_PATH,
      objectKey
    };
  } else {
    return { inputType: STORAGE_INPUT_KEY, objectKey: input.key };
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/runtime/xmlParser/dom.mjs
var parser = {
  parse: (xmlStr) => {
    const domParser = new DOMParser();
    const xml = domParser.parseFromString(xmlStr, "text/xml");
    const parsedObj = parseXmlNode(xml);
    const rootKey = Object.keys(parsedObj)[0];
    return parsedObj[rootKey];
  }
};
var parseXmlNode = (node) => {
  if (isDocumentNode(node)) {
    return {
      [node.documentElement.nodeName]: parseXmlNode(node.documentElement)
    };
  }
  if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue?.trim();
  }
  if (isElementNode(node)) {
    if (isTextOnlyElementNode(node)) {
      return node.childNodes[0].nodeValue;
    }
    const nodeValue = {};
    for (const attr of node.attributes) {
      if (!isNamespaceAttributeName(attr.nodeName)) {
        nodeValue[attr.nodeName] = attr.nodeValue;
      }
    }
    if (node.children.length > 0) {
      for (const child of node.children) {
        const childValue = parseXmlNode(child);
        if (childValue === void 0) {
          continue;
        }
        const childName = child.nodeName;
        if (nodeValue[childName] === void 0) {
          nodeValue[childName] = childValue;
        } else if (Array.isArray(nodeValue[childName])) {
          nodeValue[childName].push(childValue);
        } else {
          nodeValue[childName] = [nodeValue[childName], childValue];
        }
      }
    }
    return Object.keys(nodeValue).length === 0 ? "" : nodeValue;
  }
};
var isElementNode = (node) => node.nodeType === Node.ELEMENT_NODE;
var isDocumentNode = (node) => node.nodeType === Node.DOCUMENT_NODE;
var isTextOnlyElementNode = (node) => hasOnlyNamespaceAttributes(node) && node.children.length === 0 && node.firstChild?.nodeType === Node.TEXT_NODE;
var hasOnlyNamespaceAttributes = (node) => {
  for (const attr of node.attributes) {
    if (!isNamespaceAttributeName(attr.nodeName)) {
      return false;
    }
  }
  return true;
};
var isNamespaceAttributeName = (name) => name === "xmlns" || name.startsWith("xmlns:");

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/utils/parsePayload.mjs
var createXmlErrorParser = ({ noErrorWrapping = false } = {}) => async (response) => {
  if (!response || response.statusCode < 300) {
    return;
  }
  const { statusCode } = response;
  const body = await parseXmlBody(response);
  const errorLocation = noErrorWrapping ? body : body.Error;
  const code = errorLocation?.Code ? errorLocation.Code : statusCode === 404 ? "NotFound" : statusCode.toString();
  const message2 = errorLocation?.message ?? errorLocation?.Message ?? code;
  const error = new Error(message2);
  return Object.assign(error, {
    name: code,
    $metadata: parseMetadata(response)
  });
};
var parseXmlBody = async (response) => {
  if (!response.body) {
    throw new Error("S3 aborted request.");
  }
  const data = await response.body.text();
  if (data?.length > 0) {
    try {
      return parser.parse(data);
    } catch (error) {
      throw new Error(`Failed to parse XML response: ${error}`);
    }
  }
  return {};
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/utils/createRetryDecider.mjs
var createRetryDecider = (errorParser) => async (response, error, middlewareContext) => {
  const defaultRetryDecider2 = getRetryDecider(errorParser);
  const defaultRetryDecision = await defaultRetryDecider2(response, error);
  if (!response) {
    return { retryable: defaultRetryDecision.retryable };
  }
  const parsedError = await errorParser(response);
  const errorCode = parsedError?.name;
  const errorMessage = parsedError?.message;
  const isCredentialsExpired = isCredentialsExpiredError(errorCode, errorMessage);
  return {
    retryable: defaultRetryDecision.retryable || // If we know the previous retry attempt sets isCredentialsExpired in the
    // middleware context, we don't want to retry anymore.
    !!(isCredentialsExpired && !middlewareContext?.isCredentialsExpired),
    isCredentialsExpiredError: isCredentialsExpired
  };
};
var INVALID_TOKEN_ERROR_CODES = [
  "RequestExpired",
  "ExpiredTokenException",
  "ExpiredToken"
];
var isCredentialsExpiredError = (errorCode, errorMessage) => {
  const isExpiredTokenError = !!errorCode && INVALID_TOKEN_ERROR_CODES.includes(errorCode);
  const isExpiredSignatureError = !!errorCode && !!errorMessage && errorCode.includes("Signature") && errorMessage.includes("expired");
  return isExpiredTokenError || isExpiredSignatureError;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/base.mjs
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var SERVICE_NAME = "s3";
var endpointResolver = (options, apiInput) => {
  const { region, useAccelerateEndpoint, customEndpoint, forcePathStyle } = options;
  let endpoint;
  if (customEndpoint) {
    if (customEndpoint === LOCAL_TESTING_S3_ENDPOINT) {
      endpoint = new AmplifyUrl(customEndpoint);
    }
    assertValidationError(!customEndpoint.includes("://"), StorageValidationErrorCode.InvalidCustomEndpoint);
    endpoint = new AmplifyUrl(`https://${customEndpoint}`);
  } else if (useAccelerateEndpoint) {
    assertValidationError(!forcePathStyle, StorageValidationErrorCode.ForcePathStyleEndpointNotSupported);
    endpoint = new AmplifyUrl(`https://s3-accelerate.${getDnsSuffix(region)}`);
  } else {
    endpoint = new AmplifyUrl(`https://s3.${region}.${getDnsSuffix(region)}`);
  }
  if (apiInput?.Bucket) {
    assertValidationError(isDnsCompatibleBucketName(apiInput.Bucket), StorageValidationErrorCode.DnsIncompatibleBucketName);
    if (forcePathStyle || apiInput.Bucket.includes(".")) {
      endpoint.pathname = `/${apiInput.Bucket}`;
    } else {
      endpoint.host = `${apiInput.Bucket}.${endpoint.host}`;
    }
  }
  return { url: endpoint };
};
var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
var parseXmlError = createXmlErrorParser({ noErrorWrapping: true });
var retryDecider = createRetryDecider(parseXmlError);
var defaultConfig = {
  service: SERVICE_NAME,
  endpointResolver,
  retryDecider,
  computeDelay: jitteredBackoff,
  get userAgentValue() {
    return getAmplifyUserAgent();
  },
  useAccelerateEndpoint: false,
  uriEscapePath: false
  // Required by S3. See https://github.com/aws/aws-sdk-js-v3/blob/9ba012dfa3a3429aa2db0f90b3b0b3a7a31f9bc3/packages/signature-v4/src/SignatureV4.ts#L76-L83
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/utils/deserializeHelpers.mjs
var map = (obj, instructions) => {
  const result = {};
  for (const [key, instruction] of Object.entries(instructions)) {
    const [accessor, deserializer] = Array.isArray(instruction) ? instruction : [instruction];
    if (Object.prototype.hasOwnProperty.call(obj, accessor)) {
      result[key] = deserializer ? deserializer(obj[accessor]) : String(obj[accessor]);
    }
  }
  return result;
};
var deserializeNumber = (value2) => value2 ? Number(value2) : void 0;
var deserializeBoolean = (value2) => {
  return value2 ? value2 === "true" : void 0;
};
var deserializeTimestamp = (value2) => {
  return value2 ? new Date(value2) : void 0;
};
var emptyArrayGuard = (value2, deserializer) => {
  if (value2 === "") {
    return [];
  }
  const valueArray = (Array.isArray(value2) ? value2 : [value2]).filter((e2) => e2 != null);
  return deserializer(valueArray);
};
var deserializeMetadata = (headers) => {
  const objectMetadataHeaderPrefix = "x-amz-meta-";
  const deserialized = Object.keys(headers).filter((header) => header.startsWith(objectMetadataHeaderPrefix)).reduce((acc, header) => {
    acc[header.replace(objectMetadataHeaderPrefix, "")] = headers[header];
    return acc;
  }, {});
  return Object.keys(deserialized).length > 0 ? deserialized : void 0;
};
var buildStorageServiceError = (error) => new StorageError({
  name: error.name,
  message: error.message,
  metadata: error.$metadata
});
var deserializeCompletedPartList = (input) => input.map((item) => map(item, {
  PartNumber: ["PartNumber", deserializeNumber],
  ETag: "ETag",
  ChecksumCRC32: "ChecksumCRC32"
}));

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/utils/serializeHelpers.mjs
var assignStringVariables = (values) => {
  const queryParams = {};
  for (const [key, value2] of Object.entries(values)) {
    if (value2 != null) {
      queryParams[key] = value2.toString();
    }
  }
  return queryParams;
};
var serializeObjectConfigsToHeaders = async (input) => ({
  ...assignStringVariables({
    "x-amz-acl": input.ACL,
    "cache-control": input.CacheControl,
    "content-disposition": input.ContentDisposition,
    "content-language": input.ContentLanguage,
    "content-encoding": input.ContentEncoding,
    "content-type": input.ContentType,
    expires: input.Expires?.toUTCString(),
    "x-amz-tagging": input.Tagging,
    ...serializeMetadata(input.Metadata)
  })
});
var serializeMetadata = (metadata = {}) => Object.keys(metadata).reduce((acc, suffix) => {
  acc[`x-amz-meta-${suffix.toLowerCase()}`] = metadata[suffix];
  return acc;
}, {});
var serializePathnameObjectKey = (url, key) => {
  return url.pathname.replace(/\/$/, "") + `/${key.split("/").map(extendedEncodeURIComponent).join("/")}`;
};
function validateS3RequiredParameter(assertion, paramName) {
  if (!assertion) {
    throw new StorageError({
      name: AmplifyErrorCode.Unknown,
      message: "An unknown error has occurred.",
      underlyingError: new TypeError(`Expected a non-null value for S3 parameter ${paramName}`),
      recoverySuggestion: "This is likely to be a bug. Please reach out to library authors."
    });
  }
}

// node_modules/@aws-amplify/storage/dist/esm/errors/IntegrityError.mjs
var IntegrityError = class _IntegrityError extends StorageError {
  constructor(params) {
    super({
      name: AmplifyErrorCode.Unknown,
      message: "An unknown error has occurred.",
      recoverySuggestion: "This may be a bug. Please reach out to library authors.",
      metadata: params?.metadata
    });
    this.constructor = _IntegrityError;
    Object.setPrototypeOf(this, _IntegrityError.prototype);
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/validateObjectUrl.mjs
function validateObjectUrl({ bucketName, key, objectURL }) {
  if (!bucketName || !key || !objectURL) {
    throw new IntegrityError();
  }
  const bucketWithDots = bucketName.includes(".");
  const encodedBucketName = extendedEncodeURIComponent(bucketName);
  const encodedKey = key.split("/").map(extendedEncodeURIComponent).join("/");
  const isPathStyleUrl = objectURL.pathname === `/${encodedBucketName}/${encodedKey}`;
  const isSubdomainUrl = objectURL.hostname.startsWith(`${encodedBucketName}.`) && objectURL.pathname === `/${encodedKey}`;
  if (!(isPathStyleUrl || !bucketWithDots && isSubdomainUrl)) {
    throw new IntegrityError();
  }
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/getObject.mjs
var USER_AGENT_HEADER = "x-amz-user-agent";
var getObjectSerializer = async (input, endpoint) => {
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  url.search = new AmplifyUrlSearchParams({
    "x-id": "GetObject"
  }).toString();
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  return {
    method: "GET",
    headers: {
      ...input.Range && { Range: input.Range },
      ...assignStringVariables({
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
      })
    },
    url
  };
};
var getObjectDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    return {
      ...map(response.headers, {
        DeleteMarker: ["x-amz-delete-marker", deserializeBoolean],
        AcceptRanges: "accept-ranges",
        Expiration: "x-amz-expiration",
        Restore: "x-amz-restore",
        LastModified: ["last-modified", deserializeTimestamp],
        ContentLength: ["content-length", deserializeNumber],
        ETag: "etag",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        ChecksumType: "x-amz-checksum-type",
        MissingMeta: ["x-amz-missing-meta", deserializeNumber],
        VersionId: "x-amz-version-id",
        CacheControl: "cache-control",
        ContentDisposition: "content-disposition",
        ContentEncoding: "content-encoding",
        ContentLanguage: "content-language",
        ContentRange: "content-range",
        ContentType: "content-type",
        Expires: ["expires", deserializeTimestamp],
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-md5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: [
          "x-amz-server-side-encryption-bucket-key-enabled",
          deserializeBoolean
        ],
        StorageClass: "x-amz-storage-class",
        RequestCharged: "x-amz-request-charged",
        ReplicationStatus: "x-amz-replication-status",
        PartsCount: ["x-amz-mp-parts-count", deserializeNumber],
        TagCount: ["x-amz-tagging-count", deserializeNumber],
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: [
          "x-amz-object-lock-retain-until-date",
          deserializeTimestamp
        ],
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold"
      }),
      Metadata: deserializeMetadata(response.headers),
      $metadata: parseMetadata(response),
      // @ts-expect-error The body is a CompatibleHttpResponse type because the lower-level handler is XHR instead of
      // fetch, which represents payload in Blob instread of ReadableStream.
      Body: response.body
    };
  }
};
var getObject = composeServiceApi(s3TransferHandler, getObjectSerializer, getObjectDeserializer, { ...defaultConfig, responseType: "blob" });
var getPresignedGetObjectUrl = async (config, input) => {
  const endpoint = defaultConfig.endpointResolver(config, input);
  const { url, headers, method } = await getObjectSerializer(input, endpoint);
  url.searchParams.append(CONTENT_SHA256_HEADER, EMPTY_HASH);
  if (config.userAgentValue) {
    url.searchParams.append(config.userAgentHeader ?? USER_AGENT_HEADER, config.userAgentValue);
  }
  if (input.ResponseContentType) {
    url.searchParams.append("response-content-type", input.ResponseContentType);
  }
  if (input.ResponseContentDisposition) {
    url.searchParams.append("response-content-disposition", input.ResponseContentDisposition);
  }
  for (const [headerName, value2] of Object.entries(headers).sort(([key1], [key2]) => key1.localeCompare(key2))) {
    url.searchParams.append(headerName, value2);
  }
  return presignUrl({ method, url, body: void 0 }, {
    signingService: defaultConfig.service,
    signingRegion: config.region,
    ...defaultConfig,
    ...config
  });
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/putObject.mjs
var putObjectSerializer = async (input, endpoint) => {
  const headers = {
    ...await serializeObjectConfigsToHeaders({
      ...input,
      ContentType: input.ContentType ?? "application/octet-stream"
    }),
    ...assignStringVariables({
      "content-md5": input.ContentMD5,
      "x-amz-checksum-crc32": input.ChecksumCRC32,
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
      "If-None-Match": input.IfNoneMatch
    })
  };
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  url.search = new AmplifyUrlSearchParams({
    "x-id": "PutObject"
  }).toString();
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  return {
    method: "PUT",
    headers,
    url,
    body: input.Body
  };
};
var putObjectDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    return {
      ...map(response.headers, {
        ETag: "etag",
        VersionId: "x-amz-version-id"
      }),
      $metadata: parseMetadata(response)
    };
  }
};
var putObject = composeServiceApi(s3TransferHandler, putObjectSerializer, putObjectDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/createMultipartUpload.mjs
var createMultipartUploadSerializer = async (input, endpoint) => {
  const headers = {
    ...await serializeObjectConfigsToHeaders(input),
    ...assignStringVariables({
      "x-amz-checksum-algorithm": input.ChecksumAlgorithm,
      "x-amz-checksum-type": input.ChecksumType,
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
    })
  };
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  url.search = "uploads";
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  return {
    method: "POST",
    headers,
    url
  };
};
var createMultipartUploadDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    const parsed = await parseXmlBody(response);
    const contents = map(parsed, {
      UploadId: "UploadId"
    });
    return {
      $metadata: parseMetadata(response),
      ...contents
    };
  }
};
var createMultipartUpload = composeServiceApi(s3TransferHandler, createMultipartUploadSerializer, createMultipartUploadDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/uploadPart.mjs
var uploadPartSerializer = async (input, endpoint) => {
  const headers = {
    ...assignStringVariables({
      "x-amz-checksum-crc32": input.ChecksumCRC32,
      "content-md5": input.ContentMD5,
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
    }),
    "content-type": "application/octet-stream"
  };
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  validateS3RequiredParameter(!!input.PartNumber, "PartNumber");
  validateS3RequiredParameter(!!input.UploadId, "UploadId");
  url.search = new AmplifyUrlSearchParams({
    partNumber: input.PartNumber + "",
    uploadId: input.UploadId
  }).toString();
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  return {
    method: "PUT",
    headers,
    url,
    body: input.Body
  };
};
var uploadPartDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    return {
      ...map(response.headers, {
        ETag: "etag"
      }),
      $metadata: parseMetadata(response)
    };
  }
};
var uploadPart = composeServiceApi(s3TransferHandler, uploadPartSerializer, uploadPartDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/utils/integrityHelpers.mjs
var isObject = (value2) => {
  return value2 != null && typeof value2 === "object" && !Array.isArray(value2);
};
var isEqual = (object, other) => {
  if (Array.isArray(object) && !Array.isArray(other)) {
    return false;
  }
  if (!Array.isArray(object) && Array.isArray(other)) {
    return false;
  }
  if (Array.isArray(object) && Array.isArray(other)) {
    return object.length === other.length && object.every((val, ix) => isEqual(val, other[ix]));
  }
  if (!isObject(object) || !isObject(other)) {
    return object === other;
  }
  const objectKeys = Object.keys(object);
  const otherKeys = Object.keys(other);
  if (objectKeys.length !== otherKeys.length) {
    return false;
  }
  return objectKeys.every((key) => {
    return otherKeys.includes(key) && isEqual(object[key], other[key]);
  });
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/validateMultipartUploadXML.mjs
function validateMultipartUploadXML(input, xml) {
  if (!input.Parts) {
    throw new IntegrityError();
  }
  const parsedXML = parser.parse(xml);
  const mappedCompletedMultipartUpload = map(parsedXML, {
    Parts: [
      "Part",
      (value2) => emptyArrayGuard(value2, deserializeCompletedPartList)
    ]
  });
  if (!isEqual(input, mappedCompletedMultipartUpload)) {
    throw new IntegrityError();
  }
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/completeMultipartUpload.mjs
var INVALID_PARAMETER_ERROR_MSG = "Invalid parameter for CompleteMultipartUpload API";
var MISSING_ETAG_ERROR_MSG = "ETag missing from multipart upload";
var MISSING_ETAG_ERROR_SUGGESTION = "Please ensure S3 bucket CORS configuration includes ETag as part of its `ExposeHeaders` element";
var completeMultipartUploadSerializer = async (input, endpoint) => {
  const headers = {
    "content-type": "application/xml",
    ...assignStringVariables({
      "x-amz-checksum-crc32": input.ChecksumCRC32,
      "x-amz-checksum-type": input.ChecksumType,
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
      "If-None-Match": input.IfNoneMatch
    })
  };
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  validateS3RequiredParameter(!!input.UploadId, "UploadId");
  url.search = new AmplifyUrlSearchParams({
    uploadId: input.UploadId
  }).toString();
  validateS3RequiredParameter(!!input.MultipartUpload, "MultipartUpload");
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  const xml = serializeCompletedMultipartUpload(input.MultipartUpload);
  validateMultipartUploadXML(input.MultipartUpload, xml);
  return {
    method: "POST",
    headers,
    url,
    body: '<?xml version="1.0" encoding="UTF-8"?>' + xml
  };
};
var serializeCompletedMultipartUpload = (input) => {
  if (!input.Parts?.length) {
    throw new Error(`${INVALID_PARAMETER_ERROR_MSG}: ${JSON.stringify(input)}`);
  }
  return `<CompleteMultipartUpload xmlns="http://s3.amazonaws.com/doc/2006-03-01/">${input.Parts.map(serializeCompletedPartList).join("")}</CompleteMultipartUpload>`;
};
var serializeCompletedPartList = (input) => {
  if (input.PartNumber == null) {
    throw new Error(`${INVALID_PARAMETER_ERROR_MSG}: ${JSON.stringify(input)}`);
  }
  if (!input.ETag) {
    throw new Error(`${MISSING_ETAG_ERROR_MSG}: ${JSON.stringify(input)}. ${MISSING_ETAG_ERROR_SUGGESTION}`);
  }
  const eTag = `<ETag>${input.ETag}</ETag>`;
  const partNumber = `<PartNumber>${input.PartNumber}</PartNumber>`;
  const checksumCRC32 = input.ChecksumCRC32 ? `<ChecksumCRC32>${input.ChecksumCRC32}</ChecksumCRC32>` : "";
  return `<Part>${eTag}${partNumber}${checksumCRC32}</Part>`;
};
var parseXmlBodyOrThrow = async (response) => {
  const parsed = await parseXmlBody(response);
  if (parsed.Code !== void 0 && parsed.Message !== void 0) {
    const error = await parseXmlError({
      ...response,
      statusCode: 500
      // To workaround the >=300 status code check common to other APIs.
    });
    error.$metadata.httpStatusCode = response.statusCode;
    throw buildStorageServiceError(error);
  }
  return parsed;
};
var completeMultipartUploadDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    const parsed = await parseXmlBodyOrThrow(response);
    const contents = map(parsed, {
      ETag: "ETag",
      Key: "Key",
      Location: "Location"
    });
    return {
      $metadata: parseMetadata(response),
      ...contents
    };
  }
};
var retryWhenErrorWith200StatusCode = async (response, error, middlewareContext) => {
  if (!response) {
    return { retryable: false };
  }
  if (response.statusCode === 200) {
    if (!response.body) {
      return { retryable: true };
    }
    const parsed = await parseXmlBody(response);
    if (parsed.Code !== void 0 && parsed.Message !== void 0) {
      return { retryable: true };
    }
    return { retryable: false };
  }
  return retryDecider(response, error, middlewareContext);
};
var completeMultipartUpload = composeServiceApi(s3TransferHandler, completeMultipartUploadSerializer, completeMultipartUploadDeserializer, {
  ...defaultConfig,
  responseType: "text",
  retryDecider: retryWhenErrorWith200StatusCode
});

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/listParts.mjs
var listPartsSerializer = async (input, endpoint) => {
  const headers = {};
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  validateS3RequiredParameter(!!input.UploadId, "UploadId");
  url.search = new AmplifyUrlSearchParams({
    "x-id": "ListParts",
    uploadId: input.UploadId
  }).toString();
  return {
    method: "GET",
    headers,
    url
  };
};
var listPartsDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    const parsed = await parseXmlBody(response);
    const contents = map(parsed, {
      UploadId: "UploadId",
      Parts: [
        "Part",
        (value2) => emptyArrayGuard(value2, deserializeCompletedPartList)
      ]
    });
    return {
      $metadata: parseMetadata(response),
      ...contents
    };
  }
};
var listParts = composeServiceApi(s3TransferHandler, listPartsSerializer, listPartsDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/abortMultipartUpload.mjs
var abortMultipartUploadSerializer = (input, endpoint) => {
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  validateS3RequiredParameter(!!input.UploadId, "UploadId");
  url.search = new AmplifyUrlSearchParams({
    "x-id": "AbortMultipartUpload",
    uploadId: input.UploadId
  }).toString();
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  const headers = {
    ...assignStringVariables({
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
    })
  };
  return {
    method: "DELETE",
    headers,
    url
  };
};
var abortMultipartUploadDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    return {
      $metadata: parseMetadata(response)
    };
  }
};
var abortMultipartUpload = composeServiceApi(s3TransferHandler, abortMultipartUploadSerializer, abortMultipartUploadDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/client/s3data/headObject.mjs
var headObjectSerializer = async (input, endpoint) => {
  const url = new AmplifyUrl(endpoint.url.toString());
  validateS3RequiredParameter(!!input.Key, "Key");
  url.pathname = serializePathnameObjectKey(url, input.Key);
  validateObjectUrl({
    bucketName: input.Bucket,
    key: input.Key,
    objectURL: url
  });
  const headers = assignStringVariables({
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
  });
  return {
    method: "HEAD",
    headers,
    url
  };
};
var headObjectDeserializer = async (response) => {
  if (response.statusCode >= 300) {
    throw buildStorageServiceError(await parseXmlError(response));
  } else {
    const contents = {
      ...map(response.headers, {
        ContentLength: ["content-length", deserializeNumber],
        ContentType: "content-type",
        ETag: "etag",
        LastModified: ["last-modified", deserializeTimestamp],
        VersionId: "x-amz-version-id"
      }),
      Metadata: deserializeMetadata(response.headers)
    };
    return {
      $metadata: parseMetadata(response),
      ...contents
    };
  }
};
var headObject = composeServiceApi(s3TransferHandler, headObjectSerializer, headObjectDeserializer, { ...defaultConfig, responseType: "text" });

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/userAgent.mjs
function getStorageUserAgentValue(action) {
  return getAmplifyUserAgent({
    category: Category.Storage,
    action
  });
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/crc32.mjs
var import_crc_32 = __toESM(require_crc32(), 1);

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/hexUtils.mjs
var hexToUint8Array = (hexString) => new Uint8Array((hexString.match(/\w{2}/g) ?? []).map((h2) => parseInt(h2, 16)));
var hexToBase64 = (hexString) => toBase642(hexToUint8Array(hexString));

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/crc32.mjs
var CHUNK_SIZE = 1024 * 1024;
var calculateContentCRC32 = async (content, seed = 0) => {
  let internalSeed = seed;
  if (content instanceof ArrayBuffer || ArrayBuffer.isView(content)) {
    let uint8Array;
    if (content instanceof ArrayBuffer) {
      uint8Array = new Uint8Array(content);
    } else {
      uint8Array = new Uint8Array(content.buffer, content.byteOffset, content.byteLength);
    }
    let offset = 0;
    while (offset < uint8Array.length) {
      const end = Math.min(offset + CHUNK_SIZE, uint8Array.length);
      const chunk = uint8Array.slice(offset, end);
      internalSeed = import_crc_32.default.buf(chunk, internalSeed) >>> 0;
      offset = end;
    }
  } else {
    let blob;
    if (content instanceof Blob) {
      blob = content;
    } else {
      blob = new Blob([content]);
    }
    let offset = 0;
    while (offset < blob.size) {
      const end = Math.min(offset + CHUNK_SIZE, blob.size);
      const chunk = blob.slice(offset, end);
      const arrayBuffer = await readFile(chunk);
      const uint8Array = new Uint8Array(arrayBuffer);
      internalSeed = import_crc_32.default.buf(uint8Array, internalSeed) >>> 0;
      offset = end;
    }
  }
  const hex = internalSeed.toString(16).padStart(8, "0");
  return hexToBase64(hex);
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/utils/constructContentDisposition.mjs
var constructContentDisposition = (contentDisposition) => {
  if (!contentDisposition)
    return void 0;
  if (typeof contentDisposition === "string")
    return contentDisposition;
  const { type, filename } = contentDisposition;
  return filename !== void 0 ? `${type}; filename="${filename}"` : type;
};

// node_modules/@aws-amplify/storage/dist/esm/utils/contentType.mjs
var MIME_TYPES = {
  // Audio
  aac: "audio/aac",
  mid: "audio/midi",
  midi: "audio/x-midi",
  mp3: "audio/mpeg",
  oga: "audio/ogg",
  opus: "audio/ogg",
  wav: "audio/wav",
  weba: "audio/webm",
  // Video
  avi: "video/x-msvideo",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  ogv: "video/ogg",
  ts: "video/mp2t",
  webm: "video/webm",
  // Images
  apng: "image/apng",
  avif: "image/avif",
  bmp: "image/bmp",
  gif: "image/gif",
  ico: "image/vnd.microsoft.icon",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  webp: "image/webp",
  // Text
  css: "text/css",
  csv: "text/csv",
  htm: "text/html",
  html: "text/html",
  ics: "text/calendar",
  js: "text/javascript",
  md: "text/markdown",
  mjs: "text/javascript",
  txt: "text/plain",
  // Application
  abw: "application/x-abiword",
  arc: "application/x-freearc",
  azw: "application/vnd.amazon.ebook",
  bin: "application/octet-stream",
  bz: "application/x-bzip",
  bz2: "application/x-bzip2",
  cda: "application/x-cdf",
  csh: "application/x-csh",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gz: "application/gzip",
  jar: "application/java-archive",
  json: "application/json",
  jsonld: "application/ld+json",
  mpkg: "application/vnd.apple.installer+xml",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  ogx: "application/ogg",
  pdf: "application/pdf",
  php: "application/x-httpd-php",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  rar: "application/vnd.rar",
  rtf: "application/rtf",
  sh: "application/x-sh",
  tar: "application/x-tar",
  vsd: "application/vnd.visio",
  webmanifest: "application/manifest+json",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  zip: "application/zip",
  // Fonts
  otf: "font/otf",
  ttf: "font/ttf",
  woff: "font/woff",
  woff2: "font/woff2"
};
var getContentType = (data, key) => {
  if (data instanceof File && data.type) {
    return data.type;
  }
  const ext = key.split(".").pop()?.toLowerCase();
  return ext ? MIME_TYPES[ext] : void 0;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/putObjectJob.mjs
var putObjectJob = (uploadDataInput, abortSignal, totalLength) => async () => {
  const { options: uploadDataOptions, data } = uploadDataInput;
  const { bucket, keyPrefix, s3Config, isObjectLockEnabled, identityId } = await resolveS3ConfigAndInput(Amplify, uploadDataInput);
  const { inputType, objectKey } = validateStorageOperationInput(uploadDataInput, identityId);
  validateBucketOwnerID(uploadDataOptions?.expectedBucketOwner);
  const finalKey = inputType === STORAGE_INPUT_KEY ? keyPrefix + objectKey : objectKey;
  const { contentDisposition, contentEncoding, contentType = uploadDataOptions?.contentType ?? getContentType(data, objectKey) ?? "application/octet-stream", preventOverwrite, metadata, checksumAlgorithm, onProgress, expectedBucketOwner } = uploadDataOptions ?? {};
  const checksumCRC32 = checksumAlgorithm === CHECKSUM_ALGORITHM_CRC32 ? await calculateContentCRC32(data) : void 0;
  const contentMD5 = (
    // check if checksum exists. ex: should not exist in react native
    !checksumCRC32 && isObjectLockEnabled ? await calculateContentMd5(data) : void 0
  );
  const { ETag: eTag, VersionId: versionId } = await putObject({
    ...s3Config,
    abortSignal,
    onUploadProgress: onProgress,
    userAgentValue: getStorageUserAgentValue(StorageAction.UploadData)
  }, {
    Bucket: bucket,
    Key: finalKey,
    Body: data,
    ContentType: contentType,
    ContentDisposition: constructContentDisposition(contentDisposition),
    ContentEncoding: contentEncoding,
    Metadata: metadata,
    ContentMD5: contentMD5,
    ChecksumCRC32: checksumCRC32,
    ExpectedBucketOwner: expectedBucketOwner,
    IfNoneMatch: preventOverwrite ? "*" : void 0
  });
  const result = {
    eTag,
    versionId,
    contentType,
    metadata,
    size: totalLength
  };
  return inputType === STORAGE_INPUT_KEY ? { key: objectKey, ...result } : { path: objectKey, ...result };
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/uploadPartExecutor.mjs
var uploadPartExecutor = async ({ dataChunkerGenerator, completedPartNumberSet, s3Config, abortSignal, bucket, finalKey, uploadId, onPartUploadCompletion, onProgress, isObjectLockEnabled, useCRC32Checksum, expectedBucketOwner }) => {
  let transferredBytes = 0;
  for (const { data, partNumber, size } of dataChunkerGenerator) {
    if (abortSignal.aborted) {
      logger2.debug("upload executor aborted.");
      break;
    }
    if (completedPartNumberSet.has(partNumber)) {
      logger2.debug(`part ${partNumber} already uploaded.`);
      transferredBytes += size;
      onProgress?.({
        transferredBytes
      });
    } else {
      let checksumCRC32;
      if (useCRC32Checksum) {
        checksumCRC32 = await calculateContentCRC32(data);
      }
      const contentMD5 = (
        // check if checksum exists. ex: should not exist in react native
        !checksumCRC32 && isObjectLockEnabled ? await calculateContentMd5(data) : void 0
      );
      const { ETag: eTag } = await uploadPart({
        ...s3Config,
        abortSignal,
        onUploadProgress: (event) => {
          const { transferredBytes: currentPartTransferredBytes } = event;
          onProgress?.({
            transferredBytes: transferredBytes + currentPartTransferredBytes
          });
        }
      }, {
        Bucket: bucket,
        Key: finalKey,
        UploadId: uploadId,
        Body: data,
        PartNumber: partNumber,
        ChecksumCRC32: checksumCRC32,
        ContentMD5: contentMD5,
        ExpectedBucketOwner: expectedBucketOwner
      });
      transferredBytes += size;
      onPartUploadCompletion(partNumber, eTag, checksumCRC32);
    }
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/uploadCache.mjs
var ONE_HOUR = 1e3 * 60 * 60;
var findCachedUploadPartsAndEvictExpired = async ({ resumableUploadsCache, cacheKey, s3Config, bucket, finalKey }) => {
  const allCachedUploads = await listCachedUploadTasks(resumableUploadsCache);
  const validCachedUploads = Object.fromEntries(Object.entries(allCachedUploads).filter(([_, cacheValue]) => cacheValue.lastTouched >= Date.now() - ONE_HOUR));
  if (Object.keys(validCachedUploads).length !== Object.keys(allCachedUploads).length) {
    await resumableUploadsCache.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(validCachedUploads));
  }
  if (!validCachedUploads[cacheKey]) {
    return null;
  }
  const cachedUpload = validCachedUploads[cacheKey];
  cachedUpload.lastTouched = Date.now();
  await resumableUploadsCache.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(validCachedUploads));
  try {
    const { Parts = [] } = await listParts(s3Config, {
      Bucket: bucket,
      Key: finalKey,
      UploadId: cachedUpload.uploadId
    });
    return {
      parts: Parts,
      uploadId: cachedUpload.uploadId,
      finalCrc32: cachedUpload.finalCrc32
    };
  } catch (e2) {
    logger2.debug("failed to list cached parts, removing cached upload.");
    await removeCachedUpload(resumableUploadsCache, cacheKey);
    return null;
  }
};
var listCachedUploadTasks = async (resumableUploadsCache) => {
  try {
    return JSON.parse(await resumableUploadsCache.getItem(UPLOADS_STORAGE_KEY) ?? "{}");
  } catch (e2) {
    logger2.debug("failed to parse cached uploads record.");
    return {};
  }
};
var serializeUploadOptions = (options = {}) => {
  const unserializableOptionProperties = [
    "onProgress",
    "resumableUploadsCache",
    // Internally injected implementation not set by customers
    "locationCredentialsProvider"
    // Internally injected implementation not set by customers
  ];
  const serializableOptionEntries = Object.entries(options).filter(([key]) => !unserializableOptionProperties.includes(key));
  if (options.checksumAlgorithm === "crc-32") {
    serializableOptionEntries.push(["checksumType", "FULL_OBJECT"]);
  }
  const serializableOptions = Object.fromEntries(serializableOptionEntries);
  return JSON.stringify(serializableOptions);
};
var getUploadsCacheKey = ({ file, size, contentType, bucket, accessLevel, key, optionsHash }) => {
  let levelStr;
  const resolvedContentType = contentType ?? getContentType(file, key) ?? "application/octet-stream";
  if (accessLevel === void 0) {
    levelStr = "custom";
  } else {
    levelStr = accessLevel === "guest" ? "public" : accessLevel;
  }
  const baseId = `${optionsHash}_${size}_${resolvedContentType}_${bucket}_${levelStr}_${key}`;
  if (file) {
    return `${file.name}_${file.lastModified}_${baseId}`;
  } else {
    return baseId;
  }
};
var cacheMultipartUpload = async (resumableUploadsCache, cacheKey, fileMetadata) => {
  const cachedUploads = await listCachedUploadTasks(resumableUploadsCache);
  cachedUploads[cacheKey] = {
    ...fileMetadata,
    lastTouched: Date.now()
  };
  await resumableUploadsCache.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(cachedUploads));
};
var removeCachedUpload = async (resumableUploadsCache, cacheKey) => {
  const cachedUploads = await listCachedUploadTasks(resumableUploadsCache);
  delete cachedUploads[cacheKey];
  await resumableUploadsCache.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(cachedUploads));
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/progressTracker.mjs
var getConcurrentUploadsProgressTracker = ({ size, onProgress }) => {
  const transferredBytesPerListener = [];
  const getTransferredBytes = () => transferredBytesPerListener.reduce((acc, transferredBytes) => acc + transferredBytes, 0);
  return {
    getOnProgressListener: () => {
      transferredBytesPerListener.push(0);
      const listenerIndex = transferredBytesPerListener.length - 1;
      return (event) => {
        const { transferredBytes } = event;
        transferredBytesPerListener[listenerIndex] = transferredBytes;
        onProgress?.({
          transferredBytes: getTransferredBytes(),
          totalBytes: size
        });
      };
    }
  };
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/initialUpload.mjs
var loadOrCreateMultipartUpload = async ({ s3Config, data, size, contentType, bucket, accessLevel, keyPrefix, key, contentDisposition, contentEncoding, metadata, abortSignal, checksumAlgorithm, optionsHash, resumableUploadsCache, expectedBucketOwner }) => {
  const finalKey = keyPrefix !== void 0 ? keyPrefix + key : key;
  let cachedUpload;
  if (!resumableUploadsCache) {
    logger2.debug("uploaded cache instance cannot be determined, skipping cache.");
    cachedUpload = void 0;
  } else {
    const uploadCacheKey = getUploadsCacheKey({
      size,
      contentType,
      file: data instanceof File ? data : void 0,
      bucket,
      accessLevel,
      key,
      optionsHash
    });
    const cachedUploadParts = await findCachedUploadPartsAndEvictExpired({
      s3Config,
      cacheKey: uploadCacheKey,
      bucket,
      finalKey,
      resumableUploadsCache
    });
    cachedUpload = cachedUploadParts ? { ...cachedUploadParts, uploadCacheKey } : void 0;
  }
  if (cachedUpload) {
    return {
      uploadId: cachedUpload.uploadId,
      cachedParts: cachedUpload.parts,
      finalCrc32: cachedUpload.finalCrc32
    };
  } else {
    const finalCrc32 = checksumAlgorithm === CHECKSUM_ALGORITHM_CRC32 ? await calculateContentCRC32(data) : void 0;
    const { UploadId } = await createMultipartUpload({
      ...s3Config,
      abortSignal
    }, {
      Bucket: bucket,
      Key: finalKey,
      ContentType: contentType,
      ContentDisposition: constructContentDisposition(contentDisposition),
      ContentEncoding: contentEncoding,
      Metadata: metadata,
      ChecksumAlgorithm: finalCrc32 ? "CRC32" : void 0,
      ChecksumType: finalCrc32 ? "FULL_OBJECT" : void 0,
      ExpectedBucketOwner: expectedBucketOwner
    });
    if (resumableUploadsCache) {
      const uploadCacheKey = getUploadsCacheKey({
        size,
        contentType,
        file: data instanceof File ? data : void 0,
        bucket,
        accessLevel,
        key,
        optionsHash
      });
      await cacheMultipartUpload(resumableUploadsCache, uploadCacheKey, {
        uploadId: UploadId,
        bucket,
        key,
        finalCrc32,
        fileName: data instanceof File ? data.name : ""
      });
    }
    return {
      uploadId: UploadId,
      cachedParts: [],
      finalCrc32
    };
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/calculatePartSize.mjs
var calculatePartSize = (totalSize) => {
  if (!totalSize) {
    return DEFAULT_PART_SIZE;
  }
  let partSize = DEFAULT_PART_SIZE;
  let partsCount = Math.ceil(totalSize / partSize);
  while (partsCount > MAX_PARTS_COUNT) {
    partSize *= 2;
    partsCount = Math.ceil(totalSize / partSize);
  }
  return partSize;
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/getDataChunker.mjs
var getDataChunker = (data, totalSize) => {
  const partSize = calculatePartSize(totalSize);
  if (data instanceof Blob) {
    return helper(data, 0, data.size, partSize);
  } else if (ArrayBuffer.isView(data)) {
    return helper(data.buffer, data.byteOffset, data.byteLength, partSize);
  } else if (data instanceof ArrayBuffer) {
    return helper(data, 0, data.byteLength, partSize);
  } else if (typeof data === "string") {
    const blob = new Blob([data]);
    return getDataChunker(blob, blob.size);
  } else {
    throw new StorageError({
      name: StorageValidationErrorCode.InvalidUploadSource,
      ...validationErrorMap[StorageValidationErrorCode.InvalidUploadSource]
    });
  }
};
var helper = function* (buffer, byteOffset, byteLength2, partSize) {
  let partNumber = 1;
  let startByte = byteOffset;
  let endByte = byteOffset + Math.min(partSize, byteLength2);
  while (endByte < byteLength2 + byteOffset) {
    yield {
      partNumber,
      data: buffer.slice(startByte, endByte),
      size: partSize
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }
  yield {
    partNumber,
    data: buffer.slice(startByte, byteLength2 + byteOffset),
    size: byteLength2 + byteOffset - startByte
  };
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/multipart/uploadHandlers.mjs
var getMultipartUploadHandlers = (uploadDataInput, size) => {
  let resolveCallback;
  let rejectCallback;
  let inProgressUpload;
  let resolvedS3Config;
  let abortController;
  let resolvedAccessLevel;
  let resolvedBucket;
  let resolvedKeyPrefix;
  let resolvedIdentityId;
  let uploadCacheKey;
  let finalKey;
  let expectedBucketOwner;
  let isAbortSignalFromPause = false;
  const { resumableUploadsCache } = uploadDataInput.options ?? {};
  const startUpload = async () => {
    const { options: uploadDataOptions, data } = uploadDataInput;
    const resolvedS3Options = await resolveS3ConfigAndInput(Amplify, uploadDataInput);
    abortController = new AbortController();
    isAbortSignalFromPause = false;
    resolvedS3Config = resolvedS3Options.s3Config;
    resolvedBucket = resolvedS3Options.bucket;
    resolvedIdentityId = resolvedS3Options.identityId;
    expectedBucketOwner = uploadDataOptions?.expectedBucketOwner;
    const { inputType, objectKey } = validateStorageOperationInput(uploadDataInput, resolvedIdentityId);
    const { contentDisposition, contentEncoding, contentType = uploadDataOptions?.contentType ?? getContentType(data, objectKey) ?? "application/octet-stream", metadata, preventOverwrite, onProgress } = uploadDataOptions ?? {};
    finalKey = objectKey;
    if (inputType === STORAGE_INPUT_KEY) {
      const accessLevel = uploadDataOptions?.accessLevel;
      resolvedKeyPrefix = resolvedS3Options.keyPrefix;
      finalKey = resolvedKeyPrefix + objectKey;
      resolvedAccessLevel = resolveAccessLevel(accessLevel);
    }
    const optionsHash = await calculateContentCRC32(serializeUploadOptions(uploadDataOptions));
    if (!inProgressUpload) {
      const { uploadId, cachedParts, finalCrc32 } = await loadOrCreateMultipartUpload({
        s3Config: resolvedS3Config,
        accessLevel: resolvedAccessLevel,
        bucket: resolvedBucket,
        keyPrefix: resolvedKeyPrefix,
        key: objectKey,
        contentType,
        contentDisposition,
        contentEncoding,
        metadata,
        data,
        size,
        abortSignal: abortController.signal,
        checksumAlgorithm: uploadDataOptions?.checksumAlgorithm,
        optionsHash,
        resumableUploadsCache,
        expectedBucketOwner
      });
      inProgressUpload = {
        uploadId,
        completedParts: cachedParts,
        finalCrc32
      };
    }
    uploadCacheKey = size ? getUploadsCacheKey({
      file: data instanceof File ? data : void 0,
      accessLevel: resolvedAccessLevel,
      contentType: uploadDataOptions?.contentType,
      bucket: resolvedBucket,
      size,
      key: objectKey,
      optionsHash
    }) : void 0;
    const dataChunker = getDataChunker(data, size);
    const completedPartNumberSet = new Set(inProgressUpload.completedParts.map(({ PartNumber }) => PartNumber));
    const onPartUploadCompletion = (partNumber, eTag2, crc322) => {
      inProgressUpload?.completedParts.push({
        PartNumber: partNumber,
        ETag: eTag2,
        // TODO: crc32 can always be added once RN also has an implementation
        ...crc322 ? { ChecksumCRC32: crc322 } : {}
      });
    };
    const concurrentUploadsProgressTracker = getConcurrentUploadsProgressTracker({
      size,
      onProgress
    });
    const concurrentUploadPartExecutors = [];
    for (let index = 0; index < DEFAULT_QUEUE_SIZE; index++) {
      concurrentUploadPartExecutors.push(uploadPartExecutor({
        dataChunkerGenerator: dataChunker,
        completedPartNumberSet,
        s3Config: resolvedS3Config,
        abortSignal: abortController.signal,
        bucket: resolvedBucket,
        finalKey,
        uploadId: inProgressUpload.uploadId,
        onPartUploadCompletion,
        onProgress: concurrentUploadsProgressTracker.getOnProgressListener(),
        isObjectLockEnabled: resolvedS3Options.isObjectLockEnabled,
        useCRC32Checksum: Boolean(inProgressUpload.finalCrc32),
        expectedBucketOwner
      }));
    }
    await Promise.all(concurrentUploadPartExecutors);
    validateCompletedParts(inProgressUpload.completedParts, size);
    const { ETag: eTag } = await completeMultipartUpload({
      ...resolvedS3Config,
      abortSignal: abortController.signal,
      userAgentValue: getStorageUserAgentValue(StorageAction.UploadData)
    }, {
      Bucket: resolvedBucket,
      Key: finalKey,
      UploadId: inProgressUpload.uploadId,
      ChecksumCRC32: inProgressUpload.finalCrc32,
      ChecksumType: inProgressUpload.finalCrc32 ? "FULL_OBJECT" : void 0,
      IfNoneMatch: preventOverwrite ? "*" : void 0,
      MultipartUpload: {
        Parts: sortUploadParts(inProgressUpload.completedParts)
      },
      ExpectedBucketOwner: expectedBucketOwner
    });
    if (!inProgressUpload.finalCrc32) {
      const { ContentLength: uploadedObjectSize, $metadata } = await headObject(resolvedS3Config, {
        Bucket: resolvedBucket,
        Key: finalKey,
        ExpectedBucketOwner: expectedBucketOwner
      });
      if (uploadedObjectSize && uploadedObjectSize !== size) {
        throw new StorageError({
          name: "Error",
          message: `Upload failed. Expected object size ${size}, but got ${uploadedObjectSize}.`,
          metadata: $metadata
        });
      }
    }
    if (resumableUploadsCache && uploadCacheKey) {
      await removeCachedUpload(resumableUploadsCache, uploadCacheKey);
    }
    const result = {
      eTag,
      contentType,
      metadata
    };
    return inputType === STORAGE_INPUT_KEY ? { key: objectKey, ...result } : { path: objectKey, ...result };
  };
  const startUploadWithResumability = () => startUpload().then(resolveCallback).catch((error) => {
    const abortSignal = abortController?.signal;
    if (abortSignal?.aborted && isAbortSignalFromPause) {
      logger2.debug("upload paused.");
    } else {
      rejectCallback(error);
    }
  });
  const multipartUploadJob = () => new Promise((resolve, reject) => {
    resolveCallback = resolve;
    rejectCallback = reject;
    startUploadWithResumability();
  });
  const onPause = () => {
    isAbortSignalFromPause = true;
    abortController?.abort();
  };
  const onResume = () => {
    startUploadWithResumability();
  };
  const onCancel = (message2) => {
    abortController?.abort(message2);
    const cancelUpload = async () => {
      if (uploadCacheKey && resumableUploadsCache) {
        await removeCachedUpload(resumableUploadsCache, uploadCacheKey);
      }
      await abortMultipartUpload(resolvedS3Config, {
        Bucket: resolvedBucket,
        Key: finalKey,
        UploadId: inProgressUpload?.uploadId,
        ExpectedBucketOwner: expectedBucketOwner
      });
    };
    cancelUpload().catch((e2) => {
      logger2.debug("error when cancelling upload task.", e2);
    });
    rejectCallback(
      // Internal error that should not be exposed to the users. They should use isCancelError() to check if
      // the error is caused by cancel().
      new CanceledError(message2 ? { message: message2 } : void 0)
    );
  };
  return {
    multipartUploadJob,
    onPause,
    onResume,
    onCancel
  };
};
var resolveAccessLevel = (accessLevel) => accessLevel ?? Amplify.libraryOptions.Storage?.S3?.defaultAccessLevel ?? DEFAULT_ACCESS_LEVEL;
var validateCompletedParts = (completedParts, size) => {
  const partsExpected = Math.ceil(size / calculatePartSize(size));
  const validPartCount = completedParts.length === partsExpected;
  const sorted = sortUploadParts(completedParts);
  const validPartNumbers = sorted.every((part, index) => part.PartNumber === index + 1);
  if (!validPartCount || !validPartNumbers) {
    throw new IntegrityError();
  }
};
var sortUploadParts = (parts) => {
  return [...parts].sort((partA, partB) => partA.PartNumber - partB.PartNumber);
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/uploadData/index.mjs
var uploadData = (input) => {
  const { data } = input;
  const dataByteLength = byteLength(data);
  assertValidationError(dataByteLength !== void 0, StorageValidationErrorCode.InvalidUploadSource);
  assertValidationError(dataByteLength <= MAX_OBJECT_SIZE, StorageValidationErrorCode.ObjectIsTooLarge);
  if (dataByteLength <= DEFAULT_PART_SIZE) {
    const abortController = new AbortController();
    return createUploadTask({
      isMultipartUpload: false,
      job: putObjectJob(input, abortController.signal, dataByteLength),
      onCancel: (message2) => {
        abortController.abort(message2);
      }
    });
  } else {
    const { multipartUploadJob, onPause, onResume, onCancel } = getMultipartUploadHandlers(input, dataByteLength);
    return createUploadTask({
      isMultipartUpload: true,
      job: multipartUploadJob,
      onCancel: (message2) => {
        onCancel(message2);
      },
      onPause,
      onResume
    });
  }
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/uploadData.mjs
function uploadData2(input) {
  return uploadData({
    ...input,
    options: {
      ...input?.options,
      // This option enables caching in-progress multipart uploads.
      // It's ONLY needed for client-side API.
      resumableUploadsCache: defaultStorage
    }
  });
}

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/getProperties.mjs
var getProperties = async (amplify, input, action) => {
  const { s3Config, bucket, keyPrefix, identityId } = await resolveS3ConfigAndInput(amplify, input);
  const { inputType, objectKey } = validateStorageOperationInput(input, identityId);
  validateBucketOwnerID(input.options?.expectedBucketOwner);
  const finalKey = inputType === STORAGE_INPUT_KEY ? keyPrefix + objectKey : objectKey;
  logger2.debug(`get properties of ${objectKey} from ${finalKey}`);
  const response = await headObject({
    ...s3Config,
    userAgentValue: getStorageUserAgentValue(action ?? StorageAction.GetProperties)
  }, {
    Bucket: bucket,
    Key: finalKey,
    ExpectedBucketOwner: input.options?.expectedBucketOwner
  });
  const result = {
    contentType: response.ContentType,
    size: response.ContentLength,
    eTag: response.ETag,
    lastModified: response.LastModified,
    metadata: response.Metadata,
    versionId: response.VersionId
  };
  return inputType === STORAGE_INPUT_KEY ? { key: objectKey, ...result } : { path: objectKey, ...result };
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/internal/getUrl.mjs
var getUrl = async (amplify, input) => {
  const { options: getUrlOptions } = input;
  const { s3Config, keyPrefix, bucket, identityId } = await resolveS3ConfigAndInput(amplify, input);
  const { inputType, objectKey } = validateStorageOperationInput(input, identityId);
  validateBucketOwnerID(getUrlOptions?.expectedBucketOwner);
  const finalKey = inputType === STORAGE_INPUT_KEY ? keyPrefix + objectKey : objectKey;
  if (getUrlOptions?.validateObjectExistence) {
    await getProperties(amplify, input, StorageAction.GetUrl);
  }
  let urlExpirationInSec = getUrlOptions?.expiresIn ?? DEFAULT_PRESIGN_EXPIRATION;
  const resolvedCredential = typeof s3Config.credentials === "function" ? await s3Config.credentials() : s3Config.credentials;
  const awsCredExpiration = resolvedCredential.expiration;
  if (awsCredExpiration) {
    const awsCredExpirationInSec = Math.floor((awsCredExpiration.getTime() - Date.now()) / 1e3);
    urlExpirationInSec = Math.min(awsCredExpirationInSec, urlExpirationInSec);
  }
  const maxUrlExpirationInSec = MAX_URL_EXPIRATION / 1e3;
  assertValidationError(urlExpirationInSec <= maxUrlExpirationInSec, StorageValidationErrorCode.UrlExpirationMaxLimitExceed);
  return {
    url: await getPresignedGetObjectUrl({
      ...s3Config,
      credentials: resolvedCredential,
      expiration: urlExpirationInSec
    }, {
      Bucket: bucket,
      Key: finalKey,
      ...getUrlOptions?.contentDisposition && {
        ResponseContentDisposition: constructContentDisposition(getUrlOptions.contentDisposition)
      },
      ...getUrlOptions?.contentType && {
        ResponseContentType: getUrlOptions.contentType
      },
      ExpectedBucketOwner: getUrlOptions?.expectedBucketOwner
    }),
    expiresAt: new Date(Date.now() + urlExpirationInSec * 1e3)
  };
};

// node_modules/@aws-amplify/storage/dist/esm/providers/s3/apis/getUrl.mjs
function getUrl2(input) {
  return getUrl(Amplify, input);
}

// node_modules/@aws-sdk/core/dist-es/submodules/account-id-endpoint/AccountIdEndpointModeConstants.js
var DEFAULT_ACCOUNT_ID_ENDPOINT_MODE = "preferred";
var ACCOUNT_ID_ENDPOINT_MODE_VALUES = ["disabled", "preferred", "required"];
function validateAccountIdEndpointMode(value2) {
  return ACCOUNT_ID_ENDPOINT_MODE_VALUES.includes(value2);
}

// node_modules/@aws-sdk/core/dist-es/submodules/account-id-endpoint/AccountIdEndpointModeConfigResolver.js
var resolveAccountIdEndpointModeConfig = (input) => {
  const { accountIdEndpointMode } = input;
  const accountIdEndpointModeProvider = normalizeProvider(accountIdEndpointMode ?? DEFAULT_ACCOUNT_ID_ENDPOINT_MODE);
  return Object.assign(input, {
    accountIdEndpointMode: async () => {
      const accIdMode = await accountIdEndpointModeProvider();
      if (!validateAccountIdEndpointMode(accIdMode)) {
        throw new Error(`Invalid value for accountIdEndpointMode: ${accIdMode}. Valid values are: "required", "preferred", "disabled".`);
      }
      return accIdMode;
    }
  });
};

// node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
var import_lru_cache = __toESM(require_lru_cache());
var EndpointCache2 = class {
  cache;
  constructor(capacity) {
    this.cache = new import_lru_cache.default(capacity);
  }
  getEndpoint(key) {
    const endpointsWithExpiry = this.get(key);
    if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
      return void 0;
    }
    const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }
  get(key) {
    if (!this.has(key)) {
      return;
    }
    const value2 = this.cache.get(key);
    if (!value2) {
      return;
    }
    const now = Date.now();
    const endpointsWithExpiry = value2.filter((endpoint) => now < endpoint.Expires);
    if (endpointsWithExpiry.length === 0) {
      this.delete(key);
      return void 0;
    }
    return endpointsWithExpiry;
  }
  set(key, endpoints) {
    const now = Date.now();
    this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
      Address,
      Expires: now + CachePeriodInMinutes * 60 * 1e3
    })));
  }
  delete(key) {
    this.cache.set(key, []);
  }
  has(key) {
    if (!this.cache.has(key)) {
      return false;
    }
    const endpoints = this.cache.peek(key);
    if (!endpoints) {
      return false;
    }
    return endpoints.length > 0;
  }
  clear() {
    this.cache.clear();
  }
};

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
var resolveEndpointDiscoveryConfig = (input, { endpointDiscoveryCommandCtor }) => {
  const { endpointCacheSize, endpointDiscoveryEnabled, endpointDiscoveryEnabledProvider } = input;
  return Object.assign(input, {
    endpointDiscoveryCommandCtor,
    endpointCache: new EndpointCache2(endpointCacheSize ?? 1e3),
    endpointDiscoveryEnabled: endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(endpointDiscoveryEnabled) : endpointDiscoveryEnabledProvider,
    isClientEndpointDiscoveryEnabled: endpointDiscoveryEnabled !== void 0
  });
};

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware = (options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
};
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware = () => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger4, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger4?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger: logger4, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger4?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata
    });
    throw error;
  }
};
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/configuration.js
var recursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/recursionDetectionMiddleware.browser.js
var recursionDetectionMiddleware = () => (next) => async (args) => next(args);

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js
var getRecursionDetectionPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
  if (!authSchemePreference || authSchemePreference.length === 0) {
    return candidateAuthOptions;
  }
  const preferredAuthOptions = [];
  for (const preferredSchemeName of authSchemePreference) {
    for (const candidateAuthOption of candidateAuthOptions) {
      const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
      if (candidateAuthSchemeName === preferredSchemeName) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
  }
  for (const candidateAuthOption of candidateAuthOptions) {
    if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
      preferredAuthOptions.push(candidateAuthOption);
    }
  }
  return preferredAuthOptions;
};

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map3 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map3.set(scheme.schemeId, scheme);
  }
  return map3;
}
var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
  const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
  const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
  const smithyContext = getSmithyContext(context);
  const failureReasons = [];
  for (const option of resolvedOptions) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
};

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
var getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler = (signingProperties) => (error) => {
  throw error;
};
var defaultSuccessHandler = (httpResponse, signingProperties) => {
};
var httpSigningMiddleware = (config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
};

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware"
};
var getHttpSigningPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2 = (input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig = class {
  authSchemes = /* @__PURE__ */ new Map();
  constructor(config) {
    for (const key in config) {
      const value2 = config[key];
      if (value2 !== void 0) {
        this.authSchemes.set(key, value2);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
  return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
};
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
var memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  };
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
};

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger4 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger4?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger4?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }
  });
}

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = (value2, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value2.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value2)) {
    return false;
  }
  if (value2.length < 3 || value2.length > 63) {
    return false;
  }
  if (value2 !== value2.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value2)) {
    return false;
  }
  return true;
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = (value2) => {
  const segments = value2.split(ARN_DELIMITER);
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
    return null;
  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId
  };
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-east-2": {
        description: "Asia Pacific (Taipei)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "ap-southeast-5": {
        description: "Asia Pacific (Malaysia)"
      },
      "ap-southeast-6": {
        description: "Asia Pacific (New Zealand)"
      },
      "ap-southeast-7": {
        description: "Asia Pacific (Thailand)"
      },
      "aws-global": {
        description: "aws global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "mx-central-1": {
        description: "Mexico (Central)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "aws-cn global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-eusc",
    outputs: {
      dnsSuffix: "amazonaws.eu",
      dualStackDnsSuffix: "api.amazonwebservices.eu",
      implicitGlobalRegion: "eusc-de-east-1",
      name: "aws-eusc",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
    regions: {
      "eusc-de-east-1": {
        description: "EU (Germany)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "api.aws.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "aws-iso global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "api.aws.scloud",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "aws-iso-b global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-e-global": {
        description: "aws-iso-e global region"
      },
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "api.aws.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-f-global": {
        description: "aws-iso-f global region"
      },
      "us-isof-east-1": {
        description: "US ISOF EAST"
      },
      "us-isof-south-1": {
        description: "US ISOF SOUTH"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "aws-us-gov global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = (value2) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value2) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value2)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
};
var getUserAgentPrefix = () => selectedUserAgentPrefix;

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value2) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value2;
  return credentials;
}

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature(context, feature, value2) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value2;
}

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
};

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError = (name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
};
var validateSigningProperties = async (signingProperties) => {
  const context = throwSigningPropertyError("context", signingProperties.context);
  const config = throwSigningPropertyError("config", signingProperties.config);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError("signer", config.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties?.signingRegion;
  const signingRegionSet = signingProperties?.signingRegionSet;
  const signingName = signingProperties?.signingName;
  return {
    config,
    signer,
    signingRegion,
    signingRegionSet,
    signingName
  };
};
var AwsSdkSigV4Signer = class {
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const validatedProps = await validateSigningProperties(signingProperties);
    const { config, signer } = validatedProps;
    let { signingRegion, signingName } = validatedProps;
    const handlerExecutionContext = signingProperties.context;
    if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
      const [first, second] = handlerExecutionContext.authSchemes;
      if (first?.name === "sigv4a" && second?.name === "sigv4") {
        signingRegion = second?.signingRegion ?? signingRegion;
        signingName = second?.signingName ?? signingName;
      }
    }
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion,
      signingService: signingName
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error) => {
      const serverTime = error.ServerTime ?? getDateHeader(error.$response);
      if (serverTime) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        const initialSystemClockOffset = config.systemClockOffset;
        config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
        const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
        if (clockSkewCorrected && error.$metadata) {
          error.$metadata.clockSkewCorrected = true;
        }
      }
      throw error;
    };
  }
  successHandler(httpResponse, signingProperties) {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config = throwSigningPropertyError("config", signingProperties.config);
      config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
    }
  }
};

// node_modules/@smithy/core/dist-es/submodules/config/property-provider/memoize.js
var memoize = (provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  };
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
};

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/checkRegion.js
var validRegions = /* @__PURE__ */ new Set();
var checkRegion = (region, check = isValidHostLabel) => {
  if (!validRegions.has(region) && !check(region)) {
    if (region === "*") {
      console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
    } else {
      throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
    }
  } else {
    validRegions.add(region);
  }
};

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/isFipsRegion.js
var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/getRealRegion.js
var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = (input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return Object.assign(input, {
    region: async () => {
      const providedRegion = typeof region === "function" ? await region() : region;
      const realRegion = getRealRegion(providedRegion);
      checkRegion(realRegion);
      return realRegion;
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  });
};

// node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/constants.js
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/resolveDefaultsModeConfig.browser.js
var resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
});
var useMobileConfiguration = () => {
  const navigator = window?.navigator;
  if (navigator?.connection) {
    const { effectiveType, rtt, downlink } = navigator?.connection;
    const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
    if (slow) {
      return true;
    }
  }
  return navigator?.userAgentData?.mobile || typeof navigator?.maxTouchPoints === "number" && navigator?.maxTouchPoints > 1;
};

// node_modules/@smithy/core/dist-es/submodules/config/index.browser.js
var no = Symbol.for("node-only");
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
var HeaderFormatter = class {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64 = class _Int64 {
  bytes;
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery = ({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query)) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    const encodedKey = escapeUri(key);
    keys.push(encodedKey);
    const value2 = query[key];
    if (typeof value2 === "string") {
      serialized[encodedKey] = `${encodedKey}=${escapeUri(value2)}`;
    } else if (Array.isArray(value2)) {
      serialized[encodedKey] = value2.slice(0).reduce((encoded, value3) => encoded.concat([`${encodedKey}=${escapeUri(value3)}`]), []).sort().join("&");
    }
  }
  return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
};

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
var toDate = (time) => {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
};

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base = class {
  service;
  regionProvider;
  credentialProvider;
  sha256;
  uriEscapePath;
  applyChecksum;
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
  formatDate(now) {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  }
  getCanonicalHeaderList(headers) {
    return Object.keys(headers).sort().join(";");
  }
};

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache = {};
var cacheQueue = [];
var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
};
var hmac = (ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
};

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
};

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
};

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader = (soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery = (request, options = {}) => {
  const { headers, query = {} } = HttpRequest.clone(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
};

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest = (request) => {
  request = HttpRequest.clone(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
};

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class extends SignatureV4Base {
  headerFormatter = new HeaderFormatter();
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    super({
      applyChecksum,
      credentials,
      region,
      service,
      sha256,
      uriEscapePath
    });
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = this.formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, {
      signingDate,
      signingRegion: region,
      signingService,
      eventStreamCredentials
    });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature,
      eventStreamCredentials
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
    const credentials = eventStreamCredentials ?? await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = this.formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = (config) => {
  let inputCredentials = config.credentials;
  let isUserSupplied = !!config.credentials;
  let resolvedCredentials = void 0;
  Object.defineProperty(config, "credentials", {
    set(credentials) {
      if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
        isUserSupplied = true;
      }
      inputCredentials = credentials;
      const memoizedProvider = normalizeCredentialProvider(config, {
        credentials: inputCredentials,
        credentialDefaultProvider: config.credentialDefaultProvider
      });
      const boundProvider = bindCallerConfig(config, memoizedProvider);
      if (isUserSupplied && !boundProvider.attributed) {
        resolvedCredentials = async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e"));
        resolvedCredentials.memoized = boundProvider.memoized;
        resolvedCredentials.configBound = boundProvider.configBound;
        resolvedCredentials.attributed = true;
      } else {
        resolvedCredentials = boundProvider;
      }
    },
    get() {
      return resolvedCredentials;
    },
    enumerable: true,
    configurable: true
  });
  config.credentials = inputCredentials;
  const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
  let signer;
  if (config.signer) {
    signer = normalizeProvider2(config.signer);
  } else if (config.regionInfoProvider) {
    signer = () => normalizeProvider2(config.region)().then(async (region) => [
      await config.regionInfoProvider(region, {
        useFipsEndpoint: await config.useFipsEndpoint(),
        useDualstackEndpoint: await config.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      config.signingRegion = config.signingRegion || signingRegion || region;
      config.signingName = config.signingName || signingService || config.serviceId;
      const params = {
        ...config,
        credentials: config.credentials,
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    });
  } else {
    signer = async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: config.signingName || config.defaultSigningName,
        signingRegion: await normalizeProvider2(config.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config.signingRegion = config.signingRegion || signingRegion;
      config.signingName = config.signingName || signingService || config.serviceId;
      const params = {
        ...config,
        credentials: config.credentials,
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    };
  }
  const resolvedConfig = Object.assign(config, {
    systemClockOffset,
    signingEscapePath,
    signer
  });
  return resolvedConfig;
};
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => (context?.utf8Encoder ?? toUtf8)(body));

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    try {
      return JSON.parse(encoded);
    } catch (e2) {
      if (e2?.name === "SyntaxError") {
        Object.defineProperty(e2, "$responseBodyText", {
          value: encoded
        });
      }
      throw e2;
    }
  }
  return {};
});
var parseJsonErrorBody = async (errorBody, context) => {
  const value2 = await parseJsonBody(errorBody, context);
  value2.message = value2.message ?? value2.Message;
  return value2;
};
var loadRestJsonErrorCode = (output, data) => {
  const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
  const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data && typeof data === "object") {
    const codeKey = findKey(data, "code");
    if (codeKey && data[codeKey] !== void 0) {
      return sanitizeErrorCode(data[codeKey]);
    }
    if (data["__type"] !== void 0) {
      return sanitizeErrorCode(data["__type"]);
    }
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var awsExpectUnion = (value2) => {
  if (value2 == null) {
    return void 0;
  }
  if (typeof value2 === "object" && "__type" in value2) {
    delete value2.__type;
  }
  return expectUnion(value2);
};

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature(context, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature(context, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value2] of Object.entries(credentials.$source ?? {})) {
      setFeature(context, key, value2);
    }
  }
}

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
var BYTE_LIMIT = 1024;
function encodeFeatures(features) {
  let buffer = "";
  for (const key in features) {
    const val = features[key];
    if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }
  return buffer;
}

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = (options) => (next, context) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context, options, args);
  const awsContext = context;
  defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
};
var escapeUserAgent = (userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
};
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }
});

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/isStreamingPayload/isStreamingPayload.browser.js
var isStreamingPayload = (request) => request?.body instanceof ReadableStream;

// node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/constants.js
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

// node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/service-error-classification.js
var isRetryableByTrait = (error) => error?.$retryable !== void 0;
var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
var isBrowserNetworkError = (error) => {
  const errorMessages = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed"
  ]);
  const isValid = error && error instanceof TypeError;
  if (!isValid) {
    return false;
  }
  return errorMessages.has(error.message);
};
var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
var isTransientError = (error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || error.name === "InvalidSignatureException" && error.message?.includes("Signature expired") || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || isNodeJsHttp2TransientError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
var isServerError = (error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
};
function isNodeJsHttp2TransientError(error) {
  return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
}

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/constants.js
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var INITIAL_RETRY_TOKENS = 500;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/parseRetryAfterHeader.js
function parseRetryAfterHeader(response, logger4) {
  if (!HttpResponse.isInstance(response)) {
    return;
  }
  for (const header of Object.keys(response.headers)) {
    const h2 = header.toLowerCase();
    if (h2 === "retry-after") {
      const retryAfter = response.headers[header];
      let retryAfterSeconds = NaN;
      if (retryAfter.endsWith("GMT")) {
        try {
          const date = parseRfc7231DateTime(retryAfter);
          retryAfterSeconds = (date.getTime() - Date.now()) / 1e3;
        } catch (e2) {
          logger4?.trace?.("Failed to parse retry-after header");
          logger4?.trace?.(e2);
        }
      } else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter.match(/ GMT, ([\d.]+)$/)?.[1]);
      } else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter);
      } else if (Date.parse(retryAfter) >= Date.now()) {
        retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1e3;
      }
      if (isNaN(retryAfterSeconds)) {
        return;
      }
      return new Date(Date.now() + retryAfterSeconds * 1e3);
    } else if (h2 === "x-amz-retry-after") {
      const v2 = response.headers[header];
      const backoffMilliseconds = Number(v2);
      if (isNaN(backoffMilliseconds)) {
        logger4?.trace?.(`Failed to parse x-amz-retry-after=${v2}`);
        return;
      }
      return new Date(Date.now() + backoffMilliseconds);
    }
  }
}

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/util.js
var asSdkError = (error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
};

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
function bindRetryMiddleware(isStreamingPayload2) {
  return (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
      retryStrategy = retryStrategy;
      let retryToken = await retryStrategy.acquireInitialRetryToken((context["partition_id"] ?? "") + (context.__retryLongPoll ? ":longpoll" : ""));
      let lastError = new Error();
      let attempts = 0;
      let totalRetryDelay = 0;
      const { request } = args;
      const isRequest = HttpRequest.isInstance(request);
      if (isRequest) {
        request.headers[INVOCATION_ID_HEADER] = v4();
      }
      while (true) {
        try {
          if (isRequest) {
            request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const { response, output } = await next(args);
          retryStrategy.recordSuccess(retryToken);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalRetryDelay;
          return { response, output };
        } catch (e2) {
          const retryErrorInfo = getRetryErrorInfo(e2, options.logger);
          lastError = asSdkError(e2);
          if (isRequest && isStreamingPayload2(request)) {
            (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
            throw lastError;
          }
          try {
            retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
          } catch (refreshError) {
            if (typeof refreshError.$backoff === "number") {
              await cooldown(refreshError.$backoff);
            }
            if (!lastError.$metadata) {
              lastError.$metadata = {};
            }
            lastError.$metadata.attempts = attempts + 1;
            lastError.$metadata.totalRetryDelay = totalRetryDelay;
            throw lastError;
          }
          attempts = retryToken.getRetryCount();
          const delay = retryToken.getRetryDelay();
          totalRetryDelay += delay;
          await cooldown(delay);
        }
      }
    } else {
      retryStrategy = retryStrategy;
      if (retryStrategy?.mode) {
        context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
      }
      return retryStrategy.retry(next, args);
    }
  };
}
var cooldown = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
var getRetryErrorInfo = (error, logger4) => {
  const errorInfo = {
    error,
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = parseRetryAfterHeader(error.$response, logger4);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
};
var getRetryErrorType = (error) => {
  if (isThrottlingError(error))
    return "THROTTLING";
  if (isTransientError(error))
    return "TRANSIENT";
  if (isServerError(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
};
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
function bindGetRetryPlugin(isStreamingPayload2) {
  const retryMiddleware2 = bindRetryMiddleware(isStreamingPayload2);
  return (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(retryMiddleware2(options), retryMiddlewareOptions);
    }
  });
}

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRateLimiter.js
var DefaultRateLimiter = class _DefaultRateLimiter {
  static setTimeoutFn = setTimeout;
  beta;
  minCapacity;
  minFillRate;
  scaleConstant;
  smooth;
  enabled = false;
  availableTokens = 0;
  lastMaxRate = 0;
  measuredTxRate = 0;
  requestCount = 0;
  fillRate;
  lastThrottleTime;
  lastTimestamp = 0;
  lastTxRateBucket;
  maxCapacity;
  timeWindow = 0;
  constructor(options) {
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    this.lastThrottleTime = this.getCurrentTimeInSeconds();
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    const retryErrorInfo = response;
    const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || isThrottlingError(retryErrorInfo?.error ?? response);
    if (isThrottling) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    while (amount > this.availableTokens) {
      const delay = (amount - this.availableTokens) / this.fillRate * 1e3;
      await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
      this.refillTokenBucket();
    }
    this.availableTokens = this.availableTokens - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
    this.lastTimestamp = timestamp;
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t2 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t2 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/retries-2026-config.js
var Retry = class _Retry {
  static v2026 = typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true";
  static delay() {
    return _Retry.v2026 ? 50 : 100;
  }
  static throttlingDelay() {
    return _Retry.v2026 ? 1e3 : 500;
  }
  static cost() {
    return _Retry.v2026 ? 14 : 5;
  }
  static throttlingCost() {
    return _Retry.v2026 ? 5 : 10;
  }
  static modifiedCostType() {
    return _Retry.v2026 ? "THROTTLING" : "TRANSIENT";
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryBackoffStrategy.js
var DefaultRetryBackoffStrategy = class {
  x = Retry.delay();
  computeNextBackoffDelay(i2) {
    const b2 = Math.random();
    const r2 = 2;
    const t_i = b2 * Math.min(this.x * r2 ** i2, MAXIMUM_RETRY_DELAY);
    return Math.floor(t_i);
  }
  setDelayBase(delay) {
    this.x = delay;
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryToken.js
var DefaultRetryToken = class {
  delay;
  count;
  cost;
  longPoll;
  constructor(delay, count, cost, longPoll) {
    this.delay = delay;
    this.count = count;
    this.cost = cost;
    this.longPoll = longPoll;
  }
  getRetryCount() {
    return this.count;
  }
  getRetryDelay() {
    return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
  }
  getRetryCost() {
    return this.cost;
  }
  isLongPoll() {
    return this.longPoll;
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/config.js
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/StandardRetryStrategy.js
var refusal = {
  incompatible: 1,
  attempts: 2,
  capacity: 3
};
var StandardRetryStrategy = class {
  mode = RETRY_MODES.STANDARD;
  capacity = INITIAL_RETRY_TOKENS;
  retryBackoffStrategy;
  maxAttemptsProvider;
  baseDelay;
  constructor(arg1) {
    if (typeof arg1 === "number") {
      this.maxAttemptsProvider = async () => arg1;
    } else if (typeof arg1 === "function") {
      this.maxAttemptsProvider = arg1;
    } else if (arg1 && typeof arg1 === "object") {
      this.maxAttemptsProvider = async () => arg1.maxAttempts;
      this.baseDelay = arg1.baseDelay;
      this.retryBackoffStrategy = arg1.backoff;
    }
    this.maxAttemptsProvider ??= async () => DEFAULT_MAX_ATTEMPTS;
    this.baseDelay ??= Retry.delay();
    this.retryBackoffStrategy ??= new DefaultRetryBackoffStrategy();
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return new DefaultRetryToken(Retry.delay(), 0, void 0, Retry.v2026 && retryTokenScope.includes(":longpoll"));
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    const retryCode = this.retryCode(token, errorInfo, maxAttempts);
    const shouldRetry = retryCode === 0;
    const isLongPoll = token.isLongPoll?.();
    if (shouldRetry || isLongPoll) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      let retryDelay = delayFromErrorType;
      if (errorInfo.retryAfterHint instanceof Date) {
        retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5e3));
      }
      if (!shouldRetry) {
        throw Object.assign(new Error("No retry token available"), {
          $backoff: Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0
        });
      } else {
        const capacityCost = this.getCapacityCost(errorType);
        this.capacity -= capacityCost;
        return new DefaultRetryToken(retryDelay, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
      }
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async maxAttempts() {
    return this.maxAttemptsProvider();
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  retryCode(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
    const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
    const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
    return retryableStatus || attemptStatus || capacityStatus;
  }
  getCapacityCost(errorType) {
    return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  mode = RETRY_MODES.ADAPTIVE;
  rateLimiter;
  standardRetryStrategy;
  constructor(maxAttemptsProvider, options) {
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = options ? new StandardRetryStrategy({
      maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
      ...options
    }) : new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    const token = await this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    await this.rateLimiter.getSendToken();
    return token;
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    const token = await this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    await this.rateLimiter.getSendToken();
    return token;
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
  async maxAttemptsProvider() {
    return this.standardRetryStrategy.maxAttempts();
  }
};

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/configurations.js
var resolveRetryConfig = (input) => {
  const { retryStrategy, retryMode } = input;
  const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  let controller = retryStrategy ? Promise.resolve(retryStrategy) : void 0;
  const getDefault = async () => await normalizeProvider(retryMode)() === RETRY_MODES.ADAPTIVE ? new AdaptiveRetryStrategy(maxAttempts) : new StandardRetryStrategy(maxAttempts);
  return Object.assign(input, {
    maxAttempts,
    retryStrategy: () => controller ??= getDefault()
  });
};

// node_modules/@smithy/core/dist-es/submodules/retry/index.browser.js
var no2 = Symbol.for("node-only");
var retryMiddleware = bindRetryMiddleware(isStreamingPayload);
var getRetryPlugin = bindGetRetryPlugin(isStreamingPayload);

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js
var defaultDynamoDBHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "dynamodb",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
var defaultDynamoDBHttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
};
var resolveHttpAuthSchemeConfig = (config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
  });
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "dynamodb"
  });
};
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  AccountId: { type: "builtInParams", name: "accountId" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  AccountIdEndpointMode: { type: "builtInParams", name: "accountIdEndpointMode" }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
var DynamoDBServiceException = class _DynamoDBServiceException extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _DynamoDBServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
var BackupInUseException = class _BackupInUseException extends DynamoDBServiceException {
  name = "BackupInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BackupInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BackupInUseException.prototype);
  }
};
var BackupNotFoundException = class _BackupNotFoundException extends DynamoDBServiceException {
  name = "BackupNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BackupNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BackupNotFoundException.prototype);
  }
};
var InternalServerError = class _InternalServerError extends DynamoDBServiceException {
  name = "InternalServerError";
  $fault = "server";
  constructor(opts) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _InternalServerError.prototype);
  }
};
var RequestLimitExceeded = class _RequestLimitExceeded extends DynamoDBServiceException {
  name = "RequestLimitExceeded";
  $fault = "client";
  ThrottlingReasons;
  constructor(opts) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _RequestLimitExceeded.prototype);
    this.ThrottlingReasons = opts.ThrottlingReasons;
  }
};
var ThrottlingException = class _ThrottlingException extends DynamoDBServiceException {
  name = "ThrottlingException";
  $fault = "client";
  throttlingReasons;
  constructor(opts) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ThrottlingException.prototype);
    this.throttlingReasons = opts.throttlingReasons;
  }
};
var InvalidEndpointException = class _InvalidEndpointException extends DynamoDBServiceException {
  name = "InvalidEndpointException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
};
var ProvisionedThroughputExceededException = class _ProvisionedThroughputExceededException extends DynamoDBServiceException {
  name = "ProvisionedThroughputExceededException";
  $fault = "client";
  ThrottlingReasons;
  constructor(opts) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ProvisionedThroughputExceededException.prototype);
    this.ThrottlingReasons = opts.ThrottlingReasons;
  }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends DynamoDBServiceException {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
  }
};
var ItemCollectionSizeLimitExceededException = class _ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
  name = "ItemCollectionSizeLimitExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ItemCollectionSizeLimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ItemCollectionSizeLimitExceededException.prototype);
  }
};
var ReplicatedWriteConflictException = class _ReplicatedWriteConflictException extends DynamoDBServiceException {
  name = "ReplicatedWriteConflictException";
  $fault = "client";
  $retryable = {};
  constructor(opts) {
    super({
      name: "ReplicatedWriteConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ReplicatedWriteConflictException.prototype);
  }
};
var ContinuousBackupsUnavailableException = class _ContinuousBackupsUnavailableException extends DynamoDBServiceException {
  name = "ContinuousBackupsUnavailableException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ContinuousBackupsUnavailableException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ContinuousBackupsUnavailableException.prototype);
  }
};
var LimitExceededException = class _LimitExceededException extends DynamoDBServiceException {
  name = "LimitExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
  }
};
var TableInUseException = class _TableInUseException extends DynamoDBServiceException {
  name = "TableInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TableInUseException.prototype);
  }
};
var TableNotFoundException = class _TableNotFoundException extends DynamoDBServiceException {
  name = "TableNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TableNotFoundException.prototype);
  }
};
var GlobalTableAlreadyExistsException = class _GlobalTableAlreadyExistsException extends DynamoDBServiceException {
  name = "GlobalTableAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "GlobalTableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _GlobalTableAlreadyExistsException.prototype);
  }
};
var ResourceInUseException = class _ResourceInUseException extends DynamoDBServiceException {
  name = "ResourceInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ResourceInUseException.prototype);
  }
};
var TransactionConflictException = class _TransactionConflictException extends DynamoDBServiceException {
  name = "TransactionConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TransactionConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TransactionConflictException.prototype);
  }
};
var PolicyNotFoundException = class _PolicyNotFoundException extends DynamoDBServiceException {
  name = "PolicyNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _PolicyNotFoundException.prototype);
  }
};
var ExportNotFoundException = class _ExportNotFoundException extends DynamoDBServiceException {
  name = "ExportNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ExportNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ExportNotFoundException.prototype);
  }
};
var GlobalTableNotFoundException = class _GlobalTableNotFoundException extends DynamoDBServiceException {
  name = "GlobalTableNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "GlobalTableNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _GlobalTableNotFoundException.prototype);
  }
};
var ImportNotFoundException = class _ImportNotFoundException extends DynamoDBServiceException {
  name = "ImportNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ImportNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ImportNotFoundException.prototype);
  }
};
var DuplicateItemException = class _DuplicateItemException extends DynamoDBServiceException {
  name = "DuplicateItemException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "DuplicateItemException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _DuplicateItemException.prototype);
  }
};
var IdempotentParameterMismatchException = class _IdempotentParameterMismatchException extends DynamoDBServiceException {
  name = "IdempotentParameterMismatchException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
};
var TransactionInProgressException = class _TransactionInProgressException extends DynamoDBServiceException {
  name = "TransactionInProgressException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
};
var ExportConflictException = class _ExportConflictException extends DynamoDBServiceException {
  name = "ExportConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ExportConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ExportConflictException.prototype);
  }
};
var InvalidExportTimeException = class _InvalidExportTimeException extends DynamoDBServiceException {
  name = "InvalidExportTimeException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidExportTimeException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidExportTimeException.prototype);
  }
};
var PointInTimeRecoveryUnavailableException = class _PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
  name = "PointInTimeRecoveryUnavailableException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "PointInTimeRecoveryUnavailableException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _PointInTimeRecoveryUnavailableException.prototype);
  }
};
var ImportConflictException = class _ImportConflictException extends DynamoDBServiceException {
  name = "ImportConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ImportConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ImportConflictException.prototype);
  }
};
var TableAlreadyExistsException = class _TableAlreadyExistsException extends DynamoDBServiceException {
  name = "TableAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TableAlreadyExistsException.prototype);
  }
};
var InvalidRestoreTimeException = class _InvalidRestoreTimeException extends DynamoDBServiceException {
  name = "InvalidRestoreTimeException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRestoreTimeException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRestoreTimeException.prototype);
  }
};
var ReplicaAlreadyExistsException = class _ReplicaAlreadyExistsException extends DynamoDBServiceException {
  name = "ReplicaAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ReplicaAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ReplicaAlreadyExistsException.prototype);
  }
};
var ReplicaNotFoundException = class _ReplicaNotFoundException extends DynamoDBServiceException {
  name = "ReplicaNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ReplicaNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ReplicaNotFoundException.prototype);
  }
};
var IndexNotFoundException = class _IndexNotFoundException extends DynamoDBServiceException {
  name = "IndexNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "IndexNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _IndexNotFoundException.prototype);
  }
};
var AttributeValue;
(function(AttributeValue2) {
  AttributeValue2.visit = (value2, visitor) => {
    if (value2.S !== void 0)
      return visitor.S(value2.S);
    if (value2.N !== void 0)
      return visitor.N(value2.N);
    if (value2.B !== void 0)
      return visitor.B(value2.B);
    if (value2.SS !== void 0)
      return visitor.SS(value2.SS);
    if (value2.NS !== void 0)
      return visitor.NS(value2.NS);
    if (value2.BS !== void 0)
      return visitor.BS(value2.BS);
    if (value2.M !== void 0)
      return visitor.M(value2.M);
    if (value2.L !== void 0)
      return visitor.L(value2.L);
    if (value2.NULL !== void 0)
      return visitor.NULL(value2.NULL);
    if (value2.BOOL !== void 0)
      return visitor.BOOL(value2.BOOL);
    return visitor._(value2.$unknown[0], value2.$unknown[1]);
  };
})(AttributeValue || (AttributeValue = {}));
var ConditionalCheckFailedException = class _ConditionalCheckFailedException extends DynamoDBServiceException {
  name = "ConditionalCheckFailedException";
  $fault = "client";
  Item;
  constructor(opts) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConditionalCheckFailedException.prototype);
    this.Item = opts.Item;
  }
};
var TransactionCanceledException = class _TransactionCanceledException extends DynamoDBServiceException {
  name = "TransactionCanceledException";
  $fault = "client";
  Message;
  CancellationReasons;
  constructor(opts) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TransactionCanceledException.prototype);
    this.Message = opts.Message;
    this.CancellationReasons = opts.CancellationReasons;
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
var se_DescribeEndpointsCommand = async (input, context) => {
  const headers = sharedHeaders("DescribeEndpoints");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
};
var se_PutItemCommand = async (input, context) => {
  const headers = sharedHeaders("PutItem");
  let body;
  body = JSON.stringify(se_PutItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
};
var se_QueryCommand = async (input, context) => {
  const headers = sharedHeaders("Query");
  let body;
  body = JSON.stringify(se_QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
};
var de_DescribeEndpointsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseJsonBody(output.body, context);
  let contents = {};
  contents = _json(data);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
};
var de_PutItemCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseJsonBody(output.body, context);
  let contents = {};
  contents = de_PutItemOutput(data, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
};
var de_QueryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseJsonBody(output.body, context);
  let contents = {};
  contents = de_QueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseJsonErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.dynamodb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ReplicatedWriteConflictException":
    case "com.amazonaws.dynamodb#ReplicatedWriteConflictException":
      throw await de_ReplicatedWriteConflictExceptionRes(parsedOutput, context);
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.dynamodb#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ExportNotFoundException":
    case "com.amazonaws.dynamodb#ExportNotFoundException":
      throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "ImportNotFoundException":
    case "com.amazonaws.dynamodb#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await de_DuplicateItemExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
    case "ExportConflictException":
    case "com.amazonaws.dynamodb#ExportConflictException":
      throw await de_ExportConflictExceptionRes(parsedOutput, context);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
    case "ImportConflictException":
    case "com.amazonaws.dynamodb#ImportConflictException":
      throw await de_ImportConflictExceptionRes(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
};
var de_BackupInUseExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_BackupNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ConditionalCheckFailedExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ConditionalCheckFailedException(body, context);
  const exception = new ConditionalCheckFailedException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ContinuousBackupsUnavailableExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ContinuousBackupsUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_DuplicateItemExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new DuplicateItemException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ExportConflictExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ExportNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_GlobalTableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_GlobalTableNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_IdempotentParameterMismatchExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ImportConflictExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ImportNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_IndexNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IndexNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_InternalServerErrorRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_InvalidEndpointExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_InvalidExportTimeExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidExportTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_InvalidRestoreTimeExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidRestoreTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ItemCollectionSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ItemCollectionSizeLimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_LimitExceededExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_PointInTimeRecoveryUnavailableExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PointInTimeRecoveryUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_PolicyNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ReplicaAlreadyExistsExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ReplicaNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ReplicatedWriteConflictExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicatedWriteConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_RequestLimitExceededRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TableInUseExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TableNotFoundExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_ThrottlingExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TransactionCanceledExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_TransactionCanceledException(body, context);
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TransactionConflictExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var de_TransactionInProgressExceptionRes = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
};
var se_AttributeValue = (input, context) => {
  return AttributeValue.visit(input, {
    B: (value2) => ({ B: context.base64Encoder(value2) }),
    BOOL: (value2) => ({ BOOL: value2 }),
    BS: (value2) => ({ BS: se_BinarySetAttributeValue(value2, context) }),
    L: (value2) => ({ L: se_ListAttributeValue(value2, context) }),
    M: (value2) => ({ M: se_MapAttributeValue(value2, context) }),
    N: (value2) => ({ N: value2 }),
    NS: (value2) => ({ NS: _json(value2) }),
    NULL: (value2) => ({ NULL: value2 }),
    S: (value2) => ({ S: value2 }),
    SS: (value2) => ({ SS: _json(value2) }),
    _: (name, value2) => ({ [name]: value2 })
  });
};
var se_AttributeValueList = (input, context) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
};
var se_BinarySetAttributeValue = (input, context) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return context.base64Encoder(entry);
  });
};
var se_Condition = (input, context) => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: []
  });
};
var se_ExpectedAttributeMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_ExpectedAttributeValue(value2, context);
    return acc;
  }, {});
};
var se_ExpectedAttributeValue = (input, context) => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: [],
    Exists: [],
    Value: (_) => se_AttributeValue(_, context)
  });
};
var se_ExpressionAttributeValueMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value2, context);
    return acc;
  }, {});
};
var se_FilterConditionMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_Condition(value2, context);
    return acc;
  }, {});
};
var se_Key = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value2, context);
    return acc;
  }, {});
};
var se_KeyConditions = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_Condition(value2, context);
    return acc;
  }, {});
};
var se_ListAttributeValue = (input, context) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
};
var se_MapAttributeValue = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value2, context);
    return acc;
  }, {});
};
var se_PutItemInput = (input, context) => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Item: (_) => se_PutItemInputAttributeMap(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
};
var se_PutItemInputAttributeMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value2, context);
    return acc;
  }, {});
};
var se_QueryInput = (input, context) => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    FilterExpression: [],
    IndexName: [],
    KeyConditionExpression: [],
    KeyConditions: (_) => se_KeyConditions(_, context),
    Limit: [],
    ProjectionExpression: [],
    QueryFilter: (_) => se_FilterConditionMap(_, context),
    ReturnConsumedCapacity: [],
    ScanIndexForward: [],
    Select: [],
    TableName: []
  });
};
var de_AttributeMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value2), context);
    return acc;
  }, {});
};
var de_AttributeValue = (output, context) => {
  if (output.B != null) {
    return {
      B: context.base64Decoder(output.B)
    };
  }
  if (expectBoolean(output.BOOL) !== void 0) {
    return { BOOL: expectBoolean(output.BOOL) };
  }
  if (output.BS != null) {
    return {
      BS: de_BinarySetAttributeValue(output.BS, context)
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context)
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context)
    };
  }
  if (expectString(output.N) !== void 0) {
    return { N: expectString(output.N) };
  }
  if (output.NS != null) {
    return {
      NS: _json(output.NS)
    };
  }
  if (expectBoolean(output.NULL) !== void 0) {
    return { NULL: expectBoolean(output.NULL) };
  }
  if (expectString(output.S) !== void 0) {
    return { S: expectString(output.S) };
  }
  if (output.SS != null) {
    return {
      SS: _json(output.SS)
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var de_BinarySetAttributeValue = (output, context) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return context.base64Decoder(entry);
  });
  return retVal;
};
var de_CancellationReason = (output, context) => {
  return take(output, {
    Code: expectString,
    Item: (_) => de_AttributeMap(_, context),
    Message: expectString
  });
};
var de_CancellationReasonList = (output, context) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_CancellationReason(entry, context);
  });
  return retVal;
};
var de_Capacity = (output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    ReadCapacityUnits: limitedParseDouble,
    WriteCapacityUnits: limitedParseDouble
  });
};
var de_ConditionalCheckFailedException = (output, context) => {
  return take(output, {
    Item: (_) => de_AttributeMap(_, context),
    message: expectString
  });
};
var de_ConsumedCapacity = (output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
    LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
    ReadCapacityUnits: limitedParseDouble,
    Table: (_) => de_Capacity(_, context),
    TableName: expectString,
    WriteCapacityUnits: limitedParseDouble
  });
};
var de_ItemCollectionKeyAttributeMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value2), context);
    return acc;
  }, {});
};
var de_ItemCollectionMetrics = (output, context) => {
  return take(output, {
    ItemCollectionKey: (_) => de_ItemCollectionKeyAttributeMap(_, context),
    SizeEstimateRangeGB: (_) => de_ItemCollectionSizeEstimateRange(_, context)
  });
};
var de_ItemCollectionSizeEstimateRange = (output, context) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return limitedParseDouble(entry);
  });
  return retVal;
};
var de_ItemList = (output, context) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_AttributeMap(entry, context);
  });
  return retVal;
};
var de_Key = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value2), context);
    return acc;
  }, {});
};
var de_ListAttributeValue = (output, context) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_AttributeValue(awsExpectUnion(entry), context);
  });
  return retVal;
};
var de_MapAttributeValue = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value2), context);
    return acc;
  }, {});
};
var de_PutItemOutput = (output, context) => {
  return take(output, {
    Attributes: (_) => de_AttributeMap(_, context),
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context)
  });
};
var de_QueryOutput = (output, context) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
    Count: expectInt32,
    Items: (_) => de_ItemList(_, context),
    LastEvaluatedKey: (_) => de_Key(_, context),
    ScannedCount: expectInt32
  });
};
var de_SecondaryIndexesCapacityMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value2]) => {
    if (value2 === null) {
      return acc;
    }
    acc[key] = de_Capacity(value2, context);
    return acc;
  }, {});
};
var de_TransactionCanceledException = (output, context) => {
  return take(output, {
    CancellationReasons: (_) => de_CancellationReasonList(_, context),
    Message: expectString
  });
};
var deserializeMetadata2 = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var throwDefaultError2 = withBaseException(DynamoDBServiceException);
var buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
};
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDB_20120810.${operation}`
  };
}

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
var DescribeEndpointsCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "DescribeEndpoints", {}).n("DynamoDBClient", "DescribeEndpointsCommand").f(void 0, void 0).ser(se_DescribeEndpointsCommand).de(de_DescribeEndpointsCommand).build() {
};

// node_modules/@aws-sdk/client-dynamodb/package.json
var package_default = {
  name: "@aws-sdk/client-dynamodb",
  description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
  version: "3.888.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-dynamodb",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.888.0",
    "@aws-sdk/credential-provider-node": "3.888.0",
    "@aws-sdk/middleware-endpoint-discovery": "3.887.0",
    "@aws-sdk/middleware-host-header": "3.887.0",
    "@aws-sdk/middleware-logger": "3.887.0",
    "@aws-sdk/middleware-recursion-detection": "3.887.0",
    "@aws-sdk/middleware-user-agent": "3.888.0",
    "@aws-sdk/region-config-resolver": "3.887.0",
    "@aws-sdk/types": "3.887.0",
    "@aws-sdk/util-endpoints": "3.887.0",
    "@aws-sdk/util-user-agent-browser": "3.887.0",
    "@aws-sdk/util-user-agent-node": "3.888.0",
    "@smithy/config-resolver": "^4.2.1",
    "@smithy/core": "^3.11.0",
    "@smithy/fetch-http-handler": "^5.2.1",
    "@smithy/hash-node": "^4.1.1",
    "@smithy/invalid-dependency": "^4.1.1",
    "@smithy/middleware-content-length": "^4.1.1",
    "@smithy/middleware-endpoint": "^4.2.1",
    "@smithy/middleware-retry": "^4.2.1",
    "@smithy/middleware-serde": "^4.1.1",
    "@smithy/middleware-stack": "^4.1.1",
    "@smithy/node-config-provider": "^4.2.1",
    "@smithy/node-http-handler": "^4.2.1",
    "@smithy/protocol-http": "^5.2.1",
    "@smithy/smithy-client": "^4.6.1",
    "@smithy/types": "^4.5.0",
    "@smithy/url-parser": "^4.1.1",
    "@smithy/util-base64": "^4.1.0",
    "@smithy/util-body-length-browser": "^4.1.0",
    "@smithy/util-body-length-node": "^4.1.0",
    "@smithy/util-defaults-mode-browser": "^4.1.1",
    "@smithy/util-defaults-mode-node": "^4.1.1",
    "@smithy/util-endpoints": "^3.1.1",
    "@smithy/util-middleware": "^4.1.1",
    "@smithy/util-retry": "^4.1.1",
    "@smithy/util-utf8": "^4.1.0",
    "@smithy/util-waiter": "^4.1.1",
    "@types/uuid": "^9.0.1",
    tslib: "^2.6.2",
    uuid: "^9.0.1"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-dynamodb"
  }
};

// node_modules/@aws-crypto/sha256-browser/build/module/constants.js
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
  227,
  176,
  196,
  66,
  152,
  252,
  28,
  20,
  154,
  251,
  244,
  200,
  153,
  111,
  185,
  36,
  39,
  174,
  65,
  228,
  100,
  155,
  147,
  76,
  164,
  149,
  153,
  27,
  120,
  82,
  184,
  85
]);

// node_modules/@aws-sdk/util-locate-window/dist-es/index.js
var fallbackWindow = {};
function locateWindow() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof self !== "undefined") {
    return self;
  }
  return fallbackWindow;
}

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha2562 = (
  /** @class */
  (function() {
    function Sha2564(secret) {
      this.toHash = new Uint8Array(0);
      this.secret = secret;
      this.reset();
    }
    Sha2564.prototype.update = function(data) {
      if (isEmptyData(data)) {
        return;
      }
      var update = convertToBuffer(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function() {
      var _this = this;
      if (this.key) {
        return this.key.then(function(key) {
          return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
            return new Uint8Array(data);
          });
        });
      }
      if (isEmptyData(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_256);
      }
      return Promise.resolve().then(function() {
        return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
      }).then(function(data) {
        return Promise.resolve(new Uint8Array(data));
      });
    };
    Sha2564.prototype.reset = function() {
      var _this = this;
      this.toHash = new Uint8Array(0);
      if (this.secret && this.secret !== void 0) {
        this.key = new Promise(function(resolve, reject) {
          locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
        });
        this.key.catch(function() {
        });
      }
    };
    return Sha2564;
  })()
);

// node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
var subtleCryptoMethods = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];
function supportsWebCrypto(window2) {
  if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
    var subtle = window2.crypto.subtle;
    return supportsSubtleCrypto(subtle);
  }
  return false;
}
function supportsSecureRandom(window2) {
  if (typeof window2 === "object" && typeof window2.crypto === "object") {
    var getRandomValues = window2.crypto.getRandomValues;
    return typeof getRandomValues === "function";
  }
  return false;
}
function supportsSubtleCrypto(subtle) {
  return subtle && subtleCryptoMethods.every(function(methodName) {
    return typeof subtle[methodName] === "function";
  });
}

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 = (
  /** @class */
  (function() {
    function Sha2564(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha2562(secret);
      } else {
        this.hash = new Sha256(secret);
      }
    }
    Sha2564.prototype.update = function(data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function() {
      return this.hash.digest();
    };
    Sha2564.prototype.reset = function() {
      this.hash.reset();
    };
    return Sha2564;
  })()
);

// node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
var import_bowser = __toESM(require_es5());
var createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config) => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.1"],
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    ["lang/js"],
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  const appId = await config?.userAgentAppId?.();
  if (appId) {
    sections.push([`app/${appId}`]);
  }
  return sections;
};

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0
};
var FetchHttpHandler = class _FetchHttpHandler {
  config;
  configProvider;
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new _FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
    if (keepAliveSupport.supported === void 0) {
      keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    const credentials = this.config.credentials;
    if (abortSignal?.aborted) {
      const abortError = buildAbortError(abortSignal);
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method,
      credentials
    };
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }
    let removeSignalEventListener = () => {
    };
    const fetchRequest = createRequest(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        const onAbort = () => {
          const abortError = buildAbortError(abortSignal);
          reject(abortError);
        };
        if (typeof abortSignal.addEventListener === "function") {
          const signal = abortSignal;
          signal.addEventListener("abort", onAbort, { once: true });
          removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
        } else {
          abortSignal.onabort = onAbort;
        }
      }));
    }
    return Promise.race(raceOfPromises).finally(removeSignalEventListener);
  }
  updateHttpClientConfig(key, value2) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config) => {
      config[key] = value2;
      return config;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};
function buildAbortError(abortSignal) {
  const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
  if (reason) {
    if (reason instanceof Error) {
      const abortError3 = new Error("Request aborted");
      abortError3.name = "AbortError";
      abortError3.cause = reason;
      return abortError3;
    }
    const abortError2 = new Error(String(reason));
    abortError2.name = "AbortError";
    return abortError2;
  }
  const abortError = new Error("Request aborted");
  abortError.name = "AbortError";
  return abortError;
}

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
var streamCollector = async (stream) => {
  if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
    if (Blob.prototype.arrayBuffer !== void 0) {
      return new Uint8Array(await stream.arrayBuffer());
    }
    return collectBlob(stream);
  }
  return collectStream(stream);
};
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value: value2 } = await reader.read();
    if (value2) {
      chunks.push(value2);
      length += value2.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
var S = "required";
var T = "type";
var U = "fn";
var V = "argv";
var W = "ref";
var X = "properties";
var Y = "headers";
var a = false;
var b = "isSet";
var c = "error";
var d = "endpoint";
var e = "tree";
var f = "PartitionResult";
var g = "stringEquals";
var h = "dynamodb";
var i = "getAttr";
var j = "aws.parseArn";
var k = "ParsedArn";
var l = "isValidHostLabel";
var m = "FirstArn";
var n = { [S]: false, [T]: "String" };
var o = { [S]: true, "default": false, [T]: "Boolean" };
var p = { [U]: "booleanEquals", [V]: [{ [W]: "UseFIPS" }, true] };
var q = { [U]: "booleanEquals", [V]: [{ [W]: "UseDualStack" }, true] };
var r = {};
var s = { [W]: "Region" };
var t = { [U]: "booleanEquals", [V]: [{ [U]: i, [V]: [{ [W]: f }, "supportsFIPS"] }, true] };
var u = { [U]: "booleanEquals", [V]: [{ [U]: i, [V]: [{ [W]: f }, "supportsDualStack"] }, true] };
var v = { "conditions": [{ [U]: b, [V]: [{ [W]: "AccountIdEndpointMode" }] }, { [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "required"] }], "rules": [{ [c]: "Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported", [T]: c }], [T]: e };
var w = { [U]: b, [V]: [{ [W]: "AccountIdEndpointMode" }] };
var x = { [c]: "Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported", [T]: c };
var y = { [U]: i, [V]: [{ [W]: f }, "name"] };
var z = { [d]: { "url": "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", [X]: {}, [Y]: {} }, [T]: d };
var A = { [U]: "not", [V]: [p] };
var B = { [c]: "Invalid Configuration: AccountIdEndpointMode is required and DualStack is enabled, but DualStack account endpoints are not supported", [T]: c };
var C = { [U]: "not", [V]: [{ [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "disabled"] }] };
var D = { [U]: g, [V]: [y, "aws"] };
var E = { [U]: "not", [V]: [q] };
var F = { [U]: g, [V]: [{ [U]: i, [V]: [{ [W]: k }, "service"] }, h] };
var G = { [U]: l, [V]: [{ [U]: i, [V]: [{ [W]: k }, "region"] }, false] };
var H = { [U]: g, [V]: [{ [U]: i, [V]: [{ [W]: k }, "region"] }, "{Region}"] };
var I = { [U]: l, [V]: [{ [U]: i, [V]: [{ [W]: k }, "accountId"] }, false] };
var J = { "url": "https://{ParsedArn#accountId}.ddb.{Region}.{PartitionResult#dnsSuffix}", [X]: {}, [Y]: {} };
var K = { [W]: "ResourceArnList" };
var L = { [W]: "AccountId" };
var M = [p];
var N = [q];
var O = [s];
var P = [w, { [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "required"] }];
var Q = [A];
var R = [{ [W]: "ResourceArn" }];
var _data = { version: "1.0", parameters: { Region: n, UseDualStack: o, UseFIPS: o, Endpoint: n, AccountId: n, AccountIdEndpointMode: n, ResourceArn: n, ResourceArnList: { [S]: a, [T]: "stringArray" } }, rules: [{ conditions: [{ [U]: b, [V]: [{ [W]: "Endpoint" }] }], rules: [{ conditions: M, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [T]: c }, { conditions: N, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [T]: c }, { endpoint: { url: "{Endpoint}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { conditions: [{ [U]: b, [V]: O }], rules: [{ conditions: [{ [U]: "aws.partition", [V]: O, assign: f }], rules: [{ conditions: [{ [U]: g, [V]: [s, "local"] }], rules: [{ conditions: M, error: "Invalid Configuration: FIPS and local endpoint are not supported", [T]: c }, { conditions: N, error: "Invalid Configuration: Dualstack and local endpoint are not supported", [T]: c }, { endpoint: { url: "http://localhost:8000", [X]: { authSchemes: [{ name: "sigv4", signingName: h, signingRegion: "us-east-1" }] }, [Y]: r }, [T]: d }], [T]: e }, { conditions: [p, q], rules: [{ conditions: [t, u], rules: [v, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [T]: c }], [T]: e }, { conditions: M, rules: [{ conditions: [t], rules: [{ conditions: [{ [U]: g, [V]: [y, "aws-us-gov"] }], rules: [v, z], [T]: e }, v, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "FIPS is enabled but this partition does not support FIPS", [T]: c }], [T]: e }, { conditions: N, rules: [{ conditions: [u], rules: [{ conditions: P, rules: [{ conditions: Q, rules: [B], [T]: e }, x], [T]: e }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "DualStack is enabled but this partition does not support DualStack", [T]: c }], [T]: e }, { conditions: [w, C, D, A, E, { [U]: b, [V]: R }, { [U]: j, [V]: R, assign: k }, F, G, H, I], endpoint: J, [T]: d }, { conditions: [w, C, D, A, E, { [U]: b, [V]: [K] }, { [U]: i, [V]: [K, "[0]"], assign: m }, { [U]: j, [V]: [{ [W]: m }], assign: k }, F, G, H, I], endpoint: J, [T]: d }, { conditions: [w, C, D, A, E, { [U]: b, [V]: [L] }], rules: [{ conditions: [{ [U]: l, [V]: [L, a] }], rules: [{ endpoint: { url: "https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "Credentials-sourced account ID parameter is invalid", [T]: c }], [T]: e }, { conditions: P, rules: [{ conditions: Q, rules: [{ conditions: [E], rules: [{ conditions: [D], rules: [{ error: "AccountIdEndpointMode is required but no AccountID was provided or able to be loaded", [T]: c }], [T]: e }, { error: "Invalid Configuration: AccountIdEndpointMode is required but account endpoints are not supported in this partition", [T]: c }], [T]: e }, B], [T]: e }, x], [T]: e }, z], [T]: e }], [T]: e }, { error: "Invalid Configuration: Missing Region", [T]: c }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: [
    "AccountId",
    "AccountIdEndpointMode",
    "Endpoint",
    "Region",
    "ResourceArn",
    "ResourceArnList",
    "UseDualStack",
    "UseFIPS"
  ]
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  }));
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2012-08-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "DynamoDB",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = (config) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    accountIdEndpointMode: config?.accountIdEndpointMode ?? (() => Promise.resolve(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE)),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? (() => Promise.resolve(void 0)),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha2563,
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
};

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
  return {
    setRegion(region) {
      runtimeConfig.region = region;
    },
    region() {
      return runtimeConfig.region;
    }
  };
};
var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
};
var resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
var DynamoDBClient = class extends Client {
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveAccountIdEndpointModeConfig(_config_1);
    const _config_3 = resolveUserAgentConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveEndpointDiscoveryConfig(_config_8, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand
    });
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    this.config = _config_10;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultDynamoDBHttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials
      })
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js
var PutItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "PutItem", {}).n("DynamoDBClient", "PutItemCommand").f(void 0, void 0).ser(se_PutItemCommand).de(de_PutItemCommand).build() {
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js
var QueryCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "Query", {}).n("DynamoDBClient", "QueryCommand").f(void 0, void 0).ser(se_QueryCommand).de(de_QueryCommand).build() {
};

// assets/js/dashboard.js
var message = document.getElementById("dashboard-message");
var list = document.getElementById("content-list");
var currentUser;
var currentIdentityId;
function setMessage(text, type = "") {
  if (!message) {
    return;
  }
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}
function friendlyAwsError(error) {
  const text = error.message ?? "AWS request failed.";
  if (text.includes("not authorized") || text.includes("AccessDenied") || text.includes("AccessDeniedException")) {
    return "AWS permission problem: check the authenticated Cognito role permissions for S3 and DynamoDB.";
  }
  if (text.includes("Requested resource not found") || text.includes("ResourceNotFoundException")) {
    return "DynamoDB table not found. Check that UserMediaUploads exists in us-east-1 with userId and createdAt keys.";
  }
  if (text.includes("Query condition missed key schema element") || text.includes("Missing the key")) {
    return "DynamoDB table key problem: UserMediaUploads must use partition key userId and sort key createdAt. Recreate or fix the table key schema.";
  }
  return text;
}
function value(id) {
  return document.getElementById(id)?.value.trim() ?? "";
}
function setObjectPreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  input?.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file || !preview) {
      return;
    }
    preview.src = URL.createObjectURL(file);
  });
}
function updateTextPreview() {
  document.getElementById("preview-title").textContent = value("media-title") || "Your title will appear here";
  document.getElementById("preview-description").textContent = value("media-description") || "Your description will appear here.";
}
function createDynamoClient(credentials) {
  return new DynamoDBClient({
    region: awsConfig.region,
    credentials
  });
}
function mediaKey(userId, folder, file) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `users/${userId}/${folder}/${Date.now()}-${safeName}`;
}
async function uploadPrivateFile(key, file) {
  const result = await uploadData2({
    path: key,
    data: file,
    options: {
      contentType: file.type
    }
  }).result;
  return result.path;
}
async function signedUrl(path) {
  const result = await getUrl2({
    path,
    options: {
      expiresIn: 1800
    }
  });
  return result.url.toString();
}
async function saveRecord(record) {
  const session = await fetchAuthSession();
  if (!session.credentials) {
    throw new Error("Cognito did not return AWS credentials. Check the Identity Pool provider and authenticated role.");
  }
  const client = createDynamoClient(session.credentials);
  await client.send(new PutItemCommand({
    TableName: awsConfig.dynamodb.tableName,
    Item: {
      userId: { S: record.userId },
      createdAt: { S: record.createdAt },
      name: { S: record.name },
      title: { S: record.title },
      description: { S: record.description },
      picturePath: { S: record.picturePath },
      videoPath: { S: record.videoPath }
    }
  }));
}
async function loadRecords() {
  if (!currentUser || !hasAwsConfig()) {
    return;
  }
  const session = await fetchAuthSession();
  if (!session.credentials) {
    throw new Error("Cognito did not return AWS credentials. Check the Identity Pool provider and authenticated role.");
  }
  const client = createDynamoClient(session.credentials);
  const result = await client.send(new QueryCommand({
    TableName: awsConfig.dynamodb.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": { S: currentUser.userId }
    },
    ScanIndexForward: false
  }));
  const cards = await Promise.all((result.Items ?? []).map(async (item) => {
    const pictureUrl = await signedUrl(item.picturePath.S);
    const videoUrl = await signedUrl(item.videoPath.S);
    return `
      <article class="content-card">
        <img src="${pictureUrl}" alt="${item.title.S} picture">
        <video src="${videoUrl}" controls></video>
        <div>
          <h3>${item.title.S}</h3>
          <p>${item.description.S}</p>
          <time datetime="${item.createdAt.S}">${new Date(item.createdAt.S).toLocaleString()}</time>
        </div>
      </article>
    `;
  }));
  list.innerHTML = cards.length ? cards.join("") : '<p class="form-message">No uploads yet.</p>';
}
async function protectDashboard() {
  if (!hasAwsConfig()) {
    setMessage("Add your AWS values in assets/js/aws-config.js to enable login, upload, and dashboard records.", "error");
    list.innerHTML = '<p class="form-message">AWS configuration is still using placeholders.</p>';
    return;
  }
  try {
    currentUser = await getCurrentUser();
  } catch {
    window.location.href = "login.html";
    return;
  }
  document.getElementById("user-email").textContent = currentUser.signInDetails?.loginId ?? currentUser.username;
  try {
    const session = await fetchAuthSession();
    currentIdentityId = session.identityId;
    await loadRecords();
  } catch (error) {
    setMessage(friendlyAwsError(error), "error");
    list.innerHTML = '<p class="form-message">Dashboard opened, but saved records could not load yet.</p>';
  }
}
document.getElementById("logout-button")?.addEventListener("click", async () => {
  await signOut();
  window.location.href = "login.html";
});
document.getElementById("media-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!hasAwsConfig()) {
    setMessage("Add AWS configuration before saving data.", "error");
    return;
  }
  const picture = document.getElementById("picture-file").files?.[0];
  const video = document.getElementById("video-file").files?.[0];
  if (!picture || !video) {
    setMessage("Choose both a picture and a video.", "error");
    return;
  }
  setMessage("Uploading files to S3...");
  try {
    const storageOwnerId = currentIdentityId ?? currentUser.userId;
    const picturePath = await uploadPrivateFile(mediaKey(storageOwnerId, "pictures", picture), picture);
    const videoPath = await uploadPrivateFile(mediaKey(storageOwnerId, "videos", video), video);
    await saveRecord({
      userId: currentUser.userId,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      name: value("display-name"),
      title: value("media-title"),
      description: value("media-description"),
      picturePath,
      videoPath
    });
    setMessage("Saved to S3 and DynamoDB.", "success");
    await loadRecords();
  } catch (error) {
    setMessage(friendlyAwsError(error), "error");
  }
});
setObjectPreview("picture-file", "image-preview");
setObjectPreview("video-file", "video-preview");
document.getElementById("media-title")?.addEventListener("input", updateTextPreview);
document.getElementById("media-description")?.addEventListener("input", updateTextPreview);
protectDashboard();
/*! Bundled license information:

crc-32/crc32.js:
  (*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com *)
*/

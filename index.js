function e(e){return e&&e.__esModule?e.default:e}var t,r,i,n,a,s,o,l,c,u,h,f,p,d,g,y=globalThis;function m(e,t){return Object.keys(t).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e}function v(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var C={},E={},b=y.parcelRequiredc6b;null==b&&((b=function(e){if(e in C)return C[e].exports;if(e in E){var t=E[e];delete E[e];var r={id:e,exports:{}};return C[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){E[e]=t},y.parcelRequiredc6b=b);var S=b.register;S("hnKIb",function(e,t){/**
 * Node.js module for Forge.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2016 Digital Bazaar, Inc.
 */e.exports={// default options
options:{usePureJavaScript:!1}}}),S("4AFFV",function(e,t){}),S("df6Hw",function(e,t){/**
 * Node.js module for Forge message digests.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2017 Digital Bazaar, Inc.
 */var r=b("hnKIb");e.exports=r.md=r.md||{},r.md.algorithms=r.md.algorithms||{}});var T={};/**
 * Node.js module for Forge.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2016 Digital Bazaar, Inc.
 */T=b("hnKIb");var _=(b("hnKIb"),b("hnKIb")),I=(b("4AFFV"),b("4AFFV")),A=I.Buffer,_=b("hnKIb"),B={},I=b("4AFFV"),N=I.Buffer,w={};B=w;// baseN alphabet indexes
var L={};/**
 * BaseN-encodes a Uint8Array using the given alphabet.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the baseN-encoded output string.
 */w.encode=function(e,t,r){if("string"!=typeof t)throw TypeError('"alphabet" must be a string.');if(void 0!==r&&"number"!=typeof r)throw TypeError('"maxline" must be a number.');var i="";if(e instanceof Uint8Array){var n=0,a=t.length,s=t.charAt(0),o=[0];for(n=0;n<e.length;++n){for(var l=0,c=e[n];l<o.length;++l)c+=o[l]<<8,o[l]=c%a,c=c/a|0;for(;c>0;)o.push(c%a),c=c/a|0}// deal with leading zeros
for(n=0;0===e[n]&&n<e.length-1;++n)i+=s;// convert digits to a string
for(n=o.length-1;n>=0;--n)i+=t[o[n]]}else i=function(e,t){var r=0,i=t.length,n=t.charAt(0),a=[0];for(r=0;r<e.length();++r){for(var s=0,o=e.at(r);s<a.length;++s)o+=a[s]<<8,a[s]=o%i,o=o/i|0;for(;o>0;)a.push(o%i),o=o/i|0}var l="";// deal with leading zeros
for(r=0;0===e.at(r)&&r<e.length()-1;++r)l+=n;// convert digits to a string
for(r=a.length-1;r>=0;--r)l+=t[a[r]];return l}(e,t);if(r){var u=RegExp(".{1,"+r+"}","g");i=i.match(u).join("\r\n")}return i},/**
 * Decodes a baseN-encoded (using the given alphabet) string to a
 * Uint8Array.
 *
 * @param input the baseN-encoded input string.
 *
 * @return the Uint8Array.
 */w.decode=function(e,t){if("string"!=typeof e)throw TypeError('"input" must be a string.');if("string"!=typeof t)throw TypeError('"alphabet" must be a string.');var r=L[t];if(!r){// compute reverse alphabet
r=L[t]=[];for(var i=0;i<t.length;++i)r[t.charCodeAt(i)]=i}// remove whitespace characters
e=e.replace(/\s/g,"");for(var n=t.length,a=t.charAt(0),s=[0],i=0;i<e.length;i++){var o=r[e.charCodeAt(i)];if(void 0===o)return;for(var l=0,c=o;l<s.length;++l)c+=s[l]*n,s[l]=255&c,c>>=8;for(;c>0;)s.push(255&c),c>>=8}// deal with leading zeros
for(var u=0;e[u]===a&&u<e.length-1;++u)s.push(0);return void 0!==N?N.from(s.reverse()):new Uint8Array(s.reverse())};/* Utilities API */var k=_.util=_.util||{};/**
 * Ensure a bits param is 8, 16, 24, or 32. Used to validate input for
 * algorithms where bit manipulation, JavaScript limitations, and/or algorithm
 * design only allow for byte operations of a limited size.
 *
 * @param n number of bits.
 *
 * Throw Error if n invalid.
 */function R(e){if(!(8===e||16===e||24===e||32===e))throw Error("Only 8, 16, 24, or 32 bits supported: "+e)}/** Buffer w/BinaryString backing *//**
 * Constructor for a binary string backed byte buffer.
 *
 * @param [b] the bytes to wrap (either encoded as string, one byte per
 *          character, or as an ArrayBuffer or Typed Array).
 */function D(e){if(// TODO: update to match DataBuffer API
// the data in this buffer
this.data="",// the pointer for reading from this buffer
this.read=0,"string"==typeof e)this.data=e;else if(k.isArrayBuffer(e)||k.isArrayBufferView(e)){if(void 0!==A&&e instanceof A)this.data=e.toString("binary");else{// convert native buffer to forge buffer
// FIXME: support native buffers internally instead
var t=new Uint8Array(e);try{this.data=String.fromCharCode.apply(null,t)}catch(e){for(var r=0;r<t.length;++r)this.putByte(t[r])}}}else(e instanceof D||"object"==typeof e&&"string"==typeof e.data&&"number"==typeof e.read)&&(// copy existing buffer
this.data=e.data,this.read=e.read);// used for v8 optimization
this._constructedStringLength=0}!// define setImmediate and nextTick
function(){// polyfill nextTick with native setImmediate
if(// use native nextTick (unless we're in webpack)
// webpack (or better node-libs-browser polyfill) sets process.browser.
// this way we can detect webpack properly
void 0!==I&&I.nextTick,"function"==typeof setImmediate){k.setImmediate=function(){return setImmediate.apply(void 0,arguments)},k.nextTick=function(e){return setImmediate(e)};return}// upgrade polyfill to use postMessage
if(/* Note: A polyfill upgrade pattern is used here to allow combining
  polyfills. For example, MutationObserver is fast, but blocks UI updates,
  so it needs to allow UI updates periodically, so it falls back on
  postMessage or setTimeout. */// polyfill with setTimeout
k.setImmediate=function(e){setTimeout(e,0)},"undefined"!=typeof window&&"function"==typeof window.postMessage){var e="forge.setImmediate",t=[];k.setImmediate=function(r){t.push(r),1===t.length&&window.postMessage(e,"*")},window.addEventListener("message",function(r){if(r.source===window&&r.data===e){r.stopPropagation();var i=t.slice();t.length=0,i.forEach(function(e){e()})}},!0)}// upgrade polyfill to use MutationObserver
if("undefined"!=typeof MutationObserver){// polyfill with MutationObserver
var r=Date.now(),i=!0,n=document.createElement("div"),t=[];new MutationObserver(function(){var e=t.slice();t.length=0,e.forEach(function(e){e()})}).observe(n,{attributes:!0});var a=k.setImmediate;k.setImmediate=function(e){Date.now()-r>15?(r=Date.now(),a(e)):(t.push(e),1===t.length&&n.setAttribute("a",i=!i))}}k.nextTick=k.setImmediate}(),// check if running under Node.js
k.isNodejs=void 0!==I&&I.versions&&I.versions.node,// 'self' will also work in Web Workers (instance of WorkerGlobalScope) while
// it will point to `window` in the main thread.
// To remain compatible with older browsers, we fall back to 'window' if 'self'
// is not available.
k.globalScope=k.isNodejs?y:"undefined"==typeof self?window:self,// define isArray
k.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},// define isArrayBuffer
k.isArrayBuffer=function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer},// define isArrayBufferView
k.isArrayBufferView=function(e){return e&&k.isArrayBuffer(e.buffer)&&void 0!==e.byteLength},// TODO: set ByteBuffer to best available backing
k.ByteBuffer=D,k.ByteStringBuffer=D,k.ByteStringBuffer.prototype._optimizeConstructedString=function(e){this._constructedStringLength+=e,this._constructedStringLength>4096&&(// this substr() should cause the constructed string to join
this.data.substr(0,1),this._constructedStringLength=0)},/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */k.ByteStringBuffer.prototype.length=function(){return this.data.length-this.read},/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */k.ByteStringBuffer.prototype.isEmpty=function(){return 0>=this.length()},/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putByte=function(e){return this.putBytes(String.fromCharCode(e))},/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.fillWithByte=function(e,t){e=String.fromCharCode(e);for(var r=this.data;t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return this.data=r,this._optimizeConstructedString(t),this},/**
 * Puts bytes in this buffer.
 *
 * @param bytes the bytes (as a binary encoded string) to put.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putBytes=function(e){return this.data+=e,this._optimizeConstructedString(e.length),this},/**
 * Puts a UTF-16 encoded string into this buffer.
 *
 * @param str the string to put.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putString=function(e){return this.putBytes(k.encodeUtf8(e))},/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt16=function(e){return this.putBytes(String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt24=function(e){return this.putBytes(String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt32=function(e){return this.putBytes(String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt16Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255))},/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt24Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255))},/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt32Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>24&255))},/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putInt=function(e,t){R(t);var r="";do t-=8,r+=String.fromCharCode(e>>t&255);while(t>0)return this.putBytes(r)},/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putSignedInt=function(e,t){return e<0&&(e+=2<<t-1),this.putInt(e,t)},/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.putBuffer=function(e){return this.putBytes(e.getBytes())},/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */k.ByteStringBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)},/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */k.ByteStringBuffer.prototype.getInt16=function(){var e=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,e},/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */k.ByteStringBuffer.prototype.getInt24=function(){var e=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,e},/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */k.ByteStringBuffer.prototype.getInt32=function(){var e=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,e},/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */k.ByteStringBuffer.prototype.getInt16Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,e},/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */k.ByteStringBuffer.prototype.getInt24Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,e},/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */k.ByteStringBuffer.prototype.getInt32Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,e},/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by ceil(n/8).
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */k.ByteStringBuffer.prototype.getInt=function(e){R(e);var t=0;do // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
t=(t<<8)+this.data.charCodeAt(this.read++),e-=8;while(e>0)return t},/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */k.ByteStringBuffer.prototype.getSignedInt=function(e){// getInt checks n
var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},/**
 * Reads bytes out as a binary encoded string and clears them from the
 * buffer. Note that the resulting string is binary encoded (in node.js this
 * encoding is referred to as `binary`, it is *not* `utf8`).
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a binary encoded string of bytes.
 */k.ByteStringBuffer.prototype.getBytes=function(e){var t;return e?(// read count bytes
e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(// read all bytes, optimize to only copy when needed
t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},/**
 * Gets a binary encoded string of the bytes from this buffer without
 * modifying the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of binary encoded characters.
 */k.ByteStringBuffer.prototype.bytes=function(e){return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */k.ByteStringBuffer.prototype.at=function(e){return this.data.charCodeAt(this.read+e)},/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.setAt=function(e,t){return this.data=this.data.substr(0,this.read+e)+String.fromCharCode(t)+this.data.substr(this.read+e+1),this},/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */k.ByteStringBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)},/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */k.ByteStringBuffer.prototype.copy=function(){var e=k.createBuffer(this.data);return e.read=this.read,e},/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this},/**
 * Clears this buffer.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.clear=function(){return this.data="",this.read=0,this},/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */k.ByteStringBuffer.prototype.truncate=function(e){var t=Math.max(0,this.length()-e);return this.data=this.data.substr(this.read,t),this.read=0,this},/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */k.ByteStringBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.length;++t){var r=this.data.charCodeAt(t);r<16&&(e+="0"),e+=r.toString(16)}return e},/**
 * Converts this buffer to a UTF-16 string (standard JavaScript string).
 *
 * @return a UTF-16 string.
 */k.ByteStringBuffer.prototype.toString=function(){return k.decodeUtf8(this.bytes())},k.DataBuffer=/** End Buffer w/BinaryString backing *//** Buffer w/UInt8Array backing *//**
 * FIXME: Experimental. Do not use yet.
 *
 * Constructor for an ArrayBuffer-backed byte buffer.
 *
 * The buffer may be constructed from a string, an ArrayBuffer, DataView, or a
 * TypedArray.
 *
 * If a string is given, its encoding should be provided as an option,
 * otherwise it will default to 'binary'. A 'binary' string is encoded such
 * that each character is one byte in length and size.
 *
 * If an ArrayBuffer, DataView, or TypedArray is given, it will be used
 * *directly* without any copying. Note that, if a write to the buffer requires
 * more space, the buffer will allocate a new backing ArrayBuffer to
 * accommodate. The starting read and write offsets for the buffer may be
 * given as options.
 *
 * @param [b] the initial bytes for this buffer.
 * @param options the options to use:
 *          [readOffset] the starting read offset to use (default: 0).
 *          [writeOffset] the starting write offset to use (default: the
 *            length of the first parameter).
 *          [growSize] the minimum amount, in bytes, to grow the buffer by to
 *            accommodate writes (default: 1024).
 *          [encoding] the encoding ('binary', 'utf8', 'utf16', 'hex') for the
 *            first parameter, if it is a string (default: 'binary').
 */function(e,t){// default options
t=t||{},// pointers for read from/write to buffer
this.read=t.readOffset||0,this.growSize=t.growSize||1024;var r=k.isArrayBuffer(e),i=k.isArrayBufferView(e);if(r||i){r?this.data=new DataView(e):// or specify that this must be done in the options ... that the
// offsets are byte-based
this.data=new DataView(e.buffer,e.byteOffset,e.byteLength),this.write="writeOffset"in t?t.writeOffset:this.data.byteLength;return}// initialize to empty array buffer and add any given bytes using putBytes
this.data=new DataView(new ArrayBuffer(0)),this.write=0,null!=e&&this.putBytes(e),"writeOffset"in t&&(this.write=t.writeOffset)},/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */k.DataBuffer.prototype.length=function(){return this.write-this.read},/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */k.DataBuffer.prototype.isEmpty=function(){return 0>=this.length()},/**
 * Ensures this buffer has enough empty space to accommodate the given number
 * of bytes. An optional parameter may be given that indicates a minimum
 * amount to grow the buffer if necessary. If the parameter is not given,
 * the buffer will be grown by some previously-specified default amount
 * or heuristic.
 *
 * @param amount the number of bytes to accommodate.
 * @param [growSize] the minimum amount, in bytes, to grow the buffer by if
 *          necessary.
 */k.DataBuffer.prototype.accommodate=function(e,t){if(this.length()>=e)return this;t=Math.max(t||this.growSize,e);// grow buffer
var r=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),i=new Uint8Array(this.length()+t);return i.set(r),this.data=new DataView(i.buffer),this},/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putByte=function(e){return this.accommodate(1),this.data.setUint8(this.write++,e),this},/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.fillWithByte=function(e,t){this.accommodate(t);for(var r=0;r<t;++r)this.data.setUint8(e);return this},/**
 * Puts bytes in this buffer. The bytes may be given as a string, an
 * ArrayBuffer, a DataView, or a TypedArray.
 *
 * @param bytes the bytes to put.
 * @param [encoding] the encoding for the first parameter ('binary', 'utf8',
 *          'utf16', 'hex'), if it is a string (default: 'binary').
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putBytes=function(e,t){if(k.isArrayBufferView(e)){var r,i=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=i.byteLength-i.byteOffset;this.accommodate(n);var a=new Uint8Array(this.data.buffer,this.write);return a.set(i),this.write+=n,this}if(k.isArrayBuffer(e)){var i=new Uint8Array(e);this.accommodate(i.byteLength);var a=new Uint8Array(this.data.buffer);return a.set(i,this.write),this.write+=i.byteLength,this}// bytes is a util.DataBuffer or equivalent
if(e instanceof k.DataBuffer||"object"==typeof e&&"number"==typeof e.read&&"number"==typeof e.write&&k.isArrayBufferView(e.data)){var i=new Uint8Array(e.data.byteLength,e.read,e.length());this.accommodate(i.byteLength);var a=new Uint8Array(e.data.byteLength,this.write);return a.set(i),this.write+=i.byteLength,this}if(e instanceof k.ByteStringBuffer&&(// copy binary string and process as the same as a string parameter below
e=e.data,t="binary"),// string conversion
t=t||"binary","string"==typeof e){// decode from string
if("hex"===t)return this.accommodate(Math.ceil(e.length/2)),r=new Uint8Array(this.data.buffer,this.write),this.write+=k.binary.hex.decode(e,r,this.write),this;if("base64"===t)return this.accommodate(3*Math.ceil(e.length/4)),r=new Uint8Array(this.data.buffer,this.write),this.write+=k.binary.base64.decode(e,r,this.write),this;// decode string as raw binary
if("utf8"===t&&(// encode as UTF-8 then decode string as raw binary
e=k.encodeUtf8(e),t="binary"),"binary"===t||"raw"===t)return(// one byte per character
this.accommodate(e.length),r=new Uint8Array(this.data.buffer,this.write),this.write+=k.binary.raw.decode(r),this);// encode text as UTF-16 bytes
if("utf16"===t)return(// two bytes per character
this.accommodate(2*e.length),r=new Uint16Array(this.data.buffer,this.write),this.write+=k.text.utf16.encode(r),this);throw Error("Invalid encoding: "+t)}throw Error("Invalid parameter: "+e)},/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putBuffer=function(e){return this.putBytes(e),e.clear(),this},/**
 * Puts a string into this buffer.
 *
 * @param str the string to put.
 * @param [encoding] the encoding for the string (default: 'utf16').
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putString=function(e){return this.putBytes(e,"utf16")},/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt16=function(e){return this.accommodate(2),this.data.setInt16(this.write,e),this.write+=2,this},/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt24=function(e){return this.accommodate(3),this.data.setInt16(this.write,e>>8&65535),this.data.setInt8(this.write,e>>16&255),this.write+=3,this},/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt32=function(e){return this.accommodate(4),this.data.setInt32(this.write,e),this.write+=4,this},/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt16Le=function(e){return this.accommodate(2),this.data.setInt16(this.write,e,!0),this.write+=2,this},/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt24Le=function(e){return this.accommodate(3),this.data.setInt8(this.write,e>>16&255),this.data.setInt16(this.write,e>>8&65535,!0),this.write+=3,this},/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt32Le=function(e){return this.accommodate(4),this.data.setInt32(this.write,e,!0),this.write+=4,this},/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putInt=function(e,t){R(t),this.accommodate(t/8);do t-=8,this.data.setInt8(this.write++,e>>t&255);while(t>0)return this},/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.putSignedInt=function(e,t){return R(t),this.accommodate(t/8),e<0&&(e+=2<<t-1),this.putInt(e,t)},/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */k.DataBuffer.prototype.getByte=function(){return this.data.getInt8(this.read++)},/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */k.DataBuffer.prototype.getInt16=function(){var e=this.data.getInt16(this.read);return this.read+=2,e},/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */k.DataBuffer.prototype.getInt24=function(){var e=this.data.getInt16(this.read)<<8^this.data.getInt8(this.read+2);return this.read+=3,e},/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */k.DataBuffer.prototype.getInt32=function(){var e=this.data.getInt32(this.read);return this.read+=4,e},/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */k.DataBuffer.prototype.getInt16Le=function(){var e=this.data.getInt16(this.read,!0);return this.read+=2,e},/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */k.DataBuffer.prototype.getInt24Le=function(){var e=this.data.getInt8(this.read)^this.data.getInt16(this.read+1,!0)<<8;return this.read+=3,e},/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */k.DataBuffer.prototype.getInt32Le=function(){var e=this.data.getInt32(this.read,!0);return this.read+=4,e},/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */k.DataBuffer.prototype.getInt=function(e){R(e);var t=0;do // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
t=(t<<8)+this.data.getInt8(this.read++),e-=8;while(e>0)return t},/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */k.DataBuffer.prototype.getSignedInt=function(e){// getInt checks n
var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},/**
 * Reads bytes out as a binary encoded string and clears them from the
 * buffer.
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a binary encoded string of bytes.
 */k.DataBuffer.prototype.getBytes=function(e){// TODO: deprecate this method, it is poorly named and
// this.toString('binary') replaces it
// add a toTypedArray()/toArrayBuffer() function
var t;return e?(// read count bytes
e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(// read all bytes, optimize to only copy when needed
t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},/**
 * Gets a binary encoded string of the bytes from this buffer without
 * modifying the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of binary encoded characters.
 */k.DataBuffer.prototype.bytes=function(e){// TODO: deprecate this method, it is poorly named, add "getString()"
return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */k.DataBuffer.prototype.at=function(e){return this.data.getUint8(this.read+e)},/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.setAt=function(e,t){return this.data.setUint8(e,t),this},/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */k.DataBuffer.prototype.last=function(){return this.data.getUint8(this.write-1)},/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */k.DataBuffer.prototype.copy=function(){return new k.DataBuffer(this)},/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.compact=function(){if(this.read>0){var e=new Uint8Array(this.data.buffer,this.read),t=new Uint8Array(e.byteLength);t.set(e),this.data=new DataView(t),this.write-=this.read,this.read=0}return this},/**
 * Clears this buffer.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.clear=function(){return this.data=new DataView(new ArrayBuffer(0)),this.read=this.write=0,this},/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */k.DataBuffer.prototype.truncate=function(e){return this.write=Math.max(0,this.length()-e),this.read=Math.min(this.read,this.write),this},/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */k.DataBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.byteLength;++t){var r=this.data.getUint8(t);r<16&&(e+="0"),e+=r.toString(16)}return e},/**
 * Converts this buffer to a string, using the given encoding. If no
 * encoding is given, 'utf8' (UTF-8) is used.
 *
 * @param [encoding] the encoding to use: 'binary', 'utf8', 'utf16', 'hex',
 *          'base64' (default: 'utf8').
 *
 * @return a string representation of the bytes in this buffer.
 */k.DataBuffer.prototype.toString=function(e){var t=new Uint8Array(this.data,this.read,this.length());// encode to string
if("binary"===(e=e||"utf8")||"raw"===e)return k.binary.raw.encode(t);if("hex"===e)return k.binary.hex.encode(t);if("base64"===e)return k.binary.base64.encode(t);// decode to text
if("utf8"===e)return k.text.utf8.decode(t);if("utf16"===e)return k.text.utf16.decode(t);throw Error("Invalid encoding: "+e)},/** End Buffer w/UInt8Array backing *//**
 * Creates a buffer that stores bytes. A value may be given to populate the
 * buffer with data. This value can either be string of encoded bytes or a
 * regular string of characters. When passing a string of binary encoded
 * bytes, the encoding `raw` should be given. This is also the default. When
 * passing a string of characters, the encoding `utf8` should be given.
 *
 * @param [input] a string with encoded bytes to store in the buffer.
 * @param [encoding] (default: 'raw', other: 'utf8').
 */k.createBuffer=function(e,t){return(// TODO: deprecate, use new ByteBuffer() instead
t=t||"raw",void 0!==e&&"utf8"===t&&(e=k.encodeUtf8(e)),new k.ByteBuffer(e))},/**
 * Fills a string with a particular value. If you want the string to be a byte
 * string, pass in String.fromCharCode(theByte).
 *
 * @param c the character to fill the string with, use String.fromCharCode
 *          to fill the string with a byte value.
 * @param n the number of characters of value c to fill with.
 *
 * @return the filled string.
 */k.fillString=function(e,t){for(var r="";t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return r},/**
 * Performs a per byte XOR between two byte strings and returns the result as a
 * string of bytes.
 *
 * @param s1 first string of bytes.
 * @param s2 second string of bytes.
 * @param n the number of bytes to XOR.
 *
 * @return the XOR'd result.
 */k.xorBytes=function(e,t,r){for(var i="",n="",a="",s=0,o=0;r>0;--r,++s)n=e.charCodeAt(s)^t.charCodeAt(s),o>=10&&(i+=a,a="",o=0),a+=String.fromCharCode(n),++o;return i+a},/**
 * Converts a hex string into a 'binary' encoded string of bytes.
 *
 * @param hex the hexadecimal string to convert.
 *
 * @return the binary-encoded string of bytes.
 */k.hexToBytes=function(e){// TODO: deprecate: "Deprecated. Use util.binary.hex.decode instead."
var t="",r=0;// convert 2 characters (1 byte) at a time
for(!0&e.length&&(// odd number of characters, convert first character alone
r=1,t+=String.fromCharCode(parseInt(e[0],16)));r<e.length;r+=2)t+=String.fromCharCode(parseInt(e.substr(r,2),16));return t},/**
 * Converts a 'binary' encoded string of bytes to hex.
 *
 * @param bytes the byte string to convert.
 *
 * @return the string of hexadecimal characters.
 */k.bytesToHex=function(e){// TODO: deprecate: "Deprecated. Use util.binary.hex.encode instead."
return k.createBuffer(e).toHex()},/**
 * Converts an 32-bit integer to 4-big-endian byte string.
 *
 * @param i the integer.
 *
 * @return the byte string.
 */k.int32ToBytes=function(e){return String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e)};// base64 characters, reverse mapping
var U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",O=[/*43 -43 = 0*//*'+',  1,  2,  3,'/' */62,-1,-1,-1,63,/*'0','1','2','3','4','5','6','7','8','9' */52,53,54,55,56,57,58,59,60,61,/*15, 16, 17,'=', 19, 20, 21 */-1,-1,-1,64,-1,-1,-1,/*65 - 43 = 22*//*'A','B','C','D','E','F','G','H','I','J','K','L','M', */0,1,2,3,4,5,6,7,8,9,10,11,12,/*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */13,14,15,16,17,18,19,20,21,22,23,24,25,/*91 - 43 = 48 *//*48, 49, 50, 51, 52, 53 */-1,-1,-1,-1,-1,-1,/*97 - 43 = 54*//*'a','b','c','d','e','f','g','h','i','j','k','l','m' */26,27,28,29,30,31,32,33,34,35,36,37,38,/*'n','o','p','q','r','s','t','u','v','w','x','y','z' */39,40,41,42,43,44,45,46,47,48,49,50,51],P="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";/**
 * Base64 encodes a 'binary' encoded string of bytes.
 *
 * @param input the binary encoded string of bytes to base64-encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output.
 */k.encode64=function(e,t){for(// TODO: deprecate: "Deprecated. Use util.binary.base64.encode instead."
var r,i,n,a="",s="",o=0;o<e.length;)r=e.charCodeAt(o++),i=e.charCodeAt(o++),n=e.charCodeAt(o++),a+=U.charAt(r>>2)+U.charAt((3&r)<<4|i>>4),isNaN(i)?a+="==":a+=U.charAt((15&i)<<2|n>>6)+(isNaN(n)?"=":U.charAt(63&n)),t&&a.length>t&&(s+=a.substr(0,t)+"\r\n",a=a.substr(t));return s+a},/**
 * Base64 decodes a string into a 'binary' encoded string of bytes.
 *
 * @param input the base64-encoded input.
 *
 * @return the binary encoded string.
 */k.decode64=function(e){// TODO: deprecate: "Deprecated. Use util.binary.base64.decode instead."
// remove all non-base64 characters
e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var t,r,i,n,a="",s=0;s<e.length;)t=O[e.charCodeAt(s++)-43],r=O[e.charCodeAt(s++)-43],i=O[e.charCodeAt(s++)-43],n=O[e.charCodeAt(s++)-43],a+=String.fromCharCode(t<<2|r>>4),64!==i&&(// decoded at least 2 bytes
a+=String.fromCharCode((15&r)<<4|i>>2),64!==n&&(a+=String.fromCharCode((3&i)<<6|n)));return a},/**
 * Encodes the given string of characters (a standard JavaScript
 * string) as a binary encoded string where the bytes represent
 * a UTF-8 encoded string of characters. Non-ASCII characters will be
 * encoded as multiple bytes according to UTF-8.
 *
 * @param str a standard string of characters to encode.
 *
 * @return the binary encoded string.
 */k.encodeUtf8=function(e){return unescape(encodeURIComponent(e))},/**
 * Decodes a binary encoded string that contains bytes that
 * represent a UTF-8 encoded string of characters -- into a
 * string of characters (a standard JavaScript string).
 *
 * @param str the binary encoded string to decode.
 *
 * @return the resulting standard string of characters.
 */k.decodeUtf8=function(e){return decodeURIComponent(escape(e))},// binary encoding/decoding tools
// FIXME: Experimental. Do not use yet.
k.binary={raw:{},hex:{},base64:{},base58:{},baseN:{encode:B.encode,decode:B.decode}},/**
 * Encodes a Uint8Array as a binary-encoded string. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param bytes the Uint8Array to encode.
 *
 * @return the binary-encoded string.
 */k.binary.raw.encode=function(e){return String.fromCharCode.apply(null,e)},/**
 * Decodes a binary-encoded string to a Uint8Array. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param str the binary-encoded string to decode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */k.binary.raw.decode=function(e,t,r){var i=t;i||(i=new Uint8Array(e.length));for(var n=r=r||0,a=0;a<e.length;++a)i[n++]=e.charCodeAt(a);return t?n-r:i},/**
 * Encodes a 'binary' string, ArrayBuffer, DataView, TypedArray, or
 * ByteBuffer as a string of hexadecimal characters.
 *
 * @param bytes the bytes to convert.
 *
 * @return the string of hexadecimal characters.
 */k.binary.hex.encode=k.bytesToHex,/**
 * Decodes a hex-encoded string to a Uint8Array.
 *
 * @param hex the hexadecimal string to convert.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */k.binary.hex.decode=function(e,t,r){var i=t;i||(i=new Uint8Array(Math.ceil(e.length/2)));var n=0,a=r=r||0;// convert 2 characters (1 byte) at a time
for(1&e.length&&(// odd number of characters, convert first character alone
n=1,i[a++]=parseInt(e[0],16));n<e.length;n+=2)i[a++]=parseInt(e.substr(n,2),16);return t?a-r:i},/**
 * Base64-encodes a Uint8Array.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output string.
 */k.binary.base64.encode=function(e,t){for(var r,i,n,a="",s="",o=0;o<e.byteLength;)r=e[o++],i=e[o++],n=e[o++],a+=U.charAt(r>>2)+U.charAt((3&r)<<4|i>>4),isNaN(i)?a+="==":a+=U.charAt((15&i)<<2|n>>6)+(isNaN(n)?"=":U.charAt(63&n)),t&&a.length>t&&(s+=a.substr(0,t)+"\r\n",a=a.substr(t));return s+a},/**
 * Decodes a base64-encoded string to a Uint8Array.
 *
 * @param input the base64-encoded input string.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */k.binary.base64.decode=function(e,t,r){var i,n,a,s,o=t;o||(o=new Uint8Array(3*Math.ceil(e.length/4))),// remove all non-base64 characters
e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var l=0,c=r=r||0;l<e.length;)i=O[e.charCodeAt(l++)-43],n=O[e.charCodeAt(l++)-43],a=O[e.charCodeAt(l++)-43],s=O[e.charCodeAt(l++)-43],o[c++]=i<<2|n>>4,64!==a&&(// decoded at least 2 bytes
o[c++]=(15&n)<<4|a>>2,64!==s&&(o[c++]=(3&a)<<6|s));// make sure result is the exact decoded length
return t?c-r:o.subarray(0,c)},// add support for base58 encoding/decoding with Bitcoin alphabet
k.binary.base58.encode=function(e,t){return k.binary.baseN.encode(e,P,t)},k.binary.base58.decode=function(e,t){return k.binary.baseN.decode(e,P,t)},// text encoding/decoding tools
// FIXME: Experimental. Do not use yet.
k.text={utf8:{},utf16:{}},/**
 * Encodes the given string as UTF-8 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */k.text.utf8.encode=function(e,t,r){e=k.encodeUtf8(e);var i=t;i||(i=new Uint8Array(e.length));for(var n=r=r||0,a=0;a<e.length;++a)i[n++]=e.charCodeAt(a);return t?n-r:i},/**
 * Decodes the UTF-8 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */k.text.utf8.decode=function(e){return k.decodeUtf8(String.fromCharCode.apply(null,e))},/**
 * Encodes the given string as UTF-16 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */k.text.utf16.encode=function(e,t,r){var i=t;i||(i=new Uint8Array(2*e.length));for(var n=new Uint16Array(i.buffer),a=r=r||0,s=r,o=0;o<e.length;++o)n[s++]=e.charCodeAt(o),a+=2;return t?a-r:i},/**
 * Decodes the UTF-16 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */k.text.utf16.decode=function(e){return String.fromCharCode.apply(null,new Uint16Array(e.buffer))},/**
 * Deflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true to return only raw deflate data, false to include zlib
 *          header and trailer.
 *
 * @return the deflated data as a string.
 */k.deflate=function(e,t,r){// strip zlib header and trailer if necessary
if(t=k.decode64(e.deflate(k.encode64(t)).rval),r){// zlib header is 2 bytes (CMF,FLG) where FLG indicates that
// there is a 4-byte DICT (alder-32) block before the data if
// its 5th bit is set
var i=2;32&t.charCodeAt(1)&&(i=6),// zlib trailer is 4 bytes of adler-32
t=t.substring(i,t.length-4)}return t},/**
 * Inflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true if the incoming data has no zlib header or trailer and is
 *          raw DEFLATE data.
 *
 * @return the inflated data as a string, null on error.
 */k.inflate=function(e,t,r){// TODO: add zlib header and trailer if necessary/possible
var i=e.inflate(k.encode64(t)).rval;return null===i?null:k.decode64(i)};/**
 * Sets a storage object.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param obj the storage object, null to remove.
 */var x=function(e,t,r){if(!e)throw Error("WebStorage not available.");// handle potential flash error
if(null===r?i=e.removeItem(t):(// json-encode and base64-encode object
r=k.encode64(JSON.stringify(r)),i=e.setItem(t,r)),void 0!==i&&!0!==i.rval){var i,n=Error(i.error.message);throw n.id=i.error.id,n.name=i.error.name,n}},V=function(e,t){if(!e)throw Error("WebStorage not available.");// get the existing entry
var r=e.getItem(t);/* Note: We check api.init because we can't do (api == localStorage)
    on IE because of "Class doesn't support Automation" exception. Only
    the flash api has an init method so this works too, but we need a
    better solution in the future. */// flash returns item wrapped in an object, handle special case
if(e.init){if(null===r.rval){if(r.error){var i=Error(r.error.message);throw i.id=r.error.id,i.name=r.error.name,i}// no error, but also no item
r=null}else r=r.rval}return null!==r&&(r=JSON.parse(k.decode64(r))),r},K=function(e,t,r,i){// get storage object
var n=V(e,t);null===n&&(n={}),// update key
n[r]=i,// set storage object
x(e,t,n)},M=function(e,t,r){// get storage object
var i=V(e,t);return null!==i&&(i=r in i?i[r]:null),i},F=function(e,t,r){// get storage object
var i=V(e,t);if(null!==i&&r in i){// remove key
delete i[r];// see if entry has no keys remaining
var n=!0;for(var a in i){n=!1;break}n&&(i=null),// set storage object
x(e,t,i)}},j=function(e,t){x(e,t,null)},H=function(e,t,r){var i,n=null;// default storage types
void 0===r&&(r=["web","flash"]);var a=!1,s=null;for(var o in r){i=r[o];try{if("flash"===i||"both"===i){if(null===t[0])throw Error("Flash local storage not available.");n=e.apply(this,t),a="flash"===i}("web"===i||"both"===i)&&(t[0]=localStorage,n=e.apply(this,t),a=!0)}catch(e){s=e}if(a)break}if(!a)throw s;return n};/**
 * Stores an item on local disk.
 *
 * The available types of local storage include 'flash', 'web', and 'both'.
 *
 * The type 'flash' refers to flash local storage (SharedObject). In order
 * to use flash local storage, the 'api' parameter must be valid. The type
 * 'web' refers to WebStorage, if supported by the browser. The type 'both'
 * refers to storing using both 'flash' and 'web', not just one or the
 * other.
 *
 * The location array should list the storage types to use in order of
 * preference:
 *
 * ['flash']: flash only storage
 * ['web']: web only storage
 * ['both']: try to store in both
 * ['flash','web']: store in flash first, but if not available, 'web'
 * ['web','flash']: store in web first, but if not available, 'flash'
 *
 * The location array defaults to: ['web', 'flash']
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param data the data for the item (any javascript object/primitive).
 * @param location an array with the preferred types of storage to use.
 */k.setItem=function(e,t,r,i,n){H(K,arguments,n)},/**
 * Gets an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 *
 * @return the item.
 */k.getItem=function(e,t,r,i){return H(M,arguments,i)},/**
 * Removes an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 */k.removeItem=function(e,t,r,i){H(F,arguments,i)},/**
 * Clears the local disk storage identified by the given ID.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface if flash is available.
 * @param id the storage ID to use.
 * @param location an array with the preferred types of storage to use.
 */k.clearItems=function(e,t,r){H(j,arguments,r)},/**
 * Check if an object is empty.
 *
 * Taken from:
 * http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object-from-json/679937#679937
 *
 * @param object the object to check.
 */k.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},/**
 * Format with simple printf-style interpolation.
 *
 * %%: literal '%'
 * %s,%o: convert next argument into a string.
 *
 * @param format the string to format.
 * @param ... arguments to interpolate into the format string.
 */k.format=function(e){// loop while matches remain
for(var t,r,i=/%./g,n=0,a=[],s=0;t=i.exec(e);){(r=e.substring(s,i.lastIndex-2)).length>0&&a.push(r),s=i.lastIndex;// switch on % code
var o=t[0][1];switch(o){case"s":case"o":// check if enough arguments were given
n<arguments.length?a.push(arguments[n+++1]):a.push("<?>");break;// FIXME: do proper formating for numbers, etc
//case 'f':
//case 'd':
case"%":a.push("%");break;default:a.push("<%"+o+"?>")}}return(// add trailing part of format string
a.push(e.substring(s)),a.join(""))},/**
 * Formats a number.
 *
 * http://snipplr.com/view/5945/javascript-numberformat--ported-from-php/
 */k.formatNumber=function(e,t,r,i){// http://kevin.vanzonneveld.net
// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +     bugfix by: Michael White (http://crestidg.com)
// +     bugfix by: Benjamin Lupton
// +     bugfix by: Allan Jensen (http://www.winternet.no)
// +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// *     example 1: number_format(1234.5678, 2, '.', '');
// *     returns 1: 1234.57
var n=e,a=isNaN(t=Math.abs(t))?2:t,s=void 0===i?".":i,o=n<0?"-":"",l=parseInt(n=Math.abs(+n||0).toFixed(a),10)+"",c=l.length>3?l.length%3:0;return o+(c?l.substr(0,c)+s:"")+l.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+s)+(a?(void 0===r?",":r)+Math.abs(n-l).toFixed(a).slice(2):"")},/**
 * Formats a byte size.
 *
 * http://snipplr.com/view/5949/format-humanize-file-byte-size-presentation-in-javascript/
 */k.formatSize=function(e){return e=e>=1073741824?k.formatNumber(e/1073741824,2,".","")+" GiB":e>=1048576?k.formatNumber(e/1048576,2,".","")+" MiB":e>=1024?k.formatNumber(e/1024,0)+" KiB":k.formatNumber(e,0)+" bytes"},/**
 * Converts an IPv4 or IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv4 or IPv6 address to convert.
 *
 * @return the 4-byte IPv6 or 16-byte IPv6 address or null if the address can't
 *         be parsed.
 */k.bytesFromIP=function(e){return -1!==e.indexOf(".")?k.bytesFromIPv4(e):-1!==e.indexOf(":")?k.bytesFromIPv6(e):null},/**
 * Converts an IPv4 string representation into bytes (in network order).
 *
 * @param ip the IPv4 address to convert.
 *
 * @return the 4-byte address or null if the address can't be parsed.
 */k.bytesFromIPv4=function(e){if(4!==(e=e.split(".")).length)return null;for(var t=k.createBuffer(),r=0;r<e.length;++r){var i=parseInt(e[r],10);if(isNaN(i))return null;t.putByte(i)}return t.getBytes()},/**
 * Converts an IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv6 address to convert.
 *
 * @return the 16-byte address or null if the address can't be parsed.
 */k.bytesFromIPv6=function(e){for(var t=0,r=(8-(e=e.split(":").filter(function(e){return 0===e.length&&++t,!0})).length+t)*2,i=k.createBuffer(),n=0;n<8;++n){if(!e[n]||0===e[n].length){i.fillWithByte(0,r),r=0;continue}var a=k.hexToBytes(e[n]);a.length<2&&i.putByte(0),i.putBytes(a)}return i.getBytes()},/**
 * Converts 4-bytes into an IPv4 string representation or 16-bytes into
 * an IPv6 string representation. The bytes must be in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 or IPv6 string representation if 4 or 16 bytes,
 *         respectively, are given, otherwise null.
 */k.bytesToIP=function(e){return 4===e.length?k.bytesToIPv4(e):16===e.length?k.bytesToIPv6(e):null},/**
 * Converts 4-bytes into an IPv4 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 string representation or null for an invalid # of bytes.
 */k.bytesToIPv4=function(e){if(4!==e.length)return null;for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t.join(".")},/**
 * Converts 16-bytes into an IPv16 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv16 string representation or null for an invalid # of bytes.
 */k.bytesToIPv6=function(e){if(16!==e.length)return null;for(var t=[],r=[],i=0,n=0;n<e.length;n+=2){// canonicalize zero representation
for(var a=k.bytesToHex(e[n]+e[n+1]);"0"===a[0]&&"0"!==a;)a=a.substr(1);if("0"===a){var s=r[r.length-1],o=t.length;s&&o===s.end+1?(s.end=o,s.end-s.start>r[i].end-r[i].start&&(i=r.length-1)):r.push({start:o,end:o})}t.push(a)}if(r.length>0){var l=r[i];// only shorten group of length > 0
l.end-l.start>0&&(t.splice(l.start,l.end-l.start+1,""),0===l.start&&t.unshift(""),7===l.end&&t.push(""))}return t.join(":")},/**
 * Estimates the number of processes that can be run concurrently. If
 * creating Web Workers, keep in mind that the main JavaScript process needs
 * its own core.
 *
 * @param options the options to use:
 *          update true to force an update (not use the cached value).
 * @param callback(err, max) called once the operation completes.
 */k.estimateCores=function(e,t){if("function"==typeof e&&(t=e,e={}),e=e||{},"cores"in k&&!e.update)return t(null,k.cores);if("undefined"!=typeof navigator&&"hardwareConcurrency"in navigator&&navigator.hardwareConcurrency>0)return k.cores=navigator.hardwareConcurrency,t(null,k.cores);if("undefined"==typeof Worker)return(// workers not available
k.cores=1,t(null,k.cores));if("undefined"==typeof Blob)return(// can't estimate, default to 2
k.cores=2,t(null,k.cores));// create worker concurrency estimation code as blob
var r=URL.createObjectURL(new Blob(["(",(function(){self.addEventListener("message",function(e){for(// run worker for 4 ms
var t=Date.now(),r=t+4;Date.now()<r;);self.postMessage({st:t,et:r})})}).toString(),")()"],{type:"application/javascript"}));// take 5 samples using 16 workers
(function e(i,n,a){if(0===n){// get overlap average
var s=Math.floor(i.reduce(function(e,t){return e+t},0)/i.length);return k.cores=Math.max(1,s),URL.revokeObjectURL(r),t(null,k.cores)}(function(e,t){for(var i=[],n=[],a=0;a<e;++a){var s=new Worker(r);s.addEventListener("message",function(r){if(n.push(r.data),n.length===e){for(var a=0;a<e;++a)i[a].terminate();t(null,n)}}),i.push(s)}for(var a=0;a<e;++a)i[a].postMessage(a)})(a,function(t,r){i.push(function(e,t){for(var r=[],i=0;i<e;++i)for(var n=t[i],a=r[i]=[],s=0;s<e;++s)if(i!==s){var o=t[s];(n.st>o.st&&n.st<o.et||o.st>n.st&&o.st<n.et)&&a.push(s)}// get maximum overlaps ... don't include overlapping worker itself
// as the main JS process was also being scheduled during the work and
// would have to be subtracted from the estimate anyway
return r.reduce(function(e,t){return Math.max(e,t.length)},0)}(a,r)),e(i,n-1,a)})})([],5,16)},_.cipher=_.cipher||{},// registered algorithms
_.cipher.algorithms=_.cipher.algorithms||{},/**
 * Creates a cipher object that can be used to encrypt data using the given
 * algorithm and key. The algorithm may be provided as a string value for a
 * previously registered algorithm or it may be given as a cipher algorithm
 * API object.
 *
 * @param algorithm the algorithm to use, either a string or an algorithm API
 *          object.
 * @param key the key to use, as a binary-encoded string of bytes or a
 *          byte buffer.
 *
 * @return the cipher.
 */_.cipher.createCipher=function(e,t){var r=e;if("string"==typeof r&&(r=_.cipher.getAlgorithm(r))&&(r=r()),!r)throw Error("Unsupported algorithm: "+e);// assume block cipher
return new _.cipher.BlockCipher({algorithm:r,key:t,decrypt:!1})},/**
 * Creates a decipher object that can be used to decrypt data using the given
 * algorithm and key. The algorithm may be provided as a string value for a
 * previously registered algorithm or it may be given as a cipher algorithm
 * API object.
 *
 * @param algorithm the algorithm to use, either a string or an algorithm API
 *          object.
 * @param key the key to use, as a binary-encoded string of bytes or a
 *          byte buffer.
 *
 * @return the cipher.
 */_.cipher.createDecipher=function(e,t){var r=e;if("string"==typeof r&&(r=_.cipher.getAlgorithm(r))&&(r=r()),!r)throw Error("Unsupported algorithm: "+e);// assume block cipher
return new _.cipher.BlockCipher({algorithm:r,key:t,decrypt:!0})},/**
 * Registers an algorithm by name. If the name was already registered, the
 * algorithm API object will be overwritten.
 *
 * @param name the name of the algorithm.
 * @param algorithm the algorithm API object.
 */_.cipher.registerAlgorithm=function(e,t){e=e.toUpperCase(),_.cipher.algorithms[e]=t},/**
 * Gets a registered algorithm by name.
 *
 * @param name the name of the algorithm.
 *
 * @return the algorithm, if found, null if not.
 */_.cipher.getAlgorithm=function(e){return(e=e.toUpperCase())in _.cipher.algorithms?_.cipher.algorithms[e]:null};var q=_.cipher.BlockCipher=function(e){this.algorithm=e.algorithm,this.mode=this.algorithm.mode,this.blockSize=this.mode.blockSize,this._finish=!1,this._input=null,this.output=null,this._op=e.decrypt?this.mode.decrypt:this.mode.encrypt,this._decrypt=e.decrypt,this.algorithm.initialize(e)};/**
 * Starts or restarts the encryption or decryption process, whichever
 * was previously configured.
 *
 * For non-GCM mode, the IV may be a binary-encoded string of bytes, an array
 * of bytes, a byte buffer, or an array of 32-bit integers. If the IV is in
 * bytes, then it must be Nb (16) bytes in length. If the IV is given in as
 * 32-bit integers, then it must be 4 integers long.
 *
 * Note: an IV is not required or used in ECB mode.
 *
 * For GCM-mode, the IV must be given as a binary-encoded string of bytes or
 * a byte buffer. The number of bytes should be 12 (96 bits) as recommended
 * by NIST SP-800-38D but another length may be given.
 *
 * @param options the options to use:
 *          iv the initialization vector to use as a binary-encoded string of
 *            bytes, null to reuse the last ciphered block from a previous
 *            update() (this "residue" method is for legacy support only).
 *          additionalData additional authentication data as a binary-encoded
 *            string of bytes, for 'GCM' mode, (default: none).
 *          tagLength desired length of authentication tag, in bits, for
 *            'GCM' mode (0-128, default: 128).
 *          tag the authentication tag to check if decrypting, as a
 *             binary-encoded string of bytes.
 *          output the output the buffer to write to, null to create one.
 */q.prototype.start=function(e){var t={};for(var r in e=e||{})t[r]=e[r];t.decrypt=this._decrypt,this._finish=!1,this._input=_.util.createBuffer(),this.output=e.output||_.util.createBuffer(),this.mode.start(t)},/**
 * Updates the next block according to the cipher mode.
 *
 * @param input the buffer to read from.
 */q.prototype.update=function(e){// do cipher operation until it needs more input and not finished
for(e&&this._input.putBuffer(e);!this._op.call(this.mode,this._input,this.output,this._finish)&&!this._finish;);// free consumed memory from input buffer
this._input.compact()},/**
 * Finishes encrypting or decrypting.
 *
 * @param pad a padding function to use in CBC mode, null for default,
 *          signature(blockSize, buffer, decrypt).
 *
 * @return true if successful, false on error.
 */q.prototype.finish=function(e){e&&("ECB"===this.mode.name||"CBC"===this.mode.name)&&(this.mode.pad=function(t){return e(this.blockSize,t,!1)},this.mode.unpad=function(t){return e(this.blockSize,t,!0)});// build options for padding and afterFinish functions
var t={};return t.decrypt=this._decrypt,// get # of bytes that won't fill a block
t.overflow=this._input.length()%this.blockSize,!!(this._decrypt||!this.mode.pad||this.mode.pad(this._input,t))&&(// do final update
this._finish=!0,this.update(),(!this._decrypt||!this.mode.unpad||!!this.mode.unpad(this.output,t))&&(!this.mode.afterFinish||!!this.mode.afterFinish(this.output,t)))};var _=b("hnKIb");_.cipher=_.cipher||{};// supported cipher modes
var G=_.cipher.modes=_.cipher.modes||{};/** Utility functions */function z(e,t){if("string"==typeof e&&(e=_.util.createBuffer(e)),_.util.isArray(e)&&e.length>4){// convert iv byte array into byte buffer
var r=e;e=_.util.createBuffer();for(var i=0;i<r.length;++i)e.putByte(r[i])}if(e.length()<t)throw Error("Invalid IV length; got "+e.length()+" bytes and expected "+t+" bytes.");if(!_.util.isArray(e)){for(var n=[],a=t/4,i=0;i<a;++i)n.push(e.getInt32());e=n}return e}function Q(e){// increment last 32 bits of block only
e[e.length-1]=e[e.length-1]+1&4294967295}function $(e){// convert 64-bit number to two BE Int32s
return[e/4294967296|0,4294967295&e]}function W(e,t){_.cipher.registerAlgorithm(e,function(){return new _.aes.Algorithm(e,t)})}/** Electronic codebook (ECB) (Don't use this; it's not secure) **/G.ecb=function(e){e=e||{},this.name="ECB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=Array(this._ints),this._outBlock=Array(this._ints)},G.ecb.prototype.start=function(e){},G.ecb.prototype.encrypt=function(e,t,r){// not enough input to encrypt
if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;// get next block
for(var i=0;i<this._ints;++i)this._inBlock[i]=e.getInt32();// encrypt block
this.cipher.encrypt(this._inBlock,this._outBlock);// write output
for(var i=0;i<this._ints;++i)t.putInt32(this._outBlock[i])},G.ecb.prototype.decrypt=function(e,t,r){// not enough input to decrypt
if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;// get next block
for(var i=0;i<this._ints;++i)this._inBlock[i]=e.getInt32();// decrypt block
this.cipher.decrypt(this._inBlock,this._outBlock);// write output
for(var i=0;i<this._ints;++i)t.putInt32(this._outBlock[i])},G.ecb.prototype.pad=function(e,t){// add PKCS#7 padding to block (each pad byte is the
// value of the number of pad bytes)
var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},G.ecb.prototype.unpad=function(e,t){// check for error: input data not a multiple of blockSize
if(t.overflow>0)return!1;// ensure padding byte count is valid
var r=e.length(),i=e.at(r-1);return!(i>this.blockSize<<2)&&(// trim off padding bytes
e.truncate(i),!0)},/** Cipher-block Chaining (CBC) **/G.cbc=function(e){e=e||{},this.name="CBC",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=Array(this._ints),this._outBlock=Array(this._ints)},G.cbc.prototype.start=function(e){// Note: legacy support for using IV residue (has security flaws)
// if IV is null, reuse block from previous processing
if(null===e.iv){// must have a previous block
if(!this._prev)throw Error("Invalid IV parameter.");this._iv=this._prev.slice(0)}else if("iv"in e)// save IV as "previous" block
this._iv=z(e.iv,this.blockSize),this._prev=this._iv.slice(0);else throw Error("Invalid IV parameter.")},G.cbc.prototype.encrypt=function(e,t,r){// not enough input to encrypt
if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;// get next block
// CBC XOR's IV (or previous block) with plaintext
for(var i=0;i<this._ints;++i)this._inBlock[i]=this._prev[i]^e.getInt32();// encrypt block
this.cipher.encrypt(this._inBlock,this._outBlock);// write output, save previous block
for(var i=0;i<this._ints;++i)t.putInt32(this._outBlock[i]);this._prev=this._outBlock},G.cbc.prototype.decrypt=function(e,t,r){// not enough input to decrypt
if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;// get next block
for(var i=0;i<this._ints;++i)this._inBlock[i]=e.getInt32();// decrypt block
this.cipher.decrypt(this._inBlock,this._outBlock);// write output, save previous ciphered block
// CBC XOR's IV (or previous block) with ciphertext
for(var i=0;i<this._ints;++i)t.putInt32(this._prev[i]^this._outBlock[i]);this._prev=this._inBlock.slice(0)},G.cbc.prototype.pad=function(e,t){// add PKCS#7 padding to block (each pad byte is the
// value of the number of pad bytes)
var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},G.cbc.prototype.unpad=function(e,t){// check for error: input data not a multiple of blockSize
if(t.overflow>0)return!1;// ensure padding byte count is valid
var r=e.length(),i=e.at(r-1);return!(i>this.blockSize<<2)&&(// trim off padding bytes
e.truncate(i),!0)},/** Cipher feedback (CFB) **/G.cfb=function(e){e=e||{},this.name="CFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=Array(this._ints),this._partialBlock=Array(this._ints),this._partialOutput=_.util.createBuffer(),this._partialBytes=0},G.cfb.prototype.start=function(e){if(!("iv"in e))throw Error("Invalid IV parameter.");// use IV as first input
this._iv=z(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},G.cfb.prototype.encrypt=function(e,t,r){// not enough input to encrypt
var i=e.length();if(0===i)return!0;// handle full block
if(// encrypt block
this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&i>=this.blockSize){// XOR input with output, write input as output
for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32()^this._outBlock[n],t.putInt32(this._inBlock[n]);return}// handle partial block
var a=(this.blockSize-i)%this.blockSize;a>0&&(a=this.blockSize-a),// XOR input with output, write input as partial output
this._partialOutput.clear();for(var n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32()^this._outBlock[n],this._partialOutput.putInt32(this._partialBlock[n]);if(a>0)e.read-=this.blockSize;else for(var n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0},G.cfb.prototype.decrypt=function(e,t,r){// not enough input to decrypt
var i=e.length();if(0===i)return!0;// handle full block
if(// encrypt block (CFB always uses encryption mode)
this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&i>=this.blockSize){// XOR input with output, write input as output
for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32(),t.putInt32(this._inBlock[n]^this._outBlock[n]);return}// handle partial block
var a=(this.blockSize-i)%this.blockSize;a>0&&(a=this.blockSize-a),// XOR input with output, write input as partial output
this._partialOutput.clear();for(var n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32(),this._partialOutput.putInt32(this._partialBlock[n]^this._outBlock[n]);if(a>0)e.read-=this.blockSize;else for(var n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0},/** Output feedback (OFB) **/G.ofb=function(e){e=e||{},this.name="OFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=Array(this._ints),this._partialOutput=_.util.createBuffer(),this._partialBytes=0},G.ofb.prototype.start=function(e){if(!("iv"in e))throw Error("Invalid IV parameter.");// use IV as first input
this._iv=z(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},G.ofb.prototype.encrypt=function(e,t,r){// not enough input to encrypt
var i=e.length();if(0===e.length())return!0;// handle full block
if(// encrypt block (OFB always uses encryption mode)
this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&i>=this.blockSize){// XOR input with output and update next input
for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]),this._inBlock[n]=this._outBlock[n];return}// handle partial block
var a=(this.blockSize-i)%this.blockSize;a>0&&(a=this.blockSize-a),// XOR input with output
this._partialOutput.clear();for(var n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(a>0)e.read-=this.blockSize;else for(var n=0;n<this._ints;++n)this._inBlock[n]=this._outBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0},G.ofb.prototype.decrypt=G.ofb.prototype.encrypt,/** Counter (CTR) **/G.ctr=function(e){e=e||{},this.name="CTR",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=Array(this._ints),this._partialOutput=_.util.createBuffer(),this._partialBytes=0},G.ctr.prototype.start=function(e){if(!("iv"in e))throw Error("Invalid IV parameter.");// use IV as first input
this._iv=z(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},G.ctr.prototype.encrypt=function(e,t,r){// not enough input to encrypt
var i=e.length();if(0===i)return!0;// handle full block
if(// encrypt block (CTR always uses encryption mode)
this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&i>=this.blockSize)for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]);else{// handle partial block
var a=(this.blockSize-i)%this.blockSize;a>0&&(a=this.blockSize-a),// XOR input with output
this._partialOutput.clear();for(var n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(a>0&&(e.read-=this.blockSize),this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0}// block complete, increment counter (input block)
Q(this._inBlock)},G.ctr.prototype.decrypt=G.ctr.prototype.encrypt,/** Galois/Counter Mode (GCM) **/G.gcm=function(e){e=e||{},this.name="GCM",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=Array(this._ints),this._outBlock=Array(this._ints),this._partialOutput=_.util.createBuffer(),this._partialBytes=0,// R is actually this value concatenated with 120 more zero bits, but
// we only XOR against R so the other zeros have no effect -- we just
// apply this value to the first integer in a block
this._R=3774873600},G.gcm.prototype.start=function(e){if(!("iv"in e))throw Error("Invalid IV parameter.");// ensure IV is a byte buffer
var t,r=_.util.createBuffer(e.iv);if(// no ciphered data processed yet
this._cipherLength=0,t="additionalData"in e?_.util.createBuffer(e.additionalData):_.util.createBuffer(),"tagLength"in e?this._tagLength=e.tagLength:this._tagLength=128,// if tag is given, ensure tag matches tag length
this._tag=null,e.decrypt&&(// save tag to check later
this._tag=_.util.createBuffer(e.tag).getBytes(),this._tag.length!==this._tagLength/8))throw Error("Authentication tag does not match tag length.");// create tmp storage for hash calculation
this._hashBlock=Array(this._ints),// no tag generated yet
this.tag=null,// generate hash subkey
// (apply block cipher to "zero" block)
this._hashSubkey=Array(this._ints),this.cipher.encrypt([0,0,0,0],this._hashSubkey),// generate table M
// use 4-bit tables (32 component decomposition of a 16 byte value)
// 8-bit tables take more space and are known to have security
// vulnerabilities (in native implementations)
this.componentBits=4,this._m=this.generateHashTable(this._hashSubkey,this.componentBits);// Note: support IV length different from 96 bits? (only supporting
// 96 bits is recommended by NIST SP-800-38D)
// generate J_0
var i=r.length();if(12===i)this._j0=[r.getInt32(),r.getInt32(),r.getInt32(),1];else{for(// IV is NOT 96-bits
this._j0=[0,0,0,0];r.length()>0;)this._j0=this.ghash(this._hashSubkey,this._j0,[r.getInt32(),r.getInt32(),r.getInt32(),r.getInt32()]);this._j0=this.ghash(this._hashSubkey,this._j0,[0,0].concat($(8*i)))}// generate ICB (initial counter block)
this._inBlock=this._j0.slice(0),Q(this._inBlock),this._partialBytes=0,// consume authentication data
t=_.util.createBuffer(t),// save additional data length as a BE 64-bit number
this._aDataLength=$(8*t.length());// pad additional data to 128 bit (16 byte) block size
var n=t.length()%this.blockSize;for(n&&t.fillWithByte(0,this.blockSize-n),this._s=[0,0,0,0];t.length()>0;)this._s=this.ghash(this._hashSubkey,this._s,[t.getInt32(),t.getInt32(),t.getInt32(),t.getInt32()])},G.gcm.prototype.encrypt=function(e,t,r){// not enough input to encrypt
var i=e.length();if(0===i)return!0;// handle full block
if(// encrypt block
this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&i>=this.blockSize){// XOR input with output
for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^=e.getInt32());this._cipherLength+=this.blockSize}else{// handle partial block
var a=(this.blockSize-i)%this.blockSize;a>0&&(a=this.blockSize-a),// XOR input with output
this._partialOutput.clear();for(var n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(a<=0||r){// handle overflow prior to hashing
if(r){// get block overflow
var s=i%this.blockSize;this._cipherLength+=s,// truncate for hash function
this._partialOutput.truncate(this.blockSize-s)}else this._cipherLength+=this.blockSize;// get output block for hashing
for(var n=0;n<this._ints;++n)this._outBlock[n]=this._partialOutput.getInt32();this._partialOutput.read-=this.blockSize}if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return(// block still incomplete, restore input buffer, get partial output,
// and return early
e.read-=this.blockSize,t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0);t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0}// update hash block S
this._s=this.ghash(this._hashSubkey,this._s,this._outBlock),// increment counter (input block)
Q(this._inBlock)},G.gcm.prototype.decrypt=function(e,t,r){// not enough input to decrypt
var i=e.length();if(i<this.blockSize&&!(r&&i>0))return!0;// encrypt block (GCM always uses encryption mode)
this.cipher.encrypt(this._inBlock,this._outBlock),// increment counter (input block)
Q(this._inBlock),// update hash block S
this._hashBlock[0]=e.getInt32(),this._hashBlock[1]=e.getInt32(),this._hashBlock[2]=e.getInt32(),this._hashBlock[3]=e.getInt32(),this._s=this.ghash(this._hashSubkey,this._s,this._hashBlock);// XOR hash input with output
for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^this._hashBlock[n]);i<this.blockSize?this._cipherLength+=i%this.blockSize:this._cipherLength+=this.blockSize},G.gcm.prototype.afterFinish=function(e,t){var r=!0;t.decrypt&&t.overflow&&e.truncate(this.blockSize-t.overflow),// handle authentication tag
this.tag=_.util.createBuffer();// concatenate additional data length with cipher length
var i=this._aDataLength.concat($(8*this._cipherLength));// include lengths in hash
this._s=this.ghash(this._hashSubkey,this._s,i);// do GCTR(J_0, S)
var n=[];this.cipher.encrypt(this._j0,n);for(var a=0;a<this._ints;++a)this.tag.putInt32(this._s[a]^n[a]);return(// trim tag to length
this.tag.truncate(this.tag.length()%(this._tagLength/8)),t.decrypt&&this.tag.bytes()!==this._tag&&(r=!1),r)},/**
 * See NIST SP-800-38D 6.3 (Algorithm 1). This function performs Galois
 * field multiplication. The field, GF(2^128), is defined by the polynomial:
 *
 * x^128 + x^7 + x^2 + x + 1
 *
 * Which is represented in little-endian binary form as: 11100001 (0xe1). When
 * the value of a coefficient is 1, a bit is set. The value R, is the
 * concatenation of this value and 120 zero bits, yielding a 128-bit value
 * which matches the block size.
 *
 * This function will multiply two elements (vectors of bytes), X and Y, in
 * the field GF(2^128). The result is initialized to zero. For each bit of
 * X (out of 128), x_i, if x_i is set, then the result is multiplied (XOR'd)
 * by the current value of Y. For each bit, the value of Y will be raised by
 * a power of x (multiplied by the polynomial x). This can be achieved by
 * shifting Y once to the right. If the current value of Y, prior to being
 * multiplied by x, has 0 as its LSB, then it is a 127th degree polynomial.
 * Otherwise, we must divide by R after shifting to find the remainder.
 *
 * @param x the first block to multiply by the second.
 * @param y the second block to multiply by the first.
 *
 * @return the block result of the multiplication.
 */G.gcm.prototype.multiply=function(e,t){// calculate Z_128 (block has 128 bits)
for(var r=[0,0,0,0],i=t.slice(0),n=0;n<128;++n)e[n/32|0]&1<<31-n%32&&(r[0]^=i[0],r[1]^=i[1],r[2]^=i[2],r[3]^=i[3]),// if LSB(V_i) is 1, V_i = V_i >> 1
// else V_i = (V_i >> 1) ^ R
this.pow(i,i);return r},G.gcm.prototype.pow=function(e,t){// always do x >>> 1:
// starting with the rightmost integer, shift each integer to the right
// one bit, pulling in the bit from the integer to the left as its top
// most bit (do this for the last 3 integers)
for(var r=1&e[3],i=3;i>0;--i)t[i]=e[i]>>>1|(1&e[i-1])<<31;// shift the first integer normally
t[0]=e[0]>>>1,r&&(t[0]^=this._R)},G.gcm.prototype.tableMultiply=function(e){for(var t=[0,0,0,0],r=0;r<32;++r){var i=e[r/8|0]>>>(7-r%8)*4&15,n=this._m[r][i];t[0]^=n[0],t[1]^=n[1],t[2]^=n[2],t[3]^=n[3]}return t},/**
 * A continuing version of the GHASH algorithm that operates on a single
 * block. The hash block, last hash value (Ym) and the new block to hash
 * are given.
 *
 * @param h the hash block.
 * @param y the previous value for Ym, use [0, 0, 0, 0] for a new hash.
 * @param x the block to hash.
 *
 * @return the hashed value (Ym).
 */G.gcm.prototype.ghash=function(e,t,r){return t[0]^=r[0],t[1]^=r[1],t[2]^=r[2],t[3]^=r[3],this.tableMultiply(t);//return this.multiply(y, h);
},/**
 * Precomputes a table for multiplying against the hash subkey. This
 * mechanism provides a substantial speed increase over multiplication
 * performed without a table. The table-based multiplication this table is
 * for solves X * H by multiplying each component of X by H and then
 * composing the results together using XOR.
 *
 * This function can be used to generate tables with different bit sizes
 * for the components, however, this implementation assumes there are
 * 32 components of X (which is a 16 byte vector), therefore each component
 * takes 4-bits (so the table is constructed with bits=4).
 *
 * @param h the hash subkey.
 * @param bits the bit size for a component.
 */G.gcm.prototype.generateHashTable=function(e,t){for(var r=8/t,i=4*r,n=16*r,a=Array(n),s=0;s<n;++s){var o=[0,0,0,0],l=s/i|0,c=(i-1-s%i)*t;o[l]=1<<t-1<<c,a[s]=this.generateSubHashTable(this.multiply(o,e),t)}return a},/**
 * Generates a table for multiplying against the hash subkey for one
 * particular component (out of all possible component values).
 *
 * @param mid the pre-multiplied value for the middle key of the table.
 * @param bits the bit size for a component.
 */G.gcm.prototype.generateSubHashTable=function(e,t){// compute the table quickly by minimizing the number of
// POW operations -- they only need to be performed for powers of 2,
// all other entries can be composed from those powers using XOR
var r=1<<t,i=r>>>1,n=Array(r);n[i]=e.slice(0);for(var a=i>>>1;a>0;)// raise m0[2 * i] and store in m0[i]
this.pow(n[2*a],n[a]=[]),a>>=1;for(a=2;a<i;){for(var s=1;s<a;++s){var o=n[a],l=n[s];n[a+s]=[o[0]^l[0],o[1]^l[1],o[2]^l[2],o[3]^l[3]]}a*=2}/* Note: We could avoid storing these by doing composition during multiply
  calculate top half using composition by speed is preferred. */for(n[0]=[0,0,0,0],a=i+1;a<r;++a){var c=n[a^i];n[a]=[e[0]^c[0],e[1]^c[1],e[2]^c[2],e[3]^c[3]]}return n},_.aes=_.aes||{},/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('AES-<mode>', key);
 * cipher.start({iv: iv});
 *
 * Creates an AES cipher object to encrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as a string of bytes, an array of bytes,
 * a byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.aes.startEncrypting=function(e,t,r,i){var n=ee({key:e,output:r,decrypt:!1,mode:i});return n.start(t),n},/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('AES-<mode>', key);
 *
 * Creates an AES cipher object to encrypt data using the given symmetric key.
 *
 * The key may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.aes.createEncryptionCipher=function(e,t){return ee({key:e,output:null,decrypt:!1,mode:t})},/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('AES-<mode>', key);
 * decipher.start({iv: iv});
 *
 * Creates an AES cipher object to decrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as a string of bytes, an array of bytes,
 * a byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.aes.startDecrypting=function(e,t,r,i){var n=ee({key:e,output:r,decrypt:!0,mode:i});return n.start(t),n},/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('AES-<mode>', key);
 *
 * Creates an AES cipher object to decrypt data using the given symmetric key.
 *
 * The key may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.aes.createDecryptionCipher=function(e,t){return ee({key:e,output:null,decrypt:!0,mode:t})},/**
 * Creates a new AES cipher algorithm object.
 *
 * @param name the name of the algorithm.
 * @param mode the mode factory function.
 *
 * @return the AES algorithm object.
 */_.aes.Algorithm=function(e,t){Y||X();var r=this;r.name=e,r.mode=new t({blockSize:16,cipher:{encrypt:function(e,t){return J(r._w,e,t,!1)},decrypt:function(e,t){return J(r._w,e,t,!0)}}}),r._init=!1},/**
 * Initializes this AES algorithm by expanding its key.
 *
 * @param options the options to use.
 *          key the key to use with this algorithm.
 *          decrypt true if the algorithm should be initialized for decryption,
 *            false for encryption.
 */_.aes.Algorithm.prototype.initialize=function(e){if(!this._init){var t,r=e.key;/* Note: The key may be a string of bytes, an array of bytes, a byte
    buffer, or an array of 32-bit integers. If the key is in bytes, then
    it must be 16, 24, or 32 bytes in length. If it is in 32-bit
    integers, it must be 4, 6, or 8 integers long. */if("string"==typeof r&&(16===r.length||24===r.length||32===r.length))r=_.util.createBuffer(r);else if(_.util.isArray(r)&&(16===r.length||24===r.length||32===r.length)){// convert key integer array into byte buffer
t=r,r=_.util.createBuffer();for(var i=0;i<t.length;++i)r.putByte(t[i])}// convert key byte buffer into 32-bit integer array
if(!_.util.isArray(r)){t=r,r=[];// key lengths of 16, 24, 32 bytes allowed
var n=t.length();if(16===n||24===n||32===n){n>>>=2;for(var i=0;i<n;++i)r.push(t.getInt32())}}// key must be an array of 32-bit integers by now
if(!_.util.isArray(r)||!(4===r.length||6===r.length||8===r.length))throw Error("Invalid key parameter.");var a=-1!==["CFB","OFB","CTR","GCM"].indexOf(this.mode.name);// do key expansion
this._w=Z(r,e.decrypt&&!a),this._init=!0}},/**
 * Expands a key. Typically only used for testing.
 *
 * @param key the symmetric key to expand, as an array of 32-bit words.
 * @param decrypt true to expand for decryption, false for encryption.
 *
 * @return the expanded key.
 */_.aes._expandKey=function(e,t){return Y||X(),Z(e,t)},/**
 * Updates a single block. Typically only used for testing.
 *
 * @param w the expanded key to use.
 * @param input an array of block-size 32-bit words.
 * @param output an array of block-size 32-bit words.
 * @param decrypt true to decrypt, false to encrypt.
 */_.aes._updateBlock=J,/** Register AES algorithms **/W("AES-ECB",_.cipher.modes.ecb),W("AES-CBC",_.cipher.modes.cbc),W("AES-CFB",_.cipher.modes.cfb),W("AES-OFB",_.cipher.modes.ofb),W("AES-CTR",_.cipher.modes.ctr),W("AES-GCM",_.cipher.modes.gcm);/** AES implementation **/var Y=!1;// not yet initialized
/**
 * Performs initialization, ie: precomputes tables to optimize for speed.
 *
 * One way to understand how AES works is to imagine that 'addition' and
 * 'multiplication' are interfaces that require certain mathematical
 * properties to hold true (ie: they are associative) but they might have
 * different implementations and produce different kinds of results ...
 * provided that their mathematical properties remain true. AES defines
 * its own methods of addition and multiplication but keeps some important
 * properties the same, ie: associativity and distributivity. The
 * explanation below tries to shed some light on how AES defines addition
 * and multiplication of bytes and 32-bit words in order to perform its
 * encryption and decryption algorithms.
 *
 * The basics:
 *
 * The AES algorithm views bytes as binary representations of polynomials
 * that have either 1 or 0 as the coefficients. It defines the addition
 * or subtraction of two bytes as the XOR operation. It also defines the
 * multiplication of two bytes as a finite field referred to as GF(2^8)
 * (Note: 'GF' means "Galois Field" which is a field that contains a finite
 * number of elements so GF(2^8) has 256 elements).
 *
 * This means that any two bytes can be represented as binary polynomials;
 * when they multiplied together and modularly reduced by an irreducible
 * polynomial of the 8th degree, the results are the field GF(2^8). The
 * specific irreducible polynomial that AES uses in hexadecimal is 0x11b.
 * This multiplication is associative with 0x01 as the identity:
 *
 * (b * 0x01 = GF(b, 0x01) = b).
 *
 * The operation GF(b, 0x02) can be performed at the byte level by left
 * shifting b once and then XOR'ing it (to perform the modular reduction)
 * with 0x11b if b is >= 128. Repeated application of the multiplication
 * of 0x02 can be used to implement the multiplication of any two bytes.
 *
 * For instance, multiplying 0x57 and 0x13, denoted as GF(0x57, 0x13), can
 * be performed by factoring 0x13 into 0x01, 0x02, and 0x10. Then these
 * factors can each be multiplied by 0x57 and then added together. To do
 * the multiplication, values for 0x57 multiplied by each of these 3 factors
 * can be precomputed and stored in a table. To add them, the values from
 * the table are XOR'd together.
 *
 * AES also defines addition and multiplication of words, that is 4-byte
 * numbers represented as polynomials of 3 degrees where the coefficients
 * are the values of the bytes.
 *
 * The word [a0, a1, a2, a3] is a polynomial a3x^3 + a2x^2 + a1x + a0.
 *
 * Addition is performed by XOR'ing like powers of x. Multiplication
 * is performed in two steps, the first is an algebriac expansion as
 * you would do normally (where addition is XOR). But the result is
 * a polynomial larger than 3 degrees and thus it cannot fit in a word. So
 * next the result is modularly reduced by an AES-specific polynomial of
 * degree 4 which will always produce a polynomial of less than 4 degrees
 * such that it will fit in a word. In AES, this polynomial is x^4 + 1.
 *
 * The modular product of two polynomials 'a' and 'b' is thus:
 *
 * d(x) = d3x^3 + d2x^2 + d1x + d0
 * with
 * d0 = GF(a0, b0) ^ GF(a3, b1) ^ GF(a2, b2) ^ GF(a1, b3)
 * d1 = GF(a1, b0) ^ GF(a0, b1) ^ GF(a3, b2) ^ GF(a2, b3)
 * d2 = GF(a2, b0) ^ GF(a1, b1) ^ GF(a0, b2) ^ GF(a3, b3)
 * d3 = GF(a3, b0) ^ GF(a2, b1) ^ GF(a1, b2) ^ GF(a0, b3)
 *
 * As a matrix:
 *
 * [d0] = [a0 a3 a2 a1][b0]
 * [d1]   [a1 a0 a3 a2][b1]
 * [d2]   [a2 a1 a0 a3][b2]
 * [d3]   [a3 a2 a1 a0][b3]
 *
 * Special polynomials defined by AES (0x02 == {02}):
 * a(x)    = {03}x^3 + {01}x^2 + {01}x + {02}
 * a^-1(x) = {0b}x^3 + {0d}x^2 + {09}x + {0e}.
 *
 * These polynomials are used in the MixColumns() and InverseMixColumns()
 * operations, respectively, to cause each element in the state to affect
 * the output (referred to as diffusing).
 *
 * RotWord() uses: a0 = a1 = a2 = {00} and a3 = {01}, which is the
 * polynomial x3.
 *
 * The ShiftRows() method modifies the last 3 rows in the state (where
 * the state is 4 words with 4 bytes per word) by shifting bytes cyclically.
 * The 1st byte in the second row is moved to the end of the row. The 1st
 * and 2nd bytes in the third row are moved to the end of the row. The 1st,
 * 2nd, and 3rd bytes are moved in the fourth row.
 *
 * More details on how AES arithmetic works:
 *
 * In the polynomial representation of binary numbers, XOR performs addition
 * and subtraction and multiplication in GF(2^8) denoted as GF(a, b)
 * corresponds with the multiplication of polynomials modulo an irreducible
 * polynomial of degree 8. In other words, for AES, GF(a, b) will multiply
 * polynomial 'a' with polynomial 'b' and then do a modular reduction by
 * an AES-specific irreducible polynomial of degree 8.
 *
 * A polynomial is irreducible if its only divisors are one and itself. For
 * the AES algorithm, this irreducible polynomial is:
 *
 * m(x) = x^8 + x^4 + x^3 + x + 1,
 *
 * or {01}{1b} in hexadecimal notation, where each coefficient is a bit:
 * 100011011 = 283 = 0x11b.
 *
 * For example, GF(0x57, 0x83) = 0xc1 because
 *
 * 0x57 = 87  = 01010111 = x^6 + x^4 + x^2 + x + 1
 * 0x85 = 131 = 10000101 = x^7 + x + 1
 *
 * (x^6 + x^4 + x^2 + x + 1) * (x^7 + x + 1)
 * =  x^13 + x^11 + x^9 + x^8 + x^7 +
 *    x^7 + x^5 + x^3 + x^2 + x +
 *    x^6 + x^4 + x^2 + x + 1
 * =  x^13 + x^11 + x^9 + x^8 + x^6 + x^5 + x^4 + x^3 + 1 = y
 *    y modulo (x^8 + x^4 + x^3 + x + 1)
 * =  x^7 + x^6 + 1.
 *
 * The modular reduction by m(x) guarantees the result will be a binary
 * polynomial of less than degree 8, so that it can fit in a byte.
 *
 * The operation to multiply a binary polynomial b with x (the polynomial
 * x in binary representation is 00000010) is:
 *
 * b_7x^8 + b_6x^7 + b_5x^6 + b_4x^5 + b_3x^4 + b_2x^3 + b_1x^2 + b_0x^1
 *
 * To get GF(b, x) we must reduce that by m(x). If b_7 is 0 (that is the
 * most significant bit is 0 in b) then the result is already reduced. If
 * it is 1, then we can reduce it by subtracting m(x) via an XOR.
 *
 * It follows that multiplication by x (00000010 or 0x02) can be implemented
 * by performing a left shift followed by a conditional bitwise XOR with
 * 0x1b. This operation on bytes is denoted by xtime(). Multiplication by
 * higher powers of x can be implemented by repeated application of xtime().
 *
 * By adding intermediate results, multiplication by any constant can be
 * implemented. For instance:
 *
 * GF(0x57, 0x13) = 0xfe because:
 *
 * xtime(b) = (b & 128) ? (b << 1 ^ 0x11b) : (b << 1)
 *
 * Note: We XOR with 0x11b instead of 0x1b because in javascript our
 * datatype for b can be larger than 1 byte, so a left shift will not
 * automatically eliminate bits that overflow a byte ... by XOR'ing the
 * overflow bit with 1 (the extra one from 0x11b) we zero it out.
 *
 * GF(0x57, 0x02) = xtime(0x57) = 0xae
 * GF(0x57, 0x04) = xtime(0xae) = 0x47
 * GF(0x57, 0x08) = xtime(0x47) = 0x8e
 * GF(0x57, 0x10) = xtime(0x8e) = 0x07
 *
 * GF(0x57, 0x13) = GF(0x57, (0x01 ^ 0x02 ^ 0x10))
 *
 * And by the distributive property (since XOR is addition and GF() is
 * multiplication):
 *
 * = GF(0x57, 0x01) ^ GF(0x57, 0x02) ^ GF(0x57, 0x10)
 * = 0x57 ^ 0xae ^ 0x07
 * = 0xfe.
 */function X(){Y=!0,/* Populate the Rcon table. These are the values given by
    [x^(i-1),{00},{00},{00}] where x^(i-1) are powers of x (and x = 0x02)
    in the field of GF(2^8), where i starts at 1.

    rcon[0] = [0x00, 0x00, 0x00, 0x00]
    rcon[1] = [0x01, 0x00, 0x00, 0x00] 2^(1-1) = 2^0 = 1
    rcon[2] = [0x02, 0x00, 0x00, 0x00] 2^(2-1) = 2^1 = 2
    ...
    rcon[9]  = [0x1B, 0x00, 0x00, 0x00] 2^(9-1)  = 2^8 = 0x1B
    rcon[10] = [0x36, 0x00, 0x00, 0x00] 2^(10-1) = 2^9 = 0x36

    We only store the first byte because it is the only one used.
  */i=[0,1,2,4,8,16,32,64,128,27,54];for(var e=Array(256),s=0;s<128;++s)e[s]=s<<1,e[s+128]=s+128<<1^283;// compute all other tables
t=Array(256),r=Array(256),n=[,,,,],a=[,,,,];for(var s=0;s<4;++s)n[s]=Array(256),a[s]=Array(256);for(var o,l,c,u,h,f,p,d=0,g=0,s=0;s<256;++s){u=/* We need to generate the SubBytes() sbox and isbox tables so that
      we can perform byte substitutions. This requires us to traverse
      all of the elements in GF, find their multiplicative inverses,
      and apply to each the following affine transformation:

      bi' = bi ^ b(i + 4) mod 8 ^ b(i + 5) mod 8 ^ b(i + 6) mod 8 ^
            b(i + 7) mod 8 ^ ci
      for 0 <= i < 8, where bi is the ith bit of the byte, and ci is the
      ith bit of a byte c with the value {63} or {01100011}.

      It is possible to traverse every possible value in a Galois field
      using what is referred to as a 'generator'. There are many
      generators (128 out of 256): 3,5,6,9,11,82 to name a few. To fully
      traverse GF we iterate 255 times, multiplying by our generator
      each time.

      On each iteration we can determine the multiplicative inverse for
      the current element.

      Suppose there is an element in GF 'e'. For a given generator 'g',
      e = g^x. The multiplicative inverse of e is g^(255 - x). It turns
      out that if use the inverse of a generator as another generator
      it will produce all of the corresponding multiplicative inverses
      at the same time. For this reason, we choose 5 as our inverse
      generator because it only requires 2 multiplies and 1 add and its
      inverse, 82, requires relatively few operations as well.

      In order to apply the affine transformation, the multiplicative
      inverse 'ei' of 'e' can be repeatedly XOR'd (4 times) with a
      bit-cycling of 'ei'. To do this 'ei' is first stored in 's' and
      'x'. Then 's' is left shifted and the high bit of 's' is made the
      low bit. The resulting value is stored in 's'. Then 'x' is XOR'd
      with 's' and stored in 'x'. On each subsequent iteration the same
      operation is performed. When 4 iterations are complete, 'x' is
      XOR'd with 'c' (0x63) and the transformed value is stored in 'x'.
      For example:

      s = 01000001
      x = 01000001

      iteration 1: s = 10000010, x ^= s
      iteration 2: s = 00000101, x ^= s
      iteration 3: s = 00001010, x ^= s
      iteration 4: s = 00010100, x ^= s
      x ^= 0x63

      This can be done with a loop where s = (s << 1) | (s >> 7). However,
      it can also be done by using a single 16-bit (in this case 32-bit)
      number 'sx'. Since XOR is an associative operation, we can set 'sx'
      to 'ei' and then XOR it with 'sx' left-shifted 1,2,3, and 4 times.
      The most significant bits will flow into the high 8 bit positions
      and be correctly XOR'd with one another. All that remains will be
      to cycle the high 8 bits by XOR'ing them all with the lower 8 bits
      afterwards.

      At the same time we're populating sbox and isbox we can precompute
      the multiplication we'll need to do to do MixColumns() later.
    */// apply affine transformation
(u=g^g<<1^g<<2^g<<3^g<<4)>>8^255&u^99,// update tables
t[d]=u,r[u]=d,/* Mixing columns is done using matrix multiplication. The columns
      that are to be mixed are each a single word in the current state.
      The state has Nb columns (4 columns). Therefore each column is a
      4 byte word. So to mix the columns in a single column 'c' where
      its rows are r0, r1, r2, and r3, we use the following matrix
      multiplication:

      [2 3 1 1]*[r0,c]=[r'0,c]
      [1 2 3 1] [r1,c] [r'1,c]
      [1 1 2 3] [r2,c] [r'2,c]
      [3 1 1 2] [r3,c] [r'3,c]

      r0, r1, r2, and r3 are each 1 byte of one of the words in the
      state (a column). To do matrix multiplication for each mixed
      column c' we multiply the corresponding row from the left matrix
      with the corresponding column from the right matrix. In total, we
      get 4 equations:

      r0,c' = 2*r0,c + 3*r1,c + 1*r2,c + 1*r3,c
      r1,c' = 1*r0,c + 2*r1,c + 3*r2,c + 1*r3,c
      r2,c' = 1*r0,c + 1*r1,c + 2*r2,c + 3*r3,c
      r3,c' = 3*r0,c + 1*r1,c + 1*r2,c + 2*r3,c

      As usual, the multiplication is as previously defined and the
      addition is XOR. In order to optimize mixing columns we can store
      the multiplication results in tables. If you think of the whole
      column as a word (it might help to visualize by mentally rotating
      the equations above by counterclockwise 90 degrees) then you can
      see that it would be useful to map the multiplications performed on
      each byte (r0, r1, r2, r3) onto a word as well. For instance, we
      could map 2*r0,1*r0,1*r0,3*r0 onto a word by storing 2*r0 in the
      highest 8 bits and 3*r0 in the lowest 8 bits (with the other two
      respectively in the middle). This means that a table can be
      constructed that uses r0 as an index to the word. We can do the
      same with r1, r2, and r3, creating a total of 4 tables.

      To construct a full c', we can just look up each byte of c in
      their respective tables and XOR the results together.

      Also, to build each table we only have to calculate the word
      for 2,1,1,3 for every byte ... which we can do on each iteration
      of this loop since we will iterate over every byte. After we have
      calculated 2,1,1,3 we can get the results for the other tables
      by cycling the byte at the end to the beginning. For instance
      we can take the result of table 2,1,1,3 and produce table 3,2,1,1
      by moving the right most byte to the left most position just like
      how you can imagine the 3 moved out of 2,1,1,3 and to the front
      to produce 3,2,1,1.

      There is another optimization in that the same multiples of
      the current element we need in order to advance our generator
      to the next iteration can be reused in performing the 2,1,1,3
      calculation. We also calculate the inverse mix column tables,
      with e,9,d,b being the inverse of 2,1,1,3.

      When we're done, and we need to actually mix columns, the first
      byte of each state word should be put through mix[0] (2,1,1,3),
      the second through mix[1] (3,2,1,1) and so forth. Then they should
      be XOR'd together to produce the fully mixed column.
    */// calculate mix and imix table values
h=e[u],o=e[d],l=e[o],c=e[l],f=h<<24^// 2
u<<16^// 1
u<<8^// 1
(u^h),p=(o^l^c)<<24^// E (14)
(d^c)<<16^// 9
(d^l^c)<<8^// D (13)
(d^o^c);// produce each of the mix tables by rotating the 2,1,1,3 value
for(var y=0;y<4;++y)n[y][d]=f,a[y][u]=p,// cycle the right most byte to the left most position
// ie: 2,1,1,3 becomes 3,2,1,1
f=f<<24|f>>>8,p=p<<24|p>>>8;0===d?d=g=1:(// e = 2e + 2*2*2*(10e)) = multiply e by 82 (chosen generator)
// ei = ei + 2*2*ei = multiply ei by 5 (inverse generator)
d=o^e[e[e[o^c]]],g^=e[e[g]])}}/**
 * Generates a key schedule using the AES key expansion algorithm.
 *
 * The AES algorithm takes the Cipher Key, K, and performs a Key Expansion
 * routine to generate a key schedule. The Key Expansion generates a total
 * of Nb*(Nr + 1) words: the algorithm requires an initial set of Nb words,
 * and each of the Nr rounds requires Nb words of key data. The resulting
 * key schedule consists of a linear array of 4-byte words, denoted [wi ],
 * with i in the range 0 <= i < Nb(Nr + 1).
 *
 * KeyExpansion(byte key[4*Nk], word w[Nb*(Nr+1)], Nk)
 * AES-128 (Nb=4, Nk=4, Nr=10)
 * AES-192 (Nb=4, Nk=6, Nr=12)
 * AES-256 (Nb=4, Nk=8, Nr=14)
 * Note: Nr=Nk+6.
 *
 * Nb is the number of columns (32-bit words) comprising the State (or
 * number of bytes in a block). For AES, Nb=4.
 *
 * @param key the key to schedule (as an array of 32-bit words).
 * @param decrypt true to modify the key schedule to decrypt, false not to.
 *
 * @return the generated key schedule.
 */function Z(e,r){for(var n,s=e.slice(0),o=1,l=s.length,c=4*(l+6+1),u=l;u<c;++u)n=s[u-1],u%l==0?(// temp = SubWord(RotWord(temp)) ^ Rcon[i / Nk]
n=t[n>>>16&255]<<24^t[n>>>8&255]<<16^t[255&n]<<8^t[n>>>24]^i[o]<<24,o++):l>6&&u%l==4&&(n=t[n>>>24]<<24^t[n>>>16&255]<<16^t[n>>>8&255]<<8^t[255&n]),s[u]=s[u-l]^n;/* When we are updating a cipher block we always use the code path for
     encryption whether we are decrypting or not (to shorten code and
     simplify the generation of look up tables). However, because there
     are differences in the decryption algorithm, other than just swapping
     in different look up tables, we must transform our key schedule to
     account for these changes:

     1. The decryption algorithm gets its key rounds in reverse order.
     2. The decryption algorithm adds the round key before mixing columns
       instead of afterwards.

     We don't need to modify our key schedule to handle the first case,
     we can just traverse the key schedule in reverse order when decrypting.

     The second case requires a little work.

     The tables we built for performing rounds will take an input and then
     perform SubBytes() and MixColumns() or, for the decrypt version,
     InvSubBytes() and InvMixColumns(). But the decrypt algorithm requires
     us to AddRoundKey() before InvMixColumns(). This means we'll need to
     apply some transformations to the round key to inverse-mix its columns
     so they'll be correct for moving AddRoundKey() to after the state has
     had its columns inverse-mixed.

     To inverse-mix the columns of the state when we're decrypting we use a
     lookup table that will apply InvSubBytes() and InvMixColumns() at the
     same time. However, the round key's bytes are not inverse-substituted
     in the decryption algorithm. To get around this problem, we can first
     substitute the bytes in the round key so that when we apply the
     transformation via the InvSubBytes()+InvMixColumns() table, it will
     undo our substitution leaving us with the original value that we
     want -- and then inverse-mix that value.

     This change will correctly alter our key schedule so that we can XOR
     each round key with our already transformed decryption state. This
     allows us to use the same code path as the encryption algorithm.

     We make one more change to the decryption key. Since the decryption
     algorithm runs in reverse from the encryption algorithm, we reverse
     the order of the round keys to avoid having to iterate over the key
     schedule backwards when running the encryption algorithm later in
     decryption mode. In addition to reversing the order of the round keys,
     we also swap each round key's 2nd and 4th rows. See the comments
     section where rounds are performed for more details about why this is
     done. These changes are done inline with the other substitution
     described above.
  */if(r){var h,f=a[0],p=a[1],d=a[2],g=a[3],y=s.slice(0);c=s.length;for(var u=0,m=c-4;u<c;u+=4,m-=4)// do not sub the first or last round key (round keys are Nb
// words) as no column mixing is performed before they are added,
// but do change the key order
if(0===u||u===c-4)y[u]=s[m],y[u+1]=s[m+3],y[u+2]=s[m+2],y[u+3]=s[m+1];else // table will inverse-substitute it (effectively cancel the
// substitution because round key bytes aren't sub'd in
// decryption mode) and swap indexes 3 and 1
for(var v=0;v<4;++v)h=s[m+v],y[u+(3&-v)]=f[t[h>>>24]]^p[t[h>>>16&255]]^d[t[h>>>8&255]]^g[t[255&h]];s=y}return s}/**
 * Updates a single block (16 bytes) using AES. The update will either
 * encrypt or decrypt the block.
 *
 * @param w the key schedule.
 * @param input the input block (an array of 32-bit words).
 * @param output the updated output block.
 * @param decrypt true to decrypt the block, false to encrypt it.
 */function J(e,i,s,o){/*
  Cipher(byte in[4*Nb], byte out[4*Nb], word w[Nb*(Nr+1)])
  begin
    byte state[4,Nb]
    state = in
    AddRoundKey(state, w[0, Nb-1])
    for round = 1 step 1 to Nr-1
      SubBytes(state)
      ShiftRows(state)
      MixColumns(state)
      AddRoundKey(state, w[round*Nb, (round+1)*Nb-1])
    end for
    SubBytes(state)
    ShiftRows(state)
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
    out = state
  end

  InvCipher(byte in[4*Nb], byte out[4*Nb], word w[Nb*(Nr+1)])
  begin
    byte state[4,Nb]
    state = in
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
    for round = Nr-1 step -1 downto 1
      InvShiftRows(state)
      InvSubBytes(state)
      AddRoundKey(state, w[round*Nb, (round+1)*Nb-1])
      InvMixColumns(state)
    end for
    InvShiftRows(state)
    InvSubBytes(state)
    AddRoundKey(state, w[0, Nb-1])
    out = state
  end
  */// Encrypt: AddRoundKey(state, w[0, Nb-1])
// Decrypt: AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
var l,c,u,h,f,p,d,g,y,m,v,C,E=e.length/4-1;o?(l=a[0],c=a[1],u=a[2],h=a[3],f=r):(l=n[0],c=n[1],u=n[2],h=n[3],f=t),p=i[0]^e[0],d=i[o?3:1]^e[1],g=i[2]^e[2],y=i[o?1:3]^e[3];/* In order to share code we follow the encryption algorithm when both
    encrypting and decrypting. To account for the changes required in the
    decryption algorithm, we use different lookup tables when decrypting
    and use a modified key schedule to account for the difference in the
    order of transformations applied when performing rounds. We also get
    key rounds in reverse order (relative to encryption). */for(var b=3,S=1;S<E;++S)/* As described above, we'll be using table lookups to perform the
      column mixing. Each column is stored as a word in the state (the
      array 'input' has one column as a word at each index). In order to
      mix a column, we perform these transformations on each row in c,
      which is 1 byte in each word. The new column for c0 is c'0:

               m0      m1      m2      m3
      r0,c'0 = 2*r0,c0 + 3*r1,c0 + 1*r2,c0 + 1*r3,c0
      r1,c'0 = 1*r0,c0 + 2*r1,c0 + 3*r2,c0 + 1*r3,c0
      r2,c'0 = 1*r0,c0 + 1*r1,c0 + 2*r2,c0 + 3*r3,c0
      r3,c'0 = 3*r0,c0 + 1*r1,c0 + 1*r2,c0 + 2*r3,c0

      So using mix tables where c0 is a word with r0 being its upper
      8 bits and r3 being its lower 8 bits:

      m0[c0 >> 24] will yield this word: [2*r0,1*r0,1*r0,3*r0]
      ...
      m3[c0 & 255] will yield this word: [1*r3,1*r3,3*r3,2*r3]

      Therefore to mix the columns in each word in the state we
      do the following (& 255 omitted for brevity):
      c'0,r0 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r1 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r2 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r3 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]

      However, before mixing, the algorithm requires us to perform
      ShiftRows(). The ShiftRows() transformation cyclically shifts the
      last 3 rows of the state over different offsets. The first row
      (r = 0) is not shifted.

      s'_r,c = s_r,(c + shift(r, Nb) mod Nb
      for 0 < r < 4 and 0 <= c < Nb and
      shift(1, 4) = 1
      shift(2, 4) = 2
      shift(3, 4) = 3.

      This causes the first byte in r = 1 to be moved to the end of
      the row, the first 2 bytes in r = 2 to be moved to the end of
      the row, the first 3 bytes in r = 3 to be moved to the end of
      the row:

      r1: [c0 c1 c2 c3] => [c1 c2 c3 c0]
      r2: [c0 c1 c2 c3]    [c2 c3 c0 c1]
      r3: [c0 c1 c2 c3]    [c3 c0 c1 c2]

      We can make these substitutions inline with our column mixing to
      generate an updated set of equations to produce each word in the
      state (note the columns have changed positions):

      c0 c1 c2 c3 => c0 c1 c2 c3
      c0 c1 c2 c3    c1 c2 c3 c0  (cycled 1 byte)
      c0 c1 c2 c3    c2 c3 c0 c1  (cycled 2 bytes)
      c0 c1 c2 c3    c3 c0 c1 c2  (cycled 3 bytes)

      Therefore:

      c'0 = 2*r0,c0 + 3*r1,c1 + 1*r2,c2 + 1*r3,c3
      c'0 = 1*r0,c0 + 2*r1,c1 + 3*r2,c2 + 1*r3,c3
      c'0 = 1*r0,c0 + 1*r1,c1 + 2*r2,c2 + 3*r3,c3
      c'0 = 3*r0,c0 + 1*r1,c1 + 1*r2,c2 + 2*r3,c3

      c'1 = 2*r0,c1 + 3*r1,c2 + 1*r2,c3 + 1*r3,c0
      c'1 = 1*r0,c1 + 2*r1,c2 + 3*r2,c3 + 1*r3,c0
      c'1 = 1*r0,c1 + 1*r1,c2 + 2*r2,c3 + 3*r3,c0
      c'1 = 3*r0,c1 + 1*r1,c2 + 1*r2,c3 + 2*r3,c0

      ... and so forth for c'2 and c'3. The important distinction is
      that the columns are cycling, with c0 being used with the m0
      map when calculating c0, but c1 being used with the m0 map when
      calculating c1 ... and so forth.

      When performing the inverse we transform the mirror image and
      skip the bottom row, instead of the top one, and move upwards:

      c3 c2 c1 c0 => c0 c3 c2 c1  (cycled 3 bytes) *same as encryption
      c3 c2 c1 c0    c1 c0 c3 c2  (cycled 2 bytes)
      c3 c2 c1 c0    c2 c1 c0 c3  (cycled 1 byte)  *same as encryption
      c3 c2 c1 c0    c3 c2 c1 c0

      If you compare the resulting matrices for ShiftRows()+MixColumns()
      and for InvShiftRows()+InvMixColumns() the 2nd and 4th columns are
      different (in encrypt mode vs. decrypt mode). So in order to use
      the same code to handle both encryption and decryption, we will
      need to do some mapping.

      If in encryption mode we let a=c0, b=c1, c=c2, d=c3, and r<N> be
      a row number in the state, then the resulting matrix in encryption
      mode for applying the above transformations would be:

      r1: a b c d
      r2: b c d a
      r3: c d a b
      r4: d a b c

      If we did the same in decryption mode we would get:

      r1: a d c b
      r2: b a d c
      r3: c b a d
      r4: d c b a

      If instead we swap d and b (set b=c3 and d=c1), then we get:

      r1: a b c d
      r2: d a b c
      r3: c d a b
      r4: b c d a

      Now the 1st and 3rd rows are the same as the encryption matrix. All
      we need to do then to make the mapping exactly the same is to swap
      the 2nd and 4th rows when in decryption mode. To do this without
      having to do it on each iteration, we swapped the 2nd and 4th rows
      in the decryption key schedule. We also have to do the swap above
      when we first pull in the input and when we set the final output. */m=l[p>>>24]^c[d>>>16&255]^u[g>>>8&255]^h[255&y]^e[++b],v=l[d>>>24]^c[g>>>16&255]^u[y>>>8&255]^h[255&p]^e[++b],C=l[g>>>24]^c[y>>>16&255]^u[p>>>8&255]^h[255&d]^e[++b],y=l[y>>>24]^c[p>>>16&255]^u[d>>>8&255]^h[255&g]^e[++b],p=m,d=v,g=C;/*
    Encrypt:
    SubBytes(state)
    ShiftRows(state)
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])

    Decrypt:
    InvShiftRows(state)
    InvSubBytes(state)
    AddRoundKey(state, w[0, Nb-1])
   */// Note: rows are shifted inline
s[0]=f[p>>>24]<<24^f[d>>>16&255]<<16^f[g>>>8&255]<<8^f[255&y]^e[++b],s[o?3:1]=f[d>>>24]<<24^f[g>>>16&255]<<16^f[y>>>8&255]<<8^f[255&p]^e[++b],s[2]=f[g>>>24]<<24^f[y>>>16&255]<<16^f[p>>>8&255]<<8^f[255&d]^e[++b],s[o?1:3]=f[y>>>24]<<24^f[p>>>16&255]<<16^f[d>>>8&255]<<8^f[255&g]^e[++b]}/**
 * Deprecated. Instead, use:
 *
 * forge.cipher.createCipher('AES-<mode>', key);
 * forge.cipher.createDecipher('AES-<mode>', key);
 *
 * Creates a deprecated AES cipher object. This object's mode will default to
 * CBC (cipher-block-chaining).
 *
 * The key and iv may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param options the options to use.
 *          key the symmetric key to use.
 *          output the buffer to write to.
 *          decrypt true for decryption, false for encryption.
 *          mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */function ee(e){var t,r="AES-"+((e=e||{}).mode||"CBC").toUpperCase(),i=(t=e.decrypt?_.cipher.createDecipher(r,e.key):_.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){// backwards compatibility: support second arg as output buffer
var n=null;r instanceof _.util.ByteBuffer&&(n=r,r={}),(r=r||{}).output=n,r.iv=e,i.call(t,r)},t}var _=(b("hnKIb"),b("hnKIb"),b("hnKIb"),b("hnKIb"));_.pki=_.pki||{};var et=_.pki.oids=_.oids=_.oids||{};// set id to name mapping and name to id mapping
function er(e,t){et[e]=t,et[t]=e}// algorithm OIDs
er("1.2.840.113549.1.1.1","rsaEncryption"),// Note: md2 & md4 not implemented
//_IN('1.2.840.113549.1.1.2', 'md2WithRSAEncryption');
//_IN('1.2.840.113549.1.1.3', 'md4WithRSAEncryption');
er("1.2.840.113549.1.1.4","md5WithRSAEncryption"),er("1.2.840.113549.1.1.5","sha1WithRSAEncryption"),er("1.2.840.113549.1.1.7","RSAES-OAEP"),er("1.2.840.113549.1.1.8","mgf1"),er("1.2.840.113549.1.1.9","pSpecified"),er("1.2.840.113549.1.1.10","RSASSA-PSS"),er("1.2.840.113549.1.1.11","sha256WithRSAEncryption"),er("1.2.840.113549.1.1.12","sha384WithRSAEncryption"),er("1.2.840.113549.1.1.13","sha512WithRSAEncryption"),// Edwards-curve Digital Signature Algorithm (EdDSA) Ed25519
er("1.3.101.112","EdDSA25519"),er("1.2.840.10040.4.3","dsa-with-sha1"),er("1.3.14.3.2.7","desCBC"),er("1.3.14.3.2.26","sha1"),// Deprecated equivalent of sha1WithRSAEncryption
er("1.3.14.3.2.29","sha1WithRSASignature"),er("2.16.840.1.101.3.4.2.1","sha256"),er("2.16.840.1.101.3.4.2.2","sha384"),er("2.16.840.1.101.3.4.2.3","sha512"),er("2.16.840.1.101.3.4.2.4","sha224"),er("2.16.840.1.101.3.4.2.5","sha512-224"),er("2.16.840.1.101.3.4.2.6","sha512-256"),er("1.2.840.113549.2.2","md2"),er("1.2.840.113549.2.5","md5"),// pkcs#7 content types
er("1.2.840.113549.1.7.1","data"),er("1.2.840.113549.1.7.2","signedData"),er("1.2.840.113549.1.7.3","envelopedData"),er("1.2.840.113549.1.7.4","signedAndEnvelopedData"),er("1.2.840.113549.1.7.5","digestedData"),er("1.2.840.113549.1.7.6","encryptedData"),// pkcs#9 oids
er("1.2.840.113549.1.9.1","emailAddress"),er("1.2.840.113549.1.9.2","unstructuredName"),er("1.2.840.113549.1.9.3","contentType"),er("1.2.840.113549.1.9.4","messageDigest"),er("1.2.840.113549.1.9.5","signingTime"),er("1.2.840.113549.1.9.6","counterSignature"),er("1.2.840.113549.1.9.7","challengePassword"),er("1.2.840.113549.1.9.8","unstructuredAddress"),er("1.2.840.113549.1.9.14","extensionRequest"),er("1.2.840.113549.1.9.20","friendlyName"),er("1.2.840.113549.1.9.21","localKeyId"),er("1.2.840.113549.1.9.22.1","x509Certificate"),// pkcs#12 safe bags
er("1.2.840.113549.1.12.10.1.1","keyBag"),er("1.2.840.113549.1.12.10.1.2","pkcs8ShroudedKeyBag"),er("1.2.840.113549.1.12.10.1.3","certBag"),er("1.2.840.113549.1.12.10.1.4","crlBag"),er("1.2.840.113549.1.12.10.1.5","secretBag"),er("1.2.840.113549.1.12.10.1.6","safeContentsBag"),// password-based-encryption for pkcs#12
er("1.2.840.113549.1.5.13","pkcs5PBES2"),er("1.2.840.113549.1.5.12","pkcs5PBKDF2"),er("1.2.840.113549.1.12.1.1","pbeWithSHAAnd128BitRC4"),er("1.2.840.113549.1.12.1.2","pbeWithSHAAnd40BitRC4"),er("1.2.840.113549.1.12.1.3","pbeWithSHAAnd3-KeyTripleDES-CBC"),er("1.2.840.113549.1.12.1.4","pbeWithSHAAnd2-KeyTripleDES-CBC"),er("1.2.840.113549.1.12.1.5","pbeWithSHAAnd128BitRC2-CBC"),er("1.2.840.113549.1.12.1.6","pbewithSHAAnd40BitRC2-CBC"),// hmac OIDs
er("1.2.840.113549.2.7","hmacWithSHA1"),er("1.2.840.113549.2.8","hmacWithSHA224"),er("1.2.840.113549.2.9","hmacWithSHA256"),er("1.2.840.113549.2.10","hmacWithSHA384"),er("1.2.840.113549.2.11","hmacWithSHA512"),// symmetric key algorithm oids
er("1.2.840.113549.3.7","des-EDE3-CBC"),er("2.16.840.1.101.3.4.1.2","aes128-CBC"),er("2.16.840.1.101.3.4.1.22","aes192-CBC"),er("2.16.840.1.101.3.4.1.42","aes256-CBC"),// certificate issuer/subject OIDs
er("2.5.4.3","commonName"),er("2.5.4.4","surname"),er("2.5.4.5","serialNumber"),er("2.5.4.6","countryName"),er("2.5.4.7","localityName"),er("2.5.4.8","stateOrProvinceName"),er("2.5.4.9","streetAddress"),er("2.5.4.10","organizationName"),er("2.5.4.11","organizationalUnitName"),er("2.5.4.12","title"),er("2.5.4.13","description"),er("2.5.4.15","businessCategory"),er("2.5.4.17","postalCode"),er("2.5.4.42","givenName"),er("1.3.6.1.4.1.311.60.2.1.2","jurisdictionOfIncorporationStateOrProvinceName"),er("1.3.6.1.4.1.311.60.2.1.3","jurisdictionOfIncorporationCountryName"),// X.509 extension OIDs
er("2.16.840.1.113730.1.1","nsCertType"),er("2.16.840.1.113730.1.13","nsComment"),et["2.5.29.1"]="authorityKeyIdentifier",et["2.5.29.2"]="keyAttributes",et["2.5.29.3"]="certificatePolicies",et["2.5.29.4"]="keyUsageRestriction",et["2.5.29.5"]="policyMapping",et["2.5.29.6"]="subtreesConstraint",et["2.5.29.7"]="subjectAltName",et["2.5.29.8"]="issuerAltName",et["2.5.29.9"]="subjectDirectoryAttributes",et["2.5.29.10"]="basicConstraints",et["2.5.29.11"]="nameConstraints",et["2.5.29.12"]="policyConstraints",et["2.5.29.13"]="basicConstraints",er("2.5.29.14","subjectKeyIdentifier"),er("2.5.29.15","keyUsage"),et["2.5.29.16"]="privateKeyUsagePeriod",er("2.5.29.17","subjectAltName"),er("2.5.29.18","issuerAltName"),er("2.5.29.19","basicConstraints"),et["2.5.29.20"]="cRLNumber",et["2.5.29.21"]="cRLReason",et["2.5.29.22"]="expirationDate",et["2.5.29.23"]="instructionCode",et["2.5.29.24"]="invalidityDate",et["2.5.29.25"]="cRLDistributionPoints",et["2.5.29.26"]="issuingDistributionPoint",et["2.5.29.27"]="deltaCRLIndicator",et["2.5.29.28"]="issuingDistributionPoint",et["2.5.29.29"]="certificateIssuer",et["2.5.29.30"]="nameConstraints",er("2.5.29.31","cRLDistributionPoints"),er("2.5.29.32","certificatePolicies"),et["2.5.29.33"]="policyMappings",et["2.5.29.34"]="policyConstraints",er("2.5.29.35","authorityKeyIdentifier"),et["2.5.29.36"]="policyConstraints",er("2.5.29.37","extKeyUsage"),et["2.5.29.46"]="freshestCRL",et["2.5.29.54"]="inhibitAnyPolicy",// extKeyUsage purposes
er("1.3.6.1.4.1.11129.2.4.2","timestampList"),er("1.3.6.1.5.5.7.1.1","authorityInfoAccess"),er("1.3.6.1.5.5.7.3.1","serverAuth"),er("1.3.6.1.5.5.7.3.2","clientAuth"),er("1.3.6.1.5.5.7.3.3","codeSigning"),er("1.3.6.1.5.5.7.3.4","emailProtection"),er("1.3.6.1.5.5.7.3.8","timeStamping");/* ASN.1 API */var ei=_.asn1=_.asn1||{};/**
 * Check if the byte buffer has enough bytes. Throws an Error if not.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the bytes remaining in the current parsing state.
 * @param n the number of bytes the buffer must have.
 */function en(e,t,r){if(r>t){var i=Error("Too few bytes to parse DER.");throw i.available=e.length(),i.remaining=t,i.requested=r,i}}/**
 * ASN.1 classes.
 */ei.Class={UNIVERSAL:0,APPLICATION:64,CONTEXT_SPECIFIC:128,PRIVATE:192},/**
 * ASN.1 types. Not all types are supported by this implementation, only
 * those necessary to implement a simple PKI are implemented.
 */ei.Type={NONE:0,BOOLEAN:1,INTEGER:2,BITSTRING:3,OCTETSTRING:4,NULL:5,OID:6,ODESC:7,EXTERNAL:8,REAL:9,ENUMERATED:10,EMBEDDED:11,UTF8:12,ROID:13,SEQUENCE:16,SET:17,PRINTABLESTRING:19,IA5STRING:22,UTCTIME:23,GENERALIZEDTIME:24,BMPSTRING:30},/**
 * Creates a new asn1 object.
 *
 * @param tagClass the tag class for the object.
 * @param type the data type (tag number) for the object.
 * @param constructed true if the asn1 object is in constructed form.
 * @param value the value for the object, if it is not constructed.
 * @param [options] the options to use:
 *          [bitStringContents] the plain BIT STRING content including padding
 *            byte.
 *
 * @return the asn1 object.
 */ei.create=function(e,t,r,i,n){/* An asn1 object has a tagClass, a type, a constructed flag, and a
    value. The value's type depends on the constructed flag. If
    constructed, it will contain a list of other asn1 objects. If not,
    it will contain the ASN.1 value as an array of bytes formatted
    according to the ASN.1 data type. */// remove undefined values
if(_.util.isArray(i)){for(var a=[],s=0;s<i.length;++s)void 0!==i[s]&&a.push(i[s]);i=a}var o={tagClass:e,type:t,constructed:r,composed:r||_.util.isArray(i),value:i};return n&&"bitStringContents"in n&&(// TODO: copy byte buffer if it's a buffer not a string
o.bitStringContents=n.bitStringContents,// TODO: add readonly flag to avoid this overhead
// save copy to detect changes
o.original=ei.copy(o)),o},/**
 * Copies an asn1 object.
 *
 * @param obj the asn1 object.
 * @param [options] copy options:
 *          [excludeBitStringContents] true to not copy bitStringContents
 *
 * @return the a copy of the asn1 object.
 */ei.copy=function(e,t){var r;if(_.util.isArray(e)){r=[];for(var i=0;i<e.length;++i)r.push(ei.copy(e[i],t));return r}return"string"==typeof e?e:(r={tagClass:e.tagClass,type:e.type,constructed:e.constructed,composed:e.composed,value:ei.copy(e.value,t)},t&&!t.excludeBitStringContents&&(r.bitStringContents=e.bitStringContents),r)},/**
 * Compares asn1 objects for equality.
 *
 * Note this function does not run in constant time.
 *
 * @param obj1 the first asn1 object.
 * @param obj2 the second asn1 object.
 * @param [options] compare options:
 *          [includeBitStringContents] true to compare bitStringContents
 *
 * @return true if the asn1 objects are equal.
 */ei.equals=function(e,t,r){if(_.util.isArray(e)){if(!_.util.isArray(t)||e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!ei.equals(e[i],t[i]))return!1;return!0}if(typeof e!=typeof t)return!1;if("string"==typeof e)return e===t;var n=e.tagClass===t.tagClass&&e.type===t.type&&e.constructed===t.constructed&&e.composed===t.composed&&ei.equals(e.value,t.value);return r&&r.includeBitStringContents&&(n=n&&e.bitStringContents===t.bitStringContents),n},/**
 * Gets the length of a BER-encoded ASN.1 value.
 *
 * In case the length is not specified, undefined is returned.
 *
 * @param b the BER-encoded ASN.1 byte buffer, starting with the first
 *          length byte.
 *
 * @return the length of the BER-encoded ASN.1 value or undefined.
 */ei.getBerValueLength=function(e){// TODO: move this function and related DER/BER functions to a der.js
// file; better abstract ASN.1 away from der/ber.
var t=e.getByte();if(128!==t)return 128&t?e.getInt((127&t)<<3):t};/**
 * Gets the length of a BER-encoded ASN.1 value.
 *
 * In case the length is not specified, undefined is returned.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the bytes remaining in the current parsing state.
 *
 * @return the length of the BER-encoded ASN.1 value or undefined.
 */var ea=function(e,t){// TODO: move this function and related DER/BER functions to a der.js
// file; better abstract ASN.1 away from der/ber.
// fromDer already checked that this byte exists
var r,i=e.getByte();if(t--,128!==i){if(128&i){// the number of bytes the length is specified in bits 7 through 1
// and each length byte is in big-endian base-256
var n=127&i;en(e,t,n),r=e.getInt(n<<3)}else r=i;// FIXME: this will only happen for 32 bit getInt with high bit set
if(r<0)throw Error("Negative length: "+r);return r}};/**
 * Parses an asn1 object from a byte buffer in DER format.
 *
 * @param bytes the byte buffer to parse from.
 * @param [strict] true to be strict when checking value lengths, false to
 *          allow truncated values (default: true).
 * @param [options] object with options or boolean strict flag
 *          [strict] true to be strict when checking value lengths, false to
 *            allow truncated values (default: true).
 *          [parseAllBytes] true to ensure all bytes are parsed
 *            (default: true)
 *          [decodeBitStrings] true to attempt to decode the content of
 *            BIT STRINGs (not OCTET STRINGs) using strict mode. Note that
 *            without schema support to understand the data context this can
 *            erroneously decode values that happen to be valid ASN.1. This
 *            flag will be deprecated or removed as soon as schema support is
 *            available. (default: true)
 *
 * @throws Will throw an error for various malformed input conditions.
 *
 * @return the parsed asn1 object.
 */ei.fromDer=function(e,t){void 0===t&&(t={strict:!0,parseAllBytes:!0,decodeBitStrings:!0}),"boolean"==typeof t&&(t={strict:t,parseAllBytes:!0,decodeBitStrings:!0}),"strict"in t||(t.strict=!0),"parseAllBytes"in t||(t.parseAllBytes=!0),"decodeBitStrings"in t||(t.decodeBitStrings=!0),"string"==typeof e&&(e=_.util.createBuffer(e));var r=e.length(),i=/**
 * Internal function to parse an asn1 object from a byte buffer in DER format.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the number of bytes remaining for this chunk.
 * @param depth the current parsing depth.
 * @param options object with same options as fromDer().
 *
 * @return the parsed asn1 object.
 */function e(t,r,i,n){// minimum length for ASN.1 DER structure is 2
en(t,r,2);// get the first byte
var a,s,o,l=t.getByte();// consumed one byte
r--;// get the tag class
var c=192&l,u=31&l;// get the variable value length and adjust remaining bytes
a=t.length();var h=ea(t,r);// ensure there are enough bytes to get the value
if(r-=a-t.length(),void 0!==h&&h>r){if(n.strict){var f=Error("Too few bytes to read ASN.1 value.");throw f.available=t.length(),f.remaining=r,f.requested=h,f}// Note: be lenient with truncated values and use remaining state bytes
h=r}// constructed flag is bit 6 (32 = 0x20) of the first byte
var p=(32&l)==32;if(p){if(// parse child asn1 objects from the value
s=[],void 0===h)for(;;){if(en(t,r,2),t.bytes(2)===String.fromCharCode(0,0)){t.getBytes(2),r-=2;break}a=t.length(),s.push(e(t,r,i+1,n)),r-=a-t.length()}else for(;h>0;)a=t.length(),s.push(e(t,h,i+1,n)),r-=a-t.length(),h-=a-t.length()}// determine if a non-constructed value should be decoded as a composed
// value that contains other ASN.1 objects. BIT STRINGs (and OCTET STRINGs)
// can be used this way.
if(void 0===s&&c===ei.Class.UNIVERSAL&&u===ei.Type.BITSTRING&&(o=t.bytes(h)),void 0===s&&n.decodeBitStrings&&c===ei.Class.UNIVERSAL&&// FIXME: OCTET STRINGs not yet supported here
// .. other parts of forge expect to decode OCTET STRINGs manually
u===ei.Type.BITSTRING/*|| type === asn1.Type.OCTETSTRING*/&&h>1){// save read position
var d=t.read,g=r,y=0;// if all bits are used, maybe the BIT/OCTET STRING holds ASN.1 objs
if(u===ei.Type.BITSTRING&&(/* The first octet gives the number of bits by which the length of the
        bit string is less than the next multiple of eight (this is called
        the "number of unused bits").

        The second and following octets give the value of the bit string
        converted to an octet string. */en(t,r,1),y=t.getByte(),r--),0===y)try{// attempt to parse child asn1 object from the value
// (stored in array to signal composed value)
a=t.length();var m=e(t,r,i+1,{// enforce strict mode to avoid parsing ASN.1 from plain data
strict:!0,decodeBitStrings:!0}),v=a-t.length();r-=v,u==ei.Type.BITSTRING&&v++;// if the data all decoded and the class indicates UNIVERSAL or
// CONTEXT_SPECIFIC then assume we've got an encapsulated ASN.1 object
var C=m.tagClass;v===h&&(C===ei.Class.UNIVERSAL||C===ei.Class.CONTEXT_SPECIFIC)&&(s=[m])}catch(e){}void 0===s&&(// restore read position
t.read=d,r=g)}if(void 0===s){// asn1 not constructed or composed, get raw value
// TODO: do DER to OID conversion and vice-versa in .toDer?
if(void 0===h){if(n.strict)throw Error("Non-constructed ASN.1 object of indefinite length.");// be lenient and use remaining state bytes
h=r}if(u===ei.Type.BMPSTRING)for(s="";h>0;h-=2)en(t,r,2),s+=String.fromCharCode(t.getInt16()),r-=2;else s=t.getBytes(h),r-=h}// add BIT STRING contents if available
var E=void 0===o?null:{bitStringContents:o};// create and return asn1 object
return ei.create(c,u,p,s,E)}(e,e.length(),0,t);if(t.parseAllBytes&&0!==e.length()){var n=Error("Unparsed DER bytes remain after ASN.1 parsing.");throw n.byteCount=r,n.remaining=e.length(),n}return i},/**
 * Converts the given asn1 object to a buffer of bytes in DER format.
 *
 * @param asn1 the asn1 object to convert to bytes.
 *
 * @return the buffer of bytes.
 */ei.toDer=function(e){var t=_.util.createBuffer(),r=e.tagClass|e.type,i=_.util.createBuffer(),n=!1;if("bitStringContents"in e&&(n=!0,e.original&&(n=ei.equals(e,e.original))),n)i.putBytes(e.bitStringContents);else if(e.composed){// if composed, use each child asn1 object's DER bytes as value
// turn on 6th bit (0x20 = 32) to indicate asn1 is constructed
// from other asn1 objects
e.constructed?r|=32:i.putByte(0);// add all of the child DER bytes together
for(var a=0;a<e.value.length;++a)void 0!==e.value[a]&&i.putBuffer(ei.toDer(e.value[a]))}else // use asn1.value directly
if(e.type===ei.Type.BMPSTRING)for(var a=0;a<e.value.length;++a)i.putInt16(e.value.charCodeAt(a));else // TODO: should all leading bytes be stripped vs just one?
// .. ex '00 00 01' => '01'?
e.type===ei.Type.INTEGER&&e.value.length>1&&// leading 0x00 for positive integer
(0===e.value.charCodeAt(0)&&(128&e.value.charCodeAt(1))==0||// leading 0xFF for negative integer
255===e.value.charCodeAt(0)&&(128&e.value.charCodeAt(1))==128)?i.putBytes(e.value.substr(1)):i.putBytes(e.value);// use "short form" encoding
if(// add tag byte
t.putByte(r),127>=i.length())// bit 8 = 0 and bits 7-1 = length
t.putByte(127&i.length());else{// use "long form" encoding
// 2 to 127 bytes describe the length
// first byte: bit 8 = 1 and bits 7-1 = # of additional bytes
// other bytes: length in base 256, big-endian
var s=i.length(),o="";do o+=String.fromCharCode(255&s),s>>>=8;while(s>0)// set first byte to # bytes used to store the length and turn on
// bit 8 to indicate long-form length is used
t.putByte(128|o.length);// concatenate length bytes in reverse since they were generated
// little endian and we need big endian
for(var a=o.length-1;a>=0;--a)t.putByte(o.charCodeAt(a))}return(// concatenate value bytes
t.putBuffer(i),t)},/**
 * Converts an OID dot-separated string to a byte buffer. The byte buffer
 * contains only the DER-encoded value, not any tag or length bytes.
 *
 * @param oid the OID dot-separated string.
 *
 * @return the byte buffer.
 */ei.oidToDer=function(e){// split OID into individual values
var t,r,i,n,a=e.split("."),s=_.util.createBuffer();// first byte is 40 * value1 + value2
s.putByte(40*parseInt(a[0],10)+parseInt(a[1],10));for(var o=2;o<a.length;++o){// produce value bytes in reverse because we don't know how many
// bytes it will take to store the value
t=!0,r=[],i=parseInt(a[o],10);do n=127&i,i>>>=7,t||(n|=128),r.push(n),t=!1;while(i>0)// add value bytes in reverse (needs to be in big endian)
for(var l=r.length-1;l>=0;--l)s.putByte(r[l])}return s},/**
 * Converts a DER-encoded byte buffer to an OID dot-separated string. The
 * byte buffer should contain only the DER-encoded value, not any tag or
 * length bytes.
 *
 * @param bytes the byte buffer.
 *
 * @return the OID dot-separated string.
 */ei.derToOid=function(e){// wrap in buffer if needed
"string"==typeof e&&(e=_.util.createBuffer(e));// first byte is 40 * value1 + value2
var t,r=e.getByte();t=Math.floor(r/40)+"."+r%40;for(// other bytes are each value in base 128 with 8th bit set except for
// the last byte for each value
var i=0;e.length()>0;)r=e.getByte(),i<<=7,128&r?i+=127&r:(// last byte
t+="."+(i+r),i=0);return t},/**
 * Converts a UTCTime value to a date.
 *
 * Note: GeneralizedTime has 4 digits for the year and is used for X.509
 * dates past 2049. Parsing that structure hasn't been implemented yet.
 *
 * @param utc the UTCTime value to convert.
 *
 * @return the date.
 */ei.utcTimeToDate=function(e){/* The following formats can be used:

    YYMMDDhhmmZ
    YYMMDDhhmm+hh'mm'
    YYMMDDhhmm-hh'mm'
    YYMMDDhhmmssZ
    YYMMDDhhmmss+hh'mm'
    YYMMDDhhmmss-hh'mm'

    Where:

    YY is the least significant two digits of the year
    MM is the month (01 to 12)
    DD is the day (01 to 31)
    hh is the hour (00 to 23)
    mm are the minutes (00 to 59)
    ss are the seconds (00 to 59)
    Z indicates that local time is GMT, + indicates that local time is
    later than GMT, and - indicates that local time is earlier than GMT
    hh' is the absolute value of the offset from GMT in hours
    mm' is the absolute value of the offset from GMT in minutes */var t=new Date,r=parseInt(e.substr(0,2),10);r=r>=50?1900+r:2e3+r;var i=parseInt(e.substr(2,2),10)-1,n=parseInt(e.substr(4,2),10),a=parseInt(e.substr(6,2),10),s=parseInt(e.substr(8,2),10),o=0;// use 0-11 for month
// not just YYMMDDhhmmZ
if(e.length>11){// get character after minutes
var l=e.charAt(10),c=10;// see if seconds are present
"+"!==l&&"-"!==l&&(// get seconds
o=parseInt(e.substr(10,2),10),c+=2)}if(// update date
t.setUTCFullYear(r,i,n),t.setUTCHours(a,s,o,0),c&&("+"===// get +/- after end of time
(l=e.charAt(c))||"-"===l)){// calculate offset in milliseconds
var u=60*parseInt(e.substr(c+1,2),10)+parseInt(e.substr(c+4,2),10);u*=6e4,"+"===l?t.setTime(+t-u):t.setTime(+t+u)}return t},/**
 * Converts a GeneralizedTime value to a date.
 *
 * @param gentime the GeneralizedTime value to convert.
 *
 * @return the date.
 */ei.generalizedTimeToDate=function(e){/* The following formats can be used:

    YYYYMMDDHHMMSS
    YYYYMMDDHHMMSS.fff
    YYYYMMDDHHMMSSZ
    YYYYMMDDHHMMSS.fffZ
    YYYYMMDDHHMMSS+hh'mm'
    YYYYMMDDHHMMSS.fff+hh'mm'
    YYYYMMDDHHMMSS-hh'mm'
    YYYYMMDDHHMMSS.fff-hh'mm'

    Where:

    YYYY is the year
    MM is the month (01 to 12)
    DD is the day (01 to 31)
    hh is the hour (00 to 23)
    mm are the minutes (00 to 59)
    ss are the seconds (00 to 59)
    .fff is the second fraction, accurate to three decimal places
    Z indicates that local time is GMT, + indicates that local time is
    later than GMT, and - indicates that local time is earlier than GMT
    hh' is the absolute value of the offset from GMT in hours
    mm' is the absolute value of the offset from GMT in minutes */var t=new Date,r=parseInt(e.substr(0,4),10),i=parseInt(e.substr(4,2),10)-1,n=parseInt(e.substr(6,2),10),a=parseInt(e.substr(8,2),10),s=parseInt(e.substr(10,2),10),o=parseInt(e.substr(12,2),10),l=0,c=0,u=!1;"Z"===e.charAt(e.length-1)&&(u=!0);var h=e.length-5,f=e.charAt(h);return("+"===f||"-"===f)&&(c=(60*parseInt(e.substr(h+1,2),10)+parseInt(e.substr(h+4,2),10))*6e4,"+"===f&&(c*=-1),u=!0),"."===e.charAt(14)&&(l=1e3*parseFloat(e.substr(14),10)),u?(t.setUTCFullYear(r,i,n),t.setUTCHours(a,s,o,l),// apply offset
t.setTime(+t+c)):(t.setFullYear(r,i,n),t.setHours(a,s,o,l)),t},/**
 * Converts a date to a UTCTime value.
 *
 * Note: GeneralizedTime has 4 digits for the year and is used for X.509
 * dates past 2049. Converting to a GeneralizedTime hasn't been
 * implemented yet.
 *
 * @param date the date to convert.
 *
 * @return the UTCTime value.
 */ei.dateToUtcTime=function(e){// TODO: validate; currently assumes proper format
if("string"==typeof e)return e;var t="",r=[];r.push((""+e.getUTCFullYear()).substr(2)),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());// ensure 2 digits are used for each format entry
for(var i=0;i<r.length;++i)r[i].length<2&&(t+="0"),t+=r[i];return t+"Z"},/**
 * Converts a date to a GeneralizedTime value.
 *
 * @param date the date to convert.
 *
 * @return the GeneralizedTime value as a string.
 */ei.dateToGeneralizedTime=function(e){// TODO: validate; currently assumes proper format
if("string"==typeof e)return e;var t="",r=[];r.push(""+e.getUTCFullYear()),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());// ensure 2 digits are used for each format entry
for(var i=0;i<r.length;++i)r[i].length<2&&(t+="0"),t+=r[i];return t+"Z"},/**
 * Converts a javascript integer to a DER-encoded byte buffer to be used
 * as the value for an INTEGER type.
 *
 * @param x the integer.
 *
 * @return the byte buffer.
 */ei.integerToDer=function(e){var t=_.util.createBuffer();if(e>=-128&&e<128)return t.putSignedInt(e,8);if(e>=-32768&&e<32768)return t.putSignedInt(e,16);if(e>=-8388608&&e<8388608)return t.putSignedInt(e,24);if(e>=-2147483648&&e<2147483648)return t.putSignedInt(e,32);var r=Error("Integer too large; max is 32-bits.");throw r.integer=e,r},/**
 * Converts a DER-encoded byte buffer to a javascript integer. This is
 * typically used to decode the value of an INTEGER type.
 *
 * @param bytes the byte buffer.
 *
 * @return the integer.
 */ei.derToInteger=function(e){// wrap in buffer if needed
"string"==typeof e&&(e=_.util.createBuffer(e));var t=8*e.length();if(t>32)throw Error("Integer too large; max is 32-bits.");return e.getSignedInt(t)},/**
 * Validates that the given ASN.1 object is at least a super set of the
 * given ASN.1 structure. Only tag classes and types are checked. An
 * optional map may also be provided to capture ASN.1 values while the
 * structure is checked.
 *
 * To capture an ASN.1 value, set an object in the validator's 'capture'
 * parameter to the key to use in the capture map. To capture the full
 * ASN.1 object, specify 'captureAsn1'. To capture BIT STRING bytes, including
 * the leading unused bits counter byte, specify 'captureBitStringContents'.
 * To capture BIT STRING bytes, without the leading unused bits counter byte,
 * specify 'captureBitStringValue'.
 *
 * Objects in the validator may set a field 'optional' to true to indicate
 * that it isn't necessary to pass validation.
 *
 * @param obj the ASN.1 object to validate.
 * @param v the ASN.1 structure validator.
 * @param capture an optional map to capture values in.
 * @param errors an optional array for storing validation errors.
 *
 * @return true on success, false on failure.
 */ei.validate=function(e,t,r,i){var n=!1;// ensure tag class and type are the same if specified
if((e.tagClass===t.tagClass||void 0===t.tagClass)&&(e.type===t.type||void 0===t.type)){// ensure constructed flag is the same if specified
if(e.constructed===t.constructed||void 0===t.constructed){// handle sub values
if(n=!0,t.value&&_.util.isArray(t.value))for(var a=0,s=0;n&&s<t.value.length;++s)n=t.value[s].optional||!1,e.value[a]&&((n=ei.validate(e.value[a],t.value[s],r,i))?++a:t.value[s].optional&&(n=!0)),!n&&i&&i.push("["+t.name+'] Tag class "'+t.tagClass+'", type "'+t.type+'" expected value length "'+t.value.length+'", got "'+e.value.length+'"');if(n&&r&&(t.capture&&(r[t.capture]=e.value),t.captureAsn1&&(r[t.captureAsn1]=e),t.captureBitStringContents&&"bitStringContents"in e&&(r[t.captureBitStringContents]=e.bitStringContents),t.captureBitStringValue&&"bitStringContents"in e)){if(e.bitStringContents.length<2)r[t.captureBitStringValue]="";else{if(0!==e.bitStringContents.charCodeAt(0))throw Error("captureBitStringValue only supported for zero unused bits");r[t.captureBitStringValue]=e.bitStringContents.slice(1)}}}else i&&i.push("["+t.name+'] Expected constructed "'+t.constructed+'", got "'+e.constructed+'"')}else i&&(e.tagClass!==t.tagClass&&i.push("["+t.name+'] Expected tag class "'+t.tagClass+'", got "'+e.tagClass+'"'),e.type!==t.type&&i.push("["+t.name+'] Expected type "'+t.type+'", got "'+e.type+'"'));return n};// regex for testing for non-latin characters
var es=/[^\\u0000-\\u00ff]/;/**
 * Pretty prints an ASN.1 object to a string.
 *
 * @param obj the object to write out.
 * @param level the level in the tree.
 * @param indentation the indentation to use.
 *
 * @return the string.
 */ei.prettyPrint=function(e,t,r){var i="";r=r||2,// set default level and indentation
(t=t||0)>0&&(i+="\n");for(var n="",a=0;a<t*r;++a)n+=" ";switch(// print class:type
i+=n+"Tag: ",e.tagClass){case ei.Class.UNIVERSAL:i+="Universal:";break;case ei.Class.APPLICATION:i+="Application:";break;case ei.Class.CONTEXT_SPECIFIC:i+="Context-Specific:";break;case ei.Class.PRIVATE:i+="Private:"}if(e.tagClass===ei.Class.UNIVERSAL)// known types
switch(i+=e.type,e.type){case ei.Type.NONE:i+=" (None)";break;case ei.Type.BOOLEAN:i+=" (Boolean)";break;case ei.Type.INTEGER:i+=" (Integer)";break;case ei.Type.BITSTRING:i+=" (Bit string)";break;case ei.Type.OCTETSTRING:i+=" (Octet string)";break;case ei.Type.NULL:i+=" (Null)";break;case ei.Type.OID:i+=" (Object Identifier)";break;case ei.Type.ODESC:i+=" (Object Descriptor)";break;case ei.Type.EXTERNAL:i+=" (External or Instance of)";break;case ei.Type.REAL:i+=" (Real)";break;case ei.Type.ENUMERATED:i+=" (Enumerated)";break;case ei.Type.EMBEDDED:i+=" (Embedded PDV)";break;case ei.Type.UTF8:i+=" (UTF8)";break;case ei.Type.ROID:i+=" (Relative Object Identifier)";break;case ei.Type.SEQUENCE:i+=" (Sequence)";break;case ei.Type.SET:i+=" (Set)";break;case ei.Type.PRINTABLESTRING:i+=" (Printable String)";break;case ei.Type.IA5String:i+=" (IA5String (ASCII))";break;case ei.Type.UTCTIME:i+=" (UTC time)";break;case ei.Type.GENERALIZEDTIME:i+=" (Generalized time)";break;case ei.Type.BMPSTRING:i+=" (BMP String)"}else i+=e.type;if(i+="\n"+(n+"Constructed: ")+e.constructed+"\n",e.composed){for(var s=0,o="",a=0;a<e.value.length;++a)void 0!==e.value[a]&&(s+=1,o+=ei.prettyPrint(e.value[a],t+1,r),a+1<e.value.length&&(o+=","));i+=n+"Sub values: "+s+o}else{if(i+=n+"Value: ",e.type===ei.Type.OID){var l=ei.derToOid(e.value);i+=l,_.pki&&_.pki.oids&&l in _.pki.oids&&(i+=" ("+_.pki.oids[l]+") ")}if(e.type===ei.Type.INTEGER)try{i+=ei.derToInteger(e.value)}catch(t){i+="0x"+_.util.bytesToHex(e.value)}else if(e.type===ei.Type.BITSTRING)// show unused bit count
{if(e.value.length>1?i+="0x"+_.util.bytesToHex(e.value.slice(1)):i+="(none)",e.value.length>0){var c=e.value.charCodeAt(0);1==c?i+=" (1 unused bit shown)":c>1&&(i+=" ("+c+" unused bits shown)")}}else if(e.type===ei.Type.OCTETSTRING)es.test(e.value)||(i+="("+e.value+") "),i+="0x"+_.util.bytesToHex(e.value);else if(e.type===ei.Type.UTF8)try{i+=_.util.decodeUtf8(e.value)}catch(t){if("URI malformed"===t.message)i+="0x"+_.util.bytesToHex(e.value)+" (malformed UTF8)";else throw t}else e.type===ei.Type.PRINTABLESTRING||e.type===ei.Type.IA5String?i+=e.value:es.test(e.value)?i+="0x"+_.util.bytesToHex(e.value):0===e.value.length?i+="[null]":i+=e.value}return i};var _=b("hnKIb");b("df6Hw"),/**
 * Creates an HMAC object that uses the given message digest object.
 *
 * @return an HMAC object.
 */(_.hmac=_.hmac||{}).create=function(){// the hmac key to use
var e=null,t=null,r=null,i=null,n={};return(/**
   * Starts or restarts the HMAC with the given key and message digest.
   *
   * @param md the message digest to use, null to reuse the previous one,
   *           a string to use builtin 'sha1', 'md5', 'sha256'.
   * @param key the key to use as a string, array of bytes, byte buffer,
   *           or null to reuse the previous key.
   */n.start=function(n,a){if(null!==n){if("string"==typeof n){if(// create builtin message digest
(n=n.toLowerCase())in _.md.algorithms)t=_.md.algorithms[n].create();else throw Error('Unknown hash algorithm "'+n+'"')}else t=n}if(null===a)a=e;else{if("string"==typeof a)a=_.util.createBuffer(a);else if(_.util.isArray(a)){// convert byte array into byte buffer
var s=a;a=_.util.createBuffer();for(var o=0;o<s.length;++o)a.putByte(s[o])}// if key is longer than blocksize, hash it
var l=a.length();l>t.blockLength&&(t.start(),t.update(a.bytes()),a=t.digest()),// mix key into inner and outer padding
// ipadding = [0x36 * blocksize] ^ key
// opadding = [0x5C * blocksize] ^ key
r=_.util.createBuffer(),i=_.util.createBuffer(),l=a.length();for(var o=0;o<l;++o){var s=a.at(o);r.putByte(54^s),i.putByte(92^s)}// if key is shorter than blocksize, add additional padding
if(l<t.blockLength)for(var s=t.blockLength-l,o=0;o<s;++o)r.putByte(54),i.putByte(92);e=a,r=r.bytes(),i=i.bytes()}// digest is done like so: hash(opadding | hash(ipadding | message))
// prepare to do inner hash
// hash(ipadding | message)
t.start(),t.update(r)},/**
   * Updates the HMAC with the given message bytes.
   *
   * @param bytes the bytes to update with.
   */n.update=function(e){t.update(e)},/**
   * Produces the Message Authentication Code (MAC).
   *
   * @return a byte buffer containing the digest value.
   */n.getMac=function(){// digest is done like so: hash(opadding | hash(ipadding | message))
// here we do the outer hashing
var e=t.digest().bytes();return t.start(),t.update(i),t.update(e),t.digest()},// alias for getMac
n.digest=n.getMac,n)};var _=b("hnKIb");b("df6Hw");var eo=_.md5=_.md5||{};_.md.md5=_.md.algorithms.md5=eo,/**
 * Creates an MD5 message digest object.
 *
 * @return a message digest object.
 */eo.create=function(){ef||/**
 * Initializes the constant tables.
 */function(){el=String.fromCharCode(128)+_.util.fillString("\x00",64),// g values
ec=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,11,0,5,10,15,4,9,14,3,8,13,2,7,12,5,8,11,14,1,4,7,10,13,0,3,6,9,12,15,2,0,7,14,5,12,3,10,1,8,15,6,13,4,11,2,9],// rounds table
eu=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],// get the result of abs(sin(i + 1)) as a 32-bit integer
eh=Array(64);for(var e=0;e<64;++e)eh[e]=Math.floor(4294967296*Math.abs(Math.sin(e+1)));// now initialized
ef=!0}();// MD5 state contains four 32-bit integers
var e=null,t=_.util.createBuffer(),r=Array(16),i={algorithm:"md5",blockLength:64,digestLength:16,// 56-bit length of message so far (does not including padding)
messageLength:0,// true message length
fullMessageLength:null,// size of message length in bytes
messageLengthSize:8};return(/**
   * Starts the digest.
   *
   * @return this digest object.
   */i.start=function(){// up to 56-bit message length for convenience
i.messageLength=0,// full message length (set md.messageLength64 for backwards-compatibility)
i.fullMessageLength=i.messageLength64=[];for(var r=i.messageLengthSize/4,n=0;n<r;++n)i.fullMessageLength.push(0);return t=_.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878},i},// start digest automatically for first time
i.start(),/**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */i.update=function(n,a){"utf8"===a&&(n=_.util.encodeUtf8(n));// update message length
var s=n.length;i.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var o=i.fullMessageLength.length-1;o>=0;--o)i.fullMessageLength[o]+=s[1],s[1]=s[0]+(i.fullMessageLength[o]/4294967296>>>0),i.fullMessageLength[o]=i.fullMessageLength[o]>>>0,s[0]=s[1]/4294967296>>>0;return(// add bytes to input buffer
t.putBytes(n),// process bytes
ep(e,r,t),(t.read>2048||0===t.length())&&t.compact(),i)},/**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */i.digest=function(){/* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate MD5 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. *//* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */var n=_.util.createBuffer();n.putBytes(t.bytes());// add padding for overflow blockSize - overflow
// _padding starts with 1 byte with first bit is set (byte value 128), then
// there may be up to (blockSize - 1) other pad bytes
var a=i.fullMessageLength[i.fullMessageLength.length-1]+i.messageLengthSize&i.blockLength-1;n.putBytes(el.substr(0,i.blockLength-a));for(var s,o=0,l=i.fullMessageLength.length-1;l>=0;--l)o=(s=8*i.fullMessageLength[l]+o)/4294967296>>>0,n.putInt32Le(s>>>0);// serialize message length in bits in little-endian order; since length
// is stored in bytes we multiply by 8 and add carry
var c={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3};ep(c,r,n);var u=_.util.createBuffer();return u.putInt32Le(c.h0),u.putInt32Le(c.h1),u.putInt32Le(c.h2),u.putInt32Le(c.h3),u},i)};// padding, constant tables for calculating md5
var el=null,ec=null,eu=null,eh=null,ef=!1;/**
 * Updates an MD5 state with the given byte buffer.
 *
 * @param s the MD5 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */function ep(e,t,r){for(var i,n,a,s,o,l,c,u=r.length();u>=64;){// round 1
for(c=0,// initialize hash value for this chunk
n=e.h0,a=e.h1,s=e.h2,o=e.h3;c<16;++c)t[c]=r.getInt32Le(),i=n+(o^a&(s^o))+eh[c]+t[c],l=eu[c],n=o,o=s,s=a,a+=i<<l|i>>>32-l;// round 2
for(;c<32;++c)i=n+(s^o&(a^s))+eh[c]+t[ec[c]],l=eu[c],n=o,o=s,s=a,a+=i<<l|i>>>32-l;// round 3
for(;c<48;++c)i=n+(a^s^o)+eh[c]+t[ec[c]],l=eu[c],n=o,o=s,s=a,a+=i<<l|i>>>32-l;// round 4
for(;c<64;++c)i=n+(s^(a|~o))+eh[c]+t[ec[c]],l=eu[c],n=o,o=s,s=a,a+=i<<l|i>>>32-l;// update hash state
e.h0=e.h0+n|0,e.h1=e.h1+a|0,e.h2=e.h2+s|0,e.h3=e.h3+o|0,u-=64}}var _=b("hnKIb"),ed=_.pem=_.pem||{};function eg(e){for(var t=e.name+": ",r=[],i=function(e,t){return" "+t},n=0;n<e.values.length;++n)r.push(e.values[n].replace(/^(\S+\r\n)/,i));t+=r.join(",")+"\r\n";for(var a=0,s=-1,n=0;n<t.length;++n,++a)if(a>65&&-1!==s){var o=t[s];","===o?(++s,t=t.substr(0,s)+"\r\n "+t.substr(s)):t=t.substr(0,s)+"\r\n"+o+t.substr(s+1),a=n-s-1,s=-1,++n}else(" "===t[n]||"	"===t[n]||","===t[n])&&(s=n);return t}/**
 * Encodes (serializes) the given PEM object.
 *
 * @param msg the PEM message object to encode.
 * @param options the options to use:
 *          maxline the maximum characters per line for the body, (default: 64).
 *
 * @return the PEM-formatted string.
 */ed.encode=function(e,t){t=t||{};var r,i="-----BEGIN "+e.type+"-----\r\n";if(e.procType&&(i+=eg(r={name:"Proc-Type",values:[String(e.procType.version),e.procType.type]})),e.contentDomain&&(i+=eg(r={name:"Content-Domain",values:[e.contentDomain]})),e.dekInfo&&(r={name:"DEK-Info",values:[e.dekInfo.algorithm]},e.dekInfo.parameters&&r.values.push(e.dekInfo.parameters),i+=eg(r)),e.headers)for(var n=0;n<e.headers.length;++n)i+=eg(e.headers[n]);return e.procType&&(i+="\r\n"),i+=_.util.encode64(e.body,t.maxline||64)+"\r\n-----END "+e.type+"-----\r\n"},/**
 * Decodes (deserializes) all PEM messages found in the given string.
 *
 * @param str the PEM-formatted string to decode.
 *
 * @return the PEM message objects in an array.
 */ed.decode=function(e){for(var t,r=[],i=/\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,n=/([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,a=/\r?\n/;t=i.exec(e);){// accept "NEW CERTIFICATE REQUEST" as "CERTIFICATE REQUEST"
// https://datatracker.ietf.org/doc/html/rfc7468#section-7
var s=t[1];"NEW CERTIFICATE REQUEST"===s&&(s="CERTIFICATE REQUEST");var o={type:s,procType:null,contentDomain:null,dekInfo:null,headers:[],body:_.util.decode64(t[3])};// no headers
if(r.push(o),t[2]){for(// parse headers
var l=t[2].split(a),c=0;t&&c<l.length;){// RFC2822 unfold any following folded lines
for(var u=l[c].replace(/\s+$/,""),h=c+1;h<l.length;++h){var f=l[h];if(!/\s/.test(f[0]))break;u+=f,c=h}if(// parse header
t=u.match(n)){for(var p={name:t[1],values:[]},d=t[2].split(","),g=0;g<d.length;++g)p.values.push(d[g].replace(/^\s+/,""));// Proc-Type must be the first header
if(o.procType){if(o.contentDomain||"Content-Domain"!==p.name){if(o.dekInfo||"DEK-Info"!==p.name)o.headers.push(p);else{// special-case DEK-Info
if(0===p.values.length)throw Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');o.dekInfo={algorithm:d[0],parameters:d[1]||null}}}else o.contentDomain=d[0]||""}else{if("Proc-Type"!==p.name)throw Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');if(2!==p.values.length)throw Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');o.procType={version:d[0],type:d[1]}}}++c}if("ENCRYPTED"===o.procType&&!o.dekInfo)throw Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')}}if(0===r.length)throw Error("Invalid PEM formatted message.");return r};var _=(b("hnKIb"),b("hnKIb"),b("hnKIb"));function ey(e,t){_.cipher.registerAlgorithm(e,function(){return new _.des.Algorithm(e,t)})}_.des=_.des||{},/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('DES-<mode>', key);
 * cipher.start({iv: iv});
 *
 * Creates an DES cipher object to encrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as binary-encoded strings of bytes or
 * byte buffers.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC' if IV is
 *          given, 'ECB' if null).
 *
 * @return the cipher.
 */_.des.startEncrypting=function(e,t,r,i){var n=eA({key:e,output:r,decrypt:!1,mode:i||(null===t?"ECB":"CBC")});return n.start(t),n},/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('DES-<mode>', key);
 *
 * Creates an DES cipher object to encrypt data using the given symmetric key.
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.des.createEncryptionCipher=function(e,t){return eA({key:e,output:null,decrypt:!1,mode:t})},/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('DES-<mode>', key);
 * decipher.start({iv: iv});
 *
 * Creates an DES cipher object to decrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as binary-encoded strings of bytes or
 * byte buffers.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC' if IV is
 *          given, 'ECB' if null).
 *
 * @return the cipher.
 */_.des.startDecrypting=function(e,t,r,i){var n=eA({key:e,output:r,decrypt:!0,mode:i||(null===t?"ECB":"CBC")});return n.start(t),n},/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('DES-<mode>', key);
 *
 * Creates an DES cipher object to decrypt data using the given symmetric key.
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */_.des.createDecryptionCipher=function(e,t){return eA({key:e,output:null,decrypt:!0,mode:t})},/**
 * Creates a new DES cipher algorithm object.
 *
 * @param name the name of the algorithm.
 * @param mode the mode factory function.
 *
 * @return the DES algorithm object.
 */_.des.Algorithm=function(e,t){var r=this;r.name=e,r.mode=new t({blockSize:8,cipher:{encrypt:function(e,t){return eI(r._keys,e,t,!1)},decrypt:function(e,t){return eI(r._keys,e,t,!0)}}}),r._init=!1},/**
 * Initializes this DES algorithm by expanding its key.
 *
 * @param options the options to use.
 *          key the key to use with this algorithm.
 *          decrypt true if the algorithm should be initialized for decryption,
 *            false for encryption.
 */_.des.Algorithm.prototype.initialize=function(e){if(!this._init){var t=_.util.createBuffer(e.key);if(0===this.name.indexOf("3DES")&&24!==t.length())throw Error("Invalid Triple-DES key size: "+8*t.length());// do key expansion to 16 or 48 subkeys (single or triple DES)
this._keys=/**
 * Create necessary sub keys.
 *
 * @param key the 64-bit or 192-bit key.
 *
 * @return the expanded keys.
 */function(e){for(var t,r=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],i=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],n=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],a=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],s=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],o=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],l=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],c=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],u=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],h=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],f=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],p=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],d=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],g=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],y=e.length()>8?3:1,m=[],v=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],C=0,E=0;E<y;E++){var b=e.getInt32(),S=e.getInt32();t=(b>>>4^S)&252645135,S^=t,b^=t<<4,t=(S>>>-16^b)&65535,b^=t,S^=t<<-16,t=(b>>>2^S)&858993459,S^=t,b^=t<<2,t=(S>>>-16^b)&65535,b^=t,S^=t<<-16,t=(b>>>1^S)&1431655765,S^=t,b^=t<<1,t=(S>>>8^b)&16711935,b^=t,S^=t<<8,t=(b>>>1^S)&1431655765,S^=t,b^=t<<1,// right needs to be shifted and OR'd with last four bits of left
t=b<<8|S>>>20&240,// left needs to be put upside down
b=S<<24|S<<8&16711680|S>>>8&65280|S>>>24&240,S=t;// now go through and perform these shifts on the left and right keys
for(var T=0;T<v.length;++T){v[T]?(b=b<<2|b>>>26,S=S<<2|S>>>26):(b=b<<1|b>>>27,S=S<<1|S>>>27),S&=-15;// now apply PC-2, in such a way that E is easier when encrypting or
// decrypting this conversion will look like PC-2 except only the last 6
// bits of each byte are used rather than 48 consecutive bits and the
// order of lines will be according to how the S selection functions will
// be applied: S2, S4, S6, S8, S1, S3, S5, S7
var _=r[(b&=-15)>>>28]|i[b>>>24&15]|n[b>>>20&15]|a[b>>>16&15]|s[b>>>12&15]|o[b>>>8&15]|l[b>>>4&15],I=c[S>>>28]|u[S>>>24&15]|h[S>>>20&15]|f[S>>>16&15]|p[S>>>12&15]|d[S>>>8&15]|g[S>>>4&15];t=(I>>>16^_)&65535,m[C++]=_^t,m[C++]=I^t<<16}}return m}(t),this._init=!0}},/** Register DES algorithms **/ey("DES-ECB",_.cipher.modes.ecb),ey("DES-CBC",_.cipher.modes.cbc),ey("DES-CFB",_.cipher.modes.cfb),ey("DES-OFB",_.cipher.modes.ofb),ey("DES-CTR",_.cipher.modes.ctr),ey("3DES-ECB",_.cipher.modes.ecb),ey("3DES-CBC",_.cipher.modes.cbc),ey("3DES-CFB",_.cipher.modes.cfb),ey("3DES-OFB",_.cipher.modes.ofb),ey("3DES-CTR",_.cipher.modes.ctr);/** DES implementation **/var em=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],ev=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],eC=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],eE=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],eb=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],eS=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],eT=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],e_=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];/**
 * Updates a single block (1 byte) using DES. The update will either
 * encrypt or decrypt the block.
 *
 * @param keys the expanded keys.
 * @param input the input block (an array of 32-bit words).
 * @param output the updated output block.
 * @param decrypt true to decrypt the block, false to encrypt it.
 */function eI(e,t,r,i){// set up loops for single or triple DES
var n,a,s=32===e.length?3:9;n=3===s?i?[30,-2,-2]:[0,32,2]:i?[94,62,-2,32,64,2,30,-2,-2]:[0,32,2,62,30,-2,64,96,2];var o=t[0],l=t[1];// first each 64 bit chunk of the message must be permuted according to IP
a=(o>>>4^l)&252645135,l^=a,o^=a<<4,a=(o>>>16^l)&65535,l^=a,o^=a<<16,a=(l>>>2^o)&858993459,o^=a,l^=a<<2,a=(l>>>8^o)&16711935,o^=a,l^=a<<8,a=(o>>>1^l)&1431655765,l^=a,o^=a<<1,// rotate left 1 bit
o=o<<1|o>>>31,l=l<<1|l>>>31;for(var c=0;c<s;c+=3){// now go through and perform the encryption or decryption
for(var u=n[c+1],h=n[c+2],f=n[c];f!=u;f+=h){var p=l^e[f],d=(l>>>4|l<<28)^e[f+1];// passing these bytes through the S selection functions
a=o,o=l,l=a^(ev[p>>>24&63]|eE[p>>>16&63]|eS[p>>>8&63]|e_[63&p]|em[d>>>24&63]|eC[d>>>16&63]|eb[d>>>8&63]|eT[63&d])}// unreverse left and right
a=o,o=l,l=a}// now perform IP-1, which is IP in the opposite direction
a=(// rotate right 1 bit
(o=o>>>1|o<<31)>>>1^(l=l>>>1|l<<31))&1431655765,l^=a,o^=a<<1,a=(l>>>8^o)&16711935,o^=a,l^=a<<8,a=(l>>>2^o)&858993459,o^=a,l^=a<<2,a=(o>>>16^l)&65535,l^=a,o^=a<<16,a=(o>>>4^l)&252645135,l^=a,o^=a<<4,r[0]=o,r[1]=l}/**
 * Deprecated. Instead, use:
 *
 * forge.cipher.createCipher('DES-<mode>', key);
 * forge.cipher.createDecipher('DES-<mode>', key);
 *
 * Creates a deprecated DES cipher object. This object's mode will default to
 * CBC (cipher-block-chaining).
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param options the options to use.
 *          key the symmetric key to use (64 or 192 bits).
 *          output the buffer to write to.
 *          decrypt true for decryption, false for encryption.
 *          mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */function eA(e){var t,r="DES-"+((e=e||{}).mode||"CBC").toUpperCase(),i=(t=e.decrypt?_.cipher.createDecipher(r,e.key):_.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){// backwards compatibility: support second arg as output buffer
var n=null;r instanceof _.util.ByteBuffer&&(n=r,r={}),(r=r||{}).output=n,r.iv=e,i.call(t,r)},t}b("df6Hw");var I=b("4AFFV"),eB=I.Buffer,_=b("hnKIb");b("df6Hw");var eN=_.pkcs5=_.pkcs5||{};_.util.isNodejs&&!_.options.usePureJavaScript&&(s=b("4AFFV")),_.pbkdf2=eN.pbkdf2=function(e,t,r,i,n,a){// use native implementation if possible and not disabled, note that
// some node versions only support SHA-1, others allow digest to be changed
if("function"==typeof n&&(a=n,n=null),_.util.isNodejs&&!_.options.usePureJavaScript&&s.pbkdf2&&(null===n||"object"!=typeof n)&&(s.pbkdf2Sync.length>4||!n||"sha1"===n))return("string"!=typeof n&&(n="sha1"),e=eB.from(e,"binary"),t=eB.from(t,"binary"),a)?4===s.pbkdf2Sync.length?s.pbkdf2(e,t,r,i,function(e,t){if(e)return a(e);a(null,t.toString("binary"))}):s.pbkdf2(e,t,r,i,n,function(e,t){if(e)return a(e);a(null,t.toString("binary"))}):4===s.pbkdf2Sync.length?s.pbkdf2Sync(e,t,r,i).toString("binary"):s.pbkdf2Sync(e,t,r,i,n).toString("binary");if(null==n&&(n="sha1"),"string"==typeof n){if(!(n in _.md.algorithms))throw Error("Unknown hash algorithm: "+n);n=_.md[n].create()}var o=n.digestLength;/* 1. If dkLen > (2^32 - 1) * hLen, output "derived key too long" and
    stop. */if(i>4294967295*o){var l=Error("Derived key is too long.");if(a)return a(l);throw l}/* 2. Let len be the number of hLen-octet blocks in the derived key,
    rounding up, and let r be the number of octets in the last
    block:

    len = CEIL(dkLen / hLen),
    r = dkLen - (len - 1) * hLen. */var c=Math.ceil(i/o),u=i-(c-1)*o,h=_.hmac.create();h.start(n,e);var f="";// sync version
if(!a){for(var p=1;p<=c;++p){// PRF(P, S || INT(i)) (first iteration)
h.start(null,null),h.update(t),h.update(_.util.int32ToBytes(p)),g=m=h.digest().getBytes();// PRF(P, u_{c-1}) (other iterations)
for(var d=2;d<=r;++d)h.start(null,null),h.update(m),y=h.digest().getBytes(),// F(p, s, c, i)
g=_.util.xorBytes(g,y,o),m=y;/* 4. Concatenate the blocks and extract the first dkLen octets to
        produce a derived key DK:

        DK = T_1 || T_2 ||  ...  || T_len<0..r-1> */f+=p<c?g:g.substr(0,u)}/* 5. Output the derived key DK. */return f}// async version
var g,y,m,d,p=1;(function e(){if(p>c)return a(null,f);// PRF(P, S || INT(i)) (first iteration)
h.start(null,null),h.update(t),h.update(_.util.int32ToBytes(p)),g=m=h.digest().getBytes(),// PRF(P, u_{c-1}) (other iterations)
d=2,function t(){if(d<=r)return h.start(null,null),h.update(m),y=h.digest().getBytes(),// F(p, s, c, i)
g=_.util.xorBytes(g,y,o),m=y,++d,_.util.setImmediate(t);/* 4. Concatenate the blocks and extract the first dkLen octets to
      produce a derived key DK:

      DK = T_1 || T_2 ||  ...  || T_len<0..r-1> */f+=p<c?g:g.substr(0,u),++p,e()}()})()};var _=(b("hnKIb"),b("hnKIb"));b("df6Hw");var ew=_.sha256=_.sha256||{};_.md.sha256=_.md.algorithms.sha256=ew,/**
 * Creates a SHA-256 message digest object.
 *
 * @return a message digest object.
 */ew.create=function(){ek||(eL=String.fromCharCode(128)+_.util.fillString("\x00",64),// create K table for SHA-256
eR=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],// now initialized
ek=!0);// SHA-256 state contains eight 32-bit integers
var e=null,t=_.util.createBuffer(),r=Array(64),i={algorithm:"sha256",blockLength:64,digestLength:32,// 56-bit length of message so far (does not including padding)
messageLength:0,// true message length
fullMessageLength:null,// size of message length in bytes
messageLengthSize:8};return(/**
   * Starts the digest.
   *
   * @return this digest object.
   */i.start=function(){// up to 56-bit message length for convenience
i.messageLength=0,// full message length (set md.messageLength64 for backwards-compatibility)
i.fullMessageLength=i.messageLength64=[];for(var r=i.messageLengthSize/4,n=0;n<r;++n)i.fullMessageLength.push(0);return t=_.util.createBuffer(),e={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},i},// start digest automatically for first time
i.start(),/**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */i.update=function(n,a){"utf8"===a&&(n=_.util.encodeUtf8(n));// update message length
var s=n.length;i.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var o=i.fullMessageLength.length-1;o>=0;--o)i.fullMessageLength[o]+=s[1],s[1]=s[0]+(i.fullMessageLength[o]/4294967296>>>0),i.fullMessageLength[o]=i.fullMessageLength[o]>>>0,s[0]=s[1]/4294967296>>>0;return(// add bytes to input buffer
t.putBytes(n),// process bytes
eD(e,r,t),(t.read>2048||0===t.length())&&t.compact(),i)},/**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */i.digest=function(){/* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-256 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. *//* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */var n,a=_.util.createBuffer();a.putBytes(t.bytes());// add padding for overflow blockSize - overflow
// _padding starts with 1 byte with first bit is set (byte value 128), then
// there may be up to (blockSize - 1) other pad bytes
var s=i.fullMessageLength[i.fullMessageLength.length-1]+i.messageLengthSize&i.blockLength-1;a.putBytes(eL.substr(0,i.blockLength-s));for(var o=8*i.fullMessageLength[0],l=0;l<i.fullMessageLength.length-1;++l)o+=(n=8*i.fullMessageLength[l+1])/4294967296>>>0,a.putInt32(o>>>0),o=n>>>0;a.putInt32(o);var c={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4,h5:e.h5,h6:e.h6,h7:e.h7};eD(c,r,a);var u=_.util.createBuffer();return u.putInt32(c.h0),u.putInt32(c.h1),u.putInt32(c.h2),u.putInt32(c.h3),u.putInt32(c.h4),u.putInt32(c.h5),u.putInt32(c.h6),u.putInt32(c.h7),u},i)};// sha-256 padding bytes not initialized yet
var eL=null,ek=!1,eR=null;/**
 * Updates a SHA-256 state with the given byte buffer.
 *
 * @param s the SHA-256 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */function eD(e,t,r){for(var i,n,a,s,o,l,c,u,h,f,p,d,g,y,m,v=r.length();v>=64;){// the w array will be populated with sixteen 32-bit big-endian words
// and then extended into 64 32-bit words according to SHA-256
for(c=0;c<16;++c)t[c]=r.getInt32();for(;c<64;++c)i=(// XOR word 2 words ago rot right 17, rot right 19, shft right 10
(i=t[c-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,n=(// XOR word 15 words ago rot right 7, rot right 18, shft right 3
(n=t[c-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,// sum(t1, word 7 ago, t2, word 16 ago) modulo 2^32
t[c]=i+t[c-7]+n+t[c-16]|0;// round function
for(c=0,// initialize hash value for this chunk
u=e.h0,h=e.h1,f=e.h2,p=e.h3,d=e.h4,g=e.h5,y=e.h6,m=e.h7;c<64;++c)// Sum1(e)
s=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7),// Ch(e, f, g) (optimized the same way as SHA-1)
o=y^d&(g^y),// Sum0(a)
a=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),// Maj(a, b, c) (optimized the same way as SHA-1)
l=u&h|f&(u^h),// main algorithm
i=m+s+o+eR[c]+t[c],n=a+l,m=y,y=g,g=d,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
// can't truncate with `| 0`
d=p+i>>>0,p=f,f=h,h=u,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
// can't truncate with `| 0`
u=i+n>>>0;// update hash state
e.h0=e.h0+u|0,e.h1=e.h1+h|0,e.h2=e.h2+f|0,e.h3=e.h3+p|0,e.h4=e.h4+d|0,e.h5=e.h5+g|0,e.h6=e.h6+y|0,e.h7=e.h7+m|0,v-=64}}var I=b("4AFFV"),_=b("hnKIb"),eU=null;!_.util.isNodejs||_.options.usePureJavaScript||I.versions["node-webkit"]||(eU=b("4AFFV")),/**
 * Creates a new PRNG context.
 *
 * A PRNG plugin must be passed in that will provide:
 *
 * 1. A function that initializes the key and seed of a PRNG context. It
 *   will be given a 16 byte key and a 16 byte seed. Any key expansion
 *   or transformation of the seed from a byte string into an array of
 *   integers (or similar) should be performed.
 * 2. The cryptographic function used by the generator. It takes a key and
 *   a seed.
 * 3. A seed increment function. It takes the seed and returns seed + 1.
 * 4. An api to create a message digest.
 *
 * For an example, see random.js.
 *
 * @param plugin the PRNG plugin to use.
 */(_.prng=_.prng||{}).create=function(e){for(var t={plugin:e,key:null,seed:null,time:null,// number of reseeds so far
reseeds:0,// amount of data generated so far
generated:0,// no initial key bytes
keyBytes:""},r=e.md,i=Array(32),n=0;n<32;++n)i[n]=r.create();/**
   * Private function that seeds a generator once enough bytes are available.
   */function a(){// update reseed count
t.reseeds=4294967295===t.reseeds?0:t.reseeds+1;// goal is to update `key` via:
// key = hash(key + s)
//   where 's' is all collected entropy from selected pools, then...
// create a plugin-based message digest
var e=t.plugin.md.create();// consume current key bytes
e.update(t.keyBytes);for(var r=1,i=0;i<32;++i)t.reseeds%r==0&&(e.update(t.pools[i].digest().getBytes()),t.pools[i].start()),r<<=1;// get digest for key bytes
t.keyBytes=e.digest().getBytes(),// paranoid deviation from Fortuna:
// update `seed` via `seed = hash(key)`
// instead of initializing to zero once and only
// ever incrementing it
e.start(),e.update(t.keyBytes);var n=e.digest().getBytes();// update state
t.key=t.plugin.formatKey(t.keyBytes),t.seed=t.plugin.formatSeed(n),t.generated=0}/**
   * The built-in default seedFile. This seedFile is used when entropy
   * is needed immediately.
   *
   * @param needed the number of bytes that are needed.
   *
   * @return the random bytes.
   */function s(e){// use window.crypto.getRandomValues strong source of entropy if available
var t=null,r=_.util.globalScope,i=r.crypto||r.msCrypto;i&&i.getRandomValues&&(t=function(e){return i.getRandomValues(e)});var n=_.util.createBuffer();if(t)for(;n.length()<e;){// max byte length is 65536 before QuotaExceededError is thrown
// http://www.w3.org/TR/WebCryptoAPI/#RandomSource-method-getRandomValues
var a=Math.max(1,Math.min(e-n.length(),65536)/4),s=new Uint32Array(Math.floor(a));try{t(s);for(var o=0;o<s.length;++o)n.putInt32(s[o])}catch(e){/* only ignore QuotaExceededError */if(!("undefined"!=typeof QuotaExceededError&&e instanceof QuotaExceededError))throw e}}// be sad and add some weak random data
if(n.length()<e)for(var l,c,u,h=Math.floor(65536*Math.random());n.length()<e;){h=4294967295&(c=(2147483647&(c=16807*(65535&h)+(((32767&(l=16807*(h>>16)))<<16)+(l>>15))))+(c>>31));// consume lower 3 bytes of seed
for(var o=0;o<3;++o)u=h>>>(o<<3)^Math.floor(256*Math.random()),n.putByte(255&u)}return n.getBytes(e)}return t.pools=i,// entropy pools are written to cyclically, starting at index 0
t.pool=0,/**
   * Generates random bytes. The bytes may be generated synchronously or
   * asynchronously. Web workers must use the asynchronous interface or
   * else the behavior is undefined.
   *
   * @param count the number of random bytes to generate.
   * @param [callback(err, bytes)] called once the operation completes.
   *
   * @return count random bytes as a string.
   */t.generate=function(e,r){// do synchronously
if(!r)return t.generateSync(e);// simple generator using counter-based CBC
var i=t.plugin.cipher,n=t.plugin.increment,s=t.plugin.formatKey,o=t.plugin.formatSeed,l=_.util.createBuffer();// paranoid deviation from Fortuna:
// reset key for every request to protect previously
// generated random bytes should the key be discovered;
// there is no 100ms based reseeding because of this
// forced reseed for every `generate` call
t.key=null,function c(u){if(u)return r(u);// sufficient bytes generated
if(l.length()>=e)return r(null,l.getBytes(e));if(t.generated>1048575&&(t.key=null),null===t.key)return _.util.nextTick(function(){/**
   * Private function that asynchronously reseeds a generator.
   *
   * @param callback(err) called once the operation completes.
   */(function(e){if(t.pools[0].messageLength>=32)return a(),e();// not enough seed data...
var r=32-t.pools[0].messageLength<<5;t.seedFile(r,function(r,i){if(r)return e(r);t.collect(i),a(),e()})})(c)});// generate the random bytes
var h=i(t.key,t.seed);t.generated+=h.length,l.putBytes(h),// generate bytes for a new key and seed
t.key=s(i(t.key,n(t.seed))),t.seed=o(i(t.key,t.seed)),_.util.setImmediate(c)}()},/**
   * Generates random bytes synchronously.
   *
   * @param count the number of random bytes to generate.
   *
   * @return count random bytes as a string.
   */t.generateSync=function(e){// simple generator using counter-based CBC
var r=t.plugin.cipher,i=t.plugin.increment,n=t.plugin.formatKey,s=t.plugin.formatSeed;// paranoid deviation from Fortuna:
// reset key for every request to protect previously
// generated random bytes should the key be discovered;
// there is no 100ms based reseeding because of this
// forced reseed for every `generateSync` call
t.key=null;for(var o=_.util.createBuffer();o.length()<e;){t.generated>1048575&&(t.key=null),null===t.key&&/**
   * Private function that synchronously reseeds a generator.
   */function(){if(t.pools[0].messageLength>=32)return a();// not enough seed data...
var e=32-t.pools[0].messageLength<<5;t.collect(t.seedFileSync(e)),a()}();// generate the random bytes
var l=r(t.key,t.seed);t.generated+=l.length,o.putBytes(l),// generate bytes for a new key and seed
t.key=n(r(t.key,i(t.seed))),t.seed=s(r(t.key,t.seed))}return o.getBytes(e)},eU?(// use nodejs async API
t.seedFile=function(e,t){eU.randomBytes(e,function(e,r){if(e)return t(e);t(null,r.toString())})},// use nodejs sync API
t.seedFileSync=function(e){return eU.randomBytes(e).toString()}):(t.seedFile=function(e,t){try{t(null,s(e))}catch(e){t(e)}},t.seedFileSync=s),/**
   * Adds entropy to a prng ctx's accumulator.
   *
   * @param bytes the bytes of entropy as a string.
   */t.collect=function(e){for(var r=e.length,i=0;i<r;++i)t.pools[t.pool].update(e.substr(i,1)),t.pool=31===t.pool?0:t.pool+1},/**
   * Collects an integer of n bits.
   *
   * @param i the integer entropy.
   * @param n the number of bits in the integer.
   */t.collectInt=function(e,r){for(var i="",n=0;n<r;n+=8)i+=String.fromCharCode(e>>n&255);t.collect(i)},/**
   * Registers a Web Worker to receive immediate entropy from the main thread.
   * This method is required until Web Workers can access the native crypto
   * API. This method should be called twice for each created worker, once in
   * the main thread, and once in the worker itself.
   *
   * @param worker the worker to register.
   */t.registerWorker=function(e){// worker receives random bytes
e===self?t.seedFile=function(e,t){self.addEventListener("message",function e(r){var i=r.data;i.forge&&i.forge.prng&&(self.removeEventListener("message",e),t(i.forge.prng.err,i.forge.prng.bytes))}),self.postMessage({forge:{prng:{needed:e}}})}:// TODO: do we need to remove the event listener when the worker dies?
e.addEventListener("message",function(r){var i=r.data;i.forge&&i.forge.prng&&t.seedFile(i.forge.prng.needed,function(t,r){e.postMessage({forge:{prng:{err:t,bytes:r}}})})})},t},function(){// forge.random already defined
if(_.random&&_.random.getBytes){_.random;return}!function(e){// the default prng plugin, uses AES-128
var t={},r=[,,,,],i=_.util.createBuffer();/**
 * Creates a new PRNG.
 */function n(){var e=_.prng.create(t);return(/**
   * Gets random bytes. If a native secure crypto API is unavailable, this
   * method tries to make the bytes more unpredictable by drawing from data that
   * can be collected from the user of the browser, eg: mouse movement.
   *
   * If a callback is given, this method will be called asynchronously.
   *
   * @param count the number of random bytes to get.
   * @param [callback(err, bytes)] called once the operation completes.
   *
   * @return the random bytes in a string.
   */e.getBytes=function(t,r){return e.generate(t,r)},/**
   * Gets random bytes asynchronously. If a native secure crypto API is
   * unavailable, this method tries to make the bytes more unpredictable by
   * drawing from data that can be collected from the user of the browser,
   * eg: mouse movement.
   *
   * @param count the number of random bytes to get.
   *
   * @return the random bytes in a string.
   */e.getBytesSync=function(t){return e.generate(t)},e)}t.formatKey=function(e){// convert the key into 32-bit integers
var t=_.util.createBuffer(e);// return the expanded key
return(e=[,,,,])[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),_.aes._expandKey(e,!1)},t.formatSeed=function(e){// convert seed into 32-bit integers
var t=_.util.createBuffer(e);return(e=[,,,,])[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),e},t.cipher=function(e,t){return _.aes._updateBlock(e,t,r,!1),i.putInt32(r[0]),i.putInt32(r[1]),i.putInt32(r[2]),i.putInt32(r[3]),i.getBytes()},t.increment=function(e){return(// FIXME: do we care about carry or signed issues?
++e[3],e)},t.md=_.md.sha256;// create default prng context
var a=n(),s=null,o=_.util.globalScope,l=o.crypto||o.msCrypto;if(l&&l.getRandomValues&&(s=function(e){return l.getRandomValues(e)}),_.options.usePureJavaScript||!_.util.isNodejs&&!s){// add some entropy from navigator object
if(// if this is a web worker, do not use weak entropy, instead register to
// receive strong entropy asynchronously from the main thread
"undefined"==typeof window||window.document,// get load time entropy
a.collectInt(+new Date,32),"undefined"!=typeof navigator){var c="";for(var u in navigator)try{"string"==typeof navigator[u]&&(c+=navigator[u])}catch(e){/* Some navigator keys might not be accessible, e.g. the geolocation
          attribute throws an exception if touched in Mozilla chrome://
          context.

          Silently ignore this and just don't use this as a source of
          entropy. */}a.collect(c),c=null}e&&(// set up mouse entropy capture
e().mousemove(function(e){// add mouse coords
a.collectInt(e.clientX,16),a.collectInt(e.clientY,16)}),// set up keyboard entropy capture
e().keypress(function(e){a.collectInt(e.charCode,8)}))}/* Random API */if(_.random)for(var u in a)_.random[u]=a[u];else _.random=a;// expose spawn PRNG
_.random.createInstance=n,_.random}("undefined"!=typeof jQuery?jQuery:null)}();var _=b("hnKIb"),eO=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],eP=[1,2,3,5];_.rc2=_.rc2||{},/**
 * Perform RC2 key expansion as per RFC #2268, section 2.
 *
 * @param key variable-length user key (between 1 and 128 bytes)
 * @param effKeyBits number of effective key bits (default: 128)
 * @return the expanded RC2 key (ByteBuffer of 128 bytes)
 */_.rc2.expandKey=function(e,t){"string"==typeof e&&(e=_.util.createBuffer(e)),t=t||128;/* introduce variables that match the names used in RFC #2268 */var r,i=e,n=e.length(),a=t,s=Math.ceil(a/8);for(r=n;r<128;r++)i.putByte(eO[i.at(r-1)+i.at(r-n)&255]);for(i.setAt(128-s,eO[i.at(128-s)&255>>(7&a)]),r=127-s;r>=0;r--)i.setAt(r,eO[i.at(r+1)^i.at(r+s)]);return i};/**
 * Creates a RC2 cipher object.
 *
 * @param key the symmetric key to use (as base for key generation).
 * @param bits the number of effective key bits.
 * @param encrypt false for decryption, true for encryption.
 *
 * @return the cipher.
 */var ex=function(e,t,r){var i,n,a,s,o=!1,l=null,c=null,u=null,h=[];for(a=0,/* Expand key and fill into K[] Array */e=_.rc2.expandKey(e,t);a<64;a++)h.push(e.getInt16Le());r?(/**
     * Perform one mixing round "in place".
     *
     * @param R Array of four words to perform mixing on.
     */i=function(e){for(a=0;a<4;a++){var t,r;e[a]+=h[s]+(e[(a+3)%4]&e[(a+2)%4])+(~e[(a+3)%4]&e[(a+1)%4]),e[a]=(t=e[a])<<(r=eP[a])&65535|(65535&t)>>16-r,s++}},/**
     * Perform one mashing round "in place".
     *
     * @param R Array of four words to perform mashing on.
     */n=function(e){for(a=0;a<4;a++)e[a]+=h[63&e[(a+3)%4]]}):(/**
     * Perform one r-mixing round "in place".
     *
     * @param R Array of four words to perform mixing on.
     */i=function(e){for(a=3;a>=0;a--){var t,r;e[a]=(65535&(t=e[a]))>>(r=eP[a])|t<<16-r&65535,e[a]-=h[s]+(e[(a+3)%4]&e[(a+2)%4])+(~e[(a+3)%4]&e[(a+1)%4]),s--}},/**
     * Perform one r-mashing round "in place".
     *
     * @param R Array of four words to perform mashing on.
     */n=function(e){for(a=3;a>=0;a--)e[a]-=h[63&e[(a+3)%4]]});/**
   * Run the specified cipher execution plan.
   *
   * This function takes four words from the input buffer, applies the IV on
   * it (if requested) and runs the provided execution plan.
   *
   * The plan must be put together in form of a array of arrays.  Where the
   * outer one is simply a list of steps to perform and the inner one needs
   * to have two elements: the first one telling how many rounds to perform,
   * the second one telling what to do (i.e. the function to call).
   *
   * @param {Array} plan The plan to execute.
   */var f=function(e){var t=[];/* Get data from input buffer and fill the four words into R */for(a=0;a<4;a++){var i=l.getInt16Le();null!==u&&(r?/* We're encrypting, apply the IV first. */i^=u.getInt16Le():/* We're decryption, keep cipher text for next block. */u.putInt16Le(i)),t.push(65535&i)}/* Reset global "j" variable as per spec. */s=r?0:63;/* Run execution plan. */for(var n=0;n<e.length;n++)for(var o=0;o<e[n][0];o++)e[n][1](t);/* Write back result to output buffer. */for(a=0;a<4;a++)null!==u&&(r?/* We're encrypting in CBC-mode, feed back encrypted bytes into
             IV buffer to carry it forward to next block. */u.putInt16Le(t[a]):t[a]^=u.getInt16Le()),c.putInt16Le(t[a])},p=null;return p={/**
     * Starts or restarts the encryption or decryption process, whichever
     * was previously configured.
     *
     * To use the cipher in CBC mode, iv may be given either as a string
     * of bytes, or as a byte buffer.  For ECB mode, give null as iv.
     *
     * @param iv the initialization vector to use, null for ECB mode.
     * @param output the output the buffer to write to, null to create one.
     */start:function(e,t){e&&"string"==typeof e&&(e=_.util.createBuffer(e)),o=!1,l=_.util.createBuffer(),c=t||new _.util.createBuffer,u=e,p.output=c},/**
     * Updates the next block.
     *
     * @param input the buffer to read from.
     */update:function(e){for(o||l.putBuffer(e);l.length()>=8;)f([[5,i],[1,n],[6,i],[1,n],[5,i]])},/**
     * Finishes encrypting or decrypting.
     *
     * @param pad a padding function to use, null for PKCS#7 padding,
     *           signature(blockSize, buffer, decrypt).
     *
     * @return true if successful, false on error.
     */finish:function(e){var t=!0;if(r){if(e)t=e(8,l,!r);else{// add PKCS#7 padding to block (each pad byte is the
// value of the number of pad bytes)
var i=8===l.length()?8:8-l.length();l.fillWithByte(i,i)}}if(t&&(// do final update
o=!0,p.update()),!r&&// check for error: input data not a multiple of block size
(t=0===l.length())){if(e)t=e(8,c,!r);else{// ensure padding byte count is valid
var n=c.length(),a=c.at(n-1);a>n?t=!1:c.truncate(a)}}return t}}};/**
 * Creates an RC2 cipher object to encrypt data in ECB or CBC mode using the
 * given symmetric key. The output will be stored in the 'output' member
 * of the returned cipher.
 *
 * The key and iv may be given as a string of bytes or a byte buffer.
 * The cipher is initialized to use 128 effective key bits.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 *
 * @return the cipher.
 */_.rc2.startEncrypting=function(e,t,r){var i=_.rc2.createEncryptionCipher(e,128);return i.start(t,r),i},/**
 * Creates an RC2 cipher object to encrypt data in ECB or CBC mode using the
 * given symmetric key.
 *
 * The key may be given as a string of bytes or a byte buffer.
 *
 * To start encrypting call start() on the cipher with an iv and optional
 * output buffer.
 *
 * @param key the symmetric key to use.
 *
 * @return the cipher.
 */_.rc2.createEncryptionCipher=function(e,t){return ex(e,t,!0)},/**
 * Creates an RC2 cipher object to decrypt data in ECB or CBC mode using the
 * given symmetric key. The output will be stored in the 'output' member
 * of the returned cipher.
 *
 * The key and iv may be given as a string of bytes or a byte buffer.
 * The cipher is initialized to use 128 effective key bits.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 *
 * @return the cipher.
 */_.rc2.startDecrypting=function(e,t,r){var i=_.rc2.createDecryptionCipher(e,128);return i.start(t,r),i},/**
 * Creates an RC2 cipher object to decrypt data in ECB or CBC mode using the
 * given symmetric key.
 *
 * The key may be given as a string of bytes or a byte buffer.
 *
 * To start decrypting call start() on the cipher with an iv and optional
 * output buffer.
 *
 * @param key the symmetric key to use.
 *
 * @return the cipher.
 */_.rc2.createDecryptionCipher=function(e,t){return ex(e,t,!1)};var _=(b("hnKIb"),b("hnKIb"));// (public) Constructor
function eV(e,t,r){this.data=[],null!=e&&("number"==typeof e?this.fromNumber(e,t,r):null==t&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}// return new, unset BigInteger
function eK(){return new eV(null)}// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function eM(e,t,r,i,n,a){for(var s=16383&t,o=t>>14;--a>=0;){var l=16383&this.data[e],c=this.data[e++]>>14,u=o*l+c*s;n=((l=s*l+((16383&u)<<14)+r.data[i]+n)>>28)+(u>>14)+o*c,r.data[i++]=268435455&l}return n}_.jsbn=_.jsbn||{},_.jsbn.BigInteger=eV,"undefined"==typeof navigator?(eV.prototype.am=eM,o=28):"Microsoft Internet Explorer"==navigator.appName?(eV.prototype.am=// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function(e,t,r,i,n,a){for(var s=32767&t,o=t>>15;--a>=0;){var l=32767&this.data[e],c=this.data[e++]>>15,u=o*l+c*s;n=((l=s*l+((32767&u)<<15)+r.data[i]+(1073741823&n))>>>30)+(u>>>15)+o*c+(n>>>30),r.data[i++]=1073741823&l}return n},o=30):"Netscape"!=navigator.appName?(eV.prototype.am=// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function(e,t,r,i,n,a){for(;--a>=0;){var s=t*this.data[e++]+r.data[i]+n;n=Math.floor(s/67108864),r.data[i++]=67108863&s}return n},o=26):(eV.prototype.am=eM,o=28),eV.prototype.DB=o,eV.prototype.DM=(1<<o)-1,eV.prototype.DV=1<<o,eV.prototype.FV=4503599627370496,eV.prototype.F1=52-o,eV.prototype.F2=2*o-52;var eF=[];for(c=0,l=48;c<=9;++c)eF[l++]=c;for(c=10,l=97;c<36;++c)eF[l++]=c;for(c=10,l=65;c<36;++c)eF[l++]=c;function ej(e){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)}function eH(e,t){var r=eF[e.charCodeAt(t)];return null==r?-1:r}// return bigint initialized to value
function eq(e){var t=eK();return t.fromInt(e),t}// returns bit length of the integer x
function eG(e){var t,r=1;return 0!=(t=e>>>16)&&(e=t,r+=16),0!=(t=e>>8)&&(e=t,r+=8),0!=(t=e>>4)&&(e=t,r+=4),0!=(t=e>>2)&&(e=t,r+=2),0!=(t=e>>1)&&(e=t,r+=1),r}// Modular reduction using "classic" algorithm
function ez(e){this.m=e}// Montgomery reduction
function eQ(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}//(public) this & a
function e$(e,t){return e&t}//(public) this | a
function eW(e,t){return e|t}//(public) this ^ a
function eY(e,t){return e^t}//(public) this & ~a
function eX(e,t){return e&~t}//A "null" reducer
function eZ(){}function eJ(e){return e}//Barrett modular reduction
function e1(e){// setup Barrett
this.r2=eK(),this.q3=eK(),eV.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}ez.prototype.convert=function(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e},ez.prototype.revert=function(e){return e},ez.prototype.reduce=function(e){e.divRemTo(this.m,null,e)},ez.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},ez.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},eQ.prototype.convert=// xR mod m
function(e){var t=eK();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(eV.ZERO)>0&&this.m.subTo(t,t),t},eQ.prototype.revert=// x/R mod m
function(e){var t=eK();return e.copyTo(t),this.reduce(t),t},eQ.prototype.reduce=// x = x/R mod m (HAC 14.32)
function(e){for(;e.t<=this.mt2;)e.data[e.t++]=0;for(var t=0;t<this.m.t;++t){// faster way of calculating u0 = x.data[i]*mp mod DV
var r=32767&e.data[t],i=r*this.mpl+((r*this.mph+(e.data[t]>>15)*this.mpl&this.um)<<15)&e.DM;// propagate carry
for(// use am to combine the multiply-shift-add into one call
r=t+this.m.t,e.data[r]+=this.m.am(0,i,e,t,0,this.m.t);e.data[r]>=e.DV;)e.data[r]-=e.DV,e.data[++r]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)},eQ.prototype.mulTo=// r = "xy/R mod m"; x,y != r
function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},eQ.prototype.sqrTo=// r = "x^2/R mod m"; x != r
function(e,t){e.squareTo(t),this.reduce(t)},// protected
eV.prototype.copyTo=// (protected) copy this to r
function(e){for(var t=this.t-1;t>=0;--t)e.data[t]=this.data[t];e.t=this.t,e.s=this.s},eV.prototype.fromInt=// (protected) set from integer value x, -DV <= x < DV
function(e){this.t=1,this.s=e<0?-1:0,e>0?this.data[0]=e:e<-1?this.data[0]=e+this.DV:this.t=0},eV.prototype.fromString=// (protected) set from string and radix
function(e,t){if(16==t)r=4;else if(8==t)r=3;else if(256==t)r=8;// byte array
else if(2==t)r=1;else if(32==t)r=5;else if(4==t)r=2;else{this.fromRadix(e,t);return}this.t=0,this.s=0;for(var r,i=e.length,n=!1,a=0;--i>=0;){var s=8==r?255&e[i]:eH(e,i);if(s<0){"-"==e.charAt(i)&&(n=!0);continue}n=!1,0==a?this.data[this.t++]=s:a+r>this.DB?(this.data[this.t-1]|=(s&(1<<this.DB-a)-1)<<a,this.data[this.t++]=s>>this.DB-a):this.data[this.t-1]|=s<<a,(a+=r)>=this.DB&&(a-=this.DB)}8==r&&(128&e[0])!=0&&(this.s=-1,a>0&&(this.data[this.t-1]|=(1<<this.DB-a)-1<<a)),this.clamp(),n&&eV.ZERO.subTo(this,this)},eV.prototype.clamp=// (protected) clamp off excess high words
function(){for(var e=this.s&this.DM;this.t>0&&this.data[this.t-1]==e;)--this.t},eV.prototype.dlShiftTo=// (protected) r = this << n*DB
function(e,t){var r;for(r=this.t-1;r>=0;--r)t.data[r+e]=this.data[r];for(r=e-1;r>=0;--r)t.data[r]=0;t.t=this.t+e,t.s=this.s},eV.prototype.drShiftTo=// (protected) r = this >> n*DB
function(e,t){for(var r=e;r<this.t;++r)t.data[r-e]=this.data[r];t.t=Math.max(this.t-e,0),t.s=this.s},eV.prototype.lShiftTo=// (protected) r = this << n
function(e,t){var r,i=e%this.DB,n=this.DB-i,a=(1<<n)-1,s=Math.floor(e/this.DB),o=this.s<<i&this.DM;for(r=this.t-1;r>=0;--r)t.data[r+s+1]=this.data[r]>>n|o,o=(this.data[r]&a)<<i;for(r=s-1;r>=0;--r)t.data[r]=0;t.data[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()},eV.prototype.rShiftTo=// (protected) r = this >> n
function(e,t){t.s=this.s;var r=Math.floor(e/this.DB);if(r>=this.t){t.t=0;return}var i=e%this.DB,n=this.DB-i,a=(1<<i)-1;t.data[0]=this.data[r]>>i;for(var s=r+1;s<this.t;++s)t.data[s-r-1]|=(this.data[s]&a)<<n,t.data[s-r]=this.data[s]>>i;i>0&&(t.data[this.t-r-1]|=(this.s&a)<<n),t.t=this.t-r,t.clamp()},eV.prototype.subTo=// (protected) r = this - a
function(e,t){for(var r=0,i=0,n=Math.min(e.t,this.t);r<n;)i+=this.data[r]-e.data[r],t.data[r++]=i&this.DM,i>>=this.DB;if(e.t<this.t){for(i-=e.s;r<this.t;)i+=this.data[r],t.data[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<e.t;)i-=e.data[r],t.data[r++]=i&this.DM,i>>=this.DB;i-=e.s}t.s=i<0?-1:0,i<-1?t.data[r++]=this.DV+i:i>0&&(t.data[r++]=i),t.t=r,t.clamp()},eV.prototype.multiplyTo=// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function(e,t){var r=this.abs(),i=e.abs(),n=r.t;for(t.t=n+i.t;--n>=0;)t.data[n]=0;for(n=0;n<i.t;++n)t.data[n+r.t]=r.am(0,i.data[n],t,n,0,r.t);t.s=0,t.clamp(),this.s!=e.s&&eV.ZERO.subTo(t,t)},eV.prototype.squareTo=// (protected) r = this^2, r != this (HAC 14.16)
function(e){for(var t=this.abs(),r=e.t=2*t.t;--r>=0;)e.data[r]=0;for(r=0;r<t.t-1;++r){var i=t.am(r,t.data[r],e,2*r,0,1);(e.data[r+t.t]+=t.am(r+1,2*t.data[r],e,2*r+1,i,t.t-r-1))>=t.DV&&(e.data[r+t.t]-=t.DV,e.data[r+t.t+1]=1)}e.t>0&&(e.data[e.t-1]+=t.am(r,t.data[r],e,2*r,0,1)),e.s=0,e.clamp()},eV.prototype.divRemTo=// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function(e,t,r){var i=e.abs();if(!(i.t<=0)){var n=this.abs();if(n.t<i.t){null!=t&&t.fromInt(0),null!=r&&this.copyTo(r);return}null==r&&(r=eK());var a=eK(),s=this.s,o=e.s,l=this.DB-eG(i.data[i.t-1]);l>0?(i.lShiftTo(l,a),n.lShiftTo(l,r)):(i.copyTo(a),n.copyTo(r));var c=a.t,u=a.data[c-1];if(0!=u){var h=u*(1<<this.F1)+(c>1?a.data[c-2]>>this.F2:0),f=this.FV/h,p=(1<<this.F1)/h,d=1<<this.F2,g=r.t,y=g-c,m=null==t?eK():t;for(a.dlShiftTo(y,m),r.compareTo(m)>=0&&(r.data[r.t++]=1,r.subTo(m,r)),eV.ONE.dlShiftTo(c,m),m.subTo(a,a);a.t<c;)a.data[a.t++]=0;for(;--y>=0;){// Estimate quotient digit
var v=r.data[--g]==u?this.DM:Math.floor(r.data[g]*f+(r.data[g-1]+d)*p);if((r.data[g]+=a.am(0,v,r,y,0,c))<v)for(a.dlShiftTo(y,m),r.subTo(m,r);r.data[g]<--v;)r.subTo(m,r)}null!=t&&(r.drShiftTo(c,t),s!=o&&eV.ZERO.subTo(t,t)),r.t=c,r.clamp(),l>0&&r.rShiftTo(l,r),s<0&&eV.ZERO.subTo(r,r)}}},eV.prototype.invDigit=// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function(){if(this.t<1)return 0;var e=this.data[0];if((1&e)==0)return 0;var t=3&e;// y == 1/x mod 2^2
// we really want the negative inverse, and -DV < y < DV
return(// last step - calculate inverse mod DV directly;
// assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this.DV)%this.DV)>0?this.DV-t:-t)},eV.prototype.isEven=// (protected) true iff this is even
function(){return(this.t>0?1&this.data[0]:this.s)==0},eV.prototype.exp=// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function(e,t){if(e>4294967295||e<1)return eV.ONE;var r=eK(),i=eK(),n=t.convert(this),a=eG(e)-1;for(n.copyTo(r);--a>=0;)if(t.sqrTo(r,i),(e&1<<a)>0)t.mulTo(i,n,r);else{var s=r;r=i,i=s}return t.revert(r)},// public
eV.prototype.toString=// (public) return string representation in given radix
function(e){if(this.s<0)return"-"+this.negate().toString(e);if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else{if(4!=e)return this.toRadix(e);t=2}var t,r,i=(1<<t)-1,n=!1,a="",s=this.t,o=this.DB-s*this.DB%t;if(s-- >0)for(o<this.DB&&(r=this.data[s]>>o)>0&&(n=!0,a=ej(r));s>=0;)o<t?r=(this.data[s]&(1<<o)-1)<<t-o|this.data[--s]>>(o+=this.DB-t):(r=this.data[s]>>(o-=t)&i,o<=0&&(o+=this.DB,--s)),r>0&&(n=!0),n&&(a+=ej(r));return n?a:"0"},eV.prototype.negate=// (public) -this
function(){var e=eK();return eV.ZERO.subTo(this,e),e},eV.prototype.abs=// (public) |this|
function(){return this.s<0?this.negate():this},eV.prototype.compareTo=// (public) return + if this > a, - if this < a, 0 if equal
function(e){var t=this.s-e.s;if(0!=t)return t;var r=this.t;if(0!=(t=r-e.t))return this.s<0?-t:t;for(;--r>=0;)if(0!=(t=this.data[r]-e.data[r]))return t;return 0},eV.prototype.bitLength=// (public) return the number of bits in "this"
function(){return this.t<=0?0:this.DB*(this.t-1)+eG(this.data[this.t-1]^this.s&this.DM)},eV.prototype.mod=// (public) this mod a
function(e){var t=eK();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(eV.ZERO)>0&&e.subTo(t,t),t},eV.prototype.modPowInt=// (public) this^e % m, 0 <= e < 2^32
function(e,t){var r;return r=e<256||t.isEven()?new ez(t):new eQ(t),this.exp(e,r)},// "constants"
eV.ZERO=eq(0),eV.ONE=eq(1),eZ.prototype.convert=eJ,eZ.prototype.revert=eJ,eZ.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r)},eZ.prototype.sqrTo=function(e,t){e.squareTo(t)},e1.prototype.convert=function(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(0>e.compareTo(this.m))return e;var t=eK();return e.copyTo(t),this.reduce(t),t},e1.prototype.revert=function(e){return e},e1.prototype.reduce=//x = x mod m (HAC 14.42)
function(e){for(e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);0>e.compareTo(this.r2);)e.dAddOffset(1,this.m.t+1);for(e.subTo(this.r2,e);e.compareTo(this.m)>=0;)e.subTo(this.m,e)},e1.prototype.mulTo=//r = x*y mod m; x,y != r
function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},e1.prototype.sqrTo=//r = x^2 mod m; x != r
function(e,t){e.squareTo(t),this.reduce(t)};var e0=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],e2=67108864/e0[e0.length-1];//protected
eV.prototype.chunkSize=//(protected) return x s.t. r^x < DV
function(e){return Math.floor(Math.LN2*this.DB/Math.log(e))},eV.prototype.toRadix=//(protected) convert to radix string
function(e){if(null==e&&(e=10),0==this.signum()||e<2||e>36)return"0";var t=this.chunkSize(e),r=Math.pow(e,t),i=eq(r),n=eK(),a=eK(),s="";for(this.divRemTo(i,n,a);n.signum()>0;)s=(r+a.intValue()).toString(e).substr(1)+s,n.divRemTo(i,n,a);return a.intValue().toString(e)+s},eV.prototype.fromRadix=//(protected) convert from radix string
function(e,t){this.fromInt(0),null==t&&(t=10);for(var r=this.chunkSize(t),i=Math.pow(t,r),n=!1,a=0,s=0,o=0;o<e.length;++o){var l=eH(e,o);if(l<0){"-"==e.charAt(o)&&0==this.signum()&&(n=!0);continue}s=t*s+l,++a>=r&&(this.dMultiply(i),this.dAddOffset(s,0),a=0,s=0)}a>0&&(this.dMultiply(Math.pow(t,a)),this.dAddOffset(s,0)),n&&eV.ZERO.subTo(this,this)},eV.prototype.fromNumber=//(protected) alternate constructor
function(e,t,r){if("number"==typeof t){// new BigInteger(int,int,RNG)
if(e<2)this.fromInt(1);else for(this.fromNumber(e,r),this.testBit(e-1)||this.bitwiseTo(eV.ONE.shiftLeft(e-1),eW,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(eV.ONE.shiftLeft(e-1),this)}else{// new BigInteger(int,RNG)
var i=[],n=7&e;i.length=(e>>3)+1,t.nextBytes(i),n>0?i[0]&=(1<<n)-1:i[0]=0,this.fromString(i,256)}},eV.prototype.bitwiseTo=//(protected) r = this op a (bitwise)
function(e,t,r){var i,n,a=Math.min(e.t,this.t);for(i=0;i<a;++i)r.data[i]=t(this.data[i],e.data[i]);if(e.t<this.t){for(n=e.s&this.DM,i=a;i<this.t;++i)r.data[i]=t(this.data[i],n);r.t=this.t}else{for(n=this.s&this.DM,i=a;i<e.t;++i)r.data[i]=t(n,e.data[i]);r.t=e.t}r.s=t(this.s,e.s),r.clamp()},eV.prototype.changeBit=//(protected) this op (1<<n)
function(e,t){var r=eV.ONE.shiftLeft(e);return this.bitwiseTo(r,t,r),r},eV.prototype.addTo=//(protected) r = this + a
function(e,t){for(var r=0,i=0,n=Math.min(e.t,this.t);r<n;)i+=this.data[r]+e.data[r],t.data[r++]=i&this.DM,i>>=this.DB;if(e.t<this.t){for(i+=e.s;r<this.t;)i+=this.data[r],t.data[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<e.t;)i+=e.data[r],t.data[r++]=i&this.DM,i>>=this.DB;i+=e.s}t.s=i<0?-1:0,i>0?t.data[r++]=i:i<-1&&(t.data[r++]=this.DV+i),t.t=r,t.clamp()},eV.prototype.dMultiply=//(protected) this *= n, this >= 0, 1 < n < DV
function(e){this.data[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()},eV.prototype.dAddOffset=//(protected) this += n << w words, this >= 0
function(e,t){if(0!=e){for(;this.t<=t;)this.data[this.t++]=0;for(this.data[t]+=e;this.data[t]>=this.DV;)this.data[t]-=this.DV,++t>=this.t&&(this.data[this.t++]=0),++this.data[t]}},eV.prototype.multiplyLowerTo=//(protected) r = lower n words of "this * a", a.t <= n
//"this" should be the larger one if appropriate.
function(e,t,r){var i,n=Math.min(this.t+e.t,t);for(r.s=0,r.t=n;n>0;)r.data[--n]=0;for(i=r.t-this.t;n<i;++n)r.data[n+this.t]=this.am(0,e.data[n],r,n,0,this.t);for(i=Math.min(e.t,t);n<i;++n)this.am(0,e.data[n],r,n,0,t-n);r.clamp()},eV.prototype.multiplyUpperTo=//(protected) r = "this * a" without lower n words, n > 0
//"this" should be the larger one if appropriate.
function(e,t,r){--t;var i=r.t=this.t+e.t-t;for(r.s=0;--i>=0;)r.data[i]=0;for(i=Math.max(t-this.t,0);i<e.t;++i)r.data[this.t+i-t]=this.am(t-i,e.data[i],r,0,0,this.t+i-t);r.clamp(),r.drShiftTo(1,r)},eV.prototype.modInt=//(protected) this % n, n < 2^26
function(e){if(e<=0)return 0;var t=this.DV%e,r=this.s<0?e-1:0;if(this.t>0){if(0==t)r=this.data[0]%e;else for(var i=this.t-1;i>=0;--i)r=(t*r+this.data[i])%e}return r},eV.prototype.millerRabin=//(protected) true if probably prime (HAC 4.24, Miller-Rabin)
function(e){var t,r=this.subtract(eV.ONE),i=r.getLowestSetBit();if(i<=0)return!1;for(var n=r.shiftRight(i),a={// x is an array to fill with bytes
nextBytes:function(e){for(var t=0;t<e.length;++t)e[t]=Math.floor(256*Math.random())}},s=0;s<e;++s){// select witness 'a' at random from between 1 and n1
do t=new eV(this.bitLength(),a);while(0>=t.compareTo(eV.ONE)||t.compareTo(r)>=0)var o=t.modPow(n,this);if(0!=o.compareTo(eV.ONE)&&0!=o.compareTo(r)){for(var l=1;l++<i&&0!=o.compareTo(r);)if(0==(o=o.modPowInt(2,this)).compareTo(eV.ONE))return!1;if(0!=o.compareTo(r))return!1}}return!0},//public
eV.prototype.clone=// jsbn2 lib
//Copyright (c) 2005-2009  Tom Wu
//All Rights Reserved.
//See "LICENSE" for details (See jsbn.js for LICENSE).
//Extended JavaScript BN functions, required for RSA private ops.
//Version 1.1: new BigInteger("0", 10) returns "proper" zero
//(public)
function(){var e=eK();return this.copyTo(e),e},eV.prototype.intValue=//(public) return value as integer
function(){if(this.s<0){if(1==this.t)return this.data[0]-this.DV;if(0==this.t)return -1}else if(1==this.t)return this.data[0];else if(0==this.t)return 0;// assumes 16 < DB < 32
return(this.data[1]&(1<<32-this.DB)-1)<<this.DB|this.data[0]},eV.prototype.byteValue=//(public) return value as byte
function(){return 0==this.t?this.s:this.data[0]<<24>>24},eV.prototype.shortValue=//(public) return value as short (assumes DB>=16)
function(){return 0==this.t?this.s:this.data[0]<<16>>16},eV.prototype.signum=//(public) 0 if this == 0, 1 if this > 0
function(){return this.s<0?-1:this.t<=0||1==this.t&&this.data[0]<=0?0:1},eV.prototype.toByteArray=//(public) convert to bigendian byte array
function(){var e=this.t,t=[];t[0]=this.s;var r,i=this.DB-e*this.DB%8,n=0;if(e-- >0)for(i<this.DB&&(r=this.data[e]>>i)!=(this.s&this.DM)>>i&&(t[n++]=r|this.s<<this.DB-i);e>=0;)i<8?r=(this.data[e]&(1<<i)-1)<<8-i|this.data[--e]>>(i+=this.DB-8):(r=this.data[e]>>(i-=8)&255,i<=0&&(i+=this.DB,--e)),(128&r)!=0&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(t[n++]=r);return t},eV.prototype.equals=function(e){return 0==this.compareTo(e)},eV.prototype.min=function(e){return 0>this.compareTo(e)?this:e},eV.prototype.max=function(e){return this.compareTo(e)>0?this:e},eV.prototype.and=function(e){var t=eK();return this.bitwiseTo(e,e$,t),t},eV.prototype.or=function(e){var t=eK();return this.bitwiseTo(e,eW,t),t},eV.prototype.xor=function(e){var t=eK();return this.bitwiseTo(e,eY,t),t},eV.prototype.andNot=function(e){var t=eK();return this.bitwiseTo(e,eX,t),t},eV.prototype.not=//(public) ~this
function(){for(var e=eK(),t=0;t<this.t;++t)e.data[t]=this.DM&~this.data[t];return e.t=this.t,e.s=~this.s,e},eV.prototype.shiftLeft=//(public) this << n
function(e){var t=eK();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t},eV.prototype.shiftRight=//(public) this >> n
function(e){var t=eK();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t},eV.prototype.getLowestSetBit=//(public) returns index of lowest 1-bit (or -1 if none)
function(){for(var e=0;e<this.t;++e)if(0!=this.data[e])return e*this.DB+//return index of lowest 1-bit in x, x < 2^31
function(e){if(0==e)return -1;var t=0;return(65535&e)==0&&(e>>=16,t+=16),(255&e)==0&&(e>>=8,t+=8),(15&e)==0&&(e>>=4,t+=4),(3&e)==0&&(e>>=2,t+=2),(1&e)==0&&++t,t}(this.data[e]);return this.s<0?this.t*this.DB:-1},eV.prototype.bitCount=//(public) return number of set bits
function(){for(var e=0,t=this.s&this.DM,r=0;r<this.t;++r)e+=//return number of 1 bits in x
function(e){for(var t=0;0!=e;)e&=e-1,++t;return t}(this.data[r]^t);return e},eV.prototype.testBit=//(public) true iff nth bit is set
function(e){var t=Math.floor(e/this.DB);return t>=this.t?0!=this.s:(this.data[t]&1<<e%this.DB)!=0},eV.prototype.setBit=//(public) this | (1<<n)
function(e){return this.changeBit(e,eW)},eV.prototype.clearBit=//(public) this & ~(1<<n)
function(e){return this.changeBit(e,eX)},eV.prototype.flipBit=//(public) this ^ (1<<n)
function(e){return this.changeBit(e,eY)},eV.prototype.add=//(public) this + a
function(e){var t=eK();return this.addTo(e,t),t},eV.prototype.subtract=//(public) this - a
function(e){var t=eK();return this.subTo(e,t),t},eV.prototype.multiply=//(public) this * a
function(e){var t=eK();return this.multiplyTo(e,t),t},eV.prototype.divide=//(public) this / a
function(e){var t=eK();return this.divRemTo(e,t,null),t},eV.prototype.remainder=//(public) this % a
function(e){var t=eK();return this.divRemTo(e,null,t),t},eV.prototype.divideAndRemainder=//(public) [this/a,this%a]
function(e){var t=eK(),r=eK();return this.divRemTo(e,t,r),[t,r]},eV.prototype.modPow=//(public) this^e % m (HAC 14.85)
function(e,t){var r,i,n=e.bitLength(),a=eq(1);if(n<=0)return a;r=n<18?1:n<48?3:n<144?4:n<768?5:6,i=n<8?new ez(t):t.isEven()?new e1(t):new eQ(t);// precomputation
var s=[],o=3,l=r-1,c=(1<<r)-1;if(s[1]=i.convert(this),r>1){var u=eK();for(i.sqrTo(s[1],u);o<=c;)s[o]=eK(),i.mulTo(u,s[o-2],s[o]),o+=2}var h,f,p=e.t-1,d=!0,g=eK();for(n=eG(e.data[p])-1;p>=0;){for(n>=l?h=e.data[p]>>n-l&c:(h=(e.data[p]&(1<<n+1)-1)<<l-n,p>0&&(h|=e.data[p-1]>>this.DB+n-l)),o=r;(1&h)==0;)h>>=1,--o;if((n-=o)<0&&(n+=this.DB,--p),d)s[h].copyTo(a),d=!1;else{for(;o>1;)i.sqrTo(a,g),i.sqrTo(g,a),o-=2;o>0?i.sqrTo(a,g):(f=a,a=g,g=f),i.mulTo(g,s[h],a)}for(;p>=0&&(e.data[p]&1<<n)==0;)i.sqrTo(a,g),f=a,a=g,g=f,--n<0&&(n=this.DB-1,--p)}return i.revert(a)},eV.prototype.modInverse=//(public) 1/this % m (HAC 14.61)
function(e){var t=e.isEven();if(this.isEven()&&t||0==e.signum())return eV.ZERO;for(var r=e.clone(),i=this.clone(),n=eq(1),a=eq(0),s=eq(0),o=eq(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),t?(n.isEven()&&a.isEven()||(n.addTo(this,n),a.subTo(e,a)),n.rShiftTo(1,n)):a.isEven()||a.subTo(e,a),a.rShiftTo(1,a);for(;i.isEven();)i.rShiftTo(1,i),t?(s.isEven()&&o.isEven()||(s.addTo(this,s),o.subTo(e,o)),s.rShiftTo(1,s)):o.isEven()||o.subTo(e,o),o.rShiftTo(1,o);r.compareTo(i)>=0?(r.subTo(i,r),t&&n.subTo(s,n),a.subTo(o,a)):(i.subTo(r,i),t&&s.subTo(n,s),o.subTo(a,o))}return 0!=i.compareTo(eV.ONE)?eV.ZERO:o.compareTo(e)>=0?o.subtract(e):0>o.signum()&&(o.addTo(e,o),0>o.signum())?o.add(e):o},eV.prototype.pow=//(public) this^e
function(e){return this.exp(e,new eZ)},eV.prototype.gcd=//(public) gcd(this,a) (HAC 14.54)
function(e){var t=this.s<0?this.negate():this.clone(),r=e.s<0?e.negate():e.clone();if(0>t.compareTo(r)){var i=t;t=r,r=i}var n=t.getLowestSetBit(),a=r.getLowestSetBit();if(a<0)return t;for(n<a&&(a=n),a>0&&(t.rShiftTo(a,t),r.rShiftTo(a,r));t.signum()>0;)(n=t.getLowestSetBit())>0&&t.rShiftTo(n,t),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),t.compareTo(r)>=0?(t.subTo(r,t),t.rShiftTo(1,t)):(r.subTo(t,r),r.rShiftTo(1,r));return a>0&&r.lShiftTo(a,r),r},eV.prototype.isProbablePrime=//(public) test primality with certainty >= 1-.5^t
function(e){var t,r=this.abs();if(1==r.t&&r.data[0]<=e0[e0.length-1]){for(t=0;t<e0.length;++t)if(r.data[0]==e0[t])return!0;return!1}if(r.isEven())return!1;for(t=1;t<e0.length;){for(var i=e0[t],n=t+1;n<e0.length&&i<e2;)i*=e0[n++];for(i=r.modInt(i);t<n;)if(i%e0[t++]==0)return!1}return r.millerRabin(e)};//BigInteger(int signum, byte[] magnitude)
//double doubleValue()
//float floatValue()
//int hashCode()
//long longValue()
//static BigInteger valueOf(long val)
var _=(b("hnKIb"),b("hnKIb"));b("df6Hw");var e6=_.sha1=_.sha1||{};_.md.sha1=_.md.algorithms.sha1=e6,/**
 * Creates a SHA-1 message digest object.
 *
 * @return a message digest object.
 */e6.create=function(){e3||(e5=String.fromCharCode(128)+_.util.fillString("\x00",64),// now initialized
e3=!0);// SHA-1 state contains five 32-bit integers
var e=null,t=_.util.createBuffer(),r=Array(80),i={algorithm:"sha1",blockLength:64,digestLength:20,// 56-bit length of message so far (does not including padding)
messageLength:0,// true message length
fullMessageLength:null,// size of message length in bytes
messageLengthSize:8};return(/**
   * Starts the digest.
   *
   * @return this digest object.
   */i.start=function(){// up to 56-bit message length for convenience
i.messageLength=0,// full message length (set md.messageLength64 for backwards-compatibility)
i.fullMessageLength=i.messageLength64=[];for(var r=i.messageLengthSize/4,n=0;n<r;++n)i.fullMessageLength.push(0);return t=_.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878,h4:3285377520},i},// start digest automatically for first time
i.start(),/**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */i.update=function(n,a){"utf8"===a&&(n=_.util.encodeUtf8(n));// update message length
var s=n.length;i.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var o=i.fullMessageLength.length-1;o>=0;--o)i.fullMessageLength[o]+=s[1],s[1]=s[0]+(i.fullMessageLength[o]/4294967296>>>0),i.fullMessageLength[o]=i.fullMessageLength[o]>>>0,s[0]=s[1]/4294967296>>>0;return(// add bytes to input buffer
t.putBytes(n),// process bytes
e4(e,r,t),(t.read>2048||0===t.length())&&t.compact(),i)},/**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */i.digest=function(){/* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-1 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. *//* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */var n,a=_.util.createBuffer();a.putBytes(t.bytes());// add padding for overflow blockSize - overflow
// _padding starts with 1 byte with first bit is set (byte value 128), then
// there may be up to (blockSize - 1) other pad bytes
var s=i.fullMessageLength[i.fullMessageLength.length-1]+i.messageLengthSize&i.blockLength-1;a.putBytes(e5.substr(0,i.blockLength-s));for(var o=8*i.fullMessageLength[0],l=0;l<i.fullMessageLength.length-1;++l)o+=(n=8*i.fullMessageLength[l+1])/4294967296>>>0,a.putInt32(o>>>0),o=n>>>0;a.putInt32(o);var c={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4};e4(c,r,a);var u=_.util.createBuffer();return u.putInt32(c.h0),u.putInt32(c.h1),u.putInt32(c.h2),u.putInt32(c.h3),u.putInt32(c.h4),u},i)};// sha-1 padding bytes not initialized yet
var e5=null,e3=!1;/**
 * Updates a SHA-1 state with the given byte buffer.
 *
 * @param s the SHA-1 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */function e4(e,t,r){for(var i,n,a,s,o,l,c,u=r.length();u>=64;){// round 1
for(c=0,// the w array will be populated with sixteen 32-bit big-endian words
// and then extended into 80 32-bit words according to SHA-1 algorithm
// and for 32-79 using Max Locktyukhin's optimization
// initialize hash value for this chunk
n=e.h0,a=e.h1,s=e.h2,o=e.h3,l=e.h4;c<16;++c)i=r.getInt32(),t[c]=i,i=(n<<5|n>>>27)+(o^a&(s^o))+l+1518500249+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;for(;c<20;++c)i=(i=t[c-3]^t[c-8]^t[c-14]^t[c-16])<<1|i>>>31,t[c]=i,i=(n<<5|n>>>27)+(o^a&(s^o))+l+1518500249+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;// round 2
for(;c<32;++c)i=(i=t[c-3]^t[c-8]^t[c-14]^t[c-16])<<1|i>>>31,t[c]=i,i=(n<<5|n>>>27)+(a^s^o)+l+1859775393+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;for(;c<40;++c)i=(i=t[c-6]^t[c-16]^t[c-28]^t[c-32])<<2|i>>>30,t[c]=i,i=(n<<5|n>>>27)+(a^s^o)+l+1859775393+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;// round 3
for(;c<60;++c)i=(i=t[c-6]^t[c-16]^t[c-28]^t[c-32])<<2|i>>>30,t[c]=i,i=(n<<5|n>>>27)+(a&s|o&(a^s))+l+2400959708+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;// round 4
for(;c<80;++c)i=(i=t[c-6]^t[c-16]^t[c-28]^t[c-32])<<2|i>>>30,t[c]=i,i=(n<<5|n>>>27)+(a^s^o)+l+3395469782+i,l=o,o=s,// `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
s=(a<<30|a>>>2)>>>0,a=n,n=i;// update hash state
e.h0=e.h0+n|0,e.h1=e.h1+a|0,e.h2=e.h2+s|0,e.h3=e.h3+o|0,e.h4=e.h4+l|0,u-=64}}// shortcut for PKCS#1 API
var e8=_.pkcs1=_.pkcs1||{};function e7(e,t,r){// default to SHA-1 message digest
r||(r=_.md.sha1.create());for(var i="",n=Math.ceil(t/r.digestLength),a=0;a<n;++a){var s=String.fromCharCode(a>>24&255,a>>16&255,a>>8&255,255&a);r.start(),r.update(e+s),i+=r.digest().getBytes()}return i.substring(0,t)}/**
 * Encode the given RSAES-OAEP message (M) using key, with optional label (L)
 * and seed.
 *
 * This method does not perform RSA encryption, it only encodes the message
 * using RSAES-OAEP.
 *
 * @param key the RSA key to use.
 * @param message the message to encode.
 * @param options the options to use:
 *          label an optional label to use.
 *          seed the seed to use.
 *          md the message digest object to use, undefined for SHA-1.
 *          mgf1 optional mgf1 parameters:
 *            md the message digest object to use for MGF1.
 *
 * @return the encoded message bytes.
 */e8.encode_rsa_oaep=function(e,t,r){"string"==typeof r?(i=r,n=arguments[3]||void 0,a=arguments[4]||void 0):r&&(i=r.label||void 0,n=r.seed||void 0,a=r.md||void 0,r.mgf1&&r.mgf1.md&&(s=r.mgf1.md)),a?a.start():a=_.md.sha1.create(),s||(s=a);// compute length in bytes and check output
var i,n,a,s,o=Math.ceil(e.n.bitLength()/8),l=o-2*a.digestLength-2;if(t.length>l){var c=Error("RSAES-OAEP input message length is too long.");throw c.length=t.length,c.maxLength=l,c}i||(i=""),a.update(i,"raw");for(var u=a.digest(),h="",f=l-t.length,p=0;p<f;p++)h+="\x00";var d=u.getBytes()+h+"\x01"+t;if(n){if(n.length!==a.digestLength){var c=Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");throw c.seedLength=n.length,c.digestLength=a.digestLength,c}}else n=_.random.getBytes(a.digestLength);var g=e7(n,o-a.digestLength-1,s),y=_.util.xorBytes(d,g,d.length),m=e7(y,a.digestLength,s);// return encoded message
return"\x00"+_.util.xorBytes(n,m,n.length)+y},/**
 * Decode the given RSAES-OAEP encoded message (EM) using key, with optional
 * label (L).
 *
 * This method does not perform RSA decryption, it only decodes the message
 * using RSAES-OAEP.
 *
 * @param key the RSA key to use.
 * @param em the encoded message to decode.
 * @param options the options to use:
 *          label an optional label to use.
 *          md the message digest object to use for OAEP, undefined for SHA-1.
 *          mgf1 optional mgf1 parameters:
 *            md the message digest object to use for MGF1.
 *
 * @return the decoded message bytes.
 */e8.decode_rsa_oaep=function(e,t,r){"string"==typeof r?(i=r,n=arguments[3]||void 0):r&&(i=r.label||void 0,n=r.md||void 0,r.mgf1&&r.mgf1.md&&(a=r.mgf1.md));// compute length in bytes
var i,n,a,s=Math.ceil(e.n.bitLength()/8);if(t.length!==s){var o=Error("RSAES-OAEP encoded message length is invalid.");throw o.length=t.length,o.expectedLength=s,o}if(void 0===n?n=_.md.sha1.create():n.start(),a||(a=n),s<2*n.digestLength+2)throw Error("RSAES-OAEP key is too short for the hash function.");i||(i=""),n.update(i,"raw");// constant time check lHash vs lHashPrime
for(var l=n.digest().getBytes(),c=t.charAt(0),u=t.substring(1,n.digestLength+1),h=t.substring(1+n.digestLength),f=e7(h,n.digestLength,a),p=e7(_.util.xorBytes(u,f,u.length),s-n.digestLength-1,a),d=_.util.xorBytes(h,p,h.length),g=d.substring(0,n.digestLength),o="\x00"!==c,y=0;y<n.digestLength;++y)o|=l.charAt(y)!==g.charAt(y);for(var m=1,v=n.digestLength,C=n.digestLength;C<d.length;C++){var E=d.charCodeAt(C),b=1&E^1;o|=E&(m?65534:0),// latch in_ps to zero after we find 0x1
m&=b,v+=m}if(o||1!==d.charCodeAt(v))throw Error("Invalid RSAES-OAEP padding.");return d.substring(v+1)};var _=b("hnKIb");if(!function(){// forge.prime already defined
if(_.prime){_.prime;return}/* PRIME API */var e=_.prime=_.prime||{},t=_.jsbn.BigInteger,r=[6,4,2,4,2,4,6,2],i=new t(null);i.fromInt(30);var n=function(e,t){return e|t};function a(e,t,i,n){// initialize random number
var a,o=s(e,t),l=(a=o.bitLength())<=100?27:a<=150?18:a<=200?15:a<=250?12:a<=300?9:a<=350?8:a<=400?7:a<=500?6:a<=600?5:a<=800?4:a<=1250?3:2;"millerRabinTests"in i&&(l=i.millerRabinTests);// find prime nearest to 'num' for maxBlockTime ms
// 10 ms gives 5ms of leeway for other calculations before dropping
// below 60fps (1000/60 == 16.67), but in reality, the number will
// likely be higher due to an 'atomic' big int modPow
var c=10;"maxBlockTime"in i&&(c=i.maxBlockTime),function e(t,i,n,a,o,l,c){var u=+new Date;do{// do primality test
if(t.bitLength()>i&&(t=s(i,n)),t.isProbablePrime(o))return c(null,t);// get next potential prime
t.dAddOffset(r[a++%8],0)}while(l<0||+new Date-u<l)// keep trying later
_.util.setImmediate(function(){e(t,i,n,a,o,l,c)})}(o,e,t,0,l,c,n)}/**
 * Generates a random number using the given number of bits and RNG.
 *
 * @param bits the number of bits for the number.
 * @param rng the random number generator to use.
 *
 * @return the random number.
 */function s(e,r){var a=new t(e,r),s=e-1;return a.testBit(s)||a.bitwiseTo(t.ONE.shiftLeft(s),n,a),// align number on 30k+1 boundary
a.dAddOffset(31-a.mod(i).byteValue(),0),a}/**
 * Generates a random probable prime with the given number of bits.
 *
 * Alternative algorithms can be specified by name as a string or as an
 * object with custom options like so:
 *
 * {
 *   name: 'PRIMEINC',
 *   options: {
 *     maxBlockTime: <the maximum amount of time to block the main
 *       thread before allowing I/O other JS to run>,
 *     millerRabinTests: <the number of miller-rabin tests to run>,
 *     workerScript: <the worker script URL>,
 *     workers: <the number of web workers (if supported) to use,
 *       -1 to use estimated cores minus one>.
 *     workLoad: the size of the work load, ie: number of possible prime
 *       numbers for each web worker to check per work assignment,
 *       (default: 100).
 *   }
 * }
 *
 * @param bits the number of bits for the prime number.
 * @param options the options to use.
 *          [algorithm] the algorithm to use (default: 'PRIMEINC').
 *          [prng] a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync".
 *
 * @return callback(err, num) called once the operation completes.
 */e.generateProbablePrime=function(e,r,i){"function"==typeof r&&(i=r,r={});// default to PRIMEINC algorithm
var n,o,l,c=(r=r||{}).algorithm||"PRIMEINC";"string"==typeof c&&(c={name:c}),c.options=c.options||{};// create prng with api that matches BigInteger secure random
var u=r.prng||_.random;if("PRIMEINC"===c.name)return n={// x is an array to fill with bytes
nextBytes:function(e){for(var t=u.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}},o=c.options,l=i,"workers"in o?// NOTE: This algorithm is indeterminate in nature because workers
// run in parallel looking at different segments of numbers. Even if this
// algorithm is run twice with the same input from a predictable RNG, it
// may produce different outputs.
function(e,r,i,n){// web workers unavailable
if("undefined"==typeof Worker)return a(e,r,i,n);// initialize random number
var o=s(e,r),l=i.workers,c=i.workLoad||100,u=30*c/8,h=i.workerScript||"forge/prime.worker.js";if(-1===l)return _.util.estimateCores(function(e,t){e&&(t=2),l=t-1,f()});function f(){// require at least 1 worker
l=Math.max(1,l);for(var i=[],a=0;a<l;++a)i[a]=new Worker(h);// listen for requests from workers and assign ranges to find prime
for(var f=l,a=0;a<l;++a)i[a].addEventListener("message",d);// TODO: consider optimizing by starting workers outside getPrime() ...
// note that in order to clean up they will have to be made internally
// asynchronous which may actually be slower
// start workers immediately
var p=!1;function d(a){// ignore message, prime already found
if(!p){--f;var l=a.data;if(l.found){// terminate all workers
for(var h=0;h<i.length;++h)i[h].terminate();return p=!0,n(null,new t(l.prime,16))}o.bitLength()>e&&(o=s(e,r));// assign new range to check
var d=o.toString(16);// start prime search
a.target.postMessage({hex:d,workLoad:c}),o.dAddOffset(u,0)}}}f()}(e,n,o,l):a(e,n,o,l);throw Error("Invalid prime generation algorithm: "+c.name)}}(),void 0===e9)var e9=_.jsbn.BigInteger;var te=_.util.isNodejs?b("4AFFV"):null,tt=_.asn1,tr=_.util;/*
 * RSA encryption and decryption, see RFC 2313.
 */_.pki=_.pki||{},_.pki.rsa=_.rsa=_.rsa||{};var ti=_.pki,tn=[6,4,2,4,2,4,6,2],ta={// PrivateKeyInfo
name:"PrivateKeyInfo",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{// Version (INTEGER)
name:"PrivateKeyInfo.version",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{// privateKeyAlgorithm
name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:tt.Class.UNIVERSAL,type:tt.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{// PrivateKey
name:"PrivateKeyInfo",tagClass:tt.Class.UNIVERSAL,type:tt.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},ts={// RSAPrivateKey
name:"RSAPrivateKey",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{// Version (INTEGER)
name:"RSAPrivateKey.version",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{// modulus (n)
name:"RSAPrivateKey.modulus",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyModulus"},{// publicExponent (e)
name:"RSAPrivateKey.publicExponent",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyPublicExponent"},{// privateExponent (d)
name:"RSAPrivateKey.privateExponent",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyPrivateExponent"},{// prime1 (p)
name:"RSAPrivateKey.prime1",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyPrime1"},{// prime2 (q)
name:"RSAPrivateKey.prime2",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyPrime2"},{// exponent1 (d mod (p-1))
name:"RSAPrivateKey.exponent1",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyExponent1"},{// exponent2 (d mod (q-1))
name:"RSAPrivateKey.exponent2",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyExponent2"},{// coefficient ((inverse of q) mod p)
name:"RSAPrivateKey.coefficient",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"privateKeyCoefficient"}]},to={// RSAPublicKey
name:"RSAPublicKey",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{// modulus (n)
name:"RSAPublicKey.modulus",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"publicKeyModulus"},{// publicExponent (e)
name:"RSAPublicKey.exponent",tagClass:tt.Class.UNIVERSAL,type:tt.Type.INTEGER,constructed:!1,capture:"publicKeyExponent"}]},tl=_.pki.rsa.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:tt.Class.UNIVERSAL,type:tt.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{// subjectPublicKey
name:"SubjectPublicKeyInfo.subjectPublicKey",tagClass:tt.Class.UNIVERSAL,type:tt.Type.BITSTRING,constructed:!1,value:[{// RSAPublicKey
name:"SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"rsaPublicKey"}]}]},tc={name:"DigestInfo",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm",tagClass:tt.Class.UNIVERSAL,type:tt.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm.algorithmIdentifier",tagClass:tt.Class.UNIVERSAL,type:tt.Type.OID,constructed:!1,capture:"algorithmIdentifier"},{// NULL paramters
name:"DigestInfo.DigestAlgorithm.parameters",tagClass:tt.Class.UNIVERSAL,type:tt.Type.NULL,// captured only to check existence for md2 and md5
capture:"parameters",optional:!0,constructed:!1}]},{// digest
name:"DigestInfo.digest",tagClass:tt.Class.UNIVERSAL,type:tt.Type.OCTETSTRING,constructed:!1,capture:"digest"}]},tu=function(e){if(e.algorithm in ti.oids)t=ti.oids[e.algorithm];else{var t,r=Error("Unknown message digest algorithm.");throw r.algorithm=e.algorithm,r}var i=tt.oidToDer(t).getBytes(),n=tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[]),a=tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[]);a.value.push(tt.create(tt.Class.UNIVERSAL,tt.Type.OID,!1,i)),a.value.push(tt.create(tt.Class.UNIVERSAL,tt.Type.NULL,!1,""));var s=tt.create(tt.Class.UNIVERSAL,tt.Type.OCTETSTRING,!1,e.digest().getBytes());// encode digest info
return n.value.push(a),n.value.push(s),tt.toDer(n).getBytes()},th=function(e,t,r){if(r)return e.modPow(t.e,t.n);if(!t.p||!t.q)return e.modPow(t.d,t.n);t.dP||(t.dP=t.d.mod(t.p.subtract(e9.ONE))),t.dQ||(t.dQ=t.d.mod(t.q.subtract(e9.ONE))),t.qInv||(t.qInv=t.q.modInverse(t.p));do i=new e9(_.util.bytesToHex(_.random.getBytes(t.n.bitLength()/8)),16);while(i.compareTo(t.n)>=0||!i.gcd(t.n).equals(e9.ONE))// xp must be larger than xq to avoid signed bit usage
for(// calculate xp and xq
var i,n=(e=e.multiply(i.modPow(t.e,t.n)).mod(t.n)).mod(t.p).modPow(t.dP,t.p),a=e.mod(t.q).modPow(t.dQ,t.q);0>n.compareTo(a);)n=n.add(t.p);return n.subtract(a).multiply(t.qInv).mod(t.p).multiply(t.q).add(a).multiply(i.modInverse(t.n)).mod(t.n)};/**
 * Encodes a message using PKCS#1 v1.5 padding.
 *
 * @param m the message to encode.
 * @param key the RSA key to use.
 * @param bt the block type to use, i.e. either 0x01 (for signing) or 0x02
 *          (for encryption).
 *
 * @return the padded byte buffer.
 */function tf(e,t,r){var i,n=_.util.createBuffer(),a=Math.ceil(t.n.bitLength()/8);/* use PKCS#1 v1.5 padding */if(e.length>a-11){var s=Error("Message is too long for PKCS#1 v1.5 padding.");throw s.length=e.length,s.max=a-11,s}/* A block type BT, a padding string PS, and the data D shall be
    formatted into an octet string EB, the encryption block:

    EB = 00 || BT || PS || 00 || D

    The block type BT shall be a single octet indicating the structure of
    the encryption block. For this version of the document it shall have
    value 00, 01, or 02. For a private-key operation, the block type
    shall be 00 or 01. For a public-key operation, it shall be 02.

    The padding string PS shall consist of k-3-||D|| octets. For block
    type 00, the octets shall have value 00; for block type 01, they
    shall have value FF; and for block type 02, they shall be
    pseudorandomly generated and nonzero. This makes the length of the
    encryption block EB equal to k. */// build the encryption block
n.putByte(0),n.putByte(r);// create the padding
var o=a-3-e.length;// private key op
if(0===r||1===r){i=0===r?0:255;for(var l=0;l<o;++l)n.putByte(i)}else // pad with random non-zero values
for(;o>0;){for(var c=0,u=_.random.getBytes(o),l=0;l<o;++l)0===(i=u.charCodeAt(l))?++c:n.putByte(i);o=c}return(// zero followed by message
n.putByte(0),n.putBytes(e),n)}/**
 * Decodes a message using PKCS#1 v1.5 padding.
 *
 * @param em the message to decode.
 * @param key the RSA key to use.
 * @param pub true if the key is a public key, false if it is private.
 * @param ml the message length, if specified.
 *
 * @return the decoded bytes.
 */function tp(e,t,r,i){// get the length of the modulus in bytes
var n=Math.ceil(t.n.bitLength()/8),a=_.util.createBuffer(e),s=a.getByte(),o=a.getByte();if(0!==s||r&&0!==o&&1!==o||!r&&2!=o||r&&0===o&&void 0===i)throw Error("Encryption block is invalid.");var l=0;if(0===o){// check all padding bytes for 0x00
l=n-3-i;for(var c=0;c<l;++c)if(0!==a.getByte())throw Error("Encryption block is invalid.")}else if(1===o)for(// find the first byte that isn't 0xFF, should be after all padding
l=0;a.length()>1;){if(255!==a.getByte()){--a.read;break}++l}else if(2===o)for(// look for 0x00 byte
l=0;a.length()>1;){if(0===a.getByte()){--a.read;break}++l}if(0!==a.getByte()||l!==n-3-a.length())throw Error("Encryption block is invalid.");return a.getBytes()}/**
 * Converts a positive BigInteger into 2's-complement big-endian bytes.
 *
 * @param b the big integer to convert.
 *
 * @return the bytes.
 */function td(e){// prepend 0x00 if first byte >= 0x80
var t=e.toString(16);t[0]>="8"&&(t="00"+t);var r=_.util.hexToBytes(t);return(// ensure integer is minimally-encoded
r.length>1&&// leading 0x00 for positive integer
(0===r.charCodeAt(0)&&(128&r.charCodeAt(1))==0||// leading 0xFF for negative integer
255===r.charCodeAt(0)&&(128&r.charCodeAt(1))==128)?r.substr(1):r)}/**
 * Performs feature detection on the Node crypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */function tg(e){return _.util.isNodejs&&"function"==typeof te[e]}/**
 * Performs feature detection on the SubtleCrypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */function ty(e){return void 0!==tr.globalScope&&"object"==typeof tr.globalScope.crypto&&"object"==typeof tr.globalScope.crypto.subtle&&"function"==typeof tr.globalScope.crypto.subtle[e]}/**
 * Performs feature detection on the deprecated Microsoft Internet Explorer
 * outdated SubtleCrypto interface. This function should only be used after
 * checking for the modern, standard SubtleCrypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */function tm(e){return void 0!==tr.globalScope&&"object"==typeof tr.globalScope.msCrypto&&"object"==typeof tr.globalScope.msCrypto.subtle&&"function"==typeof tr.globalScope.msCrypto.subtle[e]}function tv(e){for(var t=_.util.hexToBytes(e.toString(16)),r=new Uint8Array(t.length),i=0;i<t.length;++i)r[i]=t.charCodeAt(i);return r}if(/**
 * NOTE: THIS METHOD IS DEPRECATED, use 'sign' on a private key object or
 * 'encrypt' on a public key object instead.
 *
 * Performs RSA encryption.
 *
 * The parameter bt controls whether to put padding bytes before the
 * message passed in. Set bt to either true or false to disable padding
 * completely (in order to handle e.g. EMSA-PSS encoding seperately before),
 * signaling whether the encryption operation is a public key operation
 * (i.e. encrypting data) or not, i.e. private key operation (data signing).
 *
 * For PKCS#1 v1.5 padding pass in the block type to use, i.e. either 0x01
 * (for signing) or 0x02 (for encryption). The key operation mode (private
 * or public) is derived from this flag in that case).
 *
 * @param m the message to encrypt as a byte string.
 * @param key the RSA key to use.
 * @param bt for PKCS#1 v1.5 padding, the block type to use
 *   (0x01 for private key, 0x02 for public),
 *   to disable padding: true = public key, false = private key.
 *
 * @return the encrypted bytes as a string.
 */ti.rsa.encrypt=function(e,t,r){var i,n=r,a=Math.ceil(t.n.bitLength()/8);!1!==r&&!0!==r?(// legacy, default to PKCS#1 v1.5 padding
n=2===r,i=tf(e,t,r)):(i=_.util.createBuffer()).putBytes(e);for(// convert y into the encrypted data byte string, if y is shorter in
// bytes than k, then prepend zero bytes to fill up ed
// FIXME: hex conversion inefficient, get BigInteger w/byte strings
var s=th(new e9(i.toHex(),16),t,n).toString(16),o=_.util.createBuffer(),l=a-Math.ceil(s.length/2);l>0;)o.putByte(0),--l;return o.putBytes(_.util.hexToBytes(s)),o.getBytes()},/**
 * NOTE: THIS METHOD IS DEPRECATED, use 'decrypt' on a private key object or
 * 'verify' on a public key object instead.
 *
 * Performs RSA decryption.
 *
 * The parameter ml controls whether to apply PKCS#1 v1.5 padding
 * or not.  Set ml = false to disable padding removal completely
 * (in order to handle e.g. EMSA-PSS later on) and simply pass back
 * the RSA encryption block.
 *
 * @param ed the encrypted data to decrypt in as a byte string.
 * @param key the RSA key to use.
 * @param pub true for a public key operation, false for private.
 * @param ml the message length, if known, false to disable padding.
 *
 * @return the decrypted message as a byte string.
 */ti.rsa.decrypt=function(e,t,r,i){// get the length of the modulus in bytes
var n=Math.ceil(t.n.bitLength()/8);// error if the length of the encrypted data ED is not k
if(e.length!==n){var a=Error("Encrypted message length is invalid.");throw a.length=e.length,a.expected=n,a}// convert encrypted data into a big integer
// FIXME: hex conversion inefficient, get BigInteger w/byte strings
var s=new e9(_.util.createBuffer(e).toHex(),16);// y must be less than the modulus or it wasn't the result of
// a previous mod operation (encryption) using that modulus
if(s.compareTo(t.n)>=0)throw Error("Encrypted message is invalid.");for(// create the encryption block, if x is shorter in bytes than k, then
// prepend zero bytes to fill up eb
// FIXME: hex conversion inefficient, get BigInteger w/byte strings
var o=th(s,t,r).toString(16),l=_.util.createBuffer(),c=n-Math.ceil(o.length/2);c>0;)l.putByte(0),--c;return(l.putBytes(_.util.hexToBytes(o)),!1!==i)?tp(l.getBytes(),t,r):l.getBytes()},/**
 * Creates an RSA key-pair generation state object. It is used to allow
 * key-generation to be performed in steps. It also allows for a UI to
 * display progress updates.
 *
 * @param bits the size for the private key in bits, defaults to 2048.
 * @param e the public exponent to use, defaults to 65537 (0x10001).
 * @param [options] the options to use.
 *          prng a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync".
 *          algorithm the algorithm to use (default: 'PRIMEINC').
 *
 * @return the state object to use to generate the key-pair.
 */ti.rsa.createKeyPairGenerationState=function(e,t,r){"string"==typeof e&&(e=parseInt(e,10)),e=e||2048;var i,n=// create prng with api that matches BigInteger secure random
(r=r||{}).prng||_.random,a=r.algorithm||"PRIMEINC";if("PRIMEINC"===a)(i={algorithm:a,state:0,bits:e,rng:{// x is an array to fill with bytes
nextBytes:function(e){for(var t=n.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}},eInt:t||65537,e:new e9(null),p:null,q:null,qBits:e>>1,pBits:e-(e>>1),pqState:0,num:null,keys:null}).e.fromInt(i.eInt);else throw Error("Invalid key generation algorithm: "+a);return i},/**
 * Attempts to runs the key-generation algorithm for at most n seconds
 * (approximately) using the given state. When key-generation has completed,
 * the keys will be stored in state.keys.
 *
 * To use this function to update a UI while generating a key or to prevent
 * causing browser lockups/warnings, set "n" to a value other than 0. A
 * simple pattern for generating a key and showing a progress indicator is:
 *
 * var state = pki.rsa.createKeyPairGenerationState(2048);
 * var step = function() {
 *   // step key-generation, run algorithm for 100 ms, repeat
 *   if(!forge.pki.rsa.stepKeyPairGenerationState(state, 100)) {
 *     setTimeout(step, 1);
 *   } else {
 *     // key-generation complete
 *     // TODO: turn off progress indicator here
 *     // TODO: use the generated key-pair in "state.keys"
 *   }
 * };
 * // TODO: turn on progress indicator here
 * setTimeout(step, 0);
 *
 * @param state the state to use.
 * @param n the maximum number of milliseconds to run the algorithm for, 0
 *          to run the algorithm to completion.
 *
 * @return true if the key-generation completed, false if not.
 */ti.rsa.stepKeyPairGenerationState=function(e,t){// set default algorithm if not set
"algorithm"in e||(e.algorithm="PRIMEINC");// TODO: migrate step-based prime generation code to forge.prime
// TODO: abstract as PRIMEINC algorithm
// do key generation (based on Tom Wu's rsa.js, see jsbn.js license)
// with some minor optimizations and designed to run in steps
// local state vars
var r,i=new e9(null);i.fromInt(30);for(var n=0,a=function(e,t){return e|t},s=+new Date,o=0;null===e.keys&&(t<=0||o<t);){// generate p or q
if(0===e.state){/* Note: All primes are of the form:

        30k+i, for i < 30 and gcd(30, i)=1, where there are 8 values for i

        When we generate a random number, we always align it at 30k + 1. Each
        time the number is determined not to be prime we add to get to the
        next 'i', eg: if the number was at 30k + 1 we add 6. */var l,c=null===e.p?e.pBits:e.qBits,u=c-1;// get a random number
0===e.pqState?(e.num=new e9(c,e.rng),e.num.testBit(u)||e.num.bitwiseTo(e9.ONE.shiftLeft(u),a,e.num),// align number on 30k+1 boundary
e.num.dAddOffset(31-e.num.mod(i).byteValue(),0),n=0,++e.pqState):1===e.pqState?e.num.bitLength()>c?e.pqState=0:e.num.isProbablePrime((l=e.num.bitLength())<=100?27:l<=150?18:l<=200?15:l<=250?12:l<=300?9:l<=350?8:l<=400?7:l<=500?6:l<=600?5:l<=800?4:l<=1250?3:2)?++e.pqState:e.num.dAddOffset(tn[n++%8],0):2===e.pqState?e.pqState=0===e.num.subtract(e9.ONE).gcd(e.e).compareTo(e9.ONE)?3:0:3===e.pqState&&(// store p or q
e.pqState=0,null===e.p?e.p=e.num:e.q=e.num,null!==e.p&&null!==e.q&&++e.state,e.num=null)}else if(1===e.state)0>e.p.compareTo(e.q)&&(e.num=e.p,e.p=e.q,e.q=e.num),++e.state;else if(2===e.state)// compute phi: (p - 1)(q - 1) (Euler's totient function)
e.p1=e.p.subtract(e9.ONE),e.q1=e.q.subtract(e9.ONE),e.phi=e.p1.multiply(e.q1),++e.state;else if(3===e.state)// ensure e and phi are coprime
0===e.phi.gcd(e.e).compareTo(e9.ONE)?++e.state:(// phi and e aren't coprime, so generate a new p and q
e.p=null,e.q=null,e.state=0);else if(4===e.state)// create n, ensure n is has the right number of bits
e.n=e.p.multiply(e.q),e.n.bitLength()===e.bits?++e.state:(// failed, get new q
e.q=null,e.state=0);else if(5===e.state){// set keys
var h=e.e.modInverse(e.phi);e.keys={privateKey:ti.rsa.setPrivateKey(e.n,e.e,h,e.p,e.q,h.mod(e.p1),h.mod(e.q1),e.q.modInverse(e.p)),publicKey:ti.rsa.setPublicKey(e.n,e.e)}}o+=// update timing
(r=+new Date)-s,s=r}return null!==e.keys},/**
 * Generates an RSA public-private key pair in a single call.
 *
 * To generate a key-pair in steps (to allow for progress updates and to
 * prevent blocking or warnings in slow browsers) then use the key-pair
 * generation state functions.
 *
 * To generate a key-pair asynchronously (either through web-workers, if
 * available, or by breaking up the work on the main thread), pass a
 * callback function.
 *
 * @param [bits] the size for the private key in bits, defaults to 2048.
 * @param [e] the public exponent to use, defaults to 65537.
 * @param [options] options for key-pair generation, if given then 'bits'
 *            and 'e' must *not* be given:
 *          bits the size for the private key in bits, (default: 2048).
 *          e the public exponent to use, (default: 65537 (0x10001)).
 *          workerScript the worker script URL.
 *          workers the number of web workers (if supported) to use,
 *            (default: 2).
 *          workLoad the size of the work load, ie: number of possible prime
 *            numbers for each web worker to check per work assignment,
 *            (default: 100).
 *          prng a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync". Disables use of native APIs.
 *          algorithm the algorithm to use (default: 'PRIMEINC').
 * @param [callback(err, keypair)] called once the operation completes.
 *
 * @return an object with privateKey and publicKey properties.
 */ti.rsa.generateKeyPair=function(e,t,r,i){// use native code if permitted, available, and parameters are acceptable
if(1==arguments.length?"object"==typeof e?(r=e,e=void 0):"function"==typeof e&&(i=e,e=void 0):2==arguments.length?"number"==typeof e?"function"==typeof t?(i=t,t=void 0):"number"!=typeof t&&(r=t,t=void 0):(r=e,i=t,e=void 0,t=void 0):3==arguments.length&&("number"==typeof t?"function"==typeof r&&(i=r,r=void 0):(i=r,r=t,t=void 0)),r=r||{},void 0===e&&(e=r.bits||2048),void 0===t&&(t=r.e||65537),!_.options.usePureJavaScript&&!r.prng&&e>=256&&e<=16384&&(65537===t||3===t)){if(i){// try native async
if(tg("generateKeyPair"))return te.generateKeyPair("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}},function(e,t,r){if(e)return i(e);i(null,{privateKey:ti.privateKeyFromPem(r),publicKey:ti.publicKeyFromPem(t)})});if(ty("generateKey")&&ty("exportKey"))return tr.globalScope.crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:tv(t),hash:{name:"SHA-256"}},!0,["sign","verify"]).then(function(e){return tr.globalScope.crypto.subtle.exportKey("pkcs8",e.privateKey);// avoiding catch(function(err) {...}) to support IE <= 8
}).then(void 0,function(e){i(e)}).then(function(e){if(e){var t=ti.privateKeyFromAsn1(tt.fromDer(_.util.createBuffer(e)));i(null,{privateKey:t,publicKey:ti.setRsaPublicKey(t.n,t.e)})}});if(tm("generateKey")&&tm("exportKey")){var n=tr.globalScope.msCrypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:tv(t),hash:{name:"SHA-256"}},!0,["sign","verify"]);n.oncomplete=function(e){var t=e.target.result,r=tr.globalScope.msCrypto.subtle.exportKey("pkcs8",t.privateKey);r.oncomplete=function(e){var t=e.target.result,r=ti.privateKeyFromAsn1(tt.fromDer(_.util.createBuffer(t)));i(null,{privateKey:r,publicKey:ti.setRsaPublicKey(r.n,r.e)})},r.onerror=function(e){i(e)}},n.onerror=function(e){i(e)};return}}else if(tg("generateKeyPairSync")){var a=te.generateKeyPairSync("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}});return{privateKey:ti.privateKeyFromPem(a.privateKey),publicKey:ti.publicKeyFromPem(a.publicKey)}}}// use JavaScript implementation
var s=ti.rsa.createKeyPairGenerationState(e,t,r);if(!i)return ti.rsa.stepKeyPairGenerationState(s,0),s.keys;/**
 * Runs the key-generation algorithm asynchronously, either in the background
 * via Web Workers, or using the main thread and setImmediate.
 *
 * @param state the key-pair generation state.
 * @param [options] options for key-pair generation:
 *          workerScript the worker script URL.
 *          workers the number of web workers (if supported) to use,
 *            (default: 2, -1 to use estimated cores minus one).
 *          workLoad the size of the work load, ie: number of possible prime
 *            numbers for each web worker to check per work assignment,
 *            (default: 100).
 * @param callback(err, keypair) called once the operation completes.
 */(function(e,t,r){"function"==typeof t&&(r=t,t={});var i={algorithm:{name:(t=t||{}).algorithm||"PRIMEINC",options:{workers:t.workers||2,workLoad:t.workLoad||100,workerScript:t.workerScript}}};function n(){// find p and then q (done in series to simplify)
a(e.pBits,function(t,i){return t?r(t):(e.p=i,null!==e.q)?s(t,e.q):void a(e.qBits,s)})}function a(e,t){_.prime.generateProbablePrime(e,i,t)}function s(t,i){if(t)return r(t);// ensure p is larger than q (swap them if not)
if(// set q
e.q=i,0>e.p.compareTo(e.q)){var o=e.p;e.p=e.q,e.q=o}// ensure p is coprime with e
if(0!==e.p.subtract(e9.ONE).gcd(e.e).compareTo(e9.ONE)){e.p=null,n();return}// ensure q is coprime with e
if(0!==e.q.subtract(e9.ONE).gcd(e.e).compareTo(e9.ONE)){e.q=null,a(e.qBits,s);return}// ensure e and phi are coprime
if(// compute phi: (p - 1)(q - 1) (Euler's totient function)
e.p1=e.p.subtract(e9.ONE),e.q1=e.q.subtract(e9.ONE),e.phi=e.p1.multiply(e.q1),0!==e.phi.gcd(e.e).compareTo(e9.ONE)){// phi and e aren't coprime, so generate a new p and q
e.p=e.q=null,n();return}if(// create n, ensure n is has the right number of bits
e.n=e.p.multiply(e.q),e.n.bitLength()!==e.bits){// failed, get new q
e.q=null,a(e.qBits,s);return}// set keys
var l=e.e.modInverse(e.phi);e.keys={privateKey:ti.rsa.setPrivateKey(e.n,e.e,l,e.p,e.q,l.mod(e.p1),l.mod(e.q1),e.q.modInverse(e.p)),publicKey:ti.rsa.setPublicKey(e.n,e.e)},r(null,e.keys)}"prng"in t&&(i.prng=t.prng),n()})(s,r,i)},/**
 * Sets an RSA public key from BigIntegers modulus and exponent.
 *
 * @param n the modulus.
 * @param e the exponent.
 *
 * @return the public key.
 */ti.setRsaPublicKey=ti.rsa.setPublicKey=function(e,t){var r={n:e,e:t};return(/**
   * Encrypts the given data with this public key. Newer applications
   * should use the 'RSA-OAEP' decryption scheme, 'RSAES-PKCS1-V1_5' is for
   * legacy applications.
   *
   * @param data the byte string to encrypt.
   * @param scheme the encryption scheme to use:
   *          'RSAES-PKCS1-V1_5' (default),
   *          'RSA-OAEP',
   *          'RAW', 'NONE', or null to perform raw RSA encryption,
   *          an object with an 'encode' property set to a function
   *          with the signature 'function(data, key)' that returns
   *          a binary-encoded string representing the encoded data.
   * @param schemeOptions any scheme-specific options.
   *
   * @return the encrypted byte string.
   */r.encrypt=function(e,t,i){if("string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5"),"RSAES-PKCS1-V1_5"===t)t={encode:function(e,t,r){return tf(e,t,2).getBytes()}};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={encode:function(e,t){return _.pkcs1.encode_rsa_oaep(t,e,i)}};else if(-1!==["RAW","NONE","NULL",null].indexOf(t))t={encode:function(e){return e}};else if("string"==typeof t)throw Error('Unsupported encryption scheme: "'+t+'".');// do scheme-based encoding then rsa encryption
var n=t.encode(e,r,!0);return ti.rsa.encrypt(n,r,!0)},/**
   * Verifies the given signature against the given digest.
   *
   * PKCS#1 supports multiple (currently two) signature schemes:
   * RSASSA-PKCS1-V1_5 and RSASSA-PSS.
   *
   * By default this implementation uses the "old scheme", i.e.
   * RSASSA-PKCS1-V1_5, in which case once RSA-decrypted, the
   * signature is an OCTET STRING that holds a DigestInfo.
   *
   * DigestInfo ::= SEQUENCE {
   *   digestAlgorithm DigestAlgorithmIdentifier,
   *   digest Digest
   * }
   * DigestAlgorithmIdentifier ::= AlgorithmIdentifier
   * Digest ::= OCTET STRING
   *
   * To perform PSS signature verification, provide an instance
   * of Forge PSS object as the scheme parameter.
   *
   * @param digest the message digest hash to compare against the signature,
   *          as a binary-encoded string.
   * @param signature the signature to verify, as a binary-encoded string.
   * @param scheme signature verification scheme to use:
   *          'RSASSA-PKCS1-V1_5' or undefined for RSASSA PKCS#1 v1.5,
   *          a Forge PSS object for RSASSA-PSS,
   *          'NONE' or null for none, DigestInfo will not be expected, but
   *            PKCS#1 v1.5 padding will still be used.
   * @param options optional verify options
   *          _parseAllDigestBytes testing flag to control parsing of all
   *            digest bytes. Unsupported and not for general usage.
   *            (default: true)
   *
   * @return true if the signature was verified, false if not.
   */r.verify=function(e,t,i,n){"string"==typeof i?i=i.toUpperCase():void 0===i&&(i="RSASSA-PKCS1-V1_5"),void 0===n&&(n={_parseAllDigestBytes:!0}),"_parseAllDigestBytes"in n||(n._parseAllDigestBytes=!0),"RSASSA-PKCS1-V1_5"===i?i={verify:function(e,t){// remove padding
t=tp(t,r,!0);// d is ASN.1 BER-encoded DigestInfo
var i=tt.fromDer(t,{parseAllBytes:n._parseAllDigestBytes}),a={},s=[];if(!tt.validate(i,tc,a,s)){var o=Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");throw o.errors=s,o}// check hash algorithm identifier
// see PKCS1-v1-5DigestAlgorithms in RFC 8017
// FIXME: add support to vaidator for strict value choices
var l=tt.derToOid(a.algorithmIdentifier);if(!(l===_.oids.md2||l===_.oids.md5||l===_.oids.sha1||l===_.oids.sha224||l===_.oids.sha256||l===_.oids.sha384||l===_.oids.sha512||l===_.oids["sha512-224"]||l===_.oids["sha512-256"])){var o=Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");throw o.oid=l,o}// special check for md2 and md5 that NULL parameters exist
if((l===_.oids.md2||l===_.oids.md5)&&!("parameters"in a))throw Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");// compare the given digest to the decrypted one
return e===a.digest}}:("NONE"===i||"NULL"===i||null===i)&&(i={verify:function(e,t){return e===// remove padding
(t=tp(t,r,!0))}});// do rsa decryption w/o any decoding, then verify -- which does decoding
var a=ti.rsa.decrypt(t,r,!0,!1);return i.verify(e,a,r.n.bitLength())},r)},/**
 * Sets an RSA private key from BigIntegers modulus, exponent, primes,
 * prime exponents, and modular multiplicative inverse.
 *
 * @param n the modulus.
 * @param e the public exponent.
 * @param d the private exponent ((inverse of e) mod n).
 * @param p the first prime.
 * @param q the second prime.
 * @param dP exponent1 (d mod (p-1)).
 * @param dQ exponent2 (d mod (q-1)).
 * @param qInv ((inverse of q) mod p)
 *
 * @return the private key.
 */ti.setRsaPrivateKey=ti.rsa.setPrivateKey=function(e,t,r,i,n,a,s,o){var l={n:e,e:t,d:r,p:i,q:n,dP:a,dQ:s,qInv:o};return(/**
   * Decrypts the given data with this private key. The decryption scheme
   * must match the one used to encrypt the data.
   *
   * @param data the byte string to decrypt.
   * @param scheme the decryption scheme to use:
   *          'RSAES-PKCS1-V1_5' (default),
   *          'RSA-OAEP',
   *          'RAW', 'NONE', or null to perform raw RSA decryption.
   * @param schemeOptions any scheme-specific options.
   *
   * @return the decrypted byte string.
   */l.decrypt=function(e,t,r){"string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5");// do rsa decryption w/o any decoding
var i=ti.rsa.decrypt(e,l,!1,!1);if("RSAES-PKCS1-V1_5"===t)t={decode:tp};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={decode:function(e,t){return _.pkcs1.decode_rsa_oaep(t,e,r)}};else if(-1!==["RAW","NONE","NULL",null].indexOf(t))t={decode:function(e){return e}};else throw Error('Unsupported encryption scheme: "'+t+'".');// decode according to scheme
return t.decode(i,l,!1)},/**
   * Signs the given digest, producing a signature.
   *
   * PKCS#1 supports multiple (currently two) signature schemes:
   * RSASSA-PKCS1-V1_5 and RSASSA-PSS.
   *
   * By default this implementation uses the "old scheme", i.e.
   * RSASSA-PKCS1-V1_5. In order to generate a PSS signature, provide
   * an instance of Forge PSS object as the scheme parameter.
   *
   * @param md the message digest object with the hash to sign.
   * @param scheme the signature scheme to use:
   *          'RSASSA-PKCS1-V1_5' or undefined for RSASSA PKCS#1 v1.5,
   *          a Forge PSS object for RSASSA-PSS,
   *          'NONE' or null for none, DigestInfo will not be used but
   *            PKCS#1 v1.5 padding will still be used.
   *
   * @return the signature as a byte string.
   */l.sign=function(e,t){/* Note: The internal implementation of RSA operations is being
      transitioned away from a PKCS#1 v1.5 hard-coded scheme. Some legacy
      code like the use of an encoding block identifier 'bt' will eventually
      be removed. */// private key operation
var r=!1;"string"==typeof t&&(t=t.toUpperCase()),void 0===t||"RSASSA-PKCS1-V1_5"===t?(t={encode:tu},r=1):("NONE"===t||"NULL"===t||null===t)&&(t={encode:function(){return e}},r=1);// encode and then encrypt
var i=t.encode(e,l.n.bitLength());return ti.rsa.encrypt(i,l,r)},l)},/**
 * Wraps an RSAPrivateKey ASN.1 object in an ASN.1 PrivateKeyInfo object.
 *
 * @param rsaKey the ASN.1 RSAPrivateKey.
 *
 * @return the ASN.1 PrivateKeyInfo.
 */ti.wrapRsaPrivateKey=function(e){// PrivateKeyInfo
return tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[// version (0)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,tt.integerToDer(0).getBytes()),// privateKeyAlgorithm
tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[tt.create(tt.Class.UNIVERSAL,tt.Type.OID,!1,tt.oidToDer(ti.oids.rsaEncryption).getBytes()),tt.create(tt.Class.UNIVERSAL,tt.Type.NULL,!1,"")]),// PrivateKey
tt.create(tt.Class.UNIVERSAL,tt.Type.OCTETSTRING,!1,tt.toDer(e).getBytes())])},/**
 * Converts a private key from an ASN.1 object.
 *
 * @param obj the ASN.1 representation of a PrivateKeyInfo containing an
 *          RSAPrivateKey or an RSAPrivateKey.
 *
 * @return the private key.
 */ti.privateKeyFromAsn1=function(e){// get PrivateKeyInfo
var t,r,i,n,a,s,o,l,c={},u=[];if(tt.validate(e,ta,c,u)&&(e=tt.fromDer(_.util.createBuffer(c.privateKey))),// get RSAPrivateKey
c={},u=[],!tt.validate(e,ts,c,u)){var h=Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");throw h.errors=u,h}// set private key
return t=_.util.createBuffer(c.privateKeyModulus).toHex(),r=_.util.createBuffer(c.privateKeyPublicExponent).toHex(),i=_.util.createBuffer(c.privateKeyPrivateExponent).toHex(),n=_.util.createBuffer(c.privateKeyPrime1).toHex(),a=_.util.createBuffer(c.privateKeyPrime2).toHex(),s=_.util.createBuffer(c.privateKeyExponent1).toHex(),o=_.util.createBuffer(c.privateKeyExponent2).toHex(),l=_.util.createBuffer(c.privateKeyCoefficient).toHex(),ti.setRsaPrivateKey(new e9(t,16),new e9(r,16),new e9(i,16),new e9(n,16),new e9(a,16),new e9(s,16),new e9(o,16),new e9(l,16))},/**
 * Converts a private key to an ASN.1 RSAPrivateKey.
 *
 * @param key the private key.
 *
 * @return the ASN.1 representation of an RSAPrivateKey.
 */ti.privateKeyToAsn1=ti.privateKeyToRSAPrivateKey=function(e){// RSAPrivateKey
return tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[// version (0 = only 2 primes, 1 multiple primes)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,tt.integerToDer(0).getBytes()),// modulus (n)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.n)),// publicExponent (e)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.e)),// privateExponent (d)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.d)),// privateKeyPrime1 (p)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.p)),// privateKeyPrime2 (q)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.q)),// privateKeyExponent1 (dP)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.dP)),// privateKeyExponent2 (dQ)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.dQ)),// coefficient (qInv)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.qInv))])},/**
 * Converts a public key from an ASN.1 SubjectPublicKeyInfo or RSAPublicKey.
 *
 * @param obj the asn1 representation of a SubjectPublicKeyInfo or RSAPublicKey.
 *
 * @return the public key.
 */ti.publicKeyFromAsn1=function(e){// get SubjectPublicKeyInfo
var t={},r=[];if(tt.validate(e,tl,t,r)){// get oid
var i=tt.derToOid(t.publicKeyOid);if(i!==ti.oids.rsaEncryption){var n=Error("Cannot read public key. Unknown OID.");throw n.oid=i,n}e=t.rsaPublicKey}if(// get RSA params
r=[],!tt.validate(e,to,t,r)){var n=Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");throw n.errors=r,n}// FIXME: inefficient, get a BigInteger that uses byte strings
var a=_.util.createBuffer(t.publicKeyModulus).toHex(),s=_.util.createBuffer(t.publicKeyExponent).toHex();// set public key
return ti.setRsaPublicKey(new e9(a,16),new e9(s,16))},/**
 * Converts a public key to an ASN.1 SubjectPublicKeyInfo.
 *
 * @param key the public key.
 *
 * @return the asn1 representation of a SubjectPublicKeyInfo.
 */ti.publicKeyToAsn1=ti.publicKeyToSubjectPublicKeyInfo=function(e){// SubjectPublicKeyInfo
return tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[// AlgorithmIdentifier
tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[// algorithm
tt.create(tt.Class.UNIVERSAL,tt.Type.OID,!1,tt.oidToDer(ti.oids.rsaEncryption).getBytes()),// parameters (null)
tt.create(tt.Class.UNIVERSAL,tt.Type.NULL,!1,"")]),// subjectPublicKey
tt.create(tt.Class.UNIVERSAL,tt.Type.BITSTRING,!1,[ti.publicKeyToRSAPublicKey(e)])])},/**
 * Converts a public key to an ASN.1 RSAPublicKey.
 *
 * @param key the public key.
 *
 * @return the asn1 representation of a RSAPublicKey.
 */ti.publicKeyToRSAPublicKey=function(e){// RSAPublicKey
return tt.create(tt.Class.UNIVERSAL,tt.Type.SEQUENCE,!0,[// modulus (n)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.n)),// publicExponent (e)
tt.create(tt.Class.UNIVERSAL,tt.Type.INTEGER,!1,td(e.e))])},void 0===tC)var tC=_.jsbn.BigInteger;// shortcut for asn.1 API
var tE=_.asn1,tb=_.pki=_.pki||{};tb.pbe=_.pbe=_.pbe||{};var tS=tb.oids,tT={name:"EncryptedPrivateKeyInfo",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedPrivateKeyInfo.encryptionAlgorithm",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OID,constructed:!1,capture:"encryptionOid"},{name:"AlgorithmIdentifier.parameters",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,captureAsn1:"encryptionParams"}]},{// encryptedData
name:"EncryptedPrivateKeyInfo.encryptedData",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OCTETSTRING,constructed:!1,capture:"encryptedData"}]},t_={name:"PBES2Algorithms",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc.oid",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OID,constructed:!1,capture:"kdfOid"},{name:"PBES2Algorithms.params",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.params.salt",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OCTETSTRING,constructed:!1,capture:"kdfSalt"},{name:"PBES2Algorithms.params.iterationCount",tagClass:tE.Class.UNIVERSAL,type:tE.Type.INTEGER,constructed:!1,capture:"kdfIterationCount"},{name:"PBES2Algorithms.params.keyLength",tagClass:tE.Class.UNIVERSAL,type:tE.Type.INTEGER,constructed:!1,optional:!0,capture:"keyLength"},{// prf
name:"PBES2Algorithms.params.prf",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,optional:!0,value:[{name:"PBES2Algorithms.params.prf.algorithm",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OID,constructed:!1,capture:"prfOid"}]}]}]},{name:"PBES2Algorithms.encryptionScheme",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.encryptionScheme.oid",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OID,constructed:!1,capture:"encOid"},{name:"PBES2Algorithms.encryptionScheme.iv",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OCTETSTRING,constructed:!1,capture:"encIv"}]}]},tI={name:"pkcs-12PbeParams",tagClass:tE.Class.UNIVERSAL,type:tE.Type.SEQUENCE,constructed:!0,value:[{name:"pkcs-12PbeParams.salt",tagClass:tE.Class.UNIVERSAL,type:tE.Type.OCTETSTRING,constructed:!1,capture:"salt"},{name:"pkcs-12PbeParams.iterations",tagClass:tE.Class.UNIVERSAL,type:tE.Type.INTEGER,constructed:!1,capture:"iterations"}]};function tA(e,t){return e.start().update(t).digest().getBytes()}function tB(e){// get PRF algorithm, default to SHA-1
var t;if(e){if(!(t=tb.oids[tE.derToOid(e)])){var r=Error("Unsupported PRF OID.");throw r.oid=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}}else t="hmacWithSHA1";return tN(t)}function tN(e){var t=_.md;switch(e){case"hmacWithSHA224":t=_.md.sha512;case"hmacWithSHA1":case"hmacWithSHA256":case"hmacWithSHA384":case"hmacWithSHA512":e=e.substr(8).toLowerCase();break;default:var r=Error("Unsupported PRF algorithm.");throw r.algorithm=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}if(!t||!(e in t))throw Error("Unknown hash algorithm: "+e);return t[e].create()}/**
 * Encrypts a ASN.1 PrivateKeyInfo object, producing an EncryptedPrivateKeyInfo.
 *
 * PBES2Algorithms ALGORITHM-IDENTIFIER ::=
 *   { {PBES2-params IDENTIFIED BY id-PBES2}, ...}
 *
 * id-PBES2 OBJECT IDENTIFIER ::= {pkcs-5 13}
 *
 * PBES2-params ::= SEQUENCE {
 *   keyDerivationFunc AlgorithmIdentifier {{PBES2-KDFs}},
 *   encryptionScheme AlgorithmIdentifier {{PBES2-Encs}}
 * }
 *
 * PBES2-KDFs ALGORITHM-IDENTIFIER ::=
 *   { {PBKDF2-params IDENTIFIED BY id-PBKDF2}, ... }
 *
 * PBES2-Encs ALGORITHM-IDENTIFIER ::= { ... }
 *
 * PBKDF2-params ::= SEQUENCE {
 *   salt CHOICE {
 *     specified OCTET STRING,
 *     otherSource AlgorithmIdentifier {{PBKDF2-SaltSources}}
 *   },
 *   iterationCount INTEGER (1..MAX),
 *   keyLength INTEGER (1..MAX) OPTIONAL,
 *   prf AlgorithmIdentifier {{PBKDF2-PRFs}} DEFAULT algid-hmacWithSHA1
 * }
 *
 * @param obj the ASN.1 PrivateKeyInfo object.
 * @param password the password to encrypt with.
 * @param options:
 *          algorithm the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des'), defaults to 'aes128'.
 *          count the iteration count to use.
 *          saltSize the salt size to use.
 *          prfAlgorithm the PRF message digest algorithm to use
 *            ('sha1', 'sha224', 'sha256', 'sha384', 'sha512')
 *
 * @return the ASN.1 EncryptedPrivateKeyInfo.
 */tb.encryptPrivateKeyInfo=function(e,t,r){// set default options
(r=r||{}).saltSize=r.saltSize||8,r.count=r.count||2048,r.algorithm=r.algorithm||"aes128",r.prfAlgorithm=r.prfAlgorithm||"sha1";// generate PBE params
var i=_.random.getBytesSync(r.saltSize),n=r.count,a=tE.integerToDer(n);if(0===r.algorithm.indexOf("aes")||"des"===r.algorithm){switch(r.algorithm){case"aes128":l=16,h=16,f=tS["aes128-CBC"],p=_.aes.createEncryptionCipher;break;case"aes192":l=24,h=16,f=tS["aes192-CBC"],p=_.aes.createEncryptionCipher;break;case"aes256":l=32,h=16,f=tS["aes256-CBC"],p=_.aes.createEncryptionCipher;break;case"des":l=8,h=8,f=tS.desCBC,p=_.des.createEncryptionCipher;break;default:var s,o,l,c,u,h,f,p,d=Error("Cannot encrypt private key. Unknown encryption algorithm.");throw d.algorithm=r.algorithm,d}// get PRF message digest
var g="hmacWith"+r.prfAlgorithm.toUpperCase(),y=tN(g),m=_.pkcs5.pbkdf2(t,i,n,l,y),v=_.random.getBytesSync(h),C=p(m);C.start(v),C.update(tE.toDer(e)),C.finish(),u=C.output.getBytes();// get PBKDF2-params
var E=(s=l,o=tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[// salt
tE.create(tE.Class.UNIVERSAL,tE.Type.OCTETSTRING,!1,i),// iteration count
tE.create(tE.Class.UNIVERSAL,tE.Type.INTEGER,!1,a.getBytes())]),"hmacWithSHA1"!==g&&o.value.push(tE.create(tE.Class.UNIVERSAL,tE.Type.INTEGER,!1,_.util.hexToBytes(s.toString(16))),tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[// algorithm
tE.create(tE.Class.UNIVERSAL,tE.Type.OID,!1,tE.oidToDer(tb.oids[g]).getBytes()),// parameters (null)
tE.create(tE.Class.UNIVERSAL,tE.Type.NULL,!1,"")])),o);c=tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[tE.create(tE.Class.UNIVERSAL,tE.Type.OID,!1,tE.oidToDer(tS.pkcs5PBES2).getBytes()),tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[// keyDerivationFunc
tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[tE.create(tE.Class.UNIVERSAL,tE.Type.OID,!1,tE.oidToDer(tS.pkcs5PBKDF2).getBytes()),// PBKDF2-params
E]),// encryptionScheme
tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[tE.create(tE.Class.UNIVERSAL,tE.Type.OID,!1,tE.oidToDer(f).getBytes()),// iv
tE.create(tE.Class.UNIVERSAL,tE.Type.OCTETSTRING,!1,v)])])])}else if("3des"===r.algorithm){// Do PKCS12 PBE
l=24;var b=new _.util.ByteBuffer(i),m=tb.pbe.generatePkcs12Key(t,b,1,n,l),v=tb.pbe.generatePkcs12Key(t,b,2,n,l),C=_.des.createEncryptionCipher(m);C.start(v),C.update(tE.toDer(e)),C.finish(),u=C.output.getBytes(),c=tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[tE.create(tE.Class.UNIVERSAL,tE.Type.OID,!1,tE.oidToDer(tS["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),// pkcs-12PbeParams
tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[// salt
tE.create(tE.Class.UNIVERSAL,tE.Type.OCTETSTRING,!1,i),// iteration count
tE.create(tE.Class.UNIVERSAL,tE.Type.INTEGER,!1,a.getBytes())])])}else{var d=Error("Cannot encrypt private key. Unknown encryption algorithm.");throw d.algorithm=r.algorithm,d}return tE.create(tE.Class.UNIVERSAL,tE.Type.SEQUENCE,!0,[// encryptionAlgorithm
c,// encryptedData
tE.create(tE.Class.UNIVERSAL,tE.Type.OCTETSTRING,!1,u)])},/**
 * Decrypts a ASN.1 PrivateKeyInfo object.
 *
 * @param obj the ASN.1 EncryptedPrivateKeyInfo object.
 * @param password the password to decrypt with.
 *
 * @return the ASN.1 PrivateKeyInfo on success, null on failure.
 */tb.decryptPrivateKeyInfo=function(e,t){var r=null,i={},n=[];if(!tE.validate(e,tT,i,n)){var a=Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw a.errors=n,a}// get cipher
var s=tE.derToOid(i.encryptionOid),o=tb.pbe.getCipher(s,i.encryptionParams,t),l=_.util.createBuffer(i.encryptedData);return o.update(l),o.finish()&&(r=tE.fromDer(o.output)),r},/**
 * Converts a EncryptedPrivateKeyInfo to PEM format.
 *
 * @param epki the EncryptedPrivateKeyInfo.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted encrypted private key.
 */tb.encryptedPrivateKeyToPem=function(e,t){// convert to DER, then PEM-encode
var r={type:"ENCRYPTED PRIVATE KEY",body:tE.toDer(e).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Converts a PEM-encoded EncryptedPrivateKeyInfo to ASN.1 format. Decryption
 * is not performed.
 *
 * @param pem the EncryptedPrivateKeyInfo in PEM-format.
 *
 * @return the ASN.1 EncryptedPrivateKeyInfo.
 */tb.encryptedPrivateKeyFromPem=function(e){var t=_.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==t.type){var r=Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw Error("Could not convert encrypted private key from PEM; PEM is encrypted.");// convert DER to ASN.1 object
return tE.fromDer(t.body)},/**
 * Encrypts an RSA private key. By default, the key will be wrapped in
 * a PrivateKeyInfo and encrypted to produce a PKCS#8 EncryptedPrivateKeyInfo.
 * This is the standard, preferred way to encrypt a private key.
 *
 * To produce a non-standard PEM-encrypted private key that uses encapsulated
 * headers to indicate the encryption algorithm (old-style non-PKCS#8 OpenSSL
 * private key encryption), set the 'legacy' option to true. Note: Using this
 * option will cause the iteration count to be forced to 1.
 *
 * Note: The 'des' algorithm is supported, but it is not considered to be
 * secure because it only uses a single 56-bit key. If possible, it is highly
 * recommended that a different algorithm be used.
 *
 * @param rsaKey the RSA key to encrypt.
 * @param password the password to use.
 * @param options:
 *          algorithm: the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des', 'des').
 *          count: the iteration count to use.
 *          saltSize: the salt size to use.
 *          legacy: output an old non-PKCS#8 PEM-encrypted+encapsulated
 *            headers (DEK-Info) private key.
 *
 * @return the PEM-encoded ASN.1 EncryptedPrivateKeyInfo.
 */tb.encryptRsaPrivateKey=function(e,t,r){if(!// standard PKCS#8
(r=r||{}).legacy){// encrypt PrivateKeyInfo
var i,n,a,s,o=tb.wrapRsaPrivateKey(tb.privateKeyToAsn1(e));return o=tb.encryptPrivateKeyInfo(o,t,r),tb.encryptedPrivateKeyToPem(o)}switch(r.algorithm){case"aes128":i="AES-128-CBC",a=16,n=_.random.getBytesSync(16),s=_.aes.createEncryptionCipher;break;case"aes192":i="AES-192-CBC",a=24,n=_.random.getBytesSync(16),s=_.aes.createEncryptionCipher;break;case"aes256":i="AES-256-CBC",a=32,n=_.random.getBytesSync(16),s=_.aes.createEncryptionCipher;break;case"3des":i="DES-EDE3-CBC",a=24,n=_.random.getBytesSync(8),s=_.des.createEncryptionCipher;break;case"des":i="DES-CBC",a=8,n=_.random.getBytesSync(8),s=_.des.createEncryptionCipher;break;default:var l=Error('Could not encrypt RSA private key; unsupported encryption algorithm "'+r.algorithm+'".');throw l.algorithm=r.algorithm,l}var c=s(_.pbe.opensslDeriveBytes(t,n.substr(0,8),a));c.start(n),c.update(tE.toDer(tb.privateKeyToAsn1(e))),c.finish();var u={type:"RSA PRIVATE KEY",procType:{version:"4",type:"ENCRYPTED"},dekInfo:{algorithm:i,parameters:_.util.bytesToHex(n).toUpperCase()},body:c.output.getBytes()};return _.pem.encode(u)},/**
 * Decrypts an RSA private key.
 *
 * @param pem the PEM-formatted EncryptedPrivateKeyInfo to decrypt.
 * @param password the password to use.
 *
 * @return the RSA key on success, null on failure.
 */tb.decryptRsaPrivateKey=function(e,t){var r=null,i=_.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==i.type&&"PRIVATE KEY"!==i.type&&"RSA PRIVATE KEY"!==i.type){var n=Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');throw n.headerType=n,n}if(i.procType&&"ENCRYPTED"===i.procType.type){switch(i.dekInfo.algorithm){case"DES-CBC":a=8,s=_.des.createDecryptionCipher;break;case"DES-EDE3-CBC":a=24,s=_.des.createDecryptionCipher;break;case"AES-128-CBC":a=16,s=_.aes.createDecryptionCipher;break;case"AES-192-CBC":a=24,s=_.aes.createDecryptionCipher;break;case"AES-256-CBC":a=32,s=_.aes.createDecryptionCipher;break;case"RC2-40-CBC":a=5,s=function(e){return _.rc2.createDecryptionCipher(e,40)};break;case"RC2-64-CBC":a=8,s=function(e){return _.rc2.createDecryptionCipher(e,64)};break;case"RC2-128-CBC":a=16,s=function(e){return _.rc2.createDecryptionCipher(e,128)};break;default:var a,s,n=Error('Could not decrypt private key; unsupported encryption algorithm "'+i.dekInfo.algorithm+'".');throw n.algorithm=i.dekInfo.algorithm,n}// use OpenSSL legacy key derivation
var o=_.util.hexToBytes(i.dekInfo.parameters),l=s(_.pbe.opensslDeriveBytes(t,o.substr(0,8),a));if(l.start(o),l.update(_.util.createBuffer(i.body)),!l.finish())return r;r=l.output.getBytes()}else r=i.body;return null!==(r="ENCRYPTED PRIVATE KEY"===i.type?tb.decryptPrivateKeyInfo(tE.fromDer(r),t):tE.fromDer(r))&&(r=tb.privateKeyFromAsn1(r)),r},/**
 * Derives a PKCS#12 key.
 *
 * @param password the password to derive the key material from, null or
 *          undefined for none.
 * @param salt the salt, as a ByteBuffer, to use.
 * @param id the PKCS#12 ID byte (1 = key material, 2 = IV, 3 = MAC).
 * @param iter the iteration count.
 * @param n the number of bytes to derive from the password.
 * @param md the message digest to use, defaults to SHA-1.
 *
 * @return a ByteBuffer with the bytes derived from the password.
 */tb.pbe.generatePkcs12Key=function(e,t,r,i,n,a){if(null==a){if(!("sha1"in _.md))throw Error('"sha1" hash algorithm unavailable.');a=_.md.sha1.create()}var s,o,l=a.digestLength,c=a.blockLength,u=new _.util.ByteBuffer,h=new _.util.ByteBuffer;if(null!=e){for(o=0;o<e.length;o++)h.putInt16(e.charCodeAt(o));h.putInt16(0)}/* Length of salt and password in BYTES. */var f=h.length(),p=t.length(),d=new _.util.ByteBuffer;d.fillWithByte(r,c);/* 2. Concatenate copies of the salt together to create a string S of length
        v * ceil(s / v) bytes (the final copy of the salt may be trunacted
        to create S).
        Note that if the salt is the empty string, then so is S. */var g=c*Math.ceil(p/c),y=new _.util.ByteBuffer;for(o=0;o<g;o++)y.putByte(t.at(o%p));/* 3. Concatenate copies of the password together to create a string P of
        length v * ceil(p / v) bytes (the final copy of the password may be
        truncated to create P).
        Note that if the password is the empty string, then so is P. */var m=c*Math.ceil(f/c),v=new _.util.ByteBuffer;for(o=0;o<m;o++)v.putByte(h.at(o%f));/* 4. Set I=S||P to be the concatenation of S and P. */var C=y;C.putBuffer(v);/* 6. For i=1, 2, ..., c, do the following: */for(var E=Math.ceil(n/l),b=1;b<=E;b++){/* a) Set Ai=H^r(D||I). (l.e. the rth hash of D||I, H(H(H(...H(D||I)))) */var S=new _.util.ByteBuffer;S.putBytes(d.bytes()),S.putBytes(C.bytes());for(var T=0;T<i;T++)a.start(),a.update(S.getBytes()),S=a.digest();/* b) Concatenate copies of Ai to create a string B of length v bytes (the
          final copy of Ai may be truncated to create B). */var I=new _.util.ByteBuffer;for(o=0;o<c;o++)I.putByte(S.at(o%l));/* c) Treating I as a concatenation I0, I1, ..., Ik-1 of v-byte blocks,
          where k=ceil(s / v) + ceil(p / v), modify I by setting
          Ij=(Ij+B+1) mod 2v for each j.  */var A=Math.ceil(p/c)+Math.ceil(f/c),B=new _.util.ByteBuffer;for(s=0;s<A;s++){var N=new _.util.ByteBuffer(C.getBytes(c)),w=511;for(o=I.length()-1;o>=0;o--)w>>=8,w+=I.at(o)+N.at(o),N.setAt(o,255&w);B.putBuffer(N)}C=B,/* Add Ai to A. */u.putBuffer(S)}return u.truncate(u.length()-n),u},/**
 * Get new Forge cipher object instance.
 *
 * @param oid the OID (in string notation).
 * @param params the ASN.1 params object.
 * @param password the password to decrypt with.
 *
 * @return new cipher object instance.
 */tb.pbe.getCipher=function(e,t,r){switch(e){case tb.oids.pkcs5PBES2:return tb.pbe.getCipherForPBES2(e,t,r);case tb.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:case tb.oids["pbewithSHAAnd40BitRC2-CBC"]:return tb.pbe.getCipherForPKCS12PBE(e,t,r);default:var i=Error("Cannot read encrypted PBE data block. Unsupported OID.");throw i.oid=e,i.supportedOids=["pkcs5PBES2","pbeWithSHAAnd3-KeyTripleDES-CBC","pbewithSHAAnd40BitRC2-CBC"],i}},/**
 * Get new Forge cipher object instance according to PBES2 params block.
 *
 * The returned cipher instance is already started using the IV
 * from PBES2 parameter block.
 *
 * @param oid the PKCS#5 PBKDF2 OID (in string notation).
 * @param params the ASN.1 PBES2-params object.
 * @param password the password to decrypt with.
 *
 * @return new cipher object instance.
 */tb.pbe.getCipherForPBES2=function(e,t,r){// get PBE params
var i,n,a={},s=[];if(!tE.validate(t,t_,a,s)){var o=Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw o.errors=s,o}if(// check oids
(e=tE.derToOid(a.kdfOid))!==tb.oids.pkcs5PBKDF2){var o=Error("Cannot read encrypted private key. Unsupported key derivation function OID.");throw o.oid=e,o.supportedOids=["pkcs5PBKDF2"],o}if((e=tE.derToOid(a.encOid))!==tb.oids["aes128-CBC"]&&e!==tb.oids["aes192-CBC"]&&e!==tb.oids["aes256-CBC"]&&e!==tb.oids["des-EDE3-CBC"]&&e!==tb.oids.desCBC){var o=Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");throw o.oid=e,o.supportedOids=["aes128-CBC","aes192-CBC","aes256-CBC","des-EDE3-CBC","desCBC"],o}// set PBE params
var l=a.kdfSalt,c=_.util.createBuffer(a.kdfIterationCount);switch(c=c.getInt(c.length()<<3),tb.oids[e]){case"aes128-CBC":i=16,n=_.aes.createDecryptionCipher;break;case"aes192-CBC":i=24,n=_.aes.createDecryptionCipher;break;case"aes256-CBC":i=32,n=_.aes.createDecryptionCipher;break;case"des-EDE3-CBC":i=24,n=_.des.createDecryptionCipher;break;case"desCBC":i=8,n=_.des.createDecryptionCipher}// get PRF message digest
var u=tB(a.prfOid),h=_.pkcs5.pbkdf2(r,l,c,i,u),f=a.encIv,p=n(h);return p.start(f),p},/**
 * Get new Forge cipher object instance for PKCS#12 PBE.
 *
 * The returned cipher instance is already started using the key & IV
 * derived from the provided password and PKCS#12 PBE salt.
 *
 * @param oid The PKCS#12 PBE OID (in string notation).
 * @param params The ASN.1 PKCS#12 PBE-params object.
 * @param password The password to decrypt with.
 *
 * @return the new cipher object instance.
 */tb.pbe.getCipherForPKCS12PBE=function(e,t,r){// get PBE params
var i,n,a,s={},o=[];if(!tE.validate(t,tI,s,o)){var l=Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw l.errors=o,l}var c=_.util.createBuffer(s.salt),u=_.util.createBuffer(s.iterations);switch(u=u.getInt(u.length()<<3),e){case tb.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:i=24,n=8,a=_.des.startDecrypting;break;case tb.oids["pbewithSHAAnd40BitRC2-CBC"]:i=5,n=8,a=function(e,t){var r=_.rc2.createDecryptionCipher(e,40);return r.start(t,null),r};break;default:var l=Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");throw l.oid=e,l}// get PRF message digest
var h=tB(s.prfOid),f=tb.pbe.generatePkcs12Key(r,c,1,u,i,h);return h.start(),a(f,tb.pbe.generatePkcs12Key(r,c,2,u,n,h))},/**
 * OpenSSL's legacy key derivation function.
 *
 * See: http://www.openssl.org/docs/crypto/EVP_BytesToKey.html
 *
 * @param password the password to derive the key from.
 * @param salt the salt to use, null for none.
 * @param dkLen the number of bytes needed for the derived key.
 * @param [options] the options to use:
 *          [md] an optional message digest object to use.
 */tb.pbe.opensslDeriveBytes=function(e,t,r,i){if(null==i){if(!("md5"in _.md))throw Error('"md5" hash algorithm unavailable.');i=_.md.md5.create()}null===t&&(t="");for(var n=[tA(i,e+t)],a=16,s=1;a<r;++s,a+=16)n.push(tA(i,n[s-1]+e+t));return n.join("").substr(0,r)};var _=(b("hnKIb"),b("hnKIb")),tw=_.asn1,tL=_.pkcs7asn1=_.pkcs7asn1||{};_.pkcs7=_.pkcs7||{},_.pkcs7.asn1=tL;var tk={name:"ContentInfo",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.ContentType",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:tw.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,captureAsn1:"content"}]};tL.contentInfoValidator=tk;var tR={name:"EncryptedContentInfo",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentType",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OID,constructed:!1,capture:"contentType"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm.parameter",tagClass:tw.Class.UNIVERSAL,captureAsn1:"encParameter"}]},{name:"EncryptedContentInfo.encryptedContent",tagClass:tw.Class.CONTEXT_SPECIFIC,type:0,/* The PKCS#7 structure output by OpenSSL somewhat differs from what
     * other implementations do generate.
     *
     * OpenSSL generates a structure like this:
     * SEQUENCE {
     *    ...
     *    [0]
     *       26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *       C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *       ...
     * }
     *
     * Whereas other implementations (and this PKCS#7 module) generate:
     * SEQUENCE {
     *    ...
     *    [0] {
     *       OCTET STRING
     *          26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *          C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *          ...
     *    }
     * }
     *
     * In order to support both, we just capture the context specific
     * field here.  The OCTET STRING bit is removed below.
     */capture:"encryptedContent",captureAsn1:"encryptedContentAsn1"}]};tL.envelopedDataValidator={name:"EnvelopedData",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"EnvelopedData.Version",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"version"},{name:"EnvelopedData.RecipientInfos",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SET,constructed:!0,captureAsn1:"recipientInfos"}].concat(tR)},tL.encryptedDataValidator={name:"EncryptedData",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedData.Version",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"version"}].concat(tR)};var tD={name:"SignerInfo",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.version",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1},{name:"SignerInfo.issuerAndSerialNumber",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.issuerAndSerialNumber.issuer",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"SignerInfo.issuerAndSerialNumber.serialNumber",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"SignerInfo.digestAlgorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.digestAlgorithm.algorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OID,constructed:!1,capture:"digestAlgorithm"},{name:"SignerInfo.digestAlgorithm.parameter",tagClass:tw.Class.UNIVERSAL,constructed:!1,captureAsn1:"digestParameter",optional:!0}]},{name:"SignerInfo.authenticatedAttributes",tagClass:tw.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"authenticatedAttributes"},{name:"SignerInfo.digestEncryptionAlgorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,capture:"signatureAlgorithm"},{name:"SignerInfo.encryptedDigest",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OCTETSTRING,constructed:!1,capture:"signature"},{name:"SignerInfo.unauthenticatedAttributes",tagClass:tw.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,capture:"unauthenticatedAttributes"}]};tL.signedDataValidator={name:"SignedData",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"SignedData.Version",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"version"},{name:"SignedData.DigestAlgorithms",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SET,constructed:!0,captureAsn1:"digestAlgorithms"},tk,{name:"SignedData.Certificates",tagClass:tw.Class.CONTEXT_SPECIFIC,type:0,optional:!0,captureAsn1:"certificates"},{name:"SignedData.CertificateRevocationLists",tagClass:tw.Class.CONTEXT_SPECIFIC,type:1,optional:!0,captureAsn1:"crls"},{name:"SignedData.SignerInfos",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SET,capture:"signerInfos",optional:!0,value:[tD]}]},tL.recipientInfoValidator={name:"RecipientInfo",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.version",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"version"},{name:"RecipientInfo.issuerAndSerial",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.issuerAndSerial.issuer",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"RecipientInfo.issuerAndSerial.serialNumber",tagClass:tw.Class.UNIVERSAL,type:tw.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"RecipientInfo.keyEncryptionAlgorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.keyEncryptionAlgorithm.algorithm",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"RecipientInfo.keyEncryptionAlgorithm.parameter",tagClass:tw.Class.UNIVERSAL,constructed:!1,captureAsn1:"encParameter",optional:!0}]},{name:"RecipientInfo.encryptedKey",tagClass:tw.Class.UNIVERSAL,type:tw.Type.OCTETSTRING,constructed:!1,capture:"encKey"}]};var _=b("hnKIb");b("df6Hw");var _=(b("hnKIb"),b("hnKIb"));_.mgf=_.mgf||{},/**
 * Creates a MGF1 mask generation function object.
 *
 * @param md the message digest API to use (eg: forge.md.sha1.create()).
 *
 * @return a mask generation function object.
 */(_.mgf.mgf1=_.mgf1=_.mgf1||{}).create=function(e){return{/**
     * Generate mask of specified length.
     *
     * @param {String} seed The seed for mask generation.
     * @param maskLen Number of bytes to generate.
     * @return {String} The generated mask.
     */generate:function(t,r){for(var i=new _.util.ByteBuffer,n=Math.ceil(r/e.digestLength),a=0;a<n;a++){/* a. Convert counter to an octet string C of length 4 octets */var s=new _.util.ByteBuffer;s.putInt32(a),/* b. Concatenate the hash of the seed mgfSeed and C to the octet
         * string T: */e.start(),e.update(t+s.getBytes()),i.putBuffer(e.digest())}return /* Output the leading maskLen octets of T as the octet string mask. */i.truncate(i.length()-r),i.getBytes()}}},_.mgf=_.mgf||{},_.mgf.mgf1=_.mgf1;var _=b("hnKIb");/**
 * Creates a PSS signature scheme object.
 *
 * There are several ways to provide a salt for encoding:
 *
 * 1. Specify the saltLength only and the built-in PRNG will generate it.
 * 2. Specify the saltLength and a custom PRNG with 'getBytesSync' defined that
 *   will be used.
 * 3. Specify the salt itself as a forge.util.ByteBuffer.
 *
 * @param options the options to use:
 *          md the message digest object to use, a forge md instance.
 *          mgf the mask generation function to use, a forge mgf instance.
 *          [saltLength] the length of the salt in octets.
 *          [prng] the pseudo-random number generator to use to produce a salt.
 *          [salt] the salt to use when encoding.
 *
 * @return a signature scheme object.
 */(_.pss=_.pss||{}).create=function(e){3==arguments.length&&(e={md:arguments[0],mgf:arguments[1],saltLength:arguments[2]});var t,r=e.md,i=e.mgf,n=r.digestLength,a=e.salt||null;if("string"==typeof a&&(a=_.util.createBuffer(a)),"saltLength"in e)t=e.saltLength;else if(null!==a)t=a.length();else throw Error("Salt length not specified or specific salt not given.");if(null!==a&&a.length()!==t)throw Error("Given salt length does not match length of given salt.");var s=e.prng||_.random,o={};return(/**
   * Encodes a PSS signature.
   *
   * This function implements EMSA-PSS-ENCODE as per RFC 3447, section 9.1.1.
   *
   * @param md the message digest object with the hash to sign.
   * @param modsBits the length of the RSA modulus in bits.
   *
   * @return the encoded message as a binary-encoded string of length
   *           ceil((modBits - 1) / 8).
   */o.encode=function(e,o){var l,c,u=o-1,h=Math.ceil(u/8),f=e.digest().getBytes();/* 3. If emLen < hLen + sLen + 2, output "encoding error" and stop. */if(h<n+t+2)throw Error("Message is too long to encrypt.");c=null===a?s.getBytesSync(t):a.bytes();/* 5. Let M' = (0x)00 00 00 00 00 00 00 00 || mHash || salt; */var p=new _.util.ByteBuffer;p.fillWithByte(0,8),p.putBytes(f),p.putBytes(c),/* 6. Let H = Hash(M'), an octet string of length hLen. */r.start(),r.update(p.getBytes());var d=r.digest().getBytes(),g=new _.util.ByteBuffer;g.fillWithByte(0,h-t-n-2),/* 8. Let DB = PS || 0x01 || salt; DB is an octet string of length
     *    emLen - hLen - 1. */g.putByte(1),g.putBytes(c);var y=g.getBytes(),m=h-n-1,v=i.generate(d,m),C="";for(l=0;l<m;l++)C+=String.fromCharCode(y.charCodeAt(l)^v.charCodeAt(l));/* 12. Let EM = maskedDB || H || 0xbc.
     * 13. Output EM. */return(C=String.fromCharCode(C.charCodeAt(0)&~(65280>>8*h-u&255))+C.substr(1))+d+String.fromCharCode(188)},/**
   * Verifies a PSS signature.
   *
   * This function implements EMSA-PSS-VERIFY as per RFC 3447, section 9.1.2.
   *
   * @param mHash the message digest hash, as a binary-encoded string, to
   *         compare against the signature.
   * @param em the encoded message, as a binary-encoded string
   *          (RSA decryption result).
   * @param modsBits the length of the RSA modulus in bits.
   *
   * @return true if the signature was verified, false if not.
   */o.verify=function(e,a,s){var o,l=s-1,c=Math.ceil(l/8);/* 3. If emLen < hLen + sLen + 2, output "inconsistent" and stop. */if(/* c. Convert the message representative m to an encoded message EM
     *    of length emLen = ceil((modBits - 1) / 8) octets, where modBits
     *    is the length in bits of the RSA modulus n */a=a.substr(-c),c<n+t+2)throw Error("Inconsistent parameters to PSS signature verification.");/* 4. If the rightmost octet of EM does not have hexadecimal value
     *    0xbc, output "inconsistent" and stop. */if(188!==a.charCodeAt(c-1))throw Error("Encoded message does not end in 0xBC.");/* 5. Let maskedDB be the leftmost emLen - hLen - 1 octets of EM, and
     *    let H be the next hLen octets. */var u=c-n-1,h=a.substr(0,u),f=a.substr(u,n),p=65280>>8*c-l&255;if((h.charCodeAt(0)&p)!=0)throw Error("Bits beyond keysize not zero as expected.");/* 7. Let dbMask = MGF(H, emLen - hLen - 1). */var d=i.generate(f,u),g="";for(o=0;o<u;o++)g+=String.fromCharCode(h.charCodeAt(o)^d.charCodeAt(o));/* 9. Set the leftmost 8emLen - emBits bits of the leftmost octet
     * in DB to zero. */g=String.fromCharCode(g.charCodeAt(0)&~p)+g.substr(1);/* 10. If the emLen - hLen - sLen - 2 leftmost octets of DB are not zero
     * or if the octet at position emLen - hLen - sLen - 1 (the leftmost
     * position is "position 1") does not have hexadecimal value 0x01,
     * output "inconsistent" and stop. */var y=c-n-t-2;for(o=0;o<y;o++)if(0!==g.charCodeAt(o))throw Error("Leftmost octets not zero as expected");if(1!==g.charCodeAt(y))throw Error("Inconsistent PSS signature, 0x01 marker not found");/* 11. Let salt be the last sLen octets of DB. */var m=g.substr(-t),v=new _.util.ByteBuffer;/* 14. If H = H', output "consistent." Otherwise, output "inconsistent." */return v.fillWithByte(0,8),v.putBytes(e),v.putBytes(m),/* 13. Let H' = Hash(M'), an octet string of length hLen. */r.start(),r.update(v.getBytes()),f===r.digest().getBytes()},o)};// shortcut for asn.1 API
var tU=_.asn1,tO=_.pki=_.pki||{},tP=tO.oids,tx={};tx.CN=tP.commonName,tx.commonName="CN",tx.C=tP.countryName,tx.countryName="C",tx.L=tP.localityName,tx.localityName="L",tx.ST=tP.stateOrProvinceName,tx.stateOrProvinceName="ST",tx.O=tP.organizationName,tx.organizationName="O",tx.OU=tP.organizationalUnitName,tx.organizationalUnitName="OU",tx.E=tP.emailAddress,tx.emailAddress="E";// validator for an SubjectPublicKeyInfo structure
// Note: Currently only works with an RSA public key
var tV=_.pki.rsa.publicKeyValidator,tK={name:"Certificate",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:tU.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:tU.Class.UNIVERSAL,type:tU.Type.INTEGER,constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:tU.Class.UNIVERSAL,type:tU.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:tU.Class.UNIVERSAL,optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,// Note: UTC and generalized times may both appear so the capture
// names are based on their detected order, the names used below
// are only for the common case, which validity time really means
// "notBefore" and which means "notAfter" will be determined by order
value:[{// notBefore (Time) (UTC time case)
name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:tU.Class.UNIVERSAL,type:tU.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{// notBefore (Time) (generalized time case)
name:"Certificate.TBSCertificate.validity.notBefore (generalized)",tagClass:tU.Class.UNIVERSAL,type:tU.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{// notAfter (Time) (only UTC time is supported)
name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:tU.Class.UNIVERSAL,type:tU.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{// notAfter (Time) (only UTC time is supported)
name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:tU.Class.UNIVERSAL,type:tU.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{// Name (subject) (RDNSequence)
name:"Certificate.TBSCertificate.subject",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},// SubjectPublicKeyInfo
tV,{// issuerUniqueID (optional)
name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:tU.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:tU.Class.UNIVERSAL,type:tU.Type.BITSTRING,constructed:!1,// TODO: support arbitrary bit length ids
captureBitStringValue:"certIssuerUniqueId"}]},{// subjectUniqueID (optional)
name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:tU.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",tagClass:tU.Class.UNIVERSAL,type:tU.Type.BITSTRING,constructed:!1,// TODO: support arbitrary bit length ids
captureBitStringValue:"certSubjectUniqueId"}]},{// Extensions (optional)
name:"Certificate.TBSCertificate.extensions",tagClass:tU.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{// AlgorithmIdentifier (signature algorithm)
name:"Certificate.signatureAlgorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{// algorithm
name:"Certificate.signatureAlgorithm.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:tU.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{// SignatureValue
name:"Certificate.signatureValue",tagClass:tU.Class.UNIVERSAL,type:tU.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSignature"}]},tM={name:"rsapss",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:tU.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:tU.Class.UNIVERSAL,type:tU.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:tU.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:tU.Class.UNIVERSAL,type:tU.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"maskGenOid"},{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:tU.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:tU.Class.UNIVERSAL,type:tU.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",tagClass:tU.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:tU.Class.UNIVERSAL,type:tU.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},tF={name:"CertificationRequestInfo",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:tU.Class.UNIVERSAL,type:tU.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{// Name (subject) (RDNSequence)
name:"CertificationRequestInfo.subject",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},// SubjectPublicKeyInfo
tV,{name:"CertificationRequestInfo.attributes",tagClass:tU.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequestInfo.attributes.type",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SET,constructed:!0}]}]}]},tj={name:"CertificationRequest",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[tF,{// AlgorithmIdentifier (signature algorithm)
name:"CertificationRequest.signatureAlgorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.SEQUENCE,constructed:!0,value:[{// algorithm
name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:tU.Class.UNIVERSAL,type:tU.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",tagClass:tU.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{// signature
name:"CertificationRequest.signature",tagClass:tU.Class.UNIVERSAL,type:tU.Type.BITSTRING,constructed:!1,captureBitStringValue:"csrSignature"}]};/**
 * Gets an issuer or subject attribute from its name, type, or short name.
 *
 * @param obj the issuer or subject object.
 * @param options a short name string or an object with:
 *          shortName the short name for the attribute.
 *          name the name for the attribute.
 *          type the type for the attribute.
 *
 * @return the attribute.
 */function tH(e,t){"string"==typeof t&&(t={shortName:t});for(var r,i=null,n=0;null===i&&n<e.attributes.length;++n)r=e.attributes[n],t.type&&t.type===r.type?i=r:t.name&&t.name===r.name?i=r:t.shortName&&t.shortName===r.shortName&&(i=r);return i}/**
 * Converts an RDNSequence of ASN.1 DER-encoded RelativeDistinguishedName
 * sets into an array with objects that have type and value properties.
 *
 * @param rdn the RDNSequence to convert.
 * @param md a message digest to append type and value to if provided.
 */tO.RDNAttributesAsArray=function(e,t){for(var r,i,n,a=[],s=0;s<e.value.length;++s){// get the RelativeDistinguishedName set
r=e.value[s];// each value in the SET is an AttributeTypeAndValue sequence
// containing first a type (an OID) and second a value (defined by
// the OID)
for(var o=0;o<r.value.length;++o)n={},i=r.value[o],n.type=tU.derToOid(i.value[0].value),n.value=i.value[1].value,n.valueTagClass=i.value[1].type,n.type in tP&&(n.name=tP[n.type],n.name in tx&&(n.shortName=tx[n.name])),t&&(t.update(n.type),t.update(n.value)),a.push(n)}return a},/**
 * Converts ASN.1 CRIAttributes into an array with objects that have type and
 * value properties.
 *
 * @param attributes the CRIAttributes to convert.
 */tO.CRIAttributesAsArray=function(e){// each value in 'attributes' in is a SEQUENCE with an OID and a SET
for(var t=[],r=0;r<e.length;++r)for(var i=e[r],n=tU.derToOid(i.value[0].value),a=i.value[1].value,s=0;s<a.length;++s){var o={};// parse extensions
if(o.type=n,o.value=a[s].value,o.valueTagClass=a[s].type,o.type in tP&&(o.name=tP[o.type],o.name in tx&&(o.shortName=tx[o.name])),o.type===tP.extensionRequest){o.extensions=[];for(var l=0;l<o.value.length;++l)o.extensions.push(tO.certificateExtensionFromAsn1(o.value[l]))}t.push(o)}return t};/**
 * Converts signature parameters from ASN.1 structure.
 *
 * Currently only RSASSA-PSS supported.  The PKCS#1 v1.5 signature scheme had
 * no parameters.
 *
 * RSASSA-PSS-params  ::=  SEQUENCE  {
 *   hashAlgorithm      [0] HashAlgorithm DEFAULT
 *                             sha1Identifier,
 *   maskGenAlgorithm   [1] MaskGenAlgorithm DEFAULT
 *                             mgf1SHA1Identifier,
 *   saltLength         [2] INTEGER DEFAULT 20,
 *   trailerField       [3] INTEGER DEFAULT 1
 * }
 *
 * HashAlgorithm  ::=  AlgorithmIdentifier
 *
 * MaskGenAlgorithm  ::=  AlgorithmIdentifier
 *
 * AlgorithmIdentifer ::= SEQUENCE {
 *   algorithm OBJECT IDENTIFIER,
 *   parameters ANY DEFINED BY algorithm OPTIONAL
 * }
 *
 * @param oid The OID specifying the signature algorithm
 * @param obj The ASN.1 structure holding the parameters
 * @param fillDefaults Whether to use return default values where omitted
 * @return signature parameter object
 */var tq=function(e,t,r){var i={};if(e!==tP["RSASSA-PSS"])return i;r&&(i={hash:{algorithmOid:tP.sha1},mgf:{algorithmOid:tP.mgf1,hash:{algorithmOid:tP.sha1}},saltLength:20});var n={},a=[];if(!tU.validate(t,tM,n,a)){var s=Error("Cannot read RSASSA-PSS parameter block.");throw s.errors=a,s}return void 0!==n.hashOid&&(i.hash=i.hash||{},i.hash.algorithmOid=tU.derToOid(n.hashOid)),void 0!==n.maskGenOid&&(i.mgf=i.mgf||{},i.mgf.algorithmOid=tU.derToOid(n.maskGenOid),i.mgf.hash=i.mgf.hash||{},i.mgf.hash.algorithmOid=tU.derToOid(n.maskGenHashOid)),void 0!==n.saltLength&&(i.saltLength=n.saltLength.charCodeAt(0)),i},tG=function(e){switch(tP[e.signatureOid]){case"sha1WithRSAEncryption":// deprecated alias
case"sha1WithRSASignature":return _.md.sha1.create();case"md5WithRSAEncryption":return _.md.md5.create();case"sha256WithRSAEncryption":case"RSASSA-PSS":return _.md.sha256.create();case"sha384WithRSAEncryption":return _.md.sha384.create();case"sha512WithRSAEncryption":return _.md.sha512.create();default:var t=Error("Could not compute "+e.type+" digest. Unknown signature OID.");throw t.signatureOid=e.signatureOid,t}},tz=function(e){var t,r,i,n=e.certificate;switch(n.signatureOid){case tP.sha1WithRSAEncryption:// deprecated alias
case tP.sha1WithRSASignature:break;case tP["RSASSA-PSS"]:if(void 0===/* initialize mgf */(r=tP[n.signatureParameters.mgf.hash.algorithmOid])||void 0===_.md[r]){var a=Error("Unsupported MGF hash function.");throw a.oid=n.signatureParameters.mgf.hash.algorithmOid,a.name=r,a}if(void 0===(i=tP[n.signatureParameters.mgf.algorithmOid])||void 0===_.mgf[i]){var a=Error("Unsupported MGF function.");throw a.oid=n.signatureParameters.mgf.algorithmOid,a.name=i,a}if(i=_.mgf[i].create(_.md[r].create()),void 0===/* initialize hash function */(r=tP[n.signatureParameters.hash.algorithmOid])||void 0===_.md[r]){var a=Error("Unsupported RSASSA-PSS hash function.");throw a.oid=n.signatureParameters.hash.algorithmOid,a.name=r,a}t=_.pss.create(_.md[r].create(),i,n.signatureParameters.saltLength)}// verify signature on cert using public key
return n.publicKey.verify(e.md.digest().getBytes(),e.signature,t)};/**
 * Converts an X.509 subject or issuer to an ASN.1 RDNSequence.
 *
 * @param obj the subject or issuer (distinguished name).
 *
 * @return the ASN.1 RDNSequence.
 */function tQ(e){for(var t,r,i=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]),n=e.attributes,a=0;a<n.length;++a){var s=(t=n[a]).value,o=tU.Type.PRINTABLESTRING;"valueTagClass"in t&&(o=t.valueTagClass)===tU.Type.UTF8&&(s=_.util.encodeUtf8(s)),// create a RelativeDistinguishedName set
// each value in the set is an AttributeTypeAndValue first
// containing the type (an OID) and second the value
r=tU.create(tU.Class.UNIVERSAL,tU.Type.SET,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// AttributeType
tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(t.type).getBytes()),// AttributeValue
tU.create(tU.Class.UNIVERSAL,o,!1,s)])]),i.value.push(r)}return i}/**
 * Fills in missing fields in attributes.
 *
 * @param attrs the attributes to fill missing fields in.
 */function t$(e){for(var t,r=0;r<e.length;++r){// populate missing type (OID)
if(void 0===(t=e[r]).name&&(t.type&&t.type in tO.oids?t.name=tO.oids[t.type]:t.shortName&&t.shortName in tx&&(t.name=tO.oids[tx[t.shortName]])),void 0===t.type){if(t.name&&t.name in tO.oids)t.type=tO.oids[t.name];else{var i=Error("Attribute type not specified.");throw i.attribute=t,i}}// convert extensions to value
if(void 0===t.shortName&&t.name&&t.name in tx&&(t.shortName=tx[t.name]),t.type===tP.extensionRequest&&(t.valueConstructed=!0,t.valueTagClass=tU.Type.SEQUENCE,!t.value&&t.extensions)){t.value=[];for(var n=0;n<t.extensions.length;++n)t.value.push(tO.certificateExtensionToAsn1(tW(t.extensions[n])))}if(void 0===t.value){var i=Error("Attribute value not specified.");throw i.attribute=t,i}}}/**
 * Fills in missing fields in certificate extensions.
 *
 * @param e the extension.
 * @param [options] the options to use.
 *          [cert] the certificate the extensions are for.
 *
 * @return the extension.
 */function tW(e,t){// populate missing id
if(t=t||{},void 0===e.name&&e.id&&e.id in tO.oids&&(e.name=tO.oids[e.id]),void 0===e.id){if(e.name&&e.name in tO.oids)e.id=tO.oids[e.name];else{var r=Error("Extension ID not specified.");throw r.extension=e,r}}if(void 0!==e.value)return e;// handle missing value:
// value is a BIT STRING
if("keyUsage"===e.name){// build flags
var i=0,n=0,a=0;e.digitalSignature&&(n|=128,i=7),e.nonRepudiation&&(n|=64,i=6),e.keyEncipherment&&(n|=32,i=5),e.dataEncipherment&&(n|=16,i=4),e.keyAgreement&&(n|=8,i=3),e.keyCertSign&&(n|=4,i=2),e.cRLSign&&(n|=2,i=1),e.encipherOnly&&(n|=1,i=0),e.decipherOnly&&(a|=128,i=7);// create bit string
var s=String.fromCharCode(i);0!==a?s+=String.fromCharCode(n)+String.fromCharCode(a):0!==n&&(s+=String.fromCharCode(n)),e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,s)}else if("basicConstraints"===e.name)// basicConstraints is a SEQUENCE
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]),e.cA&&e.value.value.push(tU.create(tU.Class.UNIVERSAL,tU.Type.BOOLEAN,!1,String.fromCharCode(255))),"pathLenConstraint"in e&&e.value.value.push(tU.create(tU.Class.UNIVERSAL,tU.Type.INTEGER,!1,tU.integerToDer(e.pathLenConstraint).getBytes()));else if("extKeyUsage"===e.name){// extKeyUsage is a SEQUENCE of OIDs
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);var o=e.value.value;for(var l in e)!0===e[l]&&(l in tP?o.push(tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(tP[l]).getBytes())):-1!==l.indexOf(".")&&o.push(tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(l).getBytes())))}else if("nsCertType"===e.name){// nsCertType is a BIT STRING
// build flags
var i=0,n=0;e.client&&(n|=128,i=7),e.server&&(n|=64,i=6),e.email&&(n|=32,i=5),e.objsign&&(n|=16,i=4),e.reserved&&(n|=8,i=3),e.sslCA&&(n|=4,i=2),e.emailCA&&(n|=2,i=1),e.objCA&&(n|=1,i=0);// create bit string
var s=String.fromCharCode(i);0!==n&&(s+=String.fromCharCode(n)),e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,s)}else if("subjectAltName"===e.name||"issuerAltName"===e.name){// SYNTAX SEQUENCE
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);for(var c,u=0;u<e.altNames.length;++u){var s=(c=e.altNames[u]).value;// handle IP
if(7===c.type&&c.ip){if(null===(s=_.util.bytesFromIP(c.ip))){var r=Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw r.extension=e,r}}else 8===c.type&&(s=c.oid?tU.oidToDer(tU.oidToDer(c.oid)):tU.oidToDer(s));e.value.value.push(tU.create(tU.Class.CONTEXT_SPECIFIC,c.type,!1,s))}}else if("nsComment"===e.name&&t.cert){// sanity check value is ASCII (req'd) and not too big
if(!/^[\x00-\x7F]*$/.test(e.comment)||e.comment.length<1||e.comment.length>128)throw Error('Invalid "nsComment" content.');// IA5STRING opaque comment
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.IA5STRING,!1,e.comment)}else if("subjectKeyIdentifier"===e.name&&t.cert){var h=t.cert.generateSubjectKeyIdentifier();e.subjectKeyIdentifier=h.toHex(),// OCTETSTRING w/digest
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.OCTETSTRING,!1,h.getBytes())}else if("authorityKeyIdentifier"===e.name&&t.cert){// SYNTAX SEQUENCE
e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);var o=e.value.value;if(e.keyIdentifier){var f=!0===e.keyIdentifier?t.cert.generateSubjectKeyIdentifier().getBytes():e.keyIdentifier;o.push(tU.create(tU.Class.CONTEXT_SPECIFIC,0,!1,f))}if(e.authorityCertIssuer){var p=[tU.create(tU.Class.CONTEXT_SPECIFIC,4,!0,[tQ(!0===e.authorityCertIssuer?t.cert.issuer:e.authorityCertIssuer)])];o.push(tU.create(tU.Class.CONTEXT_SPECIFIC,1,!0,p))}if(e.serialNumber){var d=_.util.hexToBytes(!0===e.serialNumber?t.cert.serialNumber:e.serialNumber);o.push(tU.create(tU.Class.CONTEXT_SPECIFIC,2,!1,d))}}else if("cRLDistributionPoints"===e.name){e.value=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);for(var c,o=e.value.value,g=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]),y=tU.create(tU.Class.CONTEXT_SPECIFIC,0,!0,[]),u=0;u<e.altNames.length;++u){var s=(c=e.altNames[u]).value;// handle IP
if(7===c.type&&c.ip){if(null===(s=_.util.bytesFromIP(c.ip))){var r=Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw r.extension=e,r}}else 8===c.type&&(s=c.oid?tU.oidToDer(tU.oidToDer(c.oid)):tU.oidToDer(s));y.value.push(tU.create(tU.Class.CONTEXT_SPECIFIC,c.type,!1,s))}// Add to the parent SEQUENCE
g.value.push(tU.create(tU.Class.CONTEXT_SPECIFIC,0,!0,[y])),o.push(g)}// ensure value has been defined by now
if(void 0===e.value){var r=Error("Extension value not specified.");throw r.extension=e,r}return e}/**
 * Convert signature parameters object to ASN.1
 *
 * @param {String} oid Signature algorithm OID
 * @param params The signature parametrs object
 * @return ASN.1 object representing signature parameters
 */function tY(e,t){if(e===tP["RSASSA-PSS"]){var r=[];return void 0!==t.hash.algorithmOid&&r.push(tU.create(tU.Class.CONTEXT_SPECIFIC,0,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(t.hash.algorithmOid).getBytes()),tU.create(tU.Class.UNIVERSAL,tU.Type.NULL,!1,"")])])),void 0!==t.mgf.algorithmOid&&r.push(tU.create(tU.Class.CONTEXT_SPECIFIC,1,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(t.mgf.algorithmOid).getBytes()),tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(t.mgf.hash.algorithmOid).getBytes()),tU.create(tU.Class.UNIVERSAL,tU.Type.NULL,!1,"")])])])),void 0!==t.saltLength&&r.push(tU.create(tU.Class.CONTEXT_SPECIFIC,2,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.INTEGER,!1,tU.integerToDer(t.saltLength).getBytes())])),tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,r)}return tU.create(tU.Class.UNIVERSAL,tU.Type.NULL,!1,"")}/**
 * Converts an X.509 certificate from PEM format.
 *
 * Note: If the certificate is to be verified then compute hash should
 * be set to true. This will scan the TBSCertificate part of the ASN.1
 * object while it is converted so it doesn't need to be converted back
 * to ASN.1-DER-encoding later.
 *
 * @param pem the PEM-formatted certificate.
 * @param computeHash true to compute the hash for verification.
 * @param strict true to be strict when checking ASN.1 value lengths, false to
 *          allow truncated values (default: true).
 *
 * @return the certificate.
 */tO.certificateFromPem=function(e,t,r){var i=_.pem.decode(e)[0];if("CERTIFICATE"!==i.type&&"X509 CERTIFICATE"!==i.type&&"TRUSTED CERTIFICATE"!==i.type){var n=Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw n.headerType=i.type,n}if(i.procType&&"ENCRYPTED"===i.procType.type)throw Error("Could not convert certificate from PEM; PEM is encrypted.");// convert DER to ASN.1 object
var a=tU.fromDer(i.body,r);return tO.certificateFromAsn1(a,t)},/**
 * Converts an X.509 certificate to PEM format.
 *
 * @param cert the certificate.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted certificate.
 */tO.certificateToPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"CERTIFICATE",body:tU.toDer(tO.certificateToAsn1(e)).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Converts an RSA public key from PEM format.
 *
 * @param pem the PEM-formatted public key.
 *
 * @return the public key.
 */tO.publicKeyFromPem=function(e){var t=_.pem.decode(e)[0];if("PUBLIC KEY"!==t.type&&"RSA PUBLIC KEY"!==t.type){var r=Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw Error("Could not convert public key from PEM; PEM is encrypted.");// convert DER to ASN.1 object
var i=tU.fromDer(t.body);return tO.publicKeyFromAsn1(i)},/**
 * Converts an RSA public key to PEM format (using a SubjectPublicKeyInfo).
 *
 * @param key the public key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted public key.
 */tO.publicKeyToPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"PUBLIC KEY",body:tU.toDer(tO.publicKeyToAsn1(e)).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Converts an RSA public key to PEM format (using an RSAPublicKey).
 *
 * @param key the public key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted public key.
 */tO.publicKeyToRSAPublicKeyPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"RSA PUBLIC KEY",body:tU.toDer(tO.publicKeyToRSAPublicKey(e)).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Gets a fingerprint for the given public key.
 *
 * @param options the options to use.
 *          [md] the message digest object to use (defaults to forge.md.sha1).
 *          [type] the type of fingerprint, such as 'RSAPublicKey',
 *            'SubjectPublicKeyInfo' (defaults to 'RSAPublicKey').
 *          [encoding] an alternative output encoding, such as 'hex'
 *            (defaults to none, outputs a byte buffer).
 *          [delimiter] the delimiter to use between bytes for 'hex' encoded
 *            output, eg: ':' (defaults to none).
 *
 * @return the fingerprint as a byte buffer or other encoding based on options.
 */tO.getPublicKeyFingerprint=function(e,t){var r,i=(t=t||{}).md||_.md.sha1.create();switch(t.type||"RSAPublicKey"){case"RSAPublicKey":r=tU.toDer(tO.publicKeyToRSAPublicKey(e)).getBytes();break;case"SubjectPublicKeyInfo":r=tU.toDer(tO.publicKeyToAsn1(e)).getBytes();break;default:throw Error('Unknown fingerprint type "'+t.type+'".')}// hash public key bytes
i.start(),i.update(r);var n=i.digest();if("hex"===t.encoding){var a=n.toHex();return t.delimiter?a.match(/.{2}/g).join(t.delimiter):a}if("binary"===t.encoding)return n.getBytes();if(t.encoding)throw Error('Unknown encoding "'+t.encoding+'".');return n},/**
 * Converts a PKCS#10 certification request (CSR) from PEM format.
 *
 * Note: If the certification request is to be verified then compute hash
 * should be set to true. This will scan the CertificationRequestInfo part of
 * the ASN.1 object while it is converted so it doesn't need to be converted
 * back to ASN.1-DER-encoding later.
 *
 * @param pem the PEM-formatted certificate.
 * @param computeHash true to compute the hash for verification.
 * @param strict true to be strict when checking ASN.1 value lengths, false to
 *          allow truncated values (default: true).
 *
 * @return the certification request (CSR).
 */tO.certificationRequestFromPem=function(e,t,r){var i=_.pem.decode(e)[0];if("CERTIFICATE REQUEST"!==i.type){var n=Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');throw n.headerType=i.type,n}if(i.procType&&"ENCRYPTED"===i.procType.type)throw Error("Could not convert certification request from PEM; PEM is encrypted.");// convert DER to ASN.1 object
var a=tU.fromDer(i.body,r);return tO.certificationRequestFromAsn1(a,t)},/**
 * Converts a PKCS#10 certification request (CSR) to PEM format.
 *
 * @param csr the certification request.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted certification request.
 */tO.certificationRequestToPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"CERTIFICATE REQUEST",body:tU.toDer(tO.certificationRequestToAsn1(e)).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Creates an empty X.509v3 RSA certificate.
 *
 * @return the certificate.
 */tO.createCertificate=function(){var e={};return e.version=2,e.serialNumber="00",e.signatureOid=null,e.signature=null,e.siginfo={},e.siginfo.algorithmOid=null,e.validity={},e.validity.notBefore=new Date,e.validity.notAfter=new Date,e.issuer={},e.issuer.getField=function(t){return tH(e.issuer,t)},e.issuer.addField=function(t){t$([t]),e.issuer.attributes.push(t)},e.issuer.attributes=[],e.issuer.hash=null,e.subject={},e.subject.getField=function(t){return tH(e.subject,t)},e.subject.addField=function(t){t$([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.extensions=[],e.publicKey=null,e.md=null,/**
   * Sets the subject of this certificate.
   *
   * @param attrs the array of subject attributes to use.
   * @param uniqueId an optional a unique ID to use.
   */e.setSubject=function(t,r){// set new attributes, clear hash
t$(t),e.subject.attributes=t,delete e.subject.uniqueId,r&&(e.subject.uniqueId=r),e.subject.hash=null},/**
   * Sets the issuer of this certificate.
   *
   * @param attrs the array of issuer attributes to use.
   * @param uniqueId an optional a unique ID to use.
   */e.setIssuer=function(t,r){// set new attributes, clear hash
t$(t),e.issuer.attributes=t,delete e.issuer.uniqueId,r&&(e.issuer.uniqueId=r),e.issuer.hash=null},/**
   * Sets the extensions of this certificate.
   *
   * @param exts the array of extensions to use.
   */e.setExtensions=function(t){for(var r=0;r<t.length;++r)tW(t[r],{cert:e});// set new extensions
e.extensions=t},/**
   * Gets an extension by its name or id.
   *
   * @param options the name to use or an object with:
   *          name the name to use.
   *          id the id to use.
   *
   * @return the extension or null if not found.
   */e.getExtension=function(t){"string"==typeof t&&(t={name:t});for(var r,i=null,n=0;null===i&&n<e.extensions.length;++n)r=e.extensions[n],t.id&&r.id===t.id?i=r:t.name&&r.name===t.name&&(i=r);return i},/**
   * Signs this certificate using the given private key.
   *
   * @param key the private key to sign with.
   * @param md the message digest object to use (defaults to forge.md.sha1).
   */e.sign=function(t,r){// TODO: get signature OID from private key
e.md=r||_.md.sha1.create();var i=tP[e.md.algorithm+"WithRSAEncryption"];if(!i){var n=Error("Could not compute certificate digest. Unknown message digest algorithm OID.");throw n.algorithm=e.md.algorithm,n}e.signatureOid=e.siginfo.algorithmOid=i,// get TBSCertificate, convert to DER
e.tbsCertificate=tO.getTBSCertificate(e);var a=tU.toDer(e.tbsCertificate);// digest and sign
e.md.update(a.getBytes()),e.signature=t.sign(e.md)},/**
   * Attempts verify the signature on the passed certificate using this
   * certificate's public key.
   *
   * @param child the certificate to verify.
   *
   * @return true if verified, false if not.
   */e.verify=function(t){var r=!1;if(!e.issued(t)){var i=t.issuer,n=e.subject,a=Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");throw a.expectedIssuer=n.attributes,a.actualIssuer=i.attributes,a}var s=t.md;if(null===s){// create digest for OID signature types
s=tG({signatureOid:t.signatureOid,type:"certificate"});// produce DER formatted TBSCertificate and digest it
var o=t.tbsCertificate||tO.getTBSCertificate(t),l=tU.toDer(o);s.update(l.getBytes())}return null!==s&&(r=tz({certificate:e,md:s,signature:t.signature})),r},/**
   * Returns true if this certificate's issuer matches the passed
   * certificate's subject. Note that no signature check is performed.
   *
   * @param parent the certificate to check.
   *
   * @return true if this certificate's issuer matches the passed certificate's
   *         subject.
   */e.isIssuer=function(t){var r=!1,i=e.issuer,n=t.subject;// compare hashes if present
if(i.hash&&n.hash)r=i.hash===n.hash;else if(i.attributes.length===n.attributes.length){// all attributes are the same so issuer matches subject
r=!0;for(var a,s,o=0;r&&o<i.attributes.length;++o)a=i.attributes[o],s=n.attributes[o],(a.type!==s.type||a.value!==s.value)&&(r=!1)}return r},/**
   * Returns true if this certificate's subject matches the issuer of the
   * given certificate). Note that not signature check is performed.
   *
   * @param child the certificate to check.
   *
   * @return true if this certificate's subject matches the passed
   *         certificate's issuer.
   */e.issued=function(t){return t.isIssuer(e)},/**
   * Generates the subjectKeyIdentifier for this certificate as byte buffer.
   *
   * @return the subjectKeyIdentifier for this certificate as byte buffer.
   */e.generateSubjectKeyIdentifier=function(){/* See: 4.2.1.2 section of the the RFC3280, keyIdentifier is either:

      (1) The keyIdentifier is composed of the 160-bit SHA-1 hash of the
        value of the BIT STRING subjectPublicKey (excluding the tag,
        length, and number of unused bits).

      (2) The keyIdentifier is composed of a four bit type field with
        the value 0100 followed by the least significant 60 bits of the
        SHA-1 hash of the value of the BIT STRING subjectPublicKey
        (excluding the tag, length, and number of unused bit string bits).
    */// skipping the tag, length, and number of unused bits is the same
// as just using the RSAPublicKey (for RSA keys, which are the
// only ones supported)
return tO.getPublicKeyFingerprint(e.publicKey,{type:"RSAPublicKey"})},/**
   * Verifies the subjectKeyIdentifier extension value for this certificate
   * against its public key. If no extension is found, false will be
   * returned.
   *
   * @return true if verified, false if not.
   */e.verifySubjectKeyIdentifier=function(){for(var t=tP.subjectKeyIdentifier,r=0;r<e.extensions.length;++r){var i=e.extensions[r];if(i.id===t){var n=e.generateSubjectKeyIdentifier().getBytes();return _.util.hexToBytes(i.subjectKeyIdentifier)===n}}return!1},e},/**
 * Converts an X.509v3 RSA certificate from an ASN.1 object.
 *
 * Note: If the certificate is to be verified then compute hash should
 * be set to true. There is currently no implementation for converting
 * a certificate back to ASN.1 so the TBSCertificate part of the ASN.1
 * object needs to be scanned before the cert object is created.
 *
 * @param obj the asn1 representation of an X.509v3 RSA certificate.
 * @param computeHash true to compute the hash for verification.
 *
 * @return the certificate.
 */tO.certificateFromAsn1=function(e,t){// validate certificate and capture data
var r={},i=[];if(!tU.validate(e,tK,r,i)){var n=Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");throw n.errors=i,n}if(tU.derToOid(r.publicKeyOid)!==tO.oids.rsaEncryption)throw Error("Cannot read public key. OID is not RSA.");// create certificate
var a=tO.createCertificate();a.version=r.certVersion?r.certVersion.charCodeAt(0):0;var s=_.util.createBuffer(r.certSerialNumber);a.serialNumber=s.toHex(),a.signatureOid=_.asn1.derToOid(r.certSignatureOid),a.signatureParameters=tq(a.signatureOid,r.certSignatureParams,!0),a.siginfo.algorithmOid=_.asn1.derToOid(r.certinfoSignatureOid),a.siginfo.parameters=tq(a.siginfo.algorithmOid,r.certinfoSignatureParams,!1),a.signature=r.certSignature;var o=[];if(void 0!==r.certValidity1UTCTime&&o.push(tU.utcTimeToDate(r.certValidity1UTCTime)),void 0!==r.certValidity2GeneralizedTime&&o.push(tU.generalizedTimeToDate(r.certValidity2GeneralizedTime)),void 0!==r.certValidity3UTCTime&&o.push(tU.utcTimeToDate(r.certValidity3UTCTime)),void 0!==r.certValidity4GeneralizedTime&&o.push(tU.generalizedTimeToDate(r.certValidity4GeneralizedTime)),o.length>2)throw Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");if(o.length<2)throw Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");if(a.validity.notBefore=o[0],a.validity.notAfter=o[1],// keep TBSCertificate to preserve signature when exporting
a.tbsCertificate=r.tbsCertificate,t){// create digest for OID signature type
a.md=tG({signatureOid:a.signatureOid,type:"certificate"});// produce DER formatted TBSCertificate and digest it
var l=tU.toDer(a.tbsCertificate);a.md.update(l.getBytes())}// handle issuer, build issuer message digest
var c=_.md.sha1.create(),u=tU.toDer(r.certIssuer);c.update(u.getBytes()),a.issuer.getField=function(e){return tH(a.issuer,e)},a.issuer.addField=function(e){t$([e]),a.issuer.attributes.push(e)},a.issuer.attributes=tO.RDNAttributesAsArray(r.certIssuer),r.certIssuerUniqueId&&(a.issuer.uniqueId=r.certIssuerUniqueId),a.issuer.hash=c.digest().toHex();// handle subject, build subject message digest
var h=_.md.sha1.create(),f=tU.toDer(r.certSubject);return h.update(f.getBytes()),a.subject.getField=function(e){return tH(a.subject,e)},a.subject.addField=function(e){t$([e]),a.subject.attributes.push(e)},a.subject.attributes=tO.RDNAttributesAsArray(r.certSubject),r.certSubjectUniqueId&&(a.subject.uniqueId=r.certSubjectUniqueId),a.subject.hash=h.digest().toHex(),r.certExtensions?a.extensions=tO.certificateExtensionsFromAsn1(r.certExtensions):a.extensions=[],// convert RSA public key from ASN.1
a.publicKey=tO.publicKeyFromAsn1(r.subjectPublicKeyInfo),a},/**
 * Converts an ASN.1 extensions object (with extension sequences as its
 * values) into an array of extension objects with types and values.
 *
 * Supported extensions:
 *
 * id-ce-keyUsage OBJECT IDENTIFIER ::=  { id-ce 15 }
 * KeyUsage ::= BIT STRING {
 *   digitalSignature        (0),
 *   nonRepudiation          (1),
 *   keyEncipherment         (2),
 *   dataEncipherment        (3),
 *   keyAgreement            (4),
 *   keyCertSign             (5),
 *   cRLSign                 (6),
 *   encipherOnly            (7),
 *   decipherOnly            (8)
 * }
 *
 * id-ce-basicConstraints OBJECT IDENTIFIER ::=  { id-ce 19 }
 * BasicConstraints ::= SEQUENCE {
 *   cA                      BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint       INTEGER (0..MAX) OPTIONAL
 * }
 *
 * subjectAltName EXTENSION ::= {
 *   SYNTAX GeneralNames
 *   IDENTIFIED BY id-ce-subjectAltName
 * }
 *
 * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
 *
 * GeneralName ::= CHOICE {
 *   otherName      [0] INSTANCE OF OTHER-NAME,
 *   rfc822Name     [1] IA5String,
 *   dNSName        [2] IA5String,
 *   x400Address    [3] ORAddress,
 *   directoryName  [4] Name,
 *   ediPartyName   [5] EDIPartyName,
 *   uniformResourceIdentifier [6] IA5String,
 *   IPAddress      [7] OCTET STRING,
 *   registeredID   [8] OBJECT IDENTIFIER
 * }
 *
 * OTHER-NAME ::= TYPE-IDENTIFIER
 *
 * EDIPartyName ::= SEQUENCE {
 *   nameAssigner [0] DirectoryString {ub-name} OPTIONAL,
 *   partyName    [1] DirectoryString {ub-name}
 * }
 *
 * @param exts the extensions ASN.1 with extension sequences to parse.
 *
 * @return the array.
 */tO.certificateExtensionsFromAsn1=function(e){for(var t=[],r=0;r<e.value.length;++r)for(var i=e.value[r],n=0;n<i.value.length;++n)t.push(tO.certificateExtensionFromAsn1(i.value[n]));return t},/**
 * Parses a single certificate extension from ASN.1.
 *
 * @param ext the extension in ASN.1 format.
 *
 * @return the parsed extension as an object.
 */tO.certificateExtensionFromAsn1=function(e){// an extension has:
// [0] extnID      OBJECT IDENTIFIER
// [1] critical    BOOLEAN DEFAULT FALSE
// [2] extnValue   OCTET STRING
var t={};// if the oid is known, get its name
if(t.id=tU.derToOid(e.value[0].value),t.critical=!1,e.value[1].type===tU.Type.BOOLEAN?(t.critical=0!==e.value[1].value.charCodeAt(0),t.value=e.value[2].value):t.value=e.value[1].value,t.id in tP){// handle key usage
if(t.name=tP[t.id],"keyUsage"===t.name){// get value as BIT STRING
var r=tU.fromDer(t.value),i=0,n=0;r.value.length>1&&(// skip first byte, just indicates unused bits which
// will be padded with 0s anyway
// get bytes with flag bits
i=r.value.charCodeAt(1),n=r.value.length>2?r.value.charCodeAt(2):0),// set flags
t.digitalSignature=(128&i)==128,t.nonRepudiation=(64&i)==64,t.keyEncipherment=(32&i)==32,t.dataEncipherment=(16&i)==16,t.keyAgreement=(8&i)==8,t.keyCertSign=(4&i)==4,t.cRLSign=(2&i)==2,t.encipherOnly=(1&i)==1,t.decipherOnly=(128&n)==128}else if("basicConstraints"===t.name){// handle basic constraints
// get value as SEQUENCE
var r=tU.fromDer(t.value);r.value.length>0&&r.value[0].type===tU.Type.BOOLEAN?t.cA=0!==r.value[0].value.charCodeAt(0):t.cA=!1;// get path length constraint
var a=null;r.value.length>0&&r.value[0].type===tU.Type.INTEGER?a=r.value[0].value:r.value.length>1&&(a=r.value[1].value),null!==a&&(t.pathLenConstraint=tU.derToInteger(a))}else if("extKeyUsage"===t.name)for(var r=tU.fromDer(t.value),s=0;s<r.value.length;++s){var o=tU.derToOid(r.value[s].value);o in tP?t[tP[o]]=!0:t[o]=!0}else if("nsCertType"===t.name){// handle nsCertType
// get value as BIT STRING
var r=tU.fromDer(t.value),i=0;r.value.length>1&&// will be padded with 0s anyway
// get bytes with flag bits
(i=r.value.charCodeAt(1)),// set flags
t.client=(128&i)==128,t.server=(64&i)==64,t.email=(32&i)==32,t.objsign=(16&i)==16,t.reserved=(8&i)==8,t.sslCA=(4&i)==4,t.emailCA=(2&i)==2,t.objCA=(1&i)==1}else if("subjectAltName"===t.name||"issuerAltName"===t.name){// handle subjectAltName/issuerAltName
t.altNames=[];for(var l,r=tU.fromDer(t.value),c=0;c<r.value.length;++c){var u={type:// get GeneralName
(l=r.value[c]).type,value:l.value};// Note: Support for types 1,2,6,7,8
switch(t.altNames.push(u),l.type){// rfc822Name
case 1:// dNSName
case 2:// uniformResourceIdentifier (URI)
case 6:break;// IPAddress
case 7:// convert to IPv4/IPv6 string representation
u.ip=_.util.bytesToIP(l.value);break;// registeredID
case 8:u.oid=tU.derToOid(l.value)}}}else if("subjectKeyIdentifier"===t.name){// value is an OCTETSTRING w/the hash of the key-type specific
// public key structure (eg: RSAPublicKey)
var r=tU.fromDer(t.value);t.subjectKeyIdentifier=_.util.bytesToHex(r.value)}}return t},/**
 * Converts a PKCS#10 certification request (CSR) from an ASN.1 object.
 *
 * Note: If the certification request is to be verified then compute hash
 * should be set to true. There is currently no implementation for converting
 * a certificate back to ASN.1 so the CertificationRequestInfo part of the
 * ASN.1 object needs to be scanned before the csr object is created.
 *
 * @param obj the asn1 representation of a PKCS#10 certification request (CSR).
 * @param computeHash true to compute the hash for verification.
 *
 * @return the certification request (CSR).
 */tO.certificationRequestFromAsn1=function(e,t){// validate certification request and capture data
var r={},i=[];if(!tU.validate(e,tj,r,i)){var n=Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");throw n.errors=i,n}if(tU.derToOid(r.publicKeyOid)!==tO.oids.rsaEncryption)throw Error("Cannot read public key. OID is not RSA.");// create certification request
var a=tO.createCertificationRequest();if(a.version=r.csrVersion?r.csrVersion.charCodeAt(0):0,a.signatureOid=_.asn1.derToOid(r.csrSignatureOid),a.signatureParameters=tq(a.signatureOid,r.csrSignatureParams,!0),a.siginfo.algorithmOid=_.asn1.derToOid(r.csrSignatureOid),a.siginfo.parameters=tq(a.siginfo.algorithmOid,r.csrSignatureParams,!1),a.signature=r.csrSignature,// keep CertificationRequestInfo to preserve signature when exporting
a.certificationRequestInfo=r.certificationRequestInfo,t){// create digest for OID signature type
a.md=tG({signatureOid:a.signatureOid,type:"certification request"});// produce DER formatted CertificationRequestInfo and digest it
var s=tU.toDer(a.certificationRequestInfo);a.md.update(s.getBytes())}// handle subject, build subject message digest
var o=_.md.sha1.create();return a.subject.getField=function(e){return tH(a.subject,e)},a.subject.addField=function(e){t$([e]),a.subject.attributes.push(e)},a.subject.attributes=tO.RDNAttributesAsArray(r.certificationRequestInfoSubject,o),a.subject.hash=o.digest().toHex(),// convert RSA public key from ASN.1
a.publicKey=tO.publicKeyFromAsn1(r.subjectPublicKeyInfo),// convert attributes from ASN.1
a.getAttribute=function(e){return tH(a,e)},a.addAttribute=function(e){t$([e]),a.attributes.push(e)},a.attributes=tO.CRIAttributesAsArray(r.certificationRequestInfoAttributes||[]),a},/**
 * Creates an empty certification request (a CSR or certificate signing
 * request). Once created, its public key and attributes can be set and then
 * it can be signed.
 *
 * @return the empty certification request.
 */tO.createCertificationRequest=function(){var e={};return e.version=0,e.signatureOid=null,e.signature=null,e.siginfo={},e.siginfo.algorithmOid=null,e.subject={},e.subject.getField=function(t){return tH(e.subject,t)},e.subject.addField=function(t){t$([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.publicKey=null,e.attributes=[],e.getAttribute=function(t){return tH(e,t)},e.addAttribute=function(t){t$([t]),e.attributes.push(t)},e.md=null,/**
   * Sets the subject of this certification request.
   *
   * @param attrs the array of subject attributes to use.
   */e.setSubject=function(t){// set new attributes
t$(t),e.subject.attributes=t,e.subject.hash=null},/**
   * Sets the attributes of this certification request.
   *
   * @param attrs the array of attributes to use.
   */e.setAttributes=function(t){// set new attributes
t$(t),e.attributes=t},/**
   * Signs this certification request using the given private key.
   *
   * @param key the private key to sign with.
   * @param md the message digest object to use (defaults to forge.md.sha1).
   */e.sign=function(t,r){// TODO: get signature OID from private key
e.md=r||_.md.sha1.create();var i=tP[e.md.algorithm+"WithRSAEncryption"];if(!i){var n=Error("Could not compute certification request digest. Unknown message digest algorithm OID.");throw n.algorithm=e.md.algorithm,n}e.signatureOid=e.siginfo.algorithmOid=i,// get CertificationRequestInfo, convert to DER
e.certificationRequestInfo=tO.getCertificationRequestInfo(e);var a=tU.toDer(e.certificationRequestInfo);// digest and sign
e.md.update(a.getBytes()),e.signature=t.sign(e.md)},/**
   * Attempts verify the signature on the passed certification request using
   * its public key.
   *
   * A CSR that has been exported to a file in PEM format can be verified using
   * OpenSSL using this command:
   *
   * openssl req -in <the-csr-pem-file> -verify -noout -text
   *
   * @return true if verified, false if not.
   */e.verify=function(){var t=!1,r=e.md;if(null===r){r=tG({signatureOid:e.signatureOid,type:"certification request"});// produce DER formatted CertificationRequestInfo and digest it
var i=e.certificationRequestInfo||tO.getCertificationRequestInfo(e),n=tU.toDer(i);r.update(n.getBytes())}return null!==r&&(t=tz({certificate:e,md:r,signature:e.signature})),t},e};var tX=new Date("1950-01-01T00:00:00Z"),tZ=new Date("2050-01-01T00:00:00Z");/**
 * Converts a Date object to ASN.1
 * Handles the different format before and after 1st January 2050
 *
 * @param date date object.
 *
 * @return the ASN.1 object representing the date.
 */function tJ(e){return e>=tX&&e<tZ?tU.create(tU.Class.UNIVERSAL,tU.Type.UTCTIME,!1,tU.dateToUtcTime(e)):tU.create(tU.Class.UNIVERSAL,tU.Type.GENERALIZEDTIME,!1,tU.dateToGeneralizedTime(e))}/**
 * Gets the ASN.1 TBSCertificate part of an X.509v3 certificate.
 *
 * @param cert the certificate.
 *
 * @return the asn1 TBSCertificate.
 */tO.getTBSCertificate=function(e){// TBSCertificate
var t=tJ(e.validity.notBefore),r=tJ(e.validity.notAfter),i=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// version
tU.create(tU.Class.CONTEXT_SPECIFIC,0,!0,[// integer
tU.create(tU.Class.UNIVERSAL,tU.Type.INTEGER,!1,tU.integerToDer(e.version).getBytes())]),// serialNumber
tU.create(tU.Class.UNIVERSAL,tU.Type.INTEGER,!1,_.util.hexToBytes(e.serialNumber)),// signature
tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// algorithm
tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(e.siginfo.algorithmOid).getBytes()),// parameters
tY(e.siginfo.algorithmOid,e.siginfo.parameters)]),// issuer
tQ(e.issuer),// validity
tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[t,r]),// subject
tQ(e.subject),// SubjectPublicKeyInfo
tO.publicKeyToAsn1(e.publicKey)]);return e.issuer.uniqueId&&i.value.push(tU.create(tU.Class.CONTEXT_SPECIFIC,1,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,"\x00"+e.issuer.uniqueId)])),e.subject.uniqueId&&i.value.push(tU.create(tU.Class.CONTEXT_SPECIFIC,2,!0,[tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,"\x00"+e.subject.uniqueId)])),e.extensions.length>0&&i.value.push(tO.certificateExtensionsToAsn1(e.extensions)),i},/**
 * Gets the ASN.1 CertificationRequestInfo part of a
 * PKCS#10 CertificationRequest.
 *
 * @param csr the certification request.
 *
 * @return the asn1 CertificationRequestInfo.
 */tO.getCertificationRequestInfo=function(e){return tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// version
tU.create(tU.Class.UNIVERSAL,tU.Type.INTEGER,!1,tU.integerToDer(e.version).getBytes()),// subject
tQ(e.subject),// SubjectPublicKeyInfo
tO.publicKeyToAsn1(e.publicKey),// attributes
/**
 * Converts a certification request's attributes to an ASN.1 set of
 * CRIAttributes.
 *
 * @param csr certification request.
 *
 * @return the ASN.1 set of CRIAttributes.
 */function(e){// create an empty context-specific container
var t=tU.create(tU.Class.CONTEXT_SPECIFIC,0,!0,[]);// no attributes, return empty container
if(0===e.attributes.length)return t;for(var r=e.attributes,i=0;i<r.length;++i){var n=r[i],a=n.value,s=tU.Type.UTF8;"valueTagClass"in n&&(s=n.valueTagClass),s===tU.Type.UTF8&&(a=_.util.encodeUtf8(a));var o=!1;"valueConstructed"in n&&(o=n.valueConstructed);// FIXME: handle more encodings
// create a RelativeDistinguishedName set
// each value in the set is an AttributeTypeAndValue first
// containing the type (an OID) and second the value
var l=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// AttributeType
tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(n.type).getBytes()),tU.create(tU.Class.UNIVERSAL,tU.Type.SET,!0,[// AttributeValue
tU.create(tU.Class.UNIVERSAL,s,o,a)])]);t.value.push(l)}return t}(e)])},/**
 * Converts a DistinguishedName (subject or issuer) to an ASN.1 object.
 *
 * @param dn the DistinguishedName.
 *
 * @return the asn1 representation of a DistinguishedName.
 */tO.distinguishedNameToAsn1=function(e){return tQ(e)},/**
 * Converts an X.509v3 RSA certificate to an ASN.1 object.
 *
 * @param cert the certificate.
 *
 * @return the asn1 representation of an X.509v3 RSA certificate.
 */tO.certificateToAsn1=function(e){// prefer cached TBSCertificate over generating one
var t=e.tbsCertificate||tO.getTBSCertificate(e);// Certificate
return tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// TBSCertificate
t,// AlgorithmIdentifier (signature algorithm)
tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// algorithm
tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(e.signatureOid).getBytes()),// parameters
tY(e.signatureOid,e.signatureParameters)]),// SignatureValue
tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,"\x00"+e.signature)])},/**
 * Converts X.509v3 certificate extensions to ASN.1.
 *
 * @param exts the extensions to convert.
 *
 * @return the extensions in ASN.1 format.
 */tO.certificateExtensionsToAsn1=function(e){// create top-level extension container
var t=tU.create(tU.Class.CONTEXT_SPECIFIC,3,!0,[]),r=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);t.value.push(r);for(var i=0;i<e.length;++i)r.value.push(tO.certificateExtensionToAsn1(e[i]));return t},/**
 * Converts a single certificate extension to ASN.1.
 *
 * @param ext the extension to convert.
 *
 * @return the extension in ASN.1 format.
 */tO.certificateExtensionToAsn1=function(e){// create a sequence for each extension
var t=tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[]);// extnID (OID)
t.value.push(tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(e.id).getBytes())),e.critical&&t.value.push(tU.create(tU.Class.UNIVERSAL,tU.Type.BOOLEAN,!1,String.fromCharCode(255)));var r=e.value;return"string"!=typeof e.value&&(r=tU.toDer(r).getBytes()),// extnValue (OCTET STRING)
t.value.push(tU.create(tU.Class.UNIVERSAL,tU.Type.OCTETSTRING,!1,r)),t},/**
 * Converts a PKCS#10 certification request to an ASN.1 object.
 *
 * @param csr the certification request.
 *
 * @return the asn1 representation of a certification request.
 */tO.certificationRequestToAsn1=function(e){// prefer cached CertificationRequestInfo over generating one
var t=e.certificationRequestInfo||tO.getCertificationRequestInfo(e);// Certificate
return tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// CertificationRequestInfo
t,// AlgorithmIdentifier (signature algorithm)
tU.create(tU.Class.UNIVERSAL,tU.Type.SEQUENCE,!0,[// algorithm
tU.create(tU.Class.UNIVERSAL,tU.Type.OID,!1,tU.oidToDer(e.signatureOid).getBytes()),// parameters
tY(e.signatureOid,e.signatureParameters)]),// signature
tU.create(tU.Class.UNIVERSAL,tU.Type.BITSTRING,!1,"\x00"+e.signature)])},/**
 * Creates a CA store.
 *
 * @param certs an optional array of certificate objects or PEM-formatted
 *          certificate strings to add to the CA store.
 *
 * @return the CA store.
 */tO.createCaStore=function(e){// create CA store
var t={// stored certificates
certs:{}};function r(e){return i(e),t.certs[e.hash]||null}function i(e){// produce subject hash if it doesn't exist
if(!e.hash){var t=_.md.sha1.create();e.attributes=tO.RDNAttributesAsArray(tQ(e),t),e.hash=t.digest().toHex()}}// auto-add passed in certs
if(/**
   * Gets the certificate that issued the passed certificate or its
   * 'parent'.
   *
   * @param cert the certificate to get the parent for.
   *
   * @return the parent certificate or null if none was found.
   */t.getIssuer=function(e){// see if there are multiple matches
/*if(forge.util.isArray(rval)) {
      // TODO: resolve multiple matches by checking
      // authorityKey/subjectKey/issuerUniqueID/other identifiers, etc.
      // FIXME: or alternatively do authority key mapping
      // if possible (X.509v1 certs can't work?)
      throw new Error('Resolving multiple issuer matches not implemented yet.');
    }*/return r(e.issuer)},/**
   * Adds a trusted certificate to the store.
   *
   * @param cert the certificate to add as a trusted certificate (either a
   *          pki.certificate object or a PEM-formatted certificate).
   */t.addCertificate=function(e){if("string"==typeof e&&(e=_.pki.certificateFromPem(e)),i(e.subject),!t.hasCertificate(e)){if(e.subject.hash in t.certs){// subject hash already exists, append to array
var r=t.certs[e.subject.hash];_.util.isArray(r)||(r=[r]),r.push(e),t.certs[e.subject.hash]=r}else t.certs[e.subject.hash]=e}},/**
   * Checks to see if the given certificate is in the store.
   *
   * @param cert the certificate to check (either a pki.certificate or a
   *          PEM-formatted certificate).
   *
   * @return true if the certificate is in the store, false if not.
   */t.hasCertificate=function(e){// convert from pem if necessary
"string"==typeof e&&(e=_.pki.certificateFromPem(e));var t=r(e.subject);if(!t)return!1;_.util.isArray(t)||(t=[t]);for(var i=tU.toDer(tO.certificateToAsn1(e)).getBytes(),n=0;n<t.length;++n)if(i===tU.toDer(tO.certificateToAsn1(t[n])).getBytes())return!0;return!1},/**
   * Lists all of the certificates kept in the store.
   *
   * @return an array of all of the pki.certificate objects in the store.
   */t.listAllCertificates=function(){var e=[];for(var r in t.certs)if(t.certs.hasOwnProperty(r)){var i=t.certs[r];if(_.util.isArray(i))for(var n=0;n<i.length;++n)e.push(i[n]);else e.push(i)}return e},/**
   * Removes a certificate from the store.
   *
   * @param cert the certificate to remove (either a pki.certificate or a
   *          PEM-formatted certificate).
   *
   * @return the certificate that was removed or null if the certificate
   *           wasn't in store.
   */t.removeCertificate=function(e){if("string"==typeof e&&(e=_.pki.certificateFromPem(e)),i(e.subject),!t.hasCertificate(e))return null;var n,a=r(e.subject);if(!_.util.isArray(a))return n=t.certs[e.subject.hash],delete t.certs[e.subject.hash],n;for(var s=tU.toDer(tO.certificateToAsn1(e)).getBytes(),o=0;o<a.length;++o)s===tU.toDer(tO.certificateToAsn1(a[o])).getBytes()&&(n=a[o],a.splice(o,1));return 0===a.length&&delete t.certs[e.subject.hash],n},e)for(var n=0;n<e.length;++n){var a=e[n];t.addCertificate(a)}return t},/**
 * Certificate verification errors, based on TLS.
 */tO.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",unknown_ca:"forge.pki.UnknownCertificateAuthority"},/**
 * Verifies a certificate chain against the given Certificate Authority store
 * with an optional custom verify callback.
 *
 * @param caStore a certificate store to verify against.
 * @param chain the certificate chain to verify, with the root or highest
 *          authority at the end (an array of certificates).
 * @param options a callback to be called for every certificate in the chain or
 *                  an object with:
 *                  verify a callback to be called for every certificate in the
 *                    chain
 *                  validityCheckDate the date against which the certificate
 *                    validity period should be checked. Pass null to not check
 *                    the validity period. By default, the current date is used.
 *
 * The verify callback has the following signature:
 *
 * verified - Set to true if certificate was verified, otherwise the
 *   pki.certificateError for why the certificate failed.
 * depth - The current index in the chain, where 0 is the end point's cert.
 * certs - The certificate chain, *NOTE* an empty chain indicates an anonymous
 *   end point.
 *
 * The function returns true on success and on failure either the appropriate
 * pki.certificateError or an object with 'error' set to the appropriate
 * pki.certificateError and 'message' set to a custom error message.
 *
 * @return true if successful, error thrown if not.
 */tO.verifyCertificateChain=function(e,t,r){"function"==typeof r&&(r={verify:r}),r=r||{};var i=// copy cert chain references to another array to protect against changes
// in verify callback
(t=t.slice(0)).slice(0),n=r.validityCheckDate;void 0===n&&(n=new Date);// verify each cert in the chain using its parent, where the parent
// is either the next in the chain or from the CA store
var a=!0,s=null,o=0;do{var l=t.shift(),c=null,u=!1;// 2. verify with parent from chain or CA store
if(n&&(n<l.validity.notBefore||n>l.validity.notAfter)&&(s={message:"Certificate is not valid yet or has expired.",error:tO.certificateError.certificate_expired,notBefore:l.validity.notBefore,notAfter:l.validity.notAfter,// TODO: we might want to reconsider renaming 'now' to
// 'validityCheckDate' should this API be changed in the future.
now:n}),null===s){if(null===(c=t[0]||e.getIssuer(l))&&l.isIssuer(l)&&(u=!0,c=l),c){// FIXME: current CA store implementation might have multiple
// certificates where the issuer can't be determined from the
// certificate (happens rarely with, eg: old certificates) so normalize
// by always putting parents into an array
// TODO: there's may be an extreme degenerate case currently uncovered
// where an old intermediate certificate seems to have a matching parent
// but none of the parents actually verify ... but the intermediate
// is in the CA and it should pass this check; needs investigation
var h=c;_.util.isArray(h)||(h=[h]);for(// try to verify with each possible parent (typically only one)
var f=!1;!f&&h.length>0;){c=h.shift();try{f=c.verify(l)}catch(e){// failure to verify, don't care why, try next one
}}f||(s={message:"Certificate signature is invalid.",error:tO.certificateError.bad_certificate})}null!==s||c&&!u||e.hasCertificate(l)||(s={message:"Certificate is not trusted.",error:tO.certificateError.unknown_ca})}// 5. TODO: check names with permitted names tree
// 6. TODO: check names against excluded names tree
// 7. check for unsupported critical extensions
if(null===s&&c&&!l.isIssuer(c)&&(s={message:"Certificate issuer is invalid.",error:tO.certificateError.bad_certificate}),null===s)for(var p={keyUsage:!0,basicConstraints:!0},d=0;null===s&&d<l.extensions.length;++d){var g=l.extensions[d];!g.critical||g.name in p||(s={message:"Certificate has an unsupported critical extension.",error:tO.certificateError.unsupported_certificate})}// 8. check for CA if cert is not first or is the only certificate
// remaining in chain with no parent or is self-signed
if(null===s&&(!a||0===t.length&&(!c||u))){// first check keyUsage extension and then basic constraints
var y=l.getExtension("basicConstraints"),m=l.getExtension("keyUsage");null===m||m.keyCertSign&&null!==y||(s={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:tO.certificateError.bad_certificate}),null!==s||null===y||y.cA||(s={message:"Certificate basicConstraints indicates the certificate is not a CA.",error:tO.certificateError.bad_certificate}),null===s&&null!==m&&"pathLenConstraint"in y&&o-1>y.pathLenConstraint&&(s={message:"Certificate basicConstraints pathLenConstraint violated.",error:tO.certificateError.bad_certificate})}// call application callback
var v=null===s||s.error,C=r.verify?r.verify(v,o,i):v;if(!0===C)s=null;else // throw error
throw!0===v&&(s={message:"The application rejected the certificate.",error:tO.certificateError.bad_certificate}),(C||0===C)&&("object"!=typeof C||_.util.isArray(C)?"string"==typeof C&&(s.error=C):(C.message&&(s.message=C.message),C.error&&(s.error=C.error))),s;// no longer first cert in chain
a=!1,++o}while(t.length>0)return!0};// shortcut for asn.1 & PKI API
var t1=_.asn1,t0=_.pki,t2=_.pkcs12=_.pkcs12||{},t6={name:"ContentInfo",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.contentType",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:t1.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"content"}]},t5={name:"PFX",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.version",tagClass:t1.Class.UNIVERSAL,type:t1.Type.INTEGER,constructed:!1,capture:"version"},t6,{name:"PFX.macData",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"mac",value:[{name:"PFX.macData.mac",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm.algorithm",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OID,constructed:!1,capture:"macAlgorithm"},{name:"PFX.macData.mac.digestAlgorithm.parameters",tagClass:t1.Class.UNIVERSAL,captureAsn1:"macAlgorithmParameters"}]},{name:"PFX.macData.mac.digest",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OCTETSTRING,constructed:!1,capture:"macDigest"}]},{name:"PFX.macData.macSalt",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OCTETSTRING,constructed:!1,capture:"macSalt"},{name:"PFX.macData.iterations",tagClass:t1.Class.UNIVERSAL,type:t1.Type.INTEGER,constructed:!1,optional:!0,capture:"macIterations"}]}]},t3={name:"SafeBag",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"SafeBag.bagId",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OID,constructed:!1,capture:"bagId"},{name:"SafeBag.bagValue",tagClass:t1.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"bagValue"},{name:"SafeBag.bagAttributes",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SET,constructed:!0,optional:!0,capture:"bagAttributes"}]},t4={name:"Attribute",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"Attribute.attrId",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OID,constructed:!1,capture:"oid"},{name:"Attribute.attrValues",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SET,constructed:!0,capture:"values"}]},t8={name:"CertBag",tagClass:t1.Class.UNIVERSAL,type:t1.Type.SEQUENCE,constructed:!0,value:[{name:"CertBag.certId",tagClass:t1.Class.UNIVERSAL,type:t1.Type.OID,constructed:!1,capture:"certId"},{name:"CertBag.certValue",tagClass:t1.Class.CONTEXT_SPECIFIC,constructed:!0,/* So far we only support X.509 certificates (which are wrapped in
       an OCTET STRING, hence hard code that here). */value:[{name:"CertBag.certValue[0]",tagClass:t1.Class.UNIVERSAL,type:t1.Class.OCTETSTRING,constructed:!1,capture:"cert"}]}]};/**
 * Search SafeContents structure for bags with matching attributes.
 *
 * The search can optionally be narrowed by a certain bag type.
 *
 * @param safeContents the SafeContents structure to search in.
 * @param attrName the name of the attribute to compare against.
 * @param attrValue the attribute value to search for.
 * @param [bagType] bag type to narrow search by.
 *
 * @return an array of matching bags.
 */function t7(e,t,r,i){for(var n=[],a=0;a<e.length;a++)for(var s=0;s<e[a].safeBags.length;s++){var o=e[a].safeBags[s];if(void 0===i||o.type===i){// only filter by bag type, no attribute specified
if(null===t){n.push(o);continue}void 0!==o.attributes[t]&&o.attributes[t].indexOf(r)>=0&&n.push(o)}}return n}/**
 * Decodes PKCS#7 Data. PKCS#7 (RFC 2315) defines "Data" as an OCTET STRING,
 * but it is sometimes an OCTET STRING that is composed/constructed of chunks,
 * each its own OCTET STRING. This is BER-encoding vs. DER-encoding. This
 * function transforms this corner-case into the usual simple,
 * non-composed/constructed OCTET STRING.
 *
 * This function may be moved to ASN.1 at some point to better deal with
 * more BER-encoding issues, should they arise.
 *
 * @param data the ASN.1 Data object to transform.
 */function t9(e){// handle special case of "chunked" data content: an octet string composed
// of other octet strings
if(e.composed||e.constructed){for(var t=_.util.createBuffer(),r=0;r<e.value.length;++r)t.putBytes(e.value[r].value);e.composed=e.constructed=!1,e.value=t.getBytes()}return e}/**
 * Converts a PKCS#12 PFX in ASN.1 notation into a PFX object.
 *
 * @param obj The PKCS#12 PFX in ASN.1 notation.
 * @param strict true to use strict DER decoding, false not to (default: true).
 * @param {String} password Password to decrypt with (optional).
 *
 * @return PKCS#12 PFX object.
 */t2.pkcs12FromAsn1=function(e,t,r){"string"==typeof t?(r=t,t=!0):void 0===t&&(t=!0);// validate PFX and capture data
var i={};if(!t1.validate(e,t5,i,[])){var n=Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");throw n.errors=n,n}var a={version:i.version.charCodeAt(0),safeContents:[],/**
     * Gets bags with matching attributes.
     *
     * @param filter the attributes to filter by:
     *          [localKeyId] the localKeyId to search for.
     *          [localKeyIdHex] the localKeyId in hex to search for.
     *          [friendlyName] the friendly name to search for.
     *          [bagType] bag type to narrow each attribute search by.
     *
     * @return a map of attribute type to an array of matching bags or, if no
     *           attribute was given but a bag type, the map key will be the
     *           bag type.
     */getBags:function(e){var t,r={};return"localKeyId"in e?t=e.localKeyId:"localKeyIdHex"in e&&(t=_.util.hexToBytes(e.localKeyIdHex)),void 0===t&&!("friendlyName"in e)&&"bagType"in e&&(r[e.bagType]=t7(a.safeContents,null,null,e.bagType)),void 0!==t&&(r.localKeyId=t7(a.safeContents,"localKeyId",t,e.bagType)),"friendlyName"in e&&(r.friendlyName=t7(a.safeContents,"friendlyName",e.friendlyName,e.bagType)),r},/**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching friendlyName attribute.
     *
     * @param friendlyName the friendly name to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching friendlyName attribute.
     */getBagsByFriendlyName:function(e,t){return t7(a.safeContents,"friendlyName",e,t)},/**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching localKeyId attribute.
     *
     * @param localKeyId the localKeyId to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching localKeyId attribute.
     */getBagsByLocalKeyId:function(e,t){return t7(a.safeContents,"localKeyId",e,t)}};if(3!==i.version.charCodeAt(0)){var n=Error("PKCS#12 PFX of version other than 3 not supported.");throw n.version=i.version.charCodeAt(0),n}if(t1.derToOid(i.contentType)!==t0.oids.data){var n=Error("Only PKCS#12 PFX in password integrity mode supported.");throw n.oid=t1.derToOid(i.contentType),n}var s=i.content.value[0];if(s.tagClass!==t1.Class.UNIVERSAL||s.type!==t1.Type.OCTETSTRING)throw Error("PKCS#12 authSafe content data is not an OCTET STRING.");// check for MAC
if(s=t9(s),i.mac){var o=null,l=0,c=t1.derToOid(i.macAlgorithm);switch(c){case t0.oids.sha1:o=_.md.sha1.create(),l=20;break;case t0.oids.sha256:o=_.md.sha256.create(),l=32;break;case t0.oids.sha384:o=_.md.sha384.create(),l=48;break;case t0.oids.sha512:o=_.md.sha512.create(),l=64;break;case t0.oids.md5:o=_.md.md5.create(),l=16}if(null===o)throw Error("PKCS#12 uses unsupported MAC algorithm: "+c);// verify MAC (iterations default to 1)
var u=new _.util.ByteBuffer(i.macSalt),h="macIterations"in i?parseInt(_.util.bytesToHex(i.macIterations),16):1,f=t2.generateKey(r,u,3,h,l,o),p=_.hmac.create();if(p.start(o,f),p.update(s.value),p.getMac().getBytes()!==i.macDigest)throw Error("PKCS#12 MAC could not be verified. Invalid password?")}return(/**
 * Decode PKCS#12 AuthenticatedSafe (BER encoded) into PFX object.
 *
 * The AuthenticatedSafe is a BER-encoded SEQUENCE OF ContentInfo.
 *
 * @param pfx The PKCS#12 PFX object to fill.
 * @param {String} authSafe BER-encoded AuthenticatedSafe.
 * @param strict true to use strict DER decoding, false not to.
 * @param {String} password Password to decrypt with (optional).
 */function(e,t,r,i){if((t=t1.fromDer(t,r)).tagClass!==t1.Class.UNIVERSAL||t.type!==t1.Type.SEQUENCE||!0!==t.constructed)throw Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");for(var n=0;n<t.value.length;n++){var a=t.value[n],s={},o=[];if(!t1.validate(a,t6,s,o)){var l=Error("Cannot read ContentInfo.");throw l.errors=o,l}var c={encrypted:!1},u=null,h=s.content.value[0];switch(t1.derToOid(s.contentType)){case t0.oids.data:if(h.tagClass!==t1.Class.UNIVERSAL||h.type!==t1.Type.OCTETSTRING)throw Error("PKCS#12 SafeContents Data is not an OCTET STRING.");u=t9(h).value;break;case t0.oids.encryptedData:u=/**
 * Decrypt PKCS#7 EncryptedData structure.
 *
 * @param data ASN.1 encoded EncryptedContentInfo object.
 * @param password The user-provided password.
 *
 * @return The decrypted SafeContents (ASN.1 object).
 */function(e,t){var r={},i=[];if(!t1.validate(e,_.pkcs7.asn1.encryptedDataValidator,r,i)){var n=Error("Cannot read EncryptedContentInfo.");throw n.errors=i,n}var a=t1.derToOid(r.contentType);if(a!==t0.oids.data){var n=Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");throw n.oid=a,n}// get cipher
a=t1.derToOid(r.encAlgorithm);var s=t0.pbe.getCipher(a,r.encParameter,t),o=t9(r.encryptedContentAsn1),l=_.util.createBuffer(o.value);if(s.update(l),!s.finish())throw Error("Failed to decrypt PKCS#12 SafeContents.");return s.output.getBytes()}(h,i),c.encrypted=!0;break;default:var l=Error("Unsupported PKCS#12 contentType.");throw l.contentType=t1.derToOid(s.contentType),l}c.safeBags=/**
 * Decode PKCS#12 SafeContents (BER-encoded) into array of Bag objects.
 *
 * The safeContents is a BER-encoded SEQUENCE OF SafeBag.
 *
 * @param {String} safeContents BER-encoded safeContents.
 * @param strict true to use strict DER decoding, false not to.
 * @param {String} password Password to decrypt with (optional).
 *
 * @return {Array} Array of Bag objects.
 */function(e,t,r){// if strict and no safe contents, return empty safes
if(!t&&0===e.length)return[];if(// actually it's BER-encoded
(e=t1.fromDer(e,t)).tagClass!==t1.Class.UNIVERSAL||e.type!==t1.Type.SEQUENCE||!0!==e.constructed)throw Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");for(var i=[],n=0;n<e.value.length;n++){var a,s,o=e.value[n],l={},c=[];if(!t1.validate(o,t3,l,c)){var u=Error("Cannot read SafeBag.");throw u.errors=c,u}/* Create bag object and push to result array. */var h={type:t1.derToOid(l.bagId),attributes:/**
 * Decode PKCS#12 SET OF PKCS12Attribute into JavaScript object.
 *
 * @param attributes SET OF PKCS12Attribute (ASN.1 object).
 *
 * @return the decoded attributes.
 */function(e){var t={};if(void 0!==e)for(var r=0;r<e.length;++r){var i={},n=[];if(!t1.validate(e[r],t4,i,n)){var a=Error("Cannot read PKCS#12 BagAttribute.");throw a.errors=n,a}var s=t1.derToOid(i.oid);if(void 0!==t0.oids[s]){t[t0.oids[s]]=[];for(var o=0;o<i.values.length;++o)t[t0.oids[s]].push(i.values[o].value)}}return t}(l.bagAttributes)};i.push(h);var f=l.bagValue.value[0];switch(h.type){case t0.oids.pkcs8ShroudedKeyBag:if(null===/* bagAsn1 has a EncryptedPrivateKeyInfo, which we need to decrypt.
           Afterwards we can handle it like a keyBag,
           which is a PrivateKeyInfo. */(f=t0.decryptPrivateKeyInfo(f,r)))throw Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");/* fall through */case t0.oids.keyBag:/* A PKCS#12 keyBag is a simple PrivateKeyInfo as understood by our
           PKI module, hence we don't have to do validation/capturing here,
           just pass what we already got. */try{h.key=t0.privateKeyFromAsn1(f)}catch(e){// ignore unknown key type, pass asn1 value
h.key=null,h.asn1=f}continue;/* Nothing more to do. */case t0.oids.certBag:/* A PKCS#12 certBag can wrap both X.509 and sdsi certificates.
           Therefore put the SafeBag content through another validator to
           capture the fields.  Afterwards check & store the results. */a=t8,s=function(){if(t1.derToOid(l.certId)!==t0.oids.x509Certificate){var e=Error("Unsupported certificate type, only X.509 supported.");throw e.oid=t1.derToOid(l.certId),e}// true=produce cert hash
var r=t1.fromDer(l.cert,t);try{h.cert=t0.certificateFromAsn1(r,!0)}catch(e){// ignore unknown cert type, pass asn1 value
h.cert=null,h.asn1=r}};break;default:var u=Error("Unsupported PKCS#12 SafeBag type.");throw u.oid=h.type,u}/* Validate SafeBag value (i.e. CertBag, etc.) and capture data if needed. */if(void 0!==a&&!t1.validate(f,a,l,c)){var u=Error("Cannot read PKCS#12 "+a.name);throw u.errors=c,u}/* Call decoder function from above to store the results. */s()}return i}(u,r,i),e.safeContents.push(c)}}(a,s.value,t,r),a)},/**
 * Wraps a private key and certificate in a PKCS#12 PFX wrapper. If a
 * password is provided then the private key will be encrypted.
 *
 * An entire certificate chain may also be included. To do this, pass
 * an array for the "cert" parameter where the first certificate is
 * the one that is paired with the private key and each subsequent one
 * verifies the previous one. The certificates may be in PEM format or
 * have been already parsed by Forge.
 *
 * @todo implement password-based-encryption for the whole package
 *
 * @param key the private key.
 * @param cert the certificate (may be an array of certificates in order
 *          to specify a certificate chain).
 * @param password the password to use, null for none.
 * @param options:
 *          algorithm the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des'), defaults to 'aes128'.
 *          count the iteration count to use.
 *          saltSize the salt size to use.
 *          useMac true to include a MAC, false not to, defaults to true.
 *          localKeyId the local key ID to use, in hex.
 *          friendlyName the friendly name to use.
 *          generateLocalKeyId true to generate a random local key ID,
 *            false not to, defaults to true.
 *
 * @return the PKCS#12 PFX ASN.1 object.
 */t2.toPkcs12Asn1=function(e,t,r,i){// set default options
(i=i||{}).saltSize=i.saltSize||8,i.count=i.count||2048,i.algorithm=i.algorithm||i.encAlgorithm||"aes128","useMac"in i||(i.useMac=!0),"localKeyId"in i||(i.localKeyId=null),"generateLocalKeyId"in i||(i.generateLocalKeyId=!0);var n,a,s=i.localKeyId;if(null!==s)s=_.util.hexToBytes(s);else if(i.generateLocalKeyId){// use SHA-1 of paired cert, if available
if(t){var o=_.util.isArray(t)?t[0]:t;"string"==typeof o&&(o=t0.certificateFromPem(o));var l=_.md.sha1.create();l.update(t1.toDer(t0.certificateToAsn1(o)).getBytes()),s=l.digest().getBytes()}else // from private key components), see: cert.generateSubjectKeyIdentifier
// generate random bytes
s=_.random.getBytes(20)}var c=[];null!==s&&c.push(t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// attrId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.localKeyId).getBytes()),// attrValues
t1.create(t1.Class.UNIVERSAL,t1.Type.SET,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,s)])])),"friendlyName"in i&&c.push(t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// attrId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.friendlyName).getBytes()),// attrValues
t1.create(t1.Class.UNIVERSAL,t1.Type.SET,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.BMPSTRING,!1,i.friendlyName)])])),c.length>0&&(n=t1.create(t1.Class.UNIVERSAL,t1.Type.SET,!0,c));// collect contents for AuthenticatedSafe
var u=[],h=[];null!==t&&(h=_.util.isArray(t)?t:[t]);for(var f=[],p=0;p<h.length;++p){"string"==typeof// convert cert from PEM as necessary
(t=h[p])&&(t=t0.certificateFromPem(t));// SafeBag
var d=0===p?n:void 0,g=t0.certificateToAsn1(t),y=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// bagId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.certBag).getBytes()),// bagValue
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[// CertBag
t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// certId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.x509Certificate).getBytes()),// certValue (x509Certificate)
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,t1.toDer(g).getBytes())])])]),// bagAttributes (OPTIONAL)
d]);f.push(y)}if(f.length>0){// SafeContents
var m=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,f),v=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// contentType
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.data).getBytes()),// content
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,t1.toDer(m).getBytes())])]);u.push(v)}// create safe contents for private key
var C=null;if(null!==e){// SafeBag
var E=t0.wrapRsaPrivateKey(t0.privateKeyToAsn1(e));C=null===r?t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// bagId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.keyBag).getBytes()),// bagValue
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[// PrivateKeyInfo
E]),// bagAttributes (OPTIONAL)
n]):t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// bagId
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.pkcs8ShroudedKeyBag).getBytes()),// bagValue
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[// EncryptedPrivateKeyInfo
t0.encryptPrivateKeyInfo(E,r,i)]),// bagAttributes (OPTIONAL)
n]);// SafeContents
var b=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[C]),S=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// contentType
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.data).getBytes()),// content
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,t1.toDer(b).getBytes())])]);u.push(S)}// create AuthenticatedSafe by stringing together the contents
var T=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,u);if(i.useMac){// MacData
var l=_.md.sha1.create(),I=new _.util.ByteBuffer(_.random.getBytes(i.saltSize)),A=i.count,e=t2.generateKey(r,I,3,A,20),B=_.hmac.create();B.start(l,e),B.update(t1.toDer(T).getBytes());var N=B.getMac();a=t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// mac DigestInfo
t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// digestAlgorithm
t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// algorithm = SHA-1
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.sha1).getBytes()),// parameters = Null
t1.create(t1.Class.UNIVERSAL,t1.Type.NULL,!1,"")]),// digest
t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,N.getBytes())]),// macSalt OCTET STRING
t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,I.getBytes()),// iterations INTEGER (XXX: Only support count < 65536)
t1.create(t1.Class.UNIVERSAL,t1.Type.INTEGER,!1,t1.integerToDer(A).getBytes())])}// PFX
return t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// version (3)
t1.create(t1.Class.UNIVERSAL,t1.Type.INTEGER,!1,t1.integerToDer(3).getBytes()),// PKCS#7 ContentInfo
t1.create(t1.Class.UNIVERSAL,t1.Type.SEQUENCE,!0,[// contentType
t1.create(t1.Class.UNIVERSAL,t1.Type.OID,!1,t1.oidToDer(t0.oids.data).getBytes()),// content
t1.create(t1.Class.CONTEXT_SPECIFIC,0,!0,[t1.create(t1.Class.UNIVERSAL,t1.Type.OCTETSTRING,!1,t1.toDer(T).getBytes())])]),a])},/**
 * Derives a PKCS#12 key.
 *
 * @param password the password to derive the key material from, null or
 *          undefined for none.
 * @param salt the salt, as a ByteBuffer, to use.
 * @param id the PKCS#12 ID byte (1 = key material, 2 = IV, 3 = MAC).
 * @param iter the iteration count.
 * @param n the number of bytes to derive from the password.
 * @param md the message digest to use, defaults to SHA-1.
 *
 * @return a ByteBuffer with the bytes derived from the password.
 */t2.generateKey=_.pbe.generatePkcs12Key;// shortcut for asn.1 API
var re=_.asn1,rt=_.pki=_.pki||{};/**
 * NOTE: THIS METHOD IS DEPRECATED. Use pem.decode() instead.
 *
 * Converts PEM-formatted data to DER.
 *
 * @param pem the PEM-formatted data.
 *
 * @return the DER-formatted data.
 */rt.pemToDer=function(e){var t=_.pem.decode(e)[0];if(t.procType&&"ENCRYPTED"===t.procType.type)throw Error("Could not convert PEM to DER; PEM is encrypted.");return _.util.createBuffer(t.body)},/**
 * Converts an RSA private key from PEM format.
 *
 * @param pem the PEM-formatted private key.
 *
 * @return the private key.
 */rt.privateKeyFromPem=function(e){var t=_.pem.decode(e)[0];if("PRIVATE KEY"!==t.type&&"RSA PRIVATE KEY"!==t.type){var r=Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw Error("Could not convert private key from PEM; PEM is encrypted.");// convert DER to ASN.1 object
var i=re.fromDer(t.body);return rt.privateKeyFromAsn1(i)},/**
 * Converts an RSA private key to PEM format.
 *
 * @param key the private key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted private key.
 */rt.privateKeyToPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"RSA PRIVATE KEY",body:re.toDer(rt.privateKeyToAsn1(e)).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Converts a PrivateKeyInfo to PEM format.
 *
 * @param pki the PrivateKeyInfo.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted private key.
 */rt.privateKeyInfoToPem=function(e,t){// convert to DER, then PEM-encode
var r={type:"PRIVATE KEY",body:re.toDer(e).getBytes()};return _.pem.encode(r,{maxline:t})};/**
 * Generates pseudo random bytes by mixing the result of two hash functions,
 * MD5 and SHA-1.
 *
 * prf_TLS1(secret, label, seed) =
 *   P_MD5(S1, label + seed) XOR P_SHA-1(S2, label + seed);
 *
 * Each P_hash function functions as follows:
 *
 * P_hash(secret, seed) = HMAC_hash(secret, A(1) + seed) +
 *                        HMAC_hash(secret, A(2) + seed) +
 *                        HMAC_hash(secret, A(3) + seed) + ...
 * A() is defined as:
 *   A(0) = seed
 *   A(i) = HMAC_hash(secret, A(i-1))
 *
 * The '+' operator denotes concatenation.
 *
 * As many iterations A(N) as are needed are performed to generate enough
 * pseudo random byte output. If an iteration creates more data than is
 * necessary, then it is truncated.
 *
 * Therefore:
 * A(1) = HMAC_hash(secret, A(0))
 *      = HMAC_hash(secret, seed)
 * A(2) = HMAC_hash(secret, A(1))
 *      = HMAC_hash(secret, HMAC_hash(secret, seed))
 *
 * Therefore:
 * P_hash(secret, seed) =
 *   HMAC_hash(secret, HMAC_hash(secret, A(0)) + seed) +
 *   HMAC_hash(secret, HMAC_hash(secret, A(1)) + seed) +
 *   ...
 *
 * Therefore:
 * P_hash(secret, seed) =
 *   HMAC_hash(secret, HMAC_hash(secret, seed) + seed) +
 *   HMAC_hash(secret, HMAC_hash(secret, HMAC_hash(secret, seed)) + seed) +
 *   ...
 *
 * @param secret the secret to use.
 * @param label the label to use.
 * @param seed the seed value to use.
 * @param length the number of bytes to generate.
 *
 * @return the pseudo random bytes in a byte buffer.
 */var rr=function(e,t,r,i){var n=_.util.createBuffer(),a=e.length>>1,s=a+(1&e.length),o=e.substr(0,s),l=e.substr(a,s),c=_.util.createBuffer(),u=_.hmac.create();r=t+r;// determine the number of iterations that must be performed to generate
// enough output bytes, md5 creates 16 byte hashes, sha1 creates 20
var h=Math.ceil(i/16),f=Math.ceil(i/20);// do md5 iterations
u.start("MD5",o);var p=_.util.createBuffer();c.putBytes(r);for(var d=0;d<h;++d)// HMAC_hash(secret, A(i-1))
u.start(null,null),u.update(c.getBytes()),c.putBuffer(u.digest()),// HMAC_hash(secret, A(i) + seed)
u.start(null,null),u.update(c.bytes()+r),p.putBuffer(u.digest());// do sha1 iterations
u.start("SHA1",l);var g=_.util.createBuffer();c.clear(),c.putBytes(r);for(var d=0;d<f;++d)// HMAC_hash(secret, A(i-1))
u.start(null,null),u.update(c.getBytes()),c.putBuffer(u.digest()),// HMAC_hash(secret, A(i) + seed)
u.start(null,null),u.update(c.bytes()+r),g.putBuffer(u.digest());return(// XOR the md5 bytes with the sha1 bytes
n.putBytes(_.util.xorBytes(p.getBytes(),g.getBytes(),i)),n)},ri=function(e,t,r){var i=!1;try{var n=e.deflate(t.fragment.getBytes());t.fragment=_.util.createBuffer(n),t.length=n.length,i=!0}catch(e){// deflate error, fail out
}return i},rn=function(e,t,r){var i=!1;try{var n=e.inflate(t.fragment.getBytes());t.fragment=_.util.createBuffer(n),t.length=n.length,i=!0}catch(e){// inflate error, fail out
}return i},ra=function(e,t){var r=0;switch(t){case 1:r=e.getByte();break;case 2:r=e.getInt16();break;case 3:r=e.getInt24();break;case 4:r=e.getInt32()}// read vector bytes into a new buffer
return _.util.createBuffer(e.getBytes(r))},rs=function(e,t,r){// encode length at the start of the vector, where the number of bytes for
// the length is the maximum number of bytes it would take to encode the
// vector's ceiling
e.putInt(r.length(),t<<3),e.putBuffer(r)},ro={};/**
 * Version: TLS 1.2 = 3.3, TLS 1.1 = 3.2, TLS 1.0 = 3.1. Both TLS 1.1 and
 * TLS 1.2 were still too new (ie: openSSL didn't implement them) at the time
 * of this implementation so TLS 1.0 was implemented instead.
 */ro.Versions={TLS_1_0:{major:3,minor:1},TLS_1_1:{major:3,minor:2},TLS_1_2:{major:3,minor:3}},ro.SupportedVersions=[ro.Versions.TLS_1_1,ro.Versions.TLS_1_0],ro.Version=ro.SupportedVersions[0],/**
 * Maximum fragment size. True maximum is 16384, but we fragment before that
 * to allow for unusual small increases during compression.
 */ro.MaxFragment=15360,/**
 * Whether this entity is considered the "client" or "server".
 * enum { server, client } ConnectionEnd;
 */ro.ConnectionEnd={server:0,client:1},/**
 * Pseudo-random function algorithm used to generate keys from the master
 * secret.
 * enum { tls_prf_sha256 } PRFAlgorithm;
 */ro.PRFAlgorithm={tls_prf_sha256:0},/**
 * Bulk encryption algorithms.
 * enum { null, rc4, des3, aes } BulkCipherAlgorithm;
 */ro.BulkCipherAlgorithm={none:null,rc4:0,des3:1,aes:2},/**
 * Cipher types.
 * enum { stream, block, aead } CipherType;
 */ro.CipherType={stream:0,block:1,aead:2},/**
 * MAC (Message Authentication Code) algorithms.
 * enum { null, hmac_md5, hmac_sha1, hmac_sha256,
 *   hmac_sha384, hmac_sha512} MACAlgorithm;
 */ro.MACAlgorithm={none:null,hmac_md5:0,hmac_sha1:1,hmac_sha256:2,hmac_sha384:3,hmac_sha512:4},/**
 * Compression algorithms.
 * enum { null(0), deflate(1), (255) } CompressionMethod;
 */ro.CompressionMethod={none:0,deflate:1},/**
 * TLS record content types.
 * enum {
 *   change_cipher_spec(20), alert(21), handshake(22),
 *   application_data(23), (255)
 * } ContentType;
 */ro.ContentType={change_cipher_spec:20,alert:21,handshake:22,application_data:23,heartbeat:24},/**
 * TLS handshake types.
 * enum {
 *   hello_request(0), client_hello(1), server_hello(2),
 *   certificate(11), server_key_exchange (12),
 *   certificate_request(13), server_hello_done(14),
 *   certificate_verify(15), client_key_exchange(16),
 *   finished(20), (255)
 * } HandshakeType;
 */ro.HandshakeType={hello_request:0,client_hello:1,server_hello:2,certificate:11,server_key_exchange:12,certificate_request:13,server_hello_done:14,certificate_verify:15,client_key_exchange:16,finished:20},/**
 * TLS Alert Protocol.
 *
 * enum { warning(1), fatal(2), (255) } AlertLevel;
 *
 * enum {
 *   close_notify(0),
 *   unexpected_message(10),
 *   bad_record_mac(20),
 *   decryption_failed(21),
 *   record_overflow(22),
 *   decompression_failure(30),
 *   handshake_failure(40),
 *   bad_certificate(42),
 *   unsupported_certificate(43),
 *   certificate_revoked(44),
 *   certificate_expired(45),
 *   certificate_unknown(46),
 *   illegal_parameter(47),
 *   unknown_ca(48),
 *   access_denied(49),
 *   decode_error(50),
 *   decrypt_error(51),
 *   export_restriction(60),
 *   protocol_version(70),
 *   insufficient_security(71),
 *   internal_error(80),
 *   user_canceled(90),
 *   no_renegotiation(100),
 *   (255)
 * } AlertDescription;
 *
 * struct {
 *   AlertLevel level;
 *   AlertDescription description;
 * } Alert;
 */ro.Alert={},ro.Alert.Level={warning:1,fatal:2},ro.Alert.Description={close_notify:0,unexpected_message:10,bad_record_mac:20,decryption_failed:21,record_overflow:22,decompression_failure:30,handshake_failure:40,bad_certificate:42,unsupported_certificate:43,certificate_revoked:44,certificate_expired:45,certificate_unknown:46,illegal_parameter:47,unknown_ca:48,access_denied:49,decode_error:50,decrypt_error:51,export_restriction:60,protocol_version:70,insufficient_security:71,internal_error:80,user_canceled:90,no_renegotiation:100},/**
 * TLS Heartbeat Message types.
 * enum {
 *   heartbeat_request(1),
 *   heartbeat_response(2),
 *   (255)
 * } HeartbeatMessageType;
 */ro.HeartbeatMessageType={heartbeat_request:1,heartbeat_response:2},/**
 * Supported cipher suites.
 */ro.CipherSuites={},/**
 * Gets a supported cipher suite from its 2 byte ID.
 *
 * @param twoBytes two bytes in a string.
 *
 * @return the matching supported cipher suite or null.
 */ro.getCipherSuite=function(e){var t=null;for(var r in ro.CipherSuites){var i=ro.CipherSuites[r];if(i.id[0]===e.charCodeAt(0)&&i.id[1]===e.charCodeAt(1)){t=i;break}}return t},/**
 * Called when an unexpected record is encountered.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleUnexpected=function(e,t){(e.open||e.entity!==ro.ConnectionEnd.client)&&e.error(e,{message:"Unexpected message. Received TLS record out of order.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.unexpected_message}})},/**
 * Called when a client receives a HelloRequest record.
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleHelloRequest=function(e,t,r){!e.handshaking&&e.handshakes>0&&(// send alert warning
ro.queue(e,ro.createAlert(e,{level:ro.Alert.Level.warning,description:ro.Alert.Description.no_renegotiation})),ro.flush(e)),// continue
e.process()},/**
 * Parses a hello message from a ClientHello or ServerHello record.
 *
 * @param record the record to parse.
 *
 * @return the parsed message.
 */ro.parseHelloMessage=function(e,t,r){var i=null,n=e.entity===ro.ConnectionEnd.client;// minimum of 38 bytes in message
if(r<38)e.error(e,{message:n?"Invalid ServerHello message. Message too short.":"Invalid ClientHello message. Message too short.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}});else{// use 'remaining' to calculate # of remaining bytes in the message
var a=t.fragment,s=a.length();if(i={version:{major:a.getByte(),minor:a.getByte()},random:_.util.createBuffer(a.getBytes(32)),session_id:ra(a,1),extensions:[]},n?(i.cipher_suite=a.getBytes(2),i.compression_method=a.getByte()):(i.cipher_suites=ra(a,2),i.compression_methods=ra(a,1)),// read extensions if there are any bytes left in the message
(s=r-(s-a.length()))>0){for(// parse extensions
var o=ra(a,2);o.length()>0;)i.extensions.push({type:[o.getByte(),o.getByte()],data:ra(o,2)});// TODO: make extension support modular
if(!n)for(var l=0;l<i.extensions.length;++l){var c=i.extensions[l];// support SNI extension
if(0===c.type[0]&&0===c.type[1])for(// get server name list
var u=ra(c.data,2);// only HostName type (0x00) is known, break out if
// another type is detected
u.length()>0&&0===u.getByte();)// add host name to server name list
e.session.extensions.server_name.serverNameList.push(ra(u,2).getBytes())}}// version already set, do not allow version change
if(e.session.version&&(i.version.major!==e.session.version.major||i.version.minor!==e.session.version.minor))return e.error(e,{message:"TLS version change is disallowed during renegotiation.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.protocol_version}});// get the chosen (ServerHello) cipher suite
if(n)e.session.cipherSuite=ro.getCipherSuite(i.cipher_suite);else for(// get a supported preferred (ClientHello) cipher suite
// choose the first supported cipher suite
var h=_.util.createBuffer(i.cipher_suites.bytes());h.length()>0&&(// FIXME: should be checking configured acceptable suites
// cipher suites take up 2 bytes
e.session.cipherSuite=ro.getCipherSuite(h.getBytes(2)),null===e.session.cipherSuite););// cipher suite not supported
if(null===e.session.cipherSuite)return e.error(e,{message:"No cipher suites in common.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.handshake_failure},cipherSuite:_.util.bytesToHex(i.cipher_suite)});n?e.session.compressionMethod=i.compression_method:e.session.compressionMethod=ro.CompressionMethod.none}return i},/**
 * Creates security parameters for the given connection based on the given
 * hello message.
 *
 * @param c the TLS connection.
 * @param msg the hello message.
 */ro.createSecurityParameters=function(e,t){/* Note: security params are from TLS 1.2, some values like prf_algorithm
  are ignored for TLS 1.0/1.1 and the builtin as specified in the spec is
  used. */// TODO: handle other options from server when more supported
// get client and server randoms
var r=e.entity===ro.ConnectionEnd.client,i=t.random.bytes(),n=r?e.session.sp.client_random:i,a=r?i:ro.createRandom().getBytes();// create new security parameters
e.session.sp={entity:e.entity,prf_algorithm:ro.PRFAlgorithm.tls_prf_sha256,bulk_cipher_algorithm:null,cipher_type:null,enc_key_length:null,block_length:null,fixed_iv_length:null,record_iv_length:null,mac_algorithm:null,mac_length:null,mac_key_length:null,compression_algorithm:e.session.compressionMethod,pre_master_secret:null,master_secret:null,client_random:n,server_random:a}},/**
 * Called when a client receives a ServerHello record.
 *
 * When a ServerHello message will be sent:
 *   The server will send this message in response to a client hello message
 *   when it was able to find an acceptable set of algorithms. If it cannot
 *   find such a match, it will respond with a handshake failure alert.
 *
 * uint24 length;
 * struct {
 *   ProtocolVersion server_version;
 *   Random random;
 *   SessionID session_id;
 *   CipherSuite cipher_suite;
 *   CompressionMethod compression_method;
 *   select(extensions_present) {
 *     case false:
 *       struct {};
 *     case true:
 *       Extension extensions<0..2^16-1>;
 *   };
 * } ServerHello;
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleServerHello=function(e,t,r){var i=ro.parseHelloMessage(e,t,r);if(!e.fail){// ensure server version is compatible
if(!(i.version.minor<=e.version.minor))return e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.protocol_version}});e.version.minor=i.version.minor,// indicate session version has been set
e.session.version=e.version;// get the session ID from the message
var n=i.session_id.bytes();n.length>0&&n===e.session.id?(// resuming session, expect a ChangeCipherSpec next
e.expect=rf,e.session.resuming=!0,// get new server random
e.session.sp.server_random=i.random.bytes()):(// not resuming, expect a server Certificate message next
e.expect=rl,e.session.resuming=!1,// create new security parameters
ro.createSecurityParameters(e,i)),// set new session ID
e.session.id=n,// continue
e.process()}},/**
 * Called when a server receives a ClientHello record.
 *
 * When a ClientHello message will be sent:
 *   When a client first connects to a server it is required to send the
 *   client hello as its first message. The client can also send a client
 *   hello in response to a hello request or on its own initiative in order
 *   to renegotiate the security parameters in an existing connection.
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleClientHello=function(e,t,r){var i,n=ro.parseHelloMessage(e,t,r);if(!e.fail){// get the session ID from the message
var a=n.session_id.bytes(),s=null;if(e.sessionCache&&(null===(s=e.sessionCache.getSession(a))?a="":(s.version.major!==n.version.major||s.version.minor>n.version.minor)&&(// if session version is incompatible with client version, do not resume
s=null,a="")),0===a.length&&(a=_.random.getBytes(32)),// update session
e.session.id=a,e.session.clientHelloVersion=n.version,e.session.sp={},s)// use version and security parameters from resumed session
e.version=e.session.version=s.version,e.session.sp=s.sp;else{for(var o=1;o<ro.SupportedVersions.length&&!((i=ro.SupportedVersions[o]).minor<=n.version.minor);++o);e.version={major:i.major,minor:i.minor},e.session.version=e.version}null!==s?(// resuming session, expect a ChangeCipherSpec next
e.expect=rC,e.session.resuming=!0,// get new client random
e.session.sp.client_random=n.random.bytes()):(// not resuming, expect a Certificate or ClientKeyExchange
e.expect=!1!==e.verifyClient?ry:rm,e.session.resuming=!1,// create new security parameters
ro.createSecurityParameters(e,n)),// connection now open
e.open=!0,// queue server hello
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createServerHello(e)})),e.session.resuming?(// queue change cipher spec message
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.change_cipher_spec,data:ro.createChangeCipherSpec()})),// create pending state
e.state.pending=ro.createConnectionState(e),// change current write state to pending write state
e.state.current.write=e.state.pending.write,// queue finished
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createFinished(e)}))):(// queue server certificate
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createCertificate(e)})),e.fail||(// queue server key exchange
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createServerKeyExchange(e)})),!1!==e.verifyClient&&ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createCertificateRequest(e)})),// queue server hello done
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createServerHelloDone(e)})))),// send records
ro.flush(e),// continue
e.process()}},/**
 * Called when a client receives a Certificate record.
 *
 * When this message will be sent:
 *   The server must send a certificate whenever the agreed-upon key exchange
 *   method is not an anonymous one. This message will always immediately
 *   follow the server hello message.
 *
 * Meaning of this message:
 *   The certificate type must be appropriate for the selected cipher suite's
 *   key exchange algorithm, and is generally an X.509v3 certificate. It must
 *   contain a key which matches the key exchange method, as follows. Unless
 *   otherwise specified, the signing algorithm for the certificate must be
 *   the same as the algorithm for the certificate key. Unless otherwise
 *   specified, the public key may be of any length.
 *
 * opaque ASN.1Cert<1..2^24-1>;
 * struct {
 *   ASN.1Cert certificate_list<1..2^24-1>;
 * } Certificate;
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleCertificate=function(e,t,r){// minimum of 3 bytes in message
if(r<3)return e.error(e,{message:"Invalid Certificate message. Message too short.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}});var i,n,a={certificate_list:ra(t.fragment,3)},s=[];try{for(;a.certificate_list.length()>0;)// each entry in msg.certificate_list is a vector with 3 len bytes
i=ra(a.certificate_list,3),n=_.asn1.fromDer(i),i=_.pki.certificateFromAsn1(n,!0),s.push(i)}catch(t){return e.error(e,{message:"Could not parse certificate list.",cause:t,send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.bad_certificate}})}// ensure at least 1 certificate was provided if in client-mode
// or if verifyClient was set to true to require a certificate
// (as opposed to 'optional')
var o=e.entity===ro.ConnectionEnd.client;(o||!0===e.verifyClient)&&0===s.length?e.error(e,{message:o?"No server certificate provided.":"No client certificate provided.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}}):0===s.length?// expect a ServerKeyExchange or ClientKeyExchange message next
e.expect=o?rc:rm:(o?e.session.serverCertificate=s[0]:e.session.clientCertificate=s[0],ro.verifyCertificateChain(e,s)&&(e.expect=o?rc:rm)),// continue
e.process()},/**
 * Called when a client receives a ServerKeyExchange record.
 *
 * When this message will be sent:
 *   This message will be sent immediately after the server certificate
 *   message (or the server hello message, if this is an anonymous
 *   negotiation).
 *
 *   The server key exchange message is sent by the server only when the
 *   server certificate message (if sent) does not contain enough data to
 *   allow the client to exchange a premaster secret.
 *
 * Meaning of this message:
 *   This message conveys cryptographic information to allow the client to
 *   communicate the premaster secret: either an RSA public key to encrypt
 *   the premaster secret with, or a Diffie-Hellman public key with which the
 *   client can complete a key exchange (with the result being the premaster
 *   secret.)
 *
 * enum {
 *   dhe_dss, dhe_rsa, dh_anon, rsa, dh_dss, dh_rsa
 * } KeyExchangeAlgorithm;
 *
 * struct {
 *   opaque dh_p<1..2^16-1>;
 *   opaque dh_g<1..2^16-1>;
 *   opaque dh_Ys<1..2^16-1>;
 * } ServerDHParams;
 *
 * struct {
 *   select(KeyExchangeAlgorithm) {
 *     case dh_anon:
 *       ServerDHParams params;
 *     case dhe_dss:
 *     case dhe_rsa:
 *       ServerDHParams params;
 *       digitally-signed struct {
 *         opaque client_random[32];
 *         opaque server_random[32];
 *         ServerDHParams params;
 *       } signed_params;
 *     case rsa:
 *     case dh_dss:
 *     case dh_rsa:
 *       struct {};
 *   };
 * } ServerKeyExchange;
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleServerKeyExchange=function(e,t,r){// this implementation only supports RSA, no Diffie-Hellman support
// so any length > 0 is invalid
if(r>0)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.unsupported_certificate}});// expect an optional CertificateRequest message next
e.expect=ru,// continue
e.process()},/**
 * Called when a client receives a ClientKeyExchange record.
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleClientKeyExchange=function(e,t,r){// this implementation only supports RSA, no Diffie-Hellman support
// so any length < 48 is invalid
if(r<48)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.unsupported_certificate}});var i={enc_pre_master_secret:ra(t.fragment,2).getBytes()},n=null;if(e.getPrivateKey)try{n=e.getPrivateKey(e,e.session.serverCertificate),n=_.pki.privateKeyFromPem(n)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}})}if(null===n)return e.error(e,{message:"No private key set.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}});try{// decrypt 48-byte pre-master secret
var a=e.session.sp;a.pre_master_secret=n.decrypt(i.enc_pre_master_secret);// ensure client hello version matches first 2 bytes
var s=e.session.clientHelloVersion;if(s.major!==a.pre_master_secret.charCodeAt(0)||s.minor!==a.pre_master_secret.charCodeAt(1))throw Error("TLS version rollback attack detected.")}catch(e){/* Note: Daniel Bleichenbacher [BLEI] can be used to attack a
      TLS server which is using PKCS#1 encoded RSA, so instead of
      failing here, we generate 48 random bytes and use that as
      the pre-master secret. */a.pre_master_secret=_.random.getBytes(48)}// expect a CertificateVerify message if a Certificate was received that
// does not have fixed Diffie-Hellman params, otherwise expect
// ChangeCipherSpec
e.expect=rC,null!==e.session.clientCertificate&&// TODO: support Diffie-Hellman
(e.expect=rv),// continue
e.process()},/**
 * Called when a client receives a CertificateRequest record.
 *
 * When this message will be sent:
 *   A non-anonymous server can optionally request a certificate from the
 *   client, if appropriate for the selected cipher suite. This message, if
 *   sent, will immediately follow the Server Key Exchange message (if it is
 *   sent; otherwise, the Server Certificate message).
 *
 * enum {
 *   rsa_sign(1), dss_sign(2), rsa_fixed_dh(3), dss_fixed_dh(4),
 *   rsa_ephemeral_dh_RESERVED(5), dss_ephemeral_dh_RESERVED(6),
 *   fortezza_dms_RESERVED(20), (255)
 * } ClientCertificateType;
 *
 * opaque DistinguishedName<1..2^16-1>;
 *
 * struct {
 *   ClientCertificateType certificate_types<1..2^8-1>;
 *   SignatureAndHashAlgorithm supported_signature_algorithms<2^16-1>;
 *   DistinguishedName certificate_authorities<0..2^16-1>;
 * } CertificateRequest;
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleCertificateRequest=function(e,t,r){// minimum of 3 bytes in message
if(r<3)return e.error(e,{message:"Invalid CertificateRequest. Message too short.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}});// TODO: TLS 1.2+ has different format including
// SignatureAndHashAlgorithm after cert types
var i=t.fragment,n={certificate_types:ra(i,1),certificate_authorities:ra(i,2)};// save certificate request in session
e.session.certificateRequest=n,// expect a ServerHelloDone message next
e.expect=rh,// continue
e.process()},/**
 * Called when a server receives a CertificateVerify record.
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleCertificateVerify=function(e,t,r){if(r<2)return e.error(e,{message:"Invalid CertificateVerify. Message too short.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}});// rewind to get full bytes for message so it can be manually
// digested below (special case for CertificateVerify messages because
// they must be digested *after* handling as opposed to all others)
var i=t.fragment;i.read-=4;var n=i.bytes();i.read+=4;var a={signature:ra(i,2).getBytes()},s=_.util.createBuffer();s.putBuffer(e.session.md5.digest()),s.putBuffer(e.session.sha1.digest()),s=s.getBytes();try{/*b = forge.pki.rsa.decrypt(
      msg.signature, cert.publicKey, true, verify.length);
    if(b !== verify) {*/if(!e.session.clientCertificate.publicKey.verify(s,a.signature,"NONE"))throw Error("CertificateVerify signature does not match.");// digest message now that it has been handled
e.session.md5.update(n),e.session.sha1.update(n)}catch(t){return e.error(e,{message:"Bad signature in CertificateVerify.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.handshake_failure}})}// expect ChangeCipherSpec
e.expect=rC,// continue
e.process()},/**
 * Called when a client receives a ServerHelloDone record.
 *
 * When this message will be sent:
 *   The server hello done message is sent by the server to indicate the end
 *   of the server hello and associated messages. After sending this message
 *   the server will wait for a client response.
 *
 * Meaning of this message:
 *   This message means that the server is done sending messages to support
 *   the key exchange, and the client can proceed with its phase of the key
 *   exchange.
 *
 *   Upon receipt of the server hello done message the client should verify
 *   that the server provided a valid certificate if required and check that
 *   the server hello parameters are acceptable.
 *
 * struct {} ServerHelloDone;
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleServerHelloDone=function(e,t,r){// len must be 0 bytes
if(r>0)return e.error(e,{message:"Invalid ServerHelloDone message. Invalid length.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.record_overflow}});if(null===e.serverCertificate){// no server certificate was provided
var i={message:"No server certificate provided. Not enough security.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.insufficient_security}},n=e.verify(e,i.alert.description,0,[]);if(!0!==n)// send error
return(n||0===n)&&("object"!=typeof n||_.util.isArray(n)?"number"==typeof n&&(i.alert.description=n):(n.message&&(i.message=n.message),n.alert&&(i.alert.description=n.alert))),e.error(e,i)}null!==e.session.certificateRequest&&(t=ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createCertificate(e)}),ro.queue(e,t)),// create client key exchange message
t=ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createClientKeyExchange(e)}),ro.queue(e,t),// expect no messages until the following callback has been called
e.expect=rg;// create callback to handle client signature (for client-certs)
var a=function(e,t){null!==e.session.certificateRequest&&null!==e.session.clientCertificate&&ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createCertificateVerify(e,t)})),// create change cipher spec message
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.change_cipher_spec,data:ro.createChangeCipherSpec()})),// create pending state
e.state.pending=ro.createConnectionState(e),// change current write state to pending write state
e.state.current.write=e.state.pending.write,// create finished message
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createFinished(e)})),// expect a server ChangeCipherSpec message next
e.expect=rf,// send records
ro.flush(e),// continue
e.process()};// if there is no certificate request or no client certificate, do
// callback immediately
if(null===e.session.certificateRequest||null===e.session.clientCertificate)return a(e,null);// otherwise get the client signature
ro.getClientSignature(e,a)},/**
 * Called when a ChangeCipherSpec record is received.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleChangeCipherSpec=function(e,t){if(1!==t.fragment.getByte())return e.error(e,{message:"Invalid ChangeCipherSpec message received.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.illegal_parameter}});// create pending state if:
// 1. Resuming session in client mode OR
// 2. NOT resuming session in server mode
var r=e.entity===ro.ConnectionEnd.client;(e.session.resuming&&r||!e.session.resuming&&!r)&&(e.state.pending=ro.createConnectionState(e)),// change current read state to pending read state
e.state.current.read=e.state.pending.read,(!e.session.resuming&&r||e.session.resuming&&!r)&&(e.state.pending=null),// expect a Finished record next
e.expect=r?rp:rE,// continue
e.process()},/**
 * Called when a Finished record is received.
 *
 * When this message will be sent:
 *   A finished message is always sent immediately after a change
 *   cipher spec message to verify that the key exchange and
 *   authentication processes were successful. It is essential that a
 *   change cipher spec message be received between the other
 *   handshake messages and the Finished message.
 *
 * Meaning of this message:
 *   The finished message is the first protected with the just-
 *   negotiated algorithms, keys, and secrets. Recipients of finished
 *   messages must verify that the contents are correct.  Once a side
 *   has sent its Finished message and received and validated the
 *   Finished message from its peer, it may begin to send and receive
 *   application data over the connection.
 *
 * struct {
 *   opaque verify_data[verify_data_length];
 * } Finished;
 *
 * verify_data
 *   PRF(master_secret, finished_label, Hash(handshake_messages))
 *     [0..verify_data_length-1];
 *
 * finished_label
 *   For Finished messages sent by the client, the string
 *   "client finished". For Finished messages sent by the server, the
 *   string "server finished".
 *
 * verify_data_length depends on the cipher suite. If it is not specified
 * by the cipher suite, then it is 12. Versions of TLS < 1.2 always used
 * 12 bytes.
 *
 * @param c the connection.
 * @param record the record.
 * @param length the length of the handshake message.
 */ro.handleFinished=function(e,t,r){// rewind to get full bytes for message so it can be manually
// digested below (special case for Finished messages because they
// must be digested *after* handling as opposed to all others)
var i=t.fragment;i.read-=4;var n=i.bytes();i.read+=4;// message contains only verify_data
var a=t.fragment.getBytes();// ensure verify data is correct
(i=_.util.createBuffer()).putBuffer(e.session.md5.digest()),i.putBuffer(e.session.sha1.digest());// set label based on entity type
var s=e.entity===ro.ConnectionEnd.client;if((i=rr(e.session.sp.master_secret,s?"server finished":"client finished",i.getBytes(),12)).getBytes()!==a)return e.error(e,{message:"Invalid verify_data in Finished message.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.decrypt_error}});// digest finished message now that it has been handled
e.session.md5.update(n),e.session.sha1.update(n),(e.session.resuming&&s||!e.session.resuming&&!s)&&(// create change cipher spec message
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.change_cipher_spec,data:ro.createChangeCipherSpec()})),// change current write state to pending write state, clear pending
e.state.current.write=e.state.pending.write,e.state.pending=null,// create finished message
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.handshake,data:ro.createFinished(e)}))),// expect application data next
e.expect=s?rd:rb,// handshake complete
e.handshaking=!1,++e.handshakes,// save access to peer certificate
e.peerCertificate=s?e.session.serverCertificate:e.session.clientCertificate,// send records
ro.flush(e),// now connected
e.isConnected=!0,e.connected(e),// continue
e.process()},/**
 * Called when an Alert record is received.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleAlert=function(e,t){// read alert
var r,i=t.fragment,n={level:i.getByte(),description:i.getByte()};switch(n.description){case ro.Alert.Description.close_notify:r="Connection closed.";break;case ro.Alert.Description.unexpected_message:r="Unexpected message.";break;case ro.Alert.Description.bad_record_mac:r="Bad record MAC.";break;case ro.Alert.Description.decryption_failed:r="Decryption failed.";break;case ro.Alert.Description.record_overflow:r="Record overflow.";break;case ro.Alert.Description.decompression_failure:r="Decompression failed.";break;case ro.Alert.Description.handshake_failure:r="Handshake failure.";break;case ro.Alert.Description.bad_certificate:r="Bad certificate.";break;case ro.Alert.Description.unsupported_certificate:r="Unsupported certificate.";break;case ro.Alert.Description.certificate_revoked:r="Certificate revoked.";break;case ro.Alert.Description.certificate_expired:r="Certificate expired.";break;case ro.Alert.Description.certificate_unknown:r="Certificate unknown.";break;case ro.Alert.Description.illegal_parameter:r="Illegal parameter.";break;case ro.Alert.Description.unknown_ca:r="Unknown certificate authority.";break;case ro.Alert.Description.access_denied:r="Access denied.";break;case ro.Alert.Description.decode_error:r="Decode error.";break;case ro.Alert.Description.decrypt_error:r="Decrypt error.";break;case ro.Alert.Description.export_restriction:r="Export restriction.";break;case ro.Alert.Description.protocol_version:r="Unsupported protocol version.";break;case ro.Alert.Description.insufficient_security:r="Insufficient security.";break;case ro.Alert.Description.internal_error:r="Internal error.";break;case ro.Alert.Description.user_canceled:r="User canceled.";break;case ro.Alert.Description.no_renegotiation:r="Renegotiation not supported.";break;default:r="Unknown error."}// close connection on close_notify, not an error
if(n.description===ro.Alert.Description.close_notify)return e.close();// call error handler
e.error(e,{message:r,send:!1,// origin is the opposite end
origin:e.entity===ro.ConnectionEnd.client?"server":"client",alert:n}),// continue
e.process()},/**
 * Called when a Handshake record is received.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleHandshake=function(e,t){// get the handshake type and message length
var r=t.fragment,i=r.getByte(),n=r.getInt24();// see if the record fragment doesn't yet contain the full message
if(n>r.length())// continue
return(// cache the record, clear its fragment, and reset the buffer read
// pointer before the type and length were read
e.fragmented=t,t.fragment=_.util.createBuffer(),r.read-=4,e.process());// full message now available, clear cache, reset read pointer to
// before type and length
e.fragmented=null,r.read-=4;// save the handshake bytes for digestion after handler is found
// (include type and length of handshake msg)
var a=r.bytes(n+4);// restore read pointer
r.read+=4,i in rP[e.entity][e.expect]?(e.entity!==ro.ConnectionEnd.server||e.open||e.fail||(e.handshaking=!0,e.session={version:null,extensions:{server_name:{serverNameList:[]}},cipherSuite:null,compressionMethod:null,serverCertificate:null,clientCertificate:null,md5:_.md.md5.create(),sha1:_.md.sha1.create()}),i!==ro.HandshakeType.hello_request&&i!==ro.HandshakeType.certificate_verify&&i!==ro.HandshakeType.finished&&(e.session.md5.update(a),e.session.sha1.update(a)),// handle specific handshake type record
rP[e.entity][e.expect][i](e,t,n)):ro.handleUnexpected(e,t)},/**
 * Called when an ApplicationData record is received.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleApplicationData=function(e,t){// buffer data, notify that its ready
e.data.putBuffer(t.fragment),e.dataReady(e),// continue
e.process()},/**
 * Called when a Heartbeat record is received.
 *
 * @param c the connection.
 * @param record the record.
 */ro.handleHeartbeat=function(e,t){// get the heartbeat type and payload
var r=t.fragment,i=r.getByte(),n=r.getInt16(),a=r.getBytes(n);if(i===ro.HeartbeatMessageType.heartbeat_request){// discard request during handshake or if length is too large
if(e.handshaking||n>a.length)return e.process();// retransmit payload
ro.queue(e,ro.createRecord(e,{type:ro.ContentType.heartbeat,data:ro.createHeartbeat(ro.HeartbeatMessageType.heartbeat_response,a)})),ro.flush(e)}else if(i===ro.HeartbeatMessageType.heartbeat_response){// check payload against expected payload, discard heartbeat if no match
if(a!==e.expectedHeartbeatPayload)return e.process();// notify that a valid heartbeat was received
e.heartbeatReceived&&e.heartbeatReceived(e,_.util.createBuffer(a))}// continue
e.process()};var rl=1,rc=2,ru=3,rh=4,rf=5,rp=6,rd=7,rg=8,ry=1,rm=2,rv=3,rC=4,rE=5,rb=6,rS=ro.handleUnexpected,rT=ro.handleChangeCipherSpec,r_=ro.handleAlert,rI=ro.handleHandshake,rA=ro.handleApplicationData,rB=ro.handleHeartbeat,rN=[];// rcv server certificate
rN[ro.ConnectionEnd.client]=[//      CC,AL,HS,AD,HB
/*SHE*/[rS,r_,rI,rS,rB],/*SCE*/[rS,r_,rI,rS,rB],/*SKE*/[rS,r_,rI,rS,rB],/*SCR*/[rS,r_,rI,rS,rB],/*SHD*/[rS,r_,rI,rS,rB],/*SCC*/[rT,r_,rS,rS,rB],/*SFI*/[rS,r_,rI,rS,rB],/*SAD*/[rS,r_,rI,rA,rB],/*SER*/[rS,r_,rI,rS,rB]],// map server current expect state and content type to function
rN[ro.ConnectionEnd.server]=[//      CC,AL,HS,AD
/*CHE*/[rS,r_,rI,rS,rB],/*CCE*/[rS,r_,rI,rS,rB],/*CKE*/[rS,r_,rI,rS,rB],/*CCV*/[rS,r_,rI,rS,rB],/*CCC*/[rT,r_,rS,rS,rB],/*CFI*/[rS,r_,rI,rS,rB],/*CAD*/[rS,r_,rI,rA,rB],/*CER*/[rS,r_,rI,rS,rB]];// map client current expect state and handshake type to function
var rw=ro.handleHelloRequest,rL=ro.handleServerHello,rk=ro.handleCertificate,rR=ro.handleServerKeyExchange,rD=ro.handleCertificateRequest,rU=ro.handleServerHelloDone,rO=ro.handleFinished,rP=[];rP[ro.ConnectionEnd.client]=[//      HR,01,SH,03,04,05,06,07,08,09,10,SC,SK,CR,HD,15,CK,17,18,19,FI
/*SHE*/[rS,rS,rL,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*SCE*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rk,rR,rD,rU,rS,rS,rS,rS,rS,rS],/*SKE*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rR,rD,rU,rS,rS,rS,rS,rS,rS],/*SCR*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rD,rU,rS,rS,rS,rS,rS,rS],/*SHD*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rU,rS,rS,rS,rS,rS,rS],/*SCC*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*SFI*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rO],/*SAD*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*SER*/[rw,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS]];// map server current expect state and handshake type to function
// Note: CAD[CH] does not map to FB because renegotation is prohibited
var rx=ro.handleClientHello,rV=ro.handleClientKeyExchange,rK=ro.handleCertificateVerify;rP[ro.ConnectionEnd.server]=[//      01,CH,02,03,04,05,06,07,08,09,10,CC,12,13,14,CV,CK,17,18,19,FI
/*CHE*/[rS,rx,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*CCE*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rk,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*CKE*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rV,rS,rS,rS,rS],/*CCV*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rK,rS,rS,rS,rS,rS],/*CCC*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*CFI*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rO],/*CAD*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS],/*CER*/[rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS,rS]],/**
 * Generates the master_secret and keys using the given security parameters.
 *
 * The security parameters for a TLS connection state are defined as such:
 *
 * struct {
 *   ConnectionEnd          entity;
 *   PRFAlgorithm           prf_algorithm;
 *   BulkCipherAlgorithm    bulk_cipher_algorithm;
 *   CipherType             cipher_type;
 *   uint8                  enc_key_length;
 *   uint8                  block_length;
 *   uint8                  fixed_iv_length;
 *   uint8                  record_iv_length;
 *   MACAlgorithm           mac_algorithm;
 *   uint8                  mac_length;
 *   uint8                  mac_key_length;
 *   CompressionMethod      compression_algorithm;
 *   opaque                 master_secret[48];
 *   opaque                 client_random[32];
 *   opaque                 server_random[32];
 * } SecurityParameters;
 *
 * Note that this definition is from TLS 1.2. In TLS 1.0 some of these
 * parameters are ignored because, for instance, the PRFAlgorithm is a
 * builtin-fixed algorithm combining iterations of MD5 and SHA-1 in TLS 1.0.
 *
 * The Record Protocol requires an algorithm to generate keys required by the
 * current connection state.
 *
 * The master secret is expanded into a sequence of secure bytes, which is then
 * split to a client write MAC key, a server write MAC key, a client write
 * encryption key, and a server write encryption key. In TLS 1.0 a client write
 * IV and server write IV are also generated. Each of these is generated from
 * the byte sequence in that order. Unused values are empty. In TLS 1.2, some
 * AEAD ciphers may additionally require a client write IV and a server write
 * IV (see Section 6.2.3.3).
 *
 * When keys, MAC keys, and IVs are generated, the master secret is used as an
 * entropy source.
 *
 * To generate the key material, compute:
 *
 * master_secret = PRF(pre_master_secret, "master secret",
 *                     ClientHello.random + ServerHello.random)
 *
 * key_block = PRF(SecurityParameters.master_secret,
 *                 "key expansion",
 *                 SecurityParameters.server_random +
 *                 SecurityParameters.client_random);
 *
 * until enough output has been generated. Then, the key_block is
 * partitioned as follows:
 *
 * client_write_MAC_key[SecurityParameters.mac_key_length]
 * server_write_MAC_key[SecurityParameters.mac_key_length]
 * client_write_key[SecurityParameters.enc_key_length]
 * server_write_key[SecurityParameters.enc_key_length]
 * client_write_IV[SecurityParameters.fixed_iv_length]
 * server_write_IV[SecurityParameters.fixed_iv_length]
 *
 * In TLS 1.2, the client_write_IV and server_write_IV are only generated for
 * implicit nonce techniques as described in Section 3.2.1 of [AEAD]. This
 * implementation uses TLS 1.0 so IVs are generated.
 *
 * Implementation note: The currently defined cipher suite which requires the
 * most material is AES_256_CBC_SHA256. It requires 2 x 32 byte keys and 2 x 32
 * byte MAC keys, for a total 128 bytes of key material. In TLS 1.0 it also
 * requires 2 x 16 byte IVs, so it actually takes 160 bytes of key material.
 *
 * @param c the connection.
 * @param sp the security parameters to use.
 *
 * @return the security keys.
 */ro.generateKeys=function(e,t){// concatenate server and client random
var r=t.client_random+t.server_random;e.session.resuming||(// create master secret, clean up pre-master secret
t.master_secret=rr(t.pre_master_secret,"master secret",r,48).bytes(),t.pre_master_secret=null),// generate the amount of key material needed
r=t.server_random+t.client_random;var i=2*t.mac_key_length+2*t.enc_key_length,n=e.version.major===ro.Versions.TLS_1_0.major&&e.version.minor===ro.Versions.TLS_1_0.minor;n&&(i+=2*t.fixed_iv_length);var a=rr(t.master_secret,"key expansion",r,i),s={client_write_MAC_key:a.getBytes(t.mac_key_length),server_write_MAC_key:a.getBytes(t.mac_key_length),client_write_key:a.getBytes(t.enc_key_length),server_write_key:a.getBytes(t.enc_key_length)};return n&&(s.client_write_IV=a.getBytes(t.fixed_iv_length),s.server_write_IV=a.getBytes(t.fixed_iv_length)),s},/**
 * Creates a new initialized TLS connection state. A connection state has
 * a read mode and a write mode.
 *
 * compression state:
 *   The current state of the compression algorithm.
 *
 * cipher state:
 *   The current state of the encryption algorithm. This will consist of the
 *   scheduled key for that connection. For stream ciphers, this will also
 *   contain whatever state information is necessary to allow the stream to
 *   continue to encrypt or decrypt data.
 *
 * MAC key:
 *   The MAC key for the connection.
 *
 * sequence number:
 *   Each connection state contains a sequence number, which is maintained
 *   separately for read and write states. The sequence number MUST be set to
 *   zero whenever a connection state is made the active state. Sequence
 *   numbers are of type uint64 and may not exceed 2^64-1. Sequence numbers do
 *   not wrap. If a TLS implementation would need to wrap a sequence number,
 *   it must renegotiate instead. A sequence number is incremented after each
 *   record: specifically, the first record transmitted under a particular
 *   connection state MUST use sequence number 0.
 *
 * @param c the connection.
 *
 * @return the new initialized TLS connection state.
 */ro.createConnectionState=function(e){var t=e.entity===ro.ConnectionEnd.client,r=function(){var e={// two 32-bit numbers, first is most significant
sequenceNumber:[0,0],macKey:null,macLength:0,macFunction:null,cipherState:null,cipherFunction:function(e){return!0},compressionState:null,compressFunction:function(e){return!0},updateSequenceNumber:function(){4294967295===e.sequenceNumber[1]?(e.sequenceNumber[1]=0,++e.sequenceNumber[0]):++e.sequenceNumber[1]}};return e},i={read:r(),write:r()};// handle security parameters
if(// update function in read mode will decrypt then decompress a record
i.read.update=function(e,t){return i.read.cipherFunction(t,i.read)?i.read.compressFunction(e,t,i.read)||e.error(e,{message:"Could not decompress record.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.decompression_failure}}):e.error(e,{message:"Could not decrypt record or bad MAC.",send:!0,alert:{level:ro.Alert.Level.fatal,// doesn't matter if decryption failed or MAC was
// invalid, return the same error so as not to reveal
// which one occurred
description:ro.Alert.Description.bad_record_mac}}),!e.fail},// update function in write mode will compress then encrypt a record
i.write.update=function(e,t){return i.write.compressFunction(e,t,i.write)?i.write.cipherFunction(t,i.write)||// encryption as well
e.error(e,{message:"Could not encrypt record.",send:!1,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}}):// compression as well
e.error(e,{message:"Could not compress record.",send:!1,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}}),!e.fail},e.session){var n=e.session.sp;// compression setup
switch(e.session.cipherSuite.initSecurityParameters(n),// generate keys
n.keys=ro.generateKeys(e,n),i.read.macKey=t?n.keys.server_write_MAC_key:n.keys.client_write_MAC_key,i.write.macKey=t?n.keys.client_write_MAC_key:n.keys.server_write_MAC_key,// cipher suite setup
e.session.cipherSuite.initConnectionState(i,e,n),n.compression_algorithm){case ro.CompressionMethod.none:break;case ro.CompressionMethod.deflate:i.read.compressFunction=rn,i.write.compressFunction=ri;break;default:throw Error("Unsupported compression algorithm.")}}return i},/**
 * Creates a Random structure.
 *
 * struct {
 *   uint32 gmt_unix_time;
 *   opaque random_bytes[28];
 * } Random;
 *
 * gmt_unix_time:
 *   The current time and date in standard UNIX 32-bit format (seconds since
 *   the midnight starting Jan 1, 1970, UTC, ignoring leap seconds) according
 *   to the sender's internal clock. Clocks are not required to be set
 *   correctly by the basic TLS protocol; higher-level or application
 *   protocols may define additional requirements. Note that, for historical
 *   reasons, the data element is named using GMT, the predecessor of the
 *   current worldwide time base, UTC.
 * random_bytes:
 *   28 bytes generated by a secure random number generator.
 *
 * @return the Random structure as a byte array.
 */ro.createRandom=function(){// get UTC milliseconds
var e=new Date,t=+e+6e4*e.getTimezoneOffset(),r=_.util.createBuffer();return r.putInt32(t),r.putBytes(_.random.getBytes(28)),r},/**
 * Creates a TLS record with the given type and data.
 *
 * @param c the connection.
 * @param options:
 *   type: the record type.
 *   data: the plain text data in a byte buffer.
 *
 * @return the created record.
 */ro.createRecord=function(e,t){return t.data?{type:t.type,version:{major:e.version.major,minor:e.version.minor},length:t.data.length(),fragment:t.data}:null},/**
 * Creates a TLS alert record.
 *
 * @param c the connection.
 * @param alert:
 *   level: the TLS alert level.
 *   description: the TLS alert description.
 *
 * @return the created alert record.
 */ro.createAlert=function(e,t){var r=_.util.createBuffer();return r.putByte(t.level),r.putByte(t.description),ro.createRecord(e,{type:ro.ContentType.alert,data:r})},/* The structure of a TLS handshake message.
 *
 * struct {
 *    HandshakeType msg_type;    // handshake type
 *    uint24 length;             // bytes in message
 *    select(HandshakeType) {
 *       case hello_request:       HelloRequest;
 *       case client_hello:        ClientHello;
 *       case server_hello:        ServerHello;
 *       case certificate:         Certificate;
 *       case server_key_exchange: ServerKeyExchange;
 *       case certificate_request: CertificateRequest;
 *       case server_hello_done:   ServerHelloDone;
 *       case certificate_verify:  CertificateVerify;
 *       case client_key_exchange: ClientKeyExchange;
 *       case finished:            Finished;
 *    } body;
 * } Handshake;
 *//**
 * Creates a ClientHello message.
 *
 * opaque SessionID<0..32>;
 * enum { null(0), deflate(1), (255) } CompressionMethod;
 * uint8 CipherSuite[2];
 *
 * struct {
 *   ProtocolVersion client_version;
 *   Random random;
 *   SessionID session_id;
 *   CipherSuite cipher_suites<2..2^16-2>;
 *   CompressionMethod compression_methods<1..2^8-1>;
 *   select(extensions_present) {
 *     case false:
 *       struct {};
 *     case true:
 *       Extension extensions<0..2^16-1>;
 *   };
 * } ClientHello;
 *
 * The extension format for extended client hellos and server hellos is:
 *
 * struct {
 *   ExtensionType extension_type;
 *   opaque extension_data<0..2^16-1>;
 * } Extension;
 *
 * Here:
 *
 * - "extension_type" identifies the particular extension type.
 * - "extension_data" contains information specific to the particular
 * extension type.
 *
 * The extension types defined in this document are:
 *
 * enum {
 *   server_name(0), max_fragment_length(1),
 *   client_certificate_url(2), trusted_ca_keys(3),
 *   truncated_hmac(4), status_request(5), (65535)
 * } ExtensionType;
 *
 * @param c the connection.
 *
 * @return the ClientHello byte buffer.
 */ro.createClientHello=function(e){// save hello version
e.session.clientHelloVersion={major:e.version.major,minor:e.version.minor};for(var t=_.util.createBuffer(),r=0;r<e.cipherSuites.length;++r){var i=e.cipherSuites[r];t.putByte(i.id[0]),t.putByte(i.id[1])}// create supported cipher suites
var n=t.length(),a=_.util.createBuffer();a.putByte(ro.CompressionMethod.none);// FIXME: deflate support disabled until issues with raw deflate data
// without zlib headers are resolved
/*
  if(c.inflate !== null && c.deflate !== null) {
    compressionMethods.putByte(tls.CompressionMethod.deflate);
  }
  */var s=a.length(),o=_.util.createBuffer();if(e.virtualHost){// create extension struct
var l=_.util.createBuffer();l.putByte(0),l.putByte(0);/* In order to provide the server name, clients MAY include an
     * extension of type "server_name" in the (extended) client hello.
     * The "extension_data" field of this extension SHALL contain
     * "ServerNameList" where:
     *
     * struct {
     *   NameType name_type;
     *   select(name_type) {
     *     case host_name: HostName;
     *   } name;
     * } ServerName;
     *
     * enum {
     *   host_name(0), (255)
     * } NameType;
     *
     * opaque HostName<1..2^16-1>;
     *
     * struct {
     *   ServerName server_name_list<1..2^16-1>
     * } ServerNameList;
     */var c=_.util.createBuffer();c.putByte(0),rs(c,2,_.util.createBuffer(e.virtualHost));// ServerNameList is in extension_data
var u=_.util.createBuffer();rs(u,2,c),rs(l,2,u),o.putBuffer(l)}var h=o.length();h>0&&(h+=2);// determine length of the handshake message
// cipher suites and compression methods size will need to be
// updated if more get added to the list
var f=e.session.id,p=f.length+1+// session ID vector
2+// version (major + minor)
4+28+// random time and random bytes
2+n+// cipher suites vector
1+s+// compression methods vector
h,d=_.util.createBuffer();return d.putByte(ro.HandshakeType.client_hello),d.putInt24(p),d.putByte(e.version.major),d.putByte(e.version.minor),d.putBytes(e.session.sp.client_random),rs(d,1,_.util.createBuffer(f)),rs(d,2,t),rs(d,1,a),h>0&&rs(d,2,o),d},/**
 * Creates a ServerHello message.
 *
 * @param c the connection.
 *
 * @return the ServerHello byte buffer.
 */ro.createServerHello=function(e){// determine length of the handshake message
var t=e.session.id,r=t.length+1+// session ID vector
2+// version (major + minor)
4+28+// random time and random bytes
2+// chosen cipher suite
1,i=_.util.createBuffer();return i.putByte(ro.HandshakeType.server_hello),i.putInt24(r),i.putByte(e.version.major),i.putByte(e.version.minor),i.putBytes(e.session.sp.server_random),rs(i,1,_.util.createBuffer(t)),i.putByte(e.session.cipherSuite.id[0]),i.putByte(e.session.cipherSuite.id[1]),i.putByte(e.session.compressionMethod),i},/**
 * Creates a Certificate message.
 *
 * When this message will be sent:
 *   This is the first message the client can send after receiving a server
 *   hello done message and the first message the server can send after
 *   sending a ServerHello. This client message is only sent if the server
 *   requests a certificate. If no suitable certificate is available, the
 *   client should send a certificate message containing no certificates. If
 *   client authentication is required by the server for the handshake to
 *   continue, it may respond with a fatal handshake failure alert.
 *
 * opaque ASN.1Cert<1..2^24-1>;
 *
 * struct {
 *   ASN.1Cert certificate_list<0..2^24-1>;
 * } Certificate;
 *
 * @param c the connection.
 *
 * @return the Certificate byte buffer.
 */ro.createCertificate=function(e){// TODO: check certificate request to ensure types are supported
// get a certificate (a certificate as a PEM string)
var t,r=e.entity===ro.ConnectionEnd.client,i=null;e.getCertificate&&(t=r?e.session.certificateRequest:e.session.extensions.server_name.serverNameList,i=e.getCertificate(e,t));// buffer to hold certificate list
var n=_.util.createBuffer();if(null!==i)try{_.util.isArray(i)||(i=[i]);for(var a=null,s=0;s<i.length;++s){var o=_.pem.decode(i[s])[0];if("CERTIFICATE"!==o.type&&"X509 CERTIFICATE"!==o.type&&"TRUSTED CERTIFICATE"!==o.type){var l=Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw l.headerType=o.type,l}if(o.procType&&"ENCRYPTED"===o.procType.type)throw Error("Could not convert certificate from PEM; PEM is encrypted.");var c=_.util.createBuffer(o.body);null===a&&(a=_.asn1.fromDer(c.bytes(),!1));// certificate entry is itself a vector with 3 length bytes
var u=_.util.createBuffer();rs(u,3,c),// add cert vector to cert list vector
n.putBuffer(u)}// save certificate
i=_.pki.certificateFromAsn1(a),r?e.session.clientCertificate=i:e.session.serverCertificate=i}catch(t){return e.error(e,{message:"Could not send certificate list.",cause:t,send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.bad_certificate}})}// determine length of the handshake message
var h=3+n.length(),f=_.util.createBuffer();// cert list vector
return f.putByte(ro.HandshakeType.certificate),f.putInt24(h),rs(f,3,n),f},/**
 * Creates a ClientKeyExchange message.
 *
 * When this message will be sent:
 *   This message is always sent by the client. It will immediately follow the
 *   client certificate message, if it is sent. Otherwise it will be the first
 *   message sent by the client after it receives the server hello done
 *   message.
 *
 * Meaning of this message:
 *   With this message, the premaster secret is set, either though direct
 *   transmission of the RSA-encrypted secret, or by the transmission of
 *   Diffie-Hellman parameters which will allow each side to agree upon the
 *   same premaster secret. When the key exchange method is DH_RSA or DH_DSS,
 *   client certification has been requested, and the client was able to
 *   respond with a certificate which contained a Diffie-Hellman public key
 *   whose parameters (group and generator) matched those specified by the
 *   server in its certificate, this message will not contain any data.
 *
 * Meaning of this message:
 *   If RSA is being used for key agreement and authentication, the client
 *   generates a 48-byte premaster secret, encrypts it using the public key
 *   from the server's certificate or the temporary RSA key provided in a
 *   server key exchange message, and sends the result in an encrypted
 *   premaster secret message. This structure is a variant of the client
 *   key exchange message, not a message in itself.
 *
 * struct {
 *   select(KeyExchangeAlgorithm) {
 *     case rsa: EncryptedPreMasterSecret;
 *     case diffie_hellman: ClientDiffieHellmanPublic;
 *   } exchange_keys;
 * } ClientKeyExchange;
 *
 * struct {
 *   ProtocolVersion client_version;
 *   opaque random[46];
 * } PreMasterSecret;
 *
 * struct {
 *   public-key-encrypted PreMasterSecret pre_master_secret;
 * } EncryptedPreMasterSecret;
 *
 * A public-key-encrypted element is encoded as a vector <0..2^16-1>.
 *
 * @param c the connection.
 *
 * @return the ClientKeyExchange byte buffer.
 */ro.createClientKeyExchange=function(e){// create buffer to encrypt
var t=_.util.createBuffer();// add highest client-supported protocol to help server avoid version
// rollback attacks
t.putByte(e.session.clientHelloVersion.major),t.putByte(e.session.clientHelloVersion.minor),// generate and add 46 random bytes
t.putBytes(_.random.getBytes(46));// save pre-master secret
var r=e.session.sp;r.pre_master_secret=t.getBytes();/* Note: The encrypted pre-master secret will be stored in a
    public-key-encrypted opaque vector that has the length prefixed using
    2 bytes, so include those 2 bytes in the handshake message length. This
    is done as a minor optimization instead of calling writeVector(). */// determine length of the handshake message
var i=(t=e.session.serverCertificate.publicKey.encrypt(r.pre_master_secret)).length+2,n=_.util.createBuffer();return n.putByte(ro.HandshakeType.client_key_exchange),n.putInt24(i),// add vector length bytes
n.putInt16(t.length),n.putBytes(t),n},/**
 * Creates a ServerKeyExchange message.
 *
 * @param c the connection.
 *
 * @return the ServerKeyExchange byte buffer.
 */ro.createServerKeyExchange=function(e){return _.util.createBuffer()},/**
 * Gets the signed data used to verify a client-side certificate. See
 * tls.createCertificateVerify() for details.
 *
 * @param c the connection.
 * @param callback the callback to call once the signed data is ready.
 */ro.getClientSignature=function(e,t){// generate data to RSA encrypt
var r=_.util.createBuffer();r.putBuffer(e.session.md5.digest()),r.putBuffer(e.session.sha1.digest()),r=r.getBytes(),// create default signing function as necessary
e.getSignature=e.getSignature||function(e,t,r){// do rsa encryption, call callback
var i=null;if(e.getPrivateKey)try{i=e.getPrivateKey(e,e.session.clientCertificate),i=_.pki.privateKeyFromPem(i)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}})}null===i?e.error(e,{message:"No private key set.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.internal_error}}):t=i.sign(t,null),r(e,t)},// get client signature
e.getSignature(e,r,t)},/**
 * Creates a CertificateVerify message.
 *
 * Meaning of this message:
 *   This structure conveys the client's Diffie-Hellman public value
 *   (Yc) if it was not already included in the client's certificate.
 *   The encoding used for Yc is determined by the enumerated
 *   PublicValueEncoding. This structure is a variant of the client
 *   key exchange message, not a message in itself.
 *
 * When this message will be sent:
 *   This message is used to provide explicit verification of a client
 *   certificate. This message is only sent following a client
 *   certificate that has signing capability (i.e. all certificates
 *   except those containing fixed Diffie-Hellman parameters). When
 *   sent, it will immediately follow the client key exchange message.
 *
 * struct {
 *   Signature signature;
 * } CertificateVerify;
 *
 * CertificateVerify.signature.md5_hash
 *   MD5(handshake_messages);
 *
 * Certificate.signature.sha_hash
 *   SHA(handshake_messages);
 *
 * Here handshake_messages refers to all handshake messages sent or
 * received starting at client hello up to but not including this
 * message, including the type and length fields of the handshake
 * messages.
 *
 * select(SignatureAlgorithm) {
 *   case anonymous: struct { };
 *   case rsa:
 *     digitally-signed struct {
 *       opaque md5_hash[16];
 *       opaque sha_hash[20];
 *     };
 *   case dsa:
 *     digitally-signed struct {
 *       opaque sha_hash[20];
 *     };
 * } Signature;
 *
 * In digital signing, one-way hash functions are used as input for a
 * signing algorithm. A digitally-signed element is encoded as an opaque
 * vector <0..2^16-1>, where the length is specified by the signing
 * algorithm and key.
 *
 * In RSA signing, a 36-byte structure of two hashes (one SHA and one
 * MD5) is signed (encrypted with the private key). It is encoded with
 * PKCS #1 block type 0 or type 1 as described in [PKCS1].
 *
 * In DSS, the 20 bytes of the SHA hash are run directly through the
 * Digital Signing Algorithm with no additional hashing.
 *
 * @param c the connection.
 * @param signature the signature to include in the message.
 *
 * @return the CertificateVerify byte buffer.
 */ro.createCertificateVerify=function(e,t){/* Note: The signature will be stored in a "digitally-signed" opaque
    vector that has the length prefixed using 2 bytes, so include those
    2 bytes in the handshake message length. This is done as a minor
    optimization instead of calling writeVector(). */// determine length of the handshake message
var r=t.length+2,i=_.util.createBuffer();return i.putByte(ro.HandshakeType.certificate_verify),i.putInt24(r),// add vector length bytes
i.putInt16(t.length),i.putBytes(t),i},/**
 * Creates a CertificateRequest message.
 *
 * @param c the connection.
 *
 * @return the CertificateRequest byte buffer.
 */ro.createCertificateRequest=function(e){// TODO: support other certificate types
var t=_.util.createBuffer();// common RSA certificate type
t.putByte(1);// add distinguished names from CA store
var r=_.util.createBuffer();for(var i in e.caStore.certs){var n=e.caStore.certs[i],a=_.pki.distinguishedNameToAsn1(n.subject),s=_.asn1.toDer(a);r.putInt16(s.length()),r.putBuffer(s)}// TODO: TLS 1.2+ has a different format
// determine length of the handshake message
var o=1+t.length()+2+r.length(),l=_.util.createBuffer();return l.putByte(ro.HandshakeType.certificate_request),l.putInt24(o),rs(l,1,t),rs(l,2,r),l},/**
 * Creates a ServerHelloDone message.
 *
 * @param c the connection.
 *
 * @return the ServerHelloDone byte buffer.
 */ro.createServerHelloDone=function(e){// build record fragment
var t=_.util.createBuffer();return t.putByte(ro.HandshakeType.server_hello_done),t.putInt24(0),t},/**
 * Creates a ChangeCipherSpec message.
 *
 * The change cipher spec protocol exists to signal transitions in
 * ciphering strategies. The protocol consists of a single message,
 * which is encrypted and compressed under the current (not the pending)
 * connection state. The message consists of a single byte of value 1.
 *
 * struct {
 *   enum { change_cipher_spec(1), (255) } type;
 * } ChangeCipherSpec;
 *
 * @return the ChangeCipherSpec byte buffer.
 */ro.createChangeCipherSpec=function(){var e=_.util.createBuffer();return e.putByte(1),e},/**
 * Creates a Finished message.
 *
 * struct {
 *   opaque verify_data[12];
 * } Finished;
 *
 * verify_data
 *   PRF(master_secret, finished_label, MD5(handshake_messages) +
 *   SHA-1(handshake_messages)) [0..11];
 *
 * finished_label
 *   For Finished messages sent by the client, the string "client
 *   finished". For Finished messages sent by the server, the
 *   string "server finished".
 *
 * handshake_messages
 *   All of the data from all handshake messages up to but not
 *   including this message. This is only data visible at the
 *   handshake layer and does not include record layer headers.
 *   This is the concatenation of all the Handshake structures as
 *   defined in 7.4 exchanged thus far.
 *
 * @param c the connection.
 *
 * @return the Finished byte buffer.
 */ro.createFinished=function(e){// generate verify_data
var t=_.util.createBuffer();t.putBuffer(e.session.md5.digest()),t.putBuffer(e.session.sha1.digest());// TODO: determine prf function and verify length for TLS 1.2
var r=e.entity===ro.ConnectionEnd.client;t=rr(e.session.sp.master_secret,r?"client finished":"server finished",t.getBytes(),12);// build record fragment
var i=_.util.createBuffer();return i.putByte(ro.HandshakeType.finished),i.putInt24(t.length()),i.putBuffer(t),i},/**
 * Creates a HeartbeatMessage (See RFC 6520).
 *
 * struct {
 *   HeartbeatMessageType type;
 *   uint16 payload_length;
 *   opaque payload[HeartbeatMessage.payload_length];
 *   opaque padding[padding_length];
 * } HeartbeatMessage;
 *
 * The total length of a HeartbeatMessage MUST NOT exceed 2^14 or
 * max_fragment_length when negotiated as defined in [RFC6066].
 *
 * type: The message type, either heartbeat_request or heartbeat_response.
 *
 * payload_length: The length of the payload.
 *
 * payload: The payload consists of arbitrary content.
 *
 * padding: The padding is random content that MUST be ignored by the
 *   receiver. The length of a HeartbeatMessage is TLSPlaintext.length
 *   for TLS and DTLSPlaintext.length for DTLS. Furthermore, the
 *   length of the type field is 1 byte, and the length of the
 *   payload_length is 2. Therefore, the padding_length is
 *   TLSPlaintext.length - payload_length - 3 for TLS and
 *   DTLSPlaintext.length - payload_length - 3 for DTLS. The
 *   padding_length MUST be at least 16.
 *
 * The sender of a HeartbeatMessage MUST use a random padding of at
 * least 16 bytes. The padding of a received HeartbeatMessage message
 * MUST be ignored.
 *
 * If the payload_length of a received HeartbeatMessage is too large,
 * the received HeartbeatMessage MUST be discarded silently.
 *
 * @param c the connection.
 * @param type the tls.HeartbeatMessageType.
 * @param payload the heartbeat data to send as the payload.
 * @param [payloadLength] the payload length to use, defaults to the
 *          actual payload length.
 *
 * @return the HeartbeatRequest byte buffer.
 */ro.createHeartbeat=function(e,t,r){void 0===r&&(r=t.length);// build record fragment
var i=_.util.createBuffer();i.putByte(e),i.putInt16(r),i.putBytes(t);var n=Math.max(16,i.length()-r-3);return i.putBytes(_.random.getBytes(n)),i},/**
 * Fragments, compresses, encrypts, and queues a record for delivery.
 *
 * @param c the connection.
 * @param record the record to queue.
 */ro.queue=function(e,t){// error during record creation
if(t&&(0!==t.fragment.length()||t.type!==ro.ContentType.handshake&&t.type!==ro.ContentType.alert&&t.type!==ro.ContentType.change_cipher_spec)){// if the record is a handshake record, update handshake hashes
if(t.type===ro.ContentType.handshake){var r,i=t.fragment.bytes();e.session.md5.update(i),e.session.sha1.update(i),i=null}if(t.fragment.length()<=ro.MaxFragment)r=[t];else{// fragment data as long as it is too long
r=[];for(var n=t.fragment.bytes();n.length>ro.MaxFragment;)r.push(ro.createRecord(e,{type:t.type,data:_.util.createBuffer(n.slice(0,ro.MaxFragment))})),n=n.slice(ro.MaxFragment);// add last record
n.length>0&&r.push(ro.createRecord(e,{type:t.type,data:_.util.createBuffer(n)}))}// compress and encrypt all fragmented records
for(var a=0;a<r.length&&!e.fail;++a){// update the record using current write state
var s=r[a];e.state.current.write.update(e,s)&&e.records.push(s)}}},/**
 * Flushes all queued records to the output buffer and calls the
 * tlsDataReady() handler on the given connection.
 *
 * @param c the connection.
 *
 * @return true on success, false on failure.
 */ro.flush=function(e){for(var t=0;t<e.records.length;++t){var r=e.records[t];// add record header and fragment
e.tlsData.putByte(r.type),e.tlsData.putByte(r.version.major),e.tlsData.putByte(r.version.minor),e.tlsData.putInt16(r.fragment.length()),e.tlsData.putBuffer(e.records[t].fragment)}return e.records=[],e.tlsDataReady(e)};/**
 * Maps a pki.certificateError to a tls.Alert.Description.
 *
 * @param error the error to map.
 *
 * @return the alert description.
 */var rM=function(e){switch(e){case!0:return!0;case _.pki.certificateError.bad_certificate:return ro.Alert.Description.bad_certificate;case _.pki.certificateError.unsupported_certificate:return ro.Alert.Description.unsupported_certificate;case _.pki.certificateError.certificate_revoked:return ro.Alert.Description.certificate_revoked;case _.pki.certificateError.certificate_expired:return ro.Alert.Description.certificate_expired;case _.pki.certificateError.certificate_unknown:return ro.Alert.Description.certificate_unknown;case _.pki.certificateError.unknown_ca:return ro.Alert.Description.unknown_ca;default:return ro.Alert.Description.bad_certificate}},rF=function(e){switch(e){case!0:return!0;case ro.Alert.Description.bad_certificate:return _.pki.certificateError.bad_certificate;case ro.Alert.Description.unsupported_certificate:return _.pki.certificateError.unsupported_certificate;case ro.Alert.Description.certificate_revoked:return _.pki.certificateError.certificate_revoked;case ro.Alert.Description.certificate_expired:return _.pki.certificateError.certificate_expired;case ro.Alert.Description.certificate_unknown:return _.pki.certificateError.certificate_unknown;case ro.Alert.Description.unknown_ca:return _.pki.certificateError.unknown_ca;default:return _.pki.certificateError.bad_certificate}};// expose non-functions
for(var rj in /**
 * Verifies a certificate chain against the given connection's
 * Certificate Authority store.
 *
 * @param c the TLS connection.
 * @param chain the certificate chain to verify, with the root or highest
 *          authority at the end.
 *
 * @return true if successful, false if not.
 */ro.verifyCertificateChain=function(e,t){try{// Make a copy of c.verifyOptions so that we can modify options.verify
// without modifying c.verifyOptions.
var r={};for(var i in e.verifyOptions)r[i]=e.verifyOptions[i];r.verify=function(t,r,i){// convert pki.certificateError to tls alert description
rM(t);// call application callback
var n=e.verify(e,t,r,i);if(!0!==n){if("object"==typeof n&&!_.util.isArray(n)){// throw custom error
var a=Error("The application rejected the certificate.");throw a.send=!0,a.alert={level:ro.Alert.Level.fatal,description:ro.Alert.Description.bad_certificate},n.message&&(a.message=n.message),n.alert&&(a.alert.description=n.alert),a}// convert tls alert description to pki.certificateError
n!==t&&(n=rF(n))}return n},// verify chain
_.pki.verifyCertificateChain(e.caStore,t,r)}catch(t){// build tls error if not already customized
var n=t;("object"!=typeof n||_.util.isArray(n))&&(n={send:!0,alert:{level:ro.Alert.Level.fatal,description:rM(t)}}),"send"in n||(n.send=!0),"alert"in n||(n.alert={level:ro.Alert.Level.fatal,description:rM(n.error)}),// send error
e.error(e,n)}return!e.fail},/**
 * Creates a new TLS session cache.
 *
 * @param cache optional map of session ID to cached session.
 * @param capacity the maximum size for the cache (default: 100).
 *
 * @return the new TLS session cache.
 */ro.createSessionCache=function(e,t){var r=null;// assume input is already a session cache object
if(e&&e.getSession&&e.setSession&&e.order)r=e;else{// store order for sessions, delete session overflow
for(var i in// create cache
(r={}).cache=e||{},r.capacity=Math.max(t||100,1),r.order=[],e)r.order.length<=t?r.order.push(i):delete e[i];// get a session from a session ID (or get any session)
r.getSession=function(e){var t=null,i=null;if(e?i=_.util.bytesToHex(e):r.order.length>0&&(i=r.order[0]),null!==i&&i in r.cache){for(var n in // get cached session and remove from cache
t=r.cache[i],delete r.cache[i],r.order)if(r.order[n]===i){r.order.splice(n,1);break}}return t},// set a session in the cache
r.setSession=function(e,t){// remove session from cache if at capacity
if(r.order.length===r.capacity){var i=r.order.shift();delete r.cache[i]}// add session to cache
var i=_.util.bytesToHex(e);r.order.push(i),r.cache[i]=t}}return r},/**
 * Creates a new TLS connection.
 *
 * See public createConnection() docs for more details.
 *
 * @param options the options for this connection.
 *
 * @return the new TLS connection.
 */ro.createConnection=function(e){var t=null;t=e.caStore?_.util.isArray(e.caStore)?_.pki.createCaStore(e.caStore):e.caStore:_.pki.createCaStore();// setup default cipher suites
var r=e.cipherSuites||null;if(null===r)for(var i in r=[],ro.CipherSuites)r.push(ro.CipherSuites[i]);// set default entity
var n=e.server?ro.ConnectionEnd.server:ro.ConnectionEnd.client,a=e.sessionCache?ro.createSessionCache(e.sessionCache):null,s={version:{major:ro.Version.major,minor:ro.Version.minor},entity:n,sessionId:e.sessionId,caStore:t,sessionCache:a,cipherSuites:r,connected:e.connected,virtualHost:e.virtualHost||null,verifyClient:e.verifyClient||!1,verify:e.verify||function(e,t,r,i){return t},verifyOptions:e.verifyOptions||{},getCertificate:e.getCertificate||null,getPrivateKey:e.getPrivateKey||null,getSignature:e.getSignature||null,input:_.util.createBuffer(),tlsData:_.util.createBuffer(),data:_.util.createBuffer(),tlsDataReady:e.tlsDataReady,dataReady:e.dataReady,heartbeatReceived:e.heartbeatReceived,closed:e.closed,error:function(t,r){// set origin if not set
r.origin=r.origin||(t.entity===ro.ConnectionEnd.client?"client":"server"),r.send&&(ro.queue(t,ro.createAlert(t,r.alert)),ro.flush(t));// error is fatal by default
var i=!1!==r.fatal;i&&(t.fail=!0),// call error handler first
e.error(t,r),i&&t.close(!1)},deflate:e.deflate||null,inflate:e.inflate||null};/**
   * Resets a closed TLS connection for reuse. Called in c.close().
   *
   * @param clearFail true to clear the fail flag (default: true).
   */s.reset=function(e){s.version={major:ro.Version.major,minor:ro.Version.minor},s.record=null,s.session=null,s.peerCertificate=null,s.state={pending:null,current:null},s.expect=(s.entity,ro.ConnectionEnd.client,0),s.fragmented=null,s.records=[],s.open=!1,s.handshakes=0,s.handshaking=!1,s.isConnected=!1,s.fail=!(e||void 0===e),s.input.clear(),s.tlsData.clear(),s.data.clear(),s.state.current=ro.createConnectionState(s)},// do initial reset of connection
s.reset();/**
   * Updates the current TLS engine state based on the given record.
   *
   * @param c the TLS connection.
   * @param record the TLS record to act on.
   */var o=function(e,t){// get record handler (align type in table by subtracting lowest)
var r=t.type-ro.ContentType.change_cipher_spec,i=rN[e.entity][e.expect];r in i?i[r](e,t):ro.handleUnexpected(e,t)},l=function(e){var t=0,r=e.input,i=r.length();// need at least 5 bytes to initialize a record
if(i<5)t=5-i;else{// enough bytes for header
// initialize record
e.record={type:r.getByte(),version:{major:r.getByte(),minor:r.getByte()},length:r.getInt16(),fragment:_.util.createBuffer(),ready:!1};// check record version
var n=e.record.version.major===e.version.major;n&&e.session&&e.session.version&&(n=e.record.version.minor===e.version.minor),n||e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.protocol_version}})}return t},c=function(e){var t=0,r=e.input,i=r.length();return i<e.record.length?t=e.record.length-i:(// there is enough data to parse the pending record
// fill record fragment and compact input buffer
e.record.fragment.putBytes(r.getBytes(e.record.length)),r.compact(),e.state.current.read.update(e,e.record)&&(null!==e.fragmented&&(e.fragmented.type===e.record.type?(// concatenate record fragments
e.fragmented.fragment.putBuffer(e.record.fragment),e.record=e.fragmented):e.error(e,{message:"Invalid fragmented record.",send:!0,alert:{level:ro.Alert.Level.fatal,description:ro.Alert.Description.unexpected_message}})),// record is now ready
e.record.ready=!0)),t};return(/**
   * Performs a handshake using the TLS Handshake Protocol, as a client.
   *
   * This method should only be called if the connection is in client mode.
   *
   * @param sessionId the session ID to use, null to start a new one.
   */s.handshake=function(e){// error to call this in non-client mode
if(s.entity!==ro.ConnectionEnd.client)s.error(s,{message:"Cannot initiate handshake as a server.",fatal:!1});else if(s.handshaking)s.error(s,{message:"Handshake already in progress.",fatal:!1});else{s.fail&&!s.open&&0===s.handshakes&&(s.fail=!1),// now handshaking
s.handshaking=!0;// if a session ID was specified, try to find it in the cache
var t=null;// default to blank (new session)
(e=e||"").length>0&&(s.sessionCache&&(t=s.sessionCache.getSession(e)),null===t&&(e="")),0===e.length&&s.sessionCache&&null!==(t=s.sessionCache.getSession())&&(e=t.id),// set up session
s.session={id:e,version:null,cipherSuite:null,compressionMethod:null,serverCertificate:null,certificateRequest:null,clientCertificate:null,sp:{},md5:_.md.md5.create(),sha1:_.md.sha1.create()},t&&(// only update version on connection, session version not yet set
s.version=t.version,s.session.sp=t.sp),// generate new client random
s.session.sp.client_random=ro.createRandom().getBytes(),// connection now open
s.open=!0,// send hello
ro.queue(s,ro.createRecord(s,{type:ro.ContentType.handshake,data:ro.createClientHello(s)})),ro.flush(s)}},/**
   * Called when TLS protocol data has been received from somewhere and should
   * be processed by the TLS engine.
   *
   * @param data the TLS protocol data, as a string, to process.
   *
   * @return 0 if the data could be processed, otherwise the number of bytes
   *         required for data to be processed.
   */s.process=function(e){var t=0;return e&&s.input.putBytes(e),s.fail||(null!==s.record&&s.record.ready&&s.record.fragment.isEmpty()&&(s.record=null),null===s.record&&(t=l(s)),s.fail||null===s.record||s.record.ready||(t=c(s)),!s.fail&&null!==s.record&&s.record.ready&&o(s,s.record)),t},/**
   * Requests that application data be packaged into a TLS record. The
   * tlsDataReady handler will be called when the TLS record(s) have been
   * prepared.
   *
   * @param data the application data, as a raw 'binary' encoded string, to
   *          be sent; to send utf-16/utf-8 string data, use the return value
   *          of util.encodeUtf8(str).
   *
   * @return true on success, false on failure.
   */s.prepare=function(e){return ro.queue(s,ro.createRecord(s,{type:ro.ContentType.application_data,data:_.util.createBuffer(e)})),ro.flush(s)},/**
   * Requests that a heartbeat request be packaged into a TLS record for
   * transmission. The tlsDataReady handler will be called when TLS record(s)
   * have been prepared.
   *
   * When a heartbeat response has been received, the heartbeatReceived
   * handler will be called with the matching payload. This handler can
   * be used to clear a retransmission timer, etc.
   *
   * @param payload the heartbeat data to send as the payload in the message.
   * @param [payloadLength] the payload length to use, defaults to the
   *          actual payload length.
   *
   * @return true on success, false on failure.
   */s.prepareHeartbeatRequest=function(e,t){return e instanceof _.util.ByteBuffer&&(e=e.bytes()),void 0===t&&(t=e.length),s.expectedHeartbeatPayload=e,ro.queue(s,ro.createRecord(s,{type:ro.ContentType.heartbeat,data:ro.createHeartbeat(ro.HeartbeatMessageType.heartbeat_request,e,t)})),ro.flush(s)},/**
   * Closes the connection (sends a close_notify alert).
   *
   * @param clearFail true to clear the fail flag (default: true).
   */s.close=function(e){// save session if connection didn't fail
if(!s.fail&&s.sessionCache&&s.session){// only need to preserve session ID, version, and security params
var t={id:s.session.id,version:s.session.version,sp:s.session.sp};t.sp.keys=null,s.sessionCache.setSession(t.id,t)}s.open&&(// connection no longer open, clear input
s.open=!1,s.input.clear(),(s.isConnected||s.handshaking)&&(s.isConnected=s.handshaking=!1,// send close_notify alert
ro.queue(s,ro.createAlert(s,{level:ro.Alert.Level.warning,description:ro.Alert.Description.close_notify})),ro.flush(s)),// call handler
s.closed(s)),// reset TLS connection, do not clear fail flag
s.reset(e)},s)},_.tls=_.tls||{},ro)"function"!=typeof ro[rj]&&(_.tls[rj]=ro[rj]);// expose prf_tls1 for testing
_.tls.prf_tls1=rr,// expose sha1 hmac method
_.tls.hmac_sha1=function(e,t,r){/* MAC is computed like so:
  HMAC_hash(
    key, seqNum +
      TLSCompressed.type +
      TLSCompressed.version +
      TLSCompressed.length +
      TLSCompressed.fragment)
  */var i=_.hmac.create();i.start("SHA1",e);var n=_.util.createBuffer();return n.putInt32(t[0]),n.putInt32(t[1]),n.putByte(r.type),n.putByte(r.version.major),n.putByte(r.version.minor),n.putInt16(r.length),n.putBytes(r.fragment.bytes()),i.update(n.getBytes()),i.digest().getBytes()},// expose session cache creation
_.tls.createSessionCache=ro.createSessionCache,/**
 * Creates a new TLS connection. This does not make any assumptions about the
 * transport layer that TLS is working on top of, ie: it does not assume there
 * is a TCP/IP connection or establish one. A TLS connection is totally
 * abstracted away from the layer is runs on top of, it merely establishes a
 * secure channel between a client" and a "server".
 *
 * A TLS connection contains 4 connection states: pending read and write, and
 * current read and write.
 *
 * At initialization, the current read and write states will be null. Only once
 * the security parameters have been set and the keys have been generated can
 * the pending states be converted into current states. Current states will be
 * updated for each record processed.
 *
 * A custom certificate verify callback may be provided to check information
 * like the common name on the server's certificate. It will be called for
 * every certificate in the chain. It has the following signature:
 *
 * variable func(c, certs, index, preVerify)
 * Where:
 * c         The TLS connection
 * verified  Set to true if certificate was verified, otherwise the alert
 *           tls.Alert.Description for why the certificate failed.
 * depth     The current index in the chain, where 0 is the server's cert.
 * certs     The certificate chain, *NOTE* if the server was anonymous then
 *           the chain will be empty.
 *
 * The function returns true on success and on failure either the appropriate
 * tls.Alert.Description or an object with 'alert' set to the appropriate
 * tls.Alert.Description and 'message' set to a custom error message. If true
 * is not returned then the connection will abort using, in order of
 * availability, first the returned alert description, second the preVerify
 * alert description, and lastly the default 'bad_certificate'.
 *
 * There are three callbacks that can be used to make use of client-side
 * certificates where each takes the TLS connection as the first parameter:
 *
 * getCertificate(conn, hint)
 *   The second parameter is a hint as to which certificate should be
 *   returned. If the connection entity is a client, then the hint will be
 *   the CertificateRequest message from the server that is part of the
 *   TLS protocol. If the connection entity is a server, then it will be
 *   the servername list provided via an SNI extension the ClientHello, if
 *   one was provided (empty array if not). The hint can be examined to
 *   determine which certificate to use (advanced). Most implementations
 *   will just return a certificate. The return value must be a
 *   PEM-formatted certificate or an array of PEM-formatted certificates
 *   that constitute a certificate chain, with the first in the array/chain
 *   being the client's certificate.
 * getPrivateKey(conn, certificate)
 *   The second parameter is an forge.pki X.509 certificate object that
 *   is associated with the requested private key. The return value must
 *   be a PEM-formatted private key.
 * getSignature(conn, bytes, callback)
 *   This callback can be used instead of getPrivateKey if the private key
 *   is not directly accessible in javascript or should not be. For
 *   instance, a secure external web service could provide the signature
 *   in exchange for appropriate credentials. The second parameter is a
 *   string of bytes to be signed that are part of the TLS protocol. These
 *   bytes are used to verify that the private key for the previously
 *   provided client-side certificate is accessible to the client. The
 *   callback is a function that takes 2 parameters, the TLS connection
 *   and the RSA encrypted (signed) bytes as a string. This callback must
 *   be called once the signature is ready.
 *
 * @param options the options for this connection:
 *   server: true if the connection is server-side, false for client.
 *   sessionId: a session ID to reuse, null for a new connection.
 *   caStore: an array of certificates to trust.
 *   sessionCache: a session cache to use.
 *   cipherSuites: an optional array of cipher suites to use,
 *     see tls.CipherSuites.
 *   connected: function(conn) called when the first handshake completes.
 *   virtualHost: the virtual server name to use in a TLS SNI extension.
 *   verifyClient: true to require a client certificate in server mode,
 *     'optional' to request one, false not to (default: false).
 *   verify: a handler used to custom verify certificates in the chain.
 *   verifyOptions: an object with options for the certificate chain validation.
 *     See documentation of pki.verifyCertificateChain for possible options.
 *     verifyOptions.verify is ignored. If you wish to specify a verify handler
 *     use the verify key.
 *   getCertificate: an optional callback used to get a certificate or
 *     a chain of certificates (as an array).
 *   getPrivateKey: an optional callback used to get a private key.
 *   getSignature: an optional callback used to get a signature.
 *   tlsDataReady: function(conn) called when TLS protocol data has been
 *     prepared and is ready to be used (typically sent over a socket
 *     connection to its destination), read from conn.tlsData buffer.
 *   dataReady: function(conn) called when application data has
 *     been parsed from a TLS record and should be consumed by the
 *     application, read from conn.data buffer.
 *   closed: function(conn) called when the connection has been closed.
 *   error: function(conn, error) called when there was an error.
 *   deflate: function(inBytes) if provided, will deflate TLS records using
 *     the deflate algorithm if the server supports it.
 *   inflate: function(inBytes) if provided, will inflate TLS records using
 *     the deflate algorithm if the server supports it.
 *
 * @return the new TLS connection.
 */_.tls.createConnection=ro.createConnection;var rH=_.tls;function rq(e,t,r){var i=t.entity===_.tls.ConnectionEnd.client;// cipher setup
e.read.cipherState={init:!1,cipher:_.cipher.createDecipher("AES-CBC",i?r.keys.server_write_key:r.keys.client_write_key),iv:i?r.keys.server_write_IV:r.keys.client_write_IV},e.write.cipherState={init:!1,cipher:_.cipher.createCipher("AES-CBC",i?r.keys.client_write_key:r.keys.server_write_key),iv:i?r.keys.client_write_IV:r.keys.server_write_IV},e.read.cipherFunction=r$,e.write.cipherFunction=rG,// MAC setup
e.read.macLength=e.write.macLength=r.mac_length,e.read.macFunction=e.write.macFunction=rH.hmac_sha1}/**
 * Encrypts the TLSCompressed record into a TLSCipherText record using AES
 * in CBC mode.
 *
 * @param record the TLSCompressed record to encrypt.
 * @param s the ConnectionState to use.
 *
 * @return true on success, false on failure.
 */function rG(e,t){var r,i=!1,n=t.macFunction(t.macKey,t.sequenceNumber,e);e.fragment.putBytes(n),t.updateSequenceNumber(),// the residue from the previous encryption
r=e.version.minor===rH.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:_.random.getBytesSync(16),t.cipherState.init=!0;// start cipher
var a=t.cipherState.cipher;return a.start({iv:r}),e.version.minor>=rH.Versions.TLS_1_1.minor&&a.output.putBytes(r),// do encryption (default padding is appropriate)
a.update(e.fragment),a.finish(rz)&&(// set record fragment to encrypted output
e.fragment=a.output,e.length=e.fragment.length(),i=!0),i}/**
 * Handles padding for aes_cbc_sha1 in encrypt mode.
 *
 * @param blockSize the block size.
 * @param input the input buffer.
 * @param decrypt true in decrypt mode, false in encrypt mode.
 *
 * @return true on success, false on failure.
 */function rz(e,t,r){/* The encrypted data length (TLSCiphertext.length) is one more than the sum
   of SecurityParameters.block_length, TLSCompressed.length,
   SecurityParameters.mac_length, and padding_length.

   The padding may be any length up to 255 bytes long, as long as it results in
   the TLSCiphertext.length being an integral multiple of the block length.
   Lengths longer than necessary might be desirable to frustrate attacks on a
   protocol based on analysis of the lengths of exchanged messages. Each uint8
   in the padding data vector must be filled with the padding length value.

   The padding length should be such that the total size of the
   GenericBlockCipher structure is a multiple of the cipher's block length.
   Legal values range from zero to 255, inclusive. This length specifies the
   length of the padding field exclusive of the padding_length field itself.

   This is slightly different from PKCS#7 because the padding value is 1
   less than the actual number of padding bytes if you include the
   padding_length uint8 itself as a padding byte. */if(!r){// get the number of padding bytes required to reach the blockSize and
// subtract 1 for the padding value (to make room for the padding_length
// uint8)
var i=e-t.length()%e;t.fillWithByte(i-1,i)}return!0}/**
 * Handles padding for aes_cbc_sha1 in decrypt mode.
 *
 * @param blockSize the block size.
 * @param output the output buffer.
 * @param decrypt true in decrypt mode, false in encrypt mode.
 *
 * @return true on success, false on failure.
 */function rQ(e,t,r){var i=!0;if(r){for(var n=t.length(),a=t.last(),s=n-1-a;s<n-1;++s)i=i&&t.at(s)==a;i&&t.truncate(a+1)}return i}/**
 * Decrypts a TLSCipherText record into a TLSCompressed record using
 * AES in CBC mode.
 *
 * @param record the TLSCipherText record to decrypt.
 * @param s the ConnectionState to use.
 *
 * @return true on success, false on failure.
 */function r$(e,t){var r,i,n,a,s,o=!1;// residue from the previous decryption
s=e.version.minor===rH.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:e.fragment.getBytes(16),t.cipherState.init=!0;// start cipher
var l=t.cipherState.cipher;l.start({iv:s}),// do decryption
l.update(e.fragment),o=l.finish(rQ);// even if decryption fails, keep going to minimize timing attacks
// decrypted data:
// first (len - 20) bytes = application data
// last 20 bytes          = MAC
var c=t.macLength,u=_.random.getBytesSync(c),h=l.output.length();h>=c?(e.fragment=l.output.getBytes(h-c),u=l.output.getBytes(c)):e.fragment=l.output.getBytes(),e.fragment=_.util.createBuffer(e.fragment),e.length=e.fragment.length();// see if data integrity checks out, update sequence number
var f=t.macFunction(t.macKey,t.sequenceNumber,e);return t.updateSequenceNumber(),r=t.macKey,i=u,n=f,(a=_.hmac.create()).start("SHA1",r),a.update(i),i=a.digest().getBytes(),a.start(null,null),a.update(n),o=i===(n=a.digest().getBytes())&&o}/**
 * Supported cipher suites.
 */rH.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA={id:[0,47],name:"TLS_RSA_WITH_AES_128_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=rH.BulkCipherAlgorithm.aes,e.cipher_type=rH.CipherType.block,e.enc_key_length=16,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=rH.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:rq},rH.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA={id:[0,53],name:"TLS_RSA_WITH_AES_256_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=rH.BulkCipherAlgorithm.aes,e.cipher_type=rH.CipherType.block,e.enc_key_length=32,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=rH.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:rq};var I=b("4AFFV"),rW=I.Buffer,_=(b("hnKIb"),b("hnKIb"));b("df6Hw");var rY=_.sha512=_.sha512||{};// SHA-512
_.md.sha512=_.md.algorithms.sha512=rY;// SHA-384
var rX=_.sha384=_.sha512.sha384=_.sha512.sha384||{};rX.create=function(){return rY.create("SHA-384")},_.md.sha384=_.md.algorithms.sha384=rX,// SHA-512/256
_.sha512.sha256=_.sha512.sha256||{create:function(){return rY.create("SHA-512/256")}},_.md["sha512/256"]=_.md.algorithms["sha512/256"]=_.sha512.sha256,// SHA-512/224
_.sha512.sha224=_.sha512.sha224||{create:function(){return rY.create("SHA-512/224")}},_.md["sha512/224"]=_.md.algorithms["sha512/224"]=_.sha512.sha224,/**
 * Creates a SHA-2 message digest object.
 *
 * @param algorithm the algorithm to use (SHA-512, SHA-384, SHA-512/224,
 *          SHA-512/256).
 *
 * @return a message digest object.
 */rY.create=function(e){if(rJ||(rZ=String.fromCharCode(128)+_.util.fillString("\x00",128),// create K table for SHA-512
r1=[[1116352408,3609767458],[1899447441,602891725],[3049323471,3964484399],[3921009573,2173295548],[961987163,4081628472],[1508970993,3053834265],[2453635748,2937671579],[2870763221,3664609560],[3624381080,2734883394],[310598401,1164996542],[607225278,1323610764],[1426881987,3590304994],[1925078388,4068182383],[2162078206,991336113],[2614888103,633803317],[3248222580,3479774868],[3835390401,2666613458],[4022224774,944711139],[264347078,2341262773],[604807628,2007800933],[770255983,1495990901],[1249150122,1856431235],[1555081692,3175218132],[1996064986,2198950837],[2554220882,3999719339],[2821834349,766784016],[2952996808,2566594879],[3210313671,3203337956],[3336571891,1034457026],[3584528711,2466948901],[113926993,3758326383],[338241895,168717936],[666307205,1188179964],[773529912,1546045734],[1294757372,1522805485],[1396182291,2643833823],[1695183700,2343527390],[1986661051,1014477480],[2177026350,1206759142],[2456956037,344077627],[2730485921,1290863460],[2820302411,3158454273],[3259730800,3505952657],[3345764771,106217008],[3516065817,3606008344],[3600352804,1432725776],[4094571909,1467031594],[275423344,851169720],[430227734,3100823752],[506948616,1363258195],[659060556,3750685593],[883997877,3785050280],[958139571,3318307427],[1322822218,3812723403],[1537002063,2003034995],[1747873779,3602036899],[1955562222,1575990012],[2024104815,1125592928],[2227730452,2716904306],[2361852424,442776044],[2428436474,593698344],[2756734187,3733110249],[3204031479,2999351573],[3329325298,3815920427],[3391569614,3928383900],[3515267271,566280711],[3940187606,3454069534],[4118630271,4000239992],[116418474,1914138554],[174292421,2731055270],[289380356,3203993006],[460393269,320620315],[685471733,587496836],[852142971,1086792851],[1017036298,365543100],[1126000580,2618297676],[1288033470,3409855158],[1501505948,4234509866],[1607167915,987167468],[1816402316,1246189591]],// initial hash states
(r0={})["SHA-512"]=[[1779033703,4089235720],[3144134277,2227873595],[1013904242,4271175723],[2773480762,1595750129],[1359893119,2917565137],[2600822924,725511199],[528734635,4215389547],[1541459225,327033209]],r0["SHA-384"]=[[3418070365,3238371032],[1654270250,914150663],[2438529370,812702999],[355462360,4144912697],[1731405415,4290775857],[2394180231,1750603025],[3675008525,1694076839],[1203062813,3204075428]],r0["SHA-512/256"]=[[573645204,4230739756],[2673172387,3360449730],[596883563,1867755857],[2520282905,1497426621],[2519219938,2827943907],[3193839141,1401305490],[721525244,746961066],[246885852,2177182882]],r0["SHA-512/224"]=[[2352822216,424955298],[1944164710,2312950998],[502970286,855612546],[1738396948,1479516111],[258812777,2077511080],[2011393907,79989058],[1067287976,1780299464],[286451373,2446758561]],// now initialized
rJ=!0),void 0===e&&(e="SHA-512"),!(e in r0))throw Error("Invalid SHA-512 algorithm: "+e);for(var t=r0[e],r=null,i=_.util.createBuffer(),n=Array(80),a=0;a<80;++a)n[a]=[,,];// SHA-512 state contains eight 64-bit integers (each as two 32-bit ints)
var s=64;switch(e){case"SHA-384":s=48;break;case"SHA-512/256":s=32;break;case"SHA-512/224":s=28}// message digest object
var o={// SHA-512 => sha512
algorithm:e.replace("-","").toLowerCase(),blockLength:128,digestLength:s,// 56-bit length of message so far (does not including padding)
messageLength:0,// true message length
fullMessageLength:null,// size of message length in bytes
messageLengthSize:16};return(/**
   * Starts the digest.
   *
   * @return this digest object.
   */o.start=function(){// up to 56-bit message length for convenience
o.messageLength=0,// full message length (set md.messageLength128 for backwards-compatibility)
o.fullMessageLength=o.messageLength128=[];for(var e=o.messageLengthSize/4,n=0;n<e;++n)o.fullMessageLength.push(0);i=_.util.createBuffer(),r=Array(t.length);for(var n=0;n<t.length;++n)r[n]=t[n].slice(0);return o},// start digest automatically for first time
o.start(),/**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */o.update=function(e,t){"utf8"===t&&(e=_.util.encodeUtf8(e));// update message length
var a=e.length;o.messageLength+=a,a=[a/4294967296>>>0,a>>>0];for(var s=o.fullMessageLength.length-1;s>=0;--s)o.fullMessageLength[s]+=a[1],a[1]=a[0]+(o.fullMessageLength[s]/4294967296>>>0),o.fullMessageLength[s]=o.fullMessageLength[s]>>>0,a[0]=a[1]/4294967296>>>0;return(// add bytes to input buffer
i.putBytes(e),// process bytes
r2(r,n,i),(i.read>2048||0===i.length())&&i.compact(),o)},/**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */o.digest=function(){/* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-512 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. *//* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 896 mod 1024. In other words,
    the data to be digested must be a multiple of 1024 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 16 bytes (128
    bits), that means that the last segment of the data must have 112 bytes
    (896 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 896 mod 1024 because
    1024 - 128 = 896.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 896 mod 1024, then 1024 padding bits must be added. */var t,a,s=_.util.createBuffer();s.putBytes(i.bytes());// add padding for overflow blockSize - overflow
// _padding starts with 1 byte with first bit is set (byte value 128), then
// there may be up to (blockSize - 1) other pad bytes
var l=o.fullMessageLength[o.fullMessageLength.length-1]+o.messageLengthSize&o.blockLength-1;s.putBytes(rZ.substr(0,o.blockLength-l));for(var c=8*o.fullMessageLength[0],u=0;u<o.fullMessageLength.length-1;++u)c+=(t=8*o.fullMessageLength[u+1])/4294967296>>>0,s.putInt32(c>>>0),c=t>>>0;s.putInt32(c);for(var h=Array(r.length),u=0;u<r.length;++u)h[u]=r[u].slice(0);r2(h,n,s);var f=_.util.createBuffer();a="SHA-512"===e?h.length:"SHA-384"===e?h.length-2:h.length-4;for(var u=0;u<a;++u)f.putInt32(h[u][0]),(u!==a-1||"SHA-512/224"!==e)&&f.putInt32(h[u][1]);return f},o)};// sha-512 padding bytes not initialized yet
var rZ=null,rJ=!1,r1=null,r0=null;/**
 * Updates a SHA-512 state with the given byte buffer.
 *
 * @param s the SHA-512 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */function r2(e,t,r){for(var i,n,a,s,o,l,c,u,h,f,p,d,g,y,m,v,C,E,b,S,T,_,I,A,B,N,w,L,k,R,D,U,O,P,x,V=r.length();V>=128;){// the w array will be populated with sixteen 64-bit big-endian words
// and then extended into 64 64-bit words according to SHA-512
for(k=0;k<16;++k)t[k][0]=r.getInt32()>>>0,t[k][1]=r.getInt32()>>>0;for(;k<80;++k)// high bits
i=(((R=// for word 2 words ago: ROTR 19(x) ^ ROTR 61(x) ^ SHR 6(x)
(U=t[k-2])[0])>>>19|(D=U[1])<<13)^// ROTR 19
(D>>>29|R<<3)^// ROTR 61/(swap + ROTR 29)
R>>>6)>>>0,// low bits
n=((R<<13|D>>>19)^// ROTR 19
(D<<3|R>>>29)^// ROTR 61/(swap + ROTR 29)
(R<<26|D>>>6))>>>0,// high bits
a=(((R=// for word 15 words ago: ROTR 1(x) ^ ROTR 8(x) ^ SHR 7(x)
(P=t[k-15])[0])>>>1|(D=P[1])<<31)^// ROTR 1
(R>>>8|D<<24)^// ROTR 8
R>>>7)>>>0,// low bits
s=((R<<31|D>>>1)^// ROTR 1
(R<<24|D>>>8)^// ROTR 8
(R<<25|D>>>7))>>>0,// sum(t1, word 7 ago, t2, word 16 ago) modulo 2^64 (carry lo overflow)
O=t[k-7],x=t[k-16],D=n+O[1]+s+x[1],t[k][0]=i+O[0]+a+x[0]+(D/4294967296>>>0)>>>0,t[k][1]=D>>>0;// round function
for(k=0,// initialize hash value for this chunk
g=e[0][0],y=e[0][1],m=e[1][0],v=e[1][1],C=e[2][0],E=e[2][1],b=e[3][0],S=e[3][1],T=e[4][0],_=e[4][1],I=e[5][0],A=e[5][1],B=e[6][0],N=e[6][1],w=e[7][0],L=e[7][1];k<80;++k)// Sum1(e) = ROTR 14(e) ^ ROTR 18(e) ^ ROTR 41(e)
c=((T>>>14|_<<18)^// ROTR 14
(T>>>18|_<<14)^// ROTR 18
(_>>>9|T<<23))>>>0,u=((T<<18|_>>>14)^// ROTR 14
(T<<14|_>>>18)^// ROTR 18
(_<<23|T>>>9))>>>0,// Ch(e, f, g) (optimized the same way as SHA-1)
h=(B^T&(I^B))>>>0,f=(N^_&(A^N))>>>0,// Sum0(a) = ROTR 28(a) ^ ROTR 34(a) ^ ROTR 39(a)
o=((g>>>28|y<<4)^// ROTR 28
(y>>>2|g<<30)^// ROTR 34/(swap + ROTR 2)
(y>>>7|g<<25))>>>0,l=((g<<4|y>>>28)^// ROTR 28
(y<<30|g>>>2)^// ROTR 34/(swap + ROTR 2)
(y<<25|g>>>7))>>>0,// Maj(a, b, c) (optimized the same way as SHA-1)
p=(g&m|C&(g^m))>>>0,d=(y&v|E&(y^v))>>>0,// main algorithm
// t1 = (h + s1 + ch + _k[i] + _w[i]) modulo 2^64 (carry lo overflow)
D=L+u+f+r1[k][1]+t[k][1],i=w+c+h+r1[k][0]+t[k][0]+(D/4294967296>>>0)>>>0,n=D>>>0,a=o+p+(// t2 = s0 + maj modulo 2^64 (carry lo overflow)
(D=l+d)/4294967296>>>0)>>>0,s=D>>>0,w=B,L=N,B=I,N=A,I=T,A=_,T=b+i+(// e = (d + t1) modulo 2^64 (carry lo overflow)
(D=S+n)/4294967296>>>0)>>>0,_=D>>>0,b=C,S=E,C=m,E=v,m=g,v=y,g=i+a+(// a = (t1 + t2) modulo 2^64 (carry lo overflow)
(D=n+s)/4294967296>>>0)>>>0,y=D>>>0;// update hash state (additional modulo 2^64)
D=e[0][1]+y,e[0][0]=e[0][0]+g+(D/4294967296>>>0)>>>0,e[0][1]=D>>>0,D=e[1][1]+v,e[1][0]=e[1][0]+m+(D/4294967296>>>0)>>>0,e[1][1]=D>>>0,D=e[2][1]+E,e[2][0]=e[2][0]+C+(D/4294967296>>>0)>>>0,e[2][1]=D>>>0,D=e[3][1]+S,e[3][0]=e[3][0]+b+(D/4294967296>>>0)>>>0,e[3][1]=D>>>0,D=e[4][1]+_,e[4][0]=e[4][0]+T+(D/4294967296>>>0)>>>0,e[4][1]=D>>>0,D=e[5][1]+A,e[5][0]=e[5][0]+I+(D/4294967296>>>0)>>>0,e[5][1]=D>>>0,D=e[6][1]+N,e[6][0]=e[6][0]+B+(D/4294967296>>>0)>>>0,e[6][1]=D>>>0,D=e[7][1]+L,e[7][0]=e[7][0]+w+(D/4294967296>>>0)>>>0,e[7][1]=D>>>0,V-=128}}var _=b("hnKIb"),r6=_.asn1;if(u={// PrivateKeyInfo
name:"PrivateKeyInfo",tagClass:r6.Class.UNIVERSAL,type:r6.Type.SEQUENCE,constructed:!0,value:[{// Version (INTEGER)
name:"PrivateKeyInfo.version",tagClass:r6.Class.UNIVERSAL,type:r6.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{// privateKeyAlgorithm
name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:r6.Class.UNIVERSAL,type:r6.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:r6.Class.UNIVERSAL,type:r6.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{// PrivateKey
name:"PrivateKeyInfo",tagClass:r6.Class.UNIVERSAL,type:r6.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},h={name:"SubjectPublicKeyInfo",tagClass:r6.Class.UNIVERSAL,type:r6.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:r6.Class.UNIVERSAL,type:r6.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:r6.Class.UNIVERSAL,type:r6.Type.OID,constructed:!1,capture:"publicKeyOid"}]},// capture group for ed25519PublicKey
{tagClass:r6.Class.UNIVERSAL,type:r6.Type.BITSTRING,constructed:!1,composed:!0,captureBitStringValue:"ed25519PublicKey"}]},void 0===r5)var r5=_.jsbn.BigInteger;var r3=_.util.ByteBuffer,r4=void 0===rW?Uint8Array:rW;/*
 * Ed25519 algorithms, see RFC 8032:
 * https://tools.ietf.org/html/rfc8032
 */_.pki=_.pki||{},_.pki.ed25519=_.ed25519=_.ed25519||{};var r8=_.ed25519;function r7(e){var t=e.message;if(t instanceof Uint8Array||t instanceof r4)return t;var r=e.encoding;if(void 0===t){if(e.md)// TODO: more rigorous validation that `md` is a MessageDigest
t=e.md.digest().getBytes(),r="binary";else throw TypeError('"options.message" or "options.md" not specified.')}if("string"==typeof t&&!r)throw TypeError('"options.encoding" must be "binary" or "utf8".');if("string"==typeof t){if(void 0!==rW)return rW.from(t,r);t=new r3(t,r)}else if(!(t instanceof r3))throw TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');for(var i=new r4(t.length()),n=0;n<i.length;++n)i[n]=t.at(n);return i}r8.constants={},r8.constants.PUBLIC_KEY_BYTE_LENGTH=32,r8.constants.PRIVATE_KEY_BYTE_LENGTH=64,r8.constants.SEED_BYTE_LENGTH=32,r8.constants.SIGN_BYTE_LENGTH=64,r8.constants.HASH_BYTE_LENGTH=64,r8.generateKeyPair=function(e){var t=(e=e||{}).seed;if(void 0===t)t=_.random.getBytesSync(r8.constants.SEED_BYTE_LENGTH);else if("string"==typeof t){if(t.length!==r8.constants.SEED_BYTE_LENGTH)throw TypeError('"seed" must be '+r8.constants.SEED_BYTE_LENGTH+" bytes in length.")}else if(!(t instanceof Uint8Array))throw TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');t=r7({message:t,encoding:"binary"});for(var r=new r4(r8.constants.PUBLIC_KEY_BYTE_LENGTH),i=new r4(r8.constants.PRIVATE_KEY_BYTE_LENGTH),n=0;n<32;++n)i[n]=t[n];return function(e,t){var r,i=[i_(),i_(),i_(),i_()],n=il(t,32);for(n[0]&=248,n[31]&=127,n[31]|=64,iE(i,n),id(e,i),r=0;r<32;++r)t[r+32]=e[r]}(r,i),{publicKey:r,privateKey:i}},/**
 * Converts a private key from a RFC8410 ASN.1 encoding.
 *
 * @param obj - The asn1 representation of a private key.
 *
 * @returns {Object} keyInfo - The key information.
 * @returns {Buffer|Uint8Array} keyInfo.privateKeyBytes - 32 private key bytes.
 */r8.privateKeyFromAsn1=function(e){var t={},r=[];if(!_.asn1.validate(e,u,t,r)){var i=Error("Invalid Key.");throw i.errors=r,i}var n=_.asn1.derToOid(t.privateKeyOid),a=_.oids.EdDSA25519;if(n!==a)throw Error('Invalid OID "'+n+'"; OID must be "'+a+'".');var s=t.privateKey;// TODO: RFC8410 specifies a format for encoding the public key bytes along
// with the private key bytes. `publicKeyBytes` can be returned in the
// future. https://tools.ietf.org/html/rfc8410#section-10.3
return{privateKeyBytes:r7({message:_.asn1.fromDer(s).value,encoding:"binary"})}},/**
 * Converts a public key from a RFC8410 ASN.1 encoding.
 *
 * @param obj - The asn1 representation of a public key.
 *
 * @return {Buffer|Uint8Array} - 32 public key bytes.
 */r8.publicKeyFromAsn1=function(e){// get SubjectPublicKeyInfo
var t={},r=[];if(!_.asn1.validate(e,h,t,r)){var i=Error("Invalid Key.");throw i.errors=r,i}var n=_.asn1.derToOid(t.publicKeyOid),a=_.oids.EdDSA25519;if(n!==a)throw Error('Invalid OID "'+n+'"; OID must be "'+a+'".');var s=t.ed25519PublicKey;if(s.length!==r8.constants.PUBLIC_KEY_BYTE_LENGTH)throw Error("Key length is invalid.");return r7({message:s,encoding:"binary"})},r8.publicKeyFromPrivateKey=function(e){var t=r7({message:(e=e||{}).privateKey,encoding:"binary"});if(t.length!==r8.constants.PRIVATE_KEY_BYTE_LENGTH)throw TypeError('"options.privateKey" must have a byte length of '+r8.constants.PRIVATE_KEY_BYTE_LENGTH);for(var r=new r4(r8.constants.PUBLIC_KEY_BYTE_LENGTH),i=0;i<r.length;++i)r[i]=t[32+i];return r},r8.sign=function(e){var t=r7(e=e||{}),r=r7({message:e.privateKey,encoding:"binary"});if(r.length===r8.constants.SEED_BYTE_LENGTH)r=r8.generateKeyPair({seed:r}).privateKey;else if(r.length!==r8.constants.PRIVATE_KEY_BYTE_LENGTH)throw TypeError('"options.privateKey" must have a byte length of '+r8.constants.SEED_BYTE_LENGTH+" or "+r8.constants.PRIVATE_KEY_BYTE_LENGTH);var i=new r4(r8.constants.SIGN_BYTE_LENGTH+t.length);// Note: difference from C - smlen returned, not passed as argument.
(function(e,t,r,i){var n,a,s=new Float64Array(64),o=[i_(),i_(),i_(),i_()],l=il(i,32);for(l[0]&=248,l[31]&=127,l[31]|=64,n=0;n<r;++n)e[64+n]=t[n];for(n=0;n<32;++n)e[32+n]=l[32+n];var c=il(e.subarray(32),r+32);for(iu(c),iE(o,c),id(e,o),n=32;n<64;++n)e[n]=i[n];var u=il(e,r+64);for(iu(u),n=32;n<64;++n)s[n]=0;for(n=0;n<32;++n)s[n]=c[n];for(n=0;n<32;++n)for(a=0;a<32;a++)s[n+a]+=u[n]*l[a];ic(e.subarray(32),s)})(i,t,t.length,r);for(var n=new r4(r8.constants.SIGN_BYTE_LENGTH),a=0;a<n.length;++a)n[a]=i[a];return n},r8.verify=function(e){var t,r=r7(e=e||{});if(void 0===e.signature)throw TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');var i=r7({message:e.signature,encoding:"binary"});if(i.length!==r8.constants.SIGN_BYTE_LENGTH)throw TypeError('"options.signature" must have a byte length of '+r8.constants.SIGN_BYTE_LENGTH);var n=r7({message:e.publicKey,encoding:"binary"});if(n.length!==r8.constants.PUBLIC_KEY_BYTE_LENGTH)throw TypeError('"options.publicKey" must have a byte length of '+r8.constants.PUBLIC_KEY_BYTE_LENGTH);var a=new r4(r8.constants.SIGN_BYTE_LENGTH+r.length),s=new r4(r8.constants.SIGN_BYTE_LENGTH+r.length);for(t=0;t<r8.constants.SIGN_BYTE_LENGTH;++t)a[t]=i[t];for(t=0;t<r.length;++t)a[t+r8.constants.SIGN_BYTE_LENGTH]=r[t];return function(e,t,r,i){var n,a,s,o,l,c,u,h,f,p,d,g,y,m,v,C,E,b,S,T,_=new r4(32),I=[i_(),i_(),i_(),i_()],A=[i_(),i_(),i_(),i_()];if(r<64||(y=i_(),m=i_(),v=i_(),C=i_(),E=i_(),b=i_(),S=i_(),(ib(A[2],ie),function(e,t){var r;for(r=0;r<16;++r)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(A[1],i),iB(n=v,a=A[1],a),iB(C,v,it),iA(v,v,A[2]),iI(C,A[2],C),iB(s=E,o=C,o),iB(l=b,c=E,c),iB(S,b,E),iB(y,S,v),iB(y,y,C),function(e,t){var r,i,n,a=i_();for(n=0;n<16;++n)a[n]=t[n];for(n=250;n>=0;--n){iB(r=a,i=a,i),1!==n&&iB(a,a,t)}for(n=0;n<16;++n)e[n]=a[n]}(y,y),iB(y,y,v),iB(y,y,C),iB(y,y,C),iB(A[0],y,C),iB(u=m,h=A[0],h),iB(m,m,C),iy(m,v)&&iB(A[0],A[0],io),iB(f=m,p=A[0],p),iB(m,m,C),iy(m,v))?-1:(iv(A[0])===i[31]>>7&&iA(A[0],r9,A[0]),iB(A[3],A[0],A[1]),0)))return -1;for(T=0;T<r;++T)e[T]=t[T];for(T=0;T<32;++T)e[T+32]=i[T];var B=il(e,r);if(iu(B),iC(I,A,B),iE(A,t.subarray(32)),ih(I,A),id(_,I),r-=64,d=0,g=0,im(t,0,_,0,32)){for(T=0;T<r;++T)e[T]=0;return -1}for(T=0;T<r;++T)e[T]=t[T+64];return r}(s,a,a.length,n)>=0};var r9=i_(),ie=i_([1]),it=i_([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),ir=i_([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),ii=i_([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),ia=i_([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),is=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),io=i_([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);// TODO: update forge buffer implementation to use `Buffer` or `Uint8Array`,
// whichever is available, to improve performance
function il(e,t){// Note: `out` and `msg` are NativeBuffer
var r=_.md.sha512.create(),i=new r3(e);r.update(i.getBytes(t),"binary");var n=r.digest().getBytes();if(void 0!==rW)return rW.from(n,"binary");for(var a=new r4(r8.constants.HASH_BYTE_LENGTH),s=0;s<64;++s)a[s]=n.charCodeAt(s);return a}function ic(e,t){var r,i,n,a;for(i=63;i>=32;--i){for(r=0,n=i-32,a=i-12;n<a;++n)t[n]+=r-16*t[i]*is[n-(i-32)],r=t[n]+128>>8,t[n]-=256*r;t[n]+=r,t[i]=0}for(n=0,r=0;n<32;++n)t[n]+=r-(t[31]>>4)*is[n],r=t[n]>>8,t[n]&=255;for(n=0;n<32;++n)t[n]-=r*is[n];for(i=0;i<32;++i)t[i+1]+=t[i]>>8,e[i]=255&t[i]}function iu(e){for(var t=new Float64Array(64),r=0;r<64;++r)t[r]=e[r],e[r]=0;ic(e,t)}function ih(e,t){var r=i_(),i=i_(),n=i_(),a=i_(),s=i_(),o=i_(),l=i_(),c=i_(),u=i_();iA(r,e[1],e[0]),iA(u,t[1],t[0]),iB(r,r,u),iI(i,e[0],e[1]),iI(u,t[0],t[1]),iB(i,i,u),iB(n,e[3],t[3]),iB(n,n,ir),iB(a,e[2],t[2]),iI(a,a,a),iA(s,i,r),iA(o,a,n),iI(l,a,n),iI(c,i,r),iB(e[0],s,o),iB(e[1],c,l),iB(e[2],l,o),iB(e[3],s,c)}function ip(e,t,r){for(var i=0;i<4;++i)iT(e[i],t[i],r)}function id(e,t){var r=i_(),i=i_(),n=i_();(function(e,t){var r,i,n,a=i_();for(n=0;n<16;++n)a[n]=t[n];for(n=253;n>=0;--n){iB(r=a,i=a,i),2!==n&&4!==n&&iB(a,a,t)}for(n=0;n<16;++n)e[n]=a[n]})(n,t[2]),iB(r,t[0],n),iB(i,t[1],n),ig(e,i),e[31]^=iv(r)<<7}function ig(e,t){var r,i,n,a=i_(),s=i_();for(r=0;r<16;++r)s[r]=t[r];for(iS(s),iS(s),iS(s),i=0;i<2;++i){for(r=1,a[0]=s[0]-65517;r<15;++r)a[r]=s[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535;a[15]=s[15]-32767-(a[14]>>16&1),n=a[15]>>16&1,a[14]&=65535,iT(s,a,1-n)}for(r=0;r<16;r++)e[2*r]=255&s[r],e[2*r+1]=s[r]>>8}function iy(e,t){var r=new r4(32),i=new r4(32);return ig(r,e),ig(i,t),im(r,0,i,0,32)}function im(e,t,r,i,n){var a,s=0;for(a=0;a<n;++a)s|=e[t+a]^r[i+a];return(1&s-1>>>8)-1}function iv(e){var t=new r4(32);return ig(t,e),1&t[0]}function iC(e,t,r){var i,n;for(ib(e[0],r9),ib(e[1],ie),ib(e[2],ie),ib(e[3],r9),n=255;n>=0;--n)ip(e,t,i=r[n/8|0]>>(7&n)&1),ih(t,e),ih(e,e),ip(e,t,i)}function iE(e,t){var r=[i_(),i_(),i_(),i_()];ib(r[0],ii),ib(r[1],ia),ib(r[2],ie),iB(r[3],ii,ia),iC(e,r,t)}function ib(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function iS(e){var t,r,i=1;for(t=0;t<16;++t)i=Math.floor((r=e[t]+i+65535)/65536),e[t]=r-65536*i;e[0]+=i-1+37*(i-1)}function iT(e,t,r){for(var i,n=~(r-1),a=0;a<16;++a)i=n&(e[a]^t[a]),e[a]^=i,t[a]^=i}function i_(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;++t)r[t]=e[t];return r}function iI(e,t,r){for(var i=0;i<16;++i)e[i]=t[i]+r[i]}function iA(e,t,r){for(var i=0;i<16;++i)e[i]=t[i]-r[i]}function iB(e,t,r){var i,n,a=0,s=0,o=0,l=0,c=0,u=0,h=0,f=0,p=0,d=0,g=0,y=0,m=0,v=0,C=0,E=0,b=0,S=0,T=0,_=0,I=0,A=0,B=0,N=0,w=0,L=0,k=0,R=0,D=0,U=0,O=0,P=r[0],x=r[1],V=r[2],K=r[3],M=r[4],F=r[5],j=r[6],H=r[7],q=r[8],G=r[9],z=r[10],Q=r[11],$=r[12],W=r[13],Y=r[14],X=r[15];a+=(i=t[0])*P,s+=i*x,o+=i*V,l+=i*K,c+=i*M,u+=i*F,h+=i*j,f+=i*H,p+=i*q,d+=i*G,g+=i*z,y+=i*Q,m+=i*$,v+=i*W,C+=i*Y,E+=i*X,s+=(i=t[1])*P,o+=i*x,l+=i*V,c+=i*K,u+=i*M,h+=i*F,f+=i*j,p+=i*H,d+=i*q,g+=i*G,y+=i*z,m+=i*Q,v+=i*$,C+=i*W,E+=i*Y,b+=i*X,o+=(i=t[2])*P,l+=i*x,c+=i*V,u+=i*K,h+=i*M,f+=i*F,p+=i*j,d+=i*H,g+=i*q,y+=i*G,m+=i*z,v+=i*Q,C+=i*$,E+=i*W,b+=i*Y,S+=i*X,l+=(i=t[3])*P,c+=i*x,u+=i*V,h+=i*K,f+=i*M,p+=i*F,d+=i*j,g+=i*H,y+=i*q,m+=i*G,v+=i*z,C+=i*Q,E+=i*$,b+=i*W,S+=i*Y,T+=i*X,c+=(i=t[4])*P,u+=i*x,h+=i*V,f+=i*K,p+=i*M,d+=i*F,g+=i*j,y+=i*H,m+=i*q,v+=i*G,C+=i*z,E+=i*Q,b+=i*$,S+=i*W,T+=i*Y,_+=i*X,u+=(i=t[5])*P,h+=i*x,f+=i*V,p+=i*K,d+=i*M,g+=i*F,y+=i*j,m+=i*H,v+=i*q,C+=i*G,E+=i*z,b+=i*Q,S+=i*$,T+=i*W,_+=i*Y,I+=i*X,h+=(i=t[6])*P,f+=i*x,p+=i*V,d+=i*K,g+=i*M,y+=i*F,m+=i*j,v+=i*H,C+=i*q,E+=i*G,b+=i*z,S+=i*Q,T+=i*$,_+=i*W,I+=i*Y,A+=i*X,f+=(i=t[7])*P,p+=i*x,d+=i*V,g+=i*K,y+=i*M,m+=i*F,v+=i*j,C+=i*H,E+=i*q,b+=i*G,S+=i*z,T+=i*Q,_+=i*$,I+=i*W,A+=i*Y,B+=i*X,p+=(i=t[8])*P,d+=i*x,g+=i*V,y+=i*K,m+=i*M,v+=i*F,C+=i*j,E+=i*H,b+=i*q,S+=i*G,T+=i*z,_+=i*Q,I+=i*$,A+=i*W,B+=i*Y,N+=i*X,d+=(i=t[9])*P,g+=i*x,y+=i*V,m+=i*K,v+=i*M,C+=i*F,E+=i*j,b+=i*H,S+=i*q,T+=i*G,_+=i*z,I+=i*Q,A+=i*$,B+=i*W,N+=i*Y,w+=i*X,g+=(i=t[10])*P,y+=i*x,m+=i*V,v+=i*K,C+=i*M,E+=i*F,b+=i*j,S+=i*H,T+=i*q,_+=i*G,I+=i*z,A+=i*Q,B+=i*$,N+=i*W,w+=i*Y,L+=i*X,y+=(i=t[11])*P,m+=i*x,v+=i*V,C+=i*K,E+=i*M,b+=i*F,S+=i*j,T+=i*H,_+=i*q,I+=i*G,A+=i*z,B+=i*Q,N+=i*$,w+=i*W,L+=i*Y,k+=i*X,m+=(i=t[12])*P,v+=i*x,C+=i*V,E+=i*K,b+=i*M,S+=i*F,T+=i*j,_+=i*H,I+=i*q,A+=i*G,B+=i*z,N+=i*Q,w+=i*$,L+=i*W,k+=i*Y,R+=i*X,v+=(i=t[13])*P,C+=i*x,E+=i*V,b+=i*K,S+=i*M,T+=i*F,_+=i*j,I+=i*H,A+=i*q,B+=i*G,N+=i*z,w+=i*Q,L+=i*$,k+=i*W,R+=i*Y,D+=i*X,C+=(i=t[14])*P,E+=i*x,b+=i*V,S+=i*K,T+=i*M,_+=i*F,I+=i*j,A+=i*H,B+=i*q,N+=i*G,w+=i*z,L+=i*Q,k+=i*$,R+=i*W,D+=i*Y,U+=i*X,E+=(i=t[15])*P,b+=i*x,S+=i*V,T+=i*K,_+=i*M,I+=i*F,A+=i*j,B+=i*H,N+=i*q,w+=i*G,L+=i*z,k+=i*Q,R+=i*$,D+=i*W,U+=i*Y,O+=i*X,a+=38*b,s+=38*S,o+=38*T,l+=38*_,c+=38*I,u+=38*A,h+=38*B,f+=38*N,p+=38*w,d+=38*L,g+=38*k,y+=38*R,m+=38*D,v+=38*U,C+=38*O,n=Math.floor((i=a+// t15 left as is
// first car
(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=C+n+65535)/65536),C=i-65536*n,n=Math.floor((i=E+n+65535)/65536),E=i-65536*n,a+=n-1+37*(n-1),n=Math.floor((i=a+// second car
(n=1)+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=o+n+65535)/65536),o=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,n=Math.floor((i=C+n+65535)/65536),C=i-65536*n,n=Math.floor((i=E+n+65535)/65536),E=i-65536*n,a+=n-1+37*(n-1),e[0]=a,e[1]=s,e[2]=o,e[3]=l,e[4]=c,e[5]=u,e[6]=h,e[7]=f,e[8]=p,e[9]=d,e[10]=g,e[11]=y,e[12]=m,e[13]=v,e[14]=C,e[15]=E}var _=b("hnKIb");_.kem=_.kem||{};var iN=_.jsbn.BigInteger;/**
 * Creates a KDF1 or KDF2 API object.
 *
 * @param md the hash API to use.
 * @param counterStart the starting index for the counter.
 * @param digestLength the digest length to use.
 *
 * @return the KDF API object.
 */function iw(e,t,r,i){/**
   * Generate a key of the specified length.
   *
   * @param x the binary-encoded byte string to generate a key from.
   * @param length the number of bytes to generate (the size of the key).
   *
   * @return the key as a binary-encoded string.
   */e.generate=function(e,n){for(var a=new _.util.ByteBuffer,s=Math.ceil(n/i)+r,o=new _.util.ByteBuffer,l=r;l<s;++l){// I2OSP(i, 4): convert counter to an octet string of 4 octets
o.putInt32(l),// digest 'x' and the counter and add the result to the key
t.start(),t.update(e+o.getBytes());var c=t.digest();a.putBytes(c.getBytes(i))}return(// truncate to the correct key length
a.truncate(a.length()-n),a.getBytes())}}/**
 * The API for the RSA Key Encapsulation Mechanism (RSA-KEM) from ISO 18033-2.
 */_.kem.rsa={},/**
 * Creates an RSA KEM API object for generating a secret asymmetric key.
 *
 * The symmetric key may be generated via a call to 'encrypt', which will
 * produce a ciphertext to be transmitted to the recipient and a key to be
 * kept secret. The ciphertext is a parameter to be passed to 'decrypt' which
 * will produce the same secret key for the recipient to use to decrypt a
 * message that was encrypted with the secret key.
 *
 * @param kdf the KDF API to use (eg: new forge.kem.kdf1()).
 * @param options the options to use.
 *          [prng] a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync".
 */_.kem.rsa.create=function(e,t){var r=(t=t||{}).prng||_.random,i={};return(/**
   * Generates a secret key and its encapsulation.
   *
   * @param publicKey the RSA public key to encrypt with.
   * @param keyLength the length, in bytes, of the secret key to generate.
   *
   * @return an object with:
   *   encapsulation: the ciphertext for generating the secret key, as a
   *     binary-encoded string of bytes.
   *   key: the secret key to use for encrypting a message.
   */i.encrypt=function(t,i){// generate a random r where 1 < r < n
var n,a=Math.ceil(t.n.bitLength()/8);do n=new iN(_.util.bytesToHex(r.getBytesSync(a)),16).mod(t.n);while(0>=n.compareTo(iN.ONE))var s=a-// prepend r with zeros
(n=_.util.hexToBytes(n.toString(16))).length;return s>0&&(n=_.util.fillString("\x00",s)+n),{encapsulation:t.encrypt(n,"NONE"),key:e.generate(n,i)}},/**
   * Decrypts an encapsulated secret key.
   *
   * @param privateKey the RSA private key to decrypt with.
   * @param encapsulation the ciphertext for generating the secret key, as
   *          a binary-encoded string of bytes.
   * @param keyLength the length, in bytes, of the secret key to generate.
   *
   * @return the secret key as a binary-encoded string of bytes.
   */i.decrypt=function(t,r,i){// decrypt the encapsulation and generate the secret key
var n=t.decrypt(r,"NONE");return e.generate(n,i)},i)},// TODO: add forge.kem.kdf.create('KDF1', {md: ..., ...}) API?
/**
 * Creates a key derivation API object that implements KDF1 per ISO 18033-2.
 *
 * @param md the hash API to use.
 * @param [digestLength] an optional digest length that must be positive and
 *          less than or equal to md.digestLength.
 *
 * @return a KDF1 API object.
 */_.kem.kdf1=function(e,t){iw(this,e,0,t||e.digestLength)},/**
 * Creates a key derivation API object that implements KDF2 per ISO 18033-2.
 *
 * @param md the hash API to use.
 * @param [digestLength] an optional digest length that must be positive and
 *          less than or equal to md.digestLength.
 *
 * @return a KDF2 API object.
 */_.kem.kdf2=function(e,t){iw(this,e,1,t||e.digestLength)};var _=b("hnKIb");_.log=_.log||{},/**
 * Application logging system.
 *
 * Each logger level available as it's own function of the form:
 *   forge.log.level(category, args...)
 * The category is an arbitrary string, and the args are the same as
 * Firebug's console.log API. By default the call will be output as:
 *   'LEVEL [category] <args[0]>, args[1], ...'
 * This enables proper % formatting via the first argument.
 * Each category is enabled by default but can be enabled or disabled with
 * the setCategoryEnabled() function.
 */// list of known levels
_.log.levels=["none","error","warning","info","debug","verbose","max"];// info on the levels indexed by name:
//   index: level index
//   name: uppercased display name
var iL={},ik=[],iR=null;// logger flags
/**
 * Lock the level at the current value. Used in cases where user config may
 * set the level such that only critical messages are seen but more verbose
 * messages are needed for debugging or other purposes.
 */_.log.LEVEL_LOCKED=2,/**
 * Always call log function. By default, the logging system will check the
 * message level against logger.level before calling the log function. This
 * flag allows the function to do its own check.
 */_.log.NO_LEVEL_CHECK=4,/**
 * Perform message interpolation with the passed arguments. "%" style
 * fields in log messages will be replaced by arguments as needed. Some
 * loggers, such as Firebug, may do this automatically. The original log
 * message will be available as 'message' and the interpolated version will
 * be available as 'fullMessage'.
 */_.log.INTERPOLATE=8;// setup each log level
for(var iD=0;iD<_.log.levels.length;++iD){var iU=_.log.levels[iD];iL[iU]={index:iD,name:iU.toUpperCase()}}/**
 * Message logger. Will dispatch a message to registered loggers as needed.
 *
 * @param message message object
 */_.log.logMessage=function(e){for(var t=iL[e.level].index,r=0;r<ik.length;++r){var i=ik[r];i.flags&_.log.NO_LEVEL_CHECK?i.f(e):t<=iL[i.level].index&&i.f(i,e)}},/**
 * Sets the 'standard' key on a message object to:
 * "LEVEL [category] " + message
 *
 * @param message a message log object
 */_.log.prepareStandard=function(e){"standard"in e||(e.standard=iL[e.level].name+//' ' + +message.timestamp +
" ["+e.category+"] "+e.message)},/**
 * Sets the 'full' key on a message object to the original message
 * interpolated via % formatting with the message arguments.
 *
 * @param message a message log object.
 */_.log.prepareFull=function(e){if(!("full"in e)){// copy args and insert message at the front
var t=[e.message];t=t.concat([]),// format the message
e.full=_.util.format.apply(this,t)}},/**
 * Applies both preparseStandard() and prepareFull() to a message object and
 * store result in 'standardFull'.
 *
 * @param message a message log object.
 */_.log.prepareStandardFull=function(e){"standardFull"in e||(// FIXME implement 'standardFull' logging
_.log.prepareStandard(e),e.standardFull=e.standard)};for(var iO=["error","warning","info","debug","verbose"],iD=0;iD<iO.length;++iD)!function(e){// create function for this level
_.log[e]=function(t,r/*, args...*/){// convert arguments to real array, remove category and message
var i=Array.prototype.slice.call(arguments).slice(2),n={timestamp:new Date,level:e,category:t,message:r,arguments:i};// process this message
_.log.logMessage(n)}}(iO[iD]);// setup the console logger if possible, else create fake console.log
if(/**
 * Creates a new logger with specified custom logging function.
 *
 * The logging function has a signature of:
 *   function(logger, message)
 * logger: current logger
 * message: object:
 *   level: level id
 *   category: category
 *   message: string message
 *   arguments: Array of extra arguments
 *   fullMessage: interpolated message and arguments if INTERPOLATE flag set
 *
 * @param logFunction a logging function which takes a log message object
 *          as a parameter.
 *
 * @return a logger object.
 */_.log.makeLogger=function(e){var t={flags:0,f:e};return _.log.setLevel(t,"none"),t},/**
 * Sets the current log level on a logger.
 *
 * @param logger the target logger.
 * @param level the new maximum log level as a string.
 *
 * @return true if set, false if not.
 */_.log.setLevel=function(e,t){var r=!1;if(e&&!(e.flags&_.log.LEVEL_LOCKED)){for(var i=0;i<_.log.levels.length;++i)if(t==_.log.levels[i]){// set level
e.level=t,r=!0;break}}return r},/**
 * Locks the log level at its current value.
 *
 * @param logger the target logger.
 * @param lock boolean lock value, default to true.
 */_.log.lock=function(e,t){void 0===t||t?e.flags|=_.log.LEVEL_LOCKED:e.flags&=~_.log.LEVEL_LOCKED},/**
 * Adds a logger.
 *
 * @param logger the logger object.
 */_.log.addLogger=function(e){ik.push(e)},"undefined"!=typeof console&&"log"in console){if(console.error&&console.warn&&console.info&&console.debug){// looks like Firebug-style logging is available
// level handlers map
var iP={error:console.error,warning:console.warn,info:console.info,debug:console.debug,verbose:console.debug},ix=function(e,t){_.log.prepareStandard(t);var r=iP[t.level],i=[t.standard];i=i.concat(t.arguments.slice()),// apply to low-level console function
r.apply(console,i)};f=_.log.makeLogger(ix)}else{// only appear to have basic console.log
var ix=function(e,t){_.log.prepareStandardFull(t),console.log(t.standardFull)};f=_.log.makeLogger(ix)}_.log.setLevel(f,"debug"),_.log.addLogger(f),iR=f}else // browsers that do not have console logging
console={log:function(){}};/*
 * Check for logging control query vars in current URL.
 *
 * console.level=<level-name>
 * Set's the console log level by name.  Useful to override defaults and
 * allow more verbose logging before a user config is loaded.
 *
 * console.lock=<true|false>
 * Lock the console log level at whatever level it is set at.  This is run
 * after console.level is processed.  Useful to force a level of verbosity
 * that could otherwise be limited by a user config.
 */if(null!==iR&&"undefined"!=typeof window&&window.location){var iV=new URL(window.location.href).searchParams;iV.has("console.level")&&_.log.setLevel(iR,iV.get("console.level").slice(-1)[0]),iV.has("console.lock")&&"true"==iV.get("console.lock").slice(-1)[0]&&_.log.lock(iR)}// provide public access to console logger
_.log.consoleLogger=iR,b("df6Hw");var _=b("hnKIb"),iK=_.asn1,iM=_.pkcs7=_.pkcs7||{};/**
 * Convert an attribute object to an ASN.1 Attribute.
 *
 * @param attr the attribute object.
 *
 * @return the ASN.1 Attribute.
 */function iF(e){var t;// TODO: generalize to support more attributes
if(e.type===_.pki.oids.contentType)t=iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.value).getBytes());else if(e.type===_.pki.oids.messageDigest)t=iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,e.value.bytes());else if(e.type===_.pki.oids.signingTime){/* Note per RFC 2985: Dates between 1 January 1950 and 31 December 2049
      (inclusive) MUST be encoded as UTCTime. Any dates with year values
      before 1950 or after 2049 MUST be encoded as GeneralizedTime. [Further,]
      UTCTime values MUST be expressed in Greenwich Mean Time (Zulu) and MUST
      include seconds (i.e., times are YYMMDDHHMMSSZ), even where the
      number of seconds is zero.  Midnight (GMT) must be represented as
      "YYMMDD000000Z". */// TODO: make these module-level constants
var r=new Date("1950-01-01T00:00:00Z"),i=new Date("2050-01-01T00:00:00Z"),n=e.value;if("string"==typeof n){// try to parse date
var a=Date.parse(n);n=isNaN(a)?13===n.length?iK.utcTimeToDate(n):iK.generalizedTimeToDate(n):new Date(a)}t=n>=r&&n<i?iK.create(iK.Class.UNIVERSAL,iK.Type.UTCTIME,!1,iK.dateToUtcTime(n)):iK.create(iK.Class.UNIVERSAL,iK.Type.GENERALIZEDTIME,!1,iK.dateToGeneralizedTime(n))}// TODO: expose as common API call
// create a RelativeDistinguishedName set
// each value in the set is an AttributeTypeAndValue first
// containing the type (an OID) and second the value
return iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// AttributeType
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.type).getBytes()),iK.create(iK.Class.UNIVERSAL,iK.Type.SET,!0,[// AttributeValue
t])])}/**
 * Reads the "common part" of an PKCS#7 content block (in ASN.1 format)
 *
 * This function reads the "common part" of the PKCS#7 content blocks
 * EncryptedData and EnvelopedData, i.e. version number and symmetrically
 * encrypted content block.
 *
 * The result of the ASN.1 validate and capture process is returned
 * to allow the caller to extract further data, e.g. the list of recipients
 * in case of a EnvelopedData object.
 *
 * @param msg the PKCS#7 object to read the data to.
 * @param obj the ASN.1 representation of the content block.
 * @param validator the ASN.1 structure validator object to use.
 *
 * @return the value map captured by validator object.
 */function ij(e,t,r){var i={};if(!iK.validate(t,r,i,[])){var n=Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");throw n.errors=n,n}if(iK.derToOid(i.contentType)!==_.pki.oids.data)throw Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");if(i.encryptedContent){var a="";if(_.util.isArray(i.encryptedContent))for(var s=0;s<i.encryptedContent.length;++s){if(i.encryptedContent[s].type!==iK.Type.OCTETSTRING)throw Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");a+=i.encryptedContent[s].value}else a=i.encryptedContent;e.encryptedContent={algorithm:iK.derToOid(i.encAlgorithm),parameter:_.util.createBuffer(i.encParameter.value),content:_.util.createBuffer(a)}}if(i.content){var a="";if(_.util.isArray(i.content))for(var s=0;s<i.content.length;++s){if(i.content[s].type!==iK.Type.OCTETSTRING)throw Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");a+=i.content[s].value}else a=i.content;e.content=_.util.createBuffer(a)}return e.version=i.version.charCodeAt(0),e.rawCapture=i,i}/**
 * Decrypt the symmetrically encrypted content block of the PKCS#7 message.
 *
 * Decryption is skipped in case the PKCS#7 message object already has a
 * (decrypted) content attribute.  The algorithm, key and cipher parameters
 * (probably the iv) are taken from the encryptedContent attribute of the
 * message object.
 *
 * @param The PKCS#7 message object.
 */function iH(e){if(void 0===e.encryptedContent.key)throw Error("Symmetric key not available.");if(void 0===e.content){var t;switch(e.encryptedContent.algorithm){case _.pki.oids["aes128-CBC"]:case _.pki.oids["aes192-CBC"]:case _.pki.oids["aes256-CBC"]:t=_.aes.createDecryptionCipher(e.encryptedContent.key);break;case _.pki.oids.desCBC:case _.pki.oids["des-EDE3-CBC"]:t=_.des.createDecryptionCipher(e.encryptedContent.key);break;default:throw Error("Unsupported symmetric cipher, OID "+e.encryptedContent.algorithm)}if(t.start(e.encryptedContent.parameter),t.update(e.encryptedContent.content),!t.finish())throw Error("Symmetric decryption failed.");e.content=t.output}}/**
 * Converts a PKCS#7 message from PEM format.
 *
 * @param pem the PEM-formatted PKCS#7 message.
 *
 * @return the PKCS#7 message.
 */iM.messageFromPem=function(e){var t=_.pem.decode(e)[0];if("PKCS7"!==t.type){var r=Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");// convert DER to ASN.1 object
var i=iK.fromDer(t.body);return iM.messageFromAsn1(i)},/**
 * Converts a PKCS#7 message to PEM format.
 *
 * @param msg The PKCS#7 message object
 * @param maxline The maximum characters per line, defaults to 64.
 *
 * @return The PEM-formatted PKCS#7 message.
 */iM.messageToPem=function(e,t){// convert to ASN.1, then DER, then PEM-encode
var r={type:"PKCS7",body:iK.toDer(e.toAsn1()).getBytes()};return _.pem.encode(r,{maxline:t})},/**
 * Converts a PKCS#7 message from an ASN.1 object.
 *
 * @param obj the ASN.1 representation of a ContentInfo.
 *
 * @return the PKCS#7 message.
 */iM.messageFromAsn1=function(e){// validate root level ContentInfo and capture data
var t,r={},i=[];if(!iK.validate(e,iM.asn1.contentInfoValidator,r,i)){var n=Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");throw n.errors=i,n}var a=iK.derToOid(r.contentType);switch(a){case _.pki.oids.envelopedData:t=iM.createEnvelopedData();break;case _.pki.oids.encryptedData:t=iM.createEncryptedData();break;case _.pki.oids.signedData:t=iM.createSignedData();break;default:throw Error("Cannot read PKCS#7 message. ContentType with OID "+a+" is not (yet) supported.")}return t.fromAsn1(r.content.value[0]),t},iM.createSignedData=function(){var e=null;return e={type:_.pki.oids.signedData,version:1,certificates:[],crls:[],// TODO: add json-formatted signer stuff here?
signers:[],// populated during sign()
digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(t){if(// validate SignedData content block and capture data.
ij(e,t,iM.asn1.signedDataValidator),e.certificates=[],e.crls=[],e.digestAlgorithmIdentifiers=[],e.contentInfo=null,e.signerInfos=[],e.rawCapture.certificates)for(var r=e.rawCapture.certificates.value,i=0;i<r.length;++i)e.certificates.push(_.pki.certificateFromAsn1(r[i]));// TODO: parse crls
},toAsn1:function(){e.contentInfo||e.sign();for(var t=[],r=0;r<e.certificates.length;++r)t.push(_.pki.certificateToAsn1(e.certificates[r]));var i=[],n=iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,[iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Version
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,iK.integerToDer(e.version).getBytes()),// DigestAlgorithmIdentifiers
iK.create(iK.Class.UNIVERSAL,iK.Type.SET,!0,e.digestAlgorithmIdentifiers),// ContentInfo
e.contentInfo])]);// ContentInfo
return t.length>0&&n.value[0].value.push(iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,t)),i.length>0&&n.value[0].value.push(iK.create(iK.Class.CONTEXT_SPECIFIC,1,!0,i)),// SignerInfos
n.value[0].value.push(iK.create(iK.Class.UNIVERSAL,iK.Type.SET,!0,e.signerInfos)),iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// ContentType
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.type).getBytes()),// [0] SignedData
n])},/**
     * Add (another) entity to list of signers.
     *
     * Note: If authenticatedAttributes are provided, then, per RFC 2315,
     * they must include at least two attributes: content type and
     * message digest. The message digest attribute value will be
     * auto-calculated during signing and will be ignored if provided.
     *
     * Here's an example of providing these two attributes:
     *
     * forge.pkcs7.createSignedData();
     * p7.addSigner({
     *   issuer: cert.issuer.attributes,
     *   serialNumber: cert.serialNumber,
     *   key: privateKey,
     *   digestAlgorithm: forge.pki.oids.sha1,
     *   authenticatedAttributes: [{
     *     type: forge.pki.oids.contentType,
     *     value: forge.pki.oids.data
     *   }, {
     *     type: forge.pki.oids.messageDigest
     *   }]
     * });
     *
     * TODO: Support [subjectKeyIdentifier] as signer's ID.
     *
     * @param signer the signer information:
     *          key the signer's private key.
     *          [certificate] a certificate containing the public key
     *            associated with the signer's private key; use this option as
     *            an alternative to specifying signer.issuer and
     *            signer.serialNumber.
     *          [issuer] the issuer attributes (eg: cert.issuer.attributes).
     *          [serialNumber] the signer's certificate's serial number in
     *           hexadecimal (eg: cert.serialNumber).
     *          [digestAlgorithm] the message digest OID, as a string, to use
     *            (eg: forge.pki.oids.sha1).
     *          [authenticatedAttributes] an optional array of attributes
     *            to also sign along with the content.
     */addSigner:function(t){var r=t.issuer,i=t.serialNumber;if(t.certificate){var n=t.certificate;"string"==typeof n&&(n=_.pki.certificateFromPem(n)),r=n.issuer.attributes,i=n.serialNumber}var a=t.key;if(!a)throw Error("Could not add PKCS#7 signer; no private key specified.");"string"==typeof a&&(a=_.pki.privateKeyFromPem(a));// ensure OID known for digest algorithm
var s=t.digestAlgorithm||_.pki.oids.sha1;switch(s){case _.pki.oids.sha1:case _.pki.oids.sha256:case _.pki.oids.sha384:case _.pki.oids.sha512:case _.pki.oids.md5:break;default:throw Error("Could not add PKCS#7 signer; unknown message digest algorithm: "+s)}// if authenticatedAttributes is present, then the attributes
// must contain at least PKCS #9 content-type and message-digest
var o=t.authenticatedAttributes||[];if(o.length>0){for(var l=!1,c=!1,u=0;u<o.length;++u){var h=o[u];if(!l&&h.type===_.pki.oids.contentType){if(l=!0,c)break;continue}if(!c&&h.type===_.pki.oids.messageDigest){if(c=!0,l)break;continue}}if(!l||!c)throw Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")}e.signers.push({key:a,version:1,issuer:r,serialNumber:i,digestAlgorithm:s,signatureAlgorithm:_.pki.oids.rsaEncryption,signature:null,authenticatedAttributes:o,unauthenticatedAttributes:[]})},/**
     * Signs the content.
     * @param options Options to apply when signing:
     *    [detached] boolean. If signing should be done in detached mode. Defaults to false.
     */sign:function(t){// auto-generate content info
if(t=t||{},("object"!=typeof e.content||null===e.contentInfo)&&(// use Data ContentInfo
e.contentInfo=iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// ContentType
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(_.pki.oids.data).getBytes())]),"content"in e)){var r;e.content instanceof _.util.ByteBuffer?r=e.content.bytes():"string"==typeof e.content&&(r=_.util.encodeUtf8(e.content)),t.detached?e.detachedContent=iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,r):e.contentInfo.value.push(iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,[iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,r)]))}0!==e.signers.length&&// generate signerInfos
function(t){if(!(r=e.detachedContent?e.detachedContent:// Note: ContentInfo is a SEQUENCE with 2 values, second value is
// the content field and is optional for a ContentInfo but required here
// since signers are present
// get ContentInfo content
(r=e.contentInfo.value[1]).value[0]))throw Error("Could not sign PKCS#7 message; there is no content to sign.");// get ContentInfo content type
var r,i=iK.derToOid(e.contentInfo.value[0].value),n=iK.toDer(r);// digest content DER value bytes
for(var a in // skip identifier and length per RFC 2315 9.3
// skip identifier (1 byte)
n.getByte(),// read and discard length bytes
iK.getBerValueLength(n),n=n.getBytes(),t)t[a].start().update(n);for(var s=new Date,o=0;o<e.signers.length;++o){var l=e.signers[o];if(0===l.authenticatedAttributes.length)// if ContentInfo content type is not "Data", then
// authenticatedAttributes must be present per RFC 2315
{if(i!==_.pki.oids.data)throw Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")}else{// process authenticated attributes
// [0] IMPLICIT
l.authenticatedAttributesAsn1=iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,[]);for(var c=iK.create(iK.Class.UNIVERSAL,iK.Type.SET,!0,[]),u=0;u<l.authenticatedAttributes.length;++u){var h=l.authenticatedAttributes[u];h.type===_.pki.oids.messageDigest?h.value=t[l.digestAlgorithm].digest():h.type!==_.pki.oids.signingTime||h.value||(h.value=s),// convert to ASN.1 and push onto Attributes SET (for signing) and
// onto authenticatedAttributesAsn1 to complete SignedData ASN.1
// TODO: optimize away duplication
c.value.push(iF(h)),l.authenticatedAttributesAsn1.value.push(iF(h))}// DER-serialize and digest SET OF attributes only
n=iK.toDer(c).getBytes(),l.md.start().update(n)}// sign digest
l.signature=l.key.sign(l.md,"RSASSA-PKCS1-V1_5")}// add signer info
e.signerInfos=/**
 * Map an array of signer objects to ASN.1 objects.
 *
 * @param signers an array of signer objects.
 *
 * @return an array of ASN.1 SignerInfos.
 */function(e){for(var t=[],r=0;r<e.length;++r)t.push(/**
 * Converts a single signerInfo object to an ASN.1 object.
 *
 * @param obj the signerInfo object.
 *
 * @return the ASN.1 representation of a SignerInfo.
 */function(e){// SignerInfo
var t=iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// version
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,iK.integerToDer(e.version).getBytes()),// issuerAndSerialNumber
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// name
_.pki.distinguishedNameToAsn1({attributes:e.issuer}),// serial
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,_.util.hexToBytes(e.serialNumber))]),// digestAlgorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// algorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.digestAlgorithm).getBytes()),// parameters (null)
iK.create(iK.Class.UNIVERSAL,iK.Type.NULL,!1,"")])]);// unauthenticatedAttributes (OPTIONAL)
if(e.authenticatedAttributesAsn1&&t.value.push(e.authenticatedAttributesAsn1),// digestEncryptionAlgorithm
t.value.push(iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// algorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.signatureAlgorithm).getBytes()),// parameters (null)
iK.create(iK.Class.UNIVERSAL,iK.Type.NULL,!1,"")])),// encryptedDigest
t.value.push(iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,e.signature)),e.unauthenticatedAttributes.length>0){for(var r=iK.create(iK.Class.CONTEXT_SPECIFIC,1,!0,[]),i=0;i<e.unauthenticatedAttributes.length;++i){var n=e.unauthenticatedAttributes[i];r.values.push(iF(n))}t.value.push(r)}return t}(e[r]));return t}(e.signers)}(function(){for(var t={},r=0;r<e.signers.length;++r){var i=e.signers[r],n=i.digestAlgorithm;n in t||(t[n]=_.md[_.pki.oids[n]].create()),0===i.authenticatedAttributes.length?i.md=t[n]:// TODO: optimize to just copy message digest state if that
// feature is ever supported with message digests
i.md=_.md[_.pki.oids[n]].create()}for(var n in // add unique digest algorithm identifiers
e.digestAlgorithmIdentifiers=[],t)e.digestAlgorithmIdentifiers.push(iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// algorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(n).getBytes()),// parameters (null)
iK.create(iK.Class.UNIVERSAL,iK.Type.NULL,!1,"")]));return t}())},verify:function(){throw Error("PKCS#7 signature verification not yet implemented.")},/**
     * Add a certificate.
     *
     * @param cert the certificate to add.
     */addCertificate:function(t){"string"==typeof t&&(t=_.pki.certificateFromPem(t)),e.certificates.push(t)},/**
     * Add a certificate revokation list.
     *
     * @param crl the certificate revokation list to add.
     */addCertificateRevokationList:function(e){throw Error("PKCS#7 CRL support not yet implemented.")}}},/**
 * Creates an empty PKCS#7 message of type EncryptedData.
 *
 * @return the message.
 */iM.createEncryptedData=function(){var e=null;return e={type:_.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:_.pki.oids["aes256-CBC"]},/**
     * Reads an EncryptedData content block (in ASN.1 format)
     *
     * @param obj The ASN.1 representation of the EncryptedData content block
     */fromAsn1:function(t){// Validate EncryptedData content block and capture data.
ij(e,t,iM.asn1.encryptedDataValidator)},/**
     * Decrypt encrypted content
     *
     * @param key The (symmetric) key as a byte buffer
     */decrypt:function(t){void 0!==t&&(e.encryptedContent.key=t),iH(e)}}},/**
 * Creates an empty PKCS#7 message of type EnvelopedData.
 *
 * @return the message.
 */iM.createEnvelopedData=function(){var e=null;return e={type:_.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:_.pki.oids["aes256-CBC"]},/**
     * Reads an EnvelopedData content block (in ASN.1 format)
     *
     * @param obj the ASN.1 representation of the EnvelopedData content block.
     */fromAsn1:function(t){// validate EnvelopedData content block and capture data
var r=ij(e,t,iM.asn1.envelopedDataValidator);e.recipients=/**
 * Map a set of RecipientInfo ASN.1 objects to recipient objects.
 *
 * @param infos an array of ASN.1 representations RecipientInfo (i.e. SET OF).
 *
 * @return an array of recipient objects.
 */function(e){for(var t=[],r=0;r<e.length;++r)t.push(/**
 * Converts a single recipient from an ASN.1 object.
 *
 * @param obj the ASN.1 RecipientInfo.
 *
 * @return the recipient object.
 */function(e){// validate EnvelopedData content block and capture data
var t={},r=[];if(!iK.validate(e,iM.asn1.recipientInfoValidator,t,r)){var i=Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");throw i.errors=r,i}return{version:t.version.charCodeAt(0),issuer:_.pki.RDNAttributesAsArray(t.issuer),serialNumber:_.util.createBuffer(t.serial).toHex(),encryptedContent:{algorithm:iK.derToOid(t.encAlgorithm),parameter:t.encParameter?t.encParameter.value:void 0,content:t.encKey}}}(e[r]));return t}(r.recipientInfos.value)},toAsn1:function(){var t;// ContentInfo
return iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// ContentType
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(e.type).getBytes()),// [0] EnvelopedData
iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,[iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Version
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,iK.integerToDer(e.version).getBytes()),// RecipientInfos
iK.create(iK.Class.UNIVERSAL,iK.Type.SET,!0,/**
 * Map an array of recipient objects to ASN.1 RecipientInfo objects.
 *
 * @param recipients an array of recipientInfo objects.
 *
 * @return an array of ASN.1 RecipientInfos.
 */function(e){for(var t,r=[],i=0;i<e.length;++i)r.push((t=e[i],iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Version
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,iK.integerToDer(t.version).getBytes()),// IssuerAndSerialNumber
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Name
_.pki.distinguishedNameToAsn1({attributes:t.issuer}),// Serial
iK.create(iK.Class.UNIVERSAL,iK.Type.INTEGER,!1,_.util.hexToBytes(t.serialNumber))]),// KeyEncryptionAlgorithmIdentifier
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Algorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(t.encryptedContent.algorithm).getBytes()),// Parameter, force NULL, only RSA supported for now.
iK.create(iK.Class.UNIVERSAL,iK.Type.NULL,!1,"")]),// EncryptedKey
iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,t.encryptedContent.content)])));return r}(e.recipients)),// EncryptedContentInfo
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,(t=e.encryptedContent,[// ContentType, always Data for the moment
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(_.pki.oids.data).getBytes()),// ContentEncryptionAlgorithmIdentifier
iK.create(iK.Class.UNIVERSAL,iK.Type.SEQUENCE,!0,[// Algorithm
iK.create(iK.Class.UNIVERSAL,iK.Type.OID,!1,iK.oidToDer(t.algorithm).getBytes()),// Parameters (IV)
t.parameter?iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,t.parameter.getBytes()):void 0]),// [0] EncryptedContent
iK.create(iK.Class.CONTEXT_SPECIFIC,0,!0,[iK.create(iK.Class.UNIVERSAL,iK.Type.OCTETSTRING,!1,t.content.getBytes())])]))])])])},/**
     * Find recipient by X.509 certificate's issuer.
     *
     * @param cert the certificate with the issuer to look for.
     *
     * @return the recipient object.
     */findRecipient:function(t){for(var r=t.issuer.attributes,i=0;i<e.recipients.length;++i){var n=e.recipients[i],a=n.issuer;if(n.serialNumber===t.serialNumber&&a.length===r.length){for(var s=!0,o=0;o<r.length;++o)if(a[o].type!==r[o].type||a[o].value!==r[o].value){s=!1;break}if(s)return n}}return null},/**
     * Decrypt enveloped content
     *
     * @param recipient The recipient object related to the private key
     * @param privKey The (RSA) private key object
     */decrypt:function(t,r){if(void 0===e.encryptedContent.key&&void 0!==t&&void 0!==r)switch(t.encryptedContent.algorithm){case _.pki.oids.rsaEncryption:case _.pki.oids.desCBC:var i=r.decrypt(t.encryptedContent.content);e.encryptedContent.key=_.util.createBuffer(i);break;default:throw Error("Unsupported asymmetric cipher, OID "+t.encryptedContent.algorithm)}iH(e)},/**
     * Add (another) entity to list of recipients.
     *
     * @param cert The certificate of the entity to add.
     */addRecipient:function(t){e.recipients.push({version:0,issuer:t.issuer.attributes,serialNumber:t.serialNumber,encryptedContent:{// We simply assume rsaEncryption here, since forge.pki only
// supports RSA so far.  If the PKI module supports other
// ciphers one day, we need to modify this one as well.
algorithm:_.pki.oids.rsaEncryption,key:t.publicKey}})},/**
     * Encrypt enveloped content.
     *
     * This function supports two optional arguments, cipher and key, which
     * can be used to influence symmetric encryption.  Unless cipher is
     * provided, the cipher specified in encryptedContent.algorithm is used
     * (defaults to AES-256-CBC).  If no key is provided, encryptedContent.key
     * is (re-)used.  If that one's not set, a random key will be generated
     * automatically.
     *
     * @param [key] The key to be used for symmetric encryption.
     * @param [cipher] The OID of the symmetric cipher to use.
     */encrypt:function(t,r){// Part 1: Symmetric encryption
if(void 0===e.encryptedContent.content){switch(r=r||e.encryptedContent.algorithm,t=t||e.encryptedContent.key,r){case _.pki.oids["aes128-CBC"]:i=16,n=16,a=_.aes.createEncryptionCipher;break;case _.pki.oids["aes192-CBC"]:i=24,n=16,a=_.aes.createEncryptionCipher;break;case _.pki.oids["aes256-CBC"]:i=32,n=16,a=_.aes.createEncryptionCipher;break;case _.pki.oids["des-EDE3-CBC"]:i=24,n=8,a=_.des.createEncryptionCipher;break;default:throw Error("Unsupported symmetric cipher, OID "+r)}if(void 0===t)t=_.util.createBuffer(_.random.getBytes(i));else if(t.length()!=i)throw Error("Symmetric key has wrong length; got "+t.length()+" bytes, expected "+i+".");// Keep a copy of the key & IV in the object, so the caller can
// use it for whatever reason.
e.encryptedContent.algorithm=r,e.encryptedContent.key=t,e.encryptedContent.parameter=_.util.createBuffer(_.random.getBytes(n));var i,n,a,s=a(t);// The finish function does PKCS#7 padding by default, therefore
// no action required by us.
if(s.start(e.encryptedContent.parameter.copy()),s.update(e.content),!s.finish())throw Error("Symmetric encryption failed.");e.encryptedContent.content=s.output}// Part 2: asymmetric encryption for each recipient
for(var o=0;o<e.recipients.length;++o){var l=e.recipients[o];// Nothing to do, encryption already done.
if(void 0===l.encryptedContent.content){if(l.encryptedContent.algorithm===_.pki.oids.rsaEncryption)l.encryptedContent.content=l.encryptedContent.key.encrypt(e.encryptedContent.key.data);else throw Error("Unsupported asymmetric cipher, OID "+l.encryptedContent.algorithm)}}}}};var _=b("hnKIb"),iq=_.ssh=_.ssh||{};/**
 * Adds len(val) then val to a buffer.
 *
 * @param buffer the buffer to add to.
 * @param val a big integer.
 */function iG(e,t){var r=t.toString(16);r[0]>="8"&&(r="00"+r);var i=_.util.hexToBytes(r);e.putInt32(i.length),e.putBytes(i)}/**
 * Adds len(val) then val to a buffer.
 *
 * @param buffer the buffer to add to.
 * @param val a string.
 */function iz(e,t){e.putInt32(t.length),e.putString(t)}/**
 * Hashes the arguments into one value using SHA-1.
 *
 * @return the sha1 hash of the provided arguments.
 */function iQ(){for(var e=_.md.sha1.create(),t=arguments.length,r=0;r<t;++r)e.update(arguments[r]);return e.digest()}/**
 * Encodes (and optionally encrypts) a private RSA key as a Putty PPK file.
 *
 * @param privateKey the key.
 * @param passphrase a passphrase to protect the key (falsy for no encryption).
 * @param comment a comment to include in the key file.
 *
 * @return the PPK file as a string.
 */iq.privateKeyToPutty=function(e,t,r){var i,n="ssh-rsa",a=""===(t=t||"")?"none":"aes256-cbc",s="PuTTY-User-Key-File-2: "+n+"\r\n";s+="Encryption: "+a+"\r\nComment: "+(r=r||"")+"\r\n";// public key into buffer for ppk
var o=_.util.createBuffer();iz(o,n),iG(o,e.e),iG(o,e.n);// write public key
var l=_.util.encode64(o.bytes(),64),c=Math.floor(l.length/66)+1;s+="Public-Lines: "+c+"\r\n"+l;// private key into a buffer
var u=_.util.createBuffer();if(iG(u,e.d),iG(u,e.p),iG(u,e.q),iG(u,e.qInv),t){// encrypt RSA key using passphrase
var h=u.length()+16-1;h-=h%16;// pad private key with sha1-d data -- needs to be a multiple of 16
var f=iQ(u.bytes());f.truncate(f.length()-h+u.length()),u.putBuffer(f);var p=_.util.createBuffer();p.putBuffer(iQ("\x00\x00\x00\x00",t)),p.putBuffer(iQ("\x00\x00\x00\x01",t));// encrypt some bytes using CBC mode
// key is 40 bytes, so truncate *by* 8 bytes
var d=_.aes.createEncryptionCipher(p.truncate(8),"CBC");d.start(_.util.createBuffer().fillWithByte(0,16)),d.update(u.copy()),d.finish();var g=d.output;// Note: this appears to differ from Putty -- is forge wrong, or putty?
// due to padding we finish as an exact multiple of 16
g.truncate(16),i=_.util.encode64(g.bytes(),64)}else i=_.util.encode64(u.bytes(),64);s+="\r\nPrivate-Lines: "+// output private key
(c=Math.floor(i.length/66)+1)+"\r\n"+i;// MAC
var y=iQ("putty-private-key-file-mac-key",t),m=_.util.createBuffer();iz(m,n),iz(m,a),iz(m,r),m.putInt32(o.length()),m.putBuffer(o),m.putInt32(u.length()),m.putBuffer(u);var v=_.hmac.create();return v.start("sha1",y),v.update(m.bytes()),s+="\r\nPrivate-MAC: "+v.digest().toHex()+"\r\n"},/**
 * Encodes a public RSA key as an OpenSSH file.
 *
 * @param key the key.
 * @param comment a comment.
 *
 * @return the public key in OpenSSH format.
 */iq.publicKeyToOpenSSH=function(e,t){var r="ssh-rsa";t=t||"";var i=_.util.createBuffer();return iz(i,r),iG(i,e.e),iG(i,e.n),r+" "+_.util.encode64(i.bytes())+" "+t},/**
 * Encodes a private RSA key as an OpenSSH file.
 *
 * @param key the key.
 * @param passphrase a passphrase to protect the key (falsy for no encryption).
 *
 * @return the public key in OpenSSH format.
 */iq.privateKeyToOpenSSH=function(e,t){return t?_.pki.encryptRsaPrivateKey(e,t,{legacy:!0,algorithm:"aes128"}):_.pki.privateKeyToPem(e)},/**
 * Gets the SSH fingerprint for the given public key.
 *
 * @param options the options to use.
 *          [md] the message digest object to use (defaults to forge.md.md5).
 *          [encoding] an alternative output encoding, such as 'hex'
 *            (defaults to none, outputs a byte buffer).
 *          [delimiter] the delimiter to use between bytes for 'hex' encoded
 *            output, eg: ':' (defaults to none).
 *
 * @return the fingerprint as a byte buffer or other encoding based on options.
 */iq.getPublicKeyFingerprint=function(e,t){var r=(t=t||{}).md||_.md.md5.create(),i=_.util.createBuffer();iz(i,"ssh-rsa"),iG(i,e.e),iG(i,e.n),// hash public key bytes
r.start(),r.update(i.getBytes());var n=r.digest();if("hex"===t.encoding){var a=n.toHex();return t.delimiter?a.match(/.{2}/g).join(t.delimiter):a}if("binary"===t.encoding)return n.getBytes();if(t.encoding)throw Error('Unknown encoding "'+t.encoding+'".');return n};/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var i$={};v(i$,"popperGenerator",()=>ae),v(i$,"detectOverflow",()=>n1),v(i$,"createPopperBase",()=>at),v(i$,"createPopper",()=>ar),v(i$,"createPopperLite",()=>ai);var iW={};v(iW,"top",()=>iY),v(iW,"bottom",()=>iX),v(iW,"right",()=>iZ),v(iW,"left",()=>iJ),v(iW,"auto",()=>i1),v(iW,"basePlacements",()=>i0),v(iW,"start",()=>i2),v(iW,"end",()=>i6),v(iW,"clippingParents",()=>i5),v(iW,"viewport",()=>i3),v(iW,"popper",()=>i4),v(iW,"reference",()=>i8),v(iW,"variationPlacements",()=>i7),v(iW,"placements",()=>i9),v(iW,"beforeRead",()=>ne),v(iW,"read",()=>nt),v(iW,"afterRead",()=>nr),v(iW,"beforeMain",()=>ni),v(iW,"main",()=>nn),v(iW,"afterMain",()=>na),v(iW,"beforeWrite",()=>ns),v(iW,"write",()=>no),v(iW,"afterWrite",()=>nl),v(iW,"modifierPhases",()=>nc);var iY="top",iX="bottom",iZ="right",iJ="left",i1="auto",i0=[iY,iX,iZ,iJ],i2="start",i6="end",i5="clippingParents",i3="viewport",i4="popper",i8="reference",i7=/*#__PURE__*/i0.reduce(function(e,t){return e.concat([t+"-"+i2,t+"-"+i6])},[]),i9=/*#__PURE__*/[].concat(i0,[i1]).reduce(function(e,t){return e.concat([t,t+"-"+i2,t+"-"+i6])},[]),ne="beforeRead",nt="read",nr="afterRead",ni="beforeMain",nn="main",na="afterMain",ns="beforeWrite",no="write",nl="afterWrite",nc=[ne,nt,nr,ni,nn,na,ns,no,nl],nu={};function nh(e){return e?(e.nodeName||"").toLowerCase():null}function nf(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function np(e){var t=nf(e).Element;return e instanceof t||e instanceof Element}function nd(e){var t=nf(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ng(e){// IE 11 has no ShadowRoot
if("undefined"==typeof ShadowRoot)return!1;var t=nf(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}v(nu,"applyStyles",()=>ny),v(nu,"arrow",()=>nP),v(nu,"computeStyles",()=>nM),v(nu,"eventListeners",()=>nj),v(nu,"flip",()=>n0),v(nu,"hide",()=>n5),v(nu,"offset",()=>n3),v(nu,"popperOffsets",()=>n4),v(nu,"preventOverflow",()=>n8);var ny={name:"applyStyles",enabled:!0,phase:"write",fn:// and applies them to the HTMLElements such as popper and arrow
function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},i=t.attributes[e]||{},n=t.elements[e];nd(n)&&nh(n)&&(// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(n.style,r),Object.keys(i).forEach(function(e){var t=i[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],n=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});nd(i)&&nh(i)&&(Object.assign(i.style,a),Object.keys(n).forEach(function(e){i.removeAttribute(e)}))})}}// eslint-disable-next-line import/no-unused-modules
,requires:["computeStyles"]};function nm(e){return e.split("-")[0]}var nv=Math.max,nC=Math.min,nE=Math.round;function nb(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function nS(){return!/^((?!chrome|android).)*safari/i.test(nb())}function nT(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var i=e.getBoundingClientRect(),n=1,a=1;t&&nd(e)&&(n=e.offsetWidth>0&&nE(i.width)/e.offsetWidth||1,a=e.offsetHeight>0&&nE(i.height)/e.offsetHeight||1);var s=(np(e)?nf(e):window).visualViewport,o=!nS()&&r,l=(i.left+(o&&s?s.offsetLeft:0))/n,c=(i.top+(o&&s?s.offsetTop:0))/a,u=i.width/n,h=i.height/a;return{width:u,height:h,top:c,right:l+u,bottom:c+h,left:l,x:l,y:c}}function n_(e){var t=nT(e),r=e.offsetWidth,i=e.offsetHeight;// Use the clientRect sizes if it's not been transformed.
return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-i)&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function nI(e,t){var r=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t))return!0;// Give up, the result is false
if(r&&ng(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;// $FlowFixMe[prop-missing]: need a better way to handle this...
i=i.parentNode||i.host}while(i)}return!1}function nA(e){return nf(e).getComputedStyle(e)}function nB(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((np(e)?e.ownerDocument:e.document)||window.document).documentElement}function nN(e){return"html"===nh(e)?e:// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(ng(e)?e.host:null)||nB(e)// fallback
}function nw(e){return nd(e)&&"fixed"!==nA(e).position?e.offsetParent:null}// `.offsetParent` reports `null` for fixed elements, while absolute elements
function nL(e){for(var t=nf(e),r=nw(e);r&&["table","td","th"].indexOf(nh(r))>=0&&"static"===nA(r).position;)r=nw(r);return r&&("html"===nh(r)||"body"===nh(r)&&"static"===nA(r).position)?t:r||// return the containing block
function(e){var t=/firefox/i.test(nb());if(/Trident/i.test(nb())&&nd(e)&&"fixed"===nA(e).position)return null;var r=nN(e);for(ng(r)&&(r=r.host);nd(r)&&0>["html","body"].indexOf(nh(r));){var i=nA(r);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return r;r=r.parentNode}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
(e)||t}function nk(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function nR(e,t,r){return nv(e,nC(t,r))}function nD(){return{top:0,right:0,bottom:0,left:0}}function nU(e){return Object.assign({},nD(),e)}function nO(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}var nP={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,i=e.name,n=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,o=nm(r.placement),l=nk(o),c=[iJ,iZ].indexOf(o)>=0?"height":"width";if(a&&s){var u,h=nU("number"!=typeof(u="function"==typeof(u=n.padding)?u(Object.assign({},r.rects,{placement:r.placement})):u)?u:nO(u,i0)),f=n_(a),p="y"===l?iY:iJ,d="y"===l?iX:iZ,g=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],y=s[l]-r.rects.reference[l],m=nL(a),v=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,C=h[p],E=v-f[c]-h[d],b=v/2-f[c]/2+(g/2-y/2),S=nR(C,b,E);r.modifiersData[i]=((t={})[l]=S,t.centerOffset=S-b,t)}},effect:function(e){var t=e.state,r=e.options.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&nI(t.elements.popper,i)&&(t.elements.arrow=i)}// eslint-disable-next-line import/no-unused-modules
,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function nx(e){return e.split("-")[1]}var nV={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
function nK(e){var t,r,i,n,a,s,o,l=e.popper,c=e.popperRect,u=e.placement,h=e.variation,f=e.offsets,p=e.position,d=e.gpuAcceleration,g=e.adaptive,y=e.roundOffsets,m=e.isFixed,v=f.x,C=void 0===v?0:v,E=f.y,b=void 0===E?0:E,S="function"==typeof y?y({x:C,y:b}):{x:C,y:b};C=S.x,b=S.y;var T=f.hasOwnProperty("x"),_=f.hasOwnProperty("y"),I=iJ,A=iY,B=window;if(g){var N=nL(l),w="clientHeight",L="clientWidth";N===nf(l)&&"static"!==nA(N=nB(l)).position&&"absolute"===p&&(w="scrollHeight",L="scrollWidth"),(u===iY||(u===iJ||u===iZ)&&h===i6)&&(A=iX,b-=(m&&N===B&&B.visualViewport?B.visualViewport.height:N[w])-c.height,b*=d?1:-1),(u===iJ||(u===iY||u===iX)&&h===i6)&&(I=iZ,C-=(m&&N===B&&B.visualViewport?B.visualViewport.width:N[L])-c.width,C*=d?1:-1)}var k=Object.assign({position:p},g&&nV),R=!0===y?(t={x:C,y:b},r=nf(l),i=t.x,n=t.y,{x:nE(i*(a=r.devicePixelRatio||1))/a||0,y:nE(n*a)/a||0}):{x:C,y:b};return(C=R.x,b=R.y,d)?Object.assign({},k,((o={})[A]=_?"0":"",o[I]=T?"0":"",o.transform=1>=(B.devicePixelRatio||1)?"translate("+C+"px, "+b+"px)":"translate3d("+C+"px, "+b+"px, 0)",o)):Object.assign({},k,((s={})[A]=_?b+"px":"",s[I]=T?C+"px":"",s.transform="",s))}var nM={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,i=r.gpuAcceleration,n=r.adaptive,a=r.roundOffsets,s=void 0===a||a,o={placement:nm(t.placement),variation:nx(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===i||i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,nK(Object.assign({},o,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===n||n,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,nK(Object.assign({},o,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},nF={passive:!0},nj={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,i=e.options,n=i.scroll,a=void 0===n||n,s=i.resize,o=void 0===s||s,l=nf(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(e){e.addEventListener("scroll",r.update,nF)}),o&&l.addEventListener("resize",r.update,nF),function(){a&&c.forEach(function(e){e.removeEventListener("scroll",r.update,nF)}),o&&l.removeEventListener("resize",r.update,nF)}}// eslint-disable-next-line import/no-unused-modules
,data:{}},nH={left:"right",right:"left",bottom:"top",top:"bottom"};function nq(e){return e.replace(/left|right|bottom|top/g,function(e){return nH[e]})}var nG={start:"end",end:"start"};function nz(e){return e.replace(/start|end/g,function(e){return nG[e]})}function nQ(e){var t=nf(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function n$(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return nT(nB(e)).left+nQ(e).scrollLeft}function nW(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=nA(e),r=t.overflow,i=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+i)}function nY(e,t){void 0===t&&(t=[]);var r,i=function e(t){return["html","body","#document"].indexOf(nh(t))>=0?t.ownerDocument.body:nd(t)&&nW(t)?t:e(nN(t))}(e),n=i===(null==(r=e.ownerDocument)?void 0:r.body),a=nf(i),s=n?[a].concat(a.visualViewport||[],nW(i)?i:[]):i,o=t.concat(s);return n?o:o.concat(nY(nN(s)))}function nX(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nZ(e,t,r){var i,n,a,s,o,l,c,u,h,f;return t===i3?nX(function(e,t){var r=nf(e),i=nB(e),n=r.visualViewport,a=i.clientWidth,s=i.clientHeight,o=0,l=0;if(n){a=n.width,s=n.height;var c=nS();(c||!c&&"fixed"===t)&&(o=n.offsetLeft,l=n.offsetTop)}return{width:a,height:s,x:o+n$(e),y:l}}(e,r)):np(t)?((i=nT(t,!1,"fixed"===r)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):nX((n=nB(e),s=nB(n),o=nQ(n),l=null==(a=n.ownerDocument)?void 0:a.body,c=nv(s.scrollWidth,s.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=nv(s.scrollHeight,s.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),h=-o.scrollLeft+n$(n),f=-o.scrollTop,"rtl"===nA(l||s).direction&&(h+=nv(s.clientWidth,l?l.clientWidth:0)-c),{width:c,height:u,x:h,y:f}))}// A "clipping parent" is an overflowable container with the characteristic of
function nJ(e){var t,r=e.reference,i=e.element,n=e.placement,a=n?nm(n):null,s=n?nx(n):null,o=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2;switch(a){case iY:t={x:o,y:r.y-i.height};break;case iX:t={x:o,y:r.y+r.height};break;case iZ:t={x:r.x+r.width,y:l};break;case iJ:t={x:r.x-i.width,y:l};break;default:t={x:r.x,y:r.y}}var c=a?nk(a):null;if(null!=c){var u="y"===c?"height":"width";switch(s){case i2:t[c]=t[c]-(r[u]/2-i[u]/2);break;case i6:t[c]=t[c]+(r[u]/2-i[u]/2)}}return t}function n1(e,t){void 0===t&&(t={});var r,i,n,a,s,o,l,c=t,u=c.placement,h=void 0===u?e.placement:u,f=c.strategy,p=void 0===f?e.strategy:f,d=c.boundary,g=c.rootBoundary,y=c.elementContext,m=void 0===y?i4:y,v=c.altBoundary,C=c.padding,E=void 0===C?0:C,b=nU("number"!=typeof E?E:nO(E,i0)),S=e.rects.popper,T=e.elements[void 0!==v&&v?m===i4?i8:i4:m],_=(r=np(T)?T:T.contextElement||nB(e.elements.popper),o=(s=[].concat("clippingParents"===(i=void 0===d?i5:d)?(n=nY(nN(r)),np(a=["absolute","fixed"].indexOf(nA(r).position)>=0&&nd(r)?nL(r):r)?n.filter(function(e){return np(e)&&nI(e,a)&&"body"!==nh(e)}):[]):[].concat(i),[void 0===g?i3:g]))[0],(l=s.reduce(function(e,t){var i=nZ(r,t,p);return e.top=nv(i.top,e.top),e.right=nC(i.right,e.right),e.bottom=nC(i.bottom,e.bottom),e.left=nv(i.left,e.left),e},nZ(r,o,p))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),I=nT(e.elements.reference),A=nJ({reference:I,element:S,strategy:"absolute",placement:h}),B=nX(Object.assign({},S,A)),N=m===i4?B:I,w={top:_.top-N.top+b.top,bottom:N.bottom-_.bottom+b.bottom,left:_.left-N.left+b.left,right:N.right-_.right+b.right},L=e.modifiersData.offset;if(m===i4&&L){var k=L[h];Object.keys(w).forEach(function(e){var t=[iZ,iX].indexOf(e)>=0?1:-1,r=[iY,iX].indexOf(e)>=0?"y":"x";w[e]+=k[r]*t})}return w}var n0={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var n=r.mainAxis,a=void 0===n||n,s=r.altAxis,o=void 0===s||s,l=r.fallbackPlacements,c=r.padding,u=r.boundary,h=r.rootBoundary,f=r.altBoundary,p=r.flipVariations,d=void 0===p||p,g=r.allowedAutoPlacements,y=t.options.placement,m=nm(y)===y,v=l||(m||!d?[nq(y)]:function(e){if(nm(e)===i1)return[];var t=nq(e);return[nz(e),t,nz(t)]}(y)),C=[y].concat(v).reduce(function(e,r){var i,n,a,s,o,l,f,p,y,m,v,C;return e.concat(nm(r)===i1?(n=(i={placement:r,boundary:u,rootBoundary:h,padding:c,flipVariations:d,allowedAutoPlacements:g}).placement,a=i.boundary,s=i.rootBoundary,o=i.padding,l=i.flipVariations,p=void 0===(f=i.allowedAutoPlacements)?i9:f,0===(v=(m=(y=nx(n))?l?i7:i7.filter(function(e){return nx(e)===y}):i0).filter(function(e){return p.indexOf(e)>=0})).length&&(v=m),Object.keys(C=v.reduce(function(e,r){return e[r]=n1(t,{placement:r,boundary:a,rootBoundary:s,padding:o})[nm(r)],e},{})).sort(function(e,t){return C[e]-C[t]})):r)},[]),E=t.rects.reference,b=t.rects.popper,S=new Map,T=!0,_=C[0],I=0;I<C.length;I++){var A=C[I],B=nm(A),N=nx(A)===i2,w=[iY,iX].indexOf(B)>=0,L=w?"width":"height",k=n1(t,{placement:A,boundary:u,rootBoundary:h,altBoundary:f,padding:c}),R=w?N?iZ:iJ:N?iX:iY;E[L]>b[L]&&(R=nq(R));var D=nq(R),U=[];if(a&&U.push(k[B]<=0),o&&U.push(k[R]<=0,k[D]<=0),U.every(function(e){return e})){_=A,T=!1;break}S.set(A,U)}if(T)for(var O=d?3:1,P=function(e){var t=C.find(function(t){var r=S.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return _=t,"break"},x=O;x>0&&"break"!==P(x);x--);t.placement!==_&&(t.modifiersData[i]._skip=!0,t.placement=_,t.reset=!0)}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"],data:{_skip:!1}};function n2(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function n6(e){return[iY,iZ,iX,iJ].some(function(t){return e[t]>=0})}var n5={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,i=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,s=n1(t,{elementContext:"reference"}),o=n1(t,{altBoundary:!0}),l=n2(s,i),c=n2(o,n,a),u=n6(l),h=n6(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}// eslint-disable-next-line import/no-unused-modules
},n3={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,n=r.offset,a=void 0===n?[0,0]:n,s=i9.reduce(function(e,r){var i,n,s,o,l,c;return e[r]=(i=t.rects,s=[iJ,iY].indexOf(n=nm(r))>=0?-1:1,l=(o="function"==typeof a?a(Object.assign({},i,{placement:r})):a)[0],c=o[1],l=l||0,c=(c||0)*s,[iJ,iZ].indexOf(n)>=0?{x:c,y:l}:{x:l,y:c}),e},{}),o=s[t.placement],l=o.x,c=o.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=s}// eslint-disable-next-line import/no-unused-modules
},n4={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[r]=nJ({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},n8={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,i=e.name,n=r.mainAxis,a=r.altAxis,s=r.boundary,o=r.rootBoundary,l=r.altBoundary,c=r.padding,u=r.tether,h=void 0===u||u,f=r.tetherOffset,p=void 0===f?0:f,d=n1(t,{boundary:s,rootBoundary:o,padding:c,altBoundary:l}),g=nm(t.placement),y=nx(t.placement),m=!y,v=nk(g),C="x"===v?"y":"x",E=t.modifiersData.popperOffsets,b=t.rects.reference,S=t.rects.popper,T="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,_="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(E){if(void 0===n||n){var B,N="y"===v?iY:iJ,w="y"===v?iX:iZ,L="y"===v?"height":"width",k=E[v],R=k+d[N],D=k-d[w],U=h?-S[L]/2:0,O=y===i2?b[L]:S[L],P=y===i2?-S[L]:-b[L],x=t.elements.arrow,V=h&&x?n_(x):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:nD(),M=K[N],F=K[w],j=nR(0,b[L],V[L]),H=m?b[L]/2-U-j-M-_.mainAxis:O-j-M-_.mainAxis,q=m?-b[L]/2+U+j+F+_.mainAxis:P+j+F+_.mainAxis,G=t.elements.arrow&&nL(t.elements.arrow),z=G?"y"===v?G.clientTop||0:G.clientLeft||0:0,Q=null!=(B=null==I?void 0:I[v])?B:0,$=nR(h?nC(R,k+H-Q-z):R,k,h?nv(D,k+q-Q):D);E[v]=$,A[v]=$-k}if(void 0!==a&&a){var W,Y,X="x"===v?iY:iJ,Z="x"===v?iX:iZ,J=E[C],ee="y"===C?"height":"width",et=J+d[X],er=J-d[Z],ei=-1!==[iY,iJ].indexOf(g),en=null!=(Y=null==I?void 0:I[C])?Y:0,ea=ei?et:J-b[ee]-S[ee]-en+_.altAxis,es=ei?J+b[ee]+S[ee]-en-_.altAxis:er,eo=h&&ei?(W=nR(ea,J,es))>es?es:W:nR(h?ea:et,J,h?es:er);E[C]=eo,A[C]=eo-J}t.modifiersData[i]=A}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"]},n7={placement:"bottom",modifiers:[],strategy:"absolute"};function n9(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function ae(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,i=void 0===r?[]:r,n=t.defaultOptions,a=void 0===n?n7:n;return function(e,t,r){void 0===r&&(r=a);var n,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},n7,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],l=!1,c={state:s,setOptions:function(r){var n,l,h,f,p,d="function"==typeof r?r(s.options):r;u(),s.options=Object.assign({},a,s.options,d),s.scrollParents={reference:np(e)?nY(e):e.contextElement?nY(e.contextElement):[],popper:nY(t)};// properties
var g=(l=Object.keys(n=[].concat(i,s.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),h=new Map,f=new Set,p=[],l.forEach(function(e){h.set(e.name,e)}),l.forEach(function(e){f.has(e.name)||function e(t){f.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!f.has(t)){var r=h.get(t);r&&e(r)}}),p.push(t)}(e)}),nc.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));// Strip out disabled modifiers
return s.orderedModifiers=g.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,i=e.effect;if("function"==typeof i){var n=i({state:s,name:t,instance:c,options:void 0===r?{}:r});o.push(n||function(){})}}),c.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(n9(t,r)){// Store the reference and popper rects to be read by modifiers
s.rects={reference:(n=nL(r),a="fixed"===s.options.strategy,o=nd(n),p=nd(n)&&(h=nE((u=n.getBoundingClientRect()).width)/n.offsetWidth||1,f=nE(u.height)/n.offsetHeight||1,1!==h||1!==f),d=nB(n),g=nT(t,p,a),y={scrollLeft:0,scrollTop:0},m={x:0,y:0},(o||!o&&!a)&&(("body"!==nh(n)||nW(d))&&(y=(i=n)!==nf(i)&&nd(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:nQ(i)),nd(n)?(m=nT(n,!0),m.x+=n.clientLeft,m.y+=n.clientTop):d&&(m.x=n$(d))),{x:g.left+y.scrollLeft-m.x,y:g.top+y.scrollTop-m.y,width:g.width,height:g.height}),popper:n_(r)},// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
s.reset=!1,s.placement=s.options.placement,// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var i,n,a,o,u,h,f,p,d,g,y,m,v=0;v<s.orderedModifiers.length;v++){if(!0===s.reset){s.reset=!1,v=-1;continue}var C=s.orderedModifiers[v],E=C.fn,b=C.options,S=void 0===b?{}:b,T=C.name;"function"==typeof E&&(s=E({state:s,options:S,name:T,instance:c})||s)}}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:function(){return n||(n=new Promise(function(e){Promise.resolve().then(function(){n=void 0,e(new Promise(function(e){c.forceUpdate(),e(s)}))})})),n},destroy:function(){u(),l=!0}};if(!n9(e,t))return c;function u(){o.forEach(function(e){return e()}),o=[]}return c.setOptions(r).then(function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)}),c}}var at=/*#__PURE__*/ae(),ar=ae({defaultModifiers:[nj,n4,nM,ny,n3,n0,n8,nP,n5]}),ai=ae({defaultModifiers:[nj,n4,nM,ny]});// eslint-disable-next-line import/no-unused-modules
m(i$,iW),m(i$,nu);/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const an=new Map,aa={set(e,t,r){an.has(e)||an.set(e,new Map);let i=an.get(e);// make it clear we only want one instance per element
// can be removed later when multiple key/instances are fine to be used
if(!i.has(t)&&0!==i.size){// eslint-disable-next-line no-console
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,r)},get:(e,t)=>an.has(e)&&an.get(e).get(t)||null,remove(e,t){if(!an.has(e))return;let r=an.get(e);r.delete(t),0===r.size&&an.delete(e)}},as="transitionend",ao=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),al=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),ac=e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e))return e},au=e=>{if(!e)return 0;// Get transition-duration of the element
let{transitionDuration:t,transitionDelay:r}=window.getComputedStyle(e),i=Number.parseFloat(t),n=Number.parseFloat(r);return(// Return 0 if element or transition duration is not found
i||n?(// If multiple durations are defined, take the first
t=t.split(",")[0],r=r.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(r))*1e3):0)},ah=e=>{e.dispatchEvent(new Event(as))},af=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),ap=e=>// it's a jQuery object or a node element
    af(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(ao(e)):null,ad=e=>{if(!af(e)||0===e.getClientRects().length)return!1;let t="visible"===getComputedStyle(e).getPropertyValue("visibility"),r=e.closest("details:not([open])");if(!r)return t;if(r!==e){let t=e.closest("summary");if(t&&t.parentNode!==r||null===t)return!1}return t},ag=e=>!!(!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled"))||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),ay=e=>{if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?ay(e.parentNode):null},am=()=>{},av=e=>{e.offsetHeight;// eslint-disable-line no-unused-expressions
},aC=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,aE=[],ab=e=>{"loading"===document.readyState?(aE.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of aE)e()}),aE.push(e)):e()},aS=()=>"rtl"===document.documentElement.dir,aT=e=>{ab(()=>{let t=aC();/* istanbul ignore if */if(t){let r=e.NAME,i=t.fn[r];t.fn[r]=e.jQueryInterface,t.fn[r].Constructor=e,t.fn[r].noConflict=()=>(t.fn[r]=i,e.jQueryInterface)}})},a_=(e,t=[],r=e)=>"function"==typeof e?e(...t):r,aI=(e,t,r=!0)=>{if(!r){a_(e);return}let i=au(t)+5,n=!1,a=({target:r})=>{r===t&&(n=!0,t.removeEventListener(as,a),a_(e))};t.addEventListener(as,a),setTimeout(()=>{n||ah(t)},i)},aA=(e,t,r,i)=>{let n=e.length,a=e.indexOf(t);return(// if the element does not exist in the list return an element
// depending on the direction and if cycle is allowed
-1===a?!r&&i?e[n-1]:e[0]:(a+=r?1:-1,i&&(a=(a+n)%n),e[Math.max(0,Math.min(a,n-1))]))},aB=/[^.]*(?=\..*)\.|.*/,aN=/\..*/,aw=/::\d+$/,aL={};let ak=1;const aR={mouseenter:"mouseover",mouseleave:"mouseout"},aD=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);/**
 * Private methods
 */function aU(e,t){return t&&`${t}::${ak++}`||e.uidEvent||ak++}function aO(e){let t=aU(e);return e.uidEvent=t,aL[t]=aL[t]||{},aL[t]}function aP(e,t,r=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===r)}function ax(e,t,r){let i="string"==typeof t,n=aM(e);return aD.has(n)||(n=e),[i,i?r:t||r,n]}function aV(e,t,r,i,n){var a,s,o;if("string"!=typeof t||!e)return;let[l,c,u]=ax(t,r,i);// in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
// this prevents the handler from being dispatched the same way as mouseover or mouseout does
t in aR&&(a=c,c=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return a.call(this,e)});let h=aO(e),f=h[u]||(h[u]={}),p=aP(f,c,l?r:null);if(p){p.oneOff=p.oneOff&&n;return}let d=aU(c,t.replace(aB,"")),g=l?(s=c,function t(i){let n=e.querySelectorAll(r);for(let{target:a}=i;a&&a!==this;a=a.parentNode)for(let o of n)if(o===a)return aj(i,{delegateTarget:a}),t.oneOff&&aF.off(e,i.type,r,s),s.apply(a,[i])}):(o=c,function t(r){return aj(r,{delegateTarget:e}),t.oneOff&&aF.off(e,r.type,o),o.apply(e,[r])});g.delegationSelector=l?r:null,g.callable=c,g.oneOff=n,g.uidEvent=d,f[d]=g,e.addEventListener(u,g,l)}function aK(e,t,r,i,n){let a=aP(t[r],i,n);a&&(e.removeEventListener(r,a,!!n),delete t[r][a.uidEvent])}function aM(e){return aR[// allow to get the native events from namespaced events ('click.bs.button' --> 'click')
e=e.replace(aN,"")]||e}const aF={on(e,t,r,i){aV(e,t,r,i,!1)},one(e,t,r,i){aV(e,t,r,i,!0)},off(e,t,r,i){if("string"!=typeof t||!e)return;let[n,a,s]=ax(t,r,i),o=s!==t,l=aO(e),c=l[s]||{},u=t.startsWith(".");if(void 0!==a){// Simplest case: handler is passed, remove that listener ONLY.
if(!Object.keys(c).length)return;aK(e,l,s,a,n?r:null);return}if(u)for(let r of Object.keys(l))!function(e,t,r,i){let n=t[r]||{};for(let[a,s]of Object.entries(n))a.includes(i)&&aK(e,t,r,s.callable,s.delegationSelector)}(e,l,r,t.slice(1));for(let[r,i]of Object.entries(c)){let n=r.replace(aw,"");(!o||t.includes(n))&&aK(e,l,s,i.callable,i.delegationSelector)}},trigger(e,t,r){if("string"!=typeof t||!e)return null;let i=aC(),n=aM(t),a=t!==n,s=null,o=!0,l=!0,c=!1;a&&i&&(s=i.Event(t,r),i(e).trigger(s),o=!s.isPropagationStopped(),l=!s.isImmediatePropagationStopped(),c=s.isDefaultPrevented());let u=aj(new Event(t,{bubbles:o,cancelable:!0}),r);return c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&s&&s.preventDefault(),u}};function aj(e,t={}){for(let[r,i]of Object.entries(t))try{e[r]=i}catch(t){Object.defineProperty(e,r,{configurable:!0,get:()=>i})}return e}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */function aH(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function aq(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const aG={setDataAttribute(e,t,r){e.setAttribute(`data-bs-${aq(t)}`,r)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${aq(t)}`)},getDataAttributes(e){if(!e)return{};let t={},r=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(let i of r){let r=i.replace(/^bs/,"");t[r=r.charAt(0).toLowerCase()+r.slice(1,r.length)]=aH(e.dataset[i])}return t},getDataAttribute:(e,t)=>aH(e.getAttribute(`data-bs-${aq(t)}`))};/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Class definition
 */class az{// Getters
static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let r=af(t)?aG.getDataAttribute(t,"config"):{};// try to parse
return{...this.constructor.Default,..."object"==typeof r?r:{},...af(t)?aG.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[r,i]of Object.entries(t)){let t=e[r],n=af(t)?"element":al(t);if(!new RegExp(i).test(n))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${n}" but expected type "${i}".`)}}}/**
 * Class definition
 */class aQ extends az{constructor(e,t){if(super(),!(e=ap(e)))return;this._element=e,this._config=this._getConfig(t),aa.set(this._element,this.constructor.DATA_KEY,this)}// Public
dispose(){for(let e of(aa.remove(this._element,this.constructor.DATA_KEY),aF.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[e]=null}_queueCallback(e,t,r=!0){aI(e,t,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}// Static
static getInstance(e){return aa.get(ap(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */const a$=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let r=e.getAttribute("href");// The only valid content that could double as a selector are IDs or classes,
// so everything starting with `#` or `.`. If a "real" URL is used as the selector,
// `document.querySelector` will rightfully complain it is invalid.
// See https://github.com/twbs/bootstrap/issues/32273
if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),t=r&&"#"!==r?ao(r.trim()):null}return t},aW={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let r=[],i=e.parentNode.closest(t);for(;i;)r.push(i),i=i.parentNode.closest(t);return r},prev(e,t){let r=e.previousElementSibling;for(;r;){if(r.matches(t))return[r];r=r.previousElementSibling}return[]},// TODO: this is now unused; remove later along with prev()
next(e,t){let r=e.nextElementSibling;for(;r;){if(r.matches(t))return[r];r=r.nextElementSibling}return[]},focusableChildren(e){let t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!ag(e)&&ad(e))},getSelectorFromElement(e){let t=a$(e);return t&&aW.findOne(t)?t:null},getElementFromSelector(e){let t=a$(e);return t?aW.findOne(t):null},getMultipleElementsFromSelector(e){let t=a$(e);return t?aW.find(t):[]}},aY=(e,t="hide")=>{let r=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;aF.on(document,r,`[data-bs-dismiss="${i}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),ag(this))return;let n=aW.getElementFromSelector(this)||this.closest(`.${i}`),a=e.getOrCreateInstance(n);// Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
a[t]()})},aX=".bs.alert",aZ=`close${aX}`,aJ=`closed${aX}`;/**
 * Class definition
 */class a1 extends aQ{// Getters
static get NAME(){return"alert"}// Public
close(){let e=aF.trigger(this._element,aZ);if(e.defaultPrevented)return;this._element.classList.remove("show");let t=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,t)}// Private
_destroyElement(){this._element.remove(),aF.trigger(this._element,aJ),this.dispose()}// Static
static jQueryInterface(e){return this.each(function(){let t=a1.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */aY(a1,"close"),/**
 * jQuery
 */aT(a1);const a0='[data-bs-toggle="button"]';/**
 * Class definition
 */class a2 extends aQ{// Getters
static get NAME(){return"button"}// Public
toggle(){// Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}// Static
static jQueryInterface(e){return this.each(function(){let t=a2.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}/**
 * Data API implementation
 */aF.on(document,"click.bs.button.data-api",a0,e=>{e.preventDefault();let t=e.target.closest(a0),r=a2.getOrCreateInstance(t);r.toggle()}),/**
 * jQuery
 */aT(a2);const a6=".bs.swipe",a5=`touchstart${a6}`,a3=`touchmove${a6}`,a4=`touchend${a6}`,a8=`pointerdown${a6}`,a7=`pointerup${a6}`,a9={endCallback:null,leftCallback:null,rightCallback:null},se={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};/**
 * Class definition
 */class st extends az{constructor(e,t){if(super(),this._element=e,!e||!st.isSupported())return;this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents()}// Getters
static get Default(){return a9}static get DefaultType(){return se}static get NAME(){return"swipe"}// Public
dispose(){aF.off(this._element,a6)}// Private
_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),a_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&a_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(aF.on(this._element,a8,e=>this._start(e)),aF.on(this._element,a7,e=>this._end(e)),this._element.classList.add("pointer-event")):(aF.on(this._element,a5,e=>this._start(e)),aF.on(this._element,a3,e=>this._move(e)),aF.on(this._element,a4,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}// Static
static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const sr=".bs.carousel",si=".data-api",sn="next",sa="prev",ss="left",so="right",sl=`slide${sr}`,sc=`slid${sr}`,su=`keydown${sr}`,sh=`mouseenter${sr}`,sf=`mouseleave${sr}`,sp=`dragstart${sr}`,sd=`load${sr}${si}`,sg=`click${sr}${si}`,sy="carousel",sm="active",sv=".active",sC=".carousel-item",sE=sv+sC,sb={ArrowLeft:so,ArrowRight:ss},sS={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},sT={interval:"(number|boolean)",// TODO:v6 remove boolean support
keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};/**
 * Class definition
 */class s_ extends aQ{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=aW.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===sy&&this.cycle()}// Getters
static get Default(){return sS}static get DefaultType(){return sT}static get NAME(){return"carousel"}// Public
next(){this._slide(sn)}nextWhenVisible(){// FIXME TODO use `document.visibilityState`
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&ad(this._element)&&this.next()}prev(){this._slide(sa)}pause(){this._isSliding&&ah(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){aF.one(this._element,sc,()=>this.cycle());return}this.cycle()}}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){aF.one(this._element,sc,()=>this.to(e));return}let r=this._getItemIndex(this._getActive());r!==e&&this._slide(e>r?sn:sa,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}// Private
_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&aF.on(this._element,su,e=>this._keydown(e)),"hover"===this._config.pause&&(aF.on(this._element,sh,()=>this.pause()),aF.on(this._element,sf,()=>this._maybeEnableCycle())),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of aW.find(".carousel-item img",this._element))aF.on(e,sp,e=>e.preventDefault());this._swipeHelper=new st(this._element,{leftCallback:()=>this._slide(this._directionToOrder(ss)),rightCallback:()=>this._slide(this._directionToOrder(so)),endCallback:()=>{"hover"===this._config.pause&&(// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}})}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=sb[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=aW.findOne(sv,this._indicatorsElement);t.classList.remove(sm),t.removeAttribute("aria-current");let r=aW.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(sm),r.setAttribute("aria-current","true"))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let r=this._getActive(),i=e===sn,n=t||aA(this._getItems(),r,i,this._config.wrap);if(n===r)return;let a=this._getItemIndex(n),s=t=>aF.trigger(this._element,t,{relatedTarget:n,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:a}),o=s(sl);if(o.defaultPrevented||!r||!n)return;let l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=n;let c=i?"carousel-item-start":"carousel-item-end",u=i?"carousel-item-next":"carousel-item-prev";n.classList.add(u),av(n),r.classList.add(c),n.classList.add(c),this._queueCallback(()=>{n.classList.remove(c,u),n.classList.add(sm),r.classList.remove(sm,u,c),this._isSliding=!1,s(sc)},r,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return aW.findOne(sE,this._element)}_getItems(){return aW.find(sC,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return aS()?e===ss?sa:sn:e===ss?sn:sa}_orderToDirection(e){return aS()?e===sa?ss:so:e===sa?so:ss}// Static
static jQueryInterface(e){return this.each(function(){let t=s_.getOrCreateInstance(this,e);if("number"==typeof e){t.to(e);return}if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */aF.on(document,sg,"[data-bs-slide], [data-bs-slide-to]",function(e){let t=aW.getElementFromSelector(this);if(!t||!t.classList.contains(sy))return;e.preventDefault();let r=s_.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){r.to(i),r._maybeEnableCycle();return}if("next"===aG.getDataAttribute(this,"slide")){r.next(),r._maybeEnableCycle();return}r.prev(),r._maybeEnableCycle()}),aF.on(window,sd,()=>{let e=aW.find('[data-bs-ride="carousel"]');for(let t of e)s_.getOrCreateInstance(t)}),/**
 * jQuery
 */aT(s_);const sI=".bs.collapse",sA=`show${sI}`,sB=`shown${sI}`,sN=`hide${sI}`,sw=`hidden${sI}`,sL=`click${sI}.data-api`,sk="show",sR="collapse",sD="collapsing",sU=`:scope .${sR} .${sR}`,sO='[data-bs-toggle="collapse"]',sP={parent:null,toggle:!0},sx={parent:"(null|element)",toggle:"boolean"};/**
 * Class definition
 */class sV extends aQ{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let r=aW.find(sO);for(let e of r){let t=aW.getSelectorFromElement(e),r=aW.find(t).filter(e=>e===this._element);null!==t&&r.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}// Getters
static get Default(){return sP}static get DefaultType(){return sx}static get NAME(){return"collapse"}// Public
toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e!==this._element).map(e=>sV.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;let t=aF.trigger(this._element,sA);if(t.defaultPrevented)return;for(let t of e)t.hide();let r=this._getDimension();this._element.classList.remove(sR),this._element.classList.add(sD),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let i=r[0].toUpperCase()+r.slice(1),n=`scroll${i}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(sD),this._element.classList.add(sR,sk),this._element.style[r]="",aF.trigger(this._element,sB)},this._element,!0),this._element.style[r]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;let e=aF.trigger(this._element,sN);if(e.defaultPrevented)return;let t=this._getDimension();for(let e of(this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,av(this._element),this._element.classList.add(sD),this._element.classList.remove(sR,sk),this._triggerArray)){let t=aW.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(sD),this._element.classList.add(sR),aF.trigger(this._element,sw)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(sk)}// Private
_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=ap(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(sO);for(let t of e){let e=aW.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=aW.find(sU,this._config.parent);// remove children if greater depth
return aW.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let r of e)r.classList.toggle("collapsed",!t),r.setAttribute("aria-expanded",t)}// Static
static jQueryInterface(e){let t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let r=sV.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===r[e])throw TypeError(`No method named "${e}"`);r[e]()}})}}/**
 * Data API implementation
 */aF.on(document,sL,sO,function(e){for(let t of(("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault(),aW.getMultipleElementsFromSelector(this)))sV.getOrCreateInstance(t,{toggle:!1}).toggle()}),/**
 * jQuery
 */aT(sV);/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const sK="dropdown",sM=".bs.dropdown",sF=".data-api",sj="ArrowDown",sH=`hide${sM}`,sq=`hidden${sM}`,sG=`show${sM}`,sz=`shown${sM}`,sQ=`click${sM}${sF}`,s$=`keydown${sM}${sF}`,sW=`keyup${sM}${sF}`,sY="show",sX='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',sZ=`${sX}.${sY}`,sJ=".dropdown-menu",s1=aS()?"top-end":"top-start",s0=aS()?"top-start":"top-end",s2=aS()?"bottom-end":"bottom-start",s6=aS()?"bottom-start":"bottom-end",s5=aS()?"left-start":"right-start",s3=aS()?"right-start":"left-start",s4={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},s8={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};/**
 * Class definition
 */class s7 extends aQ{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
this._menu=aW.next(this._element,sJ)[0]||aW.prev(this._element,sJ)[0]||aW.findOne(sJ,this._parent),this._inNavbar=this._detectNavbar()}// Getters
static get Default(){return s4}static get DefaultType(){return s8}static get NAME(){return sK}// Public
toggle(){return this._isShown()?this.hide():this.show()}show(){if(ag(this._element)||this._isShown())return;let e={relatedTarget:this._element},t=aF.trigger(this._element,sG,e);if(!t.defaultPrevented){// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let e of[].concat(...document.body.children))aF.on(e,"mouseover",am);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(sY),this._element.classList.add(sY),aF.trigger(this._element,sz,e)}}hide(){if(ag(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}// Private
_completeHide(e){let t=aF.trigger(this._element,sH,e);if(!t.defaultPrevented){// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))aF.off(e,"mouseover",am);this._popper&&this._popper.destroy(),this._menu.classList.remove(sY),this._element.classList.remove(sY),this._element.setAttribute("aria-expanded","false"),aG.removeDataAttribute(this._menu,"popper"),aF.trigger(this._element,sq,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!af(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw TypeError(`${sK.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===i$)throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:af(this._config.reference)?e=ap(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=i$.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(sY)}_getPlacement(){let e=this._parent;if(e.classList.contains("dropend"))return s5;if(e.classList.contains("dropstart"))return s3;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";// We need to trim the value because custom properties can also include spaces
let t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?s0:s1:t?s6:s2}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(aG.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...a_(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){let r=aW.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(e=>ad(e));r.length&&// if target isn't included in items (e.g. when expanding the dropdown)
// allow cycling to get the last item in case key equals ARROW_UP_KEY
aA(r,t,e===sj,!r.includes(t)).focus()}// Static
static jQueryInterface(e){return this.each(function(){let t=s7.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;let t=aW.find(sZ);for(let r of t){let t=s7.getInstance(r);if(!t||!1===t._config.autoClose)continue;let i=e.composedPath(),n=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!n||"outside"===t._config.autoClose&&n||t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};"click"===e.type&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){// If not an UP | DOWN | ESCAPE key => not a dropdown command
// If input/textarea && if key is other than ESCAPE => not a dropdown command
let t=/input|textarea/i.test(e.target.tagName),r="Escape"===e.key,i=["ArrowUp",sj].includes(e.key);if(!i&&!r||t&&!r)return;e.preventDefault();// TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
let n=this.matches(sX)?this:aW.prev(this,sX)[0]||aW.next(this,sX)[0]||aW.findOne(sX,e.delegateTarget.parentNode),a=s7.getOrCreateInstance(n);if(i){e.stopPropagation(),a.show(),a._selectMenuItem(e);return}a._isShown()&&(// else is escape and we check if it is shown
e.stopPropagation(),a.hide(),n.focus())}}/**
 * Data API implementation
 */aF.on(document,s$,sX,s7.dataApiKeydownHandler),aF.on(document,s$,sJ,s7.dataApiKeydownHandler),aF.on(document,sQ,s7.clearMenus),aF.on(document,sW,s7.clearMenus),aF.on(document,sQ,sX,function(e){e.preventDefault(),s7.getOrCreateInstance(this).toggle()}),/**
 * jQuery
 */aT(s7);/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const s9="backdrop",oe="show",ot=`mousedown.bs.${s9}`,or={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,// if false, we use the backdrop helper without adding any element to the dom
rootElement:"body"// give the choice to place backdrop under different elements
},oi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};/**
 * Class definition
 */class on extends az{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}// Getters
static get Default(){return or}static get DefaultType(){return oi}static get NAME(){return s9}// Public
show(e){if(!this._config.isVisible){a_(e);return}this._append();let t=this._getElement();this._config.isAnimated&&av(t),t.classList.add(oe),this._emulateAnimation(()=>{a_(e)})}hide(e){if(!this._config.isVisible){a_(e);return}this._getElement().classList.remove(oe),this._emulateAnimation(()=>{this.dispose(),a_(e)})}dispose(){this._isAppended&&(aF.off(this._element,ot),this._element.remove(),this._isAppended=!1)}// Private
_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return(// use getElement() with the default "body" to get a fresh Element on each instantiation
e.rootElement=ap(e.rootElement),e)}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),aF.on(e,ot,()=>{a_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){aI(e,this._getElement(),this._config.isAnimated)}}const oa=".bs.focustrap",os=`focusin${oa}`,oo=`keydown.tab${oa}`,ol="backward",oc={autofocus:!0,trapElement:null// The element to trap focus inside of
},ou={autofocus:"boolean",trapElement:"element"};/**
 * Class definition
 */class oh extends az{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}// Getters
static get Default(){return oc}static get DefaultType(){return ou}static get NAME(){return"focustrap"}// Public
activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),aF.off(document,oa),aF.on(document,os,e=>this._handleFocusin(e)),aF.on(document,oo,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,aF.off(document,oa))}// Private
_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let r=aW.focusableChildren(t);0===r.length?t.focus():this._lastTabNavDirection===ol?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?ol:"forward")}}/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 *//**
 * Constants
 */const of=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",op=".sticky-top",od="padding-right",og="margin-right";/**
 * Class definition
 */class oy{constructor(){this._element=document.body}// Public
getWidth(){// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),// give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element,od,t=>t+e),// trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(of,od,t=>t+e),this._setElementAttributes(op,og,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,od),this._resetElementAttributes(of,od),this._resetElementAttributes(op,og)}isOverflowing(){return this.getWidth()>0}// Private
_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,r){let i=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);let n=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${r(Number.parseFloat(n))}px`)})}_saveInitialAttribute(e,t){let r=e.style.getPropertyValue(t);r&&aG.setDataAttribute(e,t,r)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let r=aG.getDataAttribute(e,t);// We only want to remove the property if the value is `null`; the value can also be zero
if(null===r){e.style.removeProperty(t);return}aG.removeDataAttribute(e,t),e.style.setProperty(t,r)})}_applyManipulationCallback(e,t){if(af(e)){t(e);return}for(let r of aW.find(e,this._element))t(r)}}const om=".bs.modal",ov=`hide${om}`,oC=`hidePrevented${om}`,oE=`hidden${om}`,ob=`show${om}`,oS=`shown${om}`,oT=`resize${om}`,o_=`click.dismiss${om}`,oI=`mousedown.dismiss${om}`,oA=`keydown.dismiss${om}`,oB=`click${om}.data-api`,oN="modal-open",ow="show",oL="modal-static",ok={backdrop:!0,focus:!0,keyboard:!0},oR={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};/**
 * Class definition
 */class oD extends aQ{constructor(e,t){super(e,t),this._dialog=aW.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new oy,this._addEventListeners()}// Getters
static get Default(){return ok}static get DefaultType(){return oR}static get NAME(){return"modal"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;let t=aF.trigger(this._element,ob,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(oN),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;let e=aF.trigger(this._element,ov);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ow),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){aF.off(window,om),aF.off(this._dialog,om),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}// Private
_initializeBackDrop(){return new on({isVisible:!!this._config.backdrop,// 'static' option will be translated to true, and booleans will keep their value,
isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new oh({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let t=aW.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),av(this._element),this._element.classList.add(ow),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,aF.trigger(this._element,oS,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){aF.on(this._element,oA,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),aF.on(window,oT,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),aF.on(this._element,oI,e=>{// a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
aF.one(this._element,o_,t=>{if(this._element===e.target&&this._element===t.target){if("static"===this._config.backdrop){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(oN),this._resetAdjustments(),this._scrollBar.reset(),aF.trigger(this._element,oE)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){let e=aF.trigger(this._element,oC);if(e.defaultPrevented)return;let t=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;// return if the following background transition hasn't yet completed
"hidden"===r||this._element.classList.contains(oL)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(oL),this._queueCallback(()=>{this._element.classList.remove(oL),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}/**
   * The following methods are used to handle overflowing modals
   */_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),r=t>0;if(r&&!e){let e=aS()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!r&&e){let e=aS()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}// Static
static jQueryInterface(e,t){return this.each(function(){let r=oD.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===r[e])throw TypeError(`No method named "${e}"`);r[e](t)}})}}/**
 * Data API implementation
 */aF.on(document,oB,'[data-bs-toggle="modal"]',function(e){let t=aW.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),aF.one(t,ob,e=>{e.defaultPrevented||aF.one(t,oE,()=>{ad(this)&&this.focus()})});// avoid conflict when clicking modal toggler while another one is open
let r=aW.findOne(".modal.show");r&&oD.getInstance(r).hide();let i=oD.getOrCreateInstance(t);i.toggle(this)}),aY(oD),/**
 * jQuery
 */aT(oD);const oU=".bs.offcanvas",oO=".data-api",oP=`load${oU}${oO}`,ox="show",oV="showing",oK="hiding",oM=".offcanvas.show",oF=`show${oU}`,oj=`shown${oU}`,oH=`hide${oU}`,oq=`hidePrevented${oU}`,oG=`hidden${oU}`,oz=`resize${oU}`,oQ=`click${oU}${oO}`,o$=`keydown.dismiss${oU}`,oW={backdrop:!0,keyboard:!0,scroll:!1},oY={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};/**
 * Class definition
 */class oX extends aQ{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}// Getters
static get Default(){return oW}static get DefaultType(){return oY}static get NAME(){return"offcanvas"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;let t=aF.trigger(this._element,oF,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new oy().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(oV),this._queueCallback(()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ox),this._element.classList.remove(oV),aF.trigger(this._element,oj,{relatedTarget:e})},this._element,!0))}hide(){if(!this._isShown)return;let e=aF.trigger(this._element,oH);e.defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(oK),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(ox,oK),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new oy().reset(),aF.trigger(this._element,oG)},this._element,!0))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}// Private
_initializeBackDrop(){// 'static' option will be translated to true, and booleans will keep their value
let e=!!this._config.backdrop;return new on({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{if("static"===this._config.backdrop){aF.trigger(this._element,oq);return}this.hide()}:null})}_initializeFocusTrap(){return new oh({trapElement:this._element})}_addEventListeners(){aF.on(this._element,o$,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}aF.trigger(this._element,oq)}})}// Static
static jQueryInterface(e){return this.each(function(){let t=oX.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */aF.on(document,oQ,'[data-bs-toggle="offcanvas"]',function(e){let t=aW.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),ag(this))return;aF.one(t,oG,()=>{// focus on trigger when it is closed
ad(this)&&this.focus()});// avoid conflict when clicking a toggler of an offcanvas, while another is open
let r=aW.findOne(oM);r&&r!==t&&oX.getInstance(r).hide();let i=oX.getOrCreateInstance(t);i.toggle(this)}),aF.on(window,oP,()=>{for(let e of aW.find(oM))oX.getOrCreateInstance(e).show()}),aF.on(window,oz,()=>{for(let e of aW.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&oX.getOrCreateInstance(e).hide()}),aY(oX),/**
 * jQuery
 */aT(oX);const oZ={// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},oJ=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),o1=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,o0=(e,t)=>{let r=e.nodeName.toLowerCase();return t.includes(r)?!oJ.has(r)||!!o1.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(r))},o2={allowList:oZ,content:{},// { selector : text ,  selector2 : text2 , }
extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},o6={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},o5={entry:"(string|element|function|null)",selector:"(string|element)"};/**
 * Class definition
 */class o3 extends az{constructor(e){super(),this._config=this._getConfig(e)}// Getters
static get Default(){return o2}static get DefaultType(){return o6}static get NAME(){return"TemplateFactory"}// Public
getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement("div");for(let[t,r]of(e.innerHTML=this._maybeSanitize(this._config.template),Object.entries(this._config.content)))this._setContent(e,r,t);let t=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&t.classList.add(...r.split(" ")),t}// Private
_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,r]of Object.entries(e))super._typeCheckConfig({selector:t,entry:r},o5)}_setContent(e,t,r){let i=aW.findOne(r,e);if(i){if(!(t=this._resolvePossibleFunction(t))){i.remove();return}if(af(t)){this._putElementInTemplate(ap(t),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(t);return}i.textContent=t}}_maybeSanitize(e){return this._config.sanitize?function(e,t,r){if(!e.length)return e;if(r&&"function"==typeof r)return r(e);let i=new window.DOMParser,n=i.parseFromString(e,"text/html"),a=[].concat(...n.body.querySelectorAll("*"));for(let e of a){let r=e.nodeName.toLowerCase();if(!Object.keys(t).includes(r)){e.remove();continue}let i=[].concat(...e.attributes),n=[].concat(t["*"]||[],t[r]||[]);for(let t of i)o0(t,n)||e.removeAttribute(t.nodeName)}return n.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return a_(e,[this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const o4=new Set(["sanitize","allowList","sanitizeFn"]),o8="fade",o7="show",o9=".modal",le="hide.bs.modal",lt="hover",lr="focus",li={AUTO:"auto",TOP:"top",RIGHT:aS()?"left":"right",BOTTOM:"bottom",LEFT:aS()?"right":"left"},ln={allowList:oZ,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},la={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};/**
 * Class definition
 */class ls extends aQ{constructor(e,t){if(void 0===i$)throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),// Private
this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,// Protected
this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}// Getters
static get Default(){return ln}static get DefaultType(){return la}static get NAME(){return"tooltip"}// Public
enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),aF.off(this._element.closest(o9),le,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;let e=aF.trigger(this._element,this.constructor.eventName("show")),t=ay(this._element),r=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;// TODO: v6 remove this or make it optional
this._disposePopper();let i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));let{container:n}=this._config;// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),aF.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(o7),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))aF.on(e,"mouseover",am);this._queueCallback(()=>{aF.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(!this._isShown())return;let e=aF.trigger(this._element,this.constructor.eventName("hide"));if(e.defaultPrevented)return;let t=this._getTipElement();// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if(t.classList.remove(o7),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))aF.off(e,"mouseover",am);this._activeTrigger.click=!1,this._activeTrigger[lr]=!1,this._activeTrigger[lt]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),aF.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}// Protected
_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();// TODO: remove this check in v6
if(!t)return null;t.classList.remove(o8,o7),// TODO: v6 the following can be achieved with CSS only
t.classList.add(`bs-${this.constructor.NAME}-auto`);let r=ac(this.constructor.NAME).toString();return t.setAttribute("id",r),this._isAnimated()&&t.classList.add(o8),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new o3({...this._config,content:// to override config.content in case of popover
e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}// Private
_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(o8)}_isShown(){return this.tip&&this.tip.classList.contains(o7)}_createPopper(e){let t=a_(this._config.placement,[this,e,this._element]),r=li[t.toUpperCase()];return i$.createPopper(this._element,e,this._getPopperConfig(r))}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return a_(e,[this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{// Pre-set Popper's placement attribute in order to read the arrow sizes properly.
// Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...a_(this._config.popperConfig,[t])}}_setListeners(){let e=this._config.trigger.split(" ");for(let t of e)if("click"===t)aF.on(this._element,this.constructor.eventName("click"),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t.toggle()});else if("manual"!==t){let e=t===lt?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),r=t===lt?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");aF.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?lr:lt]=!0,t._enter()}),aF.on(this._element,r,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?lr:lt]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},aF.on(this._element.closest(o9),le,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=aG.getDataAttributes(this._element);for(let e of Object.keys(t))o4.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:ap(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,r]of Object.entries(this._config))this.constructor.Default[t]!==r&&(e[t]=r);// In the future can be replaced with:
// const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
// `Object.fromEntries(keysWithDifferentValues)`
return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}// Static
static jQueryInterface(e){return this.each(function(){let t=ls.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */aT(ls);const lo={...ls.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ll={...ls.DefaultType,content:"(null|string|element|function)"};/**
 * Class definition
 */class lc extends ls{// Getters
static get Default(){return lo}static get DefaultType(){return ll}static get NAME(){return"popover"}// Overrides
_isWithContent(){return this._getTitle()||this._getContent()}// Private
_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}// Static
static jQueryInterface(e){return this.each(function(){let t=lc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * jQuery
 */aT(lc);const lu=".bs.scrollspy",lh=`activate${lu}`,lf=`click${lu}`,lp=`load${lu}.data-api`,ld="active",lg="[href]",ly=".nav-link",lm=`${ly}, .nav-item > ${ly}, .list-group-item`,lv={offset:null,// TODO: v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},lC={offset:"(number|null)",// TODO v6 @deprecated, keep it for backwards compatibility reasons
rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};/**
 * Class definition
 */class lE extends aQ{constructor(e,t){super(e,t),// this._element is the observablesContainer and config.target the menu links wrapper
this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}// Getters
static get Default(){return lv}static get DefaultType(){return lC}static get NAME(){return"scrollspy"}// Public
refresh(){for(let e of(this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver(),this._observableSections.values()))this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}// Private
_configAfterMerge(e){return(// TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
e.target=ap(e.target)||document.body,// TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e)}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(// unregister any previous listeners
aF.off(this._config.target,lf),aF.on(this._config.target,lf,lg,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let r=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:i,behavior:"smooth"});return}// Chrome 60 doesn't support `scrollTo`
r.scrollTop=i}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}// The logic of selection
_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),r=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,n=i>=this._previousScrollData.parentScrollTop;for(let a of(this._previousScrollData.parentScrollTop=i,e)){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;// if we are scrolling down, pick the bigger offsetTop
if(n&&e){// if parent isn't scrolled, let's keep the first visible item, breaking the iteration
if(r(a),!i)return;continue}// if we are scrolling up, pick the smallest offsetTop
n||e||r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=aW.find(lg,this._config.target);for(let t of e){// ensure that the anchor has an id and is not disabled
if(!t.hash||ag(t))continue;let e=aW.findOne(decodeURI(t.hash),this._element);// ensure that the observableSection exists & is visible
ad(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(ld),this._activateParents(e),aF.trigger(this._element,lh,{relatedTarget:e}))}_activateParents(e){// Activate dropdown parents
if(e.classList.contains("dropdown-item")){aW.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(ld);return}for(let t of aW.parents(e,".nav, .list-group"))// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
for(let e of aW.prev(t,lm))e.classList.add(ld)}_clearActiveClass(e){e.classList.remove(ld);let t=aW.find(`${lg}.${ld}`,e);for(let e of t)e.classList.remove(ld)}// Static
static jQueryInterface(e){return this.each(function(){let t=lE.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */aF.on(window,lp,()=>{for(let e of aW.find('[data-bs-spy="scroll"]'))lE.getOrCreateInstance(e)}),/**
 * jQuery
 */aT(lE);const lb=".bs.tab",lS=`hide${lb}`,lT=`hidden${lb}`,l_=`show${lb}`,lI=`shown${lb}`,lA=`click${lb}`,lB=`keydown${lb}`,lN=`load${lb}`,lw="ArrowRight",lL="ArrowDown",lk="Home",lR="active",lD="fade",lU="show",lO=".dropdown-toggle",lP=`:not(${lO})`,lx=`.nav-link${lP}, .list-group-item${lP}, [role="tab"]${lP}`,lV='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',lK=`${lx}, ${lV}`,lM=`.${lR}[data-bs-toggle="tab"], .${lR}[data-bs-toggle="pill"], .${lR}[data-bs-toggle="list"]`;/**
 * Class definition
 */class lF extends aQ{constructor(e){if(super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),!this._parent)return;// Set up initial aria attributes
this._setInitialAttributes(this._parent,this._getChildren()),aF.on(this._element,lB,e=>this._keydown(e))}// Getters
static get NAME(){return"tab"}// Public
show(){// Shows this elem and deactivate the active sibling if exists
let e=this._element;if(this._elemIsActive(e))return;// Search for active tab on same parent to deactivate it
let t=this._getActiveElem(),r=t?aF.trigger(t,lS,{relatedTarget:e}):null,i=aF.trigger(e,l_,{relatedTarget:t});i.defaultPrevented||r&&r.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}// Private
_activate(e,t){e&&(e.classList.add(lR),this._activate(aW.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.add(lU);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),aF.trigger(e,lI,{relatedTarget:t})},e,e.classList.contains(lD)))}_deactivate(e,t){e&&(e.classList.remove(lR),e.blur(),this._deactivate(aW.getElementFromSelector(e)),this._queueCallback(()=>{if("tab"!==e.getAttribute("role")){e.classList.remove(lU);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),aF.trigger(e,lT,{relatedTarget:t})},e,e.classList.contains(lD)))}_keydown(e){let t;if(!["ArrowLeft",lw,"ArrowUp",lL,lk,"End"].includes(e.key))return;e.stopPropagation(),e.preventDefault();let r=this._getChildren().filter(e=>!ag(e));if([lk,"End"].includes(e.key))t=r[e.key===lk?0:r.length-1];else{let i=[lw,lL].includes(e.key);t=aA(r,e.target,i,!0)}t&&(t.focus({preventScroll:!0}),lF.getOrCreateInstance(t).show())}_getChildren(){// collection of inner elements
return aW.find(lK,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){for(let r of(this._setAttributeIfNotExists(e,"role","tablist"),t))this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",t),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),// set attributes to the related panel too
this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=aW.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){let r=this._getOuterElement(e);if(!r.classList.contains("dropdown"))return;let i=(e,i)=>{let n=aW.findOne(e,r);n&&n.classList.toggle(i,t)};i(lO,lR),i(".dropdown-menu",lU),r.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,r){e.hasAttribute(t)||e.setAttribute(t,r)}_elemIsActive(e){return e.classList.contains(lR)}// Try to get the inner element (usually the .nav-link)
_getInnerElement(e){return e.matches(lK)?e:aW.findOne(lK,e)}// Try to get the outer element (usually the .nav-item)
_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}// Static
static jQueryInterface(e){return this.each(function(){let t=lF.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e]()}})}}/**
 * Data API implementation
 */aF.on(document,lA,lV,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),ag(this)||lF.getOrCreateInstance(this).show()}),/**
 * Initialize on focus
 */aF.on(window,lN,()=>{for(let e of aW.find(lM))lF.getOrCreateInstance(e)}),/**
 * jQuery
 */aT(lF);const lj=".bs.toast",lH=`mouseover${lj}`,lq=`mouseout${lj}`,lG=`focusin${lj}`,lz=`focusout${lj}`,lQ=`hide${lj}`,l$=`hidden${lj}`,lW=`show${lj}`,lY=`shown${lj}`,lX="hide",lZ="show",lJ="showing",l1={animation:"boolean",autohide:"boolean",delay:"number"},l0={animation:!0,autohide:!0,delay:5e3};/**
 * Class definition
 */class l2 extends aQ{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}// Getters
static get Default(){return l0}static get DefaultType(){return l1}static get NAME(){return"toast"}// Public
show(){let e=aF.trigger(this._element,lW);e.defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(lX),av(this._element),this._element.classList.add(lZ,lJ),this._queueCallback(()=>{this._element.classList.remove(lJ),aF.trigger(this._element,lY),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){if(!this.isShown())return;let e=aF.trigger(this._element,lQ);e.defaultPrevented||(this._element.classList.add(lJ),this._queueCallback(()=>{this._element.classList.add(lX),this._element.classList.remove(lJ,lZ),aF.trigger(this._element,l$)},this._element,this._config.animation))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(lZ),super.dispose()}isShown(){return this._element.classList.contains(lZ)}// Private
_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t){this._clearTimeout();return}let r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){aF.on(this._element,lH,e=>this._onInteraction(e,!0)),aF.on(this._element,lq,e=>this._onInteraction(e,!1)),aF.on(this._element,lG,e=>this._onInteraction(e,!0)),aF.on(this._element,lz,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}// Static
static jQueryInterface(e){return this.each(function(){let t=l2.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e](this)}})}}/**
 * Data API implementation
 */aY(l2),/**
 * jQuery
 */aT(l2),p=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,i=r%3// if we have 1 byte left, pad 2 bytes
,n=[],a=0,s=r-i;a<s;a+=16383// must be multiple of 3
)n.push(function(e,t,r){for(var i,n=[],a=t;a<r;a+=3)n.push(l6[(i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+l6[i>>12&63]+l6[i>>6&63]+l6[63&i]);return n.join("")}(e,a,a+16383>s?s:a+16383));return 1===i?n.push(l6[(t=e[r-1])>>2]+l6[t<<4&63]+"=="):2===i&&n.push(l6[(t=(e[r-2]<<8)+e[r-1])>>10]+l6[t>>4&63]+l6[t<<2&63]+"="),n.join("")};for(var l6=[],l5=[],l3="undefined"!=typeof Uint8Array?Uint8Array:Array,l4="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l8=0,l7=l4.length;l8<l7;++l8)l6[l8]=l4[l8],l5[l4.charCodeAt(l8)]=l8;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
l5["-".charCodeAt(0)]=62,l5["_".charCodeAt(0)]=63,d=function(e,t,r,i,n){var a,s,o=8*n-i-1,l=(1<<o)-1,c=l>>1,u=-7,h=r?n-1:0,f=r?-1:1,p=e[t+h];for(h+=f,a=p&(1<<-u)-1,p>>=-u,u+=o;u>0;a=256*a+e[t+h],h+=f,u-=8);for(s=a&(1<<-u)-1,a>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=f,u-=8);if(0===a)a=1-c;else{if(a===l)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,i),a-=c}return(p?-1:1)*s*Math.pow(2,a-i)},g=function(e,t,r,i,n,a){var s,o,l,c=8*a-n-1,u=(1<<c)-1,h=u>>1,f=23===n?5960464477539062e-23:0,p=i?0:a-1,d=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(o=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?t+=f/l:t+=f*Math.pow(2,1-h),t*l>=2&&(s++,l/=2),s+h>=u?(o=0,s=u):s+h>=1?(o=(t*l-1)*Math.pow(2,n),s+=h):(o=t*Math.pow(2,h-1)*Math.pow(2,n),s=0));n>=8;e[r+p]=255&o,p+=d,o/=256,n-=8);for(s=s<<n|o,c+=n;c>0;e[r+p]=255&s,p+=d,s/=256,c-=8);e[r+p-d]|=128*g};const l9="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function ce(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,ct.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function ct(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return cn(e)}return cr(e,t,r)}function cr(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ct.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|cl(e,t),i=ce(r),n=i.write(e,t);return n!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ck(e,Uint8Array)){let t=new Uint8Array(e);return cs(t.buffer,t.byteOffset,t.byteLength)}return ca(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ck(e,ArrayBuffer)||e&&ck(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(ck(e,SharedArrayBuffer)||e&&ck(e.buffer,SharedArrayBuffer)))return cs(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ct.from(i,t,r);let n=function(e){var t;if(ct.isBuffer(e)){let t=0|co(e.length),r=ce(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?ce(0):ca(e):"Buffer"===e.type&&Array.isArray(e.data)?ca(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ct.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ci(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function cn(e){return ci(e),ce(e<0?0:0|co(e))}function ca(e){let t=e.length<0?0:0|co(e.length),r=ce(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function cs(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ct.prototype),i)}function co(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function cl(e,t){if(ct.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ck(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;// Use a for loop to avoid recursion
let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return cN(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return cw(e).length;default:if(n)return i?-1:cN(e).length// assume utf8
;t=(""+t).toLowerCase(),n=!0}}function cc(e,t,r){let i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=cR[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return cp(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var n,a;return n=t,a=r,0===n&&a===this.length?p(this):p(this.slice(n,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function cu(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ch(e,t,r,i,n){var a;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(a=r=+r// Coerce to Number.
)!=a&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=ct.from(t,i)),ct.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:cf(e,t,r,i,n));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):cf(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function cf(e,t,r,i,n){let a,s=1,o=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;s=2,o/=2,l/=2,r/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(n){let i=-1;for(a=r;a<o;a++)if(c(e,a)===c(t,-1===i?0:a-i)){if(-1===i&&(i=a),a-i+1===l)return i*s}else -1!==i&&(a-=a-i),i=-1}else for(r+l>o&&(r=o-l),a=r;a>=0;a--){let r=!0;for(let i=0;i<l;i++)if(c(e,a+i)!==c(t,i)){r=!1;break}if(r)return a}return -1}function cp(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],a=null,s=t>239?4:t>223?3:t>191?2:1;if(n+s<=r){let r,i,o,l;switch(s){case 1:t<128&&(a=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(a=l);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(l=(15&t)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:r=e[n+1],i=e[n+2],o=e[n+3],(192&r)==128&&(192&i)==128&&(192&o)==128&&(l=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&o)>65535&&l<1114112&&(a=l)}}null===a?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
a=65533,s=1):a>65535&&(// encode to utf16 (surrogate pair dance)
a-=65536,i.push(a>>>10&1023|55296),a=56320|1023&a),i.push(a),n+=s}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function cd(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function cg(e,t,r,i,n,a){if(!ct.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<a)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function cy(e,t,r,i,n){c_(t,i,n,e,r,7);let a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function cm(e,t,r,i,n){c_(t,i,n,e,r,7);let a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function cv(e,t,r,i,n,a){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function cC(e,t,r,i,n){return t=+t,r>>>=0,n||cv(e,t,r,4,34028234663852886e22,-34028234663852886e22),g(e,t,r,i,23,4),r+4}function cE(e,t,r,i,n){return t=+t,r>>>=0,n||cv(e,t,r,8,17976931348623157e292,-17976931348623157e292),g(e,t,r,i,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ct.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ct.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ct.prototype,"parent",{enumerable:!0,get:function(){if(ct.isBuffer(this))return this.buffer}}),Object.defineProperty(ct.prototype,"offset",{enumerable:!0,get:function(){if(ct.isBuffer(this))return this.byteOffset}}),ct.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ct.from=function(e,t,r){return cr(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(ct.prototype,Uint8Array.prototype),Object.setPrototypeOf(ct,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ct.alloc=function(e,t,r){return(ci(e),e<=0)?ce(e):void 0!==t?"string"==typeof r?ce(e).fill(t,r):ce(e).fill(t):ce(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ct.allocUnsafe=function(e){return cn(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ct.allocUnsafeSlow=function(e){return cn(e)},ct.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ct.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},ct.compare=function(e,t){if(ck(e,Uint8Array)&&(e=ct.from(e,e.offset,e.byteLength)),ck(t,Uint8Array)&&(t=ct.from(t,t.offset,t.byteLength)),!ct.isBuffer(e)||!ct.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,a=Math.min(r,i);n<a;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},ct.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ct.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ct.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=ct.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(ck(t,Uint8Array))n+t.length>i.length?(ct.isBuffer(t)||(t=ct.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(ct.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},ct.byteLength=cl,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
ct.prototype._isBuffer=!0,ct.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)cu(this,t,t+1);return this},ct.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)cu(this,t,t+3),cu(this,t+1,t+2);return this},ct.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)cu(this,t,t+7),cu(this,t+1,t+6),cu(this,t+2,t+5),cu(this,t+3,t+4);return this},ct.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?cp(this,0,e):cc.apply(this,arguments)},ct.prototype.toLocaleString=ct.prototype.toString,ct.prototype.equals=function(e){if(!ct.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ct.compare(this,e)},ct.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},l9&&(ct.prototype[l9]=ct.prototype.inspect),ct.prototype.compare=function(e,t,r,i,n){if(ck(e,Uint8Array)&&(e=ct.from(e,e.offset,e.byteLength)),!ct.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let a=n-i,s=r-t,o=Math.min(a,s),l=this.slice(i,n),c=e.slice(t,r);for(let e=0;e<o;++e)if(l[e]!==c[e]){a=l[e],s=c[e];break}return a<s?-1:s<a?1:0},ct.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ct.prototype.indexOf=function(e,t,r){return ch(this,e,t,r,!0)},ct.prototype.lastIndexOf=function(e,t,r){return ch(this,e,t,r,!1)},ct.prototype.write=function(e,t,r,i){var n,a,s,o,l,c,u,h;// Buffer#write(string)
if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let p=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let a=e.length-r;i?(i=Number(i))>a&&(i=a):i=a;let s=t.length;for(i>s/2&&(i=s/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,a=r,cL(cN(e,this.length-n),this,n,a);case"ascii":case"latin1":case"binary":return s=t,o=r,cL(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,o);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,c=r,cL(cw(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,h=r,cL(function(e,t){let r,i;let n=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)i=(r=e.charCodeAt(a))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,h);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},ct.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ct.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i,ct.prototype),i)},ct.prototype.readUintLE=ct.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||cd(e,t,this.length);let i=this[e],n=1,a=0;for(;++a<t&&(n*=256);)i+=this[e+a]*n;return i},ct.prototype.readUintBE=ct.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||cd(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},ct.prototype.readUint8=ct.prototype.readUInt8=function(e,t){return e>>>=0,t||cd(e,1,this.length),this[e]},ct.prototype.readUint16LE=ct.prototype.readUInt16LE=function(e,t){return e>>>=0,t||cd(e,2,this.length),this[e]|this[e+1]<<8},ct.prototype.readUint16BE=ct.prototype.readUInt16BE=function(e,t){return e>>>=0,t||cd(e,2,this.length),this[e]<<8|this[e+1]},ct.prototype.readUint32LE=ct.prototype.readUInt32LE=function(e,t){return e>>>=0,t||cd(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ct.prototype.readUint32BE=ct.prototype.readUInt32BE=function(e,t){return e>>>=0,t||cd(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ct.prototype.readBigUInt64LE=cD(function(e){cI(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&cA(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),ct.prototype.readBigUInt64BE=cD(function(e){cI(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&cA(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),ct.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||cd(e,t,this.length);let i=this[e],n=1,a=0;for(;++a<t&&(n*=256);)i+=this[e+a]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},ct.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||cd(e,t,this.length);let i=t,n=1,a=this[e+--i];for(;i>0&&(n*=256);)a+=this[e+--i]*n;return a>=(n*=128)&&(a-=Math.pow(2,8*t)),a},ct.prototype.readInt8=function(e,t){return(e>>>=0,t||cd(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ct.prototype.readInt16LE=function(e,t){e>>>=0,t||cd(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},ct.prototype.readInt16BE=function(e,t){e>>>=0,t||cd(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},ct.prototype.readInt32LE=function(e,t){return e>>>=0,t||cd(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ct.prototype.readInt32BE=function(e,t){return e>>>=0,t||cd(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ct.prototype.readBigInt64LE=cD(function(e){cI(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&cA(e,this.length-8);let i=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),ct.prototype.readBigInt64BE=cD(function(e){cI(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&cA(e,this.length-8);let i=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),ct.prototype.readFloatLE=function(e,t){return e>>>=0,t||cd(e,4,this.length),d(this,e,!0,23,4)},ct.prototype.readFloatBE=function(e,t){return e>>>=0,t||cd(e,4,this.length),d(this,e,!1,23,4)},ct.prototype.readDoubleLE=function(e,t){return e>>>=0,t||cd(e,8,this.length),d(this,e,!0,52,8)},ct.prototype.readDoubleBE=function(e,t){return e>>>=0,t||cd(e,8,this.length),d(this,e,!1,52,8)},ct.prototype.writeUintLE=ct.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;cg(this,e,t,r,i,0)}let n=1,a=0;for(this[t]=255&e;++a<r&&(n*=256);)this[t+a]=e/n&255;return t+r},ct.prototype.writeUintBE=ct.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;cg(this,e,t,r,i,0)}let n=r-1,a=1;for(this[t+n]=255&e;--n>=0&&(a*=256);)this[t+n]=e/a&255;return t+r},ct.prototype.writeUint8=ct.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,1,255,0),this[t]=255&e,t+1},ct.prototype.writeUint16LE=ct.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ct.prototype.writeUint16BE=ct.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ct.prototype.writeUint32LE=ct.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ct.prototype.writeUint32BE=ct.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ct.prototype.writeBigUInt64LE=cD(function(e,t=0){return cy(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ct.prototype.writeBigUInt64BE=cD(function(e,t=0){return cm(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ct.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);cg(this,e,t,r,i-1,-i)}let n=0,a=1,s=0;for(this[t]=255&e;++n<r&&(a*=256);)e<0&&0===s&&0!==this[t+n-1]&&(s=1),this[t+n]=(e/a>>0)-s&255;return t+r},ct.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);cg(this,e,t,r,i-1,-i)}let n=r-1,a=1,s=0;for(this[t+n]=255&e;--n>=0&&(a*=256);)e<0&&0===s&&0!==this[t+n+1]&&(s=1),this[t+n]=(e/a>>0)-s&255;return t+r},ct.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ct.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ct.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ct.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ct.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||cg(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ct.prototype.writeBigInt64LE=cD(function(e,t=0){return cy(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ct.prototype.writeBigInt64BE=cD(function(e,t=0){return cm(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ct.prototype.writeFloatLE=function(e,t,r){return cC(this,e,t,!0,r)},ct.prototype.writeFloatBE=function(e,t,r){return cC(this,e,t,!1,r)},ct.prototype.writeDoubleLE=function(e,t,r){return cE(this,e,t,!0,r)},ct.prototype.writeDoubleBE=function(e,t,r){return cE(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
ct.prototype.copy=function(e,t,r,i){if(!ct.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
ct.prototype.fill=function(e,t,r,i){let n;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!ct.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let a=ct.isBuffer(e)?e:ct.from(e,i),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=a[n%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const cb={};function cS(e,t,r){cb[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function cT(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function c_(e,t,r,i,n,a){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=a>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(a+1)*8}${n}`:`>= -(2${n} ** ${(a+1)*8-1}${n}) and < 2 ** ${(a+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new cb.ERR_OUT_OF_RANGE("value",i,e)}cI(n,"offset"),(void 0===i[n]||void 0===i[n+a])&&cA(n,i.length-(a+1))}function cI(e,t){if("number"!=typeof e)throw new cb.ERR_INVALID_ARG_TYPE(t,"number",e)}function cA(e,t,r){if(Math.floor(e)!==e)throw cI(e,r),new cb.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new cb.ERR_BUFFER_OUT_OF_BOUNDS;throw new cb.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}cS("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),cS("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),cS("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=cT(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=cT(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);// HELPER FUNCTIONS
// ================
const cB=/[^+/0-9A-Za-z-_]/g;function cN(e,t){let r;t=t||1/0;let i=e.length,n=null,a=[];for(let s=0;s<i;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!n){// no lead yet
if(r>56319||s+1===i){// unexpected trail
(t-=3)>-1&&a.push(239,191,189);continue}// valid lead
n=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&a.push(239,191,189),n=r;continue}// valid surrogate pair
r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&a.push(239,191,189);// encode utf8
if(n=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return a}function cw(e){return function(e){var t,r,i=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}(e),n=i[0],a=i[1],s=new l3((n+a)*3/4-a),o=0,l=a>0?n-4:n;for(r=0;r<l;r+=4)t=l5[e.charCodeAt(r)]<<18|l5[e.charCodeAt(r+1)]<<12|l5[e.charCodeAt(r+2)]<<6|l5[e.charCodeAt(r+3)],s[o++]=t>>16&255,s[o++]=t>>8&255,s[o++]=255&t;return 2===a&&(t=l5[e.charCodeAt(r)]<<2|l5[e.charCodeAt(r+1)]>>4,s[o++]=255&t),1===a&&(t=l5[e.charCodeAt(r)]<<10|l5[e.charCodeAt(r+1)]<<4|l5[e.charCodeAt(r+2)]>>2,s[o++]=t>>8&255,s[o++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(cB,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function cL(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function ck(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const cR=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();// Return not function with Error if BigInt not supported
function cD(e){return"undefined"==typeof BigInt?cU:e}function cU(){throw Error("BigInt not supported")}const cO="0123456789",cP={range:document.querySelector("#range"),custom:document.querySelector("#custom-range"),customDiv:document.querySelector("#custom-range-div"),length:document.querySelector("#size"),result:document.querySelector("#result"),copy:document.querySelector("#copy"),tooltip:document.querySelector("#tooltip")},cx=t=>ct.from(/*@__PURE__*/e(T).random.getBytesSync(4),"binary").readUInt32LE()%t,cV=()=>{let e=""===cP.range.value?cP.custom.value:cP.range.value,t="",r=Number(cP.length.value);if(e.length>0&&r>0)for(let i=0;i<r;i++)t+=e.charAt(cx(e.length));cP.result.value=t},cK=e=>{cP.custom.value=e,""===e?(cP.custom.readOnly=!1,cP.custom.style=""):(cP.custom.readOnly=!0,cP.custom.style="background-color: rgba(202, 188, 188, 0.1)")};cP.range.addEventListener("change",e=>{cK(e.currentTarget.value),cV()}),cP.length.addEventListener("change",cV),cP.custom.addEventListener("input",cV),cP.copy.addEventListener("click",()=>{navigator.clipboard.writeText(cP.result.value);let e=ls.getInstance("#copy");e._config.title="Пароль скопійовано",e.show(),setTimeout(()=>{e.hide(),e._config.title="Копіювати пароль"},1e3)}),cP.range.innerHTML=[{name:"0-9",characters:"0123456789"},{name:"A-Z",characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},{name:"a-z",characters:"abcdefghijklmnopqrstuvwxyz"},{name:"A-Za-z",characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"},{name:"A-Za-z0-9",characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"},{name:"HEX",characters:"0123456789ABCDEF"},{name:"hex",characters:"0123456789abcdef"},{name:"Base64",characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"},{name:"Власні символи",characters:""}].map(({name:e,characters:t})=>`<option value="${t}" ${t===cO?"selected":""}>${e}</option>`).join(""),cK(cO),/*@__PURE__*/e(T).random.collect(Math.random()),cV(),[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].forEach(e=>new ls(e));
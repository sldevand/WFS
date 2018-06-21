(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bar = exports.Bar = function Bar() {
	_classCallCheck(this, Bar);

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var x = 100,
	    y = 75,

	// Radii of the white glow.
	innerRadius = 5,
	    outerRadius = 70,

	// Radius of the entire circle.
	radius = 60;

	var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
	gradient.addColorStop(0, 'white');
	gradient.addColorStop(1, 'blue');

	ctx.arc(x, y, radius, 0, 2 * Math.PI);

	ctx.fillStyle = gradient;
	ctx.fill();
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = exports.Foo = function Foo() {
  _classCallCheck(this, Foo);
};

},{}],3:[function(require,module,exports){
'use strict';

var _Foo = require('./Foo.js');

var _Bar = require('./Bar.js');

new _Foo.Foo(new _Bar.Bar());
//new Foo();
//new Bar();

},{"./Bar.js":1,"./Foo.js":2}]},{},[3]);

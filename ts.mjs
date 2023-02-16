const arr = [
	globalThis, //*
	Infinity, //*
	NaN, //*
	undefined, //*
	eval, //*
	isFinite, //*
	isNaN, //*
	parseFloat, //*
	parseInt, //*
	decodeURI, //*
	decodeURIComponent, //*
	encodeURI, //*
	encodeURIComponent, //*
	escape, //*
	unescape, //*
	new Object(),
	new Function(),
	Boolean, //*
	Symbol, //*
	Error, //*
	AggregateError, //*
	EvalError, //*
	RangeError, //*
	ReferenceError, //*
	SyntaxError, //*
	TypeError, //*
	URIError, //*
	Number, //*
	BigInt, //*
	Math, //*
	Date, //*
	String, //*
	RegExp, //*
	new Array(),
	new Int8Array(),
	new Uint8Array(),
	new Uint8ClampedArray(),
	new Int16Array(),
	new Uint16Array(),
	new Int32Array(),
	new Uint32Array(),
	new BigInt64Array(),
	new BigUint64Array(),
	new Float32Array(),
	new Float64Array(),
	new Map(),
	new Set(),
	new WeakMap(),
	new WeakSet(),
	ArrayBuffer, //*
	SharedArrayBuffer, //*
	DataView, //*
	Atomics, //*
	JSON, //*
	Promise, //*
	Reflect, //*
	Proxy, //*
	Intl, //*
	Intl.Collator, //*
	Intl.DateTimeFormat, //*
	Intl.DisplayNames, //*
	Intl.ListFormat, //*
	Intl.Locale, //*
	Intl.NumberFormat, //*
	Intl.PluralRules, //*
	Intl.RelativeTimeFormat, //*
	Intl.Segmenter, //*
	{}
];

// arr.forEach((r, i) => console.log(`${i} - ${Object.prototype.toString.call(r)}`));

// console.log(Object.prototype.toString.call(new Map()));

console.log(typeof undefined)
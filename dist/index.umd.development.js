(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('indexof')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'indexof'], factory) :
	(global = global || self, factory(global.rcTreeSelect = {}, global.React, global.ReactDOM));
}(this, function (exports, React, ReactDOM) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    if (i % 2) {
	      var source = arguments[i] != null ? arguments[i] : {};
	      var ownKeys = Object.keys(source);

	      if (typeof Object.getOwnPropertySymbols === 'function') {
	        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	        }));
	      }

	      ownKeys.forEach(function (key) {
	        defineProperty(target, key, source[key]);
	      });
	    } else {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i]));
	    }
	  }

	  return target;
	}

	var objectSpread = _objectSpread;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var printWarning$1 = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	function emptyFunction() {}

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }

	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';

	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }

	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }

	    prototype.componentWillUpdate = componentWillUpdate;

	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;

	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		polyfill: polyfill
	});

	var KeyCode_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	exports['default'] = KeyCode;
	module.exports = exports['default'];
	});

	var KeyCode = unwrapExports(KeyCode_1);

	//

	var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
	  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

	  if (ret !== void 0) {
	    return !!ret;
	  }

	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

	  // Test for A's keys different from B.
	  for (var idx = 0; idx < keysA.length; idx++) {
	    var key = keysA[idx];

	    if (!bHasOwnProperty(key)) {
	      return false;
	    }

	    var valueA = objA[key];
	    var valueB = objB[key];

	    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

	    if (ret === false || (ret === void 0 && valueA !== valueB)) {
	      return false;
	    }
	  }

	  return true;
	};

	var performanceNow = createCommonjsModule(function (module) {
	// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(commonjsGlobal);


	});

	var root = typeof window === 'undefined' ? commonjsGlobal : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix];
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix];
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60;

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = performanceNow()
	        , next = Math.max(0, frameDuration - (_now - last));
	      last = next + _now;
	      setTimeout(function() {
	        var cp = queue.slice(0);
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0;
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last);
	            } catch(e) {
	              setTimeout(function() { throw e }, 0);
	            }
	          }
	        }
	      }, Math.round(next));
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    });
	    return id
	  };

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true;
	      }
	    }
	  };
	}

	var raf_1 = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	};
	var cancel = function() {
	  caf.apply(root, arguments);
	};
	var polyfill$1 = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf;
	  object.cancelAnimationFrame = caf;
	};
	raf_1.cancel = cancel;
	raf_1.polyfill = polyfill$1;

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _library = true;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: _library ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id$1 = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$1 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$1
	};

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	var assign$1 = createCommonjsModule(function (module) {
	module.exports = { "default": assign, __esModule: true };
	});

	unwrapExports(assign$1);

	var _extends = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _assign2 = _interopRequireDefault(assign$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};
	});

	var _extends$1 = unwrapExports(_extends);

	var classCallCheck$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck$1 = unwrapExports(classCallCheck$1);

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _redefine = _hide;

	var _iterators = {};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	var TO_STRING_TAG = _wks('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i$1 = 0; i$1 < DOMIterables.length; i$1++) {
	  var NAME = DOMIterables[i$1];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	var f$3 = _wks;

	var _wksExt = {
		f: f$3
	};

	var iterator = _wksExt.f('iterator');

	var iterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": iterator, __esModule: true };
	});

	unwrapExports(iterator$1);

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var defineProperty$1 = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var symbol = _core.Symbol;

	var symbol$1 = createCommonjsModule(function (module) {
	module.exports = { "default": symbol, __esModule: true };
	});

	unwrapExports(symbol$1);

	var _typeof_1$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(iterator$1);



	var _symbol2 = _interopRequireDefault(symbol$1);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	unwrapExports(_typeof_1$1);

	var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn$1 = unwrapExports(possibleConstructorReturn$1);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	var setPrototypeOf$1 = _core.Object.setPrototypeOf;

	var setPrototypeOf$2 = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf$1, __esModule: true };
	});

	unwrapExports(setPrototypeOf$2);

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	var $Object = _core.Object;
	var create = function create(P, D) {
	  return $Object.create(P, D);
	};

	var create$1 = createCommonjsModule(function (module) {
	module.exports = { "default": create, __esModule: true };
	});

	unwrapExports(create$1);

	var inherits$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$2);



	var _create2 = _interopRequireDefault(create$1);



	var _typeof3 = _interopRequireDefault(_typeof_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	var _inherits$1 = unwrapExports(inherits$1);

	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	}

	var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];
	});

	unwrapExports(EventBaseObject_1);

	var EventObject = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



	var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



	var _objectAssign2 = _interopRequireDefault(objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];
	});

	unwrapExports(EventObject);

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



	var _EventObject2 = _interopRequireDefault(EventObject);

	function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    var _ret = (function () {
	      var useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }

	      target.addEventListener(eventType, wrapCallback, option || false);

	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];
	});

	var addDOMEventListener = unwrapExports(lib);

	function addEventListenerWrap(target, eventType, cb, option) {
	  /* eslint camelcase: 2 */
	  var callback = ReactDOM__default.unstable_batchedUpdates ? function run(e) {
	    ReactDOM__default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return addDOMEventListener(target, eventType, callback, option);
	}

	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	// https://stackoverflow.com/a/3485654/3040605
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof$1(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}

	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = getTransitionProperty(elem) || '';
	    setTransitionProperty(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    setTransitionProperty(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform$1(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = getTransformXY(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  setTransformXY(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);

	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);

	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }

	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && getTransformName() in document.body.style) {
	    setTransform$1(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },

	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  if (utils.isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = utils.getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = utils.css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	function isAncestorFixed(element) {
	  if (utils.isWindow(element) || element.nodeType === 9) {
	    return false;
	  }

	  var doc = utils.getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = utils.css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = getOffsetParent(element);
	  var doc = utils.getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }

	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!utils.isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = utils.css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }

	  var scrollX = utils.getWindowScrollLeft(win);
	  var scrollY = utils.getWindowScrollTop(win);
	  var viewportWidth = utils.viewportWidth(win);
	  var viewportHeight = utils.viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;

	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }

	  if (isAncestorFixed(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }

	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return utils.mix(pos, size);
	}

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;

	  var x = region.left;
	  var y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = getAlignOffset(refNodeRegion, points[1]);
	  var p2 = getAlignOffset(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	// http://yiminghe.iteye.com/blog/1124720

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	function isOutOfVisibleRect(target) {
	  var visibleRect = getVisibleRectForElement(target);
	  var targetRegion = getRegion(target);

	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}

	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = getRegion(target);

	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

	  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}

	alignElement.__getOffsetParent = getOffsetParent;

	alignElement.__getVisibleRectForElement = getVisibleRectForElement;

	var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */

	function alignPoint(el, tgtPoint, align) {
	  var pageX = void 0;
	  var pageY = void 0;

	  var doc = utils.getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;

	  var scrollX = utils.getWindowScrollLeft(win);
	  var scrollY = utils.getWindowScrollTop(win);
	  var viewportWidth = utils.viewportWidth(win);
	  var viewportHeight = utils.viewportHeight(win);

	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }

	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }

	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };

	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

	  // Provide default target point
	  var points = [align.points[0], 'cc'];

	  return doAlign(el, tgtRegion, _extends$2({}, align, { points: points }), pointInView);
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	function isSamePoint(prev, next) {
	  if (prev === next) return true;
	  if (!prev || !next) return false;

	  if ('pageX' in next && 'pageY' in next) {
	    return prev.pageX === next.pageX && prev.pageY === next.pageY;
	  }

	  if ('clientX' in next && 'clientY' in next) {
	    return prev.clientX === next.clientX && prev.clientY === next.clientY;
	  }

	  return false;
	}

	function isWindow$1(obj) {
	  return obj && typeof obj === 'object' && obj.window === obj;
	}

	function getElement(func) {
	  if (typeof func !== 'function' || !func) return null;
	  return func();
	}

	function getPoint(point) {
	  if (typeof point !== 'object' || !point) return null;
	  return point;
	}

	var Align = function (_Component) {
	  _inherits$1(Align, _Component);

	  function Align() {
	    var _temp, _this, _ret;

	    _classCallCheck$1(this, Align);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          target = _this$props.target,
	          align = _this$props.align,
	          onAlign = _this$props.onAlign;

	      if (!disabled && target) {
	        var source = ReactDOM__default.findDOMNode(_this);

	        var result = void 0;
	        var element = getElement(target);
	        var point = getPoint(target);

	        if (element) {
	          result = alignElement(source, element, align);
	        } else if (point) {
	          result = alignPoint(source, point, align);
	        }

	        if (onAlign) {
	          onAlign(source, result);
	        }
	      }
	    }, _temp), _possibleConstructorReturn$1(_this, _ret);
	  }

	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      var source = ReactDOM__default.findDOMNode(this);
	      var sourceRect = source ? source.getBoundingClientRect() : null;

	      if (prevProps.disabled) {
	        reAlign = true;
	      } else {
	        var lastElement = getElement(prevProps.target);
	        var currentElement = getElement(props.target);
	        var lastPoint = getPoint(prevProps.target);
	        var currentPoint = getPoint(props.target);

	        if (isWindow$1(lastElement) && isWindow$1(currentElement)) {
	          // Skip if is window
	          reAlign = false;
	        } else if (lastElement !== currentElement || // Element change
	        lastElement && !currentElement && currentPoint || // Change from element to point
	        lastPoint && currentPoint && currentElement || // Change from point to element
	        currentPoint && !isSamePoint(lastPoint, currentPoint)) {
	          reAlign = true;
	        }

	        // If source element size changed
	        var preRect = this.sourceRect || {};
	        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
	          reAlign = true;
	        }
	      }

	      this.sourceRect = sourceRect;
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };

	  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
	    }
	  };

	  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  };

	  Align.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    var child = React__default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      var propList = Object.keys(childrenProps);
	      propList.forEach(function (prop) {
	        newProps[prop] = _this2.props[childrenProps[prop]];
	      });

	      return React__default.cloneElement(child, newProps);
	    }
	    return child;
	  };

	  return Align;
	}(React.Component);

	Align.propTypes = {
	  childrenProps: propTypes.object,
	  align: propTypes.object.isRequired,
	  target: propTypes.oneOfType([propTypes.func, propTypes.shape({
	    clientX: propTypes.number,
	    clientY: propTypes.number,
	    pageX: propTypes.number,
	    pageY: propTypes.number
	  })]),
	  onAlign: propTypes.func,
	  monitorBufferTime: propTypes.number,
	  monitorWindowResize: propTypes.bool,
	  disabled: propTypes.bool,
	  children: propTypes.any
	};
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};

	// export this package's api

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	var $Object$1 = _core.Object;
	var defineProperty$2 = function defineProperty(it, key, desc) {
	  return $Object$1.defineProperty(it, key, desc);
	};

	var defineProperty$3 = createCommonjsModule(function (module) {
	module.exports = { "default": defineProperty$2, __esModule: true };
	});

	unwrapExports(defineProperty$3);

	var createClass$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	});

	var _createClass$1 = unwrapExports(createClass$1);

	function toArray(children) {
	  var ret = [];
	  React__default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction$1 = function emptyFunction() {};

	emptyFunction$1.thatReturns = makeEmptyFunction;
	emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction$1.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction$1.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction$1;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning$2 = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning$2.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$1 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var ITERATOR$3 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	var from_1 = _core.Array.from;

	var from_1$1 = createCommonjsModule(function (module) {
	module.exports = { "default": from_1, __esModule: true };
	});

	unwrapExports(from_1$1);

	var toArray$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _from2 = _interopRequireDefault(from_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};
	});

	var _toArray = unwrapExports(toArray$1);

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var componentIndexof = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

	var indexOf = [].indexOf;

	var indexof$1 = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

	/**
	 * Module dependencies.
	 */

	try {
	  var index = indexof$1;
	} catch (err) {
	  var index = componentIndexof;
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString$2 = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	var componentClasses = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString$2.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	var ExecutionEnvironment_1 = ExecutionEnvironment;
	var canUseDOM_vbpqG = ExecutionEnvironment_1.canUseDOM;

	// =================== Style ====================
	var stylePrefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  var style = window.getComputedStyle(node, null);
	  var ret = '';
	  for (var i = 0; i < stylePrefixes.length; i++) {
	    ret = style.getPropertyValue(stylePrefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function getStyleValue(node, name) {
	  return parseFloat(getStyleProperty(node, name));
	}

	// ================= Transition =================
	// Event wrapper. Copy from react source code
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};

	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	  prefixes['Moz' + styleProp] = 'moz' + eventName;
	  prefixes['ms' + styleProp] = 'MS' + eventName;
	  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	  return prefixes;
	}

	function getVendorPrefixes(domSupport, win) {
	  var prefixes = {
	    animationend: makePrefixMap('Animation', 'AnimationEnd'),
	    transitionend: makePrefixMap('Transition', 'TransitionEnd')
	  };

	  if (domSupport) {
	    if (!('AnimationEvent' in win)) {
	      delete prefixes.animationend.animation;
	    }

	    if (!('TransitionEvent' in win)) {
	      delete prefixes.transitionend.transition;
	    }
	  }

	  return prefixes;
	}

	var vendorPrefixes = getVendorPrefixes(canUseDOM_vbpqG, typeof window !== 'undefined' ? window : {});

	var style = {};

	if (canUseDOM_vbpqG) {
	  style = document.createElement('div').style;
	}

	var prefixedEventNames = {};

	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) {
	    return prefixedEventNames[eventName];
	  }

	  var prefixMap = vendorPrefixes[eventName];

	  if (prefixMap) {
	    var stylePropList = Object.keys(prefixMap);
	    var len = stylePropList.length;
	    for (var i = 0; i < len; i += 1) {
	      var styleProp = stylePropList[i];
	      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
	        prefixedEventNames[eventName] = prefixMap[styleProp];
	        return prefixedEventNames[eventName];
	      }
	    }
	  }

	  return '';
	}

	var animationEndName = getVendorPrefixedEventName('animationend');
	var transitionEndName = getVendorPrefixedEventName('transitionend');
	var supportTransition = !!(animationEndName && transitionEndName);

	// ==================== Node ====================
	/**
	 * [Legacy] Find the same children in both prev & next list.
	 * Insert not find one before the find one, otherwise in the end. For example:
	 * - prev: [1,2,3]
	 * - next: [2,4]
	 * -> [1,2,4,3]
	 */
	function mergeChildren(prev, next) {
	  var prevList = toArray(prev);
	  var nextList = toArray(next);

	  // Skip if is single children
	  if (prevList.length === 1 && nextList.length === 1 && prevList[0].key === nextList[0].key) {
	    return nextList;
	  }

	  var mergeList = [];
	  var nextChildrenMap = {};
	  var missMatchChildrenList = [];

	  // Fill matched prev node into next node map
	  prevList.forEach(function (prevNode) {
	    if (prevNode && nextList.some(function (_ref) {
	      var key = _ref.key;
	      return key === prevNode.key;
	    })) {
	      if (missMatchChildrenList.length) {
	        nextChildrenMap[prevNode.key] = missMatchChildrenList;
	        missMatchChildrenList = [];
	      }
	    } else {
	      missMatchChildrenList.push(prevNode);
	    }
	  });

	  // Insert prev node before the matched next node
	  nextList.forEach(function (nextNode) {
	    if (nextNode && nextChildrenMap[nextNode.key]) {
	      mergeList = mergeList.concat(nextChildrenMap[nextNode.key]);
	    }
	    mergeList.push(nextNode);
	  });

	  mergeList = mergeList.concat(missMatchChildrenList);

	  return mergeList;
	}

	function cloneProps(props, propList) {
	  var newProps = {};
	  propList.forEach(function (prop) {
	    if (prop in props) {
	      newProps[prop] = props[prop];
	    }
	  });

	  return newProps;
	}

	function getTransitionName$1(transitionName, transitionType) {
	  if (!transitionName) return null;

	  if (typeof transitionName === 'object') {
	    var type = transitionType.replace(/-\w/g, function (match) {
	      return match[1].toUpperCase();
	    });
	    return transitionName[type];
	  }

	  return transitionName + '-' + transitionType;
	}

	var clonePropList = ['appeared', 'show', 'exclusive', 'children', 'animation'];

	/**
	 * AnimateChild only accept one child node.
	 * `transitionSupport` is used for none transition test case.
	 * Default we use browser transition event support check.
	 */
	function genAnimateChild(transitionSupport) {
	  var AnimateChild = function (_React$Component) {
	    _inherits$1(AnimateChild, _React$Component);

	    function AnimateChild() {
	      _classCallCheck$1(this, AnimateChild);

	      // [Legacy] Since old code addListener on the element.
	      // To avoid break the behaviour that component not handle animation/transition
	      // also can handle the animate, let keep the logic.
	      var _this = _possibleConstructorReturn$1(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).call(this));

	      _this.state = {
	        child: null,

	        eventQueue: [],
	        eventActive: false
	      };

	      _this.onDomUpdated = function () {
	        var eventActive = _this.state.eventActive;
	        var _this$props = _this.props,
	            transitionName = _this$props.transitionName,
	            animation = _this$props.animation,
	            onChildLeaved = _this$props.onChildLeaved,
	            animateKey = _this$props.animateKey;


	        var $ele = _this.getDomElement();

	        // Skip if dom element not ready
	        if (!$ele) return;

	        // [Legacy] Add animation/transition event by dom level
	        if (transitionSupport && _this.$prevEle !== $ele) {
	          _this.cleanDomEvent();

	          _this.$prevEle = $ele;
	          _this.$prevEle.addEventListener(animationEndName, _this.onMotionEnd);
	          _this.$prevEle.addEventListener(transitionEndName, _this.onMotionEnd);
	        }

	        var currentEvent = _this.getCurrentEvent();
	        if (currentEvent.empty) {
	          // Additional process the leave event
	          if (currentEvent.lastEventType === 'leave') {
	            onChildLeaved(animateKey);
	          }
	          return;
	        }

	        var eventType = currentEvent.eventType,
	            restQueue = currentEvent.restQueue;

	        var nodeClasses = componentClasses($ele);

	        // [Legacy] Since origin code use js to set `className`.
	        // This caused that any component without support `className` can be forced set.
	        // Let's keep the logic.
	        function legacyAppendClass() {
	          if (!transitionSupport) return;

	          var basicClassName = getTransitionName$1(transitionName, '' + eventType);
	          if (basicClassName) nodeClasses.add(basicClassName);

	          if (eventActive) {
	            var activeClassName = getTransitionName$1(transitionName, eventType + '-active');
	            if (activeClassName) nodeClasses.add(activeClassName);
	          }
	        }

	        if (_this.currentEvent && _this.currentEvent.type === eventType) {
	          legacyAppendClass();
	          return;
	        }

	        // Clear timeout for legacy check
	        clearTimeout(_this.timeout);

	        // Clean up last event environment
	        if (_this.currentEvent && _this.currentEvent.animateObj && _this.currentEvent.animateObj.stop) {
	          _this.currentEvent.animateObj.stop();
	        }

	        // Clean up last transition class
	        if (_this.currentEvent) {
	          var basicClassName = getTransitionName$1(transitionName, '' + _this.currentEvent.type);
	          var activeClassName = getTransitionName$1(transitionName, _this.currentEvent.type + '-active');
	          if (basicClassName) nodeClasses.remove(basicClassName);
	          if (activeClassName) nodeClasses.remove(activeClassName);
	        }

	        // New event come
	        _this.currentEvent = {
	          type: eventType
	        };

	        var animationHandler = (animation || {})[eventType];
	        // =============== Check if has customize animation ===============
	        if (animationHandler) {
	          _this.currentEvent.animateObj = animationHandler($ele, function () {
	            _this.onMotionEnd({ target: $ele });
	          });

	          // Do next step if not animate object provided
	          if (!_this.currentEvent || !_this.currentEvent.animateObj) {
	            _this.nextEvent(restQueue);
	          }

	          // ==================== Use transition instead ====================
	        } else if (transitionSupport) {
	          legacyAppendClass();
	          if (!eventActive) {
	            // Trigger `eventActive` in next frame
	            raf_1(function () {
	              if (_this.currentEvent && _this.currentEvent.type === eventType && !_this._destroy) {
	                _this.setState({ eventActive: true }, function () {
	                  // [Legacy] Handle timeout if browser transition event not handle
	                  var transitionDelay = getStyleValue($ele, 'transition-delay') || 0;
	                  var transitionDuration = getStyleValue($ele, 'transition-duration') || 0;
	                  var animationDelay = getStyleValue($ele, 'animation-delay') || 0;
	                  var animationDuration = getStyleValue($ele, 'animation-duration') || 0;
	                  var totalTime = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);

	                  if (totalTime >= 0) {
	                    _this.timeout = setTimeout(function () {
	                      _this.onMotionEnd({ target: $ele });
	                    }, totalTime * 1000);
	                  }
	                });
	              }
	            });
	          }

	          // ======================= Just next action =======================
	        } else {
	          _this.onMotionEnd({ target: $ele });
	        }
	      };

	      _this.onMotionEnd = function (_ref) {
	        var target = _ref.target;
	        var _this$props2 = _this.props,
	            transitionName = _this$props2.transitionName,
	            onChildLeaved = _this$props2.onChildLeaved,
	            animateKey = _this$props2.animateKey,
	            onAppear = _this$props2.onAppear,
	            onEnter = _this$props2.onEnter,
	            onLeave = _this$props2.onLeave,
	            onEnd = _this$props2.onEnd;

	        var currentEvent = _this.getCurrentEvent();
	        if (currentEvent.empty) return;

	        // Clear timeout for legacy check
	        clearTimeout(_this.timeout);

	        var restQueue = currentEvent.restQueue;


	        var $ele = _this.getDomElement();
	        if (!_this.currentEvent || $ele !== target) return;

	        if (_this.currentEvent.animateObj && _this.currentEvent.animateObj.stop) {
	          _this.currentEvent.animateObj.stop();
	        }

	        // [Legacy] Same as above, we need call js to remove the class
	        if (transitionSupport && _this.currentEvent) {
	          var basicClassName = getTransitionName$1(transitionName, _this.currentEvent.type);
	          var activeClassName = getTransitionName$1(transitionName, _this.currentEvent.type + '-active');

	          var nodeClasses = componentClasses($ele);
	          if (basicClassName) nodeClasses.remove(basicClassName);
	          if (activeClassName) nodeClasses.remove(activeClassName);
	        }

	        // Additional process the leave event
	        if (_this.currentEvent && _this.currentEvent.type === 'leave') {
	          onChildLeaved(animateKey);
	        }

	        // [Legacy] Trigger on event when it's last event
	        if (_this.currentEvent && !restQueue.length) {
	          if (_this.currentEvent.type === 'appear' && onAppear) {
	            onAppear(animateKey);
	          } else if (_this.currentEvent.type === 'enter' && onEnter) {
	            onEnter(animateKey);
	          } else if (_this.currentEvent.type === 'leave' && onLeave) {
	            onLeave(animateKey);
	          }

	          if (onEnd) {
	            // OnEnd(key, isShow)
	            onEnd(animateKey, _this.currentEvent.type !== 'leave');
	          }
	        }

	        _this.currentEvent = null;

	        // Next queue
	        _this.nextEvent(restQueue);
	      };

	      _this.getDomElement = function () {
	        if (_this._destroy) return null;
	        return ReactDOM__default.findDOMNode(_this);
	      };

	      _this.getCurrentEvent = function () {
	        var _this$state$eventQueu = _this.state.eventQueue,
	            eventQueue = _this$state$eventQueu === undefined ? [] : _this$state$eventQueu;
	        var _this$props3 = _this.props,
	            animation = _this$props3.animation,
	            exclusive = _this$props3.exclusive,
	            transitionAppear = _this$props3.transitionAppear,
	            transitionEnter = _this$props3.transitionEnter,
	            transitionLeave = _this$props3.transitionLeave;


	        function hasEventHandler(eventType) {
	          return eventType === 'appear' && (transitionAppear || animation.appear) || eventType === 'enter' && (transitionEnter || animation.enter) || eventType === 'leave' && (transitionLeave || animation.leave);
	        }

	        var event = null;
	        // If is exclusive, only check the last event
	        if (exclusive) {
	          var eventType = eventQueue[eventQueue.length - 1];
	          if (hasEventHandler(eventType)) {
	            event = {
	              eventType: eventType,
	              restQueue: []
	            };
	          }
	        } else {
	          // Loop check the queue until find match
	          var cloneQueue = eventQueue.slice();
	          while (cloneQueue.length) {
	            var _cloneQueue = cloneQueue,
	                _cloneQueue2 = _toArray(_cloneQueue),
	                _eventType = _cloneQueue2[0],
	                restQueue = _cloneQueue2.slice(1);

	            if (hasEventHandler(_eventType)) {
	              event = {
	                eventType: _eventType,
	                restQueue: restQueue
	              };
	              break;
	            }
	            cloneQueue = restQueue;
	          }
	        }

	        if (!event) {
	          event = {
	            empty: true,
	            lastEventType: eventQueue[eventQueue.length - 1]
	          };
	        }

	        return event;
	      };

	      _this.nextEvent = function (restQueue) {
	        // Next queue
	        if (!_this._destroy) {
	          _this.setState({
	            eventQueue: restQueue,
	            eventActive: false
	          });
	        }
	      };

	      _this.cleanDomEvent = function () {
	        if (_this.$prevEle && transitionSupport) {
	          _this.$prevEle.removeEventListener(animationEndName, _this.onMotionEnd);
	          _this.$prevEle.removeEventListener(transitionEndName, _this.onMotionEnd);
	        }
	      };

	      _this.$prevEle = null;

	      _this.currentEvent = null;
	      _this.timeout = null;
	      return _this;
	    }

	    _createClass$1(AnimateChild, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.onDomUpdated();
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        this.onDomUpdated();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        clearTimeout(this.timeout);
	        this._destroy = true;
	        this.cleanDomEvent();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _state = this.state,
	            child = _state.child,
	            eventActive = _state.eventActive;
	        var _props = this.props,
	            showProp = _props.showProp,
	            transitionName = _props.transitionName;

	        var _ref2 = child.props || {},
	            className = _ref2.className;

	        var currentEvent = this.getCurrentEvent();

	        // Class name
	        var connectClassName = transitionSupport && this.currentEvent ? classnames(className, getTransitionName$1(transitionName, this.currentEvent.type), eventActive && getTransitionName$1(transitionName, this.currentEvent.type + '-active')) : className;

	        var show = true;

	        // Keep show when is in transition or has customize animate
	        if (transitionSupport && (!currentEvent.empty || this.currentEvent && this.currentEvent.animateObj)) {
	          show = true;
	        } else {
	          show = child.props[showProp];
	        }

	        // Clone child
	        var newChildProps = {
	          className: connectClassName
	        };

	        if (showProp) {
	          newChildProps[showProp] = show;
	        }

	        return React__default.cloneElement(child, newChildProps);
	      }
	    }], [{
	      key: 'getDerivedStateFromProps',
	      value: function getDerivedStateFromProps(nextProps, prevState) {
	        var _prevState$prevProps = prevState.prevProps,
	            prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;
	        var appeared = nextProps.appeared;


	        var newState = {
	          prevProps: cloneProps(nextProps, clonePropList)
	        };

	        function processState(propName, updater) {
	          if (prevProps[propName] !== nextProps[propName]) {
	            if (updater) {
	              updater(nextProps[propName]);
	            }
	            return true;
	          }
	          return false;
	        }

	        function pushEvent(eventType) {
	          var eventQueue = newState.eventQueue || prevState.eventQueue.slice();
	          var matchIndex = eventQueue.indexOf(eventType);

	          // Clean the rest event if eventType match
	          if (matchIndex !== -1) {
	            eventQueue = eventQueue.slice(0, matchIndex);
	          }

	          eventQueue.push(eventType);
	          newState.eventQueue = eventQueue;
	        }

	        // Child update. Only set child.
	        processState('children', function (child) {
	          newState.child = child;
	        });

	        processState('appeared', function (isAppeared) {
	          if (isAppeared) {
	            pushEvent('appear');
	          }
	        });

	        // Show update
	        processState('show', function (show) {
	          if (!appeared) {
	            if (show) {
	              pushEvent('enter');
	            } else {
	              pushEvent('leave');
	            }
	          }
	        });

	        return newState;
	      }
	    }]);

	    return AnimateChild;
	  }(React__default.Component);

	  AnimateChild.propTypes = {
	    transitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
	    transitionAppear: propTypes.bool,
	    transitionEnter: propTypes.bool,
	    transitionLeave: propTypes.bool,
	    exclusive: propTypes.bool,
	    appeared: propTypes.bool,
	    showProp: propTypes.string,

	    animateKey: propTypes.any,
	    animation: propTypes.object,
	    onChildLeaved: propTypes.func,

	    onEnd: propTypes.func,
	    onAppear: propTypes.func,
	    onEnter: propTypes.func,
	    onLeave: propTypes.func
	  };


	  polyfill(AnimateChild);

	  return AnimateChild;
	}

	var AnimateChild = genAnimateChild(supportTransition);

	var defaultKey = 'rc_animate_' + Date.now();
	var clonePropList$1 = ['children'];

	/**
	 * Default use `AnimateChild` as component.
	 * Here can also pass customize `ChildComponent` for test usage.
	 */
	function genAnimate(ChildComponent) {
	  var Animate = function (_React$Component) {
	    _inherits$1(Animate, _React$Component);

	    function Animate() {
	      var _ref;

	      var _temp, _this, _ret;

	      _classCallCheck$1(this, Animate);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Animate.__proto__ || Object.getPrototypeOf(Animate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	        appeared: true,
	        mergedChildren: []
	      }, _this.onChildLeaved = function (key) {
	        // Remove child which not exist anymore
	        if (!_this.hasChild(key)) {
	          var mergedChildren = _this.state.mergedChildren;

	          _this.setState({
	            mergedChildren: mergedChildren.filter(function (node) {
	              return node.key !== key;
	            })
	          });
	        }
	      }, _this.hasChild = function (key) {
	        var children = _this.props.children;


	        return toArray(children).some(function (node) {
	          return node && node.key === key;
	        });
	      }, _temp), _possibleConstructorReturn$1(_this, _ret);
	    }
	    // [Legacy] Not sure usage
	    // commit: https://github.com/react-component/animate/commit/0a1cbfd647407498b10a8c6602a2dea80b42e324
	    // eslint-disable-line

	    _createClass$1(Animate, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        // No need to re-render
	        this.state.appeared = false;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this;

	        var _state = this.state,
	            appeared = _state.appeared,
	            mergedChildren = _state.mergedChildren;
	        var _props = this.props,
	            Component = _props.component,
	            componentProps = _props.componentProps,
	            className = _props.className,
	            style = _props.style,
	            showProp = _props.showProp;


	        var $children = mergedChildren.map(function (node) {
	          if (mergedChildren.length > 1 && !node.key) {
	            warning_1(false, 'must set key for <rc-animate> children');
	            return null;
	          }

	          var show = true;

	          if (!_this2.hasChild(node.key)) {
	            show = false;
	          } else if (showProp) {
	            show = node.props[showProp];
	          }

	          var key = node.key || defaultKey;

	          return React__default.createElement(
	            ChildComponent,
	            _extends$1({}, _this2.props, {
	              appeared: appeared,
	              show: show,
	              className: node.props.className,
	              style: node.props.style,
	              key: key,

	              animateKey: node.key // Keep trans origin key
	              , onChildLeaved: _this2.onChildLeaved
	            }),
	            node
	          );
	        });

	        // Wrap with component
	        if (Component) {
	          var passedProps = this.props;
	          if (typeof Component === 'string') {
	            passedProps = _extends$1({
	              className: className,
	              style: style
	            }, componentProps);
	          }

	          return React__default.createElement(
	            Component,
	            passedProps,
	            $children
	          );
	        }

	        return $children[0] || null;
	      }
	    }], [{
	      key: 'getDerivedStateFromProps',
	      value: function getDerivedStateFromProps(nextProps, prevState) {
	        var _prevState$prevProps = prevState.prevProps,
	            prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;

	        var newState = {
	          prevProps: cloneProps(nextProps, clonePropList$1)
	        };
	        var showProp = nextProps.showProp;


	        function processState(propName, updater) {
	          if (prevProps[propName] !== nextProps[propName]) {
	            updater(nextProps[propName]);
	            return true;
	          }
	          return false;
	        }

	        processState('children', function (children) {
	          var currentChildren = toArray(children).filter(function (node) {
	            return node;
	          });
	          var prevChildren = prevState.mergedChildren.filter(function (node) {
	            // Remove prev child if not show anymore
	            if (currentChildren.every(function (_ref2) {
	              var key = _ref2.key;
	              return key !== node.key;
	            }) && showProp && !node.props[showProp]) {
	              return false;
	            }
	            return true;
	          });

	          // Merge prev children to keep the animation
	          newState.mergedChildren = mergeChildren(prevChildren, currentChildren);
	        });

	        return newState;
	      }
	    }]);

	    return Animate;
	  }(React__default.Component);

	  Animate.isAnimate = true;
	  Animate.propTypes = {
	    component: propTypes.any,
	    componentProps: propTypes.object,
	    animation: propTypes.object,
	    transitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
	    transitionEnter: propTypes.bool,
	    transitionAppear: propTypes.bool,
	    exclusive: propTypes.bool,
	    transitionLeave: propTypes.bool,
	    onEnd: propTypes.func,
	    onEnter: propTypes.func,
	    onLeave: propTypes.func,
	    onAppear: propTypes.func,
	    showProp: propTypes.string,
	    children: propTypes.node,
	    style: propTypes.object,
	    className: propTypes.string
	  };
	  Animate.defaultProps = {
	    animation: {},
	    component: 'span',
	    componentProps: {},
	    transitionEnter: true,
	    transitionLeave: true,
	    transitionAppear: false
	  };


	  polyfill(Animate);

	  return Animate;
	}

	var Animate = genAnimate(AnimateChild);

	var defineProperty$5 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};
	});

	var _defineProperty$1 = unwrapExports(defineProperty$5);

	var STATUS_NONE = 'none';
	var STATUS_APPEAR = 'appear';
	var STATUS_ENTER = 'enter';
	var STATUS_LEAVE = 'leave';

	/**
	 * `transitionSupport` is used for none transition test case.
	 * Default we use browser transition event support check.
	 */
	function genCSSMotion(transitionSupport) {
	  var CSSMotion = function (_React$Component) {
	    _inherits$1(CSSMotion, _React$Component);

	    function CSSMotion() {
	      _classCallCheck$1(this, CSSMotion);

	      var _this = _possibleConstructorReturn$1(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

	      _this.onDomUpdate = function () {
	        var _this$state = _this.state,
	            status = _this$state.status,
	            newStatus = _this$state.newStatus;
	        var _this$props = _this.props,
	            onAppearStart = _this$props.onAppearStart,
	            onEnterStart = _this$props.onEnterStart,
	            onLeaveStart = _this$props.onLeaveStart,
	            onAppearActive = _this$props.onAppearActive,
	            onEnterActive = _this$props.onEnterActive,
	            onLeaveActive = _this$props.onLeaveActive,
	            motionAppear = _this$props.motionAppear,
	            motionEnter = _this$props.motionEnter,
	            motionLeave = _this$props.motionLeave;


	        if (!transitionSupport) {
	          return;
	        }

	        // Event injection
	        var $ele = ReactDOM__default.findDOMNode(_this);
	        if (_this.$ele !== $ele) {
	          _this.removeEventListener(_this.$ele);
	          _this.addEventListener($ele);
	          _this.$ele = $ele;
	        }

	        // Init status
	        if (newStatus && status === STATUS_APPEAR && motionAppear) {
	          _this.updateStatus(onAppearStart, null, null, function () {
	            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
	          });
	        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
	          _this.updateStatus(onEnterStart, null, null, function () {
	            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
	          });
	        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
	          _this.updateStatus(onLeaveStart, null, null, function () {
	            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
	          });
	        }
	      };

	      _this.onMotionEnd = function (event) {
	        var _this$state2 = _this.state,
	            status = _this$state2.status,
	            statusActive = _this$state2.statusActive;
	        var _this$props2 = _this.props,
	            onAppearEnd = _this$props2.onAppearEnd,
	            onEnterEnd = _this$props2.onEnterEnd,
	            onLeaveEnd = _this$props2.onLeaveEnd;

	        if (status === STATUS_APPEAR && statusActive) {
	          _this.updateStatus(onAppearEnd, { status: STATUS_NONE }, event);
	        } else if (status === STATUS_ENTER && statusActive) {
	          _this.updateStatus(onEnterEnd, { status: STATUS_NONE }, event);
	        } else if (status === STATUS_LEAVE && statusActive) {
	          _this.updateStatus(onLeaveEnd, { status: STATUS_NONE }, event);
	        }
	      };

	      _this.addEventListener = function ($ele) {
	        if (!$ele) return;

	        $ele.addEventListener(transitionEndName, _this.onMotionEnd);
	        $ele.addEventListener(animationEndName, _this.onMotionEnd);
	      };

	      _this.removeEventListener = function ($ele) {
	        if (!$ele) return;

	        $ele.removeEventListener(transitionEndName, _this.onMotionEnd);
	        $ele.removeEventListener(animationEndName, _this.onMotionEnd);
	      };

	      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
	        var statusStyle = styleFunc ? styleFunc(ReactDOM__default.findDOMNode(_this), event) : null;

	        if (statusStyle === false || _this._destroyed) return;

	        var nextStep = void 0;
	        if (callback) {
	          nextStep = function nextStep() {
	            _this.nextFrame(callback);
	          };
	        }

	        _this.setState(_extends$1({
	          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
	          newStatus: false
	        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`
	      };

	      _this.updateActiveStatus = function (styleFunc, currentStatus) {
	        // `setState` use `postMessage` to trigger at the end of frame.
	        // Let's use requestAnimationFrame to update new state in next frame.
	        _this.nextFrame(function () {
	          var status = _this.state.status;

	          if (status !== currentStatus) return;

	          _this.updateStatus(styleFunc, { statusActive: true });
	        });
	      };

	      _this.nextFrame = function (func) {
	        _this.cancelNextFrame();
	        _this.raf = raf_1(func);
	      };

	      _this.cancelNextFrame = function () {
	        if (_this.raf) {
	          raf_1.cancel(_this.raf);
	          _this.raf = null;
	        }
	      };

	      _this.state = {
	        status: STATUS_NONE,
	        statusActive: false,
	        newStatus: false,
	        statusStyle: null
	      };
	      _this.$ele = null;
	      _this.raf = null;
	      return _this;
	    }

	    _createClass$1(CSSMotion, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.onDomUpdate();
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        this.onDomUpdate();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this._destroyed = true;
	        this.removeEventListener(this.$ele);
	        this.cancelNextFrame();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _classNames;

	        var _state = this.state,
	            status = _state.status,
	            statusActive = _state.statusActive,
	            statusStyle = _state.statusStyle;
	        var _props = this.props,
	            children = _props.children,
	            motionName = _props.motionName,
	            visible = _props.visible;


	        if (!children) return null;

	        if (status === STATUS_NONE || !transitionSupport) {
	          return visible ? children({}) : null;
	        }

	        return children({
	          className: classnames((_classNames = {}, _defineProperty$1(_classNames, getTransitionName$1(motionName, status), status !== STATUS_NONE), _defineProperty$1(_classNames, getTransitionName$1(motionName, status + '-active'), status !== STATUS_NONE && statusActive), _defineProperty$1(_classNames, motionName, typeof motionName === 'string'), _classNames)),
	          style: statusStyle
	        });
	      }
	    }], [{
	      key: 'getDerivedStateFromProps',
	      value: function getDerivedStateFromProps(props, _ref) {
	        var prevProps = _ref.prevProps;

	        if (!transitionSupport) return {};

	        var visible = props.visible,
	            motionAppear = props.motionAppear,
	            motionEnter = props.motionEnter,
	            motionLeave = props.motionLeave,
	            motionLeaveImmediately = props.motionLeaveImmediately;

	        var newState = {
	          prevProps: props
	        };

	        // Appear
	        if (!prevProps && visible && motionAppear) {
	          newState.status = STATUS_APPEAR;
	          newState.statusActive = false;
	          newState.newStatus = true;
	        }

	        // Enter
	        if (prevProps && !prevProps.visible && visible && motionEnter) {
	          newState.status = STATUS_ENTER;
	          newState.statusActive = false;
	          newState.newStatus = true;
	        }

	        // Leave
	        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
	          newState.status = STATUS_LEAVE;
	          newState.statusActive = false;
	          newState.newStatus = true;
	        }

	        return newState;
	      }
	    }]);

	    return CSSMotion;
	  }(React__default.Component);

	  CSSMotion.propTypes = {
	    visible: propTypes.bool,
	    children: propTypes.func,
	    motionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
	    motionAppear: propTypes.bool,
	    motionEnter: propTypes.bool,
	    motionLeave: propTypes.bool,
	    motionLeaveImmediately: propTypes.bool, // Trigger leave motion immediately
	    onAppearStart: propTypes.func,
	    onAppearActive: propTypes.func,
	    onAppearEnd: propTypes.func,
	    onEnterStart: propTypes.func,
	    onEnterActive: propTypes.func,
	    onEnterEnd: propTypes.func,
	    onLeaveStart: propTypes.func,
	    onLeaveActive: propTypes.func,
	    onLeaveEnd: propTypes.func
	  };
	  CSSMotion.defaultProps = {
	    visible: true,
	    motionEnter: true,
	    motionAppear: true,
	    motionLeave: true
	  };


	  polyfill(CSSMotion);

	  return CSSMotion;
	}

	genCSSMotion(supportTransition);

	var objectWithoutProperties = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};
	});

	var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

	var LazyRenderBox = function (_Component) {
	  _inherits$1(LazyRenderBox, _Component);

	  function LazyRenderBox() {
	    _classCallCheck$1(this, LazyRenderBox);

	    return _possibleConstructorReturn$1(this, _Component.apply(this, arguments));
	  }

	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };

	  LazyRenderBox.prototype.render = function render() {
	    var _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

	    if (hiddenClassName || React__default.Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return React__default.createElement('div', props);
	    }

	    return React__default.Children.only(props.children);
	  };

	  return LazyRenderBox;
	}(React.Component);

	LazyRenderBox.propTypes = {
	  children: propTypes.any,
	  className: propTypes.string,
	  visible: propTypes.bool,
	  hiddenClassName: propTypes.string
	};

	var PopupInner = function (_Component) {
	  _inherits$1(PopupInner, _Component);

	  function PopupInner() {
	    _classCallCheck$1(this, PopupInner);

	    return _possibleConstructorReturn$1(this, _Component.apply(this, arguments));
	  }

	  PopupInner.prototype.render = function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return React__default.createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      React__default.createElement(
	        LazyRenderBox,
	        { className: props.prefixCls + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };

	  return PopupInner;
	}(React.Component);

	PopupInner.propTypes = {
	  hiddenClassName: propTypes.string,
	  className: propTypes.string,
	  prefixCls: propTypes.string,
	  onMouseEnter: propTypes.func,
	  onMouseLeave: propTypes.func,
	  children: propTypes.any
	};

	function isPointsEq(a1, a2, isAlignPoint) {
	  if (isAlignPoint) {
	    return a1[0] === a2[0];
	  }
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}

	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends$1({}, baseAlign, align);
	}

	function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

	function saveRef(name, component) {
	  this[name] = component;
	}

	var Popup = function (_Component) {
	  _inherits$1(Popup, _Component);

	  function Popup(props) {
	    _classCallCheck$1(this, Popup);

	    var _this = _possibleConstructorReturn$1(this, _Component.call(this, props));

	    _initialiseProps.call(_this);

	    _this.state = {
	      // Used for stretch
	      stretchChecked: false,
	      targetWidth: undefined,
	      targetHeight: undefined
	    };

	    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
	    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
	    return _this;
	  }

	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	    this.setStretchSize();
	  };

	  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.setStretchSize();
	  };

	  // Record size if stretch needed


	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return ReactDOM__default.findDOMNode(this.popupInstance);
	  };

	  // `target` on `rc-align` can accept as a function to get the bind element or a point.
	  // ref: https://www.npmjs.com/package/rc-align


	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };

	  Popup.prototype.getPopupElement = function getPopupElement() {
	    var _this2 = this;

	    var savePopupRef = this.savePopupRef;
	    var _state = this.state,
	        stretchChecked = _state.stretchChecked,
	        targetHeight = _state.targetHeight,
	        targetWidth = _state.targetWidth;
	    var _props = this.props,
	        align = _props.align,
	        visible = _props.visible,
	        prefixCls = _props.prefixCls,
	        style = _props.style,
	        getClassNameFromAlign = _props.getClassNameFromAlign,
	        destroyPopupOnHide = _props.destroyPopupOnHide,
	        stretch = _props.stretch,
	        children = _props.children,
	        onMouseEnter = _props.onMouseEnter,
	        onMouseLeave = _props.onMouseLeave;

	    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';

	    if (!visible) {
	      this.currentAlignClassName = null;
	    }

	    var sizeStyle = {};
	    if (stretch) {
	      // Stretch with target
	      if (stretch.indexOf('height') !== -1) {
	        sizeStyle.height = targetHeight;
	      } else if (stretch.indexOf('minHeight') !== -1) {
	        sizeStyle.minHeight = targetHeight;
	      }
	      if (stretch.indexOf('width') !== -1) {
	        sizeStyle.width = targetWidth;
	      } else if (stretch.indexOf('minWidth') !== -1) {
	        sizeStyle.minWidth = targetWidth;
	      }

	      // Delay force align to makes ui smooth
	      if (!stretchChecked) {
	        sizeStyle.visibility = 'hidden';
	        raf_1(function () {
	          if (_this2.alignInstance) {
	            _this2.alignInstance.forceAlign();
	          }
	        });
	      }
	    }

	    var newStyle = _extends$1({}, sizeStyle, style, this.getZIndexStyle());

	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: savePopupRef,
	      onMouseEnter: onMouseEnter,
	      onMouseLeave: onMouseLeave,
	      style: newStyle
	    };

	    if (destroyPopupOnHide) {
	      return React__default.createElement(
	        Animate,
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName(),
	          onLeave: this.onAnimateLeaved
	        },
	        visible ? React__default.createElement(
	          Align,
	          {
	            target: this.getAlignTarget(),
	            key: 'popup',
	            ref: this.saveAlignRef,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          React__default.createElement(
	            PopupInner,
	            _extends$1({
	              visible: true
	            }, popupInnerProps),
	            children
	          )
	        ) : null
	      );
	    }

	    return React__default.createElement(
	      Animate,
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible',
	        onLeave: this.onAnimateLeaved
	      },
	      React__default.createElement(
	        Align,
	        {
	          target: this.getAlignTarget(),
	          key: 'popup',
	          ref: this.saveAlignRef,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        React__default.createElement(
	          PopupInner,
	          _extends$1({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          children
	        )
	      )
	    );
	  };

	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };

	  Popup.prototype.getMaskElement = function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = React__default.createElement(LazyRenderBox, {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = React__default.createElement(
	          Animate,
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };

	  Popup.prototype.render = function render() {
	    return React__default.createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };

	  return Popup;
	}(React.Component);

	Popup.propTypes = {
	  visible: propTypes.bool,
	  style: propTypes.object,
	  getClassNameFromAlign: propTypes.func,
	  onAlign: propTypes.func,
	  getRootDomNode: propTypes.func,
	  onMouseEnter: propTypes.func,
	  align: propTypes.any,
	  destroyPopupOnHide: propTypes.bool,
	  className: propTypes.string,
	  prefixCls: propTypes.string,
	  onMouseLeave: propTypes.func,
	  stretch: propTypes.string,
	  children: propTypes.node,
	  point: propTypes.shape({
	    pageX: propTypes.number,
	    pageY: propTypes.number
	  })
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.onAlign = function (popupDomNode, align) {
	    var props = _this3.props;
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    // FIX: https://github.com/react-component/trigger/issues/56
	    // FIX: https://github.com/react-component/tooltip/issues/79
	    if (_this3.currentAlignClassName !== currentAlignClassName) {
	      _this3.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = _this3.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };

	  this.onAnimateLeaved = function () {
	    var stretch = _this3.props.stretch;
	    var stretchChecked = _this3.state.stretchChecked;

	    if (stretch && stretchChecked) {
	      _this3.setState({ stretchChecked: false });
	    }
	  };

	  this.setStretchSize = function () {
	    var getRootDomNode = _this3.props.getRootDomNode;
	    var _state2 = _this3.state,
	        stretchChecked = _state2.stretchChecked,
	        targetHeight = _state2.targetHeight,
	        targetWidth = _state2.targetWidth;


	    var $ele = getRootDomNode();
	    if (!$ele) return;

	    var height = $ele.offsetHeight;
	    var width = $ele.offsetWidth;

	    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
	      _this3.setState({
	        stretchChecked: true,
	        targetHeight: height,
	        targetWidth: width
	      });
	    }
	  };

	  this.getTargetElement = function () {
	    return _this3.props.getRootDomNode();
	  };

	  this.getAlignTarget = function () {
	    var point = _this3.props.point;

	    if (point) {
	      return point;
	    }
	    return _this3.getTargetElement;
	  };
	};

	var ContainerRender = function (_React$Component) {
	  _inherits$1(ContainerRender, _React$Component);

	  function ContainerRender() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck$1(this, ContainerRender);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
	      if (_this.container) {
	        ReactDOM__default.unmountComponentAtNode(_this.container);
	        _this.container.parentNode.removeChild(_this.container);
	        _this.container = null;
	      }
	    }, _this.renderComponent = function (props, ready) {
	      var _this$props = _this.props,
	          visible = _this$props.visible,
	          getComponent = _this$props.getComponent,
	          forceRender = _this$props.forceRender,
	          getContainer = _this$props.getContainer,
	          parent = _this$props.parent;

	      if (visible || parent._component || forceRender) {
	        if (!_this.container) {
	          _this.container = getContainer();
	        }
	        ReactDOM__default.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
	          if (ready) {
	            ready.call(this);
	          }
	        });
	      }
	    }, _temp), _possibleConstructorReturn$1(_this, _ret);
	  }

	  _createClass$1(ContainerRender, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.autoDestroy) {
	        this.removeContainer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children({
	        renderComponent: this.renderComponent,
	        removeContainer: this.removeContainer
	      });
	    }
	  }]);

	  return ContainerRender;
	}(React__default.Component);

	ContainerRender.propTypes = {
	  autoMount: propTypes.bool,
	  autoDestroy: propTypes.bool,
	  visible: propTypes.bool,
	  forceRender: propTypes.bool,
	  parent: propTypes.any,
	  getComponent: propTypes.func.isRequired,
	  getContainer: propTypes.func.isRequired,
	  children: propTypes.func.isRequired
	};
	ContainerRender.defaultProps = {
	  autoMount: true,
	  autoDestroy: true,
	  forceRender: false
	};

	var Portal = function (_React$Component) {
	  _inherits$1(Portal, _React$Component);

	  function Portal() {
	    _classCallCheck$1(this, Portal);

	    return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }

	  _createClass$1(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.createContainer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var didUpdate = this.props.didUpdate;

	      if (didUpdate) {
	        didUpdate(prevProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeContainer();
	    }
	  }, {
	    key: 'createContainer',
	    value: function createContainer() {
	      this._container = this.props.getContainer();
	      this.forceUpdate();
	    }
	  }, {
	    key: 'removeContainer',
	    value: function removeContainer() {
	      if (this._container) {
	        this._container.parentNode.removeChild(this._container);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this._container) {
	        return ReactDOM__default.createPortal(this.props.children, this._container);
	      }
	      return null;
	    }
	  }]);

	  return Portal;
	}(React__default.Component);

	Portal.propTypes = {
	  getContainer: propTypes.func.isRequired,
	  children: propTypes.node.isRequired,
	  didUpdate: propTypes.func
	};

	function noop() {}

	function returnEmptyString() {
	  return '';
	}

	function returnDocument() {
	  return window.document;
	}

	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

	var IS_REACT_16 = !!ReactDOM.createPortal;

	var Trigger = function (_React$Component) {
	  _inherits$1(Trigger, _React$Component);

	  function Trigger(props) {
	    _classCallCheck$1(this, Trigger);

	    var _this = _possibleConstructorReturn$1(this, _React$Component.call(this, props));

	    _initialiseProps$1.call(_this);

	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }

	    _this.prevPopupVisible = popupVisible;

	    _this.state = {
	      popupVisible: popupVisible
	    };
	    return _this;
	  }

	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };

	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };

	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;

	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };

	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    };
	    if (!IS_REACT_16) {
	      this.renderComponent(null, triggerAfterPopupVisibleChange);
	    }

	    this.prevPopupVisible = prevState.popupVisible;

	    // We must listen to `mousedown` or `touchstart`, edge case:
	    // https://github.com/ant-design/ant-design/issues/5804
	    // https://github.com/react-component/calendar/issues/250
	    // https://github.com/react-component/trigger/issues/50
	    if (state.popupVisible) {
	      var currentDocument = void 0;
	      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
	        currentDocument = props.getDocument();
	        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
	      }
	      // always hide on mobile
	      if (!this.touchOutsideHandler) {
	        currentDocument = currentDocument || props.getDocument();
	        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
	      }
	      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
	      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
	        currentDocument = currentDocument || props.getDocument();
	        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
	      }
	      // close popup when trigger type contains 'onContextMenu' and window is blur.
	      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
	        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
	      }
	      return;
	    }

	    this.clearOutsideHandler();
	  };

	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    this.clearOutsideHandler();
	  };

	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component && this._component.getPopupDomNode) {
	      return this._component.getPopupDomNode();
	    }
	    return null;
	  };

	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };

	  /**
	   * @param popupVisible    Show or not the popup element
	   * @param event           SyntheticEvent, used for `pointAlign`
	   */
	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
	    var alignPoint = this.props.alignPoint;


	    this.clearDelayTimer();

	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({ popupVisible: popupVisible });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }

	    // Always record the point position since mouseEnterDelay will delay the show
	    if (alignPoint && event) {
	      this.setPoint(event);
	    }
	  };

	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
	    var _this3 = this;

	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible, point);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible, event);
	    }
	  };

	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };

	  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	    }

	    if (this.contextMenuOutsideHandler1) {
	      this.contextMenuOutsideHandler1.remove();
	      this.contextMenuOutsideHandler1 = null;
	    }

	    if (this.contextMenuOutsideHandler2) {
	      this.contextMenuOutsideHandler2.remove();
	      this.contextMenuOutsideHandler2 = null;
	    }

	    if (this.touchOutsideHandler) {
	      this.touchOutsideHandler.remove();
	      this.touchOutsideHandler = null;
	    }
	  };

	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };

	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    var _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
	    var _props2 = this.props,
	        action = _props2.action,
	        showAction = _props2.showAction;

	    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
	  };

	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    var _props3 = this.props,
	        action = _props3.action,
	        hideAction = _props3.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    var _props4 = this.props,
	        action = _props4.action,
	        showAction = _props4.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };

	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    var _props5 = this.props,
	        action = _props5.action,
	        hideAction = _props5.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };

	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    var _props6 = this.props,
	        action = _props6.action,
	        showAction = _props6.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };

	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    var _props7 = this.props,
	        action = _props7.action,
	        hideAction = _props7.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };

	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this._component && this._component.alignInstance) {
	      this._component.alignInstance.forceAlign();
	    }
	  };

	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };

	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };

	  Trigger.prototype.render = function render() {
	    var _this4 = this;

	    var popupVisible = this.state.popupVisible;
	    var _props8 = this.props,
	        children = _props8.children,
	        forceRender = _props8.forceRender,
	        alignPoint = _props8.alignPoint,
	        className = _props8.className;

	    var child = React__default.Children.only(children);
	    var newChildProps = { key: 'trigger' };

	    if (this.isContextMenuToShow()) {
	      newChildProps.onContextMenu = this.onContextMenu;
	    } else {
	      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
	    }

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	      if (alignPoint) {
	        newChildProps.onMouseMove = this.onMouseMove;
	      }
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }

	    var childrenClassName = classnames(child && child.props && child.props.className, className);
	    if (childrenClassName) {
	      newChildProps.className = childrenClassName;
	    }
	    var trigger = React__default.cloneElement(child, newChildProps);

	    if (!IS_REACT_16) {
	      return React__default.createElement(
	        ContainerRender,
	        {
	          parent: this,
	          visible: popupVisible,
	          autoMount: false,
	          forceRender: forceRender,
	          getComponent: this.getComponent,
	          getContainer: this.getContainer
	        },
	        function (_ref2) {
	          var renderComponent = _ref2.renderComponent;

	          _this4.renderComponent = renderComponent;
	          return trigger;
	        }
	      );
	    }

	    var portal = void 0;
	    // prevent unmounting after it's rendered
	    if (popupVisible || this._component || forceRender) {
	      portal = React__default.createElement(
	        Portal,
	        {
	          key: 'portal',
	          getContainer: this.getContainer,
	          didUpdate: this.handlePortalUpdate
	        },
	        this.getComponent()
	      );
	    }

	    return [trigger, portal];
	  };

	  return Trigger;
	}(React__default.Component);

	Trigger.propTypes = {
	  children: propTypes.any,
	  action: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
	  showAction: propTypes.any,
	  hideAction: propTypes.any,
	  getPopupClassNameFromAlign: propTypes.any,
	  onPopupVisibleChange: propTypes.func,
	  afterPopupVisibleChange: propTypes.func,
	  popup: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
	  popupStyle: propTypes.object,
	  prefixCls: propTypes.string,
	  popupClassName: propTypes.string,
	  className: propTypes.string,
	  popupPlacement: propTypes.string,
	  builtinPlacements: propTypes.object,
	  popupTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
	  popupAnimation: propTypes.any,
	  mouseEnterDelay: propTypes.number,
	  mouseLeaveDelay: propTypes.number,
	  zIndex: propTypes.number,
	  focusDelay: propTypes.number,
	  blurDelay: propTypes.number,
	  getPopupContainer: propTypes.func,
	  getDocument: propTypes.func,
	  forceRender: propTypes.bool,
	  destroyPopupOnHide: propTypes.bool,
	  mask: propTypes.bool,
	  maskClosable: propTypes.bool,
	  onPopupAlign: propTypes.func,
	  popupAlign: propTypes.object,
	  popupVisible: propTypes.bool,
	  defaultPopupVisible: propTypes.bool,
	  maskTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
	  maskAnimation: propTypes.string,
	  stretch: propTypes.string,
	  alignPoint: propTypes.bool // Maybe we can support user pass position in the future
	};
	Trigger.defaultProps = {
	  prefixCls: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  getDocument: returnDocument,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: []
	};

	var _initialiseProps$1 = function _initialiseProps() {
	  var _this5 = this;

	  this.onMouseEnter = function (e) {
	    var mouseEnterDelay = _this5.props.mouseEnterDelay;

	    _this5.fireEvents('onMouseEnter', e);
	    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
	  };

	  this.onMouseMove = function (e) {
	    _this5.fireEvents('onMouseMove', e);
	    _this5.setPoint(e);
	  };

	  this.onMouseLeave = function (e) {
	    _this5.fireEvents('onMouseLeave', e);
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };

	  this.onPopupMouseEnter = function () {
	    _this5.clearDelayTimer();
	  };

	  this.onPopupMouseLeave = function (e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && contains(_this5._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };

	  this.onFocus = function (e) {
	    _this5.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    _this5.clearDelayTimer();
	    if (_this5.isFocusToShow()) {
	      _this5.focusTime = Date.now();
	      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
	    }
	  };

	  this.onMouseDown = function (e) {
	    _this5.fireEvents('onMouseDown', e);
	    _this5.preClickTime = Date.now();
	  };

	  this.onTouchStart = function (e) {
	    _this5.fireEvents('onTouchStart', e);
	    _this5.preTouchTime = Date.now();
	  };

	  this.onBlur = function (e) {
	    _this5.fireEvents('onBlur', e);
	    _this5.clearDelayTimer();
	    if (_this5.isBlurToHide()) {
	      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
	    }
	  };

	  this.onContextMenu = function (e) {
	    e.preventDefault();
	    _this5.fireEvents('onContextMenu', e);
	    _this5.setPopupVisible(true, e);
	  };

	  this.onContextMenuClose = function () {
	    if (_this5.isContextMenuToShow()) {
	      _this5.close();
	    }
	  };

	  this.onClick = function (event) {
	    _this5.fireEvents('onClick', event);
	    // focus will trigger click
	    if (_this5.focusTime) {
	      var preTime = void 0;
	      if (_this5.preClickTime && _this5.preTouchTime) {
	        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
	      } else if (_this5.preClickTime) {
	        preTime = _this5.preClickTime;
	      } else if (_this5.preTouchTime) {
	        preTime = _this5.preTouchTime;
	      }
	      if (Math.abs(preTime - _this5.focusTime) < 20) {
	        return;
	      }
	      _this5.focusTime = 0;
	    }
	    _this5.preClickTime = 0;
	    _this5.preTouchTime = 0;
	    if (event && event.preventDefault) {
	      event.preventDefault();
	    }
	    var nextVisible = !_this5.state.popupVisible;
	    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
	      _this5.setPopupVisible(!_this5.state.popupVisible, event);
	    }
	  };

	  this.onDocumentClick = function (event) {
	    if (_this5.props.mask && !_this5.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = ReactDOM.findDOMNode(_this5);
	    var popupNode = _this5.getPopupDomNode();
	    if (!contains(root, target) && !contains(popupNode, target)) {
	      _this5.close();
	    }
	  };

	  this.getRootDomNode = function () {
	    return ReactDOM.findDOMNode(_this5);
	  };

	  this.getPopupClassNameFromAlign = function (align) {
	    var className = [];
	    var _props9 = _this5.props,
	        popupPlacement = _props9.popupPlacement,
	        builtinPlacements = _props9.builtinPlacements,
	        prefixCls = _props9.prefixCls,
	        alignPoint = _props9.alignPoint,
	        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

	    if (popupPlacement && builtinPlacements) {
	      className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
	    }
	    if (getPopupClassNameFromAlign) {
	      className.push(getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };

	  this.getComponent = function () {
	    var _props10 = _this5.props,
	        prefixCls = _props10.prefixCls,
	        destroyPopupOnHide = _props10.destroyPopupOnHide,
	        popupClassName = _props10.popupClassName,
	        action = _props10.action,
	        onPopupAlign = _props10.onPopupAlign,
	        popupAnimation = _props10.popupAnimation,
	        popupTransitionName = _props10.popupTransitionName,
	        popupStyle = _props10.popupStyle,
	        mask = _props10.mask,
	        maskAnimation = _props10.maskAnimation,
	        maskTransitionName = _props10.maskTransitionName,
	        zIndex = _props10.zIndex,
	        popup = _props10.popup,
	        stretch = _props10.stretch,
	        alignPoint = _props10.alignPoint;
	    var _state = _this5.state,
	        popupVisible = _state.popupVisible,
	        point = _state.point;


	    var align = _this5.getPopupAlign();

	    var mouseProps = {};
	    if (_this5.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
	    }
	    if (_this5.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
	    }

	    return React__default.createElement(
	      Popup,
	      _extends$1({
	        prefixCls: prefixCls,
	        destroyPopupOnHide: destroyPopupOnHide,
	        visible: popupVisible,
	        point: alignPoint && point,
	        className: popupClassName,
	        action: action,
	        align: align,
	        onAlign: onPopupAlign,
	        animation: popupAnimation,
	        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
	      }, mouseProps, {
	        stretch: stretch,
	        getRootDomNode: _this5.getRootDomNode,
	        style: popupStyle,
	        mask: mask,
	        zIndex: zIndex,
	        transitionName: popupTransitionName,
	        maskAnimation: maskAnimation,
	        maskTransitionName: maskTransitionName,
	        ref: _this5.savePopup
	      }),
	      typeof popup === 'function' ? popup() : popup
	    );
	  };

	  this.getContainer = function () {
	    var props = _this5.props;

	    var popupContainer = document.createElement('div');
	    // Make sure default popup container will never cause scrollbar appearing
	    // https://github.com/react-component/trigger/issues/41
	    popupContainer.style.position = 'absolute';
	    popupContainer.style.top = '0';
	    popupContainer.style.left = '0';
	    popupContainer.style.width = '100%';
	    var mountNode = props.getPopupContainer ? props.getPopupContainer(ReactDOM.findDOMNode(_this5)) : props.getDocument().body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };

	  this.setPoint = function (point) {
	    var alignPoint = _this5.props.alignPoint;

	    if (!alignPoint || !point) return;

	    _this5.setState({
	      point: {
	        pageX: point.pageX,
	        pageY: point.pageY
	      }
	    });
	  };

	  this.handlePortalUpdate = function () {
	    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
	      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
	    }
	  };

	  this.savePopup = function (node) {
	    _this5._component = node;
	  };
	};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning$1 = function() {};

	if (__DEV__) {
	  var printWarning$3 = function printWarning(format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    var argIndex = 0;
	    var message = 'Warning: ' +
	      format.replace(/%s/g, function() {
	        return args[argIndex++];
	      });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning$1 = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	          '`warning(condition, format, ...args)` requires a warning ' +
	          'message argument'
	      );
	    }
	    if (!condition) {
	      printWarning$3.apply(null, [format].concat(args));
	    }
	  };
	}

	var warning_1$1 = warning$1;

	var toArray_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toArray;



	var _react2 = _interopRequireDefault(React__default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}
	module.exports = exports['default'];
	});

	var toNodeArray = unwrapExports(toArray_1);

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning$2 = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning$2 = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	var browser = warning$2;

	var contextTypes = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nodeContextTypes = exports.treeContextTypes = undefined;



	var _extends3 = _interopRequireDefault(_extends);



	var _propTypes2 = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Thought we still use `cloneElement` to pass `key`,
	 * other props can pass with context for future refactor.
	 */
	var treeContextTypes = exports.treeContextTypes = {
	  rcTree: _propTypes2['default'].shape({
	    root: _propTypes2['default'].object,

	    prefixCls: _propTypes2['default'].string,
	    selectable: _propTypes2['default'].bool,
	    showIcon: _propTypes2['default'].bool,
	    icon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
	    draggable: _propTypes2['default'].bool,
	    checkable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
	    checkStrictly: _propTypes2['default'].bool,
	    disabled: _propTypes2['default'].bool,
	    openTransitionName: _propTypes2['default'].string,
	    openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),

	    loadData: _propTypes2['default'].func,
	    filterTreeNode: _propTypes2['default'].func,
	    renderTreeNode: _propTypes2['default'].func,

	    isKeyChecked: _propTypes2['default'].func,

	    onNodeClick: _propTypes2['default'].func,
	    onNodeDoubleClick: _propTypes2['default'].func,
	    onNodeExpand: _propTypes2['default'].func,
	    onNodeSelect: _propTypes2['default'].func,
	    onNodeCheck: _propTypes2['default'].func,
	    onNodeMouseEnter: _propTypes2['default'].func,
	    onNodeMouseLeave: _propTypes2['default'].func,
	    onNodeContextMenu: _propTypes2['default'].func,
	    onNodeDragStart: _propTypes2['default'].func,
	    onNodeDragEnter: _propTypes2['default'].func,
	    onNodeDragOver: _propTypes2['default'].func,
	    onNodeDragLeave: _propTypes2['default'].func,
	    onNodeDragEnd: _propTypes2['default'].func,
	    onNodeDrop: _propTypes2['default'].func

	    // TODO: Remove this
	    // onBatchNodeCheck: PropTypes.func,
	    // onCheckConductFinished: PropTypes.func,

	    // Tree will store the entities when the treeNode refresh.
	    // User can pass the func to add more info to customize the additional info.
	    // processTreeEntity: PropTypes.func,
	  })
	}; /**
	    * Webpack has bug for import loop, which is not the same behavior as ES module.
	    * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
	    */

	var nodeContextTypes = exports.nodeContextTypes = (0, _extends3['default'])({}, treeContextTypes, {
	  rcTreeNode: _propTypes2['default'].shape({
	    onUpCheckConduct: _propTypes2['default'].func
	  })
	});
	});

	unwrapExports(contextTypes);
	var contextTypes_1 = contextTypes.nodeContextTypes;
	var contextTypes_2 = contextTypes.treeContextTypes;

	var TreeNode_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _defineProperty3 = _interopRequireDefault(defineProperty$5);



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



	var _extends3 = _interopRequireDefault(_extends);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck$1);



	var _createClass3 = _interopRequireDefault(createClass$1);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$1);



	var _inherits3 = _interopRequireDefault(inherits$1);



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _classnames2 = _interopRequireDefault(classnames);



	var _rcAnimate2 = _interopRequireDefault(Animate);



	var _toArray2 = _interopRequireDefault(toArray_1);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var ICON_OPEN = 'open';
	var ICON_CLOSE = 'close';

	var defaultTitle = '---';

	var TreeNode = function (_React$Component) {
	  (0, _inherits3['default'])(TreeNode, _React$Component);

	  function TreeNode(props) {
	    (0, _classCallCheck3['default'])(this, TreeNode);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

	    _initialiseProps.call(_this);

	    _this.state = {
	      dragNodeHighlight: false
	    };
	    return _this;
	  }

	  (0, _createClass3['default'])(TreeNode, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return (0, _extends3['default'])({}, this.context, {
	        rcTreeNode: {
	          // onUpCheckConduct: this.onUpCheckConduct,
	        }
	      });
	    }

	    // Isomorphic needn't load data in server side

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncLoadData(this.props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.syncLoadData(this.props);
	    }

	    // Disabled item still can be switch


	    // Drag usage

	  }, {
	    key: 'isSelectable',
	    value: function isSelectable() {
	      var selectable = this.props.selectable;
	      var treeSelectable = this.context.rcTree.selectable;

	      // Ignore when selectable is undefined or null

	      if (typeof selectable === 'boolean') {
	        return selectable;
	      }

	      return treeSelectable;
	    }

	    // Load data to avoid default expanded tree without data


	    // Switcher


	    // Checkbox


	    // Icon + Title


	    // Children list wrapped with `Animation`

	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var loading = this.props.loading;
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          dragOver = _props.dragOver,
	          dragOverGapTop = _props.dragOverGapTop,
	          dragOverGapBottom = _props.dragOverGapBottom,
	          isLeaf = _props.isLeaf,
	          expanded = _props.expanded,
	          selected = _props.selected,
	          checked = _props.checked,
	          halfChecked = _props.halfChecked,
	          otherProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);
	      var _context$rcTree = this.context.rcTree,
	          prefixCls = _context$rcTree.prefixCls,
	          filterTreeNode = _context$rcTree.filterTreeNode,
	          draggable = _context$rcTree.draggable;

	      var disabled = this.isDisabled();
	      var dataOrAriaAttributeProps = (0, util.getDataAndAria)(otherProps);

	      return _react2['default'].createElement(
	        'li',
	        (0, _extends3['default'])({
	          className: (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-checkbox-checked', checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-selected', selected), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-loading', loading), (0, _defineProperty3['default'])(_classNames, 'drag-over', !disabled && dragOver), (0, _defineProperty3['default'])(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty3['default'])(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty3['default'])(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

	          style: style,

	          role: 'treeitem',

	          onDragEnter: draggable ? this.onDragEnter : undefined,
	          onDragOver: draggable ? this.onDragOver : undefined,
	          onDragLeave: draggable ? this.onDragLeave : undefined,
	          onDrop: draggable ? this.onDrop : undefined,
	          onDragEnd: draggable ? this.onDragEnd : undefined
	        }, dataOrAriaAttributeProps),
	        this.renderSwitcher(),
	        this.renderCheckbox(),
	        this.renderSelector(),
	        this.renderChildren()
	      );
	    }
	  }]);
	  return TreeNode;
	}(_react2['default'].Component);

	TreeNode.propTypes = {
	  eventKey: _propTypes2['default'].string, // Pass by parent `cloneElement`
	  prefixCls: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  style: _propTypes2['default'].object,
	  root: _propTypes2['default'].object,
	  onSelect: _propTypes2['default'].func,

	  // By parent
	  expanded: _propTypes2['default'].bool,
	  selected: _propTypes2['default'].bool,
	  checked: _propTypes2['default'].bool,
	  loaded: _propTypes2['default'].bool,
	  loading: _propTypes2['default'].bool,
	  halfChecked: _propTypes2['default'].bool,
	  children: _propTypes2['default'].node,
	  title: _propTypes2['default'].node,
	  pos: _propTypes2['default'].string,
	  dragOver: _propTypes2['default'].bool,
	  dragOverGapTop: _propTypes2['default'].bool,
	  dragOverGapBottom: _propTypes2['default'].bool,

	  // By user
	  isLeaf: _propTypes2['default'].bool,
	  selectable: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  disableCheckbox: _propTypes2['default'].bool,
	  icon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
	  switcherIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func])
	};
	TreeNode.contextTypes = contextTypes.nodeContextTypes;
	TreeNode.childContextTypes = contextTypes.nodeContextTypes;
	TreeNode.defaultProps = {
	  title: defaultTitle
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.onSelectorClick = function (e) {
	    // Click trigger before select/check operation
	    var onNodeClick = _this2.context.rcTree.onNodeClick;

	    onNodeClick(e, _this2);

	    if (_this2.isSelectable()) {
	      _this2.onSelect(e);
	    } else {
	      _this2.onCheck(e);
	    }
	  };

	  this.onSelectorDoubleClick = function (e) {
	    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

	    onNodeDoubleClick(e, _this2);
	  };

	  this.onSelect = function (e) {
	    if (_this2.isDisabled()) return;

	    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

	    e.preventDefault();
	    onNodeSelect(e, _this2);
	  };

	  this.onCheck = function (e) {
	    if (_this2.isDisabled()) return;

	    var _props2 = _this2.props,
	        disableCheckbox = _props2.disableCheckbox,
	        checked = _props2.checked;
	    var _context$rcTree2 = _this2.context.rcTree,
	        checkable = _context$rcTree2.checkable,
	        onNodeCheck = _context$rcTree2.onNodeCheck;


	    if (!checkable || disableCheckbox) return;

	    e.preventDefault();
	    var targetChecked = !checked;
	    onNodeCheck(e, _this2, targetChecked);
	  };

	  this.onMouseEnter = function (e) {
	    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

	    onNodeMouseEnter(e, _this2);
	  };

	  this.onMouseLeave = function (e) {
	    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

	    onNodeMouseLeave(e, _this2);
	  };

	  this.onContextMenu = function (e) {
	    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

	    onNodeContextMenu(e, _this2);
	  };

	  this.onDragStart = function (e) {
	    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: true
	    });
	    onNodeDragStart(e, _this2);

	    try {
	      // ie throw error
	      // firefox-need-it
	      e.dataTransfer.setData('text/plain', '');
	    } catch (error) {
	      // empty
	    }
	  };

	  this.onDragEnter = function (e) {
	    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


	    e.preventDefault();
	    e.stopPropagation();
	    onNodeDragEnter(e, _this2);
	  };

	  this.onDragOver = function (e) {
	    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


	    e.preventDefault();
	    e.stopPropagation();
	    onNodeDragOver(e, _this2);
	  };

	  this.onDragLeave = function (e) {
	    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


	    e.stopPropagation();
	    onNodeDragLeave(e, _this2);
	  };

	  this.onDragEnd = function (e) {
	    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: false
	    });
	    onNodeDragEnd(e, _this2);
	  };

	  this.onDrop = function (e) {
	    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


	    e.preventDefault();
	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: false
	    });
	    onNodeDrop(e, _this2);
	  };

	  this.onExpand = function (e) {
	    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

	    onNodeExpand(e, _this2);
	  };

	  this.setSelectHandle = function (node) {
	    _this2.selectHandle = node;
	  };

	  this.getNodeChildren = function () {
	    var children = _this2.props.children;

	    var originList = (0, _toArray2['default'])(children).filter(function (node) {
	      return node;
	    });
	    var targetList = (0, util.getNodeChildren)(originList);

	    if (originList.length !== targetList.length) {
	      (0, util.warnOnlyTreeNode)();
	    }

	    return targetList;
	  };

	  this.getNodeState = function () {
	    var expanded = _this2.props.expanded;


	    if (_this2.isLeaf()) {
	      return null;
	    }

	    return expanded ? ICON_OPEN : ICON_CLOSE;
	  };

	  this.isLeaf = function () {
	    var _props3 = _this2.props,
	        isLeaf = _props3.isLeaf,
	        loaded = _props3.loaded;
	    var loadData = _this2.context.rcTree.loadData;


	    var hasChildren = _this2.getNodeChildren().length !== 0;

	    if (isLeaf === false) {
	      return false;
	    }

	    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
	  };

	  this.isDisabled = function () {
	    var disabled = _this2.props.disabled;
	    var treeDisabled = _this2.context.rcTree.disabled;

	    // Follow the logic of Selectable

	    if (disabled === false) {
	      return false;
	    }

	    return !!(treeDisabled || disabled);
	  };

	  this.syncLoadData = function (props) {
	    var expanded = props.expanded,
	        loading = props.loading,
	        loaded = props.loaded;
	    var _context$rcTree3 = _this2.context.rcTree,
	        loadData = _context$rcTree3.loadData,
	        onNodeLoad = _context$rcTree3.onNodeLoad;


	    if (loading) return;

	    // read from state to avoid loadData at same time
	    if (loadData && expanded && !_this2.isLeaf()) {
	      // We needn't reload data when has children in sync logic
	      // It's only needed in node expanded
	      var hasChildren = _this2.getNodeChildren().length !== 0;
	      if (!hasChildren && !loaded) {
	        onNodeLoad(_this2);
	      }
	    }
	  };

	  this.renderSwitcher = function () {
	    var _props4 = _this2.props,
	        expanded = _props4.expanded,
	        switcherIconFromProps = _props4.switcherIcon;
	    var _context$rcTree4 = _this2.context.rcTree,
	        prefixCls = _context$rcTree4.prefixCls,
	        switcherIconFromCtx = _context$rcTree4.switcherIcon;


	    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

	    if (_this2.isLeaf()) {
	      return _react2['default'].createElement(
	        'span',
	        { className: (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
	        typeof switcherIcon === 'function' ? _react2['default'].createElement(switcherIcon, (0, _extends3['default'])({}, _this2.props, { isLeaf: true })) : switcherIcon
	      );
	    }

	    var switcherCls = (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
	    return _react2['default'].createElement(
	      'span',
	      { onClick: _this2.onExpand, className: switcherCls },
	      typeof switcherIcon === 'function' ? _react2['default'].createElement(switcherIcon, (0, _extends3['default'])({}, _this2.props, { isLeaf: false })) : switcherIcon
	    );
	  };

	  this.renderCheckbox = function () {
	    var _props5 = _this2.props,
	        checked = _props5.checked,
	        halfChecked = _props5.halfChecked,
	        disableCheckbox = _props5.disableCheckbox;
	    var _context$rcTree5 = _this2.context.rcTree,
	        prefixCls = _context$rcTree5.prefixCls,
	        checkable = _context$rcTree5.checkable;

	    var disabled = _this2.isDisabled();

	    if (!checkable) return null;

	    // [Legacy] Custom element should be separate with `checkable` in future
	    var $custom = typeof checkable !== 'boolean' ? checkable : null;

	    return _react2['default'].createElement(
	      'span',
	      {
	        className: (0, _classnames2['default'])(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
	        onClick: _this2.onCheck
	      },
	      $custom
	    );
	  };

	  this.renderIcon = function () {
	    var loading = _this2.props.loading;
	    var prefixCls = _this2.context.rcTree.prefixCls;


	    return _react2['default'].createElement('span', {
	      className: (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
	    });
	  };

	  this.renderSelector = function () {
	    var dragNodeHighlight = _this2.state.dragNodeHighlight;
	    var _props6 = _this2.props,
	        title = _props6.title,
	        selected = _props6.selected,
	        icon = _props6.icon,
	        loading = _props6.loading;
	    var _context$rcTree6 = _this2.context.rcTree,
	        prefixCls = _context$rcTree6.prefixCls,
	        showIcon = _context$rcTree6.showIcon,
	        treeIcon = _context$rcTree6.icon,
	        draggable = _context$rcTree6.draggable,
	        loadData = _context$rcTree6.loadData;

	    var disabled = _this2.isDisabled();

	    var wrapClass = prefixCls + '-node-content-wrapper';

	    // Icon - Still show loading icon when loading without showIcon
	    var $icon = void 0;

	    if (showIcon) {
	      var currentIcon = icon || treeIcon;

	      $icon = currentIcon ? _react2['default'].createElement(
	        'span',
	        {
	          className: (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__customize')
	        },
	        typeof currentIcon === 'function' ? _react2['default'].createElement(currentIcon, (0, _extends3['default'])({}, _this2.props)) : currentIcon
	      ) : _this2.renderIcon();
	    } else if (loadData && loading) {
	      $icon = _this2.renderIcon();
	    }

	    // Title
	    var $title = _react2['default'].createElement(
	      'span',
	      { className: prefixCls + '-title' },
	      title
	    );

	    return _react2['default'].createElement(
	      'span',
	      {
	        ref: _this2.setSelectHandle,
	        title: typeof title === 'string' ? title : '',
	        className: (0, _classnames2['default'])('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
	        draggable: !disabled && draggable || undefined,
	        'aria-grabbed': !disabled && draggable || undefined,

	        onMouseEnter: _this2.onMouseEnter,
	        onMouseLeave: _this2.onMouseLeave,
	        onContextMenu: _this2.onContextMenu,
	        onClick: _this2.onSelectorClick,
	        onDoubleClick: _this2.onSelectorDoubleClick,
	        onDragStart: draggable ? _this2.onDragStart : undefined
	      },
	      $icon,
	      $title
	    );
	  };

	  this.renderChildren = function () {
	    var _props7 = _this2.props,
	        expanded = _props7.expanded,
	        pos = _props7.pos;
	    var _context$rcTree7 = _this2.context.rcTree,
	        prefixCls = _context$rcTree7.prefixCls,
	        openTransitionName = _context$rcTree7.openTransitionName,
	        openAnimation = _context$rcTree7.openAnimation,
	        renderTreeNode = _context$rcTree7.renderTreeNode;


	    var animProps = {};
	    if (openTransitionName) {
	      animProps.transitionName = openTransitionName;
	    } else if (typeof openAnimation === 'object') {
	      animProps.animation = (0, _extends3['default'])({}, openAnimation);
	    }

	    // Children TreeNode
	    var nodeList = _this2.getNodeChildren();

	    if (nodeList.length === 0) {
	      return null;
	    }

	    var $children = void 0;
	    if (expanded) {
	      $children = _react2['default'].createElement(
	        'ul',
	        {
	          className: (0, _classnames2['default'])(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
	          'data-expanded': expanded,
	          role: 'group'
	        },
	        (0, util.mapChildren)(nodeList, function (node, index) {
	          return renderTreeNode(node, index, pos);
	        })
	      );
	    }

	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      (0, _extends3['default'])({}, animProps, {
	        showProp: 'data-expanded',
	        component: ''
	      }),
	      $children
	    );
	  };
	};

	TreeNode.isTreeNode = 1;

	(0, reactLifecyclesCompat_es.polyfill)(TreeNode);

	exports['default'] = TreeNode;
	module.exports = exports['default'];
	});

	unwrapExports(TreeNode_1);

	var util = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);

	exports.warnOnlyTreeNode = warnOnlyTreeNode;
	exports.arrDel = arrDel;
	exports.arrAdd = arrAdd;
	exports.posToArr = posToArr;
	exports.getPosition = getPosition;
	exports.isTreeNode = isTreeNode;
	exports.getNodeChildren = getNodeChildren;
	exports.isCheckDisabled = isCheckDisabled;
	exports.traverseTreeNodes = traverseTreeNodes;
	exports.mapChildren = mapChildren;
	exports.getDragNodesKeys = getDragNodesKeys;
	exports.calcDropPosition = calcDropPosition;
	exports.calcSelectedKeys = calcSelectedKeys;
	exports.convertDataToTree = convertDataToTree;
	exports.convertTreeToEntities = convertTreeToEntities;
	exports.parseCheckedKeys = parseCheckedKeys;
	exports.conductCheck = conductCheck;
	exports.conductExpandParent = conductExpandParent;
	exports.getDataAndAria = getDataAndAria;



	var _react2 = _interopRequireDefault(React__default);



	var _toArray2 = _interopRequireDefault(toArray_1);



	var _warning2 = _interopRequireDefault(browser);



	var _TreeNode2 = _interopRequireDefault(TreeNode_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var DRAG_SIDE_RANGE = 0.25;
	var DRAG_MIN_GAP = 2;

	var onlyTreeNodeWarned = false;

	function warnOnlyTreeNode() {
	  if (onlyTreeNodeWarned) return;

	  onlyTreeNodeWarned = true;
	  (0, _warning2['default'])(false, 'Tree only accept TreeNode as children.');
	}

	function arrDel(list, value) {
	  var clone = list.slice();
	  var index = clone.indexOf(value);
	  if (index >= 0) {
	    clone.splice(index, 1);
	  }
	  return clone;
	}

	function arrAdd(list, value) {
	  var clone = list.slice();
	  if (clone.indexOf(value) === -1) {
	    clone.push(value);
	  }
	  return clone;
	}

	function posToArr(pos) {
	  return pos.split('-');
	}

	function getPosition(level, index) {
	  return level + '-' + index;
	}

	function isTreeNode(node) {
	  return node && node.type && node.type.isTreeNode;
	}

	function getNodeChildren(children) {
	  return (0, _toArray2['default'])(children).filter(isTreeNode);
	}

	function isCheckDisabled(node) {
	  var _ref = node.props || {},
	      disabled = _ref.disabled,
	      disableCheckbox = _ref.disableCheckbox;

	  return !!(disabled || disableCheckbox);
	}

	function traverseTreeNodes(treeNodes, callback) {
	  function processNode(node, index, parent) {
	    var children = node ? node.props.children : treeNodes;
	    var pos = node ? getPosition(parent.pos, index) : 0;

	    // Filter children
	    var childList = getNodeChildren(children);

	    // Process node if is not root
	    if (node) {
	      var data = {
	        node: node,
	        index: index,
	        pos: pos,
	        key: node.key || pos,
	        parentPos: parent.node ? parent.pos : null
	      };

	      callback(data);
	    }

	    // Process children node
	    React__default.Children.forEach(childList, function (subNode, subIndex) {
	      processNode(subNode, subIndex, { node: node, pos: pos });
	    });
	  }

	  processNode(null);
	}

	/**
	 * Use `rc-util` `toArray` to get the children list which keeps the key.
	 * And return single node if children is only one(This can avoid `key` missing check).
	 */
	function mapChildren(children, func) {
	  var list = (0, _toArray2['default'])(children).map(func);
	  if (list.length === 1) {
	    return list[0];
	  }
	  return list;
	}

	function getDragNodesKeys(treeNodes, node) {
	  var _node$props = node.props,
	      eventKey = _node$props.eventKey,
	      pos = _node$props.pos;

	  var dragNodesKeys = [];

	  traverseTreeNodes(treeNodes, function (_ref2) {
	    var key = _ref2.key;

	    dragNodesKeys.push(key);
	  });
	  dragNodesKeys.push(eventKey || pos);
	  return dragNodesKeys;
	}

	// Only used when drag, not affect SSR.
	function calcDropPosition(event, treeNode) {
	  var clientY = event.clientY;

	  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
	      top = _treeNode$selectHandl.top,
	      bottom = _treeNode$selectHandl.bottom,
	      height = _treeNode$selectHandl.height;

	  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

	  if (clientY <= top + des) {
	    return -1;
	  } else if (clientY >= bottom - des) {
	    return 1;
	  }

	  return 0;
	}

	/**
	 * Return selectedKeys according with multiple prop
	 * @param selectedKeys
	 * @param props
	 * @returns [string]
	 */
	function calcSelectedKeys(selectedKeys, props) {
	  if (!selectedKeys) return undefined;

	  var multiple = props.multiple;

	  if (multiple) {
	    return selectedKeys.slice();
	  }

	  if (selectedKeys.length) {
	    return [selectedKeys[0]];
	  }
	  return selectedKeys;
	}

	/**
	 * Since React internal will convert key to string,
	 * we need do this to avoid `checkStrictly` use number match
	 */
	function keyListToString(keyList) {
	  if (!keyList) return keyList;
	  return keyList.map(function (key) {
	    return String(key);
	  });
	}

	var internalProcessProps = function internalProcessProps(props) {
	  return props;
	};
	function convertDataToTree(treeData, processer) {
	  if (!treeData) return [];

	  var _ref3 = processer || {},
	      _ref3$processProps = _ref3.processProps,
	      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

	  var list = Array.isArray(treeData) ? treeData : [treeData];
	  return list.map(function (_ref4) {
	    var children = _ref4.children,
	        props = (0, _objectWithoutProperties3['default'])(_ref4, ['children']);

	    var childrenNodes = convertDataToTree(children, processer);

	    return _react2['default'].createElement(
	      _TreeNode2['default'],
	      processProps(props),
	      childrenNodes
	    );
	  });
	}

	// TODO: ========================= NEW LOGIC =========================
	/**
	 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
	 * @param treeNodes
	 * @param processTreeEntity  User can customize the entity
	 */
	function convertTreeToEntities(treeNodes) {
	  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      initWrapper = _ref5.initWrapper,
	      processEntity = _ref5.processEntity,
	      onProcessFinished = _ref5.onProcessFinished;

	  var posEntities = {};
	  var keyEntities = {};
	  var wrapper = {
	    posEntities: posEntities,
	    keyEntities: keyEntities
	  };

	  if (initWrapper) {
	    wrapper = initWrapper(wrapper) || wrapper;
	  }

	  traverseTreeNodes(treeNodes, function (item) {
	    var node = item.node,
	        index = item.index,
	        pos = item.pos,
	        key = item.key,
	        parentPos = item.parentPos;

	    var entity = { node: node, index: index, key: key, pos: pos };

	    posEntities[pos] = entity;
	    keyEntities[key] = entity;

	    // Fill children
	    entity.parent = posEntities[parentPos];
	    if (entity.parent) {
	      entity.parent.children = entity.parent.children || [];
	      entity.parent.children.push(entity);
	    }

	    if (processEntity) {
	      processEntity(entity, wrapper);
	    }
	  });

	  if (onProcessFinished) {
	    onProcessFinished(wrapper);
	  }

	  return wrapper;
	}

	/**
	 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
	 */
	function parseCheckedKeys(keys) {
	  if (!keys) {
	    return null;
	  }

	  // Convert keys to object format
	  var keyProps = void 0;
	  if (Array.isArray(keys)) {
	    // [Legacy] Follow the api doc
	    keyProps = {
	      checkedKeys: keys,
	      halfCheckedKeys: undefined
	    };
	  } else if (typeof keys === 'object') {
	    keyProps = {
	      checkedKeys: keys.checked || undefined,
	      halfCheckedKeys: keys.halfChecked || undefined
	    };
	  } else {
	    (0, _warning2['default'])(false, '`checkedKeys` is not an array or an object');
	    return null;
	  }

	  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
	  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

	  return keyProps;
	}

	/**
	 * Conduct check state by the keyList. It will conduct up & from the provided key.
	 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
	 * @param keyList       list of keys
	 * @param isCheck       is check the node or not
	 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
	 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
	 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
	 */
	function conductCheck(keyList, isCheck, keyEntities) {
	  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var checkedKeys = {};
	  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

	  (checkStatus.checkedKeys || []).forEach(function (key) {
	    checkedKeys[key] = true;
	  });

	  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
	    halfCheckedKeys[key] = true;
	  });

	  // Conduct up
	  function conductUp(key) {
	    if (checkedKeys[key] === isCheck) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    var children = entity.children,
	        parent = entity.parent,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    // Check child node checked status
	    var everyChildChecked = true;
	    var someChildChecked = false; // Child checked or half checked

	    (children || []).filter(function (child) {
	      return !isCheckDisabled(child.node);
	    }).forEach(function (_ref6) {
	      var childKey = _ref6.key;

	      var childChecked = checkedKeys[childKey];
	      var childHalfChecked = halfCheckedKeys[childKey];

	      if (childChecked || childHalfChecked) someChildChecked = true;
	      if (!childChecked) everyChildChecked = false;
	    });

	    // Update checked status
	    if (isCheck) {
	      checkedKeys[key] = everyChildChecked;
	    } else {
	      checkedKeys[key] = false;
	    }
	    halfCheckedKeys[key] = someChildChecked;

	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  // Conduct down
	  function conductDown(key) {
	    if (checkedKeys[key] === isCheck) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    var children = entity.children,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    checkedKeys[key] = isCheck;

	    (children || []).forEach(function (child) {
	      conductDown(child.key);
	    });
	  }

	  function conduct(key) {
	    var entity = keyEntities[key];

	    if (!entity) {
	      (0, _warning2['default'])(false, '\'' + key + '\' does not exist in the tree.');
	      return;
	    }

	    var children = entity.children,
	        parent = entity.parent,
	        node = entity.node;

	    checkedKeys[key] = isCheck;

	    if (isCheckDisabled(node)) return;

	    // Conduct down
	    (children || []).filter(function (child) {
	      return !isCheckDisabled(child.node);
	    }).forEach(function (child) {
	      conductDown(child.key);
	    });

	    // Conduct up
	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  (keyList || []).forEach(function (key) {
	    conduct(key);
	  });

	  var checkedKeyList = [];
	  var halfCheckedKeyList = [];

	  // Fill checked list
	  Object.keys(checkedKeys).forEach(function (key) {
	    if (checkedKeys[key]) {
	      checkedKeyList.push(key);
	    }
	  });

	  // Fill half checked list
	  Object.keys(halfCheckedKeys).forEach(function (key) {
	    if (!checkedKeys[key] && halfCheckedKeys[key]) {
	      halfCheckedKeyList.push(key);
	    }
	  });

	  return {
	    checkedKeys: checkedKeyList,
	    halfCheckedKeys: halfCheckedKeyList
	  };
	}

	/**
	 * If user use `autoExpandParent` we should get the list of parent node
	 * @param keyList
	 * @param keyEntities
	 */
	function conductExpandParent(keyList, keyEntities) {
	  var expandedKeys = {};

	  function conductUp(key) {
	    if (expandedKeys[key]) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    expandedKeys[key] = true;

	    var parent = entity.parent,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  (keyList || []).forEach(function (key) {
	    conductUp(key);
	  });

	  return Object.keys(expandedKeys);
	}

	/**
	 * Returns only the data- and aria- key/value pairs
	 * @param {object} props 
	 */
	function getDataAndAria(props) {
	  return Object.keys(props).reduce(function (prev, key) {
	    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
	      prev[key] = props[key];
	    }
	    return prev;
	  }, {});
	}
	});

	unwrapExports(util);
	var util_1 = util.warnOnlyTreeNode;
	var util_2 = util.arrDel;
	var util_3 = util.arrAdd;
	var util_4 = util.posToArr;
	var util_5 = util.getPosition;
	var util_6 = util.isTreeNode;
	var util_7 = util.getNodeChildren;
	var util_8 = util.isCheckDisabled;
	var util_9 = util.traverseTreeNodes;
	var util_10 = util.mapChildren;
	var util_11 = util.getDragNodesKeys;
	var util_12 = util.calcDropPosition;
	var util_13 = util.calcSelectedKeys;
	var util_14 = util.convertDataToTree;
	var util_15 = util.convertTreeToEntities;
	var util_16 = util.parseCheckedKeys;
	var util_17 = util.conductCheck;
	var util_18 = util.conductExpandParent;
	var util_19 = util.getDataAndAria;

	/**
	 * Thought we still use `cloneElement` to pass `key`,
	 * other props can pass with context for future refactor.
	 */
	var treeContextTypes = {
	  rcTree: propTypes.shape({
	    root: propTypes.object,

	    prefixCls: propTypes.string,
	    selectable: propTypes.bool,
	    showIcon: propTypes.bool,
	    icon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	    draggable: propTypes.bool,
	    checkable: propTypes.oneOfType([propTypes.bool, propTypes.node]),
	    checkStrictly: propTypes.bool,
	    disabled: propTypes.bool,
	    openTransitionName: propTypes.string,
	    openAnimation: propTypes.oneOfType([propTypes.string, propTypes.object]),

	    loadData: propTypes.func,
	    filterTreeNode: propTypes.func,
	    renderTreeNode: propTypes.func,

	    isKeyChecked: propTypes.func,

	    onNodeClick: propTypes.func,
	    onNodeDoubleClick: propTypes.func,
	    onNodeExpand: propTypes.func,
	    onNodeSelect: propTypes.func,
	    onNodeCheck: propTypes.func,
	    onNodeMouseEnter: propTypes.func,
	    onNodeMouseLeave: propTypes.func,
	    onNodeContextMenu: propTypes.func,
	    onNodeDragStart: propTypes.func,
	    onNodeDragEnter: propTypes.func,
	    onNodeDragOver: propTypes.func,
	    onNodeDragLeave: propTypes.func,
	    onNodeDragEnd: propTypes.func,
	    onNodeDrop: propTypes.func

	    // TODO: Remove this
	    // onBatchNodeCheck: PropTypes.func,
	    // onCheckConductFinished: PropTypes.func,

	    // Tree will store the entities when the treeNode refresh.
	    // User can pass the func to add more info to customize the additional info.
	    // processTreeEntity: PropTypes.func,
	  })
	};

	var nodeContextTypes = _extends$1({}, treeContextTypes, {
	  rcTreeNode: propTypes.shape({
	    onUpCheckConduct: propTypes.func
	  })
	});

	var ICON_OPEN = 'open';
	var ICON_CLOSE = 'close';

	var defaultTitle = '---';

	var TreeNode$1 = function (_React$Component) {
	  _inherits$1(TreeNode, _React$Component);

	  function TreeNode(props) {
	    _classCallCheck$1(this, TreeNode);

	    var _this = _possibleConstructorReturn$1(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

	    _initialiseProps$2.call(_this);

	    _this.state = {
	      dragNodeHighlight: false
	    };
	    return _this;
	  }

	  _createClass$1(TreeNode, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return _extends$1({}, this.context, {
	        rcTreeNode: {
	          // onUpCheckConduct: this.onUpCheckConduct,
	        }
	      });
	    }

	    // Isomorphic needn't load data in server side

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncLoadData(this.props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.syncLoadData(this.props);
	    }

	    // Disabled item still can be switch


	    // Drag usage

	  }, {
	    key: 'isSelectable',
	    value: function isSelectable() {
	      var selectable = this.props.selectable;
	      var treeSelectable = this.context.rcTree.selectable;

	      // Ignore when selectable is undefined or null

	      if (typeof selectable === 'boolean') {
	        return selectable;
	      }

	      return treeSelectable;
	    }

	    // Load data to avoid default expanded tree without data


	    // Switcher


	    // Checkbox


	    // Icon + Title


	    // Children list wrapped with `Animation`

	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var loading = this.props.loading;

	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          dragOver = _props.dragOver,
	          dragOverGapTop = _props.dragOverGapTop,
	          dragOverGapBottom = _props.dragOverGapBottom,
	          isLeaf = _props.isLeaf,
	          expanded = _props.expanded,
	          selected = _props.selected,
	          checked = _props.checked,
	          halfChecked = _props.halfChecked,
	          otherProps = _objectWithoutProperties(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);

	      var _context$rcTree = this.context.rcTree,
	          prefixCls = _context$rcTree.prefixCls,
	          filterTreeNode = _context$rcTree.filterTreeNode,
	          draggable = _context$rcTree.draggable;

	      var disabled = this.isDisabled();
	      var dataOrAriaAttributeProps = getDataAndAria(otherProps);

	      return React__default.createElement(
	        'li',
	        _extends$1({
	          className: classnames(className, (_classNames = {}, _defineProperty$1(_classNames, prefixCls + '-treenode-disabled', disabled), _defineProperty$1(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), _defineProperty$1(_classNames, prefixCls + '-treenode-checkbox-checked', checked), _defineProperty$1(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), _defineProperty$1(_classNames, prefixCls + '-treenode-selected', selected), _defineProperty$1(_classNames, prefixCls + '-treenode-loading', loading), _defineProperty$1(_classNames, 'drag-over', !disabled && dragOver), _defineProperty$1(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), _defineProperty$1(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), _defineProperty$1(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

	          style: style,

	          role: 'treeitem',

	          onDragEnter: draggable ? this.onDragEnter : undefined,
	          onDragOver: draggable ? this.onDragOver : undefined,
	          onDragLeave: draggable ? this.onDragLeave : undefined,
	          onDrop: draggable ? this.onDrop : undefined,
	          onDragEnd: draggable ? this.onDragEnd : undefined
	        }, dataOrAriaAttributeProps),
	        this.renderSwitcher(),
	        this.renderCheckbox(),
	        this.renderSelector(),
	        this.renderChildren()
	      );
	    }
	  }]);

	  return TreeNode;
	}(React__default.Component);

	TreeNode$1.propTypes = {
	  eventKey: propTypes.string, // Pass by parent `cloneElement`
	  prefixCls: propTypes.string,
	  className: propTypes.string,
	  style: propTypes.object,
	  root: propTypes.object,
	  onSelect: propTypes.func,

	  // By parent
	  expanded: propTypes.bool,
	  selected: propTypes.bool,
	  checked: propTypes.bool,
	  loaded: propTypes.bool,
	  loading: propTypes.bool,
	  halfChecked: propTypes.bool,
	  children: propTypes.node,
	  title: propTypes.node,
	  pos: propTypes.string,
	  dragOver: propTypes.bool,
	  dragOverGapTop: propTypes.bool,
	  dragOverGapBottom: propTypes.bool,

	  // By user
	  isLeaf: propTypes.bool,
	  selectable: propTypes.bool,
	  disabled: propTypes.bool,
	  disableCheckbox: propTypes.bool,
	  icon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  switcherIcon: propTypes.oneOfType([propTypes.node, propTypes.func])
	};
	TreeNode$1.contextTypes = nodeContextTypes;
	TreeNode$1.childContextTypes = nodeContextTypes;
	TreeNode$1.defaultProps = {
	  title: defaultTitle
	};

	var _initialiseProps$2 = function _initialiseProps() {
	  var _this2 = this;

	  this.onSelectorClick = function (e) {
	    // Click trigger before select/check operation
	    var onNodeClick = _this2.context.rcTree.onNodeClick;

	    onNodeClick(e, _this2);

	    if (_this2.isSelectable()) {
	      _this2.onSelect(e);
	    } else {
	      _this2.onCheck(e);
	    }
	  };

	  this.onSelectorDoubleClick = function (e) {
	    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

	    onNodeDoubleClick(e, _this2);
	  };

	  this.onSelect = function (e) {
	    if (_this2.isDisabled()) return;

	    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

	    e.preventDefault();
	    onNodeSelect(e, _this2);
	  };

	  this.onCheck = function (e) {
	    if (_this2.isDisabled()) return;

	    var _props2 = _this2.props,
	        disableCheckbox = _props2.disableCheckbox,
	        checked = _props2.checked;
	    var _context$rcTree2 = _this2.context.rcTree,
	        checkable = _context$rcTree2.checkable,
	        onNodeCheck = _context$rcTree2.onNodeCheck;


	    if (!checkable || disableCheckbox) return;

	    e.preventDefault();
	    var targetChecked = !checked;
	    onNodeCheck(e, _this2, targetChecked);
	  };

	  this.onMouseEnter = function (e) {
	    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

	    onNodeMouseEnter(e, _this2);
	  };

	  this.onMouseLeave = function (e) {
	    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

	    onNodeMouseLeave(e, _this2);
	  };

	  this.onContextMenu = function (e) {
	    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

	    onNodeContextMenu(e, _this2);
	  };

	  this.onDragStart = function (e) {
	    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: true
	    });
	    onNodeDragStart(e, _this2);

	    try {
	      // ie throw error
	      // firefox-need-it
	      e.dataTransfer.setData('text/plain', '');
	    } catch (error) {
	      // empty
	    }
	  };

	  this.onDragEnter = function (e) {
	    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


	    e.preventDefault();
	    e.stopPropagation();
	    onNodeDragEnter(e, _this2);
	  };

	  this.onDragOver = function (e) {
	    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


	    e.preventDefault();
	    e.stopPropagation();
	    onNodeDragOver(e, _this2);
	  };

	  this.onDragLeave = function (e) {
	    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


	    e.stopPropagation();
	    onNodeDragLeave(e, _this2);
	  };

	  this.onDragEnd = function (e) {
	    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: false
	    });
	    onNodeDragEnd(e, _this2);
	  };

	  this.onDrop = function (e) {
	    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


	    e.preventDefault();
	    e.stopPropagation();
	    _this2.setState({
	      dragNodeHighlight: false
	    });
	    onNodeDrop(e, _this2);
	  };

	  this.onExpand = function (e) {
	    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

	    onNodeExpand(e, _this2);
	  };

	  this.setSelectHandle = function (node) {
	    _this2.selectHandle = node;
	  };

	  this.getNodeChildren = function () {
	    var children = _this2.props.children;

	    var originList = toArray(children).filter(function (node) {
	      return node;
	    });
	    var targetList = getNodeChildren(originList);

	    if (originList.length !== targetList.length) {
	      warnOnlyTreeNode();
	    }

	    return targetList;
	  };

	  this.getNodeState = function () {
	    var expanded = _this2.props.expanded;


	    if (_this2.isLeaf()) {
	      return null;
	    }

	    return expanded ? ICON_OPEN : ICON_CLOSE;
	  };

	  this.isLeaf = function () {
	    var _props3 = _this2.props,
	        isLeaf = _props3.isLeaf,
	        loaded = _props3.loaded;
	    var loadData = _this2.context.rcTree.loadData;


	    var hasChildren = _this2.getNodeChildren().length !== 0;

	    if (isLeaf === false) {
	      return false;
	    }

	    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
	  };

	  this.isDisabled = function () {
	    var disabled = _this2.props.disabled;
	    var treeDisabled = _this2.context.rcTree.disabled;

	    // Follow the logic of Selectable

	    if (disabled === false) {
	      return false;
	    }

	    return !!(treeDisabled || disabled);
	  };

	  this.syncLoadData = function (props) {
	    var expanded = props.expanded,
	        loading = props.loading,
	        loaded = props.loaded;
	    var _context$rcTree3 = _this2.context.rcTree,
	        loadData = _context$rcTree3.loadData,
	        onNodeLoad = _context$rcTree3.onNodeLoad;


	    if (loading) return;

	    // read from state to avoid loadData at same time
	    if (loadData && expanded && !_this2.isLeaf()) {
	      // We needn't reload data when has children in sync logic
	      // It's only needed in node expanded
	      var hasChildren = _this2.getNodeChildren().length !== 0;
	      if (!hasChildren && !loaded) {
	        onNodeLoad(_this2);
	      }
	    }
	  };

	  this.renderSwitcher = function () {
	    var _props4 = _this2.props,
	        expanded = _props4.expanded,
	        switcherIconFromProps = _props4.switcherIcon;
	    var _context$rcTree4 = _this2.context.rcTree,
	        prefixCls = _context$rcTree4.prefixCls,
	        switcherIconFromCtx = _context$rcTree4.switcherIcon;


	    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

	    if (_this2.isLeaf()) {
	      return React__default.createElement(
	        'span',
	        { className: classnames(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
	        typeof switcherIcon === 'function' ? React__default.createElement(switcherIcon, _extends$1({}, _this2.props, { isLeaf: true })) : switcherIcon
	      );
	    }

	    var switcherCls = classnames(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
	    return React__default.createElement(
	      'span',
	      { onClick: _this2.onExpand, className: switcherCls },
	      typeof switcherIcon === 'function' ? React__default.createElement(switcherIcon, _extends$1({}, _this2.props, { isLeaf: false })) : switcherIcon
	    );
	  };

	  this.renderCheckbox = function () {
	    var _props5 = _this2.props,
	        checked = _props5.checked,
	        halfChecked = _props5.halfChecked,
	        disableCheckbox = _props5.disableCheckbox;
	    var _context$rcTree5 = _this2.context.rcTree,
	        prefixCls = _context$rcTree5.prefixCls,
	        checkable = _context$rcTree5.checkable;

	    var disabled = _this2.isDisabled();

	    if (!checkable) return null;

	    // [Legacy] Custom element should be separate with `checkable` in future
	    var $custom = typeof checkable !== 'boolean' ? checkable : null;

	    return React__default.createElement(
	      'span',
	      {
	        className: classnames(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
	        onClick: _this2.onCheck
	      },
	      $custom
	    );
	  };

	  this.renderIcon = function () {
	    var loading = _this2.props.loading;
	    var prefixCls = _this2.context.rcTree.prefixCls;


	    return React__default.createElement('span', {
	      className: classnames(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
	    });
	  };

	  this.renderSelector = function () {
	    var dragNodeHighlight = _this2.state.dragNodeHighlight;
	    var _props6 = _this2.props,
	        title = _props6.title,
	        selected = _props6.selected,
	        icon = _props6.icon,
	        loading = _props6.loading;
	    var _context$rcTree6 = _this2.context.rcTree,
	        prefixCls = _context$rcTree6.prefixCls,
	        showIcon = _context$rcTree6.showIcon,
	        treeIcon = _context$rcTree6.icon,
	        draggable = _context$rcTree6.draggable,
	        loadData = _context$rcTree6.loadData;

	    var disabled = _this2.isDisabled();

	    var wrapClass = prefixCls + '-node-content-wrapper';

	    // Icon - Still show loading icon when loading without showIcon
	    var $icon = void 0;

	    if (showIcon) {
	      var currentIcon = icon || treeIcon;

	      $icon = currentIcon ? React__default.createElement(
	        'span',
	        {
	          className: classnames(prefixCls + '-iconEle', prefixCls + '-icon__customize')
	        },
	        typeof currentIcon === 'function' ? React__default.createElement(currentIcon, _extends$1({}, _this2.props)) : currentIcon
	      ) : _this2.renderIcon();
	    } else if (loadData && loading) {
	      $icon = _this2.renderIcon();
	    }

	    // Title
	    var $title = React__default.createElement(
	      'span',
	      { className: prefixCls + '-title' },
	      title
	    );

	    return React__default.createElement(
	      'span',
	      {
	        ref: _this2.setSelectHandle,
	        title: typeof title === 'string' ? title : '',
	        className: classnames('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
	        draggable: !disabled && draggable || undefined,
	        'aria-grabbed': !disabled && draggable || undefined,

	        onMouseEnter: _this2.onMouseEnter,
	        onMouseLeave: _this2.onMouseLeave,
	        onContextMenu: _this2.onContextMenu,
	        onClick: _this2.onSelectorClick,
	        onDoubleClick: _this2.onSelectorDoubleClick,
	        onDragStart: draggable ? _this2.onDragStart : undefined
	      },
	      $icon,
	      $title
	    );
	  };

	  this.renderChildren = function () {
	    var _props7 = _this2.props,
	        expanded = _props7.expanded,
	        pos = _props7.pos;
	    var _context$rcTree7 = _this2.context.rcTree,
	        prefixCls = _context$rcTree7.prefixCls,
	        openTransitionName = _context$rcTree7.openTransitionName,
	        openAnimation = _context$rcTree7.openAnimation,
	        renderTreeNode = _context$rcTree7.renderTreeNode;


	    var animProps = {};
	    if (openTransitionName) {
	      animProps.transitionName = openTransitionName;
	    } else if (typeof openAnimation === 'object') {
	      animProps.animation = _extends$1({}, openAnimation);
	    }

	    // Children TreeNode
	    var nodeList = _this2.getNodeChildren();

	    if (nodeList.length === 0) {
	      return null;
	    }

	    var $children = void 0;
	    if (expanded) {
	      $children = React__default.createElement(
	        'ul',
	        {
	          className: classnames(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
	          'data-expanded': expanded,
	          role: 'group'
	        },
	        mapChildren(nodeList, function (node, index) {
	          return renderTreeNode(node, index, pos);
	        })
	      );
	    }

	    return React__default.createElement(
	      Animate,
	      _extends$1({}, animProps, {
	        showProp: 'data-expanded',
	        component: ''
	      }),
	      $children
	    );
	  };
	};

	TreeNode$1.isTreeNode = 1;

	polyfill(TreeNode$1);

	var DRAG_SIDE_RANGE = 0.25;
	var DRAG_MIN_GAP = 2;

	var onlyTreeNodeWarned = false;

	function warnOnlyTreeNode() {
	  if (onlyTreeNodeWarned) return;

	  onlyTreeNodeWarned = true;
	  browser(false, 'Tree only accept TreeNode as children.');
	}

	function arrDel(list, value) {
	  var clone = list.slice();
	  var index = clone.indexOf(value);
	  if (index >= 0) {
	    clone.splice(index, 1);
	  }
	  return clone;
	}

	function arrAdd(list, value) {
	  var clone = list.slice();
	  if (clone.indexOf(value) === -1) {
	    clone.push(value);
	  }
	  return clone;
	}

	function posToArr(pos) {
	  return pos.split('-');
	}

	function getPosition(level, index) {
	  return level + '-' + index;
	}

	function isTreeNode(node) {
	  return node && node.type && node.type.isTreeNode;
	}

	function getNodeChildren(children) {
	  return toArray(children).filter(isTreeNode);
	}

	function isCheckDisabled(node) {
	  var _ref = node.props || {},
	      disabled = _ref.disabled,
	      disableCheckbox = _ref.disableCheckbox;

	  return !!(disabled || disableCheckbox);
	}

	function traverseTreeNodes(treeNodes, callback) {
	  function processNode(node, index, parent) {
	    var children = node ? node.props.children : treeNodes;
	    var pos = node ? getPosition(parent.pos, index) : 0;

	    // Filter children
	    var childList = getNodeChildren(children);

	    // Process node if is not root
	    if (node) {
	      var data = {
	        node: node,
	        index: index,
	        pos: pos,
	        key: node.key || pos,
	        parentPos: parent.node ? parent.pos : null
	      };

	      callback(data);
	    }

	    // Process children node
	    React.Children.forEach(childList, function (subNode, subIndex) {
	      processNode(subNode, subIndex, { node: node, pos: pos });
	    });
	  }

	  processNode(null);
	}

	/**
	 * Use `rc-util` `toArray` to get the children list which keeps the key.
	 * And return single node if children is only one(This can avoid `key` missing check).
	 */
	function mapChildren(children, func) {
	  var list = toArray(children).map(func);
	  if (list.length === 1) {
	    return list[0];
	  }
	  return list;
	}

	function getDragNodesKeys(treeNodes, node) {
	  var _node$props = node.props,
	      eventKey = _node$props.eventKey,
	      pos = _node$props.pos;

	  var dragNodesKeys = [];

	  traverseTreeNodes(treeNodes, function (_ref2) {
	    var key = _ref2.key;

	    dragNodesKeys.push(key);
	  });
	  dragNodesKeys.push(eventKey || pos);
	  return dragNodesKeys;
	}

	// Only used when drag, not affect SSR.
	function calcDropPosition(event, treeNode) {
	  var clientY = event.clientY;

	  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
	      top = _treeNode$selectHandl.top,
	      bottom = _treeNode$selectHandl.bottom,
	      height = _treeNode$selectHandl.height;

	  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

	  if (clientY <= top + des) {
	    return -1;
	  } else if (clientY >= bottom - des) {
	    return 1;
	  }

	  return 0;
	}

	/**
	 * Return selectedKeys according with multiple prop
	 * @param selectedKeys
	 * @param props
	 * @returns [string]
	 */
	function calcSelectedKeys(selectedKeys, props) {
	  if (!selectedKeys) return undefined;

	  var multiple = props.multiple;

	  if (multiple) {
	    return selectedKeys.slice();
	  }

	  if (selectedKeys.length) {
	    return [selectedKeys[0]];
	  }
	  return selectedKeys;
	}

	/**
	 * Since React internal will convert key to string,
	 * we need do this to avoid `checkStrictly` use number match
	 */
	function keyListToString(keyList) {
	  if (!keyList) return keyList;
	  return keyList.map(function (key) {
	    return String(key);
	  });
	}

	var internalProcessProps = function internalProcessProps(props) {
	  return props;
	};
	function convertDataToTree(treeData, processer) {
	  if (!treeData) return [];

	  var _ref3 = processer || {},
	      _ref3$processProps = _ref3.processProps,
	      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

	  var list = Array.isArray(treeData) ? treeData : [treeData];
	  return list.map(function (_ref4) {
	    var children = _ref4.children,
	        props = _objectWithoutProperties(_ref4, ['children']);

	    var childrenNodes = convertDataToTree(children, processer);

	    return React__default.createElement(
	      TreeNode$1,
	      processProps(props),
	      childrenNodes
	    );
	  });
	}

	// TODO: ========================= NEW LOGIC =========================
	/**
	 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
	 * @param treeNodes
	 * @param processTreeEntity  User can customize the entity
	 */
	function convertTreeToEntities(treeNodes) {
	  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      initWrapper = _ref5.initWrapper,
	      processEntity = _ref5.processEntity,
	      onProcessFinished = _ref5.onProcessFinished;

	  var posEntities = {};
	  var keyEntities = {};
	  var wrapper = {
	    posEntities: posEntities,
	    keyEntities: keyEntities
	  };

	  if (initWrapper) {
	    wrapper = initWrapper(wrapper) || wrapper;
	  }

	  traverseTreeNodes(treeNodes, function (item) {
	    var node = item.node,
	        index = item.index,
	        pos = item.pos,
	        key = item.key,
	        parentPos = item.parentPos;

	    var entity = { node: node, index: index, key: key, pos: pos };

	    posEntities[pos] = entity;
	    keyEntities[key] = entity;

	    // Fill children
	    entity.parent = posEntities[parentPos];
	    if (entity.parent) {
	      entity.parent.children = entity.parent.children || [];
	      entity.parent.children.push(entity);
	    }

	    if (processEntity) {
	      processEntity(entity, wrapper);
	    }
	  });

	  if (onProcessFinished) {
	    onProcessFinished(wrapper);
	  }

	  return wrapper;
	}

	/**
	 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
	 */
	function parseCheckedKeys(keys) {
	  if (!keys) {
	    return null;
	  }

	  // Convert keys to object format
	  var keyProps = void 0;
	  if (Array.isArray(keys)) {
	    // [Legacy] Follow the api doc
	    keyProps = {
	      checkedKeys: keys,
	      halfCheckedKeys: undefined
	    };
	  } else if (typeof keys === 'object') {
	    keyProps = {
	      checkedKeys: keys.checked || undefined,
	      halfCheckedKeys: keys.halfChecked || undefined
	    };
	  } else {
	    browser(false, '`checkedKeys` is not an array or an object');
	    return null;
	  }

	  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
	  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

	  return keyProps;
	}

	/**
	 * Conduct check state by the keyList. It will conduct up & from the provided key.
	 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
	 * @param keyList       list of keys
	 * @param isCheck       is check the node or not
	 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
	 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
	 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
	 */
	function conductCheck(keyList, isCheck, keyEntities) {
	  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var checkedKeys = {};
	  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

	  (checkStatus.checkedKeys || []).forEach(function (key) {
	    checkedKeys[key] = true;
	  });

	  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
	    halfCheckedKeys[key] = true;
	  });

	  // Conduct up
	  function conductUp(key) {
	    if (checkedKeys[key] === isCheck) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    var children = entity.children,
	        parent = entity.parent,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    // Check child node checked status
	    var everyChildChecked = true;
	    var someChildChecked = false; // Child checked or half checked

	    (children || []).filter(function (child) {
	      return !isCheckDisabled(child.node);
	    }).forEach(function (_ref6) {
	      var childKey = _ref6.key;

	      var childChecked = checkedKeys[childKey];
	      var childHalfChecked = halfCheckedKeys[childKey];

	      if (childChecked || childHalfChecked) someChildChecked = true;
	      if (!childChecked) everyChildChecked = false;
	    });

	    // Update checked status
	    if (isCheck) {
	      checkedKeys[key] = everyChildChecked;
	    } else {
	      checkedKeys[key] = false;
	    }
	    halfCheckedKeys[key] = someChildChecked;

	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  // Conduct down
	  function conductDown(key) {
	    if (checkedKeys[key] === isCheck) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    var children = entity.children,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    checkedKeys[key] = isCheck;

	    (children || []).forEach(function (child) {
	      conductDown(child.key);
	    });
	  }

	  function conduct(key) {
	    var entity = keyEntities[key];

	    if (!entity) {
	      browser(false, '\'' + key + '\' does not exist in the tree.');
	      return;
	    }

	    var children = entity.children,
	        parent = entity.parent,
	        node = entity.node;

	    checkedKeys[key] = isCheck;

	    if (isCheckDisabled(node)) return;

	    // Conduct down
	    (children || []).filter(function (child) {
	      return !isCheckDisabled(child.node);
	    }).forEach(function (child) {
	      conductDown(child.key);
	    });

	    // Conduct up
	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  (keyList || []).forEach(function (key) {
	    conduct(key);
	  });

	  var checkedKeyList = [];
	  var halfCheckedKeyList = [];

	  // Fill checked list
	  Object.keys(checkedKeys).forEach(function (key) {
	    if (checkedKeys[key]) {
	      checkedKeyList.push(key);
	    }
	  });

	  // Fill half checked list
	  Object.keys(halfCheckedKeys).forEach(function (key) {
	    if (!checkedKeys[key] && halfCheckedKeys[key]) {
	      halfCheckedKeyList.push(key);
	    }
	  });

	  return {
	    checkedKeys: checkedKeyList,
	    halfCheckedKeys: halfCheckedKeyList
	  };
	}

	/**
	 * If user use `autoExpandParent` we should get the list of parent node
	 * @param keyList
	 * @param keyEntities
	 */
	function conductExpandParent(keyList, keyEntities) {
	  var expandedKeys = {};

	  function conductUp(key) {
	    if (expandedKeys[key]) return;

	    var entity = keyEntities[key];
	    if (!entity) return;

	    expandedKeys[key] = true;

	    var parent = entity.parent,
	        node = entity.node;


	    if (isCheckDisabled(node)) return;

	    if (parent) {
	      conductUp(parent.key);
	    }
	  }

	  (keyList || []).forEach(function (key) {
	    conductUp(key);
	  });

	  return Object.keys(expandedKeys);
	}

	/**
	 * Returns only the data- and aria- key/value pairs
	 * @param {object} props 
	 */
	function getDataAndAria(props) {
	  return Object.keys(props).reduce(function (prev, key) {
	    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
	      prev[key] = props[key];
	    }
	    return prev;
	  }, {});
	}

	var Tree = function (_React$Component) {
	  _inherits$1(Tree, _React$Component);

	  function Tree() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck$1(this, Tree);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Tree.__proto__ || Object.getPrototypeOf(Tree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      // TODO: Remove this eslint
	      posEntities: {}, // eslint-disable-line react/no-unused-state
	      keyEntities: {},

	      selectedKeys: [],
	      checkedKeys: [],
	      halfCheckedKeys: [],
	      loadedKeys: [],
	      loadingKeys: [],

	      treeNode: []
	    }, _this.onNodeDragStart = function (event, node) {
	      var expandedKeys = _this.state.expandedKeys;
	      var onDragStart = _this.props.onDragStart;
	      var _node$props = node.props,
	          eventKey = _node$props.eventKey,
	          children = _node$props.children;


	      _this.dragNode = node;

	      _this.setState({
	        dragNodesKeys: getDragNodesKeys(children, node),
	        expandedKeys: arrDel(expandedKeys, eventKey)
	      });

	      if (onDragStart) {
	        onDragStart({ event: event, node: node });
	      }
	    }, _this.onNodeDragEnter = function (event, node) {
	      var expandedKeys = _this.state.expandedKeys;
	      var onDragEnter = _this.props.onDragEnter;
	      var _node$props2 = node.props,
	          pos = _node$props2.pos,
	          eventKey = _node$props2.eventKey;


	      if (!_this.dragNode) return;

	      var dropPosition = calcDropPosition(event, node);

	      // Skip if drag node is self
	      if (_this.dragNode.props.eventKey === eventKey && dropPosition === 0) {
	        _this.setState({
	          dragOverNodeKey: '',
	          dropPosition: null
	        });
	        return;
	      }

	      // Ref: https://github.com/react-component/tree/issues/132
	      // Add timeout to let onDragLevel fire before onDragEnter,
	      // so that we can clean drag props for onDragLeave node.
	      // Macro task for this:
	      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script
	      setTimeout(function () {
	        // Update drag over node
	        _this.setState({
	          dragOverNodeKey: eventKey,
	          dropPosition: dropPosition
	        });

	        // Side effect for delay drag
	        if (!_this.delayedDragEnterLogic) {
	          _this.delayedDragEnterLogic = {};
	        }
	        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
	          clearTimeout(_this.delayedDragEnterLogic[key]);
	        });
	        _this.delayedDragEnterLogic[pos] = setTimeout(function () {
	          var newExpandedKeys = arrAdd(expandedKeys, eventKey);
	          if (!('expandedKeys' in _this.props)) {
	            _this.setState({
	              expandedKeys: newExpandedKeys
	            });
	          }

	          if (onDragEnter) {
	            onDragEnter({ event: event, node: node, expandedKeys: newExpandedKeys });
	          }
	        }, 400);
	      }, 0);
	    }, _this.onNodeDragOver = function (event, node) {
	      var onDragOver = _this.props.onDragOver;
	      var eventKey = node.props.eventKey;

	      // Update drag position

	      if (_this.dragNode && eventKey === _this.state.dragOverNodeKey) {
	        var dropPosition = calcDropPosition(event, node);

	        if (dropPosition === _this.state.dropPosition) return;

	        _this.setState({
	          dropPosition: dropPosition
	        });
	      }

	      if (onDragOver) {
	        onDragOver({ event: event, node: node });
	      }
	    }, _this.onNodeDragLeave = function (event, node) {
	      var onDragLeave = _this.props.onDragLeave;


	      _this.setState({
	        dragOverNodeKey: ''
	      });

	      if (onDragLeave) {
	        onDragLeave({ event: event, node: node });
	      }
	    }, _this.onNodeDragEnd = function (event, node) {
	      var onDragEnd = _this.props.onDragEnd;

	      _this.setState({
	        dragOverNodeKey: ''
	      });
	      if (onDragEnd) {
	        onDragEnd({ event: event, node: node });
	      }

	      _this.dragNode = null;
	    }, _this.onNodeDrop = function (event, node) {
	      var _this$state = _this.state,
	          _this$state$dragNodes = _this$state.dragNodesKeys,
	          dragNodesKeys = _this$state$dragNodes === undefined ? [] : _this$state$dragNodes,
	          dropPosition = _this$state.dropPosition;
	      var onDrop = _this.props.onDrop;
	      var _node$props3 = node.props,
	          eventKey = _node$props3.eventKey,
	          pos = _node$props3.pos;


	      _this.setState({
	        dragOverNodeKey: ''
	      });

	      if (dragNodesKeys.indexOf(eventKey) !== -1) {
	        browser(false, 'Can not drop to dragNode(include it\'s children node)');
	        return;
	      }

	      var posArr = posToArr(pos);

	      var dropResult = {
	        event: event,
	        node: node,
	        dragNode: _this.dragNode,
	        dragNodesKeys: dragNodesKeys.slice(),
	        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
	      };

	      if (dropPosition !== 0) {
	        dropResult.dropToGap = true;
	      }

	      if (onDrop) {
	        onDrop(dropResult);
	      }

	      _this.dragNode = null;
	    }, _this.onNodeClick = function (e, treeNode) {
	      var onClick = _this.props.onClick;

	      if (onClick) {
	        onClick(e, treeNode);
	      }
	    }, _this.onNodeDoubleClick = function (e, treeNode) {
	      var onDoubleClick = _this.props.onDoubleClick;

	      if (onDoubleClick) {
	        onDoubleClick(e, treeNode);
	      }
	    }, _this.onNodeSelect = function (e, treeNode) {
	      var selectedKeys = _this.state.selectedKeys;
	      var keyEntities = _this.state.keyEntities;
	      var _this$props = _this.props,
	          onSelect = _this$props.onSelect,
	          multiple = _this$props.multiple;
	      var _treeNode$props = treeNode.props,
	          selected = _treeNode$props.selected,
	          eventKey = _treeNode$props.eventKey;

	      var targetSelected = !selected;

	      // Update selected keys
	      if (!targetSelected) {
	        selectedKeys = arrDel(selectedKeys, eventKey);
	      } else if (!multiple) {
	        selectedKeys = [eventKey];
	      } else {
	        selectedKeys = arrAdd(selectedKeys, eventKey);
	      }

	      // [Legacy] Not found related usage in doc or upper libs
	      var selectedNodes = selectedKeys.map(function (key) {
	        var entity = keyEntities[key];
	        if (!entity) return null;

	        return entity.node;
	      }).filter(function (node) {
	        return node;
	      });

	      _this.setUncontrolledState({ selectedKeys: selectedKeys });

	      if (onSelect) {
	        var eventObj = {
	          event: 'select',
	          selected: targetSelected,
	          node: treeNode,
	          selectedNodes: selectedNodes,
	          nativeEvent: e.nativeEvent
	        };
	        onSelect(selectedKeys, eventObj);
	      }
	    }, _this.onNodeCheck = function (e, treeNode, checked) {
	      var _this$state2 = _this.state,
	          keyEntities = _this$state2.keyEntities,
	          oriCheckedKeys = _this$state2.checkedKeys,
	          oriHalfCheckedKeys = _this$state2.halfCheckedKeys;
	      var _this$props2 = _this.props,
	          checkStrictly = _this$props2.checkStrictly,
	          onCheck = _this$props2.onCheck;
	      var eventKey = treeNode.props.eventKey;

	      // Prepare trigger arguments

	      var checkedObj = void 0;
	      var eventObj = {
	        event: 'check',
	        node: treeNode,
	        checked: checked,
	        nativeEvent: e.nativeEvent
	      };

	      if (checkStrictly) {
	        var checkedKeys = checked ? arrAdd(oriCheckedKeys, eventKey) : arrDel(oriCheckedKeys, eventKey);
	        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, eventKey);
	        checkedObj = { checked: checkedKeys, halfChecked: halfCheckedKeys };

	        eventObj.checkedNodes = checkedKeys.map(function (key) {
	          return keyEntities[key];
	        }).filter(function (entity) {
	          return entity;
	        }).map(function (entity) {
	          return entity.node;
	        });

	        _this.setUncontrolledState({ checkedKeys: checkedKeys });
	      } else {
	        var _conductCheck = conductCheck([eventKey], checked, keyEntities, {
	          checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys
	        }),
	            _checkedKeys = _conductCheck.checkedKeys,
	            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

	        checkedObj = _checkedKeys;

	        // [Legacy] This is used for `rc-tree-select`
	        eventObj.checkedNodes = [];
	        eventObj.checkedNodesPositions = [];
	        eventObj.halfCheckedKeys = _halfCheckedKeys;

	        _checkedKeys.forEach(function (key) {
	          var entity = keyEntities[key];
	          if (!entity) return;

	          var node = entity.node,
	              pos = entity.pos;


	          eventObj.checkedNodes.push(node);
	          eventObj.checkedNodesPositions.push({ node: node, pos: pos });
	        });

	        _this.setUncontrolledState({
	          checkedKeys: _checkedKeys,
	          halfCheckedKeys: _halfCheckedKeys
	        });
	      }

	      if (onCheck) {
	        onCheck(checkedObj, eventObj);
	      }
	    }, _this.onNodeLoad = function (treeNode) {
	      return new Promise(function (resolve) {
	        // We need to get the latest state of loading/loaded keys
	        _this.setState(function (_ref2) {
	          var _ref2$loadedKeys = _ref2.loadedKeys,
	              loadedKeys = _ref2$loadedKeys === undefined ? [] : _ref2$loadedKeys,
	              _ref2$loadingKeys = _ref2.loadingKeys,
	              loadingKeys = _ref2$loadingKeys === undefined ? [] : _ref2$loadingKeys;
	          var _this$props3 = _this.props,
	              loadData = _this$props3.loadData,
	              onLoad = _this$props3.onLoad;
	          var eventKey = treeNode.props.eventKey;


	          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
	            // react 15 will warn if return null
	            return {};
	          }

	          // Process load data
	          var promise = loadData(treeNode);
	          promise.then(function () {
	            var newLoadedKeys = arrAdd(_this.state.loadedKeys, eventKey);
	            var newLoadingKeys = arrDel(_this.state.loadingKeys, eventKey);

	            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
	            // https://github.com/ant-design/ant-design/issues/12464
	            if (onLoad) {
	              var eventObj = {
	                event: 'load',
	                node: treeNode
	              };
	              onLoad(newLoadedKeys, eventObj);
	            }

	            _this.setUncontrolledState({
	              loadedKeys: newLoadedKeys
	            });
	            _this.setState({
	              loadingKeys: newLoadingKeys
	            });

	            resolve();
	          });

	          return {
	            loadingKeys: arrAdd(loadingKeys, eventKey)
	          };
	        });
	      });
	    }, _this.onNodeExpand = function (e, treeNode) {
	      var expandedKeys = _this.state.expandedKeys;
	      var _this$props4 = _this.props,
	          onExpand = _this$props4.onExpand,
	          loadData = _this$props4.loadData;
	      var _treeNode$props2 = treeNode.props,
	          eventKey = _treeNode$props2.eventKey,
	          expanded = _treeNode$props2.expanded;

	      // Update selected keys

	      var index = expandedKeys.indexOf(eventKey);
	      var targetExpanded = !expanded;

	      browser(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

	      if (targetExpanded) {
	        expandedKeys = arrAdd(expandedKeys, eventKey);
	      } else {
	        expandedKeys = arrDel(expandedKeys, eventKey);
	      }

	      _this.setUncontrolledState({ expandedKeys: expandedKeys });

	      if (onExpand) {
	        onExpand(expandedKeys, {
	          node: treeNode,
	          expanded: targetExpanded,
	          nativeEvent: e.nativeEvent
	        });
	      }

	      // Async Load data
	      if (targetExpanded && loadData) {
	        var loadPromise = _this.onNodeLoad(treeNode);
	        return loadPromise ? loadPromise.then(function () {
	          // [Legacy] Refresh logic
	          _this.setUncontrolledState({ expandedKeys: expandedKeys });
	        }) : null;
	      }

	      return null;
	    }, _this.onNodeMouseEnter = function (event, node) {
	      var onMouseEnter = _this.props.onMouseEnter;

	      if (onMouseEnter) {
	        onMouseEnter({ event: event, node: node });
	      }
	    }, _this.onNodeMouseLeave = function (event, node) {
	      var onMouseLeave = _this.props.onMouseLeave;

	      if (onMouseLeave) {
	        onMouseLeave({ event: event, node: node });
	      }
	    }, _this.onNodeContextMenu = function (event, node) {
	      var onRightClick = _this.props.onRightClick;

	      if (onRightClick) {
	        event.preventDefault();
	        onRightClick({ event: event, node: node });
	      }
	    }, _this.setUncontrolledState = function (state) {
	      var needSync = false;
	      var newState = {};

	      Object.keys(state).forEach(function (name) {
	        if (name in _this.props) return;

	        needSync = true;
	        newState[name] = state[name];
	      });

	      if (needSync) {
	        _this.setState(newState);
	      }
	    }, _this.isKeyChecked = function (key) {
	      var _this$state$checkedKe = _this.state.checkedKeys,
	          checkedKeys = _this$state$checkedKe === undefined ? [] : _this$state$checkedKe;

	      return checkedKeys.indexOf(key) !== -1;
	    }, _this.renderTreeNode = function (child, index) {
	      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var _this$state3 = _this.state,
	          keyEntities = _this$state3.keyEntities,
	          _this$state3$expanded = _this$state3.expandedKeys,
	          expandedKeys = _this$state3$expanded === undefined ? [] : _this$state3$expanded,
	          _this$state3$selected = _this$state3.selectedKeys,
	          selectedKeys = _this$state3$selected === undefined ? [] : _this$state3$selected,
	          _this$state3$halfChec = _this$state3.halfCheckedKeys,
	          halfCheckedKeys = _this$state3$halfChec === undefined ? [] : _this$state3$halfChec,
	          _this$state3$loadedKe = _this$state3.loadedKeys,
	          loadedKeys = _this$state3$loadedKe === undefined ? [] : _this$state3$loadedKe,
	          _this$state3$loadingK = _this$state3.loadingKeys,
	          loadingKeys = _this$state3$loadingK === undefined ? [] : _this$state3$loadingK,
	          dragOverNodeKey = _this$state3.dragOverNodeKey,
	          dropPosition = _this$state3.dropPosition;

	      var pos = getPosition(level, index);
	      var key = child.key || pos;

	      if (!keyEntities[key]) {
	        warnOnlyTreeNode();
	        return null;
	      }

	      return React__default.cloneElement(child, {
	        key: key,
	        eventKey: key,
	        expanded: expandedKeys.indexOf(key) !== -1,
	        selected: selectedKeys.indexOf(key) !== -1,
	        loaded: loadedKeys.indexOf(key) !== -1,
	        loading: loadingKeys.indexOf(key) !== -1,
	        checked: _this.isKeyChecked(key),
	        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
	        pos: pos,

	        // [Legacy] Drag props
	        dragOver: dragOverNodeKey === key && dropPosition === 0,
	        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
	        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
	      });
	    }, _temp), _possibleConstructorReturn$1(_this, _ret);
	  }

	  _createClass$1(Tree, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _props = this.props,
	          prefixCls = _props.prefixCls,
	          selectable = _props.selectable,
	          showIcon = _props.showIcon,
	          icon = _props.icon,
	          draggable = _props.draggable,
	          checkable = _props.checkable,
	          checkStrictly = _props.checkStrictly,
	          disabled = _props.disabled,
	          loadData = _props.loadData,
	          filterTreeNode = _props.filterTreeNode,
	          openTransitionName = _props.openTransitionName,
	          openAnimation = _props.openAnimation,
	          switcherIcon = _props.switcherIcon;


	      return {
	        rcTree: {
	          // root: this,

	          prefixCls: prefixCls,
	          selectable: selectable,
	          showIcon: showIcon,
	          icon: icon,
	          switcherIcon: switcherIcon,
	          draggable: draggable,
	          checkable: checkable,
	          checkStrictly: checkStrictly,
	          disabled: disabled,
	          openTransitionName: openTransitionName,
	          openAnimation: openAnimation,

	          loadData: loadData,
	          filterTreeNode: filterTreeNode,
	          renderTreeNode: this.renderTreeNode,
	          isKeyChecked: this.isKeyChecked,

	          onNodeClick: this.onNodeClick,
	          onNodeDoubleClick: this.onNodeDoubleClick,
	          onNodeExpand: this.onNodeExpand,
	          onNodeSelect: this.onNodeSelect,
	          onNodeCheck: this.onNodeCheck,
	          onNodeLoad: this.onNodeLoad,
	          onNodeMouseEnter: this.onNodeMouseEnter,
	          onNodeMouseLeave: this.onNodeMouseLeave,
	          onNodeContextMenu: this.onNodeContextMenu,
	          onNodeDragStart: this.onNodeDragStart,
	          onNodeDragEnter: this.onNodeDragEnter,
	          onNodeDragOver: this.onNodeDragOver,
	          onNodeDragLeave: this.onNodeDragLeave,
	          onNodeDragEnd: this.onNodeDragEnd,
	          onNodeDrop: this.onNodeDrop
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var treeNode = this.state.treeNode;
	      var _props2 = this.props,
	          prefixCls = _props2.prefixCls,
	          className = _props2.className,
	          focusable = _props2.focusable,
	          showLine = _props2.showLine,
	          _props2$tabIndex = _props2.tabIndex,
	          tabIndex = _props2$tabIndex === undefined ? 0 : _props2$tabIndex;

	      var domProps = getDataAndAria(this.props);

	      if (focusable) {
	        domProps.tabIndex = tabIndex;
	        domProps.onKeyDown = this.onKeyDown;
	      }

	      return React__default.createElement(
	        'ul',
	        _extends$1({}, domProps, {
	          className: classnames(prefixCls, className, _defineProperty$1({}, prefixCls + '-show-line', showLine)),
	          role: 'tree',
	          unselectable: 'on'
	        }),
	        mapChildren(treeNode, function (node, index) {
	          return _this2.renderTreeNode(node, index);
	        })
	      );
	    }
	  }], [{
	    key: 'getDerivedStateFromProps',
	    value: function getDerivedStateFromProps(props, prevState) {
	      var prevProps = prevState.prevProps;

	      var newState = {
	        prevProps: props
	      };

	      function needSync(name) {
	        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
	      }

	      // ================== Tree Node ==================
	      var treeNode = null;

	      // Check if `treeData` or `children` changed and save into the state.
	      if (needSync('treeData')) {
	        treeNode = convertDataToTree(props.treeData);
	      } else if (needSync('children')) {
	        treeNode = toArray(props.children);
	      }

	      // Tree support filter function which will break the tree structure in the vdm.
	      // We cache the treeNodes in state so that we can return the treeNode in event trigger.
	      if (treeNode) {
	        newState.treeNode = treeNode;

	        // Calculate the entities data for quick match
	        var entitiesMap = convertTreeToEntities(treeNode);
	        newState.posEntities = entitiesMap.posEntities;
	        newState.keyEntities = entitiesMap.keyEntities;
	      }

	      var keyEntities = newState.keyEntities || prevState.keyEntities;

	      // ================ expandedKeys =================
	      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
	        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
	      } else if (!prevProps && props.defaultExpandAll) {
	        newState.expandedKeys = Object.keys(keyEntities);
	      } else if (!prevProps && props.defaultExpandedKeys) {
	        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
	      }

	      // ================ selectedKeys =================
	      if (props.selectable) {
	        if (needSync('selectedKeys')) {
	          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
	        } else if (!prevProps && props.defaultSelectedKeys) {
	          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
	        }
	      }

	      // ================= checkedKeys =================
	      if (props.checkable) {
	        var checkedKeyEntity = void 0;

	        if (needSync('checkedKeys')) {
	          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
	        } else if (!prevProps && props.defaultCheckedKeys) {
	          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
	        } else if (treeNode) {
	          // If treeNode changed, we also need check it
	          checkedKeyEntity = {
	            checkedKeys: prevState.checkedKeys,
	            halfCheckedKeys: prevState.halfCheckedKeys
	          };
	        }

	        if (checkedKeyEntity) {
	          var _checkedKeyEntity = checkedKeyEntity,
	              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
	              checkedKeys = _checkedKeyEntity$che === undefined ? [] : _checkedKeyEntity$che,
	              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
	              halfCheckedKeys = _checkedKeyEntity$hal === undefined ? [] : _checkedKeyEntity$hal;


	          if (!props.checkStrictly) {
	            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
	            checkedKeys = conductKeys.checkedKeys;
	            halfCheckedKeys = conductKeys.halfCheckedKeys;
	          }

	          newState.checkedKeys = checkedKeys;
	          newState.halfCheckedKeys = halfCheckedKeys;
	        }
	      }
	      // ================= loadedKeys ==================
	      if (needSync('loadedKeys')) {
	        newState.loadedKeys = props.loadedKeys;
	      }

	      return newState;
	    }

	    /**
	     * [Legacy] Select handler is less small than node,
	     * so that this will trigger when drag enter node or select handler.
	     * This is a little tricky if customize css without padding.
	     * Better for use mouse move event to refresh drag state.
	     * But let's just keep it to avoid event trigger logic change.
	     */


	    /**
	     * Only update the value which is not in props
	     */


	    /**
	     * [Legacy] Original logic use `key` as tracking clue.
	     * We have to use `cloneElement` to pass `key`.
	     */

	  }]);

	  return Tree;
	}(React__default.Component);

	Tree.propTypes = {
	  prefixCls: propTypes.string,
	  className: propTypes.string,
	  tabIndex: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  children: propTypes.any,
	  treeData: propTypes.array, // Generate treeNode by children
	  showLine: propTypes.bool,
	  showIcon: propTypes.bool,
	  icon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  focusable: propTypes.bool,
	  selectable: propTypes.bool,
	  disabled: propTypes.bool,
	  multiple: propTypes.bool,
	  checkable: propTypes.oneOfType([propTypes.bool, propTypes.node]),
	  checkStrictly: propTypes.bool,
	  draggable: propTypes.bool,
	  defaultExpandParent: propTypes.bool,
	  autoExpandParent: propTypes.bool,
	  defaultExpandAll: propTypes.bool,
	  defaultExpandedKeys: propTypes.arrayOf(propTypes.string),
	  expandedKeys: propTypes.arrayOf(propTypes.string),
	  defaultCheckedKeys: propTypes.arrayOf(propTypes.string),
	  checkedKeys: propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number])), propTypes.object]),
	  defaultSelectedKeys: propTypes.arrayOf(propTypes.string),
	  selectedKeys: propTypes.arrayOf(propTypes.string),
	  onClick: propTypes.func,
	  onDoubleClick: propTypes.func,
	  onExpand: propTypes.func,
	  onCheck: propTypes.func,
	  onSelect: propTypes.func,
	  onLoad: propTypes.func,
	  loadData: propTypes.func,
	  loadedKeys: propTypes.arrayOf(propTypes.string),
	  onMouseEnter: propTypes.func,
	  onMouseLeave: propTypes.func,
	  onRightClick: propTypes.func,
	  onDragStart: propTypes.func,
	  onDragEnter: propTypes.func,
	  onDragOver: propTypes.func,
	  onDragLeave: propTypes.func,
	  onDragEnd: propTypes.func,
	  onDrop: propTypes.func,
	  filterTreeNode: propTypes.func,
	  openTransitionName: propTypes.string,
	  openAnimation: propTypes.oneOfType([propTypes.string, propTypes.object]),
	  switcherIcon: propTypes.oneOfType([propTypes.node, propTypes.func])
	};
	Tree.childContextTypes = treeContextTypes;
	Tree.defaultProps = {
	  prefixCls: 'rc-tree',
	  showLine: false,
	  showIcon: true,
	  selectable: true,
	  multiple: false,
	  checkable: false,
	  disabled: false,
	  checkStrictly: false,
	  draggable: false,
	  defaultExpandParent: true,
	  autoExpandParent: false,
	  defaultExpandAll: false,
	  defaultExpandedKeys: [],
	  defaultCheckedKeys: [],
	  defaultSelectedKeys: []
	};


	polyfill(Tree);

	Tree.TreeNode = TreeNode$1;

	var internalValProp = propTypes.oneOfType([propTypes.string, propTypes.number]);
	function genArrProps(propType) {
	  return propTypes.oneOfType([propType, propTypes.arrayOf(propType)]);
	}
	/**
	 * Origin code check `multiple` is true when `treeCheckStrictly` & `labelInValue`.
	 * But in process logic is already cover to array.
	 * Check array is not necessary. Let's simplify this check logic.
	 */

	function valueProp() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var props = args[0],
	      propName = args[1],
	      Component = args[2];

	  if (isLabelInValue(props)) {
	    var _err = genArrProps(propTypes.shape({
	      label: propTypes.node,
	      value: internalValProp
	    })).apply(void 0, args);

	    if (_err) {
	      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(Component, "`. ") + "You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.");
	    }

	    return null;
	  }

	  var err = genArrProps(internalValProp).apply(void 0, args);

	  if (err) {
	    return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(Component, "`. ") + "You should use string or [string] instead.");
	  }

	  return null;
	}

	/**
	 * SelectNode wrapped the tree node.
	 * Let's use SelectNode instead of TreeNode
	 * since TreeNode is so confuse here.
	 */

	var SelectNode = function SelectNode(props) {
	  return React__default.createElement(TreeNode$1, props);
	};

	SelectNode.propTypes = objectSpread({}, TreeNode$1.propTypes, {
	  value: valueProp
	}); // Let Tree trade as TreeNode to reuse this for performance saving.

	SelectNode.isTreeNode = 1;

	var SHOW_ALL = 'SHOW_ALL';
	var SHOW_PARENT = 'SHOW_PARENT';
	var SHOW_CHILD = 'SHOW_CHILD';

	var warnDeprecatedLabel = false; // =================== MISC ====================

	function toTitle(title) {
	  if (typeof title === 'string') {
	    return title;
	  }

	  return null;
	}
	function toArray$2(data) {
	  if (!data) return [];
	  return Array.isArray(data) ? data : [data];
	} // Shallow copy of React 16.3 createRef api

	function createRef() {
	  var func = function setRef(node) {
	    func.current = node;
	  };

	  return func;
	} // =============== Legacy ===============

	var UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};
	var UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'unselectable'
	};
	/**
	 * Convert position list to hierarchy structure.
	 * This is little hack since use '-' to split the position.
	 */

	function flatToHierarchy(positionList) {
	  if (!positionList.length) {
	    return [];
	  }

	  var entrances = {}; // Prepare the position map

	  var posMap = {};
	  var parsedList = positionList.slice().map(function (entity) {
	    var clone = objectSpread({}, entity, {
	      fields: entity.pos.split('-')
	    });

	    delete clone.children;
	    return clone;
	  });
	  parsedList.forEach(function (entity) {
	    posMap[entity.pos] = entity;
	  });
	  parsedList.sort(function (a, b) {
	    return a.fields.length - b.fields.length;
	  }); // Create the hierarchy

	  parsedList.forEach(function (entity) {
	    var parentPos = entity.fields.slice(0, -1).join('-');
	    var parentEntity = posMap[parentPos];

	    if (!parentEntity) {
	      entrances[entity.pos] = entity;
	    } else {
	      parentEntity.children = parentEntity.children || [];
	      parentEntity.children.push(entity);
	    } // Some time position list provide `key`, we don't need it


	    delete entity.key;
	    delete entity.fields;
	  });
	  return Object.keys(entrances).map(function (key) {
	    return entrances[key];
	  });
	} // =============== Accessibility ===============

	var ariaId = 0;
	function generateAriaId(prefix) {
	  ariaId += 1;
	  return "".concat(prefix, "_").concat(ariaId);
	}
	function isLabelInValue(props) {
	  var treeCheckable = props.treeCheckable,
	      treeCheckStrictly = props.treeCheckStrictly,
	      labelInValue = props.labelInValue;

	  if (treeCheckable && treeCheckStrictly) {
	    return true;
	  }

	  return labelInValue || false;
	} // =================== Tree ====================

	function parseSimpleTreeData(treeData, _ref) {
	  var id = _ref.id,
	      pId = _ref.pId,
	      rootPId = _ref.rootPId;
	  var keyNodes = {};
	  var rootNodeList = []; // Fill in the map

	  var nodeList = treeData.map(function (node) {
	    var clone = objectSpread({}, node);

	    var key = clone[id];
	    keyNodes[key] = clone;
	    clone.key = clone.key || key;
	    return clone;
	  }); // Connect tree

	  nodeList.forEach(function (node) {
	    var parentKey = node[pId];
	    var parent = keyNodes[parentKey]; // Fill parent

	    if (parent) {
	      parent.children = parent.children || [];
	      parent.children.push(node);
	    } // Fill root tree node


	    if (parentKey === rootPId || !parent && rootPId === null) {
	      rootNodeList.push(node);
	    }
	  });
	  return rootNodeList;
	}
	/**
	 * Detect if position has relation.
	 * e.g. 1-2 related with 1-2-3
	 * e.g. 1-3-2 related with 1
	 * e.g. 1-2 not related with 1-21
	 */

	function isPosRelated(pos1, pos2) {
	  var fields1 = pos1.split('-');
	  var fields2 = pos2.split('-');
	  var minLen = Math.min(fields1.length, fields2.length);

	  for (var i = 0; i < minLen; i += 1) {
	    if (fields1[i] !== fields2[i]) {
	      return false;
	    }
	  }

	  return true;
	}
	/**
	 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
	 * We convert entity to { node, pos, children } format.
	 * This is legacy bug but we still need to do with it.
	 * @param entity
	 */

	function cleanEntity(_ref2) {
	  var node = _ref2.node,
	      pos = _ref2.pos,
	      children = _ref2.children;
	  var instance = {
	    node: node,
	    pos: pos
	  };

	  if (children) {
	    instance.children = children.map(cleanEntity);
	  }

	  return instance;
	}
	/**
	 * Get a filtered TreeNode list by provided treeNodes.
	 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
	 * we have to convert `treeNodes > data > treeNodes` to keep the key.
	 * Such performance hungry!
	 */

	function getFilterTree(treeNodes, searchValue, filterFunc, valueEntities) {
	  if (!searchValue) {
	    return null;
	  }

	  function mapFilteredNodeToData(node) {
	    if (!node) return null;
	    var match = false;

	    if (filterFunc(searchValue, node)) {
	      match = true;
	    }

	    var children = toNodeArray(node.props.children).map(mapFilteredNodeToData).filter(function (n) {
	      return n;
	    });

	    if (children.length || match) {
	      return React__default.createElement(SelectNode, _extends_1({}, node.props, {
	        key: valueEntities[node.props.value].key
	      }), children);
	    }

	    return null;
	  }

	  return treeNodes.map(mapFilteredNodeToData).filter(function (node) {
	    return node;
	  });
	} // =================== Value ===================

	/**
	 * Convert value to array format to make logic simplify.
	 */

	function formatInternalValue(value, props) {
	  var valueList = toArray$2(value); // Parse label in value

	  if (isLabelInValue(props)) {
	    return valueList.map(function (val) {
	      if (_typeof_1(val) !== 'object' || !val) {
	        return {
	          value: '',
	          label: ''
	        };
	      }

	      return val;
	    });
	  }

	  return valueList.map(function (val) {
	    return {
	      value: val
	    };
	  });
	}
	function getLabel(wrappedValue, entity, treeNodeLabelProp) {
	  if (wrappedValue.label) {
	    return wrappedValue.label;
	  }

	  if (entity && entity.node.props) {
	    return entity.node.props[treeNodeLabelProp];
	  } // Since value without entity will be in missValueList.
	  // This code will never reached, but we still need this in case.


	  return wrappedValue.value;
	}
	/**
	 * Convert internal state `valueList` to user needed value list.
	 * This will return an array list. You need check if is not multiple when return.
	 *
	 * `allCheckedNodes` is used for `treeCheckStrictly`
	 */

	function formatSelectorValue(valueList, props, valueEntities) {
	  var treeNodeLabelProp = props.treeNodeLabelProp,
	      treeCheckable = props.treeCheckable,
	      treeCheckStrictly = props.treeCheckStrictly,
	      showCheckedStrategy = props.showCheckedStrategy; // Will hide some value if `showCheckedStrategy` is set

	  if (treeCheckable && !treeCheckStrictly) {
	    var values = {};
	    valueList.forEach(function (wrappedValue) {
	      values[wrappedValue.value] = wrappedValue;
	    });
	    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
	      var value = _ref3.value;
	      return valueEntities[value];
	    }));

	    if (showCheckedStrategy === SHOW_PARENT) {
	      // Only get the parent checked value
	      return hierarchyList.map(function (_ref4) {
	        var value = _ref4.node.props.value;
	        return {
	          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
	          value: value
	        };
	      });
	    } else if (showCheckedStrategy === SHOW_CHILD) {
	      // Only get the children checked value
	      var targetValueList = []; // Find the leaf children

	      var traverse = function traverse(_ref5) {
	        var value = _ref5.node.props.value,
	            children = _ref5.children;

	        if (!children || children.length === 0) {
	          targetValueList.push({
	            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
	            value: value
	          });
	          return;
	        }

	        children.forEach(function (entity) {
	          traverse(entity);
	        });
	      };

	      hierarchyList.forEach(function (entity) {
	        traverse(entity);
	      });
	      return targetValueList;
	    }
	  }

	  return valueList.map(function (wrappedValue) {
	    return {
	      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
	      value: wrappedValue.value
	    };
	  });
	}
	/**
	 * Use `rc-tree` convertDataToTree to convert treeData to TreeNodes.
	 * This will change the label to title value
	 */

	function processProps(props) {
	  var title = props.title,
	      label = props.label,
	      key = props.key,
	      value = props.value;

	  var cloneProps = objectSpread({}, props); // Warning user not to use deprecated label prop.


	  if (label && !title) {
	    if (!warnDeprecatedLabel) {
	      warning_1$1(false, '\'label\' in treeData is deprecated. Please use \'title\' instead.');
	      warnDeprecatedLabel = true;
	    }

	    cloneProps.title = label;
	  }

	  if (!key) {
	    cloneProps.key = value;
	  }

	  return cloneProps;
	}

	function convertDataToTree$1(treeData) {
	  return util_14(treeData, {
	    processProps: processProps
	  });
	}
	/**
	 * Use `rc-tree` convertTreeToEntities for entities calculation.
	 * We have additional entities of `valueEntities`
	 */

	function initWrapper(wrapper) {
	  return objectSpread({}, wrapper, {
	    valueEntities: {}
	  });
	}

	function processEntity(entity, wrapper) {
	  var value = entity.node.props.value;
	  entity.value = value; // This should be empty, or will get error message.

	  var currentEntity = wrapper.valueEntities[value];

	  if (currentEntity) {
	    warning_1$1(false, "Conflict! value of node '".concat(entity.key, "' (").concat(value, ") has already used by node '").concat(currentEntity.key, "'."));
	  }

	  wrapper.valueEntities[value] = entity;
	}

	function convertTreeToEntities$1(treeNodes) {
	  return util_15(treeNodes, {
	    initWrapper: initWrapper,
	    processEntity: processEntity
	  });
	}
	/**
	 * https://github.com/ant-design/ant-design/issues/13328
	 * We need calculate the half check key when searchValue is set.
	 */
	// TODO: This logic may better move to rc-tree

	function getHalfCheckedKeys(valueList, valueEntities) {
	  var values = {}; // Fill checked keys

	  valueList.forEach(function (_ref6) {
	    var value = _ref6.value;
	    values[value] = false;
	  }); // Fill half checked keys

	  valueList.forEach(function (_ref7) {
	    var value = _ref7.value;
	    var current = valueEntities[value];

	    while (current && current.parent) {
	      var parentValue = current.parent.value;
	      if (parentValue in values) break;
	      values[parentValue] = true;
	      current = current.parent;
	    }
	  }); // Get half keys

	  return Object.keys(values).filter(function (value) {
	    return values[value];
	  }).map(function (value) {
	    return valueEntities[value].key;
	  });
	}
	var conductCheck$1 = util_17;

	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    },
	    ignoreShake: true
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    },
	    ignoreShake: true
	  }
	};

	var SelectTrigger =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(SelectTrigger, _React$Component);

	  function SelectTrigger() {
	    var _this;

	    classCallCheck(this, SelectTrigger);

	    _this = possibleConstructorReturn(this, getPrototypeOf(SelectTrigger).call(this));

	    _this.getDropdownTransitionName = function () {
	      var _this$props = _this.props,
	          transitionName = _this$props.transitionName,
	          animation = _this$props.animation,
	          dropdownPrefixCls = _this$props.dropdownPrefixCls;

	      if (!transitionName && animation) {
	        return "".concat(dropdownPrefixCls, "-").concat(animation);
	      }

	      return transitionName;
	    };

	    _this.forcePopupAlign = function () {
	      var $trigger = _this.triggerRef.current;

	      if ($trigger) {
	        $trigger.forcePopupAlign();
	      }
	    };

	    _this.triggerRef = createRef();
	    return _this;
	  }

	  createClass(SelectTrigger, [{
	    key: "render",
	    value: function render() {
	      var _classNames;

	      var _this$props2 = this.props,
	          disabled = _this$props2.disabled,
	          isMultiple = _this$props2.isMultiple,
	          dropdownPopupAlign = _this$props2.dropdownPopupAlign,
	          dropdownMatchSelectWidth = _this$props2.dropdownMatchSelectWidth,
	          dropdownClassName = _this$props2.dropdownClassName,
	          dropdownStyle = _this$props2.dropdownStyle,
	          onDropdownVisibleChange = _this$props2.onDropdownVisibleChange,
	          getPopupContainer = _this$props2.getPopupContainer,
	          dropdownPrefixCls = _this$props2.dropdownPrefixCls,
	          popupElement = _this$props2.popupElement,
	          open = _this$props2.open,
	          children = _this$props2.children; // TODO: [Legacy] Use new action when trigger fixed: https://github.com/react-component/trigger/pull/86
	      // When false do nothing with the width
	      // ref: https://github.com/ant-design/ant-design/issues/10927

	      var stretch;

	      if (dropdownMatchSelectWidth !== false) {
	        stretch = dropdownMatchSelectWidth ? 'width' : 'minWidth';
	      }

	      return React__default.createElement(Trigger, {
	        ref: this.triggerRef,
	        action: disabled ? [] : ['click'],
	        popupPlacement: "bottomLeft",
	        builtinPlacements: BUILT_IN_PLACEMENTS,
	        popupAlign: dropdownPopupAlign,
	        prefixCls: dropdownPrefixCls,
	        popupTransitionName: this.getDropdownTransitionName(),
	        onPopupVisibleChange: onDropdownVisibleChange,
	        popup: popupElement,
	        popupVisible: open,
	        getPopupContainer: getPopupContainer,
	        stretch: stretch,
	        popupClassName: classnames(dropdownClassName, (_classNames = {}, defineProperty(_classNames, "".concat(dropdownPrefixCls, "--multiple"), isMultiple), defineProperty(_classNames, "".concat(dropdownPrefixCls, "--single"), !isMultiple), _classNames)),
	        popupStyle: dropdownStyle
	      }, children);
	    }
	  }]);

	  return SelectTrigger;
	}(React__default.Component);

	SelectTrigger.propTypes = {
	  // Pass by outside user props
	  disabled: propTypes.bool,
	  showSearch: propTypes.bool,
	  prefixCls: propTypes.string,
	  dropdownPopupAlign: propTypes.object,
	  dropdownClassName: propTypes.string,
	  dropdownStyle: propTypes.object,
	  transitionName: propTypes.string,
	  animation: propTypes.string,
	  getPopupContainer: propTypes.func,
	  children: propTypes.node,
	  dropdownMatchSelectWidth: propTypes.bool,
	  // Pass by Select
	  isMultiple: propTypes.bool,
	  dropdownPrefixCls: propTypes.string,
	  onDropdownVisibleChange: propTypes.func,
	  popupElement: propTypes.node,
	  open: propTypes.bool
	};
	polyfill(SelectTrigger);

	var selectorPropTypes = {
	  prefixCls: propTypes.string,
	  className: propTypes.string,
	  style: propTypes.object,
	  open: propTypes.bool,
	  selectorValueList: propTypes.array,
	  allowClear: propTypes.bool,
	  showArrow: propTypes.bool,
	  onClick: propTypes.func,
	  onBlur: propTypes.func,
	  onFocus: propTypes.func,
	  removeSelected: propTypes.func,
	  // Pass by component
	  ariaId: propTypes.string,
	  inputIcon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  clearIcon: propTypes.oneOfType([propTypes.node, propTypes.func])
	};
	var selectorContextTypes = {
	  onSelectorFocus: propTypes.func.isRequired,
	  onSelectorBlur: propTypes.func.isRequired,
	  onSelectorKeyDown: propTypes.func.isRequired,
	  onSelectorClear: propTypes.func.isRequired
	};
	function generateSelector (modeName) {
	  var BaseSelector =
	  /*#__PURE__*/
	  function (_React$Component) {
	    inherits(BaseSelector, _React$Component);

	    function BaseSelector() {
	      var _this;

	      classCallCheck(this, BaseSelector);

	      _this = possibleConstructorReturn(this, getPrototypeOf(BaseSelector).call(this));

	      _this.onFocus = function () {
	        var _this$props = _this.props,
	            onFocus = _this$props.onFocus,
	            focused = _this$props.focused;
	        var onSelectorFocus = _this.context.rcTreeSelect.onSelectorFocus;

	        if (!focused) {
	          onSelectorFocus();
	        }

	        if (onFocus) {
	          onFocus.apply(void 0, arguments);
	        }
	      };

	      _this.onBlur = function () {
	        var onBlur = _this.props.onBlur;
	        var onSelectorBlur = _this.context.rcTreeSelect.onSelectorBlur; // TODO: Not trigger when is inner component get focused

	        onSelectorBlur();

	        if (onBlur) {
	          onBlur.apply(void 0, arguments);
	        }
	      };

	      _this.focus = function () {
	        _this.domRef.current.focus();
	      };

	      _this.blur = function () {
	        _this.domRef.current.focus();
	      };

	      _this.domRef = createRef();
	      return _this;
	    }

	    createClass(BaseSelector, [{
	      key: "renderClear",
	      value: function renderClear() {
	        var _this$props2 = this.props,
	            prefixCls = _this$props2.prefixCls,
	            allowClear = _this$props2.allowClear,
	            selectorValueList = _this$props2.selectorValueList,
	            clearIcon = _this$props2.clearIcon;
	        var onSelectorClear = this.context.rcTreeSelect.onSelectorClear;

	        if (!allowClear || !selectorValueList.length || !selectorValueList[0].value) {
	          return null;
	        }

	        return React__default.createElement("span", {
	          key: "clear",
	          className: "".concat(prefixCls, "-selection__clear"),
	          onClick: onSelectorClear
	        }, typeof clearIcon === 'function' ? React__default.createElement(clearIcon, objectSpread({}, this.props)) : clearIcon);
	      }
	    }, {
	      key: "renderArrow",
	      value: function renderArrow() {
	        var _this$props3 = this.props,
	            prefixCls = _this$props3.prefixCls,
	            showArrow = _this$props3.showArrow,
	            inputIcon = _this$props3.inputIcon;

	        if (!showArrow) {
	          return null;
	        }

	        return React__default.createElement("span", {
	          key: "arrow",
	          className: "".concat(prefixCls, "-arrow"),
	          style: {
	            outline: 'none'
	          }
	        }, typeof inputIcon === 'function' ? React__default.createElement(inputIcon, objectSpread({}, this.props)) : inputIcon);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _classNames;

	        var _this$props4 = this.props,
	            prefixCls = _this$props4.prefixCls,
	            className = _this$props4.className,
	            style = _this$props4.style,
	            open = _this$props4.open,
	            focused = _this$props4.focused,
	            disabled = _this$props4.disabled,
	            allowClear = _this$props4.allowClear,
	            onClick = _this$props4.onClick,
	            ariaId = _this$props4.ariaId,
	            renderSelection = _this$props4.renderSelection,
	            renderPlaceholder = _this$props4.renderPlaceholder,
	            tabIndex = _this$props4.tabIndex;
	        var onSelectorKeyDown = this.context.rcTreeSelect.onSelectorKeyDown;
	        var myTabIndex = tabIndex;

	        if (disabled) {
	          myTabIndex = null;
	        }

	        return React__default.createElement("span", {
	          style: style,
	          onClick: onClick,
	          className: classnames(className, prefixCls, (_classNames = {}, defineProperty(_classNames, "".concat(prefixCls, "-open"), open), defineProperty(_classNames, "".concat(prefixCls, "-focused"), open || focused), defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), defineProperty(_classNames, "".concat(prefixCls, "-enabled"), !disabled), defineProperty(_classNames, "".concat(prefixCls, "-allow-clear"), allowClear), _classNames)),
	          ref: this.domRef,
	          role: "combobox",
	          "aria-expanded": open,
	          "aria-owns": open ? ariaId : undefined,
	          "aria-controls": open ? ariaId : undefined,
	          "aria-haspopup": "listbox",
	          "aria-disabled": disabled,
	          tabIndex: myTabIndex,
	          onFocus: this.onFocus,
	          onBlur: this.onBlur,
	          onKeyDown: onSelectorKeyDown
	        }, React__default.createElement("span", {
	          key: "selection",
	          className: classnames("".concat(prefixCls, "-selection"), "".concat(prefixCls, "-selection--").concat(modeName))
	        }, renderSelection(), this.renderClear(), this.renderArrow(), renderPlaceholder && renderPlaceholder()));
	      }
	    }]);

	    return BaseSelector;
	  }(React__default.Component);

	  BaseSelector.propTypes = objectSpread({}, selectorPropTypes, {
	    // Pass by HOC
	    renderSelection: propTypes.func.isRequired,
	    renderPlaceholder: propTypes.func,
	    tabIndex: propTypes.number
	  });
	  BaseSelector.contextTypes = {
	    rcTreeSelect: propTypes.shape(objectSpread({}, selectorContextTypes))
	  };
	  BaseSelector.defaultProps = {
	    tabIndex: 0
	  };
	  polyfill(BaseSelector);
	  return BaseSelector;
	}

	var popupContextTypes = {
	  onPopupKeyDown: propTypes.func.isRequired,
	  onTreeNodeSelect: propTypes.func.isRequired,
	  onTreeNodeCheck: propTypes.func.isRequired
	};

	var BasePopup =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(BasePopup, _React$Component);

	  function BasePopup(props) {
	    var _this;

	    classCallCheck(this, BasePopup);

	    _this = possibleConstructorReturn(this, getPrototypeOf(BasePopup).call(this));

	    _this.onTreeExpand = function (expandedKeyList) {
	      var _this$props = _this.props,
	          treeExpandedKeys = _this$props.treeExpandedKeys,
	          onTreeExpand = _this$props.onTreeExpand,
	          onTreeExpanded = _this$props.onTreeExpanded; // Set uncontrolled state

	      if (!treeExpandedKeys) {
	        _this.setState({
	          expandedKeyList: expandedKeyList
	        }, onTreeExpanded);
	      }

	      if (onTreeExpand) {
	        onTreeExpand(expandedKeyList);
	      }
	    };

	    _this.onLoad = function (loadedKeys) {
	      _this.setState({
	        loadedKeys: loadedKeys
	      });
	    };

	    _this.getLoadData = function () {
	      var _this$props2 = _this.props,
	          loadData = _this$props2.loadData,
	          upperSearchValue = _this$props2.upperSearchValue;
	      if (upperSearchValue) return null;
	      return loadData;
	    };

	    _this.filterTreeNode = function (treeNode) {
	      var _this$props3 = _this.props,
	          upperSearchValue = _this$props3.upperSearchValue,
	          treeNodeFilterProp = _this$props3.treeNodeFilterProp;
	      var filterVal = treeNode.props[treeNodeFilterProp];

	      if (typeof filterVal === 'string') {
	        return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
	      }

	      return false;
	    };

	    _this.renderNotFound = function () {
	      var _this$props4 = _this.props,
	          prefixCls = _this$props4.prefixCls,
	          notFoundContent = _this$props4.notFoundContent;
	      return React__default.createElement("span", {
	        className: "".concat(prefixCls, "-not-found")
	      }, notFoundContent);
	    };

	    var treeDefaultExpandAll = props.treeDefaultExpandAll,
	        treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
	        keyEntities = props.keyEntities; // TODO: make `expandedKeyList` control

	    var _expandedKeyList = treeDefaultExpandedKeys;

	    if (treeDefaultExpandAll) {
	      _expandedKeyList = Object.keys(keyEntities);
	    }

	    _this.state = {
	      keyList: [],
	      expandedKeyList: _expandedKeyList,
	      // Cache `expandedKeyList` when tree is in filter. This is used in `getDerivedStateFromProps`
	      cachedExpandedKeyList: [],
	      // eslint-disable-line react/no-unused-state
	      loadedKeys: []
	    };
	    return _this;
	  }

	  createClass(BasePopup, [{
	    key: "render",
	    value: function render() {
	      var _this$state = this.state,
	          keyList = _this$state.keyList,
	          expandedKeyList = _this$state.expandedKeyList,
	          loadedKeys = _this$state.loadedKeys;
	      var _this$props5 = this.props,
	          prefixCls = _this$props5.prefixCls,
	          treeNodes = _this$props5.treeNodes,
	          filteredTreeNodes = _this$props5.filteredTreeNodes,
	          treeIcon = _this$props5.treeIcon,
	          treeLine = _this$props5.treeLine,
	          treeCheckable = _this$props5.treeCheckable,
	          treeCheckStrictly = _this$props5.treeCheckStrictly,
	          multiple = _this$props5.multiple,
	          ariaId = _this$props5.ariaId,
	          renderSearch = _this$props5.renderSearch,
	          switcherIcon = _this$props5.switcherIcon,
	          searchHalfCheckedKeys = _this$props5.searchHalfCheckedKeys;
	      var _this$context$rcTreeS = this.context.rcTreeSelect,
	          onPopupKeyDown = _this$context$rcTreeS.onPopupKeyDown,
	          onTreeNodeSelect = _this$context$rcTreeS.onTreeNodeSelect,
	          onTreeNodeCheck = _this$context$rcTreeS.onTreeNodeCheck;
	      var loadData = this.getLoadData();
	      var treeProps = {};

	      if (treeCheckable) {
	        treeProps.checkedKeys = keyList;
	      } else {
	        treeProps.selectedKeys = keyList;
	      }

	      var $notFound;
	      var $treeNodes;

	      if (filteredTreeNodes) {
	        if (filteredTreeNodes.length) {
	          treeProps.checkStrictly = true;
	          $treeNodes = filteredTreeNodes; // Fill halfCheckedKeys

	          if (treeCheckable && !treeCheckStrictly) {
	            treeProps.checkedKeys = {
	              checked: keyList,
	              halfChecked: searchHalfCheckedKeys
	            };
	          }
	        } else {
	          $notFound = this.renderNotFound();
	        }
	      } else if (!treeNodes.length) {
	        $notFound = this.renderNotFound();
	      } else {
	        $treeNodes = treeNodes;
	      }

	      var $tree;

	      if ($notFound) {
	        $tree = $notFound;
	      } else {
	        $tree = React__default.createElement(Tree, _extends_1({
	          prefixCls: "".concat(prefixCls, "-tree"),
	          showIcon: treeIcon,
	          showLine: treeLine,
	          selectable: !treeCheckable,
	          checkable: treeCheckable,
	          checkStrictly: treeCheckStrictly,
	          multiple: multiple,
	          loadData: loadData,
	          loadedKeys: loadedKeys,
	          expandedKeys: expandedKeyList,
	          filterTreeNode: this.filterTreeNode,
	          onSelect: onTreeNodeSelect,
	          onCheck: onTreeNodeCheck,
	          onExpand: this.onTreeExpand,
	          onLoad: this.onLoad,
	          switcherIcon: switcherIcon
	        }, treeProps), $treeNodes);
	      }

	      return React__default.createElement("div", {
	        role: "listbox",
	        id: ariaId,
	        onKeyDown: onPopupKeyDown,
	        tabIndex: -1
	      }, renderSearch ? renderSearch() : null, $tree);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      var _ref = prevState || {},
	          _ref$prevProps = _ref.prevProps,
	          prevProps = _ref$prevProps === void 0 ? {} : _ref$prevProps,
	          loadedKeys = _ref.loadedKeys,
	          expandedKeyList = _ref.expandedKeyList,
	          cachedExpandedKeyList = _ref.cachedExpandedKeyList;

	      var valueList = nextProps.valueList,
	          valueEntities = nextProps.valueEntities,
	          keyEntities = nextProps.keyEntities,
	          treeExpandedKeys = nextProps.treeExpandedKeys,
	          filteredTreeNodes = nextProps.filteredTreeNodes,
	          upperSearchValue = nextProps.upperSearchValue;
	      var newState = {
	        prevProps: nextProps
	      }; // Check value update

	      if (valueList !== prevProps.valueList) {
	        newState.keyList = valueList.map(function (_ref2) {
	          var value = _ref2.value;
	          return valueEntities[value];
	        }).filter(function (entity) {
	          return entity;
	        }).map(function (_ref3) {
	          var key = _ref3.key;
	          return key;
	        });
	      } // Show all when tree is in filter mode


	      if (!treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
	        newState.expandedKeyList = Object.keys(keyEntities);
	      } // Cache `expandedKeyList` when filter set


	      if (upperSearchValue && !prevProps.upperSearchValue) {
	        newState.cachedExpandedKeyList = expandedKeyList;
	      } else if (!upperSearchValue && prevProps.upperSearchValue && !treeExpandedKeys) {
	        newState.expandedKeyList = cachedExpandedKeyList || [];
	        newState.cachedExpandedKeyList = [];
	      } // Use expandedKeys if provided


	      if (prevProps.treeExpandedKeys !== treeExpandedKeys) {
	        newState.expandedKeyList = treeExpandedKeys;
	      } // Clean loadedKeys if key not exist in keyEntities anymore


	      if (nextProps.loadData) {
	        newState.loadedKeys = loadedKeys.filter(function (key) {
	          return key in keyEntities;
	        });
	      }

	      return newState;
	    }
	  }]);

	  return BasePopup;
	}(React__default.Component);

	BasePopup.propTypes = {
	  prefixCls: propTypes.string,
	  upperSearchValue: propTypes.string,
	  valueList: propTypes.array,
	  searchHalfCheckedKeys: propTypes.array,
	  valueEntities: propTypes.object,
	  keyEntities: propTypes.object,
	  treeIcon: propTypes.bool,
	  treeLine: propTypes.bool,
	  treeNodeFilterProp: propTypes.string,
	  treeCheckable: propTypes.oneOfType([propTypes.bool, propTypes.node]),
	  treeCheckStrictly: propTypes.bool,
	  treeDefaultExpandAll: propTypes.bool,
	  treeDefaultExpandedKeys: propTypes.array,
	  treeExpandedKeys: propTypes.array,
	  loadData: propTypes.func,
	  multiple: propTypes.bool,
	  onTreeExpand: propTypes.func,
	  treeNodes: propTypes.node,
	  filteredTreeNodes: propTypes.node,
	  notFoundContent: propTypes.node,
	  ariaId: propTypes.string,
	  switcherIcon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  // HOC
	  renderSearch: propTypes.func,
	  onTreeExpanded: propTypes.func
	};
	BasePopup.contextTypes = {
	  rcTreeSelect: propTypes.shape(objectSpread({}, popupContextTypes))
	};
	polyfill(BasePopup);

	var Selector = generateSelector('single');

	var SingleSelector =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(SingleSelector, _React$Component);

	  function SingleSelector() {
	    var _this;

	    classCallCheck(this, SingleSelector);

	    _this = possibleConstructorReturn(this, getPrototypeOf(SingleSelector).call(this));

	    _this.focus = function () {
	      _this.selectorRef.current.focus();
	    };

	    _this.blur = function () {
	      _this.selectorRef.current.blur();
	    };

	    _this.renderSelection = function () {
	      var _this$props = _this.props,
	          selectorValueList = _this$props.selectorValueList,
	          placeholder = _this$props.placeholder,
	          prefixCls = _this$props.prefixCls;
	      var innerNode;

	      if (selectorValueList.length) {
	        var _selectorValueList$ = selectorValueList[0],
	            label = _selectorValueList$.label,
	            value = _selectorValueList$.value;
	        innerNode = React__default.createElement("span", {
	          key: "value",
	          title: toTitle(label),
	          className: "".concat(prefixCls, "-selection-selected-value")
	        }, label || value);
	      } else {
	        innerNode = React__default.createElement("span", {
	          key: "placeholder",
	          className: "".concat(prefixCls, "-selection__placeholder")
	        }, placeholder);
	      }

	      return React__default.createElement("span", {
	        className: "".concat(prefixCls, "-selection__rendered")
	      }, innerNode);
	    };

	    _this.selectorRef = createRef();
	    return _this;
	  }

	  createClass(SingleSelector, [{
	    key: "render",
	    value: function render() {
	      return React__default.createElement(Selector, _extends_1({}, this.props, {
	        ref: this.selectorRef,
	        renderSelection: this.renderSelection
	      }));
	    }
	  }]);

	  return SingleSelector;
	}(React__default.Component);

	SingleSelector.propTypes = objectSpread({}, selectorPropTypes);

	var searchContextTypes = {
	  onSearchInputChange: propTypes.func.isRequired
	};

	var SearchInput =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(SearchInput, _React$Component);

	  function SearchInput() {
	    var _this;

	    classCallCheck(this, SearchInput);

	    _this = possibleConstructorReturn(this, getPrototypeOf(SearchInput).call(this));

	    _this.alignInputWidth = function () {
	      _this.inputRef.current.style.width = "".concat(_this.mirrorInputRef.current.clientWidth, "px");
	    };

	    _this.focus = function (isDidMount) {
	      if (_this.inputRef.current) {
	        _this.inputRef.current.focus();

	        if (isDidMount) {
	          setTimeout(function () {
	            _this.inputRef.current.focus();
	          }, 0);
	        }
	      }
	    };

	    _this.blur = function () {
	      if (_this.inputRef.current) {
	        _this.inputRef.current.blur();
	      }
	    };

	    _this.inputRef = createRef();
	    _this.mirrorInputRef = createRef();
	    return _this;
	  }

	  createClass(SearchInput, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this$props = this.props,
	          open = _this$props.open,
	          needAlign = _this$props.needAlign;

	      if (needAlign) {
	        this.alignInputWidth();
	      }

	      if (open) {
	        this.focus(true);
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this$props2 = this.props,
	          open = _this$props2.open,
	          searchValue = _this$props2.searchValue,
	          needAlign = _this$props2.needAlign;

	      if (open && prevProps.open !== open) {
	        this.focus();
	      }

	      if (needAlign && searchValue !== prevProps.searchValue) {
	        this.alignInputWidth();
	      }
	    }
	    /**
	     * `scrollWidth` is not correct in IE, do the workaround.
	     * ref: https://github.com/react-component/tree-select/issues/65
	     */

	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props3 = this.props,
	          searchValue = _this$props3.searchValue,
	          prefixCls = _this$props3.prefixCls,
	          disabled = _this$props3.disabled,
	          renderPlaceholder = _this$props3.renderPlaceholder,
	          open = _this$props3.open,
	          ariaId = _this$props3.ariaId;
	      var _this$context$rcTreeS = this.context.rcTreeSelect,
	          onSearchInputChange = _this$context$rcTreeS.onSearchInputChange,
	          onSearchInputKeyDown = _this$context$rcTreeS.onSearchInputKeyDown;
	      return React__default.createElement("span", {
	        className: "".concat(prefixCls, "-search__field__wrap")
	      }, React__default.createElement("input", {
	        type: "text",
	        ref: this.inputRef,
	        onChange: onSearchInputChange,
	        onKeyDown: onSearchInputKeyDown,
	        value: searchValue,
	        disabled: disabled,
	        className: "".concat(prefixCls, "-search__field"),
	        "aria-label": "filter select",
	        "aria-autocomplete": "list",
	        "aria-controls": open ? ariaId : undefined,
	        "aria-multiline": "false"
	      }), React__default.createElement("span", {
	        ref: this.mirrorInputRef,
	        className: "".concat(prefixCls, "-search__field__mirror")
	      }, searchValue, "\xA0"), renderPlaceholder ? renderPlaceholder() : null);
	    }
	  }]);

	  return SearchInput;
	}(React__default.Component);

	SearchInput.propTypes = {
	  open: propTypes.bool,
	  searchValue: propTypes.string,
	  prefixCls: propTypes.string,
	  disabled: propTypes.bool,
	  renderPlaceholder: propTypes.func,
	  needAlign: propTypes.bool,
	  ariaId: propTypes.string
	};
	SearchInput.contextTypes = {
	  rcTreeSelect: propTypes.shape(objectSpread({}, searchContextTypes))
	};
	polyfill(SearchInput);

	var Selection =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(Selection, _React$Component);

	  function Selection() {
	    var _getPrototypeOf2;

	    var _this;

	    classCallCheck(this, Selection);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Selection)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _this.onRemove = function (event) {
	      var _this$props = _this.props,
	          onRemove = _this$props.onRemove,
	          value = _this$props.value;
	      onRemove(event, value);
	      event.stopPropagation();
	    };

	    return _this;
	  }

	  createClass(Selection, [{
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          prefixCls = _this$props2.prefixCls,
	          maxTagTextLength = _this$props2.maxTagTextLength,
	          label = _this$props2.label,
	          value = _this$props2.value,
	          onRemove = _this$props2.onRemove,
	          removeIcon = _this$props2.removeIcon;
	      var content = label || value;

	      if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	        content = "".concat(content.slice(0, maxTagTextLength), "...");
	      }

	      return React__default.createElement("li", _extends_1({
	        style: UNSELECTABLE_STYLE
	      }, UNSELECTABLE_ATTRIBUTE, {
	        role: "menuitem",
	        className: "".concat(prefixCls, "-selection__choice"),
	        title: toTitle(label)
	      }), onRemove && React__default.createElement("span", {
	        className: "".concat(prefixCls, "-selection__choice__remove"),
	        onClick: this.onRemove
	      }, typeof removeIcon === 'function' ? React__default.createElement(removeIcon, objectSpread({}, this.props)) : removeIcon), React__default.createElement("span", {
	        className: "".concat(prefixCls, "-selection__choice__content")
	      }, content));
	    }
	  }]);

	  return Selection;
	}(React__default.Component);

	Selection.propTypes = {
	  prefixCls: propTypes.string,
	  maxTagTextLength: propTypes.number,
	  onRemove: propTypes.func,
	  label: propTypes.node,
	  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  removeIcon: propTypes.oneOfType([propTypes.node, propTypes.func])
	};

	var TREE_SELECT_EMPTY_VALUE_KEY = 'RC_TREE_SELECT_EMPTY_VALUE_KEY';
	var Selector$1 = generateSelector('multiple');
	var multipleSelectorContextTypes = {
	  onMultipleSelectorRemove: propTypes.func.isRequired
	};

	var MultipleSelector =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(MultipleSelector, _React$Component);

	  function MultipleSelector() {
	    var _this;

	    classCallCheck(this, MultipleSelector);

	    _this = possibleConstructorReturn(this, getPrototypeOf(MultipleSelector).call(this));

	    _this.onPlaceholderClick = function () {
	      _this.inputRef.current.focus();
	    };

	    _this.focus = function () {
	      _this.inputRef.current.focus();
	    };

	    _this.blur = function () {
	      _this.inputRef.current.blur();
	    };

	    _this.renderPlaceholder = function () {
	      var _this$props = _this.props,
	          prefixCls = _this$props.prefixCls,
	          placeholder = _this$props.placeholder,
	          searchPlaceholder = _this$props.searchPlaceholder,
	          searchValue = _this$props.searchValue,
	          selectorValueList = _this$props.selectorValueList;
	      var currentPlaceholder = placeholder || searchPlaceholder;
	      if (!currentPlaceholder) return null;
	      var hidden = searchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

	      return React__default.createElement("span", {
	        style: {
	          display: hidden ? 'none' : 'block'
	        },
	        onClick: _this.onPlaceholderClick,
	        className: "".concat(prefixCls, "-search__field__placeholder")
	      }, currentPlaceholder);
	    };

	    _this.renderSelection = function () {
	      var _this$props2 = _this.props,
	          selectorValueList = _this$props2.selectorValueList,
	          choiceTransitionName = _this$props2.choiceTransitionName,
	          prefixCls = _this$props2.prefixCls,
	          onChoiceAnimationLeave = _this$props2.onChoiceAnimationLeave,
	          labelInValue = _this$props2.labelInValue,
	          maxTagCount = _this$props2.maxTagCount,
	          maxTagPlaceholder = _this$props2.maxTagPlaceholder;
	      var onMultipleSelectorRemove = _this.context.rcTreeSelect.onMultipleSelectorRemove; // Check if `maxTagCount` is set

	      var myValueList = selectorValueList;

	      if (maxTagCount >= 0) {
	        myValueList = selectorValueList.slice(0, maxTagCount);
	      } // Selector node list


	      var selectedValueNodes = myValueList.map(function (_ref) {
	        var label = _ref.label,
	            value = _ref.value;
	        return React__default.createElement(Selection, _extends_1({}, _this.props, {
	          key: value || TREE_SELECT_EMPTY_VALUE_KEY,
	          label: label,
	          value: value,
	          onRemove: onMultipleSelectorRemove
	        }));
	      }); // Rest node count

	      if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
	        var content = "+ ".concat(selectorValueList.length - maxTagCount, " ...");

	        if (typeof maxTagPlaceholder === 'string') {
	          content = maxTagPlaceholder;
	        } else if (typeof maxTagPlaceholder === 'function') {
	          var restValueList = selectorValueList.slice(maxTagCount);
	          content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref2) {
	            var value = _ref2.value;
	            return value;
	          }));
	        }

	        var restNodeSelect = React__default.createElement(Selection, _extends_1({}, _this.props, {
	          key: "rc-tree-select-internal-max-tag-counter",
	          label: content,
	          value: null
	        }));
	        selectedValueNodes.push(restNodeSelect);
	      }

	      selectedValueNodes.push(React__default.createElement("li", {
	        className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
	        key: "__input"
	      }, React__default.createElement(SearchInput, _extends_1({}, _this.props, {
	        ref: _this.inputRef,
	        needAlign: true
	      }))));
	      var className = "".concat(prefixCls, "-selection__rendered");

	      if (choiceTransitionName) {
	        return React__default.createElement(Animate, {
	          className: className,
	          component: "ul",
	          transitionName: choiceTransitionName,
	          onLeave: onChoiceAnimationLeave
	        }, selectedValueNodes);
	      }

	      return React__default.createElement("ul", {
	        className: className,
	        role: "menubar"
	      }, selectedValueNodes);
	    };

	    _this.inputRef = createRef();
	    return _this;
	  }

	  createClass(MultipleSelector, [{
	    key: "render",
	    value: function render() {
	      return React__default.createElement(Selector$1, _extends_1({}, this.props, {
	        tabIndex: -1,
	        showArrow: false,
	        renderSelection: this.renderSelection,
	        renderPlaceholder: this.renderPlaceholder
	      }));
	    }
	  }]);

	  return MultipleSelector;
	}(React__default.Component);

	MultipleSelector.propTypes = objectSpread({}, selectorPropTypes, {
	  selectorValueList: propTypes.array,
	  disabled: propTypes.bool,
	  searchValue: propTypes.string,
	  labelInValue: propTypes.bool,
	  maxTagCount: propTypes.number,
	  maxTagPlaceholder: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  onChoiceAnimationLeave: propTypes.func
	});
	MultipleSelector.contextTypes = {
	  rcTreeSelect: propTypes.shape(objectSpread({}, multipleSelectorContextTypes, {
	    onSearchInputChange: propTypes.func
	  }))
	};

	var SinglePopup =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(SinglePopup, _React$Component);

	  function SinglePopup() {
	    var _this;

	    classCallCheck(this, SinglePopup);

	    _this = possibleConstructorReturn(this, getPrototypeOf(SinglePopup).call(this));

	    _this.onPlaceholderClick = function () {
	      _this.inputRef.current.focus();
	    };

	    _this.renderPlaceholder = function () {
	      var _this$props = _this.props,
	          searchPlaceholder = _this$props.searchPlaceholder,
	          searchValue = _this$props.searchValue,
	          prefixCls = _this$props.prefixCls;

	      if (!searchPlaceholder) {
	        return null;
	      }

	      return React__default.createElement("span", {
	        style: {
	          display: searchValue ? 'none' : 'block'
	        },
	        onClick: _this.onPlaceholderClick,
	        className: "".concat(prefixCls, "-search__field__placeholder")
	      }, searchPlaceholder);
	    };

	    _this.renderSearch = function () {
	      var _this$props2 = _this.props,
	          showSearch = _this$props2.showSearch,
	          dropdownPrefixCls = _this$props2.dropdownPrefixCls;

	      if (!showSearch) {
	        return null;
	      }

	      return React__default.createElement("span", {
	        className: "".concat(dropdownPrefixCls, "-search")
	      }, React__default.createElement(SearchInput, _extends_1({}, _this.props, {
	        ref: _this.inputRef,
	        renderPlaceholder: _this.renderPlaceholder
	      })));
	    };

	    _this.inputRef = createRef();
	    return _this;
	  }

	  createClass(SinglePopup, [{
	    key: "render",
	    value: function render() {
	      return React__default.createElement(BasePopup, _extends_1({}, this.props, {
	        renderSearch: this.renderSearch
	      }));
	    }
	  }]);

	  return SinglePopup;
	}(React__default.Component);

	SinglePopup.propTypes = objectSpread({}, BasePopup.propTypes, {
	  searchValue: propTypes.string,
	  showSearch: propTypes.bool,
	  dropdownPrefixCls: propTypes.string,
	  disabled: propTypes.bool,
	  searchPlaceholder: propTypes.string
	});

	var Select =
	/*#__PURE__*/
	function (_React$Component) {
	  inherits(Select, _React$Component);

	  function Select(_props) {
	    var _this;

	    classCallCheck(this, Select);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Select).call(this, _props));

	    _this.onSelectorFocus = function () {
	      _this.setState({
	        focused: true
	      });
	    };

	    _this.onSelectorBlur = function () {
	      _this.setState({
	        focused: false
	      }); // TODO: Close when Popup is also not focused
	      // this.setState({ open: false });

	    };

	    _this.onComponentKeyDown = function (event) {
	      var open = _this.state.open;
	      var keyCode = event.keyCode;

	      if (!open) {
	        if ([KeyCode.ENTER, KeyCode.DOWN].indexOf(keyCode) !== -1) {
	          _this.setOpenState(true);
	        }
	      } else if (KeyCode.ESC === keyCode) {
	        _this.setOpenState(false);
	      } else if ([KeyCode.UP, KeyCode.DOWN, KeyCode.LEFT, KeyCode.RIGHT].indexOf(keyCode) !== -1) {
	        // TODO: Handle `open` state
	        event.stopPropagation();
	      }
	    };

	    _this.onDeselect = function (wrappedValue, node, nodeEventInfo) {
	      var onDeselect = _this.props.onDeselect;
	      if (!onDeselect) return;
	      onDeselect(wrappedValue, node, nodeEventInfo);
	    };

	    _this.onSelectorClear = function (event) {
	      var disabled = _this.props.disabled;
	      if (disabled) return;

	      _this.triggerChange([], []);

	      if (!_this.isSearchValueControlled()) {
	        _this.setUncontrolledState({
	          searchValue: '',
	          filteredTreeNodes: null
	        });
	      }

	      event.stopPropagation();
	    };

	    _this.onMultipleSelectorRemove = function (event, removeValue) {
	      event.stopPropagation();
	      var _this$state = _this.state,
	          valueList = _this$state.valueList,
	          missValueList = _this$state.missValueList,
	          valueEntities = _this$state.valueEntities;
	      var _this$props = _this.props,
	          treeCheckable = _this$props.treeCheckable,
	          treeCheckStrictly = _this$props.treeCheckStrictly,
	          treeNodeLabelProp = _this$props.treeNodeLabelProp,
	          disabled = _this$props.disabled;
	      if (disabled) return; // Find trigger entity

	      var triggerEntity = valueEntities[removeValue]; // Clean up value

	      var newValueList = valueList;

	      if (triggerEntity) {
	        // If value is in tree
	        if (treeCheckable && !treeCheckStrictly) {
	          newValueList = valueList.filter(function (_ref) {
	            var value = _ref.value;
	            var entity = valueEntities[value];
	            return !isPosRelated(entity.pos, triggerEntity.pos);
	          });
	        } else {
	          newValueList = valueList.filter(function (_ref2) {
	            var value = _ref2.value;
	            return value !== removeValue;
	          });
	        }
	      }

	      var triggerNode = triggerEntity ? triggerEntity.node : null;
	      var extraInfo = {
	        triggerValue: removeValue,
	        triggerNode: triggerNode
	      };
	      var deselectInfo = {
	        node: triggerNode
	      }; // [Legacy] Little hack on this to make same action as `onCheck` event.

	      if (treeCheckable) {
	        var filteredEntityList = newValueList.map(function (_ref3) {
	          var value = _ref3.value;
	          return valueEntities[value];
	        });
	        deselectInfo.event = 'check';
	        deselectInfo.checked = false;
	        deselectInfo.checkedNodes = filteredEntityList.map(function (_ref4) {
	          var node = _ref4.node;
	          return node;
	        });
	        deselectInfo.checkedNodesPositions = filteredEntityList.map(function (_ref5) {
	          var node = _ref5.node,
	              pos = _ref5.pos;
	          return {
	            node: node,
	            pos: pos
	          };
	        });

	        if (treeCheckStrictly) {
	          extraInfo.allCheckedNodes = deselectInfo.checkedNodes;
	        } else {
	          // TODO: It's too expansive to get `halfCheckedKeys` in onDeselect. Not pass this.
	          extraInfo.allCheckedNodes = flatToHierarchy(filteredEntityList).map(function (_ref6) {
	            var node = _ref6.node;
	            return node;
	          });
	        }
	      } else {
	        deselectInfo.event = 'select';
	        deselectInfo.selected = false;
	        deselectInfo.selectedNodes = newValueList.map(function (_ref7) {
	          var value = _ref7.value;
	          return (valueEntities[value] || {}).node;
	        });
	      } // Some value user pass prop is not in the tree, we also need clean it


	      var newMissValueList = missValueList.filter(function (_ref8) {
	        var value = _ref8.value;
	        return value !== removeValue;
	      });
	      var wrappedValue;

	      if (_this.isLabelInValue()) {
	        wrappedValue = {
	          label: triggerNode ? triggerNode.props[treeNodeLabelProp] : null,
	          value: removeValue
	        };
	      } else {
	        wrappedValue = removeValue;
	      }

	      _this.onDeselect(wrappedValue, triggerNode, deselectInfo);

	      _this.triggerChange(newMissValueList, newValueList, extraInfo);
	    };

	    _this.onValueTrigger = function (isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
	      var node = nodeEventInfo.node;
	      var value = node.props.value;
	      var _this$state2 = _this.state,
	          missValueList = _this$state2.missValueList,
	          valueEntities = _this$state2.valueEntities,
	          keyEntities = _this$state2.keyEntities,
	          searchValue = _this$state2.searchValue;
	      var _this$props2 = _this.props,
	          disabled = _this$props2.disabled,
	          inputValue = _this$props2.inputValue,
	          treeNodeLabelProp = _this$props2.treeNodeLabelProp,
	          onSelect = _this$props2.onSelect,
	          onSearch = _this$props2.onSearch,
	          treeCheckable = _this$props2.treeCheckable,
	          treeCheckStrictly = _this$props2.treeCheckStrictly,
	          autoClearSearchValue = _this$props2.autoClearSearchValue;
	      var label = node.props[treeNodeLabelProp];
	      if (disabled) return; // Wrap the return value for user

	      var wrappedValue;

	      if (_this.isLabelInValue()) {
	        wrappedValue = {
	          value: value,
	          label: label
	        };
	      } else {
	        wrappedValue = value;
	      } // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.


	      if (isAdd) {
	        if (onSelect) {
	          onSelect(wrappedValue, node, nodeEventInfo);
	        }
	      } else {
	        _this.onDeselect(wrappedValue, node, nodeEventInfo);
	      } // Get wrapped value list.
	      // This is a bit hack cause we use key to match the value.


	      var newValueList = nodeList.map(function (_ref9) {
	        var props = _ref9.props;
	        return {
	          value: props.value,
	          label: props[treeNodeLabelProp]
	        };
	      }); // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
	      // We need calculate the missing nodes.

	      if (treeCheckable && !treeCheckStrictly) {
	        var keyList = newValueList.map(function (_ref10) {
	          var val = _ref10.value;
	          return valueEntities[val].key;
	        });

	        if (isAdd) {
	          keyList = conductCheck$1(keyList, true, keyEntities).checkedKeys;
	        } else {
	          keyList = conductCheck$1([valueEntities[value].key], false, keyEntities, {
	            checkedKeys: keyList
	          }).checkedKeys;
	        }

	        newValueList = keyList.map(function (key) {
	          var props = keyEntities[key].node.props;
	          return {
	            value: props.value,
	            label: props[treeNodeLabelProp]
	          };
	        });
	      } // Clean up `searchValue` when this prop is set


	      if (autoClearSearchValue || inputValue === null) {
	        // Clean state `searchValue` if uncontrolled
	        if (!_this.isSearchValueControlled()) {
	          _this.setUncontrolledState({
	            searchValue: '',
	            filteredTreeNodes: null
	          });
	        } // Trigger onSearch if `searchValue` to be empty.
	        // We should also trigger onSearch with empty string here
	        // since if user use `treeExpandedKeys`, it need user have the ability to reset it.


	        if (onSearch && searchValue && searchValue.length) {
	          onSearch('');
	        }
	      } // [Legacy] Provide extra info


	      var extraInfo = objectSpread({}, nodeExtraInfo, {
	        triggerValue: value,
	        triggerNode: node
	      });

	      _this.triggerChange(missValueList, newValueList, extraInfo);
	    };

	    _this.onTreeNodeSelect = function (_, nodeEventInfo) {
	      var _this$state3 = _this.state,
	          valueList = _this$state3.valueList,
	          valueEntities = _this$state3.valueEntities;
	      var _this$props3 = _this.props,
	          treeCheckable = _this$props3.treeCheckable,
	          multiple = _this$props3.multiple;
	      if (treeCheckable) return;

	      if (!multiple) {
	        _this.setOpenState(false);
	      }

	      var isAdd = nodeEventInfo.selected;
	      var selectedValue = nodeEventInfo.node.props.value;
	      var newValueList;

	      if (!multiple) {
	        newValueList = [{
	          value: selectedValue
	        }];
	      } else {
	        newValueList = valueList.filter(function (_ref11) {
	          var value = _ref11.value;
	          return value !== selectedValue;
	        });

	        if (isAdd) {
	          newValueList.push({
	            value: selectedValue
	          });
	        }
	      }

	      var selectedNodes = newValueList.map(function (_ref12) {
	        var value = _ref12.value;
	        return valueEntities[value];
	      }).filter(function (entity) {
	        return entity;
	      }).map(function (_ref13) {
	        var node = _ref13.node;
	        return node;
	      });

	      _this.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, {
	        selected: isAdd
	      });
	    };

	    _this.onTreeNodeCheck = function (_, nodeEventInfo) {
	      var _this$state4 = _this.state,
	          searchValue = _this$state4.searchValue,
	          keyEntities = _this$state4.keyEntities,
	          valueEntities = _this$state4.valueEntities,
	          valueList = _this$state4.valueList;
	      var treeCheckStrictly = _this.props.treeCheckStrictly;
	      var checkedNodes = nodeEventInfo.checkedNodes,
	          checkedNodesPositions = nodeEventInfo.checkedNodesPositions;
	      var isAdd = nodeEventInfo.checked;
	      var extraInfo = {
	        checked: isAdd
	      };
	      var checkedNodeList = checkedNodes; // [Legacy] Check event provide `allCheckedNodes`.
	      // When `treeCheckStrictly` or internal `searchValue` is set, TreeNode will be unrelated:
	      // - Related: Show the top checked nodes and has children prop.
	      // - Unrelated: Show all the checked nodes.

	      if (searchValue) {
	        var oriKeyList = valueList.map(function (_ref14) {
	          var value = _ref14.value;
	          return valueEntities[value];
	        }).filter(function (entity) {
	          return entity;
	        }).map(function (_ref15) {
	          var key = _ref15.key;
	          return key;
	        });
	        var keyList;

	        if (isAdd) {
	          keyList = Array.from(new Set([].concat(toConsumableArray(oriKeyList), toConsumableArray(checkedNodeList.map(function (_ref16) {
	            var value = _ref16.props.value;
	            return valueEntities[value].key;
	          })))));
	        } else {
	          keyList = conductCheck$1([nodeEventInfo.node.props.eventKey], false, keyEntities, {
	            checkedKeys: oriKeyList
	          }).checkedKeys;
	        }

	        checkedNodeList = keyList.map(function (key) {
	          return keyEntities[key].node;
	        }); // Let's follow as not `treeCheckStrictly` format

	        extraInfo.allCheckedNodes = keyList.map(function (key) {
	          return cleanEntity(keyEntities[key]);
	        });
	      } else if (treeCheckStrictly) {
	        extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
	      } else {
	        extraInfo.allCheckedNodes = flatToHierarchy(checkedNodesPositions);
	      }

	      _this.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
	    };

	    _this.onDropdownVisibleChange = function (open) {
	      _this.setOpenState(open, true);
	    };

	    _this.onSearchInputChange = function (_ref17) {
	      var value = _ref17.target.value;
	      var _this$state5 = _this.state,
	          treeNodes = _this$state5.treeNodes,
	          valueEntities = _this$state5.valueEntities;
	      var _this$props4 = _this.props,
	          onSearch = _this$props4.onSearch,
	          filterTreeNode = _this$props4.filterTreeNode,
	          treeNodeFilterProp = _this$props4.treeNodeFilterProp;

	      if (onSearch) {
	        onSearch(value);
	      }

	      var isSet = false;

	      if (!_this.isSearchValueControlled()) {
	        isSet = _this.setUncontrolledState({
	          searchValue: value
	        });

	        _this.setOpenState(true);
	      }

	      if (isSet) {
	        // Do the search logic
	        var upperSearchValue = String(value).toUpperCase();
	        var filterTreeNodeFn = filterTreeNode;

	        if (filterTreeNode === false) {
	          filterTreeNodeFn = function filterTreeNodeFn() {
	            return true;
	          };
	        } else if (!filterTreeNodeFn) {
	          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
	            var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
	            return nodeValue.indexOf(upperSearchValue) !== -1;
	          };
	        }

	        _this.setState({
	          filteredTreeNodes: getFilterTree(treeNodes, value, filterTreeNodeFn, valueEntities)
	        });
	      }
	    };

	    _this.onSearchInputKeyDown = function (event) {
	      var _this$state6 = _this.state,
	          searchValue = _this$state6.searchValue,
	          valueList = _this$state6.valueList;
	      var keyCode = event.keyCode;

	      if (KeyCode.BACKSPACE === keyCode && _this.isMultiple() && !searchValue && valueList.length) {
	        var lastValue = valueList[valueList.length - 1].value;

	        _this.onMultipleSelectorRemove(event, lastValue);
	      }
	    };

	    _this.onChoiceAnimationLeave = function () {
	      _this.forcePopupAlign();
	    };

	    _this.setUncontrolledState = function (state) {
	      var needSync = false;
	      var newState = {};
	      Object.keys(state).forEach(function (name) {
	        if (name in _this.props) return;
	        needSync = true;
	        newState[name] = state[name];
	      });

	      if (needSync) {
	        _this.setState(newState);
	      }

	      return needSync;
	    };

	    _this.setOpenState = function (open) {
	      var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var onDropdownVisibleChange = _this.props.onDropdownVisibleChange;

	      if (onDropdownVisibleChange && onDropdownVisibleChange(open, {
	        documentClickClose: !open && byTrigger
	      }) === false) {
	        return;
	      }

	      _this.setUncontrolledState({
	        open: open
	      });
	    };

	    _this.isMultiple = function () {
	      var _this$props5 = _this.props,
	          multiple = _this$props5.multiple,
	          treeCheckable = _this$props5.treeCheckable;
	      return !!(multiple || treeCheckable);
	    };

	    _this.isLabelInValue = function () {
	      return isLabelInValue(_this.props);
	    };

	    _this.isSearchValueControlled = function () {
	      var inputValue = _this.props.inputValue;
	      if ('searchValue' in _this.props) return true;
	      return 'inputValue' in _this.props && inputValue !== null;
	    };

	    _this.forcePopupAlign = function () {
	      var $trigger = _this.selectTriggerRef.current;

	      if ($trigger) {
	        $trigger.forcePopupAlign();
	      }
	    };

	    _this.delayForcePopupAlign = function () {
	      // Wait 2 frame to avoid dom update & dom algin in the same time
	      // https://github.com/ant-design/ant-design/issues/12031
	      raf_1(function () {
	        raf_1(_this.forcePopupAlign);
	      });
	    };

	    _this.triggerChange = function (missValueList, valueList) {
	      var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var _this$state7 = _this.state,
	          valueEntities = _this$state7.valueEntities,
	          searchValue = _this$state7.searchValue;
	      var _this$props6 = _this.props,
	          onChange = _this$props6.onChange,
	          disabled = _this$props6.disabled,
	          treeCheckable = _this$props6.treeCheckable,
	          treeCheckStrictly = _this$props6.treeCheckStrictly;
	      if (disabled) return; // Trigger

	      var extra = objectSpread({
	        // [Legacy] Always return as array contains label & value
	        preValue: _this.state.selectorValueList.map(function (_ref18) {
	          var label = _ref18.label,
	              value = _ref18.value;
	          return {
	            label: label,
	            value: value
	          };
	        })
	      }, extraInfo); // Format value by `treeCheckStrictly`


	      var selectorValueList = formatSelectorValue(valueList, _this.props, valueEntities);

	      if (!('value' in _this.props)) {
	        var newState = {
	          missValueList: missValueList,
	          valueList: valueList,
	          selectorValueList: selectorValueList
	        };

	        if (searchValue && treeCheckable && !treeCheckStrictly) {
	          newState.searchHalfCheckedKeys = getHalfCheckedKeys(valueList, valueEntities);
	        }

	        _this.setState(newState);
	      } // Only do the logic when `onChange` function provided


	      if (onChange) {
	        var connectValueList; // Get value by mode

	        if (_this.isMultiple()) {
	          connectValueList = [].concat(toConsumableArray(missValueList), toConsumableArray(selectorValueList));
	        } else {
	          connectValueList = selectorValueList.slice(0, 1);
	        }

	        var labelList = null;
	        var returnValue;

	        if (_this.isLabelInValue()) {
	          returnValue = connectValueList.map(function (_ref19) {
	            var label = _ref19.label,
	                value = _ref19.value;
	            return {
	              label: label,
	              value: value
	            };
	          });
	        } else {
	          labelList = [];
	          returnValue = connectValueList.map(function (_ref20) {
	            var label = _ref20.label,
	                value = _ref20.value;
	            labelList.push(label);
	            return value;
	          });
	        }

	        if (!_this.isMultiple()) {
	          returnValue = returnValue[0];
	        }

	        onChange(returnValue, labelList, extra);
	      }
	    };

	    var prefixAria = _props.prefixAria,
	        defaultOpen = _props.defaultOpen,
	        _open = _props.open;
	    _this.state = {
	      open: _open || defaultOpen,
	      valueList: [],
	      searchHalfCheckedKeys: [],
	      missValueList: [],
	      // Contains the value not in the tree
	      selectorValueList: [],
	      // Used for multiple selector
	      valueEntities: {},
	      keyEntities: {},
	      searchValue: '',
	      init: true
	    };
	    _this.selectorRef = createRef();
	    _this.selectTriggerRef = createRef(); // ARIA need `aria-controls` props mapping
	    // Since this need user input. Let's generate ourselves

	    _this.ariaId = generateAriaId("".concat(prefixAria, "-list"));
	    return _this;
	  }

	  createClass(Select, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        rcTreeSelect: {
	          onSelectorFocus: this.onSelectorFocus,
	          onSelectorBlur: this.onSelectorBlur,
	          onSelectorKeyDown: this.onComponentKeyDown,
	          onSelectorClear: this.onSelectorClear,
	          onMultipleSelectorRemove: this.onMultipleSelectorRemove,
	          onTreeNodeSelect: this.onTreeNodeSelect,
	          onTreeNodeCheck: this.onTreeNodeCheck,
	          onPopupKeyDown: this.onComponentKeyDown,
	          onSearchInputChange: this.onSearchInputChange,
	          onSearchInputKeyDown: this.onSearchInputKeyDown
	        }
	      };
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this$props7 = this.props,
	          autoFocus = _this$props7.autoFocus,
	          disabled = _this$props7.disabled;

	      if (autoFocus && !disabled) {
	        this.focus();
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(_, prevState) {
	      if (prevState.valueList !== this.state.valueList) {
	        this.forcePopupAlign();
	      }
	    } // ==================== Selector ====================

	  }, {
	    key: "focus",
	    value: function focus() {
	      this.selectorRef.current.focus();
	    }
	  }, {
	    key: "blur",
	    value: function blur() {
	      this.selectorRef.current.blur();
	    } // ===================== Render =====================

	  }, {
	    key: "render",
	    value: function render() {
	      var _this$state8 = this.state,
	          valueList = _this$state8.valueList,
	          missValueList = _this$state8.missValueList,
	          selectorValueList = _this$state8.selectorValueList,
	          searchHalfCheckedKeys = _this$state8.searchHalfCheckedKeys,
	          valueEntities = _this$state8.valueEntities,
	          keyEntities = _this$state8.keyEntities,
	          searchValue = _this$state8.searchValue,
	          open = _this$state8.open,
	          focused = _this$state8.focused,
	          treeNodes = _this$state8.treeNodes,
	          filteredTreeNodes = _this$state8.filteredTreeNodes;
	      var _this$props8 = this.props,
	          prefixCls = _this$props8.prefixCls,
	          treeExpandedKeys = _this$props8.treeExpandedKeys,
	          onTreeExpand = _this$props8.onTreeExpand;
	      var isMultiple = this.isMultiple();

	      var passProps = objectSpread({}, this.props, {
	        isMultiple: isMultiple,
	        valueList: valueList,
	        searchHalfCheckedKeys: searchHalfCheckedKeys,
	        selectorValueList: [].concat(toConsumableArray(missValueList), toConsumableArray(selectorValueList)),
	        valueEntities: valueEntities,
	        keyEntities: keyEntities,
	        searchValue: searchValue,
	        upperSearchValue: (searchValue || '').toUpperCase(),
	        // Perf save
	        open: open,
	        focused: focused,
	        onChoiceAnimationLeave: this.onChoiceAnimationLeave,
	        dropdownPrefixCls: "".concat(prefixCls, "-dropdown"),
	        ariaId: this.ariaId
	      });

	      var Popup = isMultiple ? BasePopup : SinglePopup;
	      var $popup = React__default.createElement(Popup, _extends_1({}, passProps, {
	        onTreeExpanded: this.delayForcePopupAlign,
	        treeNodes: treeNodes,
	        filteredTreeNodes: filteredTreeNodes // Tree expanded control
	        ,
	        treeExpandedKeys: treeExpandedKeys,
	        onTreeExpand: onTreeExpand
	      }));
	      var Selector = isMultiple ? MultipleSelector : SingleSelector;
	      var $selector = React__default.createElement(Selector, _extends_1({}, passProps, {
	        ref: this.selectorRef
	      }));
	      return React__default.createElement(SelectTrigger, _extends_1({}, passProps, {
	        ref: this.selectTriggerRef,
	        popupElement: $popup,
	        onKeyDown: this.onKeyDown,
	        onDropdownVisibleChange: this.onDropdownVisibleChange
	      }), $selector);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      var _prevState$prevProps = prevState.prevProps,
	          prevProps = _prevState$prevProps === void 0 ? {} : _prevState$prevProps;
	      var treeCheckable = nextProps.treeCheckable,
	          treeCheckStrictly = nextProps.treeCheckStrictly,
	          filterTreeNode = nextProps.filterTreeNode,
	          treeNodeFilterProp = nextProps.treeNodeFilterProp,
	          treeDataSimpleMode = nextProps.treeDataSimpleMode;
	      var newState = {
	        prevProps: nextProps,
	        init: false
	      }; // Process the state when props updated

	      function processState(propName, updater) {
	        if (prevProps[propName] !== nextProps[propName]) {
	          updater(nextProps[propName], prevProps[propName]);
	          return true;
	        }

	        return false;
	      }

	      var valueRefresh = false; // Open

	      processState('open', function (propValue) {
	        newState.open = propValue;
	      }); // Tree Nodes

	      var treeNodes;
	      var treeDataChanged = false;
	      var treeDataModeChanged = false;
	      processState('treeData', function (propValue) {
	        treeNodes = convertDataToTree$1(propValue);
	        treeDataChanged = true;
	      });
	      processState('treeDataSimpleMode', function (propValue, prevValue) {
	        if (!propValue) return;
	        var prev = !prevValue || prevValue === true ? {} : prevValue; // Shallow equal to avoid dynamic prop object

	        if (!shallowequal(propValue, prev)) {
	          treeDataModeChanged = true;
	        }
	      }); // Parse by `treeDataSimpleMode`

	      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
	        var simpleMapper = objectSpread({
	          id: 'id',
	          pId: 'pId',
	          rootPId: null
	        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});

	        treeNodes = convertDataToTree$1(parseSimpleTreeData(nextProps.treeData, simpleMapper));
	      } // If `treeData` not provide, use children TreeNodes


	      if (!nextProps.treeData) {
	        processState('children', function (propValue) {
	          treeNodes = Array.isArray(propValue) ? propValue : [propValue];
	        });
	      } // Convert `treeData` to entities


	      if (treeNodes) {
	        var entitiesMap = convertTreeToEntities$1(treeNodes);
	        newState.treeNodes = treeNodes;
	        newState.posEntities = entitiesMap.posEntities;
	        newState.valueEntities = entitiesMap.valueEntities;
	        newState.keyEntities = entitiesMap.keyEntities;
	        valueRefresh = true;
	      } // Value List


	      if (prevState.init) {
	        processState('defaultValue', function (propValue) {
	          newState.valueList = formatInternalValue(propValue, nextProps);
	          valueRefresh = true;
	        });
	      }

	      processState('value', function (propValue) {
	        newState.valueList = formatInternalValue(propValue, nextProps);
	        valueRefresh = true;
	      }); // Selector Value List

	      if (valueRefresh) {
	        // Find out that value not exist in the tree
	        var missValueList = [];
	        var filteredValueList = [];
	        var keyList = []; // Get latest value list

	        var latestValueList = newState.valueList;

	        if (!latestValueList) {
	          // Also need add prev missValueList to avoid new treeNodes contains the value
	          latestValueList = [].concat(toConsumableArray(prevState.valueList), toConsumableArray(prevState.missValueList));
	        } // Get key by value


	        latestValueList.forEach(function (wrapperValue) {
	          var value = wrapperValue.value;
	          var entity = (newState.valueEntities || prevState.valueEntities)[value];

	          if (entity) {
	            keyList.push(entity.key);
	            filteredValueList.push(wrapperValue);
	            return;
	          } // If not match, it may caused by ajax load. We need keep this


	          missValueList.push(wrapperValue);
	        }); // We need calculate the value when tree is checked tree

	        if (treeCheckable && !treeCheckStrictly) {
	          // Calculate the keys need to be checked
	          var _conductCheck = conductCheck$1(keyList, true, newState.keyEntities || prevState.keyEntities),
	              checkedKeys = _conductCheck.checkedKeys; // Format value list again for internal usage


	          newState.valueList = checkedKeys.map(function (key) {
	            return {
	              value: (newState.keyEntities || prevState.keyEntities)[key].value
	            };
	          });
	        } else {
	          newState.valueList = filteredValueList;
	        } // Fill the missValueList, we still need display in the selector


	        newState.missValueList = missValueList; // Calculate the value list for `Selector` usage

	        newState.selectorValueList = formatSelectorValue(newState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
	      } // [Legacy] To align with `Select` component,
	      // We use `searchValue` instead of `inputValue` but still keep the api
	      // `inputValue` support `null` to work as `autoClearSearchValue`


	      processState('inputValue', function (propValue) {
	        if (propValue !== null) {
	          newState.searchValue = propValue;
	        }
	      }); // Search value

	      processState('searchValue', function (propValue) {
	        newState.searchValue = propValue;
	      }); // Do the search logic

	      if (newState.searchValue !== undefined || prevState.searchValue && treeNodes) {
	        var searchValue = newState.searchValue !== undefined ? newState.searchValue : prevState.searchValue;
	        var upperSearchValue = String(searchValue).toUpperCase();
	        var filterTreeNodeFn = filterTreeNode;

	        if (filterTreeNode === false) {
	          // Don't filter if is false
	          filterTreeNodeFn = function filterTreeNodeFn() {
	            return true;
	          };
	        } else if (typeof filterTreeNodeFn !== 'function') {
	          // When is not function (true or undefined), use inner filter
	          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
	            var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
	            return nodeValue.indexOf(upperSearchValue) !== -1;
	          };
	        }

	        newState.filteredTreeNodes = getFilterTree(newState.treeNodes || prevState.treeNodes, searchValue, filterTreeNodeFn, newState.valueEntities || prevState.valueEntities);
	      } // We should re-calculate the halfCheckedKeys when in search mode


	      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState.searchValue || prevState.searchValue)) {
	        newState.searchHalfCheckedKeys = getHalfCheckedKeys(newState.valueList, newState.valueEntities || prevState.valueEntities);
	      } // Checked Strategy


	      processState('showCheckedStrategy', function () {
	        newState.selectorValueList = newState.selectorValueList || formatSelectorValue(newState.valueList || prevState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
	      });
	      return newState;
	    }
	  }]);

	  return Select;
	}(React__default.Component);

	Select.propTypes = {
	  prefixCls: propTypes.string,
	  prefixAria: propTypes.string,
	  multiple: propTypes.bool,
	  showArrow: propTypes.bool,
	  open: propTypes.bool,
	  value: valueProp,
	  autoFocus: propTypes.bool,
	  defaultOpen: propTypes.bool,
	  defaultValue: valueProp,
	  showSearch: propTypes.bool,
	  placeholder: propTypes.node,
	  inputValue: propTypes.string,
	  // [Legacy] Deprecated. Use `searchValue` instead.
	  searchValue: propTypes.string,
	  autoClearSearchValue: propTypes.bool,
	  searchPlaceholder: propTypes.node,
	  // [Legacy] Confuse with placeholder
	  disabled: propTypes.bool,
	  children: propTypes.node,
	  labelInValue: propTypes.bool,
	  maxTagCount: propTypes.number,
	  maxTagPlaceholder: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  maxTagTextLength: propTypes.number,
	  showCheckedStrategy: propTypes.oneOf([SHOW_ALL, SHOW_PARENT, SHOW_CHILD]),
	  dropdownMatchSelectWidth: propTypes.bool,
	  treeData: propTypes.array,
	  treeDataSimpleMode: propTypes.oneOfType([propTypes.bool, propTypes.object]),
	  treeNodeFilterProp: propTypes.string,
	  treeNodeLabelProp: propTypes.string,
	  treeCheckable: propTypes.oneOfType([propTypes.bool, propTypes.node]),
	  treeCheckStrictly: propTypes.bool,
	  treeIcon: propTypes.bool,
	  treeLine: propTypes.bool,
	  treeDefaultExpandAll: propTypes.bool,
	  treeDefaultExpandedKeys: propTypes.array,
	  treeExpandedKeys: propTypes.array,
	  loadData: propTypes.func,
	  filterTreeNode: propTypes.oneOfType([propTypes.func, propTypes.bool]),
	  notFoundContent: propTypes.node,
	  onSearch: propTypes.func,
	  onSelect: propTypes.func,
	  onDeselect: propTypes.func,
	  onChange: propTypes.func,
	  onDropdownVisibleChange: propTypes.func,
	  onTreeExpand: propTypes.func,
	  inputIcon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  clearIcon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  removeIcon: propTypes.oneOfType([propTypes.node, propTypes.func]),
	  switcherIcon: propTypes.oneOfType([propTypes.node, propTypes.func])
	};
	Select.childContextTypes = {
	  rcTreeSelect: propTypes.shape(objectSpread({}, selectorContextTypes, multipleSelectorContextTypes, popupContextTypes, {
	    onSearchInputChange: propTypes.func,
	    onSearchInputKeyDown: propTypes.func
	  }))
	};
	Select.defaultProps = {
	  prefixCls: 'rc-tree-select',
	  prefixAria: 'rc-tree-select',
	  showArrow: true,
	  showSearch: true,
	  autoClearSearchValue: true,
	  showCheckedStrategy: SHOW_CHILD,
	  // dropdownMatchSelectWidth change the origin design, set to false now
	  // ref: https://github.com/react-component/select/blob/4cad95e098a341a09de239ad6981067188842020/src/Select.jsx#L344
	  // ref: https://github.com/react-component/select/pull/71
	  treeNodeFilterProp: 'value',
	  treeNodeLabelProp: 'title',
	  treeIcon: false,
	  notFoundContent: 'Not Found'
	};
	Select.TreeNode = SelectNode;
	Select.SHOW_ALL = SHOW_ALL;
	Select.SHOW_PARENT = SHOW_PARENT;
	Select.SHOW_CHILD = SHOW_CHILD; // Let warning show correct component name

	Select.displayName = 'TreeSelect';
	polyfill(Select);

	var TreeNode$2 = SelectNode;

	exports.TreeNode = TreeNode$2;
	exports.default = Select;
	exports.SHOW_ALL = SHOW_ALL;
	exports.SHOW_CHILD = SHOW_CHILD;
	exports.SHOW_PARENT = SHOW_PARENT;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.development.js.map

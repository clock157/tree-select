webpackJsonp([3],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = generateData;
/* harmony export (immutable) */ __webpack_exports__["a"] = calcTotal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gData; });
/* harmony export (immutable) */ __webpack_exports__["d"] = generateTreeNodes;
/* harmony export (immutable) */ __webpack_exports__["e"] = getNewTreeData;
/* unused harmony export getFilterValue */
/* eslint no-loop-func: 0, no-console: 0 */

function generateData() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var gData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
  function _loop(_level, _preKey, _tns) {
    var preKey = _preKey || '0';
    var tns = _tns || gData;

    var children = [];
    for (var i = 0; i < x; i++) {
      var key = preKey + '-' + i;
      tns.push({
        label: key + '-label',
        value: key + '-value',
        key: key,
        disabled: key === '0-0-0-1' || false
      });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    var __level = _level - 1;
    children.forEach(function (key, index) {
      tns[index].children = [];
      return _loop(__level, key, tns[index].children);
    });

    return null;
  }
  _loop(z);
  return gData;
}
function calcTotal() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  /* eslint no-param-reassign:0 */
  var rec = function rec(n) {
    return n >= 0 ? x * Math.pow(y, n--) + rec(n) : 0;
  };
  return rec(z + 1);
}
console.log('总节点数（单个tree）：', calcTotal());
var gData = generateData();

function generateTreeNodes(treeNode) {
  var arr = [];
  var key = treeNode.props.eventKey;
  for (var i = 0; i < 3; i++) {
    arr.push({ label: key + '-' + i + '-label', value: key + '-' + i + '-value', key: key + '-' + i });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  var loopLeaf = function loopLeaf(data, lev) {
    var l = lev - 1;
    data.forEach(function (item) {
      if (item.key.length > curKey.length ? item.key.indexOf(curKey) !== 0 : curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  var loop = function loop(data) {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach(function (item) {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

function loopData(data, callback) {
  var loop = function loop(d) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    d.forEach(function (item, index) {
      var pos = level + '-' + index;
      if (item.children) {
        loop(item.children, pos);
      }
      callback(item, index, pos);
    });
  };
  loop(data);
}

function isPositionPrefix(smallPos, bigPos) {
  if (bigPos.length < smallPos.length) {
    return false;
  }
  // attention: "0-0-1" "0-0-10"
  if (bigPos.length > smallPos.length && bigPos.charAt(smallPos.length) !== '-') {
    return false;
  }
  return bigPos.substr(0, smallPos.length) === smallPos;
}
// console.log(isPositionPrefix("0-1", "0-10-1"));

function getFilterValue(val, sVal, delVal) {
  var allPos = [];
  var delPos = [];
  loopData(gData, function (item, index, pos) {
    if (sVal.indexOf(item.value) > -1) {
      allPos.push(pos);
    }
    if (delVal.indexOf(item.value) > -1) {
      delPos.push(pos);
    }
  });
  var newPos = [];
  delPos.forEach(function (item) {
    allPos.forEach(function (i) {
      if (isPositionPrefix(item, i) || isPositionPrefix(i, item)) {
        // 过滤掉 父级节点 和 所有子节点。
        // 因为 node节点 不选时，其 父级节点 和 所有子节点 都不选。
        return;
      }
      newPos.push(i);
    });
  });
  var newVal = [];
  if (newPos.length) {
    loopData(gData, function (item, index, pos) {
      if (newPos.indexOf(pos) > -1) {
        newVal.push(item.value);
      }
    });
  }
  return newVal;
}

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_tree_select_assets_index_less__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_tree_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_tree_select_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree_select__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__big_data_generator__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_less__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__demo_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp:0, no-console:0 */








var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref,
        _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Demo);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      gData: [],
      gData1: [],
      value: '',
      value1: ''
    }, _this.onChange = function (value) {
      console.log('onChange', _arguments);
      _this.setState({ value: value });
    }, _this.onChangeStrictly = function (value1) {
      console.log('onChangeStrictly', _arguments);
      var ind = parseInt(Math.random() * 3, 10);
      value1.push({ value: '0-0-0-' + ind + '-value', label: '0-0-0-' + ind + '-label', halfChecked: true });
      _this.setState({
        value1: value1
      });
    }, _this.onGen = function (data) {
      _this.setState({
        gData: data,
        gData1: [].concat(_toConsumableArray(data)),
        value: '0-0-0-value',
        value1: [{ value: '0-0-value', label: '0-0-label', halfChecked: true }, { value: '0-0-0-value', label: '0-0-0-label' }]
        // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { padding: '0 20px' } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__big_data_generator__["a" /* default */], { onGen: this.onGen }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: { display: 'flex' } },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: { marginRight: 20 } },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              null,
              'normal check'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree_select__["c" /* default */], {
              style: { width: 300 },
              dropdownStyle: { maxHeight: 200, overflow: 'auto' },
              treeData: this.state.gData, treeLine: true,
              value: this.state.value,
              placeholder: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'i',
                null,
                '\u8BF7\u4E0B\u62C9\u9009\u62E9'
              ),
              treeCheckable: true,
              showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_3_rc_tree_select__["a" /* SHOW_PARENT */],
              onChange: this.onChange
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              null,
              'checkStrictly'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree_select__["c" /* default */], {
              style: { width: 300 },
              dropdownStyle: { maxHeight: 200, overflow: 'auto' },
              treeData: this.state.gData1, treeLine: true,
              value: this.state.value1,
              placeholder: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'i',
                null,
                '\u8BF7\u4E0B\u62C9\u9009\u62E9'
              ),
              treeCheckable: true,
              treeCheckStrictly: true,
              showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_3_rc_tree_select__["a" /* SHOW_PARENT */],
              onChange: this.onChangeStrictly
            })
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_util__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Gen = function (_React$Component) {
  _inherits(Gen, _React$Component);

  function Gen() {
    _classCallCheck(this, Gen);

    var _this = _possibleConstructorReturn(this, (Gen.__proto__ || Object.getPrototypeOf(Gen)).call(this));

    _this.state = {
      nums: ''
    };

    _this.onGen = function (e) {
      e.preventDefault();
      var vals = _this.getVals();
      _this.props.onGen(Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* generateData */])(vals.x, vals.y, vals.z));
      _this.setState({
        nums: Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* calcTotal */])(vals.x, vals.y, vals.z)
      });
    };

    _this.getVals = function () {
      return {
        x: parseInt(_this.xRef.current.value, 10),
        y: parseInt(_this.yRef.current.value, 10),
        z: parseInt(_this.zRef.current.value, 10)
      };
    };

    _this.xRef = Object(__WEBPACK_IMPORTED_MODULE_3__src_util__["g" /* createRef */])();
    _this.yRef = Object(__WEBPACK_IMPORTED_MODULE_3__src_util__["g" /* createRef */])();
    _this.zRef = Object(__WEBPACK_IMPORTED_MODULE_3__src_util__["g" /* createRef */])();
    return _this;
  }

  _createClass(Gen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var vals = this.getVals();
      this.props.onGen(Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* generateData */])(vals.x, vals.y, vals.z));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          z = _props.z;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { padding: '0 20px' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'big data generator'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.onGen },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { marginRight: 10 } },
            'x: ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { ref: this.xRef, defaultValue: x, type: 'number', min: '1', required: true, style: { width: 50 } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { marginRight: 10 } },
            'y: ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { ref: this.yRef, defaultValue: y, type: 'number', min: '1', required: true, style: { width: 50 } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { marginRight: 10 } },
            'z: ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { ref: this.zRef, defaultValue: z, type: 'number', min: '1', required: true, style: { width: 50 } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'submit' },
            'Generate'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'total nodes: ',
            this.state.nums || Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* calcTotal */])(x, y, z)
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { style: { fontSize: 12 } },
          'x\uFF1A\u6BCF\u4E00\u7EA7\u4E0B\u7684\u8282\u70B9\u603B\u6570\u3002y\uFF1A\u6BCF\u7EA7\u8282\u70B9\u91CC\u6709y\u4E2A\u8282\u70B9\u3001\u5B58\u5728\u5B50\u8282\u70B9\u3002z\uFF1A\u6811\u7684level\u5C42\u7EA7\u6570\uFF080\u8868\u793A\u4E00\u7EA7\uFF09'
        )
      );
    }
  }]);

  return Gen;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Gen.propTypes = {
  onGen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  z: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
Gen.defaultProps = {
  onGen: function onGen() {},
  x: 20,
  y: 18,
  z: 1
};


/* harmony default export */ __webpack_exports__["a"] = (Gen);

/***/ })

},[242]);
//# sourceMappingURL=big-data.js.map
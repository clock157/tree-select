'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectorContextTypes = exports.selectorPropTypes = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = function (modeName) {
  var BaseSelector = function (_React$Component) {
    (0, _inherits3['default'])(BaseSelector, _React$Component);

    function BaseSelector() {
      (0, _classCallCheck3['default'])(this, BaseSelector);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (BaseSelector.__proto__ || Object.getPrototypeOf(BaseSelector)).call(this));

      _this.onFocus = function () {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            focused = _this$props.focused;
        var onSelectorFocus = _this.context.rcTreeSelect.onSelectorFocus;


        if (!focused) {
          onSelectorFocus();
        }

        if (onFocus) {
          onFocus.apply(undefined, arguments);
        }
      };

      _this.onBlur = function () {
        var onBlur = _this.props.onBlur;
        var onSelectorBlur = _this.context.rcTreeSelect.onSelectorBlur;

        // TODO: Not trigger when is inner component get focused

        onSelectorBlur();

        if (onBlur) {
          onBlur.apply(undefined, arguments);
        }
      };

      _this.focus = function () {
        _this.domRef.current.focus();
      };

      _this.blur = function () {
        _this.domRef.current.focus();
      };

      _this.domRef = (0, _util.createRef)();
      return _this;
    }

    (0, _createClass3['default'])(BaseSelector, [{
      key: 'renderClear',
      value: function renderClear() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            allowClear = _props.allowClear,
            selectorValueList = _props.selectorValueList,
            clearIcon = _props.clearIcon;
        var onSelectorClear = this.context.rcTreeSelect.onSelectorClear;


        if (!allowClear || !selectorValueList.length || !selectorValueList[0].value) {
          return null;
        }

        return _react2['default'].createElement(
          'span',
          {
            key: 'clear',
            className: prefixCls + '-selection__clear',
            onClick: onSelectorClear
          },
          typeof clearIcon === 'function' ? _react2['default'].createElement(clearIcon, (0, _extends3['default'])({}, this.props)) : clearIcon
        );
      }
    }, {
      key: 'renderArrow',
      value: function renderArrow() {
        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            showArrow = _props2.showArrow,
            inputIcon = _props2.inputIcon;

        if (!showArrow) {
          return null;
        }

        return _react2['default'].createElement(
          'span',
          {
            key: 'arrow',
            className: prefixCls + '-arrow',
            style: { outline: 'none' }
          },
          typeof inputIcon === 'function' ? _react2['default'].createElement(inputIcon, (0, _extends3['default'])({}, this.props)) : inputIcon
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            style = _props3.style,
            open = _props3.open,
            focused = _props3.focused,
            disabled = _props3.disabled,
            allowClear = _props3.allowClear,
            onClick = _props3.onClick,
            ariaId = _props3.ariaId,
            renderSelection = _props3.renderSelection,
            renderPlaceholder = _props3.renderPlaceholder,
            tabIndex = _props3.tabIndex;
        var onSelectorKeyDown = this.context.rcTreeSelect.onSelectorKeyDown;


        var myTabIndex = tabIndex;
        if (disabled) {
          myTabIndex = null;
        }

        return _react2['default'].createElement(
          'span',
          {
            style: style,
            onClick: onClick,
            className: (0, _classnames2['default'])(className, prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-open', open), (0, _defineProperty3['default'])(_classNames, prefixCls + '-focused', open || focused), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-enabled', !disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-allow-clear', allowClear), _classNames)),
            ref: this.domRef,
            role: 'combobox',
            'aria-expanded': open,
            'aria-owns': open ? ariaId : undefined,
            'aria-controls': open ? ariaId : undefined,
            'aria-haspopup': 'listbox',
            'aria-disabled': disabled,
            tabIndex: myTabIndex,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: onSelectorKeyDown
          },
          _react2['default'].createElement(
            'span',
            {
              key: 'selection',
              className: (0, _classnames2['default'])(prefixCls + '-selection', prefixCls + '-selection--' + modeName)
            },
            renderSelection(),
            this.renderClear(),
            this.renderArrow(),
            renderPlaceholder && renderPlaceholder()
          )
        );
      }
    }]);
    return BaseSelector;
  }(_react2['default'].Component);

  BaseSelector.propTypes = (0, _extends3['default'])({}, selectorPropTypes, {

    // Pass by HOC
    renderSelection: _propTypes2['default'].func.isRequired,
    renderPlaceholder: _propTypes2['default'].func,
    tabIndex: _propTypes2['default'].number
  });
  BaseSelector.contextTypes = {
    rcTreeSelect: _propTypes2['default'].shape((0, _extends3['default'])({}, selectorContextTypes))
  };
  BaseSelector.defaultProps = {
    tabIndex: 0
  };


  (0, _reactLifecyclesCompat.polyfill)(BaseSelector);

  return BaseSelector;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var selectorPropTypes = exports.selectorPropTypes = {
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  open: _propTypes2['default'].bool,
  selectorValueList: _propTypes2['default'].array,
  allowClear: _propTypes2['default'].bool,
  showArrow: _propTypes2['default'].bool,
  onClick: _propTypes2['default'].func,
  onBlur: _propTypes2['default'].func,
  onFocus: _propTypes2['default'].func,
  removeSelected: _propTypes2['default'].func,

  // Pass by component
  ariaId: _propTypes2['default'].string,
  inputIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  clearIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func])
}; /**
    * Input Box is in different position for different mode.
    * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
    * We will not follow the new design immediately since antd 3.x is already released.
    *
    * So this file named as Selector to avoid confuse.
    */

var selectorContextTypes = exports.selectorContextTypes = {
  onSelectorFocus: _propTypes2['default'].func.isRequired,
  onSelectorBlur: _propTypes2['default'].func.isRequired,
  onSelectorKeyDown: _propTypes2['default'].func.isRequired,
  onSelectorClear: _propTypes2['default'].func.isRequired
};
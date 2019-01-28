import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/**
 * Input Box is in different position for different mode.
 * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
 * We will not follow the new design immediately since antd 3.x is already released.
 *
 * So this file named as Selector to avoid confuse.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { createRef } from '../util';

export var selectorPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  selectorValueList: PropTypes.array,
  allowClear: PropTypes.bool,
  showArrow: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  removeSelected: PropTypes.func,

  // Pass by component
  ariaId: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  clearIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export var selectorContextTypes = {
  onSelectorFocus: PropTypes.func.isRequired,
  onSelectorBlur: PropTypes.func.isRequired,
  onSelectorKeyDown: PropTypes.func.isRequired,
  onSelectorClear: PropTypes.func.isRequired
};

export default function (modeName) {
  var BaseSelector = function (_React$Component) {
    _inherits(BaseSelector, _React$Component);

    function BaseSelector() {
      _classCallCheck(this, BaseSelector);

      var _this = _possibleConstructorReturn(this, (BaseSelector.__proto__ || Object.getPrototypeOf(BaseSelector)).call(this));

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

      _this.domRef = createRef();
      return _this;
    }

    _createClass(BaseSelector, [{
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

        return React.createElement(
          'span',
          {
            key: 'clear',
            className: prefixCls + '-selection__clear',
            onClick: onSelectorClear
          },
          typeof clearIcon === 'function' ? React.createElement(clearIcon, _extends({}, this.props)) : clearIcon
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

        return React.createElement(
          'span',
          {
            key: 'arrow',
            className: prefixCls + '-arrow',
            style: { outline: 'none' }
          },
          typeof inputIcon === 'function' ? React.createElement(inputIcon, _extends({}, this.props)) : inputIcon
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

        return React.createElement(
          'span',
          {
            style: style,
            onClick: onClick,
            className: classNames(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-open', open), _defineProperty(_classNames, prefixCls + '-focused', open || focused), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, prefixCls + '-enabled', !disabled), _defineProperty(_classNames, prefixCls + '-allow-clear', allowClear), _classNames)),
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
          React.createElement(
            'span',
            {
              key: 'selection',
              className: classNames(prefixCls + '-selection', prefixCls + '-selection--' + modeName)
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
  }(React.Component);

  BaseSelector.propTypes = _extends({}, selectorPropTypes, {

    // Pass by HOC
    renderSelection: PropTypes.func.isRequired,
    renderPlaceholder: PropTypes.func,
    tabIndex: PropTypes.number
  });
  BaseSelector.contextTypes = {
    rcTreeSelect: PropTypes.shape(_extends({}, selectorContextTypes))
  };
  BaseSelector.defaultProps = {
    tabIndex: 0
  };


  polyfill(BaseSelector);

  return BaseSelector;
}
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/**
 * ARIA: https://www.w3.org/TR/wai-aria/#combobox
 * Sample 1: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/combobox/aria1.1pattern/listbox-combo.html
 * Sample 2: https://www.w3.org/blog/wai-components-gallery/widget/combobox-with-aria-autocompleteinline/
 *
 * Tab logic:
 * Popup is close
 * 1. Focus input (mark component as focused)
 * 2. Press enter to show the popup
 * 3. If popup has input, focus it
 *
 * Popup is open
 * 1. press tab to close the popup
 * 2. Focus back to the selection input box
 * 3. Let the native tab going on
 *
 * TreeSelect use 2 design type.
 * In single mode, we should focus on the `span`
 * In multiple mode, we should focus on the `input`
 */

import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import KeyCode from 'rc-util/es/KeyCode';
import shallowEqual from 'shallowequal';
import raf from 'raf';

import SelectTrigger from './SelectTrigger';
import { selectorContextTypes } from './Base/BaseSelector';
import { popupContextTypes } from './Base/BasePopup';
import SingleSelector from './Selector/SingleSelector';
import MultipleSelector, { multipleSelectorContextTypes } from './Selector/MultipleSelector';
import SinglePopup from './Popup/SinglePopup';
import MultiplePopup from './Popup/MultiplePopup';

import { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from './strategies';

import { createRef, generateAriaId, formatInternalValue, formatSelectorValue, parseSimpleTreeData, convertDataToTree, convertTreeToEntities, conductCheck, getHalfCheckedKeys, flatToHierarchy, isPosRelated, isLabelInValue, getFilterTree, cleanEntity } from './util';
import { valueProp } from './propTypes';
import SelectNode from './SelectNode';

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var prefixAria = props.prefixAria,
        defaultOpen = props.defaultOpen,
        open = props.open;


    _this.state = {
      open: open || defaultOpen,
      valueList: [],
      searchHalfCheckedKeys: [],
      missValueList: [], // Contains the value not in the tree
      selectorValueList: [], // Used for multiple selector
      valueEntities: {},
      keyEntities: {},
      searchValue: '',

      init: true
    };

    _this.selectorRef = createRef();
    _this.selectTriggerRef = createRef();

    // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves
    _this.ariaId = generateAriaId(prefixAria + '-list');
    return _this;
  }

  _createClass(Select, [{
    key: 'getChildContext',
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;


      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_, prevState) {
      if (prevState.valueList !== this.state.valueList) {
        this.forcePopupAlign();
      }
    }

    // ==================== Selector ====================


    // Handle key board event in both Selector and Popup


    // ===================== Popup ======================


    // ==================== Trigger =====================

    /**
     * Only update the value which is not in props
     */


    // [Legacy] Origin provide `documentClickClose` which triggered by `Trigger`
    // Currently `TreeSelect` align the hide popup logic as `Select` which blur to hide.
    // `documentClickClose` is not accurate anymore. Let's just keep the key word.


    // Tree checkable is also a multiple case


    // [Legacy] To align with `Select` component,
    // We use `searchValue` instead of `inputValue`
    // but currently still need support that.
    // Add this method the check if is controlled


    /**
     * 1. Update state valueList.
     * 2. Fire `onChange` event to user.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.selectorRef.current.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selectorRef.current.blur();
    }

    // ===================== Render =====================

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          valueList = _state.valueList,
          missValueList = _state.missValueList,
          selectorValueList = _state.selectorValueList,
          searchHalfCheckedKeys = _state.searchHalfCheckedKeys,
          valueEntities = _state.valueEntities,
          keyEntities = _state.keyEntities,
          searchValue = _state.searchValue,
          open = _state.open,
          focused = _state.focused,
          treeNodes = _state.treeNodes,
          filteredTreeNodes = _state.filteredTreeNodes;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          treeExpandedKeys = _props2.treeExpandedKeys,
          onTreeExpand = _props2.onTreeExpand;

      var isMultiple = this.isMultiple();

      var passProps = _extends({}, this.props, {
        isMultiple: isMultiple,
        valueList: valueList,
        searchHalfCheckedKeys: searchHalfCheckedKeys,
        selectorValueList: [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList)),
        valueEntities: valueEntities,
        keyEntities: keyEntities,
        searchValue: searchValue,
        upperSearchValue: (searchValue || '').toUpperCase(), // Perf save
        open: open,
        focused: focused,
        onChoiceAnimationLeave: this.onChoiceAnimationLeave,
        dropdownPrefixCls: prefixCls + '-dropdown',
        ariaId: this.ariaId
      });

      var Popup = isMultiple ? MultiplePopup : SinglePopup;
      var $popup = React.createElement(Popup, _extends({}, passProps, {
        onTreeExpanded: this.delayForcePopupAlign,
        treeNodes: treeNodes,
        filteredTreeNodes: filteredTreeNodes
        // Tree expanded control
        , treeExpandedKeys: treeExpandedKeys,
        onTreeExpand: onTreeExpand
      }));

      var Selector = isMultiple ? MultipleSelector : SingleSelector;
      var $selector = React.createElement(Selector, _extends({}, passProps, {
        ref: this.selectorRef
      }));

      return React.createElement(
        SelectTrigger,
        _extends({}, passProps, {

          ref: this.selectTriggerRef,
          popupElement: $popup,

          onKeyDown: this.onKeyDown,
          onDropdownVisibleChange: this.onDropdownVisibleChange
        }),
        $selector
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _prevState$prevProps = prevState.prevProps,
          prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;
      var treeCheckable = nextProps.treeCheckable,
          treeCheckStrictly = nextProps.treeCheckStrictly,
          filterTreeNode = nextProps.filterTreeNode,
          treeNodeFilterProp = nextProps.treeNodeFilterProp,
          treeDataSimpleMode = nextProps.treeDataSimpleMode;

      var newState = {
        prevProps: nextProps,
        init: false
      };

      // Process the state when props updated
      function processState(propName, updater) {
        if (prevProps[propName] !== nextProps[propName]) {
          updater(nextProps[propName], prevProps[propName]);
          return true;
        }
        return false;
      }

      var valueRefresh = false;

      // Open
      processState('open', function (propValue) {
        newState.open = propValue;
      });

      // Tree Nodes
      var treeNodes = void 0;
      var treeDataChanged = false;
      var treeDataModeChanged = false;
      processState('treeData', function (propValue) {
        treeNodes = convertDataToTree(propValue);
        treeDataChanged = true;
      });

      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;

        var prev = !prevValue || prevValue === true ? {} : prevValue;

        // Shallow equal to avoid dynamic prop object
        if (!shallowEqual(propValue, prev)) {
          treeDataModeChanged = true;
        }
      });

      // Parse by `treeDataSimpleMode`
      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = _extends({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});
        treeNodes = convertDataToTree(parseSimpleTreeData(nextProps.treeData, simpleMapper));
      }

      // If `treeData` not provide, use children TreeNodes
      if (!nextProps.treeData) {
        processState('children', function (propValue) {
          treeNodes = Array.isArray(propValue) ? propValue : [propValue];
        });
      }

      // Convert `treeData` to entities
      if (treeNodes) {
        var entitiesMap = convertTreeToEntities(treeNodes);
        newState.treeNodes = treeNodes;
        newState.posEntities = entitiesMap.posEntities;
        newState.valueEntities = entitiesMap.valueEntities;
        newState.keyEntities = entitiesMap.keyEntities;

        valueRefresh = true;
      }

      // Value List
      if (prevState.init) {
        processState('defaultValue', function (propValue) {
          newState.valueList = formatInternalValue(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState.valueList = formatInternalValue(propValue, nextProps);
        valueRefresh = true;
      });

      // Selector Value List
      if (valueRefresh) {
        // Find out that value not exist in the tree
        var missValueList = [];
        var filteredValueList = [];
        var keyList = [];

        // Get latest value list
        var latestValueList = newState.valueList;
        if (!latestValueList) {
          // Also need add prev missValueList to avoid new treeNodes contains the value
          latestValueList = [].concat(_toConsumableArray(prevState.valueList), _toConsumableArray(prevState.missValueList));
        }

        // Get key by value
        latestValueList.forEach(function (wrapperValue) {
          var value = wrapperValue.value;

          var entity = (newState.valueEntities || prevState.valueEntities)[value];

          if (entity) {
            keyList.push(entity.key);
            filteredValueList.push(wrapperValue);
            return;
          }

          // If not match, it may caused by ajax load. We need keep this
          missValueList.push(wrapperValue);
        });

        // We need calculate the value when tree is checked tree
        if (treeCheckable && !treeCheckStrictly) {
          // Calculate the keys need to be checked
          var _conductCheck = conductCheck(keyList, true, newState.keyEntities || prevState.keyEntities),
              checkedKeys = _conductCheck.checkedKeys;

          // Format value list again for internal usage


          newState.valueList = checkedKeys.map(function (key) {
            return {
              value: (newState.keyEntities || prevState.keyEntities)[key].value
            };
          });
        } else {
          newState.valueList = filteredValueList;
        }

        // Fill the missValueList, we still need display in the selector
        newState.missValueList = missValueList;

        // Calculate the value list for `Selector` usage
        newState.selectorValueList = formatSelectorValue(newState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      }

      // [Legacy] To align with `Select` component,
      // We use `searchValue` instead of `inputValue` but still keep the api
      // `inputValue` support `null` to work as `autoClearSearchValue`
      processState('inputValue', function (propValue) {
        if (propValue !== null) {
          newState.searchValue = propValue;
        }
      });

      // Search value
      processState('searchValue', function (propValue) {
        newState.searchValue = propValue;
      });

      // Do the search logic
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
      }

      // We should re-calculate the halfCheckedKeys when in search mode
      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState.searchValue || prevState.searchValue)) {
        newState.searchHalfCheckedKeys = getHalfCheckedKeys(newState.valueList, newState.valueEntities || prevState.valueEntities);
      }

      // Checked Strategy
      processState('showCheckedStrategy', function () {
        newState.selectorValueList = newState.selectorValueList || formatSelectorValue(newState.valueList || prevState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      });

      return newState;
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  prefixCls: PropTypes.string,
  prefixAria: PropTypes.string,
  multiple: PropTypes.bool,
  showArrow: PropTypes.bool,
  open: PropTypes.bool,
  value: valueProp,
  autoFocus: PropTypes.bool,

  defaultOpen: PropTypes.bool,
  defaultValue: valueProp,

  showSearch: PropTypes.bool,
  placeholder: PropTypes.node,
  inputValue: PropTypes.string, // [Legacy] Deprecated. Use `searchValue` instead.
  searchValue: PropTypes.string,
  autoClearSearchValue: PropTypes.bool,
  searchPlaceholder: PropTypes.node, // [Legacy] Confuse with placeholder
  disabled: PropTypes.bool,
  children: PropTypes.node,
  labelInValue: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  maxTagTextLength: PropTypes.number,
  showCheckedStrategy: PropTypes.oneOf([SHOW_ALL, SHOW_PARENT, SHOW_CHILD]),

  dropdownMatchSelectWidth: PropTypes.bool,
  treeData: PropTypes.array,
  treeDataSimpleMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  treeNodeFilterProp: PropTypes.string,
  treeNodeLabelProp: PropTypes.string,
  treeCheckable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  treeCheckStrictly: PropTypes.bool,
  treeIcon: PropTypes.bool,
  treeLine: PropTypes.bool,
  treeDefaultExpandAll: PropTypes.bool,
  treeDefaultExpandedKeys: PropTypes.array,
  treeExpandedKeys: PropTypes.array,
  loadData: PropTypes.func,
  filterTreeNode: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),

  notFoundContent: PropTypes.node,

  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onChange: PropTypes.func,
  onDropdownVisibleChange: PropTypes.func,

  onTreeExpand: PropTypes.func,

  inputIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  clearIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  removeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
Select.childContextTypes = {
  rcTreeSelect: PropTypes.shape(_extends({}, selectorContextTypes, multipleSelectorContextTypes, popupContextTypes, {

    onSearchInputChange: PropTypes.func,
    onSearchInputKeyDown: PropTypes.func
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

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorFocus = function () {
    _this2.setState({ focused: true });
  };

  this.onSelectorBlur = function () {
    _this2.setState({ focused: false });

    // TODO: Close when Popup is also not focused
    // this.setState({ open: false });
  };

  this.onComponentKeyDown = function (event) {
    var open = _this2.state.open;
    var keyCode = event.keyCode;


    if (!open) {
      if ([KeyCode.ENTER, KeyCode.DOWN].indexOf(keyCode) !== -1) {
        _this2.setOpenState(true);
      }
    } else if (KeyCode.ESC === keyCode) {
      _this2.setOpenState(false);
    } else if ([KeyCode.UP, KeyCode.DOWN, KeyCode.LEFT, KeyCode.RIGHT].indexOf(keyCode) !== -1) {
      // TODO: Handle `open` state
      event.stopPropagation();
    }
  };

  this.onDeselect = function (wrappedValue, node, nodeEventInfo) {
    var onDeselect = _this2.props.onDeselect;

    if (!onDeselect) return;

    onDeselect(wrappedValue, node, nodeEventInfo);
  };

  this.onSelectorClear = function (event) {
    var disabled = _this2.props.disabled;

    if (disabled) return;

    _this2.triggerChange([], []);

    if (!_this2.isSearchValueControlled()) {
      _this2.setUncontrolledState({
        searchValue: '',
        filteredTreeNodes: null
      });
    }

    event.stopPropagation();
  };

  this.onMultipleSelectorRemove = function (event, removeValue) {
    event.stopPropagation();

    var _state2 = _this2.state,
        valueList = _state2.valueList,
        missValueList = _state2.missValueList,
        valueEntities = _state2.valueEntities;
    var _props3 = _this2.props,
        treeCheckable = _props3.treeCheckable,
        treeCheckStrictly = _props3.treeCheckStrictly,
        treeNodeLabelProp = _props3.treeNodeLabelProp,
        disabled = _props3.disabled;

    if (disabled) return;

    // Find trigger entity
    var triggerEntity = valueEntities[removeValue];

    // Clean up value
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
    };

    // [Legacy] Little hack on this to make same action as `onCheck` event.
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
        return { node: node, pos: pos };
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
    }

    // Some value user pass prop is not in the tree, we also need clean it
    var newMissValueList = missValueList.filter(function (_ref8) {
      var value = _ref8.value;
      return value !== removeValue;
    });

    var wrappedValue = void 0;
    if (_this2.isLabelInValue()) {
      wrappedValue = {
        label: triggerNode ? triggerNode.props[treeNodeLabelProp] : null,
        value: removeValue
      };
    } else {
      wrappedValue = removeValue;
    }

    _this2.onDeselect(wrappedValue, triggerNode, deselectInfo);

    _this2.triggerChange(newMissValueList, newValueList, extraInfo);
  };

  this.onValueTrigger = function (isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
    var node = nodeEventInfo.node;
    var value = node.props.value;
    var _state3 = _this2.state,
        missValueList = _state3.missValueList,
        valueEntities = _state3.valueEntities,
        keyEntities = _state3.keyEntities,
        searchValue = _state3.searchValue;
    var _props4 = _this2.props,
        disabled = _props4.disabled,
        inputValue = _props4.inputValue,
        treeNodeLabelProp = _props4.treeNodeLabelProp,
        onSelect = _props4.onSelect,
        onSearch = _props4.onSearch,
        treeCheckable = _props4.treeCheckable,
        treeCheckStrictly = _props4.treeCheckStrictly,
        autoClearSearchValue = _props4.autoClearSearchValue;

    var label = node.props[treeNodeLabelProp];

    if (disabled) return;

    // Wrap the return value for user
    var wrappedValue = void 0;
    if (_this2.isLabelInValue()) {
      wrappedValue = {
        value: value,
        label: label
      };
    } else {
      wrappedValue = value;
    }

    // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.
    if (isAdd) {
      if (onSelect) {
        onSelect(wrappedValue, node, nodeEventInfo);
      }
    } else {
      _this2.onDeselect(wrappedValue, node, nodeEventInfo);
    }

    // Get wrapped value list.
    // This is a bit hack cause we use key to match the value.
    var newValueList = nodeList.map(function (_ref9) {
      var props = _ref9.props;
      return {
        value: props.value,
        label: props[treeNodeLabelProp]
      };
    });

    // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
    // We need calculate the missing nodes.
    if (treeCheckable && !treeCheckStrictly) {
      var keyList = newValueList.map(function (_ref10) {
        var val = _ref10.value;
        return valueEntities[val].key;
      });
      if (isAdd) {
        keyList = conductCheck(keyList, true, keyEntities).checkedKeys;
      } else {
        keyList = conductCheck([valueEntities[value].key], false, keyEntities, { checkedKeys: keyList }).checkedKeys;
      }
      newValueList = keyList.map(function (key) {
        var props = keyEntities[key].node.props;

        return {
          value: props.value,
          label: props[treeNodeLabelProp]
        };
      });
    }

    // Clean up `searchValue` when this prop is set
    if (autoClearSearchValue || inputValue === null) {
      // Clean state `searchValue` if uncontrolled
      if (!_this2.isSearchValueControlled()) {
        _this2.setUncontrolledState({
          searchValue: '',
          filteredTreeNodes: null
        });
      }

      // Trigger onSearch if `searchValue` to be empty.
      // We should also trigger onSearch with empty string here
      // since if user use `treeExpandedKeys`, it need user have the ability to reset it.
      if (onSearch && searchValue && searchValue.length) {
        onSearch('');
      }
    }

    // [Legacy] Provide extra info
    var extraInfo = _extends({}, nodeExtraInfo, {
      triggerValue: value,
      triggerNode: node
    });

    _this2.triggerChange(missValueList, newValueList, extraInfo);
  };

  this.onTreeNodeSelect = function (_, nodeEventInfo) {
    var _state4 = _this2.state,
        valueList = _state4.valueList,
        valueEntities = _state4.valueEntities;
    var _props5 = _this2.props,
        treeCheckable = _props5.treeCheckable,
        multiple = _props5.multiple;

    if (treeCheckable) return;

    if (!multiple) {
      _this2.setOpenState(false);
    }

    var isAdd = nodeEventInfo.selected;
    var selectedValue = nodeEventInfo.node.props.value;


    var newValueList = void 0;

    if (!multiple) {
      newValueList = [{ value: selectedValue }];
    } else {
      newValueList = valueList.filter(function (_ref11) {
        var value = _ref11.value;
        return value !== selectedValue;
      });
      if (isAdd) {
        newValueList.push({ value: selectedValue });
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

    _this2.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, { selected: isAdd });
  };

  this.onTreeNodeCheck = function (_, nodeEventInfo) {
    var _state5 = _this2.state,
        searchValue = _state5.searchValue,
        keyEntities = _state5.keyEntities,
        valueEntities = _state5.valueEntities,
        valueList = _state5.valueList;
    var treeCheckStrictly = _this2.props.treeCheckStrictly;
    var checkedNodes = nodeEventInfo.checkedNodes,
        checkedNodesPositions = nodeEventInfo.checkedNodesPositions;

    var isAdd = nodeEventInfo.checked;

    var extraInfo = {
      checked: isAdd
    };

    var checkedNodeList = checkedNodes;

    // [Legacy] Check event provide `allCheckedNodes`.
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

      var keyList = void 0;
      if (isAdd) {
        keyList = Array.from(new Set([].concat(_toConsumableArray(oriKeyList), _toConsumableArray(checkedNodeList.map(function (_ref16) {
          var value = _ref16.props.value;
          return valueEntities[value].key;
        })))));
      } else {
        keyList = conductCheck([nodeEventInfo.node.props.eventKey], false, keyEntities, { checkedKeys: oriKeyList }).checkedKeys;
      }

      checkedNodeList = keyList.map(function (key) {
        return keyEntities[key].node;
      });

      // Let's follow as not `treeCheckStrictly` format
      extraInfo.allCheckedNodes = keyList.map(function (key) {
        return cleanEntity(keyEntities[key]);
      });
    } else if (treeCheckStrictly) {
      extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
    } else {
      extraInfo.allCheckedNodes = flatToHierarchy(checkedNodesPositions);
    }

    _this2.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
  };

  this.onDropdownVisibleChange = function (open) {
    _this2.setOpenState(open, true);
  };

  this.onSearchInputChange = function (_ref17) {
    var value = _ref17.target.value;
    var _state6 = _this2.state,
        treeNodes = _state6.treeNodes,
        valueEntities = _state6.valueEntities;
    var _props6 = _this2.props,
        onSearch = _props6.onSearch,
        filterTreeNode = _props6.filterTreeNode,
        treeNodeFilterProp = _props6.treeNodeFilterProp;


    if (onSearch) {
      onSearch(value);
    }

    var isSet = false;

    if (!_this2.isSearchValueControlled()) {
      isSet = _this2.setUncontrolledState({
        searchValue: value
      });
      _this2.setOpenState(true);
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

      _this2.setState({
        filteredTreeNodes: getFilterTree(treeNodes, value, filterTreeNodeFn, valueEntities)
      });
    }
  };

  this.onSearchInputKeyDown = function (event) {
    var _state7 = _this2.state,
        searchValue = _state7.searchValue,
        valueList = _state7.valueList;
    var keyCode = event.keyCode;


    if (KeyCode.BACKSPACE === keyCode && _this2.isMultiple() && !searchValue && valueList.length) {
      var lastValue = valueList[valueList.length - 1].value;
      _this2.onMultipleSelectorRemove(event, lastValue);
    }
  };

  this.onChoiceAnimationLeave = function () {
    _this2.forcePopupAlign();
  };

  this.setUncontrolledState = function (state) {
    var needSync = false;
    var newState = {};

    Object.keys(state).forEach(function (name) {
      if (name in _this2.props) return;

      needSync = true;
      newState[name] = state[name];
    });

    if (needSync) {
      _this2.setState(newState);
    }

    return needSync;
  };

  this.setOpenState = function (open) {
    var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var onDropdownVisibleChange = _this2.props.onDropdownVisibleChange;


    if (onDropdownVisibleChange && onDropdownVisibleChange(open, { documentClickClose: !open && byTrigger }) === false) {
      return;
    }

    _this2.setUncontrolledState({ open: open });
  };

  this.isMultiple = function () {
    var _props7 = _this2.props,
        multiple = _props7.multiple,
        treeCheckable = _props7.treeCheckable;

    return !!(multiple || treeCheckable);
  };

  this.isLabelInValue = function () {
    return isLabelInValue(_this2.props);
  };

  this.isSearchValueControlled = function () {
    var inputValue = _this2.props.inputValue;

    if ('searchValue' in _this2.props) return true;
    return 'inputValue' in _this2.props && inputValue !== null;
  };

  this.forcePopupAlign = function () {
    var $trigger = _this2.selectTriggerRef.current;

    if ($trigger) {
      $trigger.forcePopupAlign();
    }
  };

  this.delayForcePopupAlign = function () {
    // Wait 2 frame to avoid dom update & dom algin in the same time
    // https://github.com/ant-design/ant-design/issues/12031
    raf(function () {
      raf(_this2.forcePopupAlign);
    });
  };

  this.triggerChange = function (missValueList, valueList) {
    var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _state8 = _this2.state,
        valueEntities = _state8.valueEntities,
        searchValue = _state8.searchValue;
    var _props8 = _this2.props,
        onChange = _props8.onChange,
        disabled = _props8.disabled,
        treeCheckable = _props8.treeCheckable,
        treeCheckStrictly = _props8.treeCheckStrictly;


    if (disabled) return;

    // Trigger
    var extra = _extends({
      // [Legacy] Always return as array contains label & value
      preValue: _this2.state.selectorValueList.map(function (_ref18) {
        var label = _ref18.label,
            value = _ref18.value;
        return { label: label, value: value };
      })
    }, extraInfo);

    // Format value by `treeCheckStrictly`
    var selectorValueList = formatSelectorValue(valueList, _this2.props, valueEntities);

    if (!('value' in _this2.props)) {
      var newState = {
        missValueList: missValueList,
        valueList: valueList,
        selectorValueList: selectorValueList
      };

      if (searchValue && treeCheckable && !treeCheckStrictly) {
        newState.searchHalfCheckedKeys = getHalfCheckedKeys(valueList, valueEntities);
      }

      _this2.setState(newState);
    }

    // Only do the logic when `onChange` function provided
    if (onChange) {
      var connectValueList = void 0;

      // Get value by mode
      if (_this2.isMultiple()) {
        connectValueList = [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList));
      } else {
        connectValueList = selectorValueList.slice(0, 1);
      }

      var labelList = null;
      var returnValue = void 0;

      if (_this2.isLabelInValue()) {
        returnValue = connectValueList.map(function (_ref19) {
          var label = _ref19.label,
              value = _ref19.value;
          return { label: label, value: value };
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

      if (!_this2.isMultiple()) {
        returnValue = returnValue[0];
      }

      onChange(returnValue, labelList, extra);
    }
  };
};

Select.TreeNode = SelectNode;
Select.SHOW_ALL = SHOW_ALL;
Select.SHOW_PARENT = SHOW_PARENT;
Select.SHOW_CHILD = SHOW_CHILD;

// Let warning show correct component name
Select.displayName = 'TreeSelect';

polyfill(Select);

export default Select;
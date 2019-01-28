'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _SelectTrigger = require('./SelectTrigger');

var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

var _BaseSelector = require('./Base/BaseSelector');

var _BasePopup = require('./Base/BasePopup');

var _SingleSelector = require('./Selector/SingleSelector');

var _SingleSelector2 = _interopRequireDefault(_SingleSelector);

var _MultipleSelector = require('./Selector/MultipleSelector');

var _MultipleSelector2 = _interopRequireDefault(_MultipleSelector);

var _SinglePopup = require('./Popup/SinglePopup');

var _SinglePopup2 = _interopRequireDefault(_SinglePopup);

var _MultiplePopup = require('./Popup/MultiplePopup');

var _MultiplePopup2 = _interopRequireDefault(_MultiplePopup);

var _strategies = require('./strategies');

var _util = require('./util');

var _propTypes3 = require('./propTypes');

var _SelectNode = require('./SelectNode');

var _SelectNode2 = _interopRequireDefault(_SelectNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Select = function (_React$Component) {
  (0, _inherits3['default'])(Select, _React$Component);

  function Select(props) {
    (0, _classCallCheck3['default'])(this, Select);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

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

    _this.selectorRef = (0, _util.createRef)();
    _this.selectTriggerRef = (0, _util.createRef)();

    // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves
    _this.ariaId = (0, _util.generateAriaId)(prefixAria + '-list');
    return _this;
  }

  (0, _createClass3['default'])(Select, [{
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

      var passProps = (0, _extends3['default'])({}, this.props, {
        isMultiple: isMultiple,
        valueList: valueList,
        searchHalfCheckedKeys: searchHalfCheckedKeys,
        selectorValueList: [].concat((0, _toConsumableArray3['default'])(missValueList), (0, _toConsumableArray3['default'])(selectorValueList)),
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

      var Popup = isMultiple ? _MultiplePopup2['default'] : _SinglePopup2['default'];
      var $popup = _react2['default'].createElement(Popup, (0, _extends3['default'])({}, passProps, {
        onTreeExpanded: this.delayForcePopupAlign,
        treeNodes: treeNodes,
        filteredTreeNodes: filteredTreeNodes
        // Tree expanded control
        , treeExpandedKeys: treeExpandedKeys,
        onTreeExpand: onTreeExpand
      }));

      var Selector = isMultiple ? _MultipleSelector2['default'] : _SingleSelector2['default'];
      var $selector = _react2['default'].createElement(Selector, (0, _extends3['default'])({}, passProps, {
        ref: this.selectorRef
      }));

      return _react2['default'].createElement(
        _SelectTrigger2['default'],
        (0, _extends3['default'])({}, passProps, {

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
        treeNodes = (0, _util.convertDataToTree)(propValue);
        treeDataChanged = true;
      });

      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;

        var prev = !prevValue || prevValue === true ? {} : prevValue;

        // Shallow equal to avoid dynamic prop object
        if (!(0, _shallowequal2['default'])(propValue, prev)) {
          treeDataModeChanged = true;
        }
      });

      // Parse by `treeDataSimpleMode`
      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = (0, _extends3['default'])({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});
        treeNodes = (0, _util.convertDataToTree)((0, _util.parseSimpleTreeData)(nextProps.treeData, simpleMapper));
      }

      // If `treeData` not provide, use children TreeNodes
      if (!nextProps.treeData) {
        processState('children', function (propValue) {
          treeNodes = Array.isArray(propValue) ? propValue : [propValue];
        });
      }

      // Convert `treeData` to entities
      if (treeNodes) {
        var entitiesMap = (0, _util.convertTreeToEntities)(treeNodes);
        newState.treeNodes = treeNodes;
        newState.posEntities = entitiesMap.posEntities;
        newState.valueEntities = entitiesMap.valueEntities;
        newState.keyEntities = entitiesMap.keyEntities;

        valueRefresh = true;
      }

      // Value List
      if (prevState.init) {
        processState('defaultValue', function (propValue) {
          newState.valueList = (0, _util.formatInternalValue)(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState.valueList = (0, _util.formatInternalValue)(propValue, nextProps);
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
          latestValueList = [].concat((0, _toConsumableArray3['default'])(prevState.valueList), (0, _toConsumableArray3['default'])(prevState.missValueList));
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
          var _conductCheck = (0, _util.conductCheck)(keyList, true, newState.keyEntities || prevState.keyEntities),
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
        newState.selectorValueList = (0, _util.formatSelectorValue)(newState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
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

        newState.filteredTreeNodes = (0, _util.getFilterTree)(newState.treeNodes || prevState.treeNodes, searchValue, filterTreeNodeFn, newState.valueEntities || prevState.valueEntities);
      }

      // We should re-calculate the halfCheckedKeys when in search mode
      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState.searchValue || prevState.searchValue)) {
        newState.searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(newState.valueList, newState.valueEntities || prevState.valueEntities);
      }

      // Checked Strategy
      processState('showCheckedStrategy', function () {
        newState.selectorValueList = newState.selectorValueList || (0, _util.formatSelectorValue)(newState.valueList || prevState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      });

      return newState;
    }
  }]);
  return Select;
}(_react2['default'].Component); /**
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

Select.propTypes = {
  prefixCls: _propTypes2['default'].string,
  prefixAria: _propTypes2['default'].string,
  multiple: _propTypes2['default'].bool,
  showArrow: _propTypes2['default'].bool,
  open: _propTypes2['default'].bool,
  value: _propTypes3.valueProp,
  autoFocus: _propTypes2['default'].bool,

  defaultOpen: _propTypes2['default'].bool,
  defaultValue: _propTypes3.valueProp,

  showSearch: _propTypes2['default'].bool,
  placeholder: _propTypes2['default'].node,
  inputValue: _propTypes2['default'].string, // [Legacy] Deprecated. Use `searchValue` instead.
  searchValue: _propTypes2['default'].string,
  autoClearSearchValue: _propTypes2['default'].bool,
  searchPlaceholder: _propTypes2['default'].node, // [Legacy] Confuse with placeholder
  disabled: _propTypes2['default'].bool,
  children: _propTypes2['default'].node,
  labelInValue: _propTypes2['default'].bool,
  maxTagCount: _propTypes2['default'].number,
  maxTagPlaceholder: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  maxTagTextLength: _propTypes2['default'].number,
  showCheckedStrategy: _propTypes2['default'].oneOf([_strategies.SHOW_ALL, _strategies.SHOW_PARENT, _strategies.SHOW_CHILD]),

  dropdownMatchSelectWidth: _propTypes2['default'].bool,
  treeData: _propTypes2['default'].array,
  treeDataSimpleMode: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
  treeNodeFilterProp: _propTypes2['default'].string,
  treeNodeLabelProp: _propTypes2['default'].string,
  treeCheckable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
  treeCheckStrictly: _propTypes2['default'].bool,
  treeIcon: _propTypes2['default'].bool,
  treeLine: _propTypes2['default'].bool,
  treeDefaultExpandAll: _propTypes2['default'].bool,
  treeDefaultExpandedKeys: _propTypes2['default'].array,
  treeExpandedKeys: _propTypes2['default'].array,
  loadData: _propTypes2['default'].func,
  filterTreeNode: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool]),

  notFoundContent: _propTypes2['default'].node,

  onSearch: _propTypes2['default'].func,
  onSelect: _propTypes2['default'].func,
  onDeselect: _propTypes2['default'].func,
  onChange: _propTypes2['default'].func,
  onDropdownVisibleChange: _propTypes2['default'].func,

  onTreeExpand: _propTypes2['default'].func,

  inputIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  clearIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  removeIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  switcherIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func])
};
Select.childContextTypes = {
  rcTreeSelect: _propTypes2['default'].shape((0, _extends3['default'])({}, _BaseSelector.selectorContextTypes, _MultipleSelector.multipleSelectorContextTypes, _BasePopup.popupContextTypes, {

    onSearchInputChange: _propTypes2['default'].func,
    onSearchInputKeyDown: _propTypes2['default'].func
  }))
};
Select.defaultProps = {
  prefixCls: 'rc-tree-select',
  prefixAria: 'rc-tree-select',
  showArrow: true,
  showSearch: true,
  autoClearSearchValue: true,
  showCheckedStrategy: _strategies.SHOW_CHILD,

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
      if ([_KeyCode2['default'].ENTER, _KeyCode2['default'].DOWN].indexOf(keyCode) !== -1) {
        _this2.setOpenState(true);
      }
    } else if (_KeyCode2['default'].ESC === keyCode) {
      _this2.setOpenState(false);
    } else if ([_KeyCode2['default'].UP, _KeyCode2['default'].DOWN, _KeyCode2['default'].LEFT, _KeyCode2['default'].RIGHT].indexOf(keyCode) !== -1) {
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
          return !(0, _util.isPosRelated)(entity.pos, triggerEntity.pos);
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
        extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(filteredEntityList).map(function (_ref6) {
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
        keyList = (0, _util.conductCheck)(keyList, true, keyEntities).checkedKeys;
      } else {
        keyList = (0, _util.conductCheck)([valueEntities[value].key], false, keyEntities, { checkedKeys: keyList }).checkedKeys;
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
    var extraInfo = (0, _extends3['default'])({}, nodeExtraInfo, {
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
        keyList = Array.from(new Set([].concat((0, _toConsumableArray3['default'])(oriKeyList), (0, _toConsumableArray3['default'])(checkedNodeList.map(function (_ref16) {
          var value = _ref16.props.value;
          return valueEntities[value].key;
        })))));
      } else {
        keyList = (0, _util.conductCheck)([nodeEventInfo.node.props.eventKey], false, keyEntities, { checkedKeys: oriKeyList }).checkedKeys;
      }

      checkedNodeList = keyList.map(function (key) {
        return keyEntities[key].node;
      });

      // Let's follow as not `treeCheckStrictly` format
      extraInfo.allCheckedNodes = keyList.map(function (key) {
        return (0, _util.cleanEntity)(keyEntities[key]);
      });
    } else if (treeCheckStrictly) {
      extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
    } else {
      extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(checkedNodesPositions);
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
        filteredTreeNodes: (0, _util.getFilterTree)(treeNodes, value, filterTreeNodeFn, valueEntities)
      });
    }
  };

  this.onSearchInputKeyDown = function (event) {
    var _state7 = _this2.state,
        searchValue = _state7.searchValue,
        valueList = _state7.valueList;
    var keyCode = event.keyCode;


    if (_KeyCode2['default'].BACKSPACE === keyCode && _this2.isMultiple() && !searchValue && valueList.length) {
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
    return (0, _util.isLabelInValue)(_this2.props);
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
    (0, _raf2['default'])(function () {
      (0, _raf2['default'])(_this2.forcePopupAlign);
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
    var extra = (0, _extends3['default'])({
      // [Legacy] Always return as array contains label & value
      preValue: _this2.state.selectorValueList.map(function (_ref18) {
        var label = _ref18.label,
            value = _ref18.value;
        return { label: label, value: value };
      })
    }, extraInfo);

    // Format value by `treeCheckStrictly`
    var selectorValueList = (0, _util.formatSelectorValue)(valueList, _this2.props, valueEntities);

    if (!('value' in _this2.props)) {
      var newState = {
        missValueList: missValueList,
        valueList: valueList,
        selectorValueList: selectorValueList
      };

      if (searchValue && treeCheckable && !treeCheckStrictly) {
        newState.searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(valueList, valueEntities);
      }

      _this2.setState(newState);
    }

    // Only do the logic when `onChange` function provided
    if (onChange) {
      var connectValueList = void 0;

      // Get value by mode
      if (_this2.isMultiple()) {
        connectValueList = [].concat((0, _toConsumableArray3['default'])(missValueList), (0, _toConsumableArray3['default'])(selectorValueList));
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

Select.TreeNode = _SelectNode2['default'];
Select.SHOW_ALL = _strategies.SHOW_ALL;
Select.SHOW_PARENT = _strategies.SHOW_PARENT;
Select.SHOW_CHILD = _strategies.SHOW_CHILD;

// Let warning show correct component name
Select.displayName = 'TreeSelect';

(0, _reactLifecyclesCompat.polyfill)(Select);

exports['default'] = Select;
module.exports = exports['default'];
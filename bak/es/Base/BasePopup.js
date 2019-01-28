import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Tree from 'rc-tree';

export var popupContextTypes = {
  onPopupKeyDown: PropTypes.func.isRequired,
  onTreeNodeSelect: PropTypes.func.isRequired,
  onTreeNodeCheck: PropTypes.func.isRequired
};

var BasePopup = function (_React$Component) {
  _inherits(BasePopup, _React$Component);

  function BasePopup(props) {
    _classCallCheck(this, BasePopup);

    var _this = _possibleConstructorReturn(this, (BasePopup.__proto__ || Object.getPrototypeOf(BasePopup)).call(this));

    _initialiseProps.call(_this);

    var treeDefaultExpandAll = props.treeDefaultExpandAll,
        treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
        keyEntities = props.keyEntities;

    // TODO: make `expandedKeyList` control

    var expandedKeyList = treeDefaultExpandedKeys;
    if (treeDefaultExpandAll) {
      expandedKeyList = Object.keys(keyEntities);
    }

    _this.state = {
      keyList: [],
      expandedKeyList: expandedKeyList,
      // Cache `expandedKeyList` when tree is in filter. This is used in `getDerivedStateFromProps`
      cachedExpandedKeyList: [], // eslint-disable-line react/no-unused-state
      loadedKeys: []
    };
    return _this;
  }

  _createClass(BasePopup, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          keyList = _state.keyList,
          expandedKeyList = _state.expandedKeyList,
          loadedKeys = _state.loadedKeys;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          treeNodes = _props.treeNodes,
          filteredTreeNodes = _props.filteredTreeNodes,
          treeIcon = _props.treeIcon,
          treeLine = _props.treeLine,
          treeCheckable = _props.treeCheckable,
          treeCheckStrictly = _props.treeCheckStrictly,
          multiple = _props.multiple,
          ariaId = _props.ariaId,
          renderSearch = _props.renderSearch,
          switcherIcon = _props.switcherIcon,
          searchHalfCheckedKeys = _props.searchHalfCheckedKeys;
      var _context$rcTreeSelect = this.context.rcTreeSelect,
          onPopupKeyDown = _context$rcTreeSelect.onPopupKeyDown,
          onTreeNodeSelect = _context$rcTreeSelect.onTreeNodeSelect,
          onTreeNodeCheck = _context$rcTreeSelect.onTreeNodeCheck;


      var loadData = this.getLoadData();

      var treeProps = {};

      if (treeCheckable) {
        treeProps.checkedKeys = keyList;
      } else {
        treeProps.selectedKeys = keyList;
      }

      var $notFound = void 0;
      var $treeNodes = void 0;
      if (filteredTreeNodes) {
        if (filteredTreeNodes.length) {
          treeProps.checkStrictly = true;
          $treeNodes = filteredTreeNodes;

          // Fill halfCheckedKeys
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

      var $tree = void 0;
      if ($notFound) {
        $tree = $notFound;
      } else {
        $tree = React.createElement(
          Tree,
          _extends({
            prefixCls: prefixCls + '-tree',
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
          }, treeProps),
          $treeNodes
        );
      }

      return React.createElement(
        'div',
        {
          role: 'listbox',
          id: ariaId,
          onKeyDown: onPopupKeyDown,
          tabIndex: -1
        },
        renderSearch ? renderSearch() : null,
        $tree
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _ref = prevState || {},
          _ref$prevProps = _ref.prevProps,
          prevProps = _ref$prevProps === undefined ? {} : _ref$prevProps,
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
      };

      // Check value update
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
      }

      // Show all when tree is in filter mode
      if (!treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
        newState.expandedKeyList = Object.keys(keyEntities);
      }

      // Cache `expandedKeyList` when filter set
      if (upperSearchValue && !prevProps.upperSearchValue) {
        newState.cachedExpandedKeyList = expandedKeyList;
      } else if (!upperSearchValue && prevProps.upperSearchValue && !treeExpandedKeys) {
        newState.expandedKeyList = cachedExpandedKeyList || [];
        newState.cachedExpandedKeyList = [];
      }

      // Use expandedKeys if provided
      if (prevProps.treeExpandedKeys !== treeExpandedKeys) {
        newState.expandedKeyList = treeExpandedKeys;
      }

      // Clean loadedKeys if key not exist in keyEntities anymore
      if (nextProps.loadData) {
        newState.loadedKeys = loadedKeys.filter(function (key) {
          return key in keyEntities;
        });
      }

      return newState;
    }

    /**
     * Not pass `loadData` when searching. To avoid loop ajax call makes browser crash.
     */


    /**
     * This method pass to Tree component which is used for add filtered class
     * in TreeNode > li
     */

  }]);

  return BasePopup;
}(React.Component);

BasePopup.propTypes = {
  prefixCls: PropTypes.string,
  upperSearchValue: PropTypes.string,
  valueList: PropTypes.array,
  searchHalfCheckedKeys: PropTypes.array,
  valueEntities: PropTypes.object,
  keyEntities: PropTypes.object,
  treeIcon: PropTypes.bool,
  treeLine: PropTypes.bool,
  treeNodeFilterProp: PropTypes.string,
  treeCheckable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  treeCheckStrictly: PropTypes.bool,
  treeDefaultExpandAll: PropTypes.bool,
  treeDefaultExpandedKeys: PropTypes.array,
  treeExpandedKeys: PropTypes.array,
  loadData: PropTypes.func,
  multiple: PropTypes.bool,
  onTreeExpand: PropTypes.func,

  treeNodes: PropTypes.node,
  filteredTreeNodes: PropTypes.node,
  notFoundContent: PropTypes.node,

  ariaId: PropTypes.string,
  switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  // HOC
  renderSearch: PropTypes.func,
  onTreeExpanded: PropTypes.func
};
BasePopup.contextTypes = {
  rcTreeSelect: PropTypes.shape(_extends({}, popupContextTypes))
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onTreeExpand = function (expandedKeyList) {
    var _props2 = _this2.props,
        treeExpandedKeys = _props2.treeExpandedKeys,
        onTreeExpand = _props2.onTreeExpand,
        onTreeExpanded = _props2.onTreeExpanded;

    // Set uncontrolled state

    if (!treeExpandedKeys) {
      _this2.setState({ expandedKeyList: expandedKeyList }, onTreeExpanded);
    }

    if (onTreeExpand) {
      onTreeExpand(expandedKeyList);
    }
  };

  this.onLoad = function (loadedKeys) {
    _this2.setState({ loadedKeys: loadedKeys });
  };

  this.getLoadData = function () {
    var _props3 = _this2.props,
        loadData = _props3.loadData,
        upperSearchValue = _props3.upperSearchValue;

    if (upperSearchValue) return null;
    return loadData;
  };

  this.filterTreeNode = function (treeNode) {
    var _props4 = _this2.props,
        upperSearchValue = _props4.upperSearchValue,
        treeNodeFilterProp = _props4.treeNodeFilterProp;


    var filterVal = treeNode.props[treeNodeFilterProp];
    if (typeof filterVal === 'string') {
      return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
    }

    return false;
  };

  this.renderNotFound = function () {
    var _props5 = _this2.props,
        prefixCls = _props5.prefixCls,
        notFoundContent = _props5.notFoundContent;


    return React.createElement(
      'span',
      { className: prefixCls + '-not-found' },
      notFoundContent
    );
  };
};

polyfill(BasePopup);

export default BasePopup;
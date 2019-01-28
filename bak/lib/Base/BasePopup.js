'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupContextTypes = undefined;

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

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var popupContextTypes = exports.popupContextTypes = {
  onPopupKeyDown: _propTypes2['default'].func.isRequired,
  onTreeNodeSelect: _propTypes2['default'].func.isRequired,
  onTreeNodeCheck: _propTypes2['default'].func.isRequired
};

var BasePopup = function (_React$Component) {
  (0, _inherits3['default'])(BasePopup, _React$Component);

  function BasePopup(props) {
    (0, _classCallCheck3['default'])(this, BasePopup);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BasePopup.__proto__ || Object.getPrototypeOf(BasePopup)).call(this));

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

  (0, _createClass3['default'])(BasePopup, [{
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
        $tree = _react2['default'].createElement(
          _rcTree2['default'],
          (0, _extends3['default'])({
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

      return _react2['default'].createElement(
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
}(_react2['default'].Component);

BasePopup.propTypes = {
  prefixCls: _propTypes2['default'].string,
  upperSearchValue: _propTypes2['default'].string,
  valueList: _propTypes2['default'].array,
  searchHalfCheckedKeys: _propTypes2['default'].array,
  valueEntities: _propTypes2['default'].object,
  keyEntities: _propTypes2['default'].object,
  treeIcon: _propTypes2['default'].bool,
  treeLine: _propTypes2['default'].bool,
  treeNodeFilterProp: _propTypes2['default'].string,
  treeCheckable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
  treeCheckStrictly: _propTypes2['default'].bool,
  treeDefaultExpandAll: _propTypes2['default'].bool,
  treeDefaultExpandedKeys: _propTypes2['default'].array,
  treeExpandedKeys: _propTypes2['default'].array,
  loadData: _propTypes2['default'].func,
  multiple: _propTypes2['default'].bool,
  onTreeExpand: _propTypes2['default'].func,

  treeNodes: _propTypes2['default'].node,
  filteredTreeNodes: _propTypes2['default'].node,
  notFoundContent: _propTypes2['default'].node,

  ariaId: _propTypes2['default'].string,
  switcherIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),

  // HOC
  renderSearch: _propTypes2['default'].func,
  onTreeExpanded: _propTypes2['default'].func
};
BasePopup.contextTypes = {
  rcTreeSelect: _propTypes2['default'].shape((0, _extends3['default'])({}, popupContextTypes))
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


    return _react2['default'].createElement(
      'span',
      { className: prefixCls + '-not-found' },
      notFoundContent
    );
  };
};

(0, _reactLifecyclesCompat.polyfill)(BasePopup);

exports['default'] = BasePopup;
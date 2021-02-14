"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ItemTable(props) {
  var itemRows = props.items.map(function (item) {
    return /*#__PURE__*/React.createElement(ItemRow, {
      key: item.id,
      item: item
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, itemRows));
}

var ItemAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemAdd, _React$Component);

  var _super = _createSuper(ItemAdd);

  function ItemAdd() {
    var _this;

    _classCallCheck(this, ItemAdd);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ItemAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.itemAdd;
      var item = {
        productName: form.productName.value,
        price: form.price.value,
        category: form.category.value,
        image: form.image.value
      };
      this.props.createItem(item);
      form.productName.value = "";
      form.price.value = "";
      form.category.value = "";
      form.image.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "itemAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        for: "category"
      }, "Category"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
        name: "category"
      }, /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accessories")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        for: "productName"
      }, "Product Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "productName"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        for: "price"
      }, "Price Per Unit"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        for: "image"
      }, "Image URL"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "image"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add Product"), /*#__PURE__*/React.createElement("br", null));
    }
  }]);

  return ItemAdd;
}(React.Component);

var ItemList = /*#__PURE__*/function (_React$Component2) {
  _inherits(ItemList, _React$Component2);

  var _super2 = _createSuper(ItemList);

  function ItemList() {
    var _this2;

    _classCallCheck(this, ItemList);

    _this2 = _super2.call(this);
    _this2.state = {
      items: []
    };
    _this2.createItem = _this2.createItem.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ItemList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          items: initialItems
        });
      }, 500);
    }
  }, {
    key: "createItem",
    value: function createItem(item) {
      item.id = this.state.items.length + 1;
      var newItemList = this.state.items.slice();
      newItemList.push(item);
      this.setState({
        items: newItemList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), "Showing all available products", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ItemTable, {
        items: this.state.items
      }), /*#__PURE__*/React.createElement("br", null), "Add a new product to inventory", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ItemAdd, {
        createItem: this.createItem
      }));
    }
  }]);

  return ItemList;
}(React.Component);

function ItemRow(props) {
  var item = props.item;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, item.productName), /*#__PURE__*/React.createElement("td", null, item.price), /*#__PURE__*/React.createElement("td", null, item.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: item.image,
    target: "_blank"
  }, "View")));
}

var BorderWrap = /*#__PURE__*/function (_React$Component3) {
  _inherits(BorderWrap, _React$Component3);

  var _super3 = _createSuper(BorderWrap);

  function BorderWrap() {
    _classCallCheck(this, BorderWrap);

    return _super3.apply(this, arguments);
  }

  _createClass(BorderWrap, [{
    key: "render",
    value: function render() {
      var borderedStyle = {
        border: "1px solid silver",
        padding: 6
      };
      return /*#__PURE__*/React.createElement("div", {
        style: borderedStyle
      }, this.props.children);
    }
  }]);

  return BorderWrap;
}(React.Component);

var initialItems = [];
var element = /*#__PURE__*/React.createElement(ItemList, null);
ReactDOM.render(element, document.getElementById('contents'));
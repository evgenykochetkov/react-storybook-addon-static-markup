'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowStaticMarkup = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _pretty = require('pretty');

var _pretty2 = _interopRequireDefault(_pretty);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowStaticMarkup = exports.ShowStaticMarkup = function (_React$Component) {
  (0, _inherits3.default)(ShowStaticMarkup, _React$Component);

  function ShowStaticMarkup() {
    (0, _classCallCheck3.default)(this, ShowStaticMarkup);
    return (0, _possibleConstructorReturn3.default)(this, (ShowStaticMarkup.__proto__ || (0, _getPrototypeOf2.default)(ShowStaticMarkup)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowStaticMarkup, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      var markup = (0, _pretty2.default)(_server2.default.renderToStaticMarkup(children));

      var channel = _storybookAddons2.default.getChannel();
      channel.emit('evgenykochetkov/static-markup/show-markup', markup);

      return children;
    }
  }]);
  return ShowStaticMarkup;
}(_react2.default.Component);

exports.default = {
  addWithStaticMarkup: function addWithStaticMarkup(storyName, story) {
    this.add(storyName, function () {
      return _react2.default.createElement(
        ShowStaticMarkup,
        null,
        story()
      );
    });
  }
};
'use strict';

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

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  markupPanel: {
    margin: 10,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto'
  }
};

var StaticMarkup = function (_React$Component) {
  (0, _inherits3.default)(StaticMarkup, _React$Component);

  function StaticMarkup() {
    var _ref;

    (0, _classCallCheck3.default)(this, StaticMarkup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = StaticMarkup.__proto__ || (0, _getPrototypeOf2.default)(StaticMarkup)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      markup: ''
    };

    _this.onShowStaticMarkup = _this.onShowStaticMarkup.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(StaticMarkup, [{
    key: 'onShowStaticMarkup',
    value: function onShowStaticMarkup(markup) {
      this.setState({ markup: markup });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          channel = _props.channel,
          api = _props.api;

      channel.on('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup);

      // Clear the current state on every story change.
      this.stopListeningOnStory = api.onStory(function () {
        _this2.onShowStaticMarkup('');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var markup = this.state.markup;
      // setting it to true to support past
      // versions of storybook, which might not
      // have active property.

      var _props$active = this.props.active,
          active = _props$active === undefined ? true : _props$active;

      return active ? _react2.default.createElement(
        'div',
        { style: styles.markupPanel },
        markup
      ) : null;
    }

    // This is some cleanup tasks when the StaticMarkup panel is unmounting.

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.stopListeningOnStory) {
        this.stopListeningOnStory();
      }

      this.unmounted = true;
      var _props2 = this.props,
          channel = _props2.channel,
          api = _props2.api;

      channel.removeListener('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup);
    }
  }]);
  return StaticMarkup;
}(_react2.default.Component);

// Register the addon with a unique name.


_addons2.default.register('evgenykochetkov/static-markup', function (api) {
  // Also need to set a unique name to the panel.
  _addons2.default.addPanel('evgenykochetkov/static-markup/panel', {
    title: 'Static Markup',
    render: function render(_ref2) {
      var active = _ref2.active;
      return _react2.default.createElement(StaticMarkup, { channel: _addons2.default.getChannel(), api: api, active: active });
    }
  });
});
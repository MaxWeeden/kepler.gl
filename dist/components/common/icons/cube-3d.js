'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cube3D = _react2.default.createClass({
  displayName: 'Cube3D',
  propTypes: {
    /** Set the height of the icon, ex. '16px' */
    height: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      height: null,
      predefinedClassName: 'data-ex-icons-cube3d'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _base2.default,
      this.props,
      _react2.default.createElement('path', { d: 'M29.2,29.57,9.52,40.93V20a2.81,2.81,0,0,1,1.4-2.43L29.2,7.06Z' }),
      _react2.default.createElement('path', { d: 'M32.08,34.38l21,10.82L33.4,56.56a2.78,2.78,0,0,1-2.8,0L12.12,45.91Z' }),
      _react2.default.createElement('path', { d: 'M54.48,20v19.6L34.8,29.49V7.06L53.09,17.61A2.81,2.81,0,0,1,54.48,20Z' })
    );
  }
});

exports.default = Cube3D;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9jdWJlLTNkLmpzIl0sIm5hbWVzIjpbIkN1YmUzRCIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJoZWlnaHQiLCJzdHJpbmciLCJnZXREZWZhdWx0UHJvcHMiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwicmVuZGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxnQkFBTUMsV0FBTixDQUFrQjtBQUMvQkMsZUFBYSxRQURrQjtBQUUvQkMsYUFBVztBQUNUO0FBQ0FDLFlBQVEsb0JBQVVDO0FBRlQsR0FGb0I7QUFNL0JDLGlCQU4rQiw2QkFNYjtBQUNoQixXQUFPO0FBQ0xGLGNBQVEsSUFESDtBQUVMRywyQkFBcUI7QUFGaEIsS0FBUDtBQUlELEdBWDhCO0FBWS9CQyxRQVorQixvQkFZdEI7QUFDUCxXQUNFO0FBQUE7QUFBVSxXQUFLQyxLQUFmO0FBQ0UsOENBQU0sR0FBRSwrREFBUixHQURGO0FBRUUsOENBQU0sR0FBRSxxRUFBUixHQUZGO0FBR0UsOENBQU0sR0FBRSxzRUFBUjtBQUhGLEtBREY7QUFPRDtBQXBCOEIsQ0FBbEIsQ0FBZjs7a0JBdUJlVCxNIiwiZmlsZSI6ImN1YmUtM2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuY29uc3QgQ3ViZTNEID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0N1YmUzRCcsXG4gIHByb3BUeXBlczoge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWN1YmUzZCdcbiAgICB9O1xuICB9LFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBhdGggZD1cIk0yOS4yLDI5LjU3LDkuNTIsNDAuOTNWMjBhMi44MSwyLjgxLDAsMCwxLDEuNC0yLjQzTDI5LjIsNy4wNlpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzIuMDgsMzQuMzhsMjEsMTAuODJMMzMuNCw1Ni41NmEyLjc4LDIuNzgsMCwwLDEtMi44LDBMMTIuMTIsNDUuOTFaXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTU0LjQ4LDIwdjE5LjZMMzQuOCwyOS40OVY3LjA2TDUzLjA5LDE3LjYxQTIuODEsMi44MSwwLDAsMSw1NC40OCwyMFpcIi8+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmUzRDtcbiJdfQ==
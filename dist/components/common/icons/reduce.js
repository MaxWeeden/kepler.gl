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

var Reduce = _react2.default.createClass({
  displayName: 'Reduce',
  propTypes: {
    /** Set the height of the icon, ex. '16px' */
    height: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      height: null,
      size: 'tiny',
      predefinedClassName: 'data-ex-icons-reduce'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _base2.default,
      this.props,
      _react2.default.createElement(
        'g',
        { transform: 'translate(12.000000, 12.000000)' },
        _react2.default.createElement('path', { d: 'M36.5208333,13.9791667 L31.7291666,9.1875 L37.75,3.2083334 L34.7916666,0.25 L28.8125,6.2708334 L24.0208333,1.4791667 L24.0208333,13.9791667 L36.5208333,13.9791667 Z M13.9791667,1.4791667 L9.1875,6.2708334 L3.2083334,0.25 L0.25,3.2083334 L6.2708334,9.1875 L1.4791667,13.9791667 L13.9791667,13.9791667 L13.9791667,1.4791667 Z M1.4791667,24.0208333 L6.2708334,28.8125 L0.25,34.7916666 L3.2083334,37.75 L9.1875,31.7291666 L13.9791667,36.5208333 L13.9791667,24.0208333 L1.4791667,24.0208333 Z M24.0208333,36.5208333 L28.8125,31.7291666 L34.7916666,37.75 L37.75,34.7916666 L31.7291666,28.8125 L36.5208333,24.0208333 L24.0208333,24.0208333 L24.0208333,36.5208333 Z', id: 'Shape' })
      )
    );
  }
});

exports.default = Reduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9yZWR1Y2UuanMiXSwibmFtZXMiOlsiUmVkdWNlIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImhlaWdodCIsInN0cmluZyIsImdldERlZmF1bHRQcm9wcyIsInNpemUiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwicmVuZGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxnQkFBTUMsV0FBTixDQUFrQjtBQUMvQkMsZUFBYSxRQURrQjtBQUUvQkMsYUFBVztBQUNUO0FBQ0FDLFlBQVEsb0JBQVVDO0FBRlQsR0FGb0I7QUFNL0JDLGlCQU4rQiw2QkFNYjtBQUNoQixXQUFPO0FBQ0xGLGNBQVEsSUFESDtBQUVMRyxZQUFNLE1BRkQ7QUFHTEMsMkJBQXFCO0FBSGhCLEtBQVA7QUFLRCxHQVo4QjtBQWEvQkMsUUFiK0Isb0JBYXRCO0FBQ1AsV0FDRTtBQUFBO0FBQVUsV0FBS0MsS0FBZjtBQUVFO0FBQUE7QUFBQSxVQUFHLFdBQVUsaUNBQWI7QUFDRSxnREFBTSxHQUFFLG1wQkFBUixFQUE0cEIsSUFBRyxPQUEvcEI7QUFERjtBQUZGLEtBREY7QUFTRDtBQXZCOEIsQ0FBbEIsQ0FBZjs7a0JBMEJlVixNIiwiZmlsZSI6InJlZHVjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBSZWR1Y2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUmVkdWNlJyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc2l6ZTogJ3RpbnknLFxuICAgICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtcmVkdWNlJ1xuICAgIH07XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMi4wMDAwMDAsIDEyLjAwMDAwMClcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTM2LjUyMDgzMzMsMTMuOTc5MTY2NyBMMzEuNzI5MTY2Niw5LjE4NzUgTDM3Ljc1LDMuMjA4MzMzNCBMMzQuNzkxNjY2NiwwLjI1IEwyOC44MTI1LDYuMjcwODMzNCBMMjQuMDIwODMzMywxLjQ3OTE2NjcgTDI0LjAyMDgzMzMsMTMuOTc5MTY2NyBMMzYuNTIwODMzMywxMy45NzkxNjY3IFogTTEzLjk3OTE2NjcsMS40NzkxNjY3IEw5LjE4NzUsNi4yNzA4MzM0IEwzLjIwODMzMzQsMC4yNSBMMC4yNSwzLjIwODMzMzQgTDYuMjcwODMzNCw5LjE4NzUgTDEuNDc5MTY2NywxMy45NzkxNjY3IEwxMy45NzkxNjY3LDEzLjk3OTE2NjcgTDEzLjk3OTE2NjcsMS40NzkxNjY3IFogTTEuNDc5MTY2NywyNC4wMjA4MzMzIEw2LjI3MDgzMzQsMjguODEyNSBMMC4yNSwzNC43OTE2NjY2IEwzLjIwODMzMzQsMzcuNzUgTDkuMTg3NSwzMS43MjkxNjY2IEwxMy45NzkxNjY3LDM2LjUyMDgzMzMgTDEzLjk3OTE2NjcsMjQuMDIwODMzMyBMMS40NzkxNjY3LDI0LjAyMDgzMzMgWiBNMjQuMDIwODMzMywzNi41MjA4MzMzIEwyOC44MTI1LDMxLjcyOTE2NjYgTDM0Ljc5MTY2NjYsMzcuNzUgTDM3Ljc1LDM0Ljc5MTY2NjYgTDMxLjcyOTE2NjYsMjguODEyNSBMMzYuNTIwODMzMywyNC4wMjA4MzMzIEwyNC4wMjA4MzMzLDI0LjAyMDgzMzMgTDI0LjAyMDgzMzMsMzYuNTIwODMzMyBaXCIgaWQ9XCJTaGFwZVwiLz5cbiAgICAgICAgPC9nPlxuXG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZHVjZTtcbiJdfQ==
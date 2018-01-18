'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _deck = require('deck.gl');

var _getCellLayerVertext = require('../layer-utils/get-cell-layer-vertext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedHexagonCellLayer = function (_HexagonCellLayer) {
  (0, _inherits3.default)(EnhancedHexagonCellLayer, _HexagonCellLayer);

  function EnhancedHexagonCellLayer() {
    (0, _classCallCheck3.default)(this, EnhancedHexagonCellLayer);
    return (0, _possibleConstructorReturn3.default)(this, _HexagonCellLayer.apply(this, arguments));
  }

  EnhancedHexagonCellLayer.prototype.getShaders = function getShaders() {
    var shaders = _HexagonCellLayer.prototype.getShaders.call(this);
    var vs = (0, _getCellLayerVertext.getCellLayerVertex)(shaders.vs, { highlightPicked: true });
    return (0, _extends3.default)({}, shaders, { vs: vs });
  };

  return EnhancedHexagonCellLayer;
}(_deck.HexagonCellLayer);

exports.default = EnhancedHexagonCellLayer;


EnhancedHexagonCellLayer.layerName = 'EnhancedHexagonCellLayer';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2hleGFnb24tbGF5ZXIvZW5oYW5jZWQtaGV4YWdvbi1jZWxsLWxheWVyLmpzIl0sIm5hbWVzIjpbIkVuaGFuY2VkSGV4YWdvbkNlbGxMYXllciIsImdldFNoYWRlcnMiLCJzaGFkZXJzIiwidnMiLCJoaWdobGlnaHRQaWNrZWQiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFcUJBLHdCOzs7Ozs7OztxQ0FDbkJDLFUseUJBQWE7QUFDWCxRQUFNQyxVQUFVLDRCQUFNRCxVQUFOLFdBQWhCO0FBQ0EsUUFBTUUsS0FBSyw2Q0FBbUJELFFBQVFDLEVBQTNCLEVBQStCLEVBQUNDLGlCQUFpQixJQUFsQixFQUEvQixDQUFYO0FBQ0Esc0NBQVdGLE9BQVgsSUFBb0JDLE1BQXBCO0FBQ0QsRzs7Ozs7a0JBTGtCSCx3Qjs7O0FBUXJCQSx5QkFBeUJLLFNBQXpCLEdBQXFDLDBCQUFyQyIsImZpbGUiOiJlbmhhbmNlZC1oZXhhZ29uLWNlbGwtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hleGFnb25DZWxsTGF5ZXJ9IGZyb20gJ2RlY2suZ2wnO1xuaW1wb3J0IHtnZXRDZWxsTGF5ZXJWZXJ0ZXh9IGZyb20gJy4uL2xheWVyLXV0aWxzL2dldC1jZWxsLWxheWVyLXZlcnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmhhbmNlZEhleGFnb25DZWxsTGF5ZXIgZXh0ZW5kcyBIZXhhZ29uQ2VsbExheWVyIHtcbiAgZ2V0U2hhZGVycygpIHtcbiAgICBjb25zdCBzaGFkZXJzID0gc3VwZXIuZ2V0U2hhZGVycygpO1xuICAgIGNvbnN0IHZzID0gZ2V0Q2VsbExheWVyVmVydGV4KHNoYWRlcnMudnMsIHtoaWdobGlnaHRQaWNrZWQ6IHRydWV9KTtcbiAgICByZXR1cm4gey4uLnNoYWRlcnMsIHZzfTtcbiAgfVxufVxuXG5FbmhhbmNlZEhleGFnb25DZWxsTGF5ZXIubGF5ZXJOYW1lID0gJ0VuaGFuY2VkSGV4YWdvbkNlbGxMYXllcic7XG4iXX0=
"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("h1", {
  id: "title"
}, "Hello word asd asd asd asddtyhdfh"), document.getElementById('root'));
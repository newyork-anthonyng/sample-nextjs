'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/anthonyng/Desktop/Projects/sample-nextjs/components/Layout/index.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 1716394199,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 1716394199,
    css: 'body{font-family:Helvetica, sans-serif;margin:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl1QixBQUcyQyxtQ0FBa0IsVUFBTyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW50aG9ueW5nL0Rlc2t0b3AvUHJvamVjdHMvc2FtcGxlLW5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=components/Layout/index.js */'
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;
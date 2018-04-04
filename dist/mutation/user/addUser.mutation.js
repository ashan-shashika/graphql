'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _userType = require('../../types/user.type.js');

var _userType2 = _interopRequireDefault(_userType);

var _userInput = require('../../input/user.input.js');

var _userInput2 = _interopRequireDefault(_userInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _userType2.default,
  args: {
    user: {
      type: _userInput2.default
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.user.create({
      firstName: args.user.firstName,
      lastName: args.user.lastName,
      email: args.user.email.toLowerCase(),
      status: 1
    });
  }
};
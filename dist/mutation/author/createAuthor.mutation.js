"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../../../models/index.js");

var _index2 = _interopRequireDefault(_index);

var _authorType = require("../../types/author.type.js");

var _authorType2 = _interopRequireDefault(_authorType);

var _authorInput = require("../../input/author.input.js");

var _authorInput2 = _interopRequireDefault(_authorInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _authorType2.default,
  args: {
    author: {
      type: _authorInput2.default
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.author.create({
      firstName: args.author.firstName
    });
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _blogType = require('../../types/blog.type.js');

var _blogType2 = _interopRequireDefault(_blogType);

var _blogInput = require('../../input/blog.input.js');

var _blogInput2 = _interopRequireDefault(_blogInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _blogType2.default,
  args: {
    input: {
      type: _blogInput2.default
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.blog.create({
      title: args.blog.title,
      description: args.blog.description,
      imageUrl: args.blog.imageUrl,
      authorId: args.blog.authorId
    });
  }
};
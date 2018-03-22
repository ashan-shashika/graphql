'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _author = require('../../types/author.js');

var _author2 = _interopRequireDefault(_author);

var _authorInput = require('../../input/author.input.js');

var _authorInput2 = _interopRequireDefault(_authorInput);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _author2.default,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    firstName: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.author.findById(args.id).then(function (author) {
      return author.update({
        firstName: args.firstName
      });
    });
  }
};
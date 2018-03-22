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

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _blogType2.default,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    description: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    imageUrl: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    authorId: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }

  },
  resolve: function resolve(source, args) {
    return _index2.default.blog.findById(args.id).then(function (blog) {
      return blog.update({
        title: args.title,
        description: args.description,
        imageUrl: args.imageUrl,
        authorId: args.authorId
      });
    });
  }
};
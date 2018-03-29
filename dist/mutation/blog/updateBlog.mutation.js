'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//input fields
var updateBlogInput = new _graphql.GraphQLInputObjectType({
  name: 'updateBlogInput',
  fields: function fields() {
    return {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      imageUrl: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      authorId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
    };
  }
});

//return values
var updateBlogPayload = new _graphql.GraphQLObjectType({
  name: 'updateBlogPayload',
  description: '\n\n    Example Request:\r\n    mutation UpdateBlog($input: updateBlogInput!) {\r\n        updateBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        "input": {\r\n          "id": 1,\r\n          "title": "first blog",\r\n          "description": "first blog description",\r\n          "imageUrl": "www.google.com",\r\n          "authorId": 2\r\n        }\r\n    }\r',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(blog) {
          return blog.id;
        }
      },
      title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(blog) {
          return blog.title;
        }
      },
      description: {
        type: _graphql.GraphQLString,
        resolve: function resolve(blog) {
          return blog.description;
        }
      },
      imageUrl: {
        type: _graphql.GraphQLString,
        resolve: function resolve(blog) {
          return blog.imageUrl;
        }
      },
      authorId: {
        type: _graphql.GraphQLString,
        resolve: function resolve(blog) {
          return blog.authorId;
        }
      }
    };
  }
});

//mutation
exports.default = {
  type: updateBlogPayload,
  args: {
    input: {
      type: updateBlogInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.blog.findById(args.input.id).then(function (blog) {
      return blog.update({
        title: args.input.title,
        description: args.input.description,
        imageUrl: args.input.imageUrl,
        authorId: args.input.authorId
      });
    });
  }
};
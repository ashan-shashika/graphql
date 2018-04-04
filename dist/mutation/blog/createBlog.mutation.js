'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//input fields
var AddBlogInput = new _graphql.GraphQLInputObjectType({
  name: 'createBlogInput',
  description: "test",
  fields: function fields() {
    return {
      title: { type: _graphql.GraphQLString }
    };
  }
});

//return values
var createBlogPayload = new _graphql.GraphQLObjectType({
  name: 'createBlogPayload',
  description: '\n\n    Example Request:\r\n    mutation CreateBlog($input: createBlogInput!) {\r\n        createBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        "input": {\r\n            "title": "test blog"\r\n        }\r\n    }',
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
      }
    };
  }
});

//mutation
exports.default = {
  type: createBlogPayload,
  args: {
    input: {
      type: AddBlogInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.blog.create({
      title: args.input.title,
      description: null,
      imageUrl: null,
      authorId: null,
      status: 1
    });
  }
};
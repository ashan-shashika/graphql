"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _models = require("../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = new _graphql.GraphQLObjectType({
  name: 'deleteBlogPayload',
  description: "\n\n    Example Request:\r\n    mutation DeleteBlog($input: deleteBlogInput!) {\r\n        deleteBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        \"input\": {\r\n            \"id\": \"\"\r\n        }\r\n    }",
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(blog) {
          return blog.id;
        }
      }
    };
  }
});

exports.default = Blog;
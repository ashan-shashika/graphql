"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _authorType = require("../author.type.js");

var _authorType2 = _interopRequireDefault(_authorType);

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = new _graphql.GraphQLObjectType({
  name: 'createBlogPayload',
  description: "\n\n    Example Request:\r\n    mutation createBlog($input: createBlogInput!) {\r\n        createBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        \"input\": {\r\n            \"title\": \"test blog\",\r\n        }\r\n    }",
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

exports.default = Blog;
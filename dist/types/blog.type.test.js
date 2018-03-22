"use strict";

var _graphql = require("graphql");

var _authorType = require("./author.type.js");

var _authorType2 = _interopRequireDefault(_authorType);

var _models = require("../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = function fields() {
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
    author: {
      type: _authorType2.default,
      description: "author of this blog",
      resolve: function resolve(blog) {
        return _models2.default.blog.findById(blog.authorId);
      }
    }
  };
};

var mutation = new _graphql.GraphQLObjectType({
  name: 'blog',
  description: "\n\n    Example Request:\r\n    mutation AddBlog($input: AddBlogInput!) {\r\n        addBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        \"input\": {\r\n            \"title\": \"test blog\",\r\n            \"description\": \"this is the blog\",\r\n            \"imageUrl\": \"www.google.com\",\r\n            \"authorId\":2,\r\n        }\r\n    }",
  fields: fields

});
var Blog = new _graphql.GraphQLObjectType({
  name: 'blog',
  fields: fields
});

module.exports = {
  Blog: Blog,
  mutation: mutation
};
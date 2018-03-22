"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _author = require("./author.js");

var _author2 = _interopRequireDefault(_author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = new _graphql.GraphQLObjectType({
  name: 'Blog',
  description: 'This represent a Blog',
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
      author: {
        type: _author2.default,
        description: "author of this blog",
        resolve: function resolve(quote) {
          return models.author.findById(blog.authorId);
        }
      }
    };
  }

});

exports.default = Blog;
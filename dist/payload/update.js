"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var Blog = new _graphql.GraphQLObjectType({
  name: 'updateBlogPayload',
  description: "\n\n    Example Request:\r\n    mutation UpdateBlog($input: updateBlogInput!) {\r\n        updateBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        \"input\": {\r\n          \"id\": 1,\r\n          \"title\": \"first blog\",\r\n          \"description\": \"first blog description\",\r\n          \"imageUrl\": \"www.google.com\",\r\n          \"authorId\": 2\r\n        }\r\n    }\r",
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

exports.default = Blog;
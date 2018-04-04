"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _models = require("../../models");

var _models2 = _interopRequireDefault(_models);

var _blogType = require("./blog.type.js");

var _blogType2 = _interopRequireDefault(_blogType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = new _graphql.GraphQLObjectType({
  name: 'author',
  description: 'This represent a Author',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(author) {
          return author.id;
        }
      },
      status: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(author) {
          return author.status;
        }
      },
      firstName: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author.firstName;
        }
      },
      blog: {
        type: new _graphql.GraphQLList(_blogType2.default),
        description: "author's blogs",
        resolve: function resolve(author) {
          return _models2.default.blog.findAll({ where: { authorId: author.id } });
        }
      }
    };
  }

});

exports.default = Author;
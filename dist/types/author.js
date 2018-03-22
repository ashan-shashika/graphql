"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _blogs = require("./blogs.js");

var _blogs2 = _interopRequireDefault(_blogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = new _graphql.GraphQLObjectType({
  name: 'Author',
  description: 'This represent a Author',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(author) {
          return author.id;
        }
      },
      firstName: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author.firstName;
        }
      },
      blog: {
        type: new _graphql.GraphQLList(_blogs2.default),
        description: "author's blogs",
        resolve: function resolve(author) {
          return models.blog.findAll({ where: { authoId: author.id } });
        }
      }
    };
  }

});

exports.default = Author;
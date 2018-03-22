"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _index = require("../../models/index.js");

var _index2 = _interopRequireDefault(_index);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

var _author = require("./author.js");

var _author2 = _interopRequireDefault(_author);

var _blogs = require("./blogs.js");

var _blogs2 = _interopRequireDefault(_blogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'this is root query',
  fields: function fields() {
    return {
      user: {
        type: new _graphql.GraphQLList(_user2.default),
        args: {
          id: { type: _graphql.GraphQLInt }
        },
        resolve: function resolve(root, args) {
          if (args.id === null || args.id === undefined) {
            return null;
          } else {
            return _index2.default.user.findAll({ where: args });
          }
        }
      },
      allUsers: {
        type: new _graphql.GraphQLList(_user2.default),
        resolve: function resolve(root, args) {
          return _index2.default.user.findAll();
        }
      },
      author: {
        type: new _graphql.GraphQLList(_author2.default),
        args: {
          id: { type: _graphql.GraphQLInt }
        },
        resolve: function resolve(root, args) {
          if (args.id === null || args.id === undefined) {
            return null;
          } else {
            return _index2.default.author.findAll({ where: args });
          }
        }
      },
      allAuthors: {
        type: new _graphql.GraphQLList(_author2.default),
        resolve: function resolve(root, args) {
          return _index2.default.author.findAll({ where: args });
        }
      },
      blog: {
        type: new _graphql.GraphQLList(_blogs2.default),
        args: {
          id: { type: _graphql.GraphQLInt }
        },
        resolve: function resolve(root, args) {
          if (args.id === null || args.id === undefined) {
            return null;
          } else {
            return _index2.default.blog.findAll({ where: args });
          }
        }
      },
      allBlogs: {
        type: new _graphql.GraphQLList(_blogs2.default),
        resolve: function resolve(root, args) {
          return _index2.default.blog.findAll({ where: args });
        }
      }

    };
  }
});

exports.default = Query;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var User = new _graphql.GraphQLObjectType({
  name: 'user',
  description: 'This represent a User',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(user) {
          return user.id;
        }
      },
      status: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(user) {
          return user.status;
        }
      },
      firstName: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.firstName;
        }
      },
      lastName: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.lastName;
        }
      },
      email: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.email;
        }
      }
    };
  }

});

exports.default = User;
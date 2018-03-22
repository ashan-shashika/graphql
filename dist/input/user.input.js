"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'UserInput',
  fields: function fields() {
    return {
      firstName: { type: _graphql.GraphQLString },
      lastName: { type: _graphql.GraphQLString },
      email: { type: _graphql.GraphQLString }
    };
  }
});
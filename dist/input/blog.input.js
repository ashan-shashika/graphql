'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'Bloginput',
  description: "test",
  fields: function fields() {
    return {
      title: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString },
      imageUrl: { type: _graphql.GraphQLString },
      authorId: { type: _graphql.GraphQLInt }
    };
  }
});
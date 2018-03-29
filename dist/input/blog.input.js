'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'createBlogInput',
  description: "test",
  fields: function fields() {
    return {
      title: { type: _graphql.GraphQLString }
      // description: { type: GraphQLString },
      // imageUrl: { type: GraphQLString },
      // authorId: { type: GraphQLInt },
    };
  }
});
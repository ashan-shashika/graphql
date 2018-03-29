'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'updateBlogInput',
  description: "test",
  fields: function fields() {
    return {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
      },
      title: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      description: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      imageUrl: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      authorId: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
      }
    };
  }
});
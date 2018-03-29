'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'deleteBlogInput',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt }
    };
  }
});
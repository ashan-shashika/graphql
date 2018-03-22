'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _blogInput = require('./blog.input.js');

var _blogInput2 = _interopRequireDefault(_blogInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'authorinput',
  fields: function fields() {
    return {
      firstName: { type: _graphql.GraphQLString }
      // blog: { type: new GraphQLList(BlogInput) }
    };
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateAuthorInput = new _graphql.GraphQLInputObjectType({
  name: 'updateAuthorInput',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      firstName: { type: _graphql.GraphQLString }
    };
  }
});

//return values
var updateAuthorPayload = new _graphql.GraphQLObjectType({
  name: 'updateAuthorPayload',
  description: '\n\n    Example Request:\r\n    mutation UpdateAuthorPayload($input: updateAuthorInput!) {\r\n        updateAuthor(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        "input": {\r\n            "firstName": "first author updated"\r\n        }\r\n    }',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      firstName: { type: _graphql.GraphQLString }
    };
  }
});
exports.default = {
  type: updateAuthorPayload,
  args: {
    input: {
      type: updateAuthorInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.author.findById(args.input.id).then(function (author) {
      return author.update({
        firstName: args.input.firstName
      });
    });
  }
};
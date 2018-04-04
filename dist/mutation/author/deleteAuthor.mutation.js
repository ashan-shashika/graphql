'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteAuthorInput = new _graphql.GraphQLInputObjectType({
  name: 'deleteAuthorInput',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt }
    };
  }
});

//return values
var deleteAuthorPayload = new _graphql.GraphQLObjectType({
  name: 'deleteAuthorPayload',
  description: '\n\n    Example Request:\r\n    mutation DeleteAuthorPayload($input: deleteAuthorInput!) {\r\n        deleteAuthor(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        "input": {\r\n            "id": \r\n        }\r\n    }',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt }
    };
  }
});
exports.default = {
  type: deleteAuthorPayload,
  args: {
    input: {
      type: deleteAuthorInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.author.findById(args.input.id).then(function (author) {
      return author.update({
        status: 2
      });
    });
  }
};
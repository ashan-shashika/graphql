"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../../../models/index.js");

var _index2 = _interopRequireDefault(_index);

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//input fields
var createAuthorInput = new _graphql.GraphQLInputObjectType({
  name: 'createAuthorInput',
  fields: function fields() {
    return {
      firstName: { type: _graphql.GraphQLString }
    };
  }
});

//return values
var createAuthorPayload = new _graphql.GraphQLObjectType({
  name: 'createAuthorPayload',
  description: "\n\n    Example Request:\r\n    mutation CreateAuthorPayload($input: createAuthorInput!) {\r\n        createAuthor(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        \"input\": {\r\n            \"firstName\": \"first author\"\r\n        }\r\n    }",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      firstName: { type: _graphql.GraphQLString }
    };
  }
});

//mutation
exports.default = {
  type: createAuthorPayload,
  args: {
    input: {
      type: createAuthorInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.author.create({
      firstName: args.input.firstName
    });
  }
};
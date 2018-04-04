'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//input fields
var deleteBlogInput = new _graphql.GraphQLInputObjectType({
  name: 'deleteBlogInput',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt }
    };
  }
});
//return values
var deleteBlogPayload = new _graphql.GraphQLObjectType({
  name: 'deleteBlogPayload',
  description: '\n\n    Example Request:\r\n    mutation DeleteBlog($input: deleteBlogInput!) {\r\n        deleteBlog(input: $input) {\r\n          id\r\n        }\r\n    }\n\n    Example Input:\r\n    {\r\n        "input": {\r\n            "id": ""\r\n        }\r\n    }',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        resolve: function resolve(blog) {
          return blog.id;
        }
      }
    };
  }
});
//mutation
exports.default = {
  type: deleteBlogPayload,
  args: {
    input: {
      type: deleteBlogInput
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.blog.findById(args.input.id).then(function (blog) {
      return blog.update({
        status: 2
      });
    });
  }
};
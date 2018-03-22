'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _user = require('../types/user.js');

var _user2 = _interopRequireDefault(_user);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _user2.default,
  args: {
    firstName: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    lastName: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(source, args) {
    return _index2.default.user.create({
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email.toLowerCase()
    });
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _user = require('../../types/user.js');

var _user2 = _interopRequireDefault(_user);

var _userInput = require('../../input/user.input.js');

var _userInput2 = _interopRequireDefault(_userInput);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _user2.default,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
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
    return _index2.default.user.findById(args.id).then(function (user) {
      return user.update({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email.toLowerCase()
      });
    });
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _userType = require('../../types/user.type.js');

var _userType2 = _interopRequireDefault(_userType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _userType2.default,
    args: {
        id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, args) {
        return _index2.default.user.findById(args.id);
    }
};
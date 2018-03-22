'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _authorType = require('../../types/author.type.js');

var _authorType2 = _interopRequireDefault(_authorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: new _graphql.GraphQLList(_authorType2.default),
    args: {},
    resolve: function resolve(root, args) {
        return _index2.default.author.findAll({ where: args });
    }
};
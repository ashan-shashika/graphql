'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _blogType = require('../../types/blog.type.js');

var _blogType2 = _interopRequireDefault(_blogType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: new _graphql.GraphQLList(_blogType2.default),
    args: {},
    resolve: function resolve(root, args) {
        return _index2.default.blog.findAll({ where: args });
    }
};
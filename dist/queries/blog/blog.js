'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _index = require('../../../models/index.js');

var _index2 = _interopRequireDefault(_index);

var _blogTypeTest = require('../../types/blog.type.test.js');

var _blogTypeTest2 = _interopRequireDefault(_blogTypeTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _blogTypeTest2.default.Blog,
    args: {
        id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, args) {
        return _index2.default.blog.findById(args.id);
    }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blog = require('./blog/blog.js');

var _blog2 = _interopRequireDefault(_blog);

var _allBlogs = require('./blog/allBlogs.js');

var _allBlogs2 = _interopRequireDefault(_allBlogs);

var _author = require('./author/author.js');

var _author2 = _interopRequireDefault(_author);

var _allAuthors = require('./author/allAuthors.js');

var _allAuthors2 = _interopRequireDefault(_allAuthors);

var _user = require('./user/user.js');

var _user2 = _interopRequireDefault(_user);

var _allUsers = require('./user/allUsers.js');

var _allUsers2 = _interopRequireDefault(_allUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    blog: _blog2.default,
    allBlogs: _allBlogs2.default,
    author: _author2.default,
    allAuthors: _allAuthors2.default,
    user: _user2.default,
    allUsers: _allUsers2.default
};
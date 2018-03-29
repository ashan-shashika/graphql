'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addUserMutation = require('./user/addUser.mutation.js');

var _addUserMutation2 = _interopRequireDefault(_addUserMutation);

var _updateUserMutation = require('./user/updateUser.mutation.js');

var _updateUserMutation2 = _interopRequireDefault(_updateUserMutation);

var _createAuthorMutation = require('./author/createAuthor.mutation.js');

var _createAuthorMutation2 = _interopRequireDefault(_createAuthorMutation);

var _updateAuthorMutation = require('./author/updateAuthor.mutation.js');

var _updateAuthorMutation2 = _interopRequireDefault(_updateAuthorMutation);

var _createBlogMutation = require('./blog/createBlog.mutation.js');

var _createBlogMutation2 = _interopRequireDefault(_createBlogMutation);

var _updateBlogMutation = require('./blog/updateBlog.mutation.js');

var _updateBlogMutation2 = _interopRequireDefault(_updateBlogMutation);

var _deleteBlogMutation = require('./blog/deleteBlog.mutation.js');

var _deleteBlogMutation2 = _interopRequireDefault(_deleteBlogMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addUser: _addUserMutation2.default,
    updateUser: _updateUserMutation2.default,
    createAuthor: _createAuthorMutation2.default,
    updateAuthor: _updateAuthorMutation2.default,
    createBlog: _createBlogMutation2.default,
    updateBlog: _updateBlogMutation2.default,
    deleteBlog: _deleteBlogMutation2.default
};
"use strict";

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connect = require("../../connect.js");

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _connect2.default.define('user', {
  firstName: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

User.sync({ force: true }).then(function () {
  // Table created
  return User.create({
    firstName: 'Ashan',
    lastName: 'Shashika',
    email: 'ashan@gmail.com'
  });
});
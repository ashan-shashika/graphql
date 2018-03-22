'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('graphql');

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get("/", function (req, res) {
  res.send("this is basic testing");
});

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _index2.default,
  graphiql: true,
  pretty: true
}));

app.listen(3000, function () {
  console.log('app is running PORT:3000');
});
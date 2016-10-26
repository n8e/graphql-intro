// require express for API functionality
var express = require('express');
var schema = require('./src/schema');
// new dependencies
var gql = require('graphql');
var bodyParser = require('body-parser');

var app  = express();
var PORT = 3000;

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', function(req, res) {
  // execute GraphQL!
  gql.graphql(schema, req.body)
  .then(function(result) {
    res.send(JSON.stringify(result, null, 2));
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});

// schema.js
var graphql = require('graphql/type/');

var GraphQLSchema = graphql.GraphQLSchema;

var RootType = require('./schema/types/RootType');
var MutationType = require('./schema/mutations/MutationType');

count = 0;

var schema = new GraphQLSchema({
  query: RootType,
  mutation: MutationType
});

module.exports = schema;

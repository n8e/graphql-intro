var graphql = require('graphql/type/');

var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLInt = graphql.GraphQLInt;


var RootType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    count: {
      type: GraphQLInt,
      description: 'The count!',
      resolve: function() {
        return count;
      }
    }
  }
});

module.exports = RootType;

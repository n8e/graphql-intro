var graphql = require('graphql/type/');

var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLInt = graphql.GraphQLInt;

var MutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: 'Updates the count',
      resolve: function() {
        count += 1;
        return count;
      }
    }
  }
});

module.exports = MutationType;

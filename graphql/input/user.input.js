import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType
} from "graphql"

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString }
  })
});

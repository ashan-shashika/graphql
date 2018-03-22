import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'Bloginput',
  description:"test",
  fields: () => ({
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      imageUrl: { type: GraphQLString },
      authorId: { type: GraphQLInt },
  })
});

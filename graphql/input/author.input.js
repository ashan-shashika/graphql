import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import BlogInput from './blog.input.js';

export default new GraphQLInputObjectType({
  name: 'authorinput',
  fields: () => ({
      firstName: { type: GraphQLString },
      // blog: { type: new GraphQLList(BlogInput) }
  })
});

import models from '../../../models/index.js';
import AuthorType from '../../types/author.js';
import AuthorInput from "../../input/author.input.js"
import { GraphQLNonNull , GraphQLInt,GraphQLString } from "graphql"

export default {
  type: AuthorType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (source, args) {
    return models.author.findById(args.id)
    .then((author)=>{
      return author.update({
        firstName: args.firstName
      })
    });
  }

}

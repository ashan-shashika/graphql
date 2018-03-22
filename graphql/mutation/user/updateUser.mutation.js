import models from '../../../models/index.js';
import UserType from '../../types/user.js';
import UserInput from "../../input/user.input.js"
import { GraphQLNonNull , GraphQLInt,GraphQLString } from "graphql"

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },

  },
  resolve (source, args) {
    return models.user.findById(args.id)
    .then((user)=>{
      return user.update({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email.toLowerCase()
      })
    });
  }

}

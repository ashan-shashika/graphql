import models from '../../../models/index.js';
import BlogType from '../../types/blog.type.js';
import BlogInput from "../../input/blog.input.js"
import { GraphQLNonNull , GraphQLInt,GraphQLString } from "graphql"

export default {
  type: BlogType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    imageUrl: {
      type: new GraphQLNonNull(GraphQLString)
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLInt)
    },

  },
  resolve (source, args) {
    return models.blog.findById(args.id)
    .then((blog)=>{
      return blog.update({
        title: args.title,
        description: args.description,
        imageUrl: args.imageUrl,
        authorId:args.authorId
      })
    });
  }

}

import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import BlogType from '../../types/blog.type.js';

export default {
    type: BlogType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.blog.findById(args.id);
    }
};

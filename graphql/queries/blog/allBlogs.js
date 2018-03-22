import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import models from '../../../models/index.js';
import BlogType from '../../types/blog.type.test.js';
export default {
    type: new GraphQLList(BlogType.Blog),
    args: {

    },
    resolve(root, args) {
        return models.blog.findAll({where:args});
    }
};

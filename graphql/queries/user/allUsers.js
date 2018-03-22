import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import models from '../../../models/index.js';
import UserType from '../../types/user.type.js';

export default {
    type: new GraphQLList(UserType),
    args: {

    },
    resolve(root, args) {
        return models.user.findAll({where:args});
    }
};

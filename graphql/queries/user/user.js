import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import UserType from '../../types/user.type.js';

export default {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.user.findById(args.id);
    }
};

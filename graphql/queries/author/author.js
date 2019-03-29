import { GraphQLID, GraphQLNonNull } from "graphql";

import models from "../../../models/index.js";
import AuthorType from "../../types/author.type.js";

export default {
  type: AuthorType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args) {
    return models.author.findById(args.id);
  }
};

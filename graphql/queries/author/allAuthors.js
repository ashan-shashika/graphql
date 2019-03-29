import { GraphQLList } from "graphql";

import models from "../../../models/index.js";
import AuthorType from "../../types/author.type.js";

export default {
  type: new GraphQLList(AuthorType),
  args: {},
  resolve(root, args) {
    return models.author.findAll({ where: args });
  }
};

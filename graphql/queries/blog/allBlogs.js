import { GraphQLList } from "graphql";

import models from "../../../models/index.js";
import Blog from "../../types/blog.type.js";

export default {
  type: new GraphQLList(Blog),
  args: {},
  resolve(root, args) {
    return models.blog.findAll({ where: args });
  }
};

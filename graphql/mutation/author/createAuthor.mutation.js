import models from "../../../models/index.js";
import AuthourType from "../../types/author.type.js";
import AuthourInput from "../../input/author.input.js"

export default {
  type: AuthourType,
  args: {
      author: {
          type: AuthourInput
      }
  },
  resolve (source, args) {
    return models.author.create({
      firstName: args.author.firstName
    });
  }
}

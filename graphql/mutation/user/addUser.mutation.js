import models from "../../../models/index.js";
import UserType from "../../types/user.type.js";
import UserInput from "../../input/user.input.js";

export default {
  type: UserType,
  args: {
    user: {
      type: UserInput
    }
  },
  resolve(source, args) {
    return models.user.create({
      firstName: args.user.firstName,
      lastName: args.user.lastName,
      email: args.user.email.toLowerCase()
    });
  }
};

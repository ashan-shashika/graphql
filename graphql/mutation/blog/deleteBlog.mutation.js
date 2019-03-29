import models from "../../../models/index.js";
import { GraphQLInputObjectType, GraphQLObjectType, GraphQLInt } from "graphql";

// input fields
const deleteBlogInput = new GraphQLInputObjectType({
  name: "deleteBlogInput",
  fields: () => ({
    id: { type: GraphQLInt }
  })
});
// return values
const deleteBlogPayload = new GraphQLObjectType({
  name: "deleteBlogPayload",
  description: `\n
    Example Request:\r
    mutation DeleteBlog($input: deleteBlogInput!) {\r
        deleteBlog(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "id": ""\r
        }\r
    }`,
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(blog) {
          return blog.id;
        }
      }
    };
  }
});
// mutation
export default {
  type: deleteBlogPayload,
  args: {
    input: {
      type: deleteBlogInput
    }
  },
  resolve(source, args) {
    return models.blog.findById(args.input.id).then(blog => {
      return blog.update({
        status: 2
      });
    });
  }
};

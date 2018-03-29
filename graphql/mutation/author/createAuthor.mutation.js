import models from "../../../models/index.js";
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"

//input fields
const createAuthorInput = new GraphQLInputObjectType({
  name: 'createAuthorInput',
  fields: () => ({
      firstName: { type: GraphQLString },
  })
});

//return values
const createAuthorPayload = new GraphQLObjectType({
  name:'createAuthorPayload',
  description:`\n
    Example Request:\r
    mutation CreateAuthorPayload($input: createAuthorInput!) {\r
        createAuthor(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "firstName": "first author"\r
        }\r
    }`,
  fields:()=>({
    id:{ type:GraphQLInt },
    firstName:{ type:GraphQLString}
  })
});

//mutation
export default {
  type: createAuthorPayload,
  args: {
      input: {
          type: createAuthorInput
      }
  },
  resolve (source, args) {
    return models.author.create({
      firstName: args.input.firstName
    });
  }
}

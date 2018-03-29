import models from '../../../models/index.js';
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"

const updateAuthorInput = new GraphQLInputObjectType({
  name:'updateAuthorInput',
  fields:()=>({
    id:{type:GraphQLInt},
    firstName:{ type:GraphQLString }
  })
});


//return values
const updateAuthorPayload = new GraphQLObjectType({
  name:'updateAuthorPayload',
  description:`\n
    Example Request:\r
    mutation UpdateAuthorPayload($input: updateAuthorInput!) {\r
        updateAuthor(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "firstName": "first author updated"\r
        }\r
    }`,
  fields:()=>({
    id:{ type:GraphQLInt },
    firstName:{ type:GraphQLString }
  })
})
export default {
  type: updateAuthorPayload,
  args: {
    input:{
      type:updateAuthorInput
    }
  },
  resolve (source, args) {
    return models.author.findById(args.input.id)
    .then((author)=>{
      return author.update({
        firstName: args.input.firstName
      })
    });
  }

}

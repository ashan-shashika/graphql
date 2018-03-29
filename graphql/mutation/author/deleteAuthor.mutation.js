import models from '../../../models/index.js';
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"

const deleteAuthorInput = new GraphQLInputObjectType({
  name:'deleteAuthorInput',
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
    mutation UpdateAuthorPayload($input: deleteAuthorInput!) {\r
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
      type:deleteAuthorInput
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

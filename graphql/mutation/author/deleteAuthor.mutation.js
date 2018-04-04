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
  })
});


//return values
const deleteAuthorPayload = new GraphQLObjectType({
  name:'deleteAuthorPayload',
  description:`\n
    Example Request:\r
    mutation DeleteAuthorPayload($input: deleteAuthorInput!) {\r
        deleteAuthor(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "id": \r
        }\r
    }`,
  fields:()=>({
    id:{ type:GraphQLInt },
  })
})
export default {
  type: deleteAuthorPayload,
  args: {
    input:{
      type:deleteAuthorInput
    }
  },
  resolve (source, args) {
    return models.author.findById(args.input.id)
    .then((author)=>{
      return author.update({
        status: 2
      })
    });
  }

}

import models from '../../../models/index.js';
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"

//input fields
const AddBlogInput = new GraphQLInputObjectType({
  name: 'createBlogInput',
  description:"test",
  fields: () => ({
      title: { type: GraphQLString },
    })
  })

//return values
const createBlogPayload = new GraphQLObjectType({
  name :'createBlogPayload',
  description:`\n
    Example Request:\r
    mutation CreateBlog($input: createBlogInput!) {\r
        createBlog(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "title": "test blog"\r
        }\r
    }`,
  fields:()=>{
    return{
      id:{
        type:GraphQLInt,
        resolve(blog){
          return blog.id
        }
      },
      title:{
        type:GraphQLString,
        resolve(blog){
          return blog.title
        }
      },
    }
  }
});

//mutation
export default {
  type: createBlogPayload,
  args: {
      input: {
          type: AddBlogInput,
      }
  },
  resolve (source, args) {
    return models.blog.create({
      title: args.input.title,
      description: null,
      imageUrl: null,
      authorId:null
    });
  }
}

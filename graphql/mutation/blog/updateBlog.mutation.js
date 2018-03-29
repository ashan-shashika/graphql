import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} from "graphql"
import models from '../../../models/index.js';

//input fields
const updateBlogInput=new GraphQLInputObjectType({
  name: 'updateBlogInput',
  fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      imageUrl: { type: new GraphQLNonNull(GraphQLString) },
      authorId: { type: new GraphQLNonNull(GraphQLInt) },
  })
});

//return values
const updateBlogPayload = new GraphQLObjectType({
  name :'updateBlogPayload',
  description:`\n
    Example Request:\r
    mutation UpdateBlog($input: updateBlogInput!) {\r
        updateBlog(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
          "id": 1,\r
          "title": "first blog",\r
          "description": "first blog description",\r
          "imageUrl": "www.google.com",\r
          "authorId": 2\r
        }\r
    }\r`,
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
      description:{
        type:GraphQLString,
        resolve(blog){
          return blog.description
        }
      },
      imageUrl:{
        type:GraphQLString,
        resolve(blog){
          return blog.imageUrl
        }
      },
      authorId:{
        type:GraphQLString,
        resolve(blog){
          return blog.authorId
        }
      },
    }
  }
});

//mutation
export default {
  type: updateBlogPayload,
  args: {
    input:{
      type:updateBlogInput
    }
  },
  resolve (source, args) {
    return models.blog.findById(args.input.id)
    .then((blog)=>{
      return blog.update({
        title: args.input.title,
        description: args.input.description,
        imageUrl: args.input.imageUrl,
        authorId:args.input.authorId
      })
    });
  }
}

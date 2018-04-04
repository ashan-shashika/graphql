import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"
import AuthorType from "./author.type.js"
import models from "../../models"

const fields = ()=>{
  return{
    id:{
      type:GraphQLInt,
      resolve(blog){
        return blog.id
      }
    },
    status:{
      type:GraphQLInt,
      resolve(blog){
        return blog.status
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
    author: {
        type: AuthorType,
        description: "author of this blog",
        resolve (blog) {
            return models.blog.findById(blog.authorId);
        }
    },
  }
}

const mutation = new GraphQLObjectType({
  name :'blog',
  description:`\n
    Example Request:\r
    mutation AddBlog($input: AddBlogInput!) {\r
        addBlog(input: $input) {\r
          id\r
        }\r
    }\n
    Example Input:\r
    {\r
        "input": {\r
            "title": "test blog",\r
            "description": "this is the blog",\r
            "imageUrl": "www.google.com",\r
            "authorId":2,\r
        }\r
    }`,
  fields:fields

});
const Blog = new GraphQLObjectType({
  name :'blog',
  fields:fields
});



export default Blog

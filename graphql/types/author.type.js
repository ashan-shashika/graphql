import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"
import models from "../../models"
import BlogTypes from "./blog.type.js"

const Author = new GraphQLObjectType({
  name :'author',
  description:'This represent a Author',
  fields:()=>{
    return{
      id:{
        type:GraphQLInt,
        resolve(author){
          return author.id
        }
      },
      status:{
        type:GraphQLInt,
        resolve(author){
          return author.status
        }
      },
      firstName:{
        type:GraphQLString,
        resolve(author){
          return author.firstName
        }
      },
      blog: {
          type: new GraphQLList(BlogTypes),
          description: "author's blogs",
          resolve(author) {
              return models.blog.findAll({ where: { authorId: author.id } });
          }
      }
    }
  }

});

export default Author

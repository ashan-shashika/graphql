import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql"

const User = new GraphQLObjectType({
  name :'user',
  description:'This represent a User',
  fields:()=>{
    return{
      id:{
        type:GraphQLInt,
        resolve(user){
          return user.id
        }
      },
      status:{
        type:GraphQLInt,
        resolve(user){
          return user.status
        }
      },
      firstName:{
        type:GraphQLString,
        resolve(user){
          return user.firstName
        }
      },
      lastName:{
        type:GraphQLString,
        resolve(user){
          return user.lastName
        }
      },
      email:{
        type:GraphQLString,
        resolve(user){
          return user.email
        }
      }
    }
  }

});

export default User

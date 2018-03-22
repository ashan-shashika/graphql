// import {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLList,
//   } from "graphql"
// import models from "../../models/index.js"
// import UserType from "./user.js"
// import AuthorType from "./author.js"
// import BlogType from "./blogs.js"
//
// const Query= new GraphQLObjectType({
//   name:'Query',
//   description:'this is root query',
//   fields:()=>{
//     return{
//       user:{
//         type:new GraphQLList(UserType),
//         args:{
//           id:{type:GraphQLInt},
//         },
//         resolve(root,args){
//           if(args.id === null || args.id === undefined){
//             return null
//           }else{
//             return  models.user.findAll({where:args})
//           }
//         }
//       },
//       allUsers:{
//         type:new GraphQLList(UserType),
//         resolve(root,args){
//             return  models.user.findAll()
//         }
//       },
//       author:{
//         type:new GraphQLList(AuthorType),
//         args:{
//           id:{type:GraphQLInt}
//         },
//         resolve(root,args){
//           if(args.id === null || args.id === undefined){
//             return null
//           }else{
//             return  models.author.findAll({where:args})
//           }
//         }
//       },
//       allAuthors:{
//         type:new GraphQLList(AuthorType),
//         resolve(root,args){
//             return  models.author.findAll({where:args})
//         }
//       },
//       blog:{
//         type:new GraphQLList(BlogType),
//         args:{
//           id:{type:GraphQLInt}
//         },
//         resolve(root,args){
//           if(args.id === null || args.id === undefined){
//             return null
//           }else{
//             return  models.blog.findAll({where:args})
//           }
//         }
//       },
//       allBlogs:{
//         type:new GraphQLList(BlogType),
//         resolve(root,args){
//             return  models.blog.findAll({where:args})
//         }
//       },
//
//     }
//   }
// });
//
// export default Query;
"use strict";
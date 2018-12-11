import express from "express";
import graphqlHTTP from 'express-graphql';
import {buildSchema, GraphQLObjectType, GraphQLString} from 'graphql';

import Schema from "./index.js"

const app = express();
app.get("/",(req,res)=>{
  res.send("this is basic testing")
})

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  pretty:true,
}));

app.listen(3000,()=>{console.log('test => app is running PORT:3000');})

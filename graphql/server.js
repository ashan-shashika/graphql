import express from "express";
import graphqlHTTP from "express-graphql";

import Schema from "./index.js";

const app = express();
app.get("/", (req, res) => {
  res.send("this is basic testing");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
    pretty: true
  })
);
/* eslint-disable no-console */
app.listen(3000, () => {
  console.log("app is running PORT:3000");
});

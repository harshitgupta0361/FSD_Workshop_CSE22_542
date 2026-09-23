const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query{
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
  Name: () => {
    return 'Manisha';
  },
  Email: () => {
    'manisha@gmail.com';
  },
  RollNo: () => {
    20;
  }
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }),
);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load db methods
const mongoDataMethods = require("./data/db");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://lokishengoku:${encodeURIComponent(
        "x9/.svgK9S7#~jS"
      )}@todosgraphql.iqzml.mongodb.net/TodosGraphQL?retryWrites=true&w=majority`
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server started at http:localhost:4000${server.graphqlPath}`);
  });
};

startServer();

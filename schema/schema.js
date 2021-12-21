const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
    createdAt: String
  }

  # ROOT TYPE
  type Query {
    todos: [Task]
  }
`;

module.exports = typeDefs;

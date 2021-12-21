const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID!
    title: String
    description: String
    createdAt: String
    author: User
  }

  type User {
    id: ID!
    name: String
    username: String
    password: String
    todos: [Task]
  }

  # ROOT TYPE
  ## read
  type Query {
    todos(uid: ID!): [Task]
    task(id: ID!): Task
    user(username: String!, password: String!): User
  }

  ## write
  type Mutation {
    createUser(id: ID!, name: String, username: String, password: String): User
    createTask(
      id: ID!
      title: String
      description: String
      createdAt: String
      author: ID!
    ): Task
  }
`;

module.exports = typeDefs;

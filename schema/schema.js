const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID!
    title: String
    description: String
    createdAt: String
    author: User
    isFinished: Boolean
    type: Int
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
    createUser(name: String, username: String, password: String): User
    createTask(
      title: String
      description: String
      createdAt: String
      author: ID!
      type: Int
    ): Task
    updateTaskState(id: ID!, newState: Boolean): Task
    updateTask(
      id: ID!
      title: String
      description: String
      createdAt: String
      type: Int
    ): Task
    deleteTask(id: ID!): Task
    changePassword(id: ID!, currentPw: String, newPw: String): User
  }
`;

module.exports = typeDefs;

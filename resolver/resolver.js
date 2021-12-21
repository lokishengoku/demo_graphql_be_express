const { users, todos } = require("../data/dummy");

const resolvers = {
  // Query
  Query: {
    todos: (parent, args) =>
      todos.filter((element) => element.author === args.uid),
    task: (parent, args) => todos.find((element) => element.id == args.id),
    user: (parent, args) =>
      users.find(
        (element) =>
          element.username === args.username &&
          element.password === args.password
      ),
  },
  Task: {
    author: (parent, args) =>
      users.find((element) => element.id === parent.author),
  },
  User: {
    todos: (parent, args) =>
      todos.filter((element) => element.author === parent.id),
  },

  // Mutation
  Mutation: {
    createUser: (parent, args) => {
      users.push(args);
      return args;
    },
    createTask: (parent, args) => {
      todos.push(args);
      return args;
    },
  },
};

module.exports = resolvers;

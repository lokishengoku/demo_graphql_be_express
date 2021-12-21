const resolvers = {
  // Query
  Query: {
    todos: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllTasks(args.uid),
    task: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getTaskById(args.id),
    user: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.authUser(args.username, args.password),
  },
  Task: {
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getUserById(parent.author),
  },
  User: {
    todos: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllTasks(parent.id),
  },

  // Mutation
  Mutation: {
    createUser: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createUser(args),
    createTask: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createTask(args),
    updateTaskState: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.updateTaskState(args),
  },
};

module.exports = resolvers;

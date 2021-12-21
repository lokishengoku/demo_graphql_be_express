const resolvers = {
  Query: {
    todos: () => [
      {
        id: 1,
        name: "Get up",
        description: "",
        createdAt: "Dec 20th 2021 - 5:46:21 PM", //mmmm dS yyyy - h:MM:ss TT
      },
      {
        id: 2,
        name: "Make a coffee",
        description: "cappuccino",
        createdAt: "Dec 20th 2021 - 5:48:21 PM", //mmmm dS yyyy - h:MM:ss TT
      },
    ],
  },
};

module.exports = resolvers;

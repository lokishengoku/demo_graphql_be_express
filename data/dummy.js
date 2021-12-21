let todos = [
  {
    id: 1,
    name: "Get up 1",
    description: "",
    createdAt: "Dec 20th 2021 - 5:46:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 1,
  },
  {
    id: 2,
    name: "Make a coffee 1",
    description: "cappuccino",
    createdAt: "Dec 20th 2021 - 5:48:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 1,
  },
  {
    id: 3,
    name: "Get up 2",
    description: "",
    createdAt: "Dec 20th 2021 - 5:46:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 2,
  },
  {
    id: 4,
    name: "Make a coffee 2",
    description: "cappuccino",
    createdAt: "Dec 20th 2021 - 5:48:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 2,
  },
  {
    id: 5,
    name: "Get up 3",
    description: "",
    createdAt: "Dec 20th 2021 - 5:46:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 3,
  },
  {
    id: 6,
    name: "Make a coffee 4",
    description: "cappuccino",
    createdAt: "Dec 20th 2021 - 5:48:21 PM", //mmmm dS yyyy - h:MM:ss TT
    author: 4,
  },
];

let users = [
  {
    id: 1,
    name: "user1",
    username: "username1",
    password: "password1",
  },
  {
    id: 2,
    name: "user2",
    username: "username2",
    password: "password2",
  },
  {
    id: 3,
    name: "user3",
    username: "username3",
    password: "password3",
  },
  {
    id: 4,
    name: "user4",
    username: "username4",
    password: "password4",
  },
];

module.exports = { users, todos };

const User = require("../models/User");
const Task = require("../models/Task");

const mongoDataMethods = {
  getAllTasks: async (uid) => await Task.find({ author: uid }),
  getTaskById: async (tid) => await Task.findById(tid),
  authUser: async (username, password) =>
    await User.find({ username: username, password: password }),
  getUserById: async (uid) => await User.findById(uid),
  createUser: async (args) => {
    const newUser = new User(args);
    return await newUser.save();
  },
  createTask: async (args) => {
    const newTask = new Task({ ...args, isFinished: false });
    return await newTask.save();
  },
  updateTaskState: async (args) => {
    return await Task.findByIdAndUpdate(
      args.id,
      { isFinished: args.newState },
      { new: true }
    );
  },
};

module.exports = mongoDataMethods;

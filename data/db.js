const sha256 = require("js-sha256");

const User = require("../models/User");
const Task = require("../models/Task");

const mongoDataMethods = {
  getAllTasks: async (uid) => await Task.find({ author: uid }),
  getTaskById: async (tid) => await Task.findById(tid),
  authUser: async (username, password) =>
    await User.find({ username: username, password: password }),
  getUserById: async (uid) => await User.findById(uid),
  createUser: async (args) => {
    const newUser = new User({ ...args, password: sha256(args.password) });
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
  updateTask: async (args) => {
    return await Task.findByIdAndUpdate(args.id, args, { new: true });
  },
  deleteTask: async (args) => {
    return await Task.findOneAndDelete({ id: args.id }).clone();
  },
  changePassword: async (args) => {
    console.log(args);
    const user = await User.findById(args.id);
    console.log(user);
    if (user.password === sha256(args.currentPw)) {
      return await User.findByIdAndUpdate(
        args.id,
        { password: sha256(args.newPw) },
        { new: true }
      );
    } else {
      return null;
    }
  },
};

module.exports = mongoDataMethods;

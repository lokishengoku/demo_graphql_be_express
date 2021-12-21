const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TaskSchema = new schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  author: {
    type: String,
  },
  isFinished: {
    type: Boolean,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);

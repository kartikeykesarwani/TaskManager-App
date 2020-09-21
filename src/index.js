const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const main = async () => {
  //   const task = await Task.findById("5f68a6b637818d02d0c44074");
  //   await task.populate("owner").execPopulate();
  //   console.log(task.owner);
  const user = await User.findById("5f68a63b45481e7d5cec388b");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();

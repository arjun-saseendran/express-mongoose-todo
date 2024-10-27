


const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

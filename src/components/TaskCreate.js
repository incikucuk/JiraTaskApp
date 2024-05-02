import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  //console.log(title, taskDesc);

  const handleChangeTaskTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? ( //update form card
        <div className="task-edit">
          <h3>Update the Task</h3>
          <form className="task-form">
            <label className="task-label">Update Title:</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChangeTaskTitle}
            />
            <label className="task-label">Update Task Subject:</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleChangeTaskDesc}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmitTask}
            >
              Update Task
            </button>
          </form>
        </div>
      ) : (
        //create form card
        <div className="task-create">
          <h3>Add a new Task</h3>
          <form className="task-form">
            <label className="task-label">Title:</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChangeTaskTitle}
            />
            <label className="task-label">Task Subject:</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleChangeTaskDesc}
            />
            <button className="task-button" onClick={handleSubmitTask}>
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;

import TasksContext from "../context/tasks";
import TaskCreate from "./TaskCreate";
import { useContext, useState } from "react";

function TaskShow({ task }) {
  //console.log(task);
  const [showEdit, setShowEdit] = useState(false);
  const { editTaskById, deleteTaskById } = useContext(TasksContext);

  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div>
      <div className="task-show">
        {showEdit ? (
          <TaskCreate
            task={task}
            taskformUpdate={true}
            onUpdate={handleSubmit}
          />
        ) : (
          <div>
            <h3 className="task-title">Your Duties</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Duty Description</h3>
            <p>{task.taskDesc}</p>
            <div className="task-buttons">
              <button className="task-delete" onClick={handleDeleteClick}>
                Delete
              </button>
              <button className="task-update" onClick={handleUpdateClick}>
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskShow;

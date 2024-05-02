import TaskCreate from "./TaskCreate";
import { useState } from "react";

function TaskShow({ task, onDelete, onUpdate }) {
  //console.log(task);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
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

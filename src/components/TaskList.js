import { useContext } from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../context/tasks";

function TaskList() {
  const { tasks } = useContext(TasksContext); //usecontexten tasks objesi istendi.
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;

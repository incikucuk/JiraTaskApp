import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    debugger;
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    debugger;
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  }, []); //bir kere render olur

  const deleteTaskById = async (id) => {
    //console.log(id);
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return tasks;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>Create Task</h2>
      <TaskCreate onCreate={createTask} />
      <h2>My Tasks</h2>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;

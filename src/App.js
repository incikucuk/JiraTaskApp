import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/tasks";

function App() {
  const { fetchTask } = useContext(TasksContext);
  useEffect(() => {
    fetchTask();
  }, []); //bir kere render olur

  return (
    <div className="App">
      <h2>Create Task</h2>
      <TaskCreate />
      <h2>My Tasks</h2>
      <TaskList />
    </div>
  );
}

export default App;

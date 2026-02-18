import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import TaskForm from "./components/TaskForm/TaskForm";
import styles from "./App.module.css";

const STORAGE_KEY = "kanban_tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, status: "todo" }]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className={styles.app}>
      <h1>Task Manager</h1>
      <TaskForm onCreate={createTask} />
      <Board
        tasks={tasks}
        onStatusChange={updateTaskStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;

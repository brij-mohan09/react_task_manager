
import { useEffect, useState } from "react";
import Board from "./components/Board";
import TaskForm from "./components/TaskForm";
import "./App.css";

const STORAGE_KEY = "kanban_tasks";
const THEME_KEY = "kanban_theme";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem(THEME_KEY) === "dark"
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  const createTask = (title) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, status: "todo" },
    ]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

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
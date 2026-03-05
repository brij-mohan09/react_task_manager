import { useContext, useEffect } from "react";
import Board from "./components/Board";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskProvider";
import { TaskContext } from "./context/TaskContext";
import "./App.css";

const AppContent = () => {

  const { darkMode, toggleTheme } = useContext(TaskContext);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">

      <header className="app-header">
        <h1>Task Manager</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      <TaskForm />
      <Board />

    </div>
  );
};

const App = () => (
  <TaskProvider>
    <AppContent />
  </TaskProvider>
);

export default App;
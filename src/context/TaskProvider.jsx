import { TaskContext } from "./TaskContext";
import useLocalStorage from "../hooks/useLocalStorage";

const STORAGE_KEY = "kanban_tasks";
const THEME_KEY = "kanban_theme";

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, []);
  const [darkMode, setDarkMode] = useLocalStorage(THEME_KEY, false);

  const createTask = (title) => {
    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        status: "todo"
      }
    ]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        darkMode,
        createTask,
        updateTaskStatus,
        deleteTask,
        toggleTheme
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
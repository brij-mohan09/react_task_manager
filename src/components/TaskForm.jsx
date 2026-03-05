import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {

  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    createTask(trimmedTitle);
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>

      <input
        type="text"
        className="task-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task..."
        aria-label="Task title"
        autoComplete="off"
      />

      <button
        type="submit"
        className="task-button"
        disabled={!title.trim()}
      >
        Add
      </button>

    </form>
  );
}

export default TaskForm;
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {

  const { updateTaskStatus, deleteTask } = useContext(TaskContext);

  return (
    <div className={`task-card status-${task.status}`}>

      <div className="task-content">

        <h3 className="task-title">{task.title}</h3>

        <select
          className="task-select"
          value={task.status}
          onChange={(e) =>
            updateTaskStatus(task.id, e.target.value)
          }
        >
          <option value="todo">📝 To Do</option>
          <option value="in-progress">⏳ In Progress</option>
          <option value="done">✅ Done</option>
        </select>

      </div>

      <button
        className="task-delete"
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
      >
        ✖
      </button>

    </div>
  );
}

export default TaskCard;
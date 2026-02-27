
const TaskCard = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className={`task-card status-${task.status}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>

        <select
          className="task-select"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="todo">📝 To Do</option>
          <option value="in-progress">⏳ In Progress</option>
          <option value="done">✅ Done</option>
        </select>
      </div>

      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ✖
      </button>
    </div>
  );
}

export default TaskCard;
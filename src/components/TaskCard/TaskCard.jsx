import styles from "./TaskCard.module.css";

function TaskCard({ task, onStatusChange, onDelete }) {
  return (
    <div className={styles.card}>
      <p>{task.title}</p>
      <select value={task.status} onChange={e => onStatusChange(task.id, e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;

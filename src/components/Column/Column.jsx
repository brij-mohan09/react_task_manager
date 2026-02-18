import TaskCard from "../TaskCard/TaskCard";
import styles from "./Column.module.css";

function Column({ title, tasks, onStatusChange, onDelete }) {
  return (
    <div className={styles.column}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Column;

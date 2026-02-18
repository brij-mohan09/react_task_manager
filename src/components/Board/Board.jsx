import Column from "../Column/Column";
import styles from "./Board.module.css";

const columns = [
  { key: "todo", title: "To Do" },
  { key: "in-progress", title: "In Progress" },
  { key: "done", title: "Done" },
];

function Board({ tasks, onStatusChange, onDelete }) {
  return (
    <div className={styles.board}>
      {columns.map((col) => (
        <Column
          key={col.key}
          title={col.title}
          status={col.key}
          tasks={tasks.filter((t) => t.status === col.key)}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Board;

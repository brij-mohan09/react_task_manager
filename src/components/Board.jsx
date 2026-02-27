
import Column from "./Column";

const COLUMNS = [
  { key: "todo", title: "To Do" },
  { key: "in-progress", title: "In Progress" },
  { key: "done", title: "Done" },
];

const Board = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <section className="board">
      {COLUMNS.map((col) => (
        <Column
          key={col.key}
          title={col.title}
          status={col.key}
          tasks={tasks.filter((task) => task.status === col.key)}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default Board;
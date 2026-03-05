import { useContext } from "react";
import Column from "./Column";
import { TaskContext } from "../context/TaskContext";

const COLUMNS = [
  { key: "todo", title: "To Do" },
  { key: "in-progress", title: "In Progress" },
  { key: "done", title: "Done" },
];

const Board = () => {

  const { tasks } = useContext(TaskContext);

  return (
    <section className="board">

      {COLUMNS.map((col) => (
        <Column
          key={col.key}
          title={col.title}
          status={col.key}
          tasks={tasks.filter(task => task.status === col.key)}
        />
      ))}

    </section>
  );
}

export default Board;
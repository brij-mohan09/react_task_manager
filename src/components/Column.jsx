
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onStatusChange, onDelete }) => {
  return (
    <section className="column">
      <header className="column-header">
        <h2 className="column-title">{title}</h2>
        <span className="column-count">{tasks.length}</span>
      </header>

      <div className="column-body">
        {tasks.length === 0 ? (
          <p className="column-empty">No tasks here</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Column;

import { useState } from "react";
import styles from "./TaskForm.module.css";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate(title);
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task..." />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;

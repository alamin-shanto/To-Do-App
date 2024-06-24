import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function ToDoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}

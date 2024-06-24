import styles from "./todoitem.module.css";
export default function TodoItems({ item }) {
  function handleDelete() {
    console.log("delete button clicked ");
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button onClick={handleClick} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

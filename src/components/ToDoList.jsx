import TodoItems from "./TodoItems";
export default function ToDoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}

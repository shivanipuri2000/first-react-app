import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.duedate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;

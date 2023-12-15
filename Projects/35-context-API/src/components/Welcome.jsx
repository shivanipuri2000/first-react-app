import { useContext } from "react";
import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../todo-items-store";

const Welcome = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
   todoItems.length===0 && <p className={styles.Welcome}>Enjoy your day</p>
  );
};

export default Welcome;

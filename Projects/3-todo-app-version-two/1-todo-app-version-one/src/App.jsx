import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/23",
    },
    {
      name: "Go to College",
      duedate: "4/10/23",
    },
    {
      name: "Like this video",
      duedate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
 

  const [todoItems , setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {

    setTodoItems((currValue)=>[
    
       ...currValue,
       { name: itemName, dueDate: itemDueDate },
     ]);
        };
  const handleDeleteItem=(todoItemName)=>{

    const newTodoItems=todoItems.filter(item=>item.name !== todoItemName)
    setTodoItems(newTodoItems);
    //console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;

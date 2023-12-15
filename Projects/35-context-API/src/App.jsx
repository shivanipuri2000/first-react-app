import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";
import Welcome from "./components/Welcome";
import TodoItemsContextProvider from "./todo-items-store";



function App() {
 return (
    
    <TodoItemsContextProvider>
      
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome></Welcome>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
    
  );
}

export default App;

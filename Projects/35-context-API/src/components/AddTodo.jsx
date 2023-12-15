import { useContext, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TodoItemsContext } from "../todo-items-store";

function AddTodo() {
  const { addNewItem } =useContext(TodoItemsContext)
  const[todoName,setTodoName]=useState("");
  const[dueDate,setdueDate]=useState("");
  
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
   const handleDateChange = (event) => {
     setTodoName(event.target.value);
   };

 
  const handleAddButtonClicked = () => {
      
      addNewItem(todoName, dueDate);
      setdueDate("");
      setTodoName("");
   
  };

  return (
    <div className="container">
      <div className="row Sp-row" >
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            
            
          />
        </div>
        <div className="col-4">
          <input type="Date"
          value={dueDate}
          onChange={handleDateChange}
            
            />
        </div>
        <div className="col-2">
          <button
          type="button"
           // onSubmit={handleAddButtonClicked}
            className="btn btn-success Sp-button"
            // onClick={handleAddButtonClicked}
          >
            <CiCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

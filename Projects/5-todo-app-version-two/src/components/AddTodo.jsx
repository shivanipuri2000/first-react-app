import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function AddTodo({ onNewItem }) {
  const[todoName,setTodoName]=useState("");
  const[dueDate,setdueDate]=useState("");
  
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
   const handleDateChange = (event) => {
     setTodoName(event.target.value);
   };

 
  const handleAddButtonClicked = (event) => {
       event.preventDefault();
      onNewItem(todoName, dueDate);
      setdueDate("");
      setTodoName("");
   
  };

  return (
    <div className="container">
      <form className="row Sp-row" onSubmit={handleAddButtonClicked}>
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
          type="submit"
            // onSubmit={handleAddButtonClicked}
            className="btn btn-success Sp-button"
            // onClick={handleAddButtonClicked}
          >
            <CiCirclePlus />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

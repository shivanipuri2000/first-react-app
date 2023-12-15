import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";

function AddTodo({ onNewItem }) {
  
  const todoNameElement=useRef();
  const dueDateElement=useRef();

 
  const handleAddButtonClicked = (event) => {
      event.preventDefault();
      const todoName= todoNameElement.current.value;
      const dueDate=dueDateElement.current.value;
      todoNameElement.current.value="";
      dueDateElement.current.value="";
    
    onNewItem(todoName, dueDate);
   
  };

  return (
    <div className="container">
      <form className="row Sp-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            
            
          />
        </div>
        <div className="col-4">
          <input type="Date"
          ref={dueDateElement}
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

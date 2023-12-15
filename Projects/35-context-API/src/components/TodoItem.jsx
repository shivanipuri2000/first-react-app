import { useContext } from "react";

import { TodoItemsContext } from "../todo-items-store";

function TodoItem({ todoName, todoDate }) {
 const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row Sp-row">
        <div className="col-6"> {todoName }</div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger Sp-button"
            onClick={() => deleteItem(todoName)}
          >
          
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

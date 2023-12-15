import { useState } from "react";
import Item from "./item";

const FoodItems = ({items}) => {

     let [activeItems, SetActiveItems] = useState([]);

    let onBuyButton =(item, event)=>{
      let newItems=[...activeItems, item];
      SetActiveItems(newItems);


     }
     
     return (
     <ul  className="list-group">

   {items.map((item )=> (
    <Item key={item} foodItem={item}
    bought={activeItems.includes(item)}
     handleBuyButton={(event)=>onBuyButton(item, event)}
     ></Item>

   ))}

   
  
</ul>
     );

};
export default FoodItems;


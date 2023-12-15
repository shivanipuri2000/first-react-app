import styles from "./Item.module.css";
//css modules here we separate css for every component

const Item = ({ foodItem,bought, handleBuyButton }) => {
  //let {foodItem}=props; we can write also prop this type this is called destructing of array
  

 // const handleBuyButtonClicked = (event) => {
  //  console.log(event);
   // console.log(`${foodItem} being bought`);
  //};

  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought &&'active'}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;

import ItemCountComponent from "../components/itemcount"

const ItemListContainer = ({greeting}) => {
    return (
      <>
      <h1>{greeting}</h1>
      < ItemCountComponent />
      </>
    );
  }
  
  export default ItemListContainer;
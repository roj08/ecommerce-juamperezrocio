import Item from "./Item";
import './styles/ItemList.css';


const ItemList = ({products, id}) => { 

  return (
    <>
      <div className="product-list-container">
        {/* {id ? products.filter (product => product.category === id).map((product) => <Item key={product.id} product={product}/>) : products.map((product)=><Item key={product.id} product={product}/>)} */}


        {products.map( product => <Item key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/> ) }
      </div>   
                
     
    </>

  );
};

export default ItemList;
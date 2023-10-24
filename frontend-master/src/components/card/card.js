import React, { useEffect, useState } from 'react';
import Products from '../products/products'; // Assuming you have an array of products in this file
import axios from 'axios';
import ECommerceCard from './EcomCard';

import { Grid ,Container} from '@mui/material';

//useparams
import { useParams } from 'react-router-dom';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const { id,name } = useParams();
  console.log(id)
  console.log(name)
  useEffect(
    () => {
      async function fetchItems() {
        if(id){
          await axios.get("http://localhost:8081/api/products/"+id)
          .then((response) => {
            console.log(response.data)
            setProducts(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        }else if(name){
          await axios.get("http://localhost:8081/api/search/"+name)
          .then((response) => {
            console.log(response.data)
            setProducts(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        }
        else{
          await axios.get("http://localhost:8081/api/product")
          .then((response) => {
            console.log(response.data)
            setProducts(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        }
      }

      fetchItems()
    },
    [])




  const updateTotalPrice = (productPrice, change) => {
    setTotalPrice(totalPrice + productPrice * change);
  };

  const resetTotalPrice = () => {
    setTotalPrice(0);
    setProductQuantities({});
  };

  const updateProductQuantity = (productId, quantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };


  return (
    <div className="App">
      {/* <button onClick={resetTotalPrice}>Reset Total Price</button> */}
      <Container sx={{
        paddingTop: '80px',
      }}>
        <Grid container 
       
        >
          {products.map((product, index) => (
            <ECommerceCard
              key={index}
              product={product}
              quantity={productQuantities[product.id] || 0}
              setQuantity={(quantity) => {
                updateProductQuantity(product.id, quantity);
              }}
              updateTotalPrice={updateTotalPrice}
            />
          ))}
        </Grid>
      </Container>

      {/* <p>Total Price for All Products: ${totalPrice}</p> */}
    </div>
  );
}

export default App;

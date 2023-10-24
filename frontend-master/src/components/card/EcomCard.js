import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../src/slices/userSlice";
import { Grid,Box, Card, CardMedia, CardContent, CardActions, Button,TextField  , Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ECommerceCard = ({ product, quantity, setQuantity, updateTotalPrice }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const removeItem = async () => {
    await axios.delete("http://localhost:8081/api/product/" + product.id)
      .then((response) => {
        alert("Item Deleted")
        window.location.reload()
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    //   if (quantity > 0) {
    //     setQuantity(quantity - 1);
    //     updateTotalPrice(product.price, -1); // Pass -1 to subtract from the total price
    //   }
  };

  // Calculate the total price for this product
  const total = quantity * product.price;

  return (
    <div className="card">



      <Grid item md={7}

      >
        {/* <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={product.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card> */}
        <Card sx={{
          width: 350,
          m: 1,
          height: 550,
          borderRadius : 10,
          opacity: 0.75,
        
        
        }}>
          <CardMedia
            sx={{ height: 200,marginTop:3,opacity:1 }}
            image={product.image}
            title="green iguana"
          />
          <CardContent  >
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography sx={{fontSize:24}} variant="body2" color="text.secondary">
              {product.description}
              <br></br>
              Price : LKR {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            {user ? <>

              <Button size="small" variant="contained" sx={{marginLeft: 2}}

                onClick={() => {
                  window.location.href = "/edititempage/" + product.id
                }}
              >Edit</Button>
              <Button size="small" variant="contained" color="error"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this item?")) {
                  removeItem()
                } else {
                  console.log("not deleted")

               }
              }}
             
                
              >Delete</Button>
            </> : <Button size="small"
            onClick={handleOpen}
            variant="contained">Buy</Button>
            }

          </CardActions>
        </Card>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order Now
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Card sx={{
          width: 250,
          m: 3,
          height: 300,
          opacity: 0.9
        }}>
          <CardMedia
            sx={{ height: 100 }}
            image={product.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
              <br></br>
              Price : LKR {product.price}
            </Typography>
            <TextField
            sx={{ mt: 2 }}
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          
        />
          </CardContent>
          <CardActions>
          
      
         
          </CardActions>
        </Card>
          </Typography>
          <Button size="small" variant="contained" color="success"
              onClick={() => {
                if (window.confirm("Are you sure you want to order this item?")) {
                  // removeItem()
                  handleClose()
                } else {
                  handleClose()
                  console.log("not ordered")

               }
              }}
             
                
              >Order</Button>
        </Box>

      </Modal>
      </Grid>
  
    </div>
  );
}


export default ECommerceCard;
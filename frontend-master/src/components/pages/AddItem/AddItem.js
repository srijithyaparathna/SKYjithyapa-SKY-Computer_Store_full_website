import './AddItem.css'

import Header from "../HomePageUser/Header/Header";
import Footer from "../../footer/Footer";
import Body from "../../body/Body";
import Sidebar from "../../sidebar/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function HomepageAdmin() {

  //get id from params
  const { id } = useParams();
  console.log(id)

  // image
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);


  useEffect(() => {
    async function fetchItems() {
      await axios.get("http://localhost:8081/api/product/" + id)
        .then((response) => {
          console.log(response.data)
          setName(response.data.name)
          setDescription(response.data.description)
          setPrice(response.data.price)
          setQuantity(response.data.quantity)
          setCategory(response.data.cat)
          setImageURL(response.data.image)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    fetchItems()

  }, [])

  useEffect(() => {
    uploadImage()
  }
    , [image])

  async function uploadImage() {
    const formData = new FormData();
    formData.append("image", image);
    await axios.post("http://localhost:8081/api/upload", formData)
      .then((response) => {
        console.log(response.data)
        setImageURL(response.data)
        return response.data;
      })
      .catch((error) => {

        console.log(error)
      })
  }


  // form
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState(null);


  async function addItem() {
    if (id) {
      await axios.put("http://localhost:8081/api/product", {
        id: parseInt(id),
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        cat: category,
        image: imageURL
      })
        .then((response) => {
          console.log(response.data)
          window.location.href = "/products"
        })
        .catch((error) => {
          console.log(error)
        })
      // return;
    } else {
      const up = await uploadImage();
      console.log(up)
      await axios.post("http://localhost:8081/api/product", {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        cat: category,
        image: imageURL
      })
        .then((response) => {

          console.log(response.data)
          window.location.href = "/products"

        })
        .catch((error) => {
          console.log(error)
        })
    }
  }


  return (
    <div className='all' >
      {/* <Header /> */}
      <div className="content-container">

        <div className="bodyclass1">

          <div className='form'>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"
                value={name}
                onChange={
                  (e) => {
                    setName(e.target.value)
                  }
                }
              />

              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description"
                value={description}
                onChange={
                  (e) => {
                    setDescription(e.target.value)
                  }
                }
              />

              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price"
                value={price}
                onChange={
                  (e) => {
                    setPrice(e.target.value)
                  }
                }
              />

              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity"
                value={quantity}
                onChange={
                  (e) => {
                    setQuantity(e.target.value)
                  }
                }
              />

              {/* <label htmlFor="image">Image URL:</label>
    <input type="text" id="image" name="image" /> */}

              {/* form to upload image */}
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image"
                // value={image}
                onChange={
                  (e) => {
                    setImage(e.target.files[0])

                  }
                }
              />



              <label htmlFor="cat">Category:</label>
              <input type="text" id="cat" name="cat"
                value={category}
                onChange={
                  (e) => {
                    setCategory(e.target.value)
                  }
                }
              />

              <button type="submit"
                onClick={
                  async (e) => {
                    e.preventDefault()
                    await addItem()
                  }
                }
              >Submit</button>
            </form>
          </div>


        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

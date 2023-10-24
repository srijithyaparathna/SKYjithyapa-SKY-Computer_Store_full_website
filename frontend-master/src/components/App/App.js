import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Header from "../Header/Header";
import HomePageAdmin from '../pages/HomePageAdmin/homepageAdmin'; // Correct the import path
import HomePageUser from '../pages/HomePageUser/HomePageUser'
import LoginINPage from '../pages/LoginIN/LoginIN';
import AdditemPage from '../pages/AddItem/AddItem';
import Placeorderpage from '../pages/PlaceOrder/placeorderpage';
import { Container } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
// import Header from "../../components/pages/HomePageUser/Header/Header";
import Footer from "../../components/footer/Footer";
function App() {
  return (
    <div>
      <div>
        <Header />

        <div className="content-container">
          <Sidebar />
          <div className="bodyclass">
            <Router> {/* Use Router here */}
              <Routes>
                <Route path='/' element={<HomePageUser />}></Route>
                {/* <Route path="/homepageadmin" element={<HomePageAdmin />} /> Define the Route within Routes */}
                <Route path="/products" element={<HomePageUser />} />
                <Route path="/products/:id" element={<HomePageUser />} />
                <Route path="/search/:name" element={<HomePageUser />} />

                <Route path="/login" element={<LoginINPage />}></Route>
                <Route path="/additempage" element={<AdditemPage />}></Route>
                <Route path="/edititempage/:id" element={<AdditemPage />}></Route>
                <Route path="/placeorderpage/:id" element={<Placeorderpage />}></Route>
              </Routes>
            </Router>

          </div>

        </div>
          <Footer />
      </div>

    </div>

  );
}

export default App;


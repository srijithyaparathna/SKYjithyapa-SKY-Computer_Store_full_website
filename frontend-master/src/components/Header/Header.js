import React from 'react';
import './Header.css';
import logo from './Your Ultimate Tech Haven 1.png';
import searchlogo from './material-symbols_screen-search-desktop-outline (1).png';
import Card from '../card/card';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../slices/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__center">
        <ul className="header__list">
          <li className="homebtn">
            <a href="/products">Home</a>
          </li>
          <li className="servicebtn">
            <a href="#">Service</a>
          </li>
          <li className="aboutbtn">
            <a href="#">About</a>
          </li>
          <li className="contact">
            <a href="#">Contact</a>
          </li>
          {user ? (
            <>
         
              <li className="addItem">
                <a href="/additempage">Add item</a>
              </li>
              <li className="addItem">
                <a href="#" onClick={() => {
                  dispatch(logout());
                  window.location.href = '/products';
                }}>Logout</a>
              </li>
          
            </>
          ) : (
            <li className="addItem">
              <a href="/login">Login</a>
            </li>
          )}


        </ul>
      </div>
      <div className="header__right">
       
        <div className="searchbar">
          <img className="searchlogo" src={searchlogo} alt="Search" />
          <input
            className="inputbox"
            type="text"
            id="input-box"
            placeholder="Search products..."
            //onkeyup="searchFunction()"
            //on enter key press
            onKeyDown={
              (e) => {
                if (e.key === 'Enter') 
                {
                  window.location.href = "/search/" + document.getElementById('input-box').value
                }
              }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

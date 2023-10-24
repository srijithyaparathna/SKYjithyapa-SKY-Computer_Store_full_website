import React, { Component } from "react";
import "./Header.css";
import logo from "./Your Ultimate Tech Haven 1.png";
import searchlogo from "./material-symbols_screen-search-desktop-outline (1).png";

class Header extends Component {










  
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__center">
          <ul className="header__list">
            <li className="homebtn">
              <a href="#">Home</a>
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
            
          </ul>
        </div>
        <div className="header__right">
          <div className="total"></div>
          <div className="searchbar">
            <img className="searchlogo" src={searchlogo} alt="Search" />
            <input
              className="inputbox"
              type="text"
              id="input-box"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

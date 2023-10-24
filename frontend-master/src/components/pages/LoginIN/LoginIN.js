import React, { useState } from "react";
import "./LoginIN.css";
import imageloginlogo from './Your Ultimate Tech Haven..png';
import { useSelector,useDispatch } from "react-redux";
import {selectUser,login} from "../../../slices/userSlice";
function LoginIN() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);

    if (inputUsername === '') {
      setUsernameError('Username is required.');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleAdminLogin = () => {
    // Add your login logic here
    if (username === 'admin' && password === 'abc123') {
      alert('Admin login successful!');
      dispatch(login({
        username: username,
        password: password,
        loggedIn: true,
      }));
      window.location.href = '/products'
    } else {
      alert('Admin login failed. Please check your credentials.');
    }
  };

  const handleUserButtonClick = () => {
    // Add your logic for the button click here
    console.log("Button clicked!");
  };

  return (
    <div className="background">
     
    <div className="box1">
      <div className="user">
        <p>USER</p>
        <img src={imageloginlogo} alt="User" />
        <div className="butt">

        <button  onClick={()=>{window.location.href='/products'}}>USER LOGIN</button>
        </div>
       
      </div>

      


      <div className="admin">
       
       <p>ADMIN</p>
    
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <p className="error">{usernameError}</p>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="error">{passwordError}</p>

        <button onClick={handleAdminLogin}>Admin login</button>
      </div>
    </div>
    </div>
    
  );
}

export default LoginIN;

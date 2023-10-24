import React, { Component } from 'react';
import './Body.css';
import invoice from './invoice.png'
import Card from '../card/card'
class Body extends Component {
 
  render() {
    return (
      <div className='box' >
        {/* Your component rendering here */}
        

        <Card/>
       
        

      </div>
    );
  }
}

export default Body;

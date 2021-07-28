
import React from "react";
import './Header.css'
import { useState } from 'react';
import Data from '../MOCK_DATA.json'
import Sort from "./Sort";


 
 
const Header = () => {    

    return (
      <div className="header">
        <p className="image_header">IMAGE</p>
        <p>TITLE</p>
        <p>YEAR</p>
        <p>RATING</p>
        <div >
          <p>DURATION</p>
          <Sort />

         
        </div>
       
             
      </div>
      
    );
  };
export default Header;


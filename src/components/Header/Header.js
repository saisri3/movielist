
import React from "react";
import './Header.css'
import { useState } from 'react';
import arrow from '/home/saisri/temp-app/src/images/arrow.png'
import Data from '../MOCK_DATA.json'
import Search from "../Header/Search";

 
 
const Header = () => {    

    return (
      <div className="header">
        <p className="image_header">IMAGE</p>
        <p>TITLE</p>
        <p>YEAR</p>
        <p>RATING</p>
        <div >
          <p>DURATION</p>
          <img
            style={{ height: 25, cursor: "pointer" }}
            className="arrow" src={arrow} alt="duration" />
        </div>
        <Search
                
        />
             
      </div>
      
    );
  };
export default Header;


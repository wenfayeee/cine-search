import React from 'react'
//import {useState} from "react";
import SearchBar from './searchBar';
import './Styles/header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    //const [results, setResults] = useState([]); 
  return (
    <div className="header">
     <div className="logo">
      <h3>CineSearch</h3>
     </div>
     <div className="search">
     <SearchBar></SearchBar>
     </div>
     <div className="login-button">
      <button>Login</button>
     </div>
   </div>
   
  )
}

export default Header
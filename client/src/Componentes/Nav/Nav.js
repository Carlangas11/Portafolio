import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import './Nav.css'

const Nav = ({onSearch}) => {
  return (
    <nav className="navbar navbar-light bg-light" id="colorNav">
      <div class="container-fluid">
        <Link to='/'><a class="navbar-brand">Weather App</a></Link>
        <Link to='/About'> About </Link>
        <Searchbar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "../Topbar/Topbar.css";
import Logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import Searchbar from "../SearchBar/Searchbar";


const Topbar = ({ open, hamburgerClose, hamburgerOpen }) => {

  return (
    <div className={open ? "topbar-active" : "topbar"}>
      <div className="logo-wrapper">
        <div className="hamburger">{open ? hamburgerClose : hamburgerOpen}</div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="search-w">
        <Searchbar />
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";
import "../SearchBar/Searchbar.css";
import SearchIcon from "../../Assets/search.png"

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-wrapper">
        <input type="text" name="searchbar" placeholder="Search" />
        <img src={SearchIcon} alt="" />
      </div>
    </div>
  );
};

export default Searchbar;

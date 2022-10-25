import React, { useState } from "react";
import "../SearchBar/Searchbar.css";
import SearchIcon from "../../Assets/search.png";
import SearchDummyData from "../SearchDummyData";
import { FaTimesCircle } from "react-icons/fa";

const Searchbar = () => {
  const data = SearchDummyData;
  const [search, setSearch] = useState("");
  const [opensearchbar, setOpenSearchBar] = useState(false);

  const inputChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    setOpenSearchBar(true);
  };

  const toggleSearchBar = () => setOpenSearchBar(false);

  const filteredData = data.filter((el) => {
    if (search === "") {
      return;
    } else {
      return el.name.toLowerCase().includes(search);
    }
  });

  return (
    <div className="searchbar">
      <div className="searchbar-wrapper">
        <div className="search-icon">
          <input
            type="text"
            name="searchbar"
            placeholder="Search"
            onChange={inputChange}
          />
          <img src={SearchIcon} alt="" className="active-search" />
          {opensearchbar ? (
            <FaTimesCircle
              className="cancel-search"
              onClick={toggleSearchBar}
            />
          ) : null}
        </div>

        {opensearchbar ? (
          <div className="search-content">
            {filteredData.map((content) => (
              <div key={content.id}>{content.name}</div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Searchbar;

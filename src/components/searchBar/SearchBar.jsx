import React, { useState } from "react";
import { search } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ setOpen }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      setOpen(false);
      setQuery("");
      navigate(`/search/${query}`);
    }
  };

  const searchQueryOnClick = () => {
    console.log(query);
    if (query.length > 0) {
      setOpen(false);
      setQuery("");
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="search-bar-container">
      <div className="input-wrapper items-center">
        <img
          src={search}
          alt={search}
          id="search-icon"
          className="w-6 h-6"
          onClick={searchQueryOnClick}
        />
        &nbsp;&nbsp;
        <input
          className="text-black w-[160px]"
          type="search"
          id="GameSearchBar"
          value={query}
          placeholder="Type to search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
      </div>
    </div>
  );
};

export default SearchBar;

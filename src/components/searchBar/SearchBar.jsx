import React, { useState } from "react";
import { search } from "../../assets/index";
import api from "../../api/api";
import SearchResultsList from "./SearchResultsList";
import "./SearchBar.css";

const SearchBar = ({ setOpen }) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const getGamesList = (results) => {
    api.getSearchedGames(results).then((resp) => {
      const results = resp.data.results.filter((item) => {
        return item && item.name && item.name.toLowerCase().includes(value);
      });

      setResults(results);
    });
  };

  const handleChange = (value) => {
    if (value) {
      setValue(value);
      getGamesList(value);
    } else {
      setValue("");
      setResults("");
    }
  };

  const handleClick = () => {
    setValue("");
    setResults("");
    setOpen(false);
  };
  return (
    <div className="search-bar-container">
      <div className="input-wrapper items-center">
        <img src={search} alt={search} id="search-icon" className="w-6 h-6" />
        &nbsp;&nbsp;
        <input
          className="text-black w-[160px]"
          type="search"
          name="searchGame"
          id="GameSearchBar"
          placeholder="Type to search"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="w-20">
        {results && results.length > 0 && (
          <SearchResultsList results={results} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;

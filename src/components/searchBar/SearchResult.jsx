import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ result ,handleClick}) => {


  return (<>
      <Link to={`/game/${result.id}`}  state={result} key={result.name} >
    <div className="search-result items-start relative px-8 py-1 text-black" onClick={handleClick}>
        {result.name}
    </div>
        </Link>
  </>
  );
};

export default SearchResult;

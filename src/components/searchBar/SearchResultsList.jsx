import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, handleClick }) => {
  return (
    <div className="results-list mt-[10px] absolute z-10 divide-y divide-gray-100 rounded-lg shadow ">
      {results.map((result, id) => {
        return (
          <SearchResult
            result={result}
            handleClick={handleClick}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;

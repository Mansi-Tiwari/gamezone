import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import Loader from "../loader/Loader";


const SearchResultsList = () => {
  const [results, setResults] = useState([]);
  let { query } = useParams();

  const getGamesList = (result) => {
    api.getSearchedGames(result).then((resp) => {
      const results = resp.data.results.filter((item) => {
        return (
          item.name.toLowerCase() &&
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      });
      setResults(results);
    });
  };
  if (!results) {
    return <Loader />;
  }
  useEffect(() => {
    getGamesList(query.toLowerCase());
  }, [query]);
  return (
    <div className="mt-[130px] mb-40 ">
      {results?.length > 0 ? (
        <>

          <p className="pageTitle text-teal-100 pl-5 md:pl-40">
            {`Search ${
              results?.length > 1 ? "results" : "result"
            } of '${query}'`}
          </p>
          <div className="results-list shadow-lg items-center justify-center">
            {results.map((result, id) => {
              return (
                <div
                  key={id}
                  className="search-result items-start hover:translate-y-3 duration-300 ease-in-out pb-7 text-white"
                >
                  <img
                    src={result.background_image}
                    alt={result.id}
                    className="w-[350px] h-[200px]"
                  />
                  <p className="mt-4 pl-3 mx-auto">{result.name}</p>
                  <Link
                    to={`/game/${result.id}`}
                    state={result}
                    key={result.name}
                  >
                    <button className="mt-4 ml-3 p-1 mx-auto bg-teal-600">
                      Know more..
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <span className="resultNotFound">Sorry, Results not found!</span>
      )}
    </div>
  );
};

export default SearchResultsList;

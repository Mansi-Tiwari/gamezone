import { useState } from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import { console } from "../../assets/index";
import Loader from "../loader/Loader";

const FreeGames = ({ gamesList, selectedOptions, onOptionsChange }) => {
  const [optionPlatform, setPlatform] = useState("");
  const [optionTag, setTag] = useState("");
  const [optionSorted, setSorted] = useState("");

  const handlePlatformChange = (e) => {
    const selectedPlatform = e.target.value;
    setPlatform(selectedPlatform);
    onOptionsChange({
      ...selectedOptions,
      platform: selectedPlatform,
    });
  };

  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    setTag(selectedTag);
    onOptionsChange({
      ...selectedOptions,
      tag: selectedTag,
    });
  };

  const handleSortedChange = (e) => {
    const selectedSorted = e.target.value;
    setSorted(selectedSorted);
    onOptionsChange({
      ...selectedOptions,
      sorted: selectedSorted,
    });
  };

  if (!gamesList) {
    return <Loader />;
  }

  return (
    <>
      <div className="mb-6 ml-5 text-white">
        <h1 className="mt-28 font-bold text-4xl">
          Free<span className="text-pink-600">Games</span>
        </h1>
        <div className="p-[2px] mt-1 rounded-full bg-pink-600 w-[70px]"></div>
      </div>
      <div className="flex px-10 flex-wrap justify-center bg-violet-dark-active text-white items-center">
        <div className="flex flex-row w-[300px] gap-3 items-center mb-2">
          <label htmlFor="platform" className="text-white font-semibold">
            Platform:
          </label>
          <select
            id="platform"
            value={optionPlatform}
            onChange={handlePlatformChange}
            className="border-b-4 border-gray-300 text-gray-900 text-md rounded-lg block p-2.5 dark:bg-violet-dark-active dark:placeholder-gray-400 dark:text-white"
          >
            {data.platforms.map((option, id) => (
              <option value={option} key={id}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2 flex flex-row w-[300px] gap-3 items-center">
          <label htmlFor="tag" className=" text-white font-semibold">
            Genre/Tag:
          </label>
          <select
            id="tag"
            value={optionTag}
            onChange={handleTagChange}
            className="border-b-4 border-gray-300 text-gray-900 text-md rounded-lg block p-2.5 dark:bg-violet-dark-active dark:placeholder-gray-400 dark:text-white"
          >
            {data.category.map((option, id) => (
              <option value={option} key={id}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2 flex flex-row w-[300px] gap-3 items-center">
          <label htmlFor="sorted_by" className=" text-white font-semibold">
            Sorted By:
          </label>
          <select
            id="sorted_by"
            value={optionSorted}
            onChange={handleSortedChange}
            className="border-b-4 border-gray-300 text-gray-900 text-md rounded-lg block p-2.5 dark:bg-violet-dark-active dark:placeholder-gray-400 dark:text-white "
          >
            {data.sorted_by.map((option, id) => (
              <option value={option} key={id}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* {card} */}
      <section className="px-40 flex justify-center items-center py-3 md:py-10 md:p-20 md:px-0 antialiased">
        <section className="grid grid-cols lg:grid-cols-3 2xl:grid-cols-4 gap-10 justify-center items-center md:grid-cols-2">
          {gamesList &&
            gamesList?.map((item, id) => (
              <article
                key={id}
                className="card hover:-translate-y-3 ease-in-out duration-500 transform rounded-lg max-w-sm shadow-xl bg-cover bg-center max-h-90 cursor-pointer"
              >
                <div className="h-[400px] px-1 flex flex-wrap flex-col bg-opacity-75">
                  <img
                    src={item?.thumbnail}
                    alt={item?.thumbnail}
                    className="w-[600px] h-[200px] py-5 px-3 duration-600 "
                  />
                  <h1 className="text-white mb-3 flex flex-row justify-between opacity-80 p-2 pl-5 text-2xl">
                    {item?.title}
                    <span className="px-3 text-[16px] w-15 h-9 mx-auto mr-5 rounded-md  bg-gray-600 text-white font-bold">
                      Free
                    </span>
                  </h1>

                  <div className="p-4 text-white text-md ">
                    <div>
                      <Link to={`/detail/${item.id}`}>
                        <button className="flex flex-row p-1 items-center mt-4 px-3 bg-teal-400 text-white rounded-md hover:bg-teal-600">
                          <img src={console} alt="" className="h-5 w-5 mr-2" />
                          Know more..
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </>
  );
};

export default FreeGames;

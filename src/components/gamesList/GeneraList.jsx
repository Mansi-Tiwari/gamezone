import { useState } from "react";
import data from "../data/data";

const GeneraList = ({ genreId, selectedGenresName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" top-0 left-0 w-30 border-r border-b border-slate-900 bg-violet-darker mt-0">
      <div className=" min-h-[100%] overflow-hidden  xl:w-56 md:w-56 w-[50px]">
        <div className="flex h-[90%] flex-col justify-between pt-4 pb-6">
          <ul className="mt-[80px] space-y-2 tracking-wide">
            <div className="text-white pl-14 font-bold text-2xl" key="genre">
              Genre
            </div>
            {data.categories.map((item) => (
              <li className="w-full " key={item.id}>
                <p
                  onClick={() => {
                    setActiveIndex(item.id);
                    genreId(item.no);
                    selectedGenresName(item.name);
                  }}
                  aria-label="dashboard"
                  className={`cursor-pointer transition-all group-hover:scale-105 ease-out
                        duration-300 hover:text-black hover:bg-gray-300 hover:[&>span]:pl-3 hover:fill-white ${
                          activeIndex == item.id
                            ? "bg-gray-300 dark:bg-gray-600"
                            : null
                        } relative flex items-center space-x-4 bg-gradient-to-r  px-4 py-3 text-white`}
                >
                  <img
                    src={item.id}
                    className={`w-[25px] h-[25px] 
                        fill-blue-400  hover:fill-white transition-all
                        ease-out duration-300 ${
                          activeIndex == item.id ? "fill-white" : null
                        }`}
                    alt={item.id}
                  />
                  <span
                    className={`${
                      activeIndex == item.id ? "font-bolder" : null
                    } w-full h-full transition-all group-hover:scale-105 ease-out -mr-1 font-medium`}
                  >
                    {item.name}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneraList;

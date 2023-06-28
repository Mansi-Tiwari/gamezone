import { Link } from "react-router-dom";
import { eye, message } from "../../assets";

const GamesLatest = ({ gameList }) => {
  return (
    <>
      <section className=" mx-auto p-10 md:py-20 ml-2 md:p-10 md:px-0">
        <section className="grid grid-cols md:grid-cols-2 items-center align-middle justify-center xl:grid-cols-3 hover:h-auto 2xl:grid-cols-4 gap-10">
          {gameList &&
            gameList.map((item) => (
              <article
                key={item.id}
                className="bg-[#182a475e]
            p-1  pb-12 md:h-[360px] h-[290px]
            hover:scale-110 transition-all ease-in-out
            transform duration-500 hover:translate-y-1 cursor-pointer group "
              >
                <div className=" bg-opacity-20   h-[400px]      flex flex-wrap flex-col  hover:bg-opacity-95 transform duration-300 translate-y-0 group-hover:translate-y-0 ">
                  <img
                    src={item.background_image}
                    className="w-full h-[35%] md:h-[45%]
                  object-cover transform translate-y-0 group-hover:hidden  duration-600 "
                    alt={item.id}
                  />
                  <h2 className="md:text-[14px] text-[13px] items-center px-2 py-2 flex flex-row justify-between dark:text-white font-bold transform  group-hover:translate-y-0 duration-300">
                    {item.name}
                    <span className="px-1  ml-2 text-[10px]  md:text-[14px] font-medium   duration-300">
                      Release on:&nbsp;{item.released}
                    </span>
                  </h2>
                  <div className="text-gray-500  text-[10px]  md:text-[14px] items-center dark:text-gray-300 px-1 justify-between flex flex-row  group-hover:hidden pb-2 duration-300">
                    <div>
                      Rating:&nbsp;
                      <span className="bg-black px-1 text-[10px]  md:text-[14px]">
                        {item.rating}
                      </span>
                    </div>

                    <div className="flex text-[10px]  md:text-[14px] flex-row items-center gap-4 justify-end mt-3 group-hover:hidden   duration-300">
                      <span className="flex flex-row items-center ">
                        <img src={eye} className="h-3 w-3 sm:h-4 sm:w-4 " />
                        &nbsp; {item.reviews_count}
                      </span>
                      <span className="flex flex-row items-center">
                        <img src={message} className="md:h-4 md:w-4 h-3 w-3" />
                        &nbsp; {item.suggestions_count}
                      </span>
                    </div>
                  </div>
                  <div className="text-white flex p-2 flex-wrap  group-hover:hidden duration-300">
                    {item?.genres?.map((x) => (
                      <div
                        key={x.name}
                        className="px-2 text-[10px] md:text-[14px] bg-pink-600 ml-1 rounded-full mb-2"
                      >
                        {x.name}
                      </div>
                    ))}
                  </div>
                  <div className="text-white text-[10px] md:text-[18px] opacity-0 group-hover:translate-y-1 px-1   flex flex-col group-hover:opacity-100 transform duration-500">
                    <p className="mb-1 md:px-2">Available to stores:</p>
                    <div className=" flex flex-wrap gap-3 px-2">
                      {item?.stores?.map((x) => (
                        <div
                          key={x.store.name}
                          className="px-1 py-1  ml-3 bg-pink-600 "
                        >
                          {x.store.name}
                        </div>
                      ))}
                    </div>
                    <p>
                      <Link to={`/gameDetail/${item.id}`}>
                        <button className=" bg-blue-700 ease-all mt-4 hover:translate-y-1 duration-300 text-white px-3 p-1">
                          Know more...
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </>
  );
};

export default GamesLatest;

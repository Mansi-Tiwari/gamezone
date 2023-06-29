import { Link } from "react-router-dom";
import { eye, message } from "../../assets";

const GamesLatest = ({ gameList }) => {
  return (
    <>
      <section className="px-7 py-7 md:py-20 ml-2 md:p-10 md:px-0">
        <section className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 items-center align-middle justify-center xl:grid-cols-3 hover:h-auto 2xl:grid-cols-4 gap-10">
          {gameList &&
            gameList.map((item) => (
              <article
                key={item.id}
                className="bg-[#182a475e]
            p-1  pb-12 md:h-[360px] h-[270px]
           cursor-pointer hover:-translate-y-3 ease-in-out duration-500 transform"
              >
                <div className=" bg-opacity-20 h-[400px] flex flex-wrap flex-col">
                  <img
                    src={item.background_image}
                    className="w-full h-[35%] md:h-[55%]
                  object-cover"
                    alt={item.id}
                  />
                  <h2 className="md:text-[16px] text-[13px] items-center px-2 py-2 flex flex-row justify-between dark:text-white font-bold transform  group-hover:translate-y-0 duration-300">
                    {item.name}
                    <span className="px-1  ml-2 text-[10px]  md:text-[14px] font-medium   duration-300">
                      Release on:&nbsp;{item.released}
                    </span>
                  </h2>

                  <p className="pl-1 ml-3 text-sm md:text-md">
                    <Link to={`/gameDetail/${item.id}`}>
                      <button className=" bg-blue-700  ease-all mt-4 hover:translate-y-1 duration-300 text-white px-1 p-1">
                        Know more
                      </button>
                    </Link>
                  </p>
                </div>
              </article>
            ))}
        </section>
      </section>
    </>
  );
};

export default GamesLatest;

import data from "../data/data";
import { Link } from "react-router-dom";
const Stores = () => {
  return (
    <section className="py-16 mt-3 sc-stores bg-violet-darker">
      <div className="container">
        <div className="sc-title flex">
          <h3>
            game<span>store</span>
          </h3>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.store_data.map((item) => (
            <div
              className="flex flex-col justify-center items-center"
              key={item.id}
            >
              <div className="w-[300px] img-fit-cover ">
                <img src={item.image_background} alt="" />
              </div>
              <div className="store-item-info w-[300px]">
                <h3 className="uppercase text-violet-darker font-bold tracking-[.04em] mb-2 group-hover:text-white transition ease-in-out duration-300">
                  {item.name}
                </h3>
                <ul>
                  <li className="text-dark flex cursor-pointer group-hover:text-white transition ease-in-out duration-300">
                    <span className="me-1 font-bold">Domain:</span>

                    <Link to={item.domain} target="_blank">
                      {item.domain}
                    </Link>
                  </li>
                  <li className="text-dark flex group-hover:text-white transition ease-in-out duration-300">
                    <span className="me-1 font-bold">Games Count:</span>
                    <span>{item.games_count}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;

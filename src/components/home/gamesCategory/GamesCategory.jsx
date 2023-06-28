import { dev1, dev2, dev3, dev4, dev5 } from "../../../assets/index";
import { Link } from "react-router-dom";

const GamesCategory = ({ categoryGames, selectedOptions, onOptionsChange }) => {
  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    onOptionsChange({
      ...selectedOptions,
      tag: selectedTag,
    });
  };

  return (
    <section className="py-16 sc-category">
      <div className="container">
        <div className="sc-title">
          <h3>
            game <span>category</span>
          </h3>
          <div className="line"></div>
        </div>

        <div className="button-group mx-auto filter-button-group flex items-center justify-center flex-wrap">
          <button value="anime" onClick={handleTagChange}>
            anime
          </button>
          <button value="shooter" onClick={handleTagChange}>
            shooter
          </button>
          <button value="strategy" onClick={handleTagChange}>
            strategy
          </button>
          <button value="sci-fi" onClick={handleTagChange}>
            sci-fi
          </button>
          <button value="space" onClick={handleTagChange}>
            space
          </button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {categoryGames &&
            categoryGames.map((game) => (
              <Link
                key={game.id}
                to={`/detail/:${game.id}`}
                className="hover:p-1 transition-all delay-300
        "
              >
                <div
                  style={{ display: "block" }}
                  className="category-item shadow-category-item overflow-hidden action shooter"
                >
                  <img src={game?.thumbnail} alt="" className="h-[200px]" />
                  <div className="category-item-info ">
                    <div className="bg-green-normal text-white py-[2px] px-[6px] inline-block uppercase text-xs tracking-widest mb-[6px]">
                      {game?.genre}
                    </div>
                    <h3 className="font-medium text-[18px] tracking-[.03em] uppercase text-white mb-2">
                      {game?.title}
                    </h3>
                    <ul className="flex mb-[14px]">
                      <li className="me-3">
                        <img src={dev1} />
                      </li>
                      <li className="me-3">
                        <img src={dev2} />
                      </li>
                      <li className="me-3">
                        <img src={dev3} />
                      </li>
                      <li className="me-3">
                        <img src={dev4} />
                      </li>
                      <li className="me-3">
                        <img src={dev5} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GamesCategory;

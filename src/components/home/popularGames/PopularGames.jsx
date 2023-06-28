import { starBlack, console } from "../../../assets/index";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const PopularGames = ({ displayedGames }) => {
  return (
    <section className="py-16 sc-popular bg-violet-dark-active">
      <div className="container">
        <div className="sc-title">
          <h3>
            top popular <span>games</span>
          </h3>
          <div className="line"></div>
        </div>
        <div className="game-card-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedGames &&
            displayedGames.slice(0, 6).map((game) => (
              <div className="game-card" key={game?.name}>
                <div className="game-card-top img-fit-cover">
                  <img src={game?.background_image} alt="" />
                  <div className="ratings-count">
                    {game.id}
                    <img src={starBlack} alt="" className="ms-2" />
                  </div>
                </div>
                <div className="game-card-bottom">
                  <div className="flex flex-col sm:flex-row justify-between flex-wrap">
                    <div className="py-1">
                      <h4 className="text-white uppercase game-card-title">
                        {game?.name}
                      </h4>
                    </div>
                    <div className="star-rating mt-2 sm:mt-0 py-1 ">
                      <StarRatings
                        starRatedColor="#fcef32"
                        starEmptyColor="#fff"
                        rating={game.rating}
                        starDimension="15px"
                        starSpacing="2px"
                      />
                    </div>
                  </div>

                  <div className="block-wrap flex justify-between items-end">
                    <div className="details-group">
                      <div className="flex items-center">
                        <p className="font-semibold">Release Date: &nbsp;</p>
                        <p>{game?.released}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="font-semibold">Updated: &nbsp;</p>
                        <p>
                          {game?.genres?.map((x) => (
                            <span
                              className="px-1 bg-pink-600 ml-3"
                              key={x?.name}
                            >
                              {x.name}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" items-end justify-between">
                    <Link
                      to={`https://${game?.stores[0]?.store.domain}`}
                      className="uppercase btn-primary items-center"
                      target="_blank"
                    >
                      <img
                        src={console}
                        alt="play"
                        className="w-5 mr-2 h-5"
                      />{" "}
                      Play...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-[60px]">
          <Link to={"/games"} className="section-btn">
            see more games
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularGames;

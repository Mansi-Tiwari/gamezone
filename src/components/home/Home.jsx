import { useEffect, useState } from "react";
import PopularGames from "./popularGames/PopularGames";
import JoinCommunity from "./joinCommunity/JoinCommunity";
import GamesCategory from "./gamesCategory/GamesCategory";
import GamesStore from "./gamesStore/GamesStore";
import Banner from "./banner/Banner";
import api from "../../api/api";
import data from "../data/data";
import Loader from "../loader/Loader";
import GameSlider from "./gameSlider/GameSlider";

const Home = ({ gamesList, selectedOptions, onOptionsChange }) => {
  const [allGameList, setAllGameList] = useState();

  const getAllGamesList = () => {
    api.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const store_data = data.store_data.slice(1, 5);
  const displayedGames = allGameList;
  const categoryGames = gamesList.slice(0, 8);

  useEffect(() => {
    getAllGamesList();
  }, []);

  if (!gamesList) {
    return <Loader />;
  }
  return (
    <>
      <main className="bg-violet-darker mt-[80px] ">
        <div className="flex align-middle header px-3">
          <Banner />
        </div>
        <PopularGames displayedGames={displayedGames} />
        <GameSlider games={gamesList} />
        <JoinCommunity />
        <GamesCategory
          categoryGames={categoryGames}
          selectedOptions={selectedOptions}
          onOptionsChange={onOptionsChange}
        />
        <GamesStore store_data={store_data} />
      </main>
    </>
  );
};

export default Home;

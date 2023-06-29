import { useEffect, useState } from "react";
import GeneraList from "./GeneraList";
import GamesLatest from "./GamesLatest";
import Banner from "./Banner";
import api from "../../api/api";
import Loader from "../loader/Loader";

const LatestGame = () => {
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selctedGenresName, setSelctedGenresName] = useState("Action");

  const getGameListByGenresId = (id) => {
    api.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };
  if (!gameListByGenres) {
    return <Loader />;
  }
  useEffect(() => {
    getGameListByGenresId(4);
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2 ">
        <GeneraList
          genreId={(genreId) => getGameListByGenresId(genreId)}
          selectedGenresName={(name) => setSelctedGenresName(name)}
        />
        <div className="flex flex-col mt-20">
          <div className="mb-7 ml-4">
            <h1 className=" text-white font-bold text-2xl md:text-4xl">
              {selctedGenresName}
              <span className="text-pink-600">Games</span>
            </h1>
            <div className="p-[2px] mt-1 rounded-full bg-pink-600 w-[98px]"></div>
          </div>
          <Banner selctedGenresName={selctedGenresName} />
          <GamesLatest gameList={gameListByGenres} />
        </div>
      </div>
    </>
  );
};

export default LatestGame;

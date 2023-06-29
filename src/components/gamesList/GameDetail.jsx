import { useEffect, useState } from "react";
import GameSlider from "./GameSlider";
import SingleGame from "./SingleGame";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import { home } from "../../assets/index";

const GameDetail = () => {
  const [singleGame, setSingleGame] = useState([]);
  const [screenshot, setScreenShot] = useState([]);
  const navigate = useNavigate();
  let { gameId } = useParams();

  const getSingleGame = (id) => {
    api.getSingleGameById(id).then((resp) => {
      setSingleGame(resp.data);
    });
    api.getScreenshotGameById(id).then((resp) => {
      setScreenShot(resp.data.results);
    });
  };

  useEffect(() => {
    getSingleGame(gameId);
  }, [gameId]);

  return (
    <>
      <div className=" flex flex-col px-6 mt-20">
        <div className=" items-center mb-6 flex flex-row justify-between">
          <Link to={"/"}>
            <img
              src={home}
              alt=""
              className="h-7 w-7 ml-1 border-b  border-gray-600 hover:p-1 ease-in-out duration-200"
            />
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="border-x-4 border-indigo-500 items-center m-3 hover:bg-indigo-500  w-50 text-center mt-5 px-3 py-1 flex  text-white"
          >
            Go back
          </button>
        </div>
        <div className="flex xl:flex-row gap-10 flex-col xl:px-20 px-1 ">
          <div className=" w-full xl:w-[45%]">
            <GameSlider Game={screenshot} />
            <div className="flex flex-wrap gap-4 mt-8 md:mb-[100px] px-3">
              <h2 className="text-white text-2xl">Tags:</h2>
              {singleGame?.tags?.map((items) => (
                <div
                  className="bg-gray-600 rounded-full px-2 py-1 text-white"
                  key={items.id}
                >
                  #{items.name}
                </div>
              ))}
            </div>
          </div>

          <SingleGame game={singleGame} />
        </div>
      </div>
    </>
  );
};

export default GameDetail;

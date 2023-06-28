import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GameSlider from "./GameSlider";
import Detail from "./Detail";
import { home } from "../../assets/index";

const FreeGameDetail = () => {
  const [singleData, setSingleGame] = useState();
  const navigate = useNavigate();

  let { ID } = useParams();
  const getFreeGamesDetail = async (ID) => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL, {
        params: { id: ID },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_FREEGAME_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      });
      setSingleGame(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFreeGamesDetail(ID);
  }, [ID]);
  return (
    <>
      <div className="container px-6 mt-20">
        <div className=" items-center flex flex-row justify-between">
          <Link to={"/"}>
            <img
              src={home}
              alt=""
              className="h-7 w-7 ml-10 border-b  border-gray-600 hover:p-1 ease-in-out duration-200"
            />
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="border-x-4 border-indigo-500 items-center m-3 hover:bg-indigo-500  w-50 text-center mt-5 px-3 py-1 flex  text-white"
          >
            Go back
          </button>
        </div>
        <div className="flex xl:flex-row flex-col gap-10 items-center xl:px-20  px-1  mt-3 ">
          <div className=" w-full  xl:w-[55%] ">
            <GameSlider Game={singleData} />
          </div>
          <div className=" w-[90%]  xl:w-[600px] items-center mb-6 ">
            <Detail game={singleData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeGameDetail;

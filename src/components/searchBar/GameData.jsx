import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { home } from "../../assets/index";

const GameData = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-20 px-1 lg:px-60 md:px-20">
        <Link to={"/"}>
          <img
            src={home}
            alt=""
            className="h-7 w-7 border-b ml-10 border-gray-600 hover:p-1 ease-in-out duration-200"
          />
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="border-x-4 border-indigo-500 items-center hover:bg-indigo-500 w-50 text-center mt-5 px-3 py-1 flex text-white"
        >
          Go back
        </button>
      </div>
      <div className="flex flex-col items-center justify-center px-40 xl:px-[150px]">
        <div className="flex xl:flex-row flex-col gap-4 ">
          <div className="md:w-[340px] xl:w-[370px] w-full px-8  ">
            <img
              src={state?.background_image}
              alt={state?.id}
              key={state?.name}
              className="rounded-md"
            />
          </div>
          <div className="text-white md:w-[500px] px-6">
            <h1 className="mb-3 text-3xl">{state?.name?.toUpperCase()}</h1>
            <hr></hr>
            <div className="p-4">
              <ul className="leading-10">
                <li>Release Day:&nbsp;&nbsp;{state?.released}</li>
                <li>
                  Platform: &nbsp; &nbsp;
                  {state.parent_platforms.map((item) => (
                    <span
                      key={item?.platform.id}
                      className="bg-pink-500 px-1 mb-1 py-1 rounded-lg mr-4 text-white"
                    >
                      {item.platform.name}
                    </span>
                  ))}
                </li>
                <li>
                  Stores:&nbsp;&nbsp;
                  {state.stores.map((item) => (
                    <span key={item?.store.id} className="underline uppercase">
                      <a target="_blank" href={`https://${item.store.name}`}>
                        {item.store.name}
                      </a>
                    </span>
                  ))}
                </li>
                <li>
                  Genres:&nbsp;&nbsp;
                  {state.genres &&
                    state.genres.map((item) => (
                      <span
                        key={item?.id}
                        className="bg-pink-500 px-1 mb-1 py-1 rounded-lg mr-4 text-white"
                      >
                        {item?.name}
                      </span>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[350px]  md:w-[580px] px-10 xl:w-[900px]">
          <Slider {...settings}>
            {state.short_screenshots.length > 2 &&
              state.short_screenshots.map((item) => (
                <div className="p-2" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.id}
                    key={item.id}
                    className=" h-[60px] md:h-[160px]"
                  />
                </div>
              ))}
          </Slider>
            <div className="flex flex-wrap gap-4 my-10 px-3">
              <h2 className="text-white text-2xl">Tags:</h2>
              {state.tags?.map((items) => (
                <div
                  className="bg-gray-600 rounded-full px-2 py-1 text-white"
                  key={items.id}
                >
                  #{items.name}
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default GameData;

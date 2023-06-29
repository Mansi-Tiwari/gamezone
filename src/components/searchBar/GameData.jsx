import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { home } from "../../assets/index";

const GameData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-7 md:px-20 xl:px-80 items-center mt-[100px] text-white mb-6 flex flex-row justify-between">
        <Link to={"/"}>
          <img
            src={home}
            alt=""
            className="h-7 w-7 ml-1 border-b border-gray-600 hover:p-1 ease-in-out duration-200"
          />
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="border-x-4 border-indigo-500 items-center  hover:bg-indigo-500  w-50 text-center  px-3 py-1 flex"
        >
          Go back
        </button>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-4 xl:px-[150px]">
        <div className="flex xl:flex-row flex-col gap-4  justify-center items-center">
          <div className="md:w-[340px] xl:w-[370px] w-full">
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
                <li className="flex flex-wrap gap-3">
                  Platform: &nbsp; &nbsp;
                  {state.parent_platforms.map((item) => (
                    <span
                      key={item?.platform.id}
                      className="bg-pink-500 px-1 rounded-lg mr-4 text-white"
                    >
                      {item.platform.name}
                    </span>
                  ))}
                </li>
                <li className="flex flex-wrap gap-3">
                  Stores:&nbsp;&nbsp;
                  {state.stores.map((item) => (
                    <span
                      key={item?.store.id}
                      className="underline uppercase flex flex-wrap"
                    >
                      <a target="_blank" href={`https://${item.store.name}`}>
                        {item.store.name}
                      </a>
                    </span>
                  ))}
                </li>
                <li className="flex flex-wrap gap-3">
                  Genres:&nbsp;&nbsp;
                  {state.genres &&
                    state.genres.map((item) => (
                      <span
                        key={item?.id}
                        className="bg-pink-500 px-1 rounded-lg mr-4 text-white"
                      >
                        {item?.name}
                      </span>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] xl:w-[900px]">
          <Slider {...settings}>
            {state.short_screenshots.length > 2 &&
              state.short_screenshots.map((item) => (
                <div className="p-2" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.id}
                    key={item.id}
                    className=" md:h-[160px]"
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

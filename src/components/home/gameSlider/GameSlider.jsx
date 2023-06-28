import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const GameSlider = ({ games }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="py-16 px-6 bg-violet-darker overflow-hidden">
      <div className="sc-title">
        <h3>
          Trending <span>games</span>
        </h3>
        <div className="line"></div>
      </div>
      <div className="game-slider">
        <Slider {...settings}>
          {games &&
            games.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <div
                  className="xl:w-[400px] xl:h-[250px] lg:w-[260px] lg:h-[200px] md:w-[280px] md:h-[150px] slider-item img-fit-cover px-3"
                  key={item.name}
                >
                  <img src={item?.thumbnail} className="slider-item-img" />
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameSlider;

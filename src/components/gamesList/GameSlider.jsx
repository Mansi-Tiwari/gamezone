import { useState } from "react";
import Slider from "react-slick";

const GameSlider = ({ Game }) => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  if (!Game) {
   return <Loader />;
  }

  return (
    <div className="bg-violet-darker rounded-xl">
      <Slider
        className="p-3"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
      >
        {Game &&
          Game.map((item) => (
            <img
              src={item.image}
              className="p-2 mb-3 rounded-md"
              alt={item.id}
              key={item.id}
            />
          ))}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="p-3"
      >
        {Game &&
          Game.map((item) => (
            <img
              src={item.image}
              className="p-2 md:h-[150px] h-[100px] rounded-md"
              alt={item.id}
              key={item.id}
            />
          ))}
      </Slider>
    </div>
  );
};

export default GameSlider;

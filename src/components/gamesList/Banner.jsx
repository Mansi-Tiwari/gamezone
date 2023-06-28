import StarRatings from "react-star-ratings";

const Banner = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col ">
        <div className=" grow ease-all duration-300 rounded-none relative mt-5 hover:-translate-y-2 ">
          <div
            className=" absolute bottom-0 p-5 bg-gradient-to-t
    from-slate-900 to-transparent w-full flex justify-between items-center"
          >
            <div className="flex flex-col">
              <StarRatings
                starRatedColor="#fcef32"
                starEmptyColor="#fff"
                rating={4.66}
                starDimension="20px"
                starSpacing="2px"
              />
              <h2 className="md:text-[24px] text-[15px] mt-3 text-white md:font-bold ">
                The Witcher 3: Wild Hunt
              </h2>
            </div>
            <button className="bg-blue-700 ease-all hover:translate-y-1 duration-300 text-white px-2 p-1">
              Get Now
            </button>
          </div>
          <img
            src="https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            className="md:h-[320px] w-full object-cover
    rounded-xl"
          />
        </div>
        <div className=" rounded-none  ease-all duration-300 relative mt-5 hover:-translate-y-1 ">
          <div
            className=" absolute bottom-0 p-5 bg-gradient-to-t
    from-slate-900 gap-2 to-transparent w-full flex justify-between items-center"
          >
            <div className="flex flex-col">
              <StarRatings
                starRatedColor="#fcef32"
                starEmptyColor="#fff"
                rating={3.55}
                starDimension="20px"
                starSpacing="2px"
              />
              <h2 className="md:text-[24px] mt-2 text-[15px]  text-white md:font-bold ">
                Destiny 2
              </h2>
            </div>
            <button className="bg-blue-700 ease-all hover:translate-y-1 duration-300 text-white px-2 p-1">
              Get Now
            </button>
          </div>
          <img
            src="https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            className="md:h-[320px] w-full object-cover
    rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

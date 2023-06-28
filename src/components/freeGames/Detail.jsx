import { eye } from "../../assets/index";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const Detail = ({ game }) => {

  if (!game) {
    return <Loader />;
  }

  return (
    <>
      {game && (
        <div className="mt-6">
          <div className="border-b border-gray-700 pb-6">
            <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {game?.title}
            </h1>
          </div>
          <div className="py-4  flex-row border-b border-gray-700 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Status
            </p>
            <div className="flex gap-2 text-white flex-row items-center justify-center">
              <img src={eye} alt="" className="h-4 w-4 " />&nbsp;
              {game.status}
            </div>
          </div>
          <div className="py-4 border-b border-gray-700 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Publisher
            </p>
            <div className="flex flex-row items-center justify-center">
              <p className="text-sm font-bold leading-none text-gray-600 dark:text-gray-300 mr-3">
                {game?.publisher}
              </p>
            </div>
          </div>
          <Link to={game?.game_url} target="_blank">
            <button className=" flex-row dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
              <svg
                className="mr-3 text-white dark:text-gray-900"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66699 4.83333V4.84166"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.333 11.5V11.5083"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Play Now..
            </button>
          </Link>
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: game?.description_raw }}
              className=" text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7"
            />

            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Developer:&nbsp;{" "}
              <span className="text-white font-bold">{game.developer} </span>
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              Released : &nbsp;{game?.release_date}
            </p>

            <p className="flex flex-wrap mb-3 text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Genres: &nbsp;{" "}
              <span className="bg-pink-500 px-1 mb-1 py-1 rounded-lg mr-4 text-white">
                {game?.genre}{" "}
              </span>
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4  mt-7 border-gray-700">
              <div
                data-menu
                className="flex justify-between gap-3 items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Platforms:&nbsp;{" "}
                  <span className="bg-pink-500 px-1 mb-1 py-1 rounded-lg mr-4 text-white">
                    {game?.platform}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-700">
              <div
                data-menu
                className="flex flex-col justify-start gap-3 items-start cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  System Requirements:
                </p>
                <div className=" flex items-start  gap-5 flex-col w-full px-4 py-1 bg-violet-darker text-gray-400  border-none outline-none appearance-none ">
                  <p className="text-base  leading-4  text-white">
                    Memory:
                    <span className=" px-1 mb-1 py-1 rounded-lg mr-4 ">
                      {game?.minimum_system_requirements?.memory}
                    </span>
                  </p>

                  <p className="text-base  leading-4  text-white">
                    OS:
                    <span className=" px-1 mb-1 py-1 rounded-lg mr-4 ">
                      {game?.minimum_system_requirements?.os}
                    </span>
                  </p>

                  <p className="text-base  leading-4  text-white">
                    Processor:
                    <span className=" px-1 mb-1 py-1 rounded-lg mr-4 ">
                      {game?.minimum_system_requirements?.processor}
                    </span>
                  </p>

                  <p className="text-base  leading-4  text-white">
                    Graphics :&nbsp;
                    <span className=" px-1 mb-1 py-1 rounded-lg mr-4 ">
                      {game?.minimum_system_requirements?.graphics}
                    </span>
                  </p>

                  <p className="text-base  leading-4   text-white">
                    Storage: &nbsp;
                    <span className=" px-1 mb-1 py-1 rounded-lg mr-4 text-white">
                      {game?.minimum_system_requirements?.storage}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

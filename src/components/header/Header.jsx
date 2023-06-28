import React, { useState } from "react";
import { youtube, steam, twitch } from "../../assets/index";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar flex items-center shadow-nav fixed top-0 z-50 w-full bg-white border-b border-gray-800">
        <div className="container w-full px-3 py-3 lg:px-5 lg:pl-3">
          <div className="navbar-content flex items-center justify-between">
            <div className="brand-and-toggler flex items-center justify-between">
              <Link
                to={"/"}
                className="navbar-brand flex flex-row items-center gap-4 ml-2 md:mr-14"
              >
                <span>
                  GAMES<span className="text-pink-600">ZONE</span>
                </span>
              </Link>
            </div>

            <button
              onClick={handleNav}
              type="button"
              className="lg:hidden text-white text-2xl px-3"
            >
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div
              className={
                open
                  ? " navbar-collapse fixed right-0 top-0 w-full md:w-[280px] h-full bg-white shadow-nav-collapse pt-[60px] px-5 pb-4 text-center transition   ease-in-out duration-300 transform lg:relative lg:p-0 lg:flex lg:items-center lg:justify-end lg:w-full lg:bg-transparent lg:shadow-none  lg:translate-x-0 "
                  : "navbar-collapse fixed right-0 top-0 w-full md:w-[280px] h-full bg-white shadow-nav-collapse pt-[60px] px-5 pb-4 text-center  transition ease-in-out duration-300 transform lg:relative lg:p-0 lg:flex lg:items-center lg:justify-end lg:w-full lg:bg-transparent lg:shadow-none  translate-x-full lg:translate-x-0"
              }
            >
              <button
                type="button"
                className="lg:hidden float-right "
                id={open ? "navbar-show-btn" : "navbar-hide-btn"}
              >
                <i
                  onClick={() => setOpen(false)}
                  className="fa-solid fa-xmark text-2xl"
                ></i>
              </button>

              <ul className="navbar-nav gap-3 items-center ">
                <li className="nav-item" onClick={() => setOpen(false)}>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setOpen(false)}>
                  <Link to={"/game"} className="nav-link">
                    <span className={open ? "text-pink-600" : "text-white"}>
                      Latest
                    </span>
                    Games
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setOpen(false)}>
                  <Link to={"/store"} className="nav-link">
                    stores
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setOpen(false)}>
                  <Link to={"/games"} className="nav-link">
                    <span className={open ? "text-pink-600" : "text-white"}>
                      Free
                    </span>
                    Games
                  </Link>
                </li>
                <li className="nav-item  flex justify-center ">
                  <SearchBar setOpen={setOpen} />
                </li>
              </ul>

              <ul className="connect-list">
                <li onClick={() => setOpen(false)}>
                  <Link
                    target="_blank"
                    to={"https://store.steampowered.com/"}
                    className="connect-link"
                  >
                    <img src={steam} alt="" />
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    target="_blank"
                    to={"https://www.twitch.tv/directory/gaming"}
                    className="connect-link"
                  >
                    <img src={twitch} alt="" />
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    target="_blank"
                    to={"https://www.youtube.com/gaming/games"}
                    className="connect-link"
                  >
                    <img src={youtube} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

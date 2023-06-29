import { useEffect, useState ,useLayoutEffect } from "react";
import SearchResultsList from "./components/searchBar/SearchResultsList";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import {
  LatestGame,
  Header,
  Footer,
  GameData,
  FreeGames,
  Home,
  Stores,
  FreeGameDetail,
  GameDetail,
  SearchResultsList,
} from "./components/index";

function App() {
  const [gamesList, setGamesList] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    platform: "pc",
    tag: "shooter",
    sorted: "popularity",
  });

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const handleOptionsChange = (options) => {
    setSelectedOptions(options);
    getFreeGamesList(options);
  };

  const getFreeGamesList = async (options) => {
    try {
      const response = await axios.get(import.meta.env.VITE_FREEGAME_URL, {
        params: {
          platform: options?.platform || "pc",
          category: options?.tag || "shooter",
          "sort-by": options?.sorted || "popularity",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_FREEGAME_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      });

      setGamesList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFreeGamesList();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header path="/" element={<Header />} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  gamesList={gamesList}
                  selectedOptions={selectedOptions}
                  onOptionsChange={handleOptionsChange}
                />
              }
            />
            <Route path="/game" element={<LatestGame />} />
            <Route path="/gameDetail/:gameId" element={<GameDetail />} />
            <Route path="/game/:id" element={<GameData />} />
            <Route path="/search/:query" element={<SearchResultsList />} />
            <Route path="/store" element={<Stores />} />
            <Route
              path="/games"
              element={
                <FreeGames
                  gamesList={gamesList}
                  selectedOptions={selectedOptions}
                  onOptionsChange={handleOptionsChange}
                />
              }
            />
            <Route path="/detail/:ID" element={<FreeGameDetail />} />
          </Routes>

          <footer className=" bg-violet-darker ">
            <Footer />
          </footer>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

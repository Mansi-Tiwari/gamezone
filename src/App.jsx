import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
} from "./components/index";
import "./dist/main.css";

function App() {
  const [gamesList, setGamesList] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    platform: "pc",
    tag: "shooter",
    sorted: "popularity",
  });

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
      </BrowserRouter>
    </>
  );
}

export default App;

import axios from "axios";

const key=import.meta.env.VITE_GAME_API_KEY;
const axiosCreate=axios.create({
    baseURL:import.meta.env.VITE_GAME_URL
})
const getGenreList=axiosCreate.get('/genres?key=' + key);
const getAllGames=axiosCreate.get('/games?key=' + key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+ key + '&genres=' +id)
const getSingleGameById = (id)=>axiosCreate.get('/games/'+ id +'?tokrn&key='+key )
const getScreenshotGameById = (id)=>axiosCreate.get('/games/'+ id+'/screenshots' +'?tokrn&key='+key )
const getSearchedGames=(search)=> axiosCreate.get('/games?search=' + search + '&search_exact=true&search_precise=true' + '?tokrn&key=' +key);

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId,
    getSingleGameById,
    getScreenshotGameById ,
    getSearchedGames,
}
import axios from "axios";

const KEY = "309dda4dc546766614178925997843a4";
axios.defaults.baseURL = "https://gateway.marvel.com:443/v1/public/";

// https://gateway.marvel.com:443/v1/public/characters?apikey=309dda4dc546766614178925997843a4


export const getAllCharacters = async () => {
    try {
        const response = await axios.get(`characters?apikey=${KEY}`)
        console.log(response);
        return response
        
    } catch (error) {
        console.log(error);
    }
}

export const getAllComics = async () => {
    try {
        const response = await axios.get(`comics?apikey=${KEY}`)
        console.log(response);
        return response
        
    } catch (error) {
        console.log(error);
    }
}





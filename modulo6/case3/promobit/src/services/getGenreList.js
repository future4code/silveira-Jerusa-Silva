import axios from "axios";
import { API_KEY, BASE_URL   } from "../constants/url";

export const getGenreList = async () => {
    try {
        const {data} = await axios.get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR`)
        
        return data.genres

    } catch (error) {
        alert(error.message)
    }
};
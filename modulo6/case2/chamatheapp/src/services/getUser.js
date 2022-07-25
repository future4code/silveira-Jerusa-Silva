import axios from "axios";
import { BASE_URL } from "../constants/urls";

const header = {
    headers: {
      Authorization: "application/vnd.github.v3+json"
    },
  };

export const getUser = async (username) => {
  if (username !== "null") {
    try {
        const {data} = await axios.get(`${BASE_URL}/${username}`, header)
        return [data]

    } catch (error) {
        
    }
  }
};

export default getUser;
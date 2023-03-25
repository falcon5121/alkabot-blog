import axios from "axios";
import { HTTP_URL } from "../main";

export const getPublies = async () => {
  return await axios.get(HTTP_URL + "/posts/");
};

export const getOnePubly = async (id: string | undefined) => {
  return await axios.get(`${HTTP_URL}/posts/${id}`);
};

// export default getPublies;

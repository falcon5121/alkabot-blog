import axios from "axios";
import { HTTP_URL } from "../main";

const getComments = async (value: string | undefined) => {
  let variable;
  return await axios.get(`${HTTP_URL}/posts/${value}/comments`);
};

export default getComments;

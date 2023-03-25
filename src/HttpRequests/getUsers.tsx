import axios from "axios";
import { HTTP_URL } from "../main";

const getUsers = async () => {
  return await axios.get(HTTP_URL + "/users/");
};

export default getUsers;

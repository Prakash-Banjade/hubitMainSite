import axios from "axios";

const instance = axios.create({
  baseURL: `https://hubmainback.hubit.com.np`,
  //   baseURL: `https://himal-hubitbackend.adaptable.app/`,
});
export default instance;

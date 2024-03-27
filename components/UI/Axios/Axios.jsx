import axios from "axios";

const instance = axios.create({
  // baseURL: `https://hubmainback.hubit.com.np`,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //   baseURL: `https://himal-hubitbackend.adaptable.app/`,
});
export default instance;

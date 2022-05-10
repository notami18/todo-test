import axios from "axios";

const instance = axios.create();
const BASE_URL = "http://localhost:3002";
instance.defaults.baseURL = BASE_URL;
instance.defaults.headers.common.Accept = "application/json";

export default instance;
import axios from "axios";

import { API_BASE_URL } from "service/constants/api";

const customAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default customAxios;

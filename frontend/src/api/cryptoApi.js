import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const fetchCryptos = async () => {
  const response = await axios.get(`${API_URL}/cryptos`);
  return response.data.data;
};

import axios from "axios";

export const getProducts = () => {
  return axios.get(`https://639b3492d5141501974eaf28.mockapi.io/nykaa`);
};

export const getSingleProduct = (id) => {
  return axios.get(`https://639b3492d5141501974eaf28.mockapi.io/nykaa?id=${id}`);
};

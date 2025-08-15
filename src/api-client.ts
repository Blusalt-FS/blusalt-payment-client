import axios from "axios";

export const getClient = (apiKey?: string) => {
  return axios.create({
    baseURL: process.env.BLUSALT_API_URL || "https://wallets.blusalt.net",
    headers: {
      Accept: "application/json",
      "x-api-key": apiKey || process.env.BLUSALT_API_KEY,
    },
    validateStatus: (status) => {
      return true;
    },
  });
};

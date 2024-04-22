//TODO
import { database } from "./database.js";

export const getAllCountryNames = () => Object.keys(database);
export const getCountryMainImages = (countryName) => {
  return (
    database[countryName].mainImage ??
    "https://cdn4.iconfinder.com/data/icons/productivity-and-development-2/48/71-512.png"
  );
};

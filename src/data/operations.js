
import { database } from "./database.js";

export const getAllCountryNames = () => Object.keys(database);

export const getCities = () => {
    return database.canada.Cities.map(city => ({...city}))
  }
  
  export const getLandmarks = () => {
    return database.canada.Landmarks.map(landmark => ({...landmark}))
  }
  
  export const getCelebrity = () => {
    return database.canada.Celebrity.map(celebrity => ({...celebrity}))
  }
export const getScotlandCelebrities = () => {
    return database.scotland.celebrities.map(celebrity => ({...celebrity}))
}

export const getScotlandCities = () => {
    return database.scotland.cities.map(city =>({...city}))
}

export const getScotlandLandmarks = () => {
    return database.scotland.landmarks.map(landmark => ({...landmark}))
}

export const getCountryMainImages = (countryName) => {
  return (
    database[countryName].mainImage ??
    "https://cdn4.iconfinder.com/data/icons/productivity-and-development-2/48/71-512.png"
  );
};

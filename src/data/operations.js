
import { database } from "./database.js";

export const getAllCountryNames = () => Object.keys(database);

export const getScotlandCelebrities = () => {
    return database.scotland.celebrities.map(celebrity => ({...celebrity}))
}

export const getScotlandCities = () => {
    return database.scotland.cities.map(city =>({...city}))
}

export const getScotlandLandmarks = () => {
    return database.scotland.landmarks.map(landmark => ({...landmark}))
}


export const getEgyptCitizens = () => {
  return database.egypt.citizens.map(celebrity => ({...celebrity}))
}

export const getEgyptCities = () => {
  return database.egypt.cities.map(city => ({...city}))
}

export const getEgyptLandmarks = () => {
  return database.egypt.landmarks.map(landmark => ({...landmark}))
}

export const getCountryMainImages = (countryName) => {
  return (
    database[countryName].mainImage ??
    "https://cdn4.iconfinder.com/data/icons/productivity-and-development-2/48/71-512.png"
  );
};


//TODO
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
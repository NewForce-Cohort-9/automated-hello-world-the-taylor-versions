
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


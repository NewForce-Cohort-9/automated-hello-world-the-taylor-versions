//TODO
import { database } from "./database.js";

export const getAllCountryNames = () => Object.keys(database);

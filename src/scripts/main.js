import { ItalyWhole } from "../italy/italy.js";

//SCOTLAND
import { scotlandCelebrity} from "../scotland/scotlandCelebrity.js";
import { scotlandCity } from "../scotland/scotlandCity.js";
import { scotlandLandmark } from "../scotland/scotlandLandmark.js";


import { handleNavClickEvents, handleBackToHomeClick } from "./fake-router.js";

const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");

//SCOTLAND
const scotlandCelebrityContainer = document.querySelector("#scotlandCelebrity");
const scotlandCityContainer = document.querySelector("#scotlandCity");
const scotlandLandmarkContainer = document.querySelector("#scotlandLandmark");

const canadaContainer = document.querySelector("#canada");

handleNavClickEvents();
handleBackToHomeClick();
italyContainer.innerHTML = ItalyWhole();

//SCOTLAND
scotlandCelebrityContainer.innerHTML = scotlandCelebrity();
scotlandCityContainer.innerHTML = scotlandCity();
scotlandLandmarkContainer.innerHTML = scotlandLandmark();

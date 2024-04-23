import {
  handleNavClickEvents,
  handleBackToHomeClick,
  handleReadMoreBtnEvents,
} from "./fake-router.js";
import { HomeCards } from "./home.js";
import { ItalyWhole } from "../italy/italy.js";
//SCOTLAND
import { scotlandCelebrity } from "../scotland/scotlandCelebrity.js";
import { scotlandCity } from "../scotland/scotlandCity.js";
import { scotlandLandmark } from "../scotland/scotlandLandmark.js";

const home = document.querySelector("#home");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");

//SCOTLAND
const scotlandCelebrityContainer = document.querySelector("#scotlandCelebrity");
const scotlandCityContainer = document.querySelector("#scotlandCity");
const scotlandLandmarkContainer = document.querySelector("#scotlandLandmark");

const canadaContainer = document.querySelector("#canada");

home.innerHTML = HomeCards();

handleNavClickEvents();
handleBackToHomeClick();
italyContainer.innerHTML = ItalyWhole();

//SCOTLAND
scotlandCelebrityContainer.innerHTML = scotlandCelebrity();
scotlandCityContainer.innerHTML = scotlandCity();
scotlandLandmarkContainer.innerHTML = scotlandLandmark();

handleReadMoreBtnEvents();

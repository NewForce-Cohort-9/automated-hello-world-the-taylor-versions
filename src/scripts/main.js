import {
  handleNavClickEvents,
  handleBackToHomeClick,
  handleReadMoreBtnEvents,
} from "./fake-router.js";
import { HomeCards } from "./home.js";
import { ItalyWhole } from "../italy/italy.js";
import { scotlandCelebrity } from "../scotland/scotlandCelebrity.js";
import { scotlandCity } from "../scotland/scotlandCity.js";
import { scotlandLandmark } from "../scotland/scotlandLandmark.js";
import { canadaWholeHtml } from "../canada/canada.js";
import { cityList } from "../canada/citiesList.js";
import { celebrityList } from "../canada/celebritiesList.js";
import { landmarkList } from "../canada/landmarksList.js";

const home = document.querySelector("#home");
const egyptContainer = document.querySelector("#egypt");
const canadaContainer = document.querySelector("#canada");
const italyContainer = document.querySelector("#italy");

//SCOTLAND
const scotlandCelebrityContainer = document.querySelector("#scotlandCelebrity");
const scotlandCityContainer = document.querySelector("#scotlandCity");
const scotlandLandmarkContainer = document.querySelector("#scotlandLandmark");

home.innerHTML = HomeCards();

handleNavClickEvents();
handleBackToHomeClick();

italyContainer.innerHTML = ItalyWhole();

canadaContainer.innerHTML = canadaWholeHtml();
canadaContainer.innerHTML += cityList();
canadaContainer.innerHTML += celebrityList();
canadaContainer.innerHTML += landmarkList();

//SCOTLAND
scotlandCelebrityContainer.innerHTML = scotlandCelebrity();
scotlandCityContainer.innerHTML = scotlandCity();
scotlandLandmarkContainer.innerHTML = scotlandLandmark();

handleReadMoreBtnEvents();

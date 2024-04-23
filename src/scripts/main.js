import { ItalyWhole } from "../italy/italy.js";

//SCOTLAND
import { scotlandCelebrity} from "../scotland/scotlandCelebrity.js";
import { scotlandCity } from "../scotland/scotlandCity.js";
import { scotlandLandmark } from "../scotland/scotlandLandmark.js";


//egypt
import {egyptCity} from "../egypt/egyptCities.js";
import {egyptLandmark} from "../egypt/egyptLandmarks.js";
import {egyptCitizen} from "../egypt/egyptCitizens.js";

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
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

//SCOTLAND
const scotlandCelebrityContainer = document.querySelector("#scotlandCelebrity");
const scotlandCityContainer = document.querySelector("#scotlandCity");
const scotlandLandmarkContainer = document.querySelector("#scotlandLandmark");

//Egypt #'s
// const egyptCitizenContainer = document.querySelector("#egyptCelebrity");
// const egyptCityContainer = document.querySelector("#egyptCity");
// const egyptLandmarkContainer = document.querySelector("#egyptLandmark");


home.innerHTML = HomeCards();
italyContainer.innerHTML = ItalyWhole();

handleNavClickEvents();
handleBackToHomeClick();
italyContainer.innerHTML = ItalyWhole();

//SCOTLAND
scotlandCelebrityContainer.innerHTML = scotlandCelebrity();
scotlandCityContainer.innerHTML = scotlandCity();
scotlandLandmarkContainer.innerHTML = scotlandLandmark();

//egypt containers
egyptContainer.innerHTML += egyptLandmark();
egyptContainer.innerHTML += egyptCitizen();
egyptContainer.innerHTML += egyptCity();


handleReadMoreBtnEvents();

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



const home = document.querySelector("#home");


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


handleNavClickEvents();
handleBackToHomeClick();


import { canadaWholeHtml } from "../canada/canada.js";

import { cityList } from "../canada/citiesList.js";
import { celebrityList } from "../canada/celebritiesList.js";
import { landmarkList } from "../canada/landmarksList.js";


const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");

const italyContainer = document.querySelector("#italy");
italyContainer.innerHTML = ItalyWhole();

handleNavClickEvents();
handleBackToHomeClick();
canadaContainer.innerHTML = canadaWholeHtml();
canadaContainer.innerHTML += cityList();
canadaContainer.innerHTML += celebrityList();
canadaContainer.innerHTML += landmarkList();

//SCOTLAND
scotlandCelebrityContainer.innerHTML = scotlandCelebrity();
scotlandCityContainer.innerHTML = scotlandCity();
scotlandLandmarkContainer.innerHTML = scotlandLandmark();

//egypt containers
egyptContainer.innerHTML += egyptLandmark();
egyptContainer.innerHTML += egyptCitizen();
egyptContainer.innerHTML += egyptCity();


handleReadMoreBtnEvents();

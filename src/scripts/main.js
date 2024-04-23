/*import { ItalyWhole } from "../italy/italy.js";
import { handleNavClickEvents, handleBackToHomeClick } from "./fake-router.js";

const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

handleNavClickEvents();
handleBackToHomeClick();
italyContainer.innerHTML = ItalyWhole();
*/
import { canadaWholeHtml } from "../canada/canada.js";
import { handleNavClickEvents, handleBackToHomeClick } from "./fake-router.js";
import { cityList } from "../canada/citiesList.js";
import { celebrityList } from "../canada/celebritiesList.js";
import { landmarkList } from "../canada/landmarksList.js";


const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

handleNavClickEvents();
handleBackToHomeClick();
canadaContainer.innerHTML = canadaWholeHtml();
canadaContainer.innerHTML += cityList();
canadaContainer.innerHTML += celebrityList();
canadaContainer.innerHTML += landmarkList();
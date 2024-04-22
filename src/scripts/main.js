import { ItalyWhole } from "../italy/italy.js";
import { handleNavClickEvents, handleBackToHomeClick } from "./fake-router.js";
import { HomeCards } from "./home.js";

const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");
const home = document.querySelector("#home");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

home.innerHTML = HomeCards();
italyContainer.innerHTML = ItalyWhole();

handleNavClickEvents();
handleBackToHomeClick();

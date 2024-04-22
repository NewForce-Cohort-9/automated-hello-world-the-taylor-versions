import { ItalyWhole } from "../italy/italy.js";
import { EgyptWhole } from "../egypt/egypt.js";

const mainContainer = document.querySelector("#global-container");
const navbar = document.querySelector(".navbar");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

handleNavClickEvents();
handleBackToHomeClick();
italyContainer.innerHTML = ItalyWhole();
egyptContainer.innerHTML = EgyptWhole();

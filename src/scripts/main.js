import { canadaWhole } from "../canada/canada.js";

const mainContainer = document.querySelector("#global-container");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

canadaContainer.innerHTML = canadaWhole();

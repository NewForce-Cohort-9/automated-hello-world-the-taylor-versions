import { ItalyWhole } from "../italy/italy.js";

const mainContainer = document.querySelector("#global-container");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

italyContainer.innerHTML = ItalyWhole();

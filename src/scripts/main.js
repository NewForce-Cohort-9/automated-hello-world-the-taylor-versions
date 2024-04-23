import { ItalyWhole } from "../italy/italy.js";
import {
  handleNavClickEvents,
  handleBackToHomeClick,
  handleReadMoreBtnEvents,
} from "./fake-router.js";
import { HomeCards } from "./home.js";

const home = document.querySelector("#home");

const italyContainer = document.querySelector("#italy");
const egyptContainer = document.querySelector("#egypt");
const scotlandContainer = document.querySelector("#scotland");
const canadaContainer = document.querySelector("#canada");

home.innerHTML = HomeCards();
italyContainer.innerHTML = ItalyWhole();

handleNavClickEvents();
handleBackToHomeClick();
handleReadMoreBtnEvents();

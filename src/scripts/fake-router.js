import { getAllCountryNames } from "../data/operations.js";

//TODO this can be replaced with actual routing

const allCountryNames = getAllCountryNames();

export const fakeChangeRoutes = (clickedCountryName) => {
  const anchors = document.querySelectorAll(".navbar__anchor");

  for (const anchor of anchors) {
    const anchorTextContent = anchor.textContent.toLowerCase();
    if (anchorTextContent === clickedCountryName) {
      anchor.classList.add("navbar__active-route");
    } else {
      anchor.classList.remove("navbar__active-route");
    }
  }

  for (const country of allCountryNames) {
    const countrySection = document.querySelector(`#${country}`);
    if (country !== clickedCountryName) {
      countrySection.classList.remove("country-section-active");
      countrySection.classList.add("country-section-inactive");
    } else {
      countrySection.classList.remove("country-section-inactive");
      countrySection.classList.add("country-section-active");
    }
  }
};

export const handleNavClickEvents = () => {
  const anchors = document.querySelectorAll(".navbar__anchor");
  const hideAllWrapper = document.querySelector("#section-hider");
  const homePageWrapper = document.querySelector("#home");

  for (const anchor of anchors) {
    anchor.addEventListener("click", () => {
      homePageWrapper.classList.add("hide-home");
      hideAllWrapper.classList.remove("hide-all-countries");
      const anchorCountry = anchor.textContent.toLowerCase();
      fakeChangeRoutes(anchorCountry);
    });
  }
};

export const handleBackToHomeClick = () => {
  const homeNavbarImage = document.querySelector("#navbar-home");
  const homePageWrapper = document.querySelector("#home");
  const hideAllCountriesWrapper = document.querySelector("#section-hider");
  const anchors = document.querySelectorAll(".navbar__anchor");

  homeNavbarImage.addEventListener("click", () => {
    homePageWrapper.classList.remove("hide-home");
    hideAllCountriesWrapper.classList.add("hide-all-countries");

    anchors.forEach((anchor) =>
      anchor.classList.remove("navbar__active-route")
    );
  });
};

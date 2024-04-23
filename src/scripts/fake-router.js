import { getAllCountryNames } from "../data/operations.js";

const allCountryNames = getAllCountryNames();

export const fakeChangeRoutes = (clickedCountryId) => {
  for (const country of allCountryNames) {
    const countrySection = document.querySelector(`#${country}`);

    if (country !== clickedCountryId) {
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
      homePageWrapper.classList.add("hide-all-countries");
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

  homeNavbarImage.addEventListener("click", () => {
    homePageWrapper.classList.remove("hide-all-countries");
    hideAllCountriesWrapper.classList.add("hide-all-countries");
  });
};

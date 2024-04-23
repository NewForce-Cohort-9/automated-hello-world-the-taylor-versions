import {
  getAllCountryNames,
  getCountryMainImages,
} from "../data/operations.js";

const countryNames = getAllCountryNames();

export const HomeCards = () => {
  let homeHTML = `<div class="home__card-ctn">`;
  for (const country of countryNames) {
    homeHTML += `<article class="home__card">
      <a>
          <img
            src="${getCountryMainImages(country)}"
          />
        </a>
        <div class="home__card-inner">
          <h2>${country}</h2>
          <p>Learn more about the beautiful country of 
          <span style="text-transform: capitalize">${country}</span>
          </p>
          <button 
          name="${country}"
          id="read-more-btn">Read more</button>
        </div>
        </article>
        `;
  }
  homeHTML += "</div>";
  return homeHTML;
};

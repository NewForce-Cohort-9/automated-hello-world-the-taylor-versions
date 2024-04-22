import {
  getAllCountryNames,
  getCountryMainImages,
} from "../data/operations.js";

//TODO unfinished

const countryNames = getAllCountryNames();

export const HomeCards = () => {
  let homeHTML = `<div class="home__card-ctn">`;
  for (const country of countryNames) {
    homeHTML += ` <article class="home__card">
      <a>
          <img
            src="${getCountryMainImages(country)}"
          />
        </a>
        <div class="home__inner">
          <h2>${country}</h2>
          <button id="read-more-${country}" class="read-more-btn">Read more</button>
        </div>
        </article>
        `;
  }
  homeHTML += "</div>";
  return homeHTML;
};

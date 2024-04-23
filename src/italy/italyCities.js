import { database } from "../data/database.js";
const { italy } = database;

export const ItalyCities = () => {
  let citiesHTML = `<div class="italy__city-card-ctn">`;
  for (const city of italy.cities) {
    citiesHTML += `<article class="italy__city-card">
        <a>
            <img
              src="${city.image}"
            />
          </a>
          <div class="home__card-inner">
            <h2>${city.name}</h2>
            <p style="font-size: 1.5rem">${city.description}</p>
            
          </div>
          </article>
          `;
  }
  citiesHTML += "</div>";
  return citiesHTML;
};

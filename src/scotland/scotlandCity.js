import { getScotlandCities } from "../data/operations.js";

export const scotlandCity = () => {
    
  const cities = getScotlandCities();

  let htmlString = '<article class="cityContainer">';

  for (let city of cities) {

    htmlString += `<section class="city__card">
            <div><img class="city__image image--card" src="${city.image}" /></div>
            <div class="city__name"> ${city.name}</div>
            <div class="city__details">${city.details}</div>
        </section>
`;
  }

  htmlString += `</article>`;

  return htmlString;
};

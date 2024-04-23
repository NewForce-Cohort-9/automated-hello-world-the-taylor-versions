
import { getEgyptCities } from "../data/operations.js";

export const egyptCity = () => {

  const cities = getEgyptCities();

let htmlString = '<article class>="citiesContainer">';

for (let city of cities) {

  htmlString += `<section class="city__card">
    <div><img class = "city__image  image--card" src="${city.image}"</div>
    <div class = "city__name"> ${city.name}</div>
    <div class = "city__population"> ${city.population}</div>
  
  </section>`;
}

htmlString += `</article>`;

return htmlString;

};
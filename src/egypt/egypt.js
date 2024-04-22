//TODO

import { database } from "../data/database.js";

const { egypt } = database;

export const EgyptWhole = () => {
  return `
    <div class="egypt__div"> ${egypt.name} </div>
    <div class="egypt__detail1"> ${egypt.details.general1} </div>
    <div class="egypt__detail2"> ${egypt.details.general2} </div>
    <div><img  class="flag__image image--card" src="${egypt.flag.image}" /></div>
    <div class="egypt__cityName"> ${egypt.city.name} </div>
    <div class="egypt__cityPop">Population: ${egypt.city.population} </div>
    <div><img  class="city__image image--card" src="${egypt.city.image}" /></div>
    <div class="egypt__landmark"> ${egypt.landmark.name} </div>
    <div><img  class="landmark__image image--card" src="${egypt.landmark.image}" /></div>
    <div class="egypt__citizen"> ${egypt.citizen.name} </div>
    <div class="egypt__citizenBio"> ${egypt.citizen.bio} </div>
    <div><img  class="citizen__image image--card" src="${egypt.citizen.image}" /></div>
    <div class="egypt__fact"> ${egypt.historicalFacts.bio} </div>
    <div><img  class="fact__image image--card" src="${egypt.historicalFacts.image}" /></div>
    <div class="egypt__food"> ${egypt.food.name} </div>
    <div class="egypt__foodInfo"> ${egypt.food.description} </div>
    <div><img  class="food__image image--card" src="${egypt.food.image}" /></div>
    MORE CONTENT HERE
    `;
};
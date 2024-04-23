
import { getEgyptCitizens } from "../data/operations.js";

export const egyptCitizen = () => {

  const citizens = getEgyptCitizens();

let htmlString = '<article class>="citizenContainer">';

for (let citizen of citizens) {

  htmlString += `<section class="citizen__card">
    <div><img class = "citizen__image  image--card" src="${citizen.image}"</div>
    <div class = "citizen__name"> ${citizen.name}</div>
    <div class = "citizen__bio"> ${citizen.bio}</div>
  
  </section>`;
}

htmlString += `</article>`;

return htmlString;

};
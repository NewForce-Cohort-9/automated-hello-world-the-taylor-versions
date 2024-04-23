//TODO

import { getEgyptLandmarks } from "../data/operations.js";

export const egyptLandmark = () => {
  const landmarks = getEgyptLandmarks();

  let htmlString = '<article class="landmarkContainer">';

  for (let landmark of landmarks) {
    htmlString += `<section class="landmark__card">
    <div><img class = "landmark__image  image--card" src="${landmark.image}"</div>
    <div class = "landmark__name"> ${landmark.name}</div>
  
  </section>`;
  }

  htmlString += `</article>`;

  return htmlString;
};

// export const EgyptWhole = () => {
//   return `
//     <div class="egypt__div"> ${egypt.name} </div>
//     <div class="egypt__detail1"> ${egypt.details.general1} </div>
//     <div class="egypt__detail2"> ${egypt.details.general2} </div>
//     <div><img  class="flag__image image--card" src="${egypt.flag.image}" /></div>
//     <div class="egypt__cityName"> ${egypt.cities.name} </div>
//     <div class="egypt__cityPop">Population: ${egypt.cities.population} </div>
//     <div><img  class="city__image image--card" src="${egypt.cities.image}" /></div>
//     <div class="egypt__landmark"> ${egypt.landmarks.name} </div>
//     <div><img  class="landmark__image image--card" src="${egypt.landmarks.image}" /></div>
//     <div class="egypt__citizen"> ${egypt.citizens.name} </div>
//     <div class="egypt__citizenBio"> ${egypt.citizens.bio} </div>
//     <div><img  class="citizen__image image--card" src="${egypt.citizens.image}" /></div>
//     MORE CONTENT HERE
//     `;
// };
// }

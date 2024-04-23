import { getScotlandLandmarks } from "../data/operations.js";

export const scotlandLandmark = () => {
    
  const landmarks = getScotlandLandmarks();

  let htmlString = '<article class="landmarkContainer">';

  for (let landmark of landmarks) {

    htmlString += `<section class="landmark__card">
            <div><img class="landmark__image image--card" src="${landmark.image}" /></div>
            <div class="landmark__name"> ${landmark.name}</div>
            <div class="landmark__details">${landmark.details}</div>
        </section>
`;
  }

  htmlString += `</article>`;

  return htmlString;
};

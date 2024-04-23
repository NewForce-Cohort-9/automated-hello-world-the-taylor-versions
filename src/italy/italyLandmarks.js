import { database } from "../data/database.js";

const { italy } = database;

export const ItalyLandmarks = () => {
  let landmarkHTML = `<div class="italy__landmark-ctn">`;
  for (const landmark of italy.landmarks) {
    landmarkHTML += `<article 
    class="home__card">
        <a>
            <img
              src="${landmark.image}"
            />
          </a>
          <div class="home__card-inner">
            <h2>${landmark.title}</h2>
            <p>${landmark.description}</p>
            
          </div>
          </article>
          `;
  }
  landmarkHTML += "</div>";
  return landmarkHTML;
};

import { database } from "../data/database.js";

const { italy } = database;

export const ItalyCelebs = () => {
  let celebsHTML = `<div class="italy__landmark-ctn">`;
  for (const celeb of italy.celebrities) {
    celebsHTML += `<article class="home__card">
        <a>
            <img
              src="${celeb.image}"
            />
          </a>
          <div class="home__card-inner">
            <h2>${celeb.name}</h2>
            <h2>Age: ${celeb.age}</h2>
            <p>${celeb.bio}</p>
            
          </div>
          </article>
          `;
  }
  celebsHTML += "</div>";
  return celebsHTML;
};

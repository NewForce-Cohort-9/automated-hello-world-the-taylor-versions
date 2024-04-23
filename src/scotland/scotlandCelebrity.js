import { getScotlandCelebrities } from "../data/operations.js";

export const scotlandCelebrity = () => {
    
  const celebrities = getScotlandCelebrities();

  let htmlString = '<article class="celebrityContainer">';

  for (let celebrity of celebrities) {

    htmlString += `<section class="celebrity__card">
            <div><img class="celebrity__image image--card" src="${celebrity.image}" /></div>
            <div class="celebrity__name"> ${celebrity.name}</div>
            <div class="celebrity__details">${celebrity.details}</div>
        </section>
`;
  }

  htmlString += `</article>`;

  return htmlString;
};

import { allofScotland } from "../data/database.js";

export const allScotland = () => {
    
const scotland = allofScotland();

let htmlString = '<section id="scotland">';


    htmlString += `<section id="scotland__card">
            <div id="scotland__name">${scotland.countryName}</div>
            <div id="scotland__details">${scotland.countryDetails}</div>
            <div id="scotland__citizenName">${scotland.citizenName}</div>
            <div><img id="scotland__citizenImage image--card" src="${scotland.citizenImage}" /></div>
            <div id="scotland__citizenDetails">${scotland.citizenDetails}</div>
            <div id="scotland__landmarkName"> ${scotland.landmarkName}</div>
            <div id="scotland__landmarkImage">${scotland.landmarkImage}</div>
            <div><img id="scotland__landmarkImage image--card" src="${scotland.landmarkImage}" /></div>
            <div id="scotland__cityName">${scotland.cityName}</div>
            <div id="scotland__cityDetails">${scotland.cityDetails}</div>
            <div><img id="scotland__cityImage image--card" src="${scotland.cityImage}" /></div>
            <div id="scotland__animalName">${scotland.animalName}</div>
            <div id="scotland__animalDetails">${scotland.animalDetails}</div>
            <div><img id="scotland__animalImage image--card" src="${scotland.animalImage}" /></div>
            
        </section>
`;
  

  htmlString += `</section>`;

  return htmlString;
};
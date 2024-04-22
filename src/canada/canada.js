//TODO
import { canadaWhole } from "./data/database.js";

export const canadaWhole = () => {
    
    const canada = canadaWhole();

    
    let htmlString = '<section id="canada">';


        htmlString += `<section id="canada_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="canada__name">${canada.name}</div>
            <div class="canada__description">${canada.description}</div>
            <div class="canada__city">${canada.city.name}</div>
            <div class="canada__location">${fish.habitat}</div>
            <div class="canada__diet">${fish.food}</div>
        </section>`

      
    htmlString += `</section>`;

    return htmlString;
}

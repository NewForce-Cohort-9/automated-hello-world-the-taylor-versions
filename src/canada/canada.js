//TODO
import { canadaWhole } from "../data/database.js";

export const canadaWholeHtml = () => {
    
    const canada = canadaWhole();

    
    let htmlString = '<section id="canada">';


        htmlString += `<section id="canada_card">
            <div id="canada__name">${canada.Name}</div>
            <div id="canada__description">${canada.Description}</div>
        
        </section>`

;
    htmlString += `</section>`;

    return htmlString;
};

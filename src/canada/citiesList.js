import { getCities } from "../data/database.js"


export const cityList = () => {
    const Cities = getCities ()
    
    let htmlString = `<article class= "cityContainer">`;

    
    for (let city of Cities) {
        htmlString += `<section class = "city_card">
        <div id="city_name">${city.name}</div>
        <div id="city_details">${city.details}</div> 
        <div><img class="city_image image--card" src="${city.image}"/><div> 
    </section>`
    };

    htmlString += `<article>`;

    return htmlString
}
import { getCelebrities } from "../data/database.js"


export const celebrityList = () => {
    const Celebrities = getCelebrities ()
    
    let htmlString = `<article class= "celebrityContainer">`;

    
    for (let celebrity of Celebrities) {
        htmlString += `<section class = "celebrity_card">
        <div id="city_name">${celebrity.name}</div>
        <div id="city_details">${celebrity.details}</div> 
        <div><img class-"city_image image--card" src="${celebrity.image}"/><div>
    </section>`
    };

    htmlString += `<article>`;

    return htmlString
}
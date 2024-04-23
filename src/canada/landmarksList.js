import { getLandmarks } from "../data/database.js"


export const landmarkList = () => {
    const Landmarks = getLandmarks ()
    
    let htmlString = `<article class= "landmarkContainer">`;

    
    for (let landmark of Landmarks) {
        htmlString += `<section class = "landmark_card">
        <div id="landmark_name">${landmark.name}</div>
        <div id="landmark_details">${landmark.details}</div> 
        <div><img class-"landmark_image image--card" src="${landmark.image}"/><div>
    </section>`
    };

    htmlString += `<article>`;

    return htmlString
}
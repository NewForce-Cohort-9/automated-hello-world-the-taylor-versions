//potential country properties:
/*
description: string; 
details: string; 
mainImage: string; 
foodImage: string; 
landmarkImage: string;
historialFacts: string[]; 
citizen: {name: string, details: string, country: string}
*/

export const database = {
  italy: {
    name: "Italy",
    description: "Description here",
    //...etc
  },
  egypt: {},
  scotland: {
    countryName: "Scotland",
    countryDetails: "Scotland is a country in Europe that is part of the island of Great Britain. It is located in the northwest of Europe, to the north of England, and occupies the northern third of Great Britain. Scotland is known for its lush forests, towering mountains, vast lochs, beaches, rivers, and castles.",
    citizenName: "Karen Gillan",
    citizenDetails: "Karen Gillan was born and raised in Inverness, Scotland. She is recognized for projects such as playing Amy Pond, the companion to the 11th doctor, in the BBC's Doctor Who. She has starred in other memorable roles in Guardians of the Galaxy and Jumanji and many more." ,
    citizenImage: "https://fanxsaltlake.com/wp-content/uploads/sites/4/2020/06/FanX_2023_Karen-Gillan.jpg" ,  
    landmarkName: "Loch Ness",
    landmarkDetails: "Loch Ness is a large freshwater loch in the Scottish Highlands extending for approximately 37 kilometers (23 miles) southwest of Inverness." ,
    landmarkImage: "https://e3.365dm.com/23/08/768x432/skynews-loch-ness-monster-loch-ness_6253651.jpg?20240412090644" ,
    cityName: "Aberdeen",
    cityDetails: "Aberdeen is a port city in northeast Scotland, where the Dee and Don rivers meet the North Sea. With an offshore petroleum industry, the city is home to an international population. It's also known as the ‘Granite City’ for its many enduring grey-stone buildings. The 19th-century Marischal College is typical – a monumental Victorian landmark that’s now headquarters of the City Council. ",
    cityImage:"https://media.istockphoto.com/id/475469877/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B1%D0%B5%D1%80%D0%B4%D0%B8%D0%BD-%D1%88%D0%BE%D1%82%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=7lyIMsC9gtupfXS1dH1y_M7AEnCdbsaGPfziaxEZKtQ=",
    animalName: "Highland cow",
    animalDetails: "The Highland is a Scottish breed of rustic cattle. It originated in the Scottish Highlands and the Western Islands of Scotland and has long horns and a long shaggy coat. It is a hardy breed, able to withstand the intemperate conditions in the region.",
    animalImage: "https://cdn.shopify.com/s/files/1/2729/5392/files/IMG_0607_grande.JPG?v=1520542259",
  },
  canada: {},
};

export const allofScotland = () => {
  return database.scotland
}
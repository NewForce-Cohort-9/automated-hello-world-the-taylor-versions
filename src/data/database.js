//potential country properties:
/*
description: string; 
details: string; 
mainImage: string; 
foodImage: string; 
landmarkImage: string;
historicalFacts: string[]; 
citizen: {name: string, details: string, country: string}
*/

export const database = {
// <<<<<<< HEAD
  italy: {},
  egypt: {
    name: "Egypt",
    city: {name: "Cairo", population: "22.6 million", image: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_1920,c_limit/Cairo%20Egypt_GettyImages-1370918272.jpg"},
    details: {general1: "Population: 111 million", general2: "People settled in Egypt as early as 6000 BC",},
    landmark: {name: "The Great Pyramid of Giza", image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_GreatPyramid_0.gif"},
    citizen: {name: "Mohamed Salah", image: "https://cdn.britannica.com/91/200591-050-95794068/Mohamed-Salah-Egyptian-skills-English-Premier-League-2018.jpg", bio: "Professional Soccer player",},
    historicalFacts: {bio: "In the year 48 BC, an accidental fire at the then-acclaimed Library of Alexandria lead to the burning and destruction of over half-a-million scrolls and texts. This was one of the most disastrous events regarding humanity's journey for understanding and knowledge - so disastrous that some historians believe this set humanity back hundreds of years.", image: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531533951/180714-mcnearney-lost-masterpiece-hero_lxmbyx",},
    flag: {image: "https://cdn.britannica.com/85/185-004-1EA59040/Flag-Egypt.jpg",},
    food: {name:"Koshari", description: "Rice, Lentils, Chickpeas, and Pasta", image: "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Koshari_029_q60klq.jpg",},

  // id: number; 
  // description: string; 
  // details: string; 
  // mainImage: string; 
  // foodImage: string; 
  // landmarkImage: string;
  // historicalFacts: string[]; 
  // citizen: {name: string, details: string, country: string}

  },
// =======
//   italy: {
//     name: "Italy",
//     description: "Description here",
//     //...etc
//   },
//   egypt: {},
// >>>>>>> main
//   scotland: {},
//   canada: {},
};

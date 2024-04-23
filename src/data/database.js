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
import { italyLandsmarks } from "../italy/LandmarkDataProvider.js";

import { italyCelebritiesProvider } from "../italy/CelebritiesDataProvider.js";

//import { egyptCity } from "../egypt/egyptCities.js";


export const database = {

  italy: {
    name: "Italy",
    description:
      "Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea. Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot.",
    mainImage:
      "https://cdn.kimkim.com/files/a/images/55d7ea8718fda7b5b1c4c3a68f239c128e5b29a6/original-3e27ca9d22872719551bce400ed6a7db.jpg",
    landmarks: italyLandsmarks,
    celebrities: italyCelebritiesProvider,
    foodExample: {
      title: "Gnocchi",
      description:
        "Gnocchi are a varied family of dumpling in Italian cuisine. They are made of small lumps of dough, such as those composed of a simple combination of wheat flour, potato, egg, and salt.",
      image:
        "https://static.planeat.eco/media/item_pics/gnocchi-di-patate-speck-taleggio-600x400.jpg",
    },
  },


  egypt: {

    mainImage:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTa8W1XIgVzi_IxqgW7F3y9LFXj-hxVcdqjnmI_6JyaMLgyXU5NYpbbSm5LOGZifGBC5BoVK9ghI325Wb8tSoyReCwtdytrZts_6poKOQ",

    cities: [
    {
      name: "Cairo",
      population: "22.6 million",
      image: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_1920,c_limit/Cairo%20Egypt_GettyImages-1370918272.jpg"
    },
    {
      name: "Alexandria",
      population: "5.7 million",
      image: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-6-e1488051034873.jpg"
    },
    {
      name: "Giza",
      population: "2.4 million",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Giza-Nile.JPG",
    },
  ],
    landmarks: [
    {
      name: "The Great Pyramids of Giza",
      image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_GreatPyramid_0.gif",
    },
    {
      name: "The Great Sphinx of Giza",
      image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/EC5D/production/_131590506_gettyimages-178375366.jpg",
    },
    {
      name: "The Nile River",
      image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638891298/EducationHub/photos/women-and-children-on-the-banks-of-the-nile.jpg",
    },
  ],

    citizens: [
    {
      name: "Mohamed Salah",
      bio: "Professional Soccer player",
      image: "https://cdn.britannica.com/91/200591-050-95794068/Mohamed-Salah-Egyptian-skills-English-Premier-League-2018.jpg",
    },
    {
      name: "Rami Malek",
      bio: "Actor",
      image: "https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_.jpg",
    },
    {
      name: "Abdel Fattah El-Sisi",
      bio: "President of Egypt",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/AbdelFattah_Elsisi.jpg/640px-AbdelFattah_Elsisi.jpg",
    },
  ],
},
    // name: "Egypt",
    // city: {name: "Cairo", 
    //         population: "22.6 million", 
    //         image: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_1920,c_limit/Cairo%20Egypt_GettyImages-1370918272.jpg"},
    // city2: {name: "Alexandria",
    //         population: "5.7 million",
    //         image: "https://www.osiristours.com/wp-content/uploads/2016/06/Alexandria-6-e1488051034873.jpg",},
    // details: {general1: "Population: 111 million", 
    //         general2: "People settled in Egypt as early as 6000 BC",},
    // landmark: {name: "The Great Pyramid of Giza", 
    //         image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_GreatPyramid_0.gif"},
    // citizen: {name: "Mohamed Salah", 
    //           image: "https://cdn.britannica.com/91/200591-050-95794068/Mohamed-Salah-Egyptian-skills-English-Premier-League-2018.jpg", 
    //           bio: "Professional Soccer player",},
    // historicalFacts: {bio: "In the year 48 BC, an accidental fire at the then-acclaimed Library of Alexandria lead to the burning and destruction of over half-a-million scrolls and texts. This was one of the most disastrous events regarding humanity's journey for understanding and knowledge - so disastrous that some historians believe this set humanity back hundreds of years.", 
    //                 image: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531533951/180714-mcnearney-lost-masterpiece-hero_lxmbyx",},
    // flag: {image: "https://cdn.britannica.com/85/185-004-1EA59040/Flag-Egypt.jpg",},
    // food: {name:"Koshari", 
    //         description: "Rice, Lentils, Chickpeas, and Pasta", 
    //         image: "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Koshari_029_q60klq.jpg",},

  // id: number; 
  // description: string; 
  // details: string; 
  // mainImage: string; 
  // foodImage: string; 
  // landmarkImage: string;
  // historicalFacts: string[]; 
  // citizen: {name: string, details: string, country: string}


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


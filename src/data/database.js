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
 const database = {
 
  canada: {
    name: "Canada",
    description: "Insert description",
    city: {
      name: "Toronto",
      details: "insert string",
      image: "insert image",
    },
    landmark: {
      name: "Mac the Moose",
      details: "insert string",
      image: "insert image"
    },
    citizen:{
      name: "Justin Bieber",
      details: "insert string",
      image: "insert image",
    }
    
  },
};
export const canadaWhole = () => {
  return database.canada
}
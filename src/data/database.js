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
    name: "Scotland",
    description:"Scotland is a country in Europe that is part of the island of Great Britain. It is located in the northwest of Europe, to the north of England, and occupies the northern third of Great Britain. Scotland is known for its lush forests, towering mountains, vast lochs, beaches, rivers, and castles. Taylor Switft will bring her Eras Tour to Edinburgh in June 2024. " ;
    citizen: {
      name: "Karen Gillan",
      details: "Karen Gillan was born and raised in Inverness, Scotland. She is recognized for projects such as playing Amy Pond, the companion to the 11th doctor, in the BBC's Doctor Who. She has starred in other memorable roles in Guardians of the Galaxy and Jumanji and many more. Karen posted after listen to Taylor Swift's album Folklore, she found it delightful."
        },
    landmark: {
      name: "Loch Ness",
      location: ""
    } 
  },
  canada: {},
};

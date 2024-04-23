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
 
  // canada: {
  //   countryName: "Canada",
  //   countryDescription: "Insert description",
  //   cityName: "Toronto",
  //   cityDetails: "insert string",
  //   cityImage: "insert image",
  //   landmarkName: "Mac the Moose",
  //   landmarkDetails: "insert string",
  //   landmarkImage: "insert image",
  //   citizenName: "Justin Bieber",
  //   citizenDetails: "insert string",
  //   citizenImage: "insert image",
  //   }
 canada: {
    Name: "Canada",
    Description: "Canada is a diverse, progressive, peaceful and welcoming nation known for its pristine wilderness and stunning natural beauty. It’s vast and varied — a place for both bucket list adventure and sophisticated culture, Canada’s lively, multicultural cities contrast with the untouched wilderness at the edge of its urban centers. ",
    Cities:[
      {
        name: "Toronto",
        details: "Toronto is Canada’s largest city and a world leader in business, finance, technology, entertainment and culture. Its large population of immigrants from all over the globe has also made Toronto one of the most multicultural cities in the world.",
        image: "https://media.cntraveler.com/photos/5b2c0684a98055277ea83e26/1:1/w_2667,h_2667,c_limit/CN-Tower_GettyImages-615764386.jpg"
      }
    ],
    Landmarks: [
      {
        name: "Mac the Moose",
        details: "Mac the Moose is a steel and concrete sculpture of a moose in Moose Jaw, Saskatchewan. It is on the grounds of Moose Jaw's visitors' center, on the corner of E Thatcher Drive and the Trans-Canada Highway. It is claimed to be the world's largest moose at 10.36 metres tall and a weight of approximately 10 long tons.",
        image: "https://images.squarespace-cdn.com/content/v1/5897926b725e2590c7c6dc24/abe15193-7141-40c6-9d8d-9710123e63fd/Mac+%2B+Tutor+28.jpg"
      }

    ],
    Celebrities: [
      {
        name: "Justin Bieber",
        details: "Justin Bieber (born March 1, 1994, London, Ontario, Canada) Canadian singer and teen idol whose fresh-faced good looks and appealing pop songs sparked a global craze beginning in 2009.",
        image: "https://cdn.britannica.com/82/182082-050-C006C642/Justin-Bieber-2013.jpg"
      }

    ]
      
    }

    
  }
export const canadaWhole = () => {
  return database.canada
}

export const getCities = () => {
  return database.canada.Cities.map(city => ({...city}))
}

export const getLandmarks = () => {
  return database.canada.Landmarks.map(landmark => ({...landmark}))
}

export const getCelebrities = () => {
  return database.canada.Celebrities.map(celebrity => ({...celebrity}))
}
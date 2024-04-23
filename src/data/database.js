import { italyLandsmarks } from "../italy/LandmarkDataProvider.js";
import { italyCelebritiesProvider } from "../italy/CelebritiesDataProvider.js";
import { italyCities } from "../italy/CitiesDataProvider.js";

export const database = {
  italy: {
    name: "Italy",
    description:
      "Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea. Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot.",
    mainImage:
      "https://cdn.kimkim.com/files/a/images/55d7ea8718fda7b5b1c4c3a68f239c128e5b29a6/original-3e27ca9d22872719551bce400ed6a7db.jpg",
    landmarks: italyLandsmarks,
    celebrities: italyCelebritiesProvider,
    cities: italyCities,
    foodExample: {
      title: "Gnocchi",
      description:
        "Gnocchi are a varied family of dumpling in Italian cuisine. They are made of small lumps of dough, such as those composed of a simple combination of wheat flour, potato, egg, and salt.",
      image:
        "https://static.planeat.eco/media/item_pics/gnocchi-di-patate-speck-taleggio-600x400.jpg",
    },
  },
  egypt: {},
  scotland: {},
  canada: {},
};

import { database } from "../data/database.js";
import { ItalyLandmarks } from "./italyLandmarks.js";
import { ItalyCelebs } from "./italyCelebs.js";
import { ItalyCities } from "./italyCities.js";

const { italy } = database;

const ItalyHeader = (headerText, textAlign) => {
  return `
    <h1
    style="text-align: ${textAlign}"
    class="italy__header"
    >${headerText}</h1>`;
};

const ItalyFlex = () => {
  return `
  <div class="italy__inner">
  <img src="${italy.mainImage}" class="italy__main-img" />
  <div class="italy__para-ctn"> 
  <p class="italy__para">
  ${italy.description}
  </p>
  <p class="italy__para">
  Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the world’s most rugged mountains. 
  From the central Alps, running down the length of the country, radiates the tall Apennine Range, which widens near Rome to cover nearly the entire width of the Italian peninsula. 
  </p>
  </div> 
  </div>
  `;
};

export const ItalyWhole = () => {
  return `
  ${ItalyHeader(italy.name, "center")}
  ${ItalyFlex()}
  ${ItalyHeader("Landmarks", "start")}
  ${ItalyLandmarks()}
  ${ItalyHeader("Cities", "center")}
  ${ItalyCities()}
  ${ItalyHeader("Italian Celebrities (sort of)", "start")}
  ${ItalyCelebs()}
  `;
};

import { database } from "../data/database.js";

const { italy } = database;

const ItalyHeader = () => {
  return `
    <h1
    class="italy__header"
    >${italy.name}</h1>`;
};

const ItalyFlex = () => {
  return `
  <div class="italy__inner">
  ${ItalyHeader()}
  <div class="italy__bio">
  <img src="${italy.mainImage}" class="italy__img" />
  <p class="italy__para">
  ${italy.description}
  </p>
  </div>
  </div>
  `;
};

export const ItalyWhole = () => {
  return `
  ${ItalyFlex()}
  `;
};

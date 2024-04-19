import { database } from "../data/database.js";

const { italy } = database;

const ItalyHeader = () => {
  return `
    <div
    class="italy__div"
    >${italy.name} MORE CONTENTS HERE</div>`;
};

export const ItalyWhole = () => {
  return `
    ${ItalyHeader()}
    MORE CONTENT HERE
    `;
};

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
  scotland: {
    celebrities: [
      {
        id: 1,
        name: "Karen Gillan",
        details:
          "Karen Gillan was born and raised in Inverness, Scotland. She is recognized for projects such as playing Amy Pond, the companion to the 11th doctor, in the BBC's Doctor Who. She has starred in other memorable roles in Guardians of the Galaxy and Jumanji and many more.",
        image:
          "https://fanxsaltlake.com/wp-content/uploads/sites/4/2020/06/FanX_2023_Karen-Gillan.jpg",
      },
      {
        id: 2,
        name: "Rose Leslie",
        details:
          "Rose Eleanor Arbuthnot-Leslie is a Scottish actress. She is known for her roles as Gwen Dawson in the ITV drama series Downton Abbey and Ygritte in the HBO fantasy series Game of Thrones.",
        image:
          "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/294759484_472293268059688_6959451605640874517_n.jpg",
      },
      {
        id: 3,
        name: "Kelly MacDonald",
        details:
          "Kelly MacDonald was born in Glasgow. She has received various accolades including a BAFTA Award, a Primetime Emmy Award, and four Screen Actors Guild Awards. She as staring roles in Elizabeth, Trainspotting, Harry Potter and the Deathly Hallows, and Brave.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZvWwABtv4mL9RavQUOt4C6n7gINke-djw2kTmP-eag&s",
      },
    ],
    landmarks: [
      {
        id: 1,
        name: "Loch Ness",
        details:
          "Loch Ness is a large freshwater loch in the Scottish Highlands extending for approximately 37 kilometers (23 miles) southwest of Inverness.",
        image:
          "https://cdn.britannica.com/52/94952-050-9335C99C/Urquhart-Castle-Loch-Ness-Scotland.jpg",
      },
      {
        id: 2,
        name: "The Kelpies",
        details:
          "The Kelpies are a pair of monumental steel horse-heads located in the Helix park between the Scottish towns of Falkirk and Grangemouth but the Kelpies themselves are situated in Grangemouth. They stand next to the M9 motorway and form the eastern gateway of the Forth and Clyde Canal, which meets the River Carron here. Each head is 30 metres (98 ft) high.",
        image: "https://travscotland.com/img/post_kelpies/kelpiesPortrait.jpg",
      },
      {
        id: 3,
        name: "Glenfinnan Viaduct",
        details:
          "The Glenfinnan Viaduct is a railway viaduct on the West Highland Line in Glenfinnan, Inverness-shire, Scotland, built from 1897 to 1901. Located at the top of Loch Shiel in the West Scottish Highlands, the viaduct overlooks the Glenfinnan Monument and the waters of Loch Shiel.",
        image:
          "https://d1xw84ija6gjgy.cloudfront.net/production/2784c762da784d9adece645ff9e61637/conversions/720p.jpg",
      },
    ],
    cities: [
      {
        id: 1,
        name: "Aberdeen",
        details:
          "Aberdeen is a port city in northeast Scotland, where the Dee and Don rivers meet the North Sea. With an offshore petroleum industry, the city is home to an international population. It's also known as the ‘Granite City’ for its many enduring grey-stone buildings. The 19th-century Marischal College is typical – a monumental Victorian landmark that’s now headquarters of the City Council.",
        image:
          "https://greatruns.com/wp-content/uploads/2019/12/Aberdeen-2-700x467.jpg",
      },
      {
        id: 2,
        name: "Inverness",
        details:
          "Inverness is a city on Scotland’s northeast coast, where the River Ness meets the Moray Firth. It's the largest city and the cultural capital of the Scottish Highlands. Its Old Town features 19th-century Inverness Cathedral, the mostly 18th-century Old High Church and an indoor Victorian Market selling food, clothing and crafts. The contemporary Inverness Museum and Art Gallery traces local and Highland history.",
        image:
          "https://www.thechaoticscot.com/wp-content/uploads/2018/06/Inverness-0422-1050x700.jpg",
      },
      {
        id: 3,
        name: "Edinburgh",
        details:
          "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials. ",
        image:
          "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      },
    ],
  },
  canada: {},
};

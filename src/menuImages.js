import tangyWings from "./images/tangy-wings.jpg";
import fullRackRibs from "./images/full-rack-ribs.jpg";
import avocadoSalad from "./images/avocado-salad.jpg";
import grilledSalmon from "./images/grilled-salmon.jpg";
import grilledChicken from "./images/grilled-chicken.jpg";
import spaghetti from "./images/spaghetti.jpg";
import ravioli from "./images/ravioli.jpg";
import lambChops from "./images/lamb-chops.jpg";
import ratatouille from "./images/ratatouille.jpg";
import tomahawkSteak from "./images/tomahawk-steak.jpg";

const foodImagesArray = [
  {
    name: "Tangy Wings",
    image: tangyWings,
    description: "Fresh chicken, sautéed in a tangy, rich sauce.",
  },
  {
    name: "Full Rack of Ribs",
    image: fullRackRibs,
    description:
      "Slow-cooked to perfection, slathered in a smoky, tangy barbecue sauce.",
  },
  {
    name: "Avocado Salad",
    image: avocadoSalad,
    description:
      "Fresh avocado slices tossed with crisp greens, cherry tomatoes, and a zesty citrus dressing.",
  },
  {
    name: "Grilled Salmon",
    image: grilledSalmon,
    description:
      "Perfectly grilled salmon fillet, seasoned with herbs and served with a lemon butter glaze.",
  },
  {
    name: "Grilled Chicken",
    image: grilledChicken,
    description:
      "Juicy, marinated chicken breast grilled to perfection, served with a savory herb sauce.",
  },
  {
    name: "Spaghetti",
    image: spaghetti,
    description:
      "Classic Italian pasta tossed in a rich, slow-simmered tomato sauce with aromatic herbs.",
  },
  {
    name: "Ravioli",
    image: ravioli,
    description:
      "Delicate pasta pockets filled with creamy ricotta and spinach, topped with a light marinara sauce.",
  },
  {
    name: "Lamb Chops",
    image: lambChops,
    description:
      "Tender, succulent lamb chops, grilled and served with a fragrant rosemary-infused sauce.",
  },
  {
    name: "Ratatouille",
    image: ratatouille,
    description:
      "A rustic French vegetable medley, slow-cooked with herbs and a flavorful tomato base.",
  },
  {
    name: "Tomahawk Steak",
    image: tomahawkSteak,
    description:
      "A massive, bone-in ribeye, perfectly seared and seasoned for a bold, juicy flavor.",
  },
];

export default foodImagesArray;

// made a separate file to not make the menu.js file too long with import statements

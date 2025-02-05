import "./menu.css";

import foodImagesArray from "./menuImages";
class Menu {
  init() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    for (let i = 0; i < foodImagesArray.length; i++) {
      const menuCard = document.createElement("div");
      menuCard.classList.add("menu-card");

      const menuCardName = document.createElement("h1");
      menuCardName.textContent = foodImagesArray[i].name;

      const menuCardImage = document.createElement("img");
      menuCardImage.src = foodImagesArray[i].image;

      const menuCardDescription = document.createElement("p");
      menuCardDescription.textContent = foodImagesArray[i].description;

      menuCard.appendChild(menuCardName);
      menuCard.appendChild(menuCardImage);
      menuCard.appendChild(menuCardDescription);

      menuDiv.appendChild(menuCard);
    }

    content.appendChild(menuDiv);
  }
}

export default Menu;

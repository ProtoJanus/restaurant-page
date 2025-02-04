import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

class Navbar {
  init() {
    const classMap = {
      home: Home,
      menu: Menu,
      contact: Contact,
    };

    const nav = document.createElement("nav");
    const header = document.createElement("header");

    const navBranding = document.createElement("div");
    navBranding.classList.add("nav-branding");
    navBranding.textContent = "Sophisticates";

    const navMenu = document.createElement("div");
    navMenu.classList.add("nav-menu");

    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    for (let i = 0; i < 3; i++) {
      const hamburgerSpan = document.createElement("span");
      hamburgerSpan.classList.add("bar");

      hamburger.appendChild(hamburgerSpan);
    }

    const navMenuButtonText = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
      const navMenuButton = document.createElement("button");
      navMenuButton.classList.add("nav-item");
      navMenuButton.textContent = navMenuButtonText[i];

      navMenuButton.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        let className = navMenuButton.textContent.toLowerCase();
        classMap[className].init();
      });

      navMenu.appendChild(navMenuButton);
    }

    nav.appendChild(navBranding);
    nav.appendChild(navMenu);
    nav.appendChild(hamburger);

    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);
  }
}

export default Navbar;

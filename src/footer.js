class Footer {
  init() {
    const footer = document.createElement("footer");
    footer.textContent = "Call at ";

    const footerNumber = document.createElement("div");
    footerNumber.classList.add("footer-number");
    footerNumber.textContent = "555 - 555 - 5555";

    footer.appendChild(footerNumber);
    document.body.appendChild(footer);
  }
}

export default Footer;

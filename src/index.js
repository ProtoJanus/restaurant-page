import "./styles.css";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
);

const carouselButton = document.querySelectorAll(".carousel-button");
carouselButton.forEach((button) => {
  button.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex((item) =>
      item.classList.contains("active")
    );

    slides[activeIndex].classList.remove("active");
    let nextIndex = (activeIndex + 1) % slides.length;

    slides[nextIndex].classList.add("active");
  });
});

import highEndCafe from "./images/high-end-cafe.jpg";
import pastaDish from "./images/pasta-dish.jpg";
import steakSliced from "./images/steak-sliced.jpg";

class Home {
  init() {
    const content = document.querySelector("#content");

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const buttonPrev = document.createElement("button");
    buttonPrev.classList.add("carousel-button");
    buttonPrev.classList.add("prev");
    buttonPrev.innerHTML = "&#8656;";

    const buttonNext = document.createElement("button");
    buttonNext.classList.add("carousel-button");
    buttonNext.classList.add("next");
    buttonNext.innerHTML = "&#8658;";

    const slides = document.createElement("ul");
    slides.classList.add("slides");

    const slideOne = document.createElement("li");
    slideOne.classList.add("slide");
    slideOne.classList.add("slide-one");
    slideOne.classList.add("active");

    const slideInfoOne = document.createElement("div");
    slideInfoOne.classList.add("slide-info");

    const slideOneTextOne = document.createElement("div");
    slideOneTextOne.textContent = "New Deals";
    const slideOneTextTwo = document.createElement("div");
    slideOneTextTwo.textContent = "Daily";
    const slideOneButton = document.createElement("button");
    slideOneButton.textContent = "View Menu";

    const slideOneImage = document.createElement("img");
    slideOneImage.src = highEndCafe;
    slideOneImage.alt = "High end cafe";

    slideOne.appendChild(slideInfoOne);
    slideInfoOne.appendChild(slideOneTextOne);
    slideInfoOne.appendChild(slideOneTextTwo);
    slideInfoOne.appendChild(slideOneButton);
    slideOne.appendChild(slideOneImage);

    slides.appendChild(slideOne);

    const slideTwo = document.createElement("li");
    slideTwo.classList.add("slide");
    slideTwo.classList.add("slide-two");

    const slideInfoTwo = document.createElement("div");
    slideInfoTwo.classList.add("slide-info");

    const slideInfoTwoTextOne = document.createElement("div");
    slideInfoTwoTextOne.classList.add("slide-two-text-one");
    slideInfoTwoTextOne.textContent = "World Famous";
    const slideInfoTwoTextTwo = document.createElement("div");
    slideInfoTwoTextTwo.classList.add("slide-two-text-two");
    slideInfoTwoTextTwo.textContent = "Michelin Star Pasta";

    const slideTwoImage = document.createElement("img");
    slideTwoImage.src = pastaDish;
    slideTwoImage.alt = "Pasta dish";

    slideTwo.appendChild(slideInfoTwo);
    slideInfoTwo.appendChild(slideInfoTwoTextOne);
    slideInfoTwo.appendChild(slideInfoTwoTextTwo);
    slideTwo.appendChild(slideTwoImage);

    slides.appendChild(slideTwo);

    const slideThree = document.createElement("li");
    slideThree.classList.add("slide");
    slideThree.classList.add("slide-three");

    const slideInfoThree = document.createElement("div");
    slideInfoThree.classList.add("slide-info");
    const slideInfoThreeTextOne = document.createElement("div");
    slideInfoThreeTextOne.classList.add("slide-three-text-one");
    slideInfoThreeTextOne.textContent = "Steak Night";
    const slideInfoThreeTextTwo = document.createElement("div");
    slideInfoThreeTextTwo.classList.add("slide-three-text-two");
    slideInfoThreeTextTwo.textContent = "Every first thursday of the month";

    const slideThreeImage = document.createElement("img");
    slideThreeImage.src = steakSliced;
    slideThreeImage.alt = "Steak sliced";

    slideThree.appendChild(slideInfoThree);
    slideInfoThree.appendChild(slideInfoThreeTextOne);
    slideInfoThree.appendChild(slideInfoThreeTextTwo);
    slideThree.appendChild(slideThreeImage);

    slides.appendChild(slideThree);

    content.innerHTML = "";

    content.appendChild(carousel);
    carousel.appendChild(buttonPrev);
    carousel.appendChild(buttonNext);
    carousel.appendChild(slides);

    const carouselButtons = document.querySelectorAll(".carousel-button");
    carouselButtons.forEach((button) => {
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
  }
}

export default Home;

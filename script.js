import anime from "./node_modules/animejs/lib/anime.es.js";

const imageContainers = document.querySelectorAll(".img-container");
const images = document.querySelector(".images");

const options = {
  root: images,
  rootMargin: "0px",
  threshold: 1,
};
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 1) {
      entry.target.classList.remove("inactive");
      console.log(entry);
    } else {
      entry.target.classList.add("inactive");
    }
  });
}, options);

imageContainers.forEach((container, index) => {
  if (index === 1) {
    container.style.transform = `translateX(-650px)`;
  } else if (index % 2 === 0) {
    container.style.transform = `translate(${index * 325}px)`;
  } else if (index % 2 !== 0) {
    container.style.transform = `translateX(-${index * 325 + 325}px)`;
  }

  io.observe(container);
});
// console.dir(images);
// console.dir(imageContainers[0]);

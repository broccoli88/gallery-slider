const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const io = new IntersectionObserver((entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.firstElementChild.src =
        entry.target.firstElementChild.dataset.src;

      io.unobserve(entry.target);
    }
  });
}, options);

const boxes = document.querySelectorAll(".img-container");
boxes.forEach((box) => {
  io.observe(box);
});

// CHANGE LAYOUT

const oneColumnButton = document.querySelectorAll(".btn")[0];
const twoColumnButton = document.querySelectorAll(".btn")[1];
const threeColumnButton = document.querySelectorAll(".btn")[2];
const gallery = document.querySelector(".one-column");

oneColumnButton.addEventListener("click", () => {
  if (gallery.classList.contains("one-column")) return;
  gallery.classList.add("one-column");
  gallery.classList.remove("two-columns");
  gallery.classList.remove("three-columns");
});

twoColumnButton.addEventListener("click", () => {
  if (gallery.classList.contains("two-columns")) return;
  gallery.classList.add("two-columns");
  gallery.classList.remove("one-column");
  gallery.classList.remove("three-columns");
});

threeColumnButton.addEventListener("click", () => {
  if (gallery.classList.contains("three-columns")) return;
  gallery.classList.add("three-columns");
  gallery.classList.remove("two-columns");
  gallery.classList.remove("one-column");
});

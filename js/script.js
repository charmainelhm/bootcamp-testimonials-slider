"use strict";

const photos = document.querySelectorAll(".testimonial__photo");
const contents = document.querySelectorAll(".testimonial__content");
const slider = document.querySelector(".slider__buttons");

slider.addEventListener("click", function () {
  for (const photo of photos) {
    photo.classList.toggle("testimonial__photo--active");
  }

  for (const content of contents) {
    content.classList.toggle("testimonial__content--active");
  }
});

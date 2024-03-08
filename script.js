"use strict";

let selected = null;

const ratings = document.querySelector(".interactive-rating-card__rating");
const selectedRating = document.querySelector("#selected");
const interactiveCard = document.querySelector(".interactive-rating-card");
const thankYouCard = document.querySelector(".thank-you-card");

const submitBtn = document.querySelector("button");

ratings.addEventListener("click", function (e) {
  const elem = e.target.closest(".circle");

  // Remove all active class on ratings
  document.querySelectorAll(".circle").forEach(function (elem) {
    elem.classList.remove("active");
  });

  selected = elem.dataset.rating;
  elem.classList.add("active");
});

submitBtn.addEventListener("click", function (e) {
  if (selected) {
    interactiveCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");

    selectedRating.textContent = `You selected ${selected} out of 5`;
  } else {
    alert("Oh-uh. You can't submit without giving a rating");
  }
});

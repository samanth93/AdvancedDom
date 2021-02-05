"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// selector means class and a "."
const theHeader = document.querySelector(".header");
// This will give node list not htmlcollection
const allSections = document.querySelectorAll(".section");
console.log(allSections);
console.log(document.getElementById("section--1"));
// This returns html collections, which will return update the dom automatically if any change is there
const allBtns = document.getElementsByTagName("button");
console.log(allBtns);
// we will not pass a "."
const allBtnsByClass = document.getElementsByClassName("btn");
console.log(allBtnsByClass);

//Creating and inserting elements
// To add html to exixting html, review previous bankist app
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  "We use cookies for improved functionality and analytics <button class='btn btn--close-cookie'>Got it!</button>";
// Dom element is unique so it exixts at only at one place at one time
// Adds as a first child
theHeader.prepend(message);
// Adds as a last child
theHeader.append(message);

// To make it exist at two places we need to clone it
// theHeader.append(message.cloneNode(true));

// adds as siblings
// theHeader.before(message);
// theHeader.after(message);

// Delete an HTML element
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

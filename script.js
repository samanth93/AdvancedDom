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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// selector means class and a "." or id and "#"
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
  // this is latest
  // .addEventListener("click", () => message.remove());
  .addEventListener("click", () => message.parentElement.removeChild(message));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Attributes, in js all the properties of a tag are called attributes, id, class, src, alt etc.,.
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non standard
// it wont work, the getAttribute should be used
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
// inspect and check
logo.setAttribute("Company", "JVS");

//  Absolute url
console.log(logo.src);
// Relative url
console.log(logo.getAttribute("src"));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Scroll functionality
const btnScrollTo = document.querySelector(".btn--scroll-to");
const sectionOne = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function (e) {
  // to get coordinates
  const s1coords = sectionOne.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect);
  console.log("Current Scroll X/Y", window.pageXOffset, window.pageYOffset);
  // this alone wont work
  // window.scrollTo(s1coords.left, s1coords.top);
  // so
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // This works
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // new way of scrolling
  sectionOne.scrollIntoView({ behavior: "smooth" });
});

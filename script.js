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
// Below is not a good way we can use event delegation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(this);
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    console.log(e.target.getAttribute("href"));
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// selector means class and a "." or id and "#" or tag name
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
message.style.width = "100%";

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  clicked.classList.add("operations__tab--active");
  console.log(e.target);
});
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

// Events and Eventhandlers, refer MDN docs for more event handlers
const h1 = document.querySelector("h1");
const alertFun = () => {
  // alert("hi");
  h1.removeEventListener("mouseenter", alertFun);
};
h1.addEventListener("mouseenter", alertFun);

// const randomInt = (min, max) => Math.floor(Math.random() * max);
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };
// document.querySelector(".nav__item").addEventListener("click", function (e) {
//   console.log(3);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log(2);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log(1);
//   this.style.backgroundColor = randomColor();
// });

// DOM traversing downwards

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
// h1.children[0].innerText = "helo";
console.log(h1.children);
console.log(h1);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// DOM traversing upwards
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest(".header"));
// find the parent , which is closest header element for const h1
console.log(h1.closest(".header"));
// find the parent , which is closest h1 element for const h1
console.log(h1.closest("h1"));

// Going sideways, for some reason in js we can only select direct siblings
console.log(h1.previousElementSibling);
console.log(h1.previousSibling);
// these will give nodes
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
console.log(h1.parentElement.childNodes);

[...h1.parentElement.children].forEach(function (el) {
  console.log(el === h1);
  if (el !== h1) {
    el.style.color = "purple";
  }
});

"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
// const exampleDiv = document.querySelector(".example-div");

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
// Menu fade navigation
// mouse over bubbles
const handleMouseHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener("mouseover", function (e) {
  handleMouseHover(e, 0.5);
});
nav.addEventListener("mouseout", function (e) {
  handleMouseHover(e, 1);
});
// const handleMouseHover = function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");
//     siblings.forEach(function (el) {
//       console.log(el);
//       console.log(link);
//       if (el !== link) {
//         el.style.opacity = this;
//       }
//     });
//     logo.style.opacity = this;
//   }
// };
// nav.addEventListener("mouseover", handleMouseHover.bind(0.5));
// nav.addEventListener("mouseout", handleMouseHover.bind(1));
console.log(sectionOne.getBoundingClientRect().top);
window.addEventListener("scroll", function () {
  if (window.scrollY > sectionOne.getBoundingClientRect().top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
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

// Event delegation vs foreach
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  const operationTab = `.operations__content--${clicked.getAttribute(
    "data-tab"
  )}`;
  console.log(operationTab);
  console.log(clicked.getAttribute("data-tab"));
  console.log(clicked);
  console.log(e.target);
  if (!clicked) return;
  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate the content area
  tabsContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  document
    .querySelector(operationTab)
    .classList.add("operations__content--active");
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

const Person = function (firstName, dob) {
  console.log(this);
  this.firstName = firstName;
  this.dob = dob;
};
Person.prototype.calcAge = function () {
  console.log(2021 - this.dob);
};
const sam = new Person("Samanth", 1993);
const rajiv = new Person("Rajiv", 1997);
console.log(sam);
console.log(sam.calcAge());
console.log(rajiv.calcAge());
console.log(Person.prototype);
console.log(sam.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(sam));
// This below function will give prototype of sam, which is prototype propert of Person.prototype
console.log(sam.__proto__);
// Main object
console.log(sam.__proto__.__proto__);
// This is called prototype chaining
console.log(sam.__proto__.__proto__.__proto__);
//  But not a good way to change system objects
Array.prototype.getUnique = function () {
  return [...new Set(this)];
};
const arr = [1, 2, 3, 4, 5, 6, 66, 6, 4, 3, 2, 1];
console.log(arr.getUnique());
// open and check __proto you will the chain(Beauty!!)
console.dir(h1);
console.dir(document);
// ################################################################################
// class expression
// const VehicleClass = class{

// }
//class declaration
class VehicleClass {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  // If we add functions here it will be added to protytype property, instance methds
  getObjString() {
    return `${this.name} ${this.model}`;
  }
  get getName() {
    return this.name;
  }
  // static methods
  static hey() {
    console.log("HEy there!!");
    console.log(this);
  }
}
const civic = new VehicleClass("Honda Civic", "Sedan");
console.log(civic);
console.log(civic.getObjString());
console.log(civic.__proto__ == VehicleClass.prototype);
console.log(civic.getName);
VehicleClass.hey();
// console.log(civic.hey());

// for function baed static functions
Person.heyTwo = function () {
  console.log(
    "This is function based statc method, not inherited to any objects"
  );
  console.log(this);
};
Person.heyTwo();
// #############################################
// Implementing Object.create, it is used to attach the prototype propery explicitly
// Basically below function is prototype function
const PersonProto = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
  showFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const thirdMethod = Object.create(PersonProto);
thirdMethod.init("sam", "sid");
console.log(thirdMethod.showFullName());
console.log();
console.log(thirdMethod.__proto__ == PersonProto);
// #############################################
// Inheritance in js
const Company = function (companyName, location) {
  this.companyName = companyName;
  this.location = location;
};
Company.prototype.getLocation = function () {
  return this.location;
};
// In the below code this represents object which is calling this function, which is emp(initially it is empty obj, created by new keyword)
const Employee = function (companyName, location, firstName, lastName) {
  Company.call(this, companyName, location);
  this.firstName = firstName;
  this.lastName = lastName;
};
// Linking prototypes for prototype chaining
Employee.prototype = Object.create(Company.prototype);
Employee.prototype.getFullName = function () {
  return this.firstName;
};
const emp = new Employee("flsmidth", "chennai", "samanth", "sidhabathuni");
console.log(emp.getFullName());
console.log(emp.getLocation());
console.log(emp instanceof Employee);
console.log(emp instanceof Company);
console.log(emp instanceof Object);
// Inheritence using js class ES6
class CompanyClass {
  constructor(companyName, location) {
    this.companyName = companyName;
    this.location = location;
  }
  getLocation() {
    return this.location;
  }
}
// #############################################
// inthe below code super keyword should be just below the class declaration, because it has define the this keyword
class EmployeeClass extends CompanyClass {
  constructor(companyName, location, firstName, lastName) {
    super(companyName, location);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName;
  }
}
const emp2 = new EmployeeClass(
  "flsmidth",
  "chennai",
  "samanth",
  "sidhabathuni"
);
console.log(emp2.getFullName());
console.log(emp2.getLocation());
console.log(emp2 instanceof EmployeeClass);
console.log(emp2 instanceof CompanyClass);
console.log(emp2 instanceof Object);
// #############################################
// Inheritence using Object.create(basically it is used to attach prototype to the object)
const someRandomPrototype = {
  funcOne(valueOne, valueTwo) {
    this.valueOne = valueOne;
    this.valueTwo = valueTwo;
  },
  funcTwo() {
    return "This is function two";
  },
};
const someRandomObject = Object.create(someRandomPrototype);
const someRandomObjectTwo = Object.create(someRandomObject);
// #############################################
// AJAX call
const getCountryData = function (country) {
  const req = new XMLHttpRequest();
  console.log(req);
  req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<div>${data.name}<div>`;
    nav.insertAdjacentHTML("beforeend", html);
  });
};
// getCountryData("india");
// getCountryData("portugal");
// #############################################
//Sequence of AJAX call
const renderCountry = function (data) {
  const html = `<div>${data.name}<div>`;
  nav.insertAdjacentHTML("beforeend", html);
};
const getNeighbouringCountryData = function (country) {
  const req = new XMLHttpRequest();
  console.log(req);
  req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    const [code] = data.borders;
    console.log(code);
    const reqTwo = new XMLHttpRequest();
    reqTwo.open("GET", `https://restcountries.eu/rest/v2/alpha/${code}`);
    reqTwo.send();
    reqTwo.addEventListener("load", function () {
      console.log(this.responseText);
      const data = JSON.parse(this.responseText);
      console.log(data.name);
      renderCountry(data);
    });
  });
};
getNeighbouringCountryData("portugal");

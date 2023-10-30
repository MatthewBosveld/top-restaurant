import initializeWebsite, { createMainContainer } from "./page-load";
import { createNavbar, createNavItems, getNavItems } from "./page-load";
import { createMenu } from "./menu";
import { createHome } from "./home";

import "./style.css";

initializeWebsite();

// Tab Switching

// Nav Buttons

const navHome = document.getElementById("nav-home");
const navMenu = document.getElementById("nav-menu");
const navContact = document.getElementById("nav-contact");

navHome.addEventListener("click", function () {
  if (tabCheck(this)) {
    return;
  } else {
    switchTab(this.getAttribute("target-tab"));
  }
});
navMenu.addEventListener("click", function () {
  if (tabCheck(this)) {
    return;
  } else {
    switchTab(this.getAttribute("target-tab"));
  }
});
navContact.addEventListener("click", function () {
  if (tabCheck(this)) {
    return;
  } else {
    switchTab(this.getAttribute("target-tab"));
  }
});

// Home buttons

function addHomeTabEventListeners() {
  const menuButton = document.getElementById("hero-menu-btn");
  const bookButton = document.getElementById("hero-book-btn");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      switchTab(this.getAttribute("target-tab"));
    });
  }

  if (bookButton) {
    bookButton.addEventListener("click", function () {
      console.log("click book hero");
      // switchTab() commented out because there is no book page (yet)
    });
  }
}

// Switch Tab Logic
//! what if i just put all of this in a class/object? so general scope is not clogged with these variables

const mainContainer = document.getElementById("main-container");
let currentTab = "home"; // Set to home by default, as home is the landing page

function tabCheck(thisElement) {
  const targetTab = thisElement.getAttribute("target-tab");
  if (currentTab === targetTab) {
    return true;
  }
}

function switchTab(targetTab) {
  clearMain();

  if (targetTab === "home") {
    appendNewTab(mainContainer, createHome());

    currentTab = targetTab;
  }
  if (targetTab === "menu") {
    appendNewTab(mainContainer, createMenu());
    currentTab = targetTab;
  }
  if (targetTab === "contact") {
    //   appendNewTab(mainContainer, createContact());
    currentTab = targetTab;
  }
}

function appendNewTab(mainContainer, targetTabFunc) {
  mainContainer.appendChild(targetTabFunc);
  addHomeTabEventListeners();
}

function clearMain() {
  while (mainContainer.firstElementChild) {
    mainContainer.firstElementChild.remove();
  }
}

export { appendNewTab };

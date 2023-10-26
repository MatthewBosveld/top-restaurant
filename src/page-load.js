import { createHome } from "./home";
import { createMenu } from "./menu";

// Header
function createHeader() {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header-container");

  const navbar = createNavbar();
  headerContainer.appendChild(navbar);

  document.body.appendChild(headerContainer);

  return headerContainer;
}

// Nav
function createNavbar() {
  const navbar = document.createElement("nav");

  const navItems = createNavItems();
  navbar.appendChild(navItems);

  return navbar;
}

function createNavItems() {
  const navItemsArray = ["Home", "Menu", "Contact"];
  const navItemsContainer = document.createElement("div");
  navItemsContainer.classList.add("nav-items");

  navItemsArray.forEach((item) => {
    const navItem = document.createElement("p");
    navItem.textContent = item;
    navItemsContainer.appendChild(navItem);
  });

  return navItemsContainer;
}

// Main
function createMainContainer() {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");
  document.body.appendChild(mainContainer);

  return mainContainer;
}
function appendCurrentTab(mainContainer, currentTab) {
  mainContainer.appendChild(currentTab);
}

// Footer
function createFooter() {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer-container");
  document.body.appendChild(footerContainer);

  return footerContainer;
}

// Page creation
function initializeWebsite() {
  const header = createHeader();
  const main = createMainContainer();
  const home = appendCurrentTab(main, createHome());
  const footer = createFooter();

  return { header, main };
}
export default initializeWebsite;
// add all into one initializeWebsite() function that runs on page load in index.js, starting with home.
// import createHome() from home.js to run inside of initializeWebsite, and set the contents.

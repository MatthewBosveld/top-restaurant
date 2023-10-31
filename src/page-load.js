import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { appendNewTab } from "./index";

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
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    const itemLowercase = item.toLowerCase();
    navItem.setAttribute("id", `nav-${itemLowercase}`);
    navItem.setAttribute("target-tab", `${itemLowercase}`);
    navItem.textContent = item;
    navItemsContainer.appendChild(navItem);
  });

  return navItemsContainer;
}

function getNavItems() {
  return createNavItems().childNodes;
}

// Main
function createMainContainer() {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");
  mainContainer.setAttribute("id", "main-container");
  document.body.appendChild(mainContainer);

  return mainContainer;
}

// Footer
function createFooter() {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer-container");

  const footerCopyright = document.createElement("p");
  footerCopyright.textContent = "© 2023 Red Dragon Sushi";
  footerContainer.appendChild(footerCopyright);

  const footerCreated = document.createElement("p");
  footerCreated.textContent = "Created by Matthew Bosveld";
  footerContainer.appendChild(footerCreated);

  document.body.appendChild(footerContainer);

  return footerContainer;
}

// Page creation (landing on home)
function initializeWebsite() {
  const header = createHeader();
  const main = createMainContainer();
  const home = appendNewTab(main, createContact()); //! set to Menu/Contact for testing. Set to Home when done.
  const footer = createFooter();

  return { header, main };
}
export default initializeWebsite;
export { createNavbar, createNavItems, getNavItems, createMainContainer };

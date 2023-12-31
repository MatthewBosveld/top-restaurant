import logo from "./img/logo.png";

export function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  //! add id

  const backgroundImg = createBackgroundImg();
  homeContainer.appendChild(backgroundImg);

  const hero = createHero();

  homeContainer.appendChild(hero);
  return homeContainer;
}

function createBackgroundImg() {
  const backgroundImgContainer = document.createElement("div");
  backgroundImgContainer.classList.add("background-img");

  return backgroundImgContainer;
}

function createHero() {
  const hero = document.createElement("div");
  hero.classList.add("hero-container");

  const heroLogo = createHeroLogo();
  hero.appendChild(heroLogo);

  const heroText = createHeroText();
  hero.appendChild(heroText);

  const heroButtons = createHeroButtons();
  hero.appendChild(heroButtons);

  return hero;
}

function createHeroLogo() {
  const heroLogo = document.createElement("img");
  heroLogo.classList.add("hero-logo");
  heroLogo.src = logo;

  return heroLogo;
}

function createHeroText() {
  const heroTextContainer = document.createElement("div");
  heroTextContainer.classList.add("hero-text-container");

  const heroWelcome = document.createElement("h2");
  heroWelcome.classList.add("hero-welcome");
  heroWelcome.textContent = "Croeso i";

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("hero-title");
  heroTitle.textContent = "Red Dragon Sushi";

  heroTextContainer.appendChild(heroWelcome);
  heroTextContainer.appendChild(heroTitle);

  return heroTextContainer;
}

function createHeroButtons() {
  //! add id's to buttons for eventlisteners etc

  const heroButtonContainer = document.createElement("div");
  heroButtonContainer.classList.add("hero-button-container");

  const heroMenuBtn = document.createElement("button");
  heroMenuBtn.classList.add("hero-menu-btn");
  heroMenuBtn.setAttribute("id", "hero-menu-btn");
  heroMenuBtn.setAttribute("target-tab", "menu");
  heroMenuBtn.textContent = "View our menu";

  const heroBookBtn = document.createElement("button");
  heroBookBtn.classList.add("hero-book-btn");
  heroBookBtn.setAttribute("id", "hero-book-btn");
  heroBookBtn.textContent = "Book a table";

  heroButtonContainer.appendChild(heroMenuBtn);
  heroButtonContainer.appendChild(heroBookBtn);

  return heroButtonContainer;
}

//! where to add eventlisteners? index.js? this is just to create everything?

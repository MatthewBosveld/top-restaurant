export function createMenu() {
  // menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  //logo
  const menuLogo = createMenuLogo();
  menuContainer.appendChild(menuLogo);

  //content container + categories + items
  const menuContent = createMenuContent();
  menuContainer.appendChild(menuContent);

  return menuContainer;
}

function createMenuLogo() {
  const menuLogo = document.createElement("img");
  menuLogo.src = "./img/logo.png";
  menuLogo.classList.add("menu-logo");

  return menuLogo;
}

function createMenuContent() {
  const menuContentContainer = document.createElement("div");
  menuContentContainer.classList.add("menu-content-container");

  const menuCategoryArray = ["Specials", "Maki", "Nigiri", "Uramaki", "Sides"];
  //! make categories into objects (name + desc)

  menuCategoryArray.forEach((category) => {
    //create category container
    const menuCategoryContainer = document.createElement("div");
    menuCategoryContainer.classList.add("menu-category-container");

    //create category title (for name and description)
    const menuCategoryTitle = document.createElement("div");
    menuCategoryTitle.classList.add("menu-category-title");

    //add category name and description
    const categoryName = document.createElement("h2");
    categoryName.classList.add("menu-category-name");
    categoryName.textContent = category; //! would become category.name
    menuCategoryTitle.appendChild(categoryName);

    const categoryDescription = document.createElement("p");
    categoryDescription.classList.add("menu-category-description");
    categoryDescription.textContent = "Description placeholder"; //! category.description
    menuCategoryTitle.appendChild(categoryDescription);

    menuCategoryContainer.appendChild(menuCategoryTitle);

    // Items container (for grid display, leaving the category title out.npm)

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    // Create Items per category
    const menuItems = filterItems(category);
    menuItems.forEach((item) => {
      // Create Item Containers
      const menuItemContainer = document.createElement("div");
      menuItemContainer.classList.add("menu-item-container");

      // Create Title Divs (for name and price)
      const menuItemTitle = document.createElement("div");
      menuItemTitle.classList.add("menu-item-title");

      const menuItemName = document.createElement("h3");
      menuItemName.classList.add("menu-item-name");
      menuItemName.textContent = item.name;
      menuItemTitle.appendChild(menuItemName);

      const menuItemPrice = document.createElement("h3");
      menuItemPrice.classList.add("menu-item-price");
      menuItemPrice.textContent = item.price;
      menuItemTitle.appendChild(menuItemPrice);

      menuItemContainer.appendChild(menuItemTitle);

      // Create descriptions
      const menuItemDescription = document.createElement("p");
      menuItemDescription.classList.add("menu-item-description");
      menuItemDescription.textContent = item.description;
      menuItemContainer.appendChild(menuItemDescription);

      menuItemsContainer.appendChild(menuItemContainer);
      menuCategoryContainer.appendChild(menuItemsContainer);
    });

    menuContentContainer.appendChild(menuCategoryContainer);
  });

  return menuContentContainer;
}

// Filter items per category
function filterItems(category) {
  const menuItemsArray = createMenuItemsArray();
  return menuItemsArray.filter((item) => item.category === category);
}

// Menu Item creation
class MenuItem {
  constructor(name, price, description, category) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
  }
}

function createMenuItemsArray() {
  const menuItemsArray = [
    new MenuItem(
      "Dragon's Roast",
      "27.50",
      "A collision of culinary traditions, our Dragon's Roast reimagines the classic Roast Dinner with a Japanese twist. Succulent slices of perfectly roasted meat, Yorkshire pudding, and seasonal vegetables meet an ensemble of sushi rolls, making for a tantalizing fusion of flavours and a truly legendary feast.",
      "Specials"
    ),
    new MenuItem(
      "Emperor's Pie",
      "12.50",
      "A A delightful fusion of British comfort food and Japanese flair, featuring layers of seasoned sushi rice, minced meat, and savoury vegetables, crowned with a creamy potato topping and a hint of wasabi.",
      "Specials"
    ),
    new MenuItem(
      "Fish and 'Chips'",
      "12.50",
      "Crispy tempura-battered fish and hand-cut sushi 'chips' served with a side of wasabi tartar sauce for a delightful sushi take on the British seaside favourite.",
      "Specials"
    ),
    new MenuItem(
      "Dragon's Egg",
      "8.00",
      "A Japanese twist on a British classic, featuring a perfectly runny quail egg, encased in fresh sushi rice, breaded, and deep-fried to golden perfection.",
      "Specials"
    ),
    new MenuItem(
      "Sticky Toffee Sushi",
      "8.00",
      "A delightful transformation of the classic British dessert, this unique sushi variant features sweet and date-infused rice, wrapped in nori, and drizzled with a decadent toffee sauce. It's a harmonious blend of textures and flavours, combining the best of Japanese and British culinary traditions in a single, sweet sushi delight.",
      "Specials"
    ),
    new MenuItem(
      "Eton Sakura Swirl",
      "27.50",
      "A playful dessert featuring sweet sushi rolls filled with fresh strawberries, cream, and crumbled meringue, creating a delightful twist on the classic Eton Mess.",
      "Specials"
    ),

    new MenuItem("Coming soon", "Coming soon", "Coming soon", "Maki"),
  ];
  return menuItemsArray;
}

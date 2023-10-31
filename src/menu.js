import logo from "./img/logo.png";

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
  menuLogo.src = logo;
  menuLogo.classList.add("menu-logo");

  return menuLogo;
}

function createMenuContent() {
  const menuContentContainer = document.createElement("div");
  menuContentContainer.classList.add("menu-content-container");

  // const menuCategoryArray = ["Specials", "Maki", "Nigiri", "Uramaki", "Sides"];
  const menuCategoryArray = [
    { name: "Specials", description: "" },
    {
      name: "Maki",
      description:
        "Rice rolls wrapped in nori with your choice of filling (8 pc.)",
    },
    {
      name: "Nigiri",
      description:
        "A bed of seasoned rice, covered with your topping of choice (2 pc.)",
    },
    {
      name: "Uramaki",
      description: "Sushi with a twist - inside out maki rolls (8 pc.)",
    },
    {
      name: "Sides",
      description: "",
    },
  ];
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
    categoryName.textContent = category.name; //! would become category.name
    menuCategoryTitle.appendChild(categoryName);

    const categoryDescription = document.createElement("p");
    categoryDescription.classList.add("menu-category-description");
    categoryDescription.textContent = category.description;
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
  return menuItemsArray.filter((item) => item.category === category.name);
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
    //Specials
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

    //Maki
    new MenuItem(
      "Salmon Maki",
      "8.00",
      "Classic salmon sushi roll with fresh cucumber and seasoned rice, wrapped in nori seaweed, served with wasabi and soy sauce.",
      "Maki"
    ),
    new MenuItem(
      "Tuna Maki",
      "8.00",
      "Delicious tuna sushi roll with crisp cucumber and seasoned rice, wrapped in nori seaweed, accompanied by wasabi and soy sauce.",
      "Maki"
    ),
    new MenuItem(
      "Spicy Tuna Crunch",
      "8.50",
      "A fiery delight with spicy tuna, cucumber, and tempura flakes inside, crowned with spicy mayo and a touch of green onions.",
      "Maki"
    ),
    new MenuItem(
      "Crispy Crab",
      "9.25",
      "A textural triumph with a blend of Welsh crab, avocado, and cucumber inside, encased in crispy panko breadcrumbs for that perfect crunch.",
      "Maki"
    ),

    //Nigiri
    new MenuItem(
      "Salmon Nigiri",
      "2.75",
      "Fresh, buttery Welsh salmon slices perched atop seasoned rice, a classic and timeless favorite.",
      "Nigiri"
    ),
    new MenuItem(
      "Tuna Nigiri",
      "2.75",
      "Tender tuna slices on a bed of perfectly seasoned rice, offering a delectable harmony of flavors.",
      "Nigiri"
    ),
    new MenuItem(
      "Ebi Nigiri",
      "2.75",
      "Succulent, sweet shrimp resting atop seasoned rice, a delightful choice for seafood lovers.",
      "Nigiri"
    ),
    new MenuItem(
      "Tamago Nigiri",
      "2.50",
      "Sweet and fluffy Japanese omelet, a delightful addition to our nigiri selection.",
      "Nigiri"
    ),

    //Uramaki
    new MenuItem(
      "California Dream",
      "8.00",
      "A California roll reimagined with real crab, cucumber, and avocado inside, topped with a layer of fresh masago (capelin roe) for an extra burst of flavor.",
      "Uramaki"
    ),
    new MenuItem(
      "Sunset Roll",
      "8.25",
      " A taste of the tropics with mango, shrimp tempura, and cucumber inside, wrapped in rice and nori, and garnished with sweet chili sauce.",
      "Uramaki"
    ),
    new MenuItem(
      "Red Dragon Roll",
      "9.50",
      "Avocado, cucumber, and tamago come together for a flavorful dance inside this roll, crowned with a sizzling seared tuna, togarashi kick, mild srirachamayo, and a dash of unagi sauce. It's all tied up with a crispy flourish of fried onions and a burst of spring onion freshness!",
      "Uramaki"
    ),

    new MenuItem(
      "Volcano Roll",
      "8.75",
      "A fiery twist with spicy baked scallops, avocado, and cucumber inside, topped with a spicy mayo eruption.",
      "Uramaki"
    ),

    //Sides
    new MenuItem(
      "Seoul-ful Chicken Delight",
      "7.50",
      "Our Korean Fried Chicken is an irresistible blend of crispy, succulent British chicken pieces, drenched in a sweet and spicy gochujang sauce for a harmonious fusion of flavors that's sure to make your taste buds dance.",
      "Sides"
    ),
    new MenuItem(
      "Prawn Gyoza Gems",
      "4.00",
      "These delectable dumplings are filled with plump prawns and a delicate medley of seasonings, carefully wrapped in a thin gyoza skin, and served with a tangy dipping sauce for a delightful taste of Wales' coastal treasures.",
      "Sides"
    ),
    new MenuItem(
      "Chicken Gyoza Classics",
      "4.00",
      "Our Chicken Gyoza are savory parcels of minced chicken and aromatic herbs, skillfully folded into delicate gyoza wrappers, and served with a zesty dipping sauce, a delightful nod to Japanese tradition.",
      "Sides"
    ),
    new MenuItem(
      "Edamame Elegance",
      "2.50",
      "Our Edamame is a simple yet elegant dish of young soybeans lightly steamed and sprinkled with sea salt, offering a delightful and healthy snack straight from the heart of Japanese cuisine.",
      "Sides"
    ),
    new MenuItem(
      "Veggie Gyoza Harmony",
      "3.50",
      " Our Vegetable Gyoza is a delightful blend of Welsh home grown garden-fresh vegetables, masterfully folded into gyoza wrappers, and served with a soy-based dipping sauce, offering a plant-based twist on the Japanese classic.",
      "Sides"
    ),
  ];
  return menuItemsArray;
}

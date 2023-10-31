import logo from "./img/logo.png";

export function createContact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  // Logo + Name
  const contactHero = createContactHero();
  contactContainer.appendChild(contactHero);

  // Locations
  const contactLocations = createContactLocations();
  contactContainer.appendChild(contactLocations);

  return contactContainer;
}

function createContactHero() {
  const contactHero = document.createElement("div");
  contactHero.classList.add("contact-hero");

  const contactLogo = document.createElement("img");
  contactLogo.src = logo;
  contactLogo.classList.add("contact-logo");
  contactHero.appendChild(contactLogo);

  const contactName = document.createElement("h1");
  contactName.classList.add("hero-title");
  contactName.classList.add("contact-title");
  contactName.textContent = "Red Dragon Sushi";
  contactHero.appendChild(contactName);

  return contactHero;
}

function createContactLocations() {
  const locationsContainer = document.createElement("div");
  locationsContainer.classList.add("contact-locations-container");

  const locations = [
    {
      name: "Red Dragon Sushi Llandudno",
      street: "Sushi Lane 123",
      postcode: "LL98 7AB",
      town: "Llandudno",
      phone: "+44 1632 123456",
    },
    {
      name: "Red Dragon Sushi Conwy",
      street: "Fford Sushi 321",
      postcode: "LL76 5YZ",
      town: "Conwy",
      phone: "+44 1633 654321",
    },
  ];

  locations.forEach((location) => {
    const locationItem = document.createElement("div");
    locationItem.classList.add("contact-location");

    const locationName = document.createElement("p");
    locationName.classList.add("contact-name");
    locationName.textContent = location.name;
    locationItem.appendChild(locationName);

    const locationStreet = document.createElement("p");
    locationStreet.classList.add("contact-address");
    locationStreet.textContent = location.street;
    locationItem.appendChild(locationStreet);

    const locationPostcode = document.createElement("p");
    locationPostcode.classList.add("contact-address");
    locationPostcode.textContent = location.postcode;
    locationItem.appendChild(locationPostcode);

    const locationTown = document.createElement("p");
    locationTown.classList.add("contact-address");
    locationTown.textContent = location.town;
    locationItem.appendChild(locationTown);

    const locationPhone = document.createElement("p");
    locationPhone.classList.add("contact-address");
    locationPhone.textContent = location.phone;
    locationItem.appendChild(locationPhone);

    const locationMap = document.createElement("div");
    locationMap.classList.add("contact-map");
    if (location.town === "Conwy") {
      locationMap.innerHTML =
        '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1686.8106721191537!2d-3.8272283432667162!3d53.28038922397696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDE2JzQ4LjgiTiAzwrA0OSczMS42Ilc!5e0!3m2!1snl!2snl!4v1698763071803!5m2!1snl!2snl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      locationItem.appendChild(locationMap);
    } else if (location.town === "Llandudno") {
      locationMap.innerHTML =
        '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13476.919347544277!2d-3.870985132596907!3d53.33600128505391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDIwJzEwLjIiTiAzwrA1MSc0Ni4zIlc!5e0!3m2!1snl!2snl!4v1698762956671!5m2!1snl!2snl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      locationItem.appendChild(locationMap);
    }

    locationsContainer.appendChild(locationItem);
  });

  return locationsContainer;
}

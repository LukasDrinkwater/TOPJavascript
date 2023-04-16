import { info, allMenus } from "./info.js";

function createHomePage(currentPage, infoCards, info) {
  if (currentPage === undefined) {
  } else if (currentPage != "home") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  } else if (currentPage === "home") {
    return;
  }

  console.log("home button click", currentPage);

  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

  if (currentPage === undefined) {
    var mainContainer = document.createElement("div");
    const logoName = document.createElement("div");
    const content = document.getElementById("content");

    mainContainer.classList.add("main-container");
    mainContainer.setAttribute("id", "main-container");
    logoName.classList.add("logo-name");
    logoName.innerHTML = "Pit Stop Cafe";

    content.append(mainContainer);
    mainContainer.append(logoName);
    mainContainer.append(infoCards);
  } else if (currentPage != "home") {
    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
  currentPage = "home";

  const aboutCard = document.createElement("div");
  const aboutCardP = document.createElement("p");

  // add the correct class to each div

  infoCards.classList.add("info-cards");
  infoCards.setAttribute("id", "info-cards");
  aboutCard.classList.add("about", "card");

  // add content to the divs
  // logoName.innerHTML = "Pit Stop Cafe";
  aboutCardP.innerHTML = aboutText;

  aboutCard.append(aboutCardP);
  infoCards.append(aboutCard);

  createHoursList(infoCards, info);
}

function checkPageDivs(currentPage) {
  if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
}

function createHoursList(infoCards, info) {
  // make the div and ul
  let hoursCard = document.createElement("div");

  let ul = document.createElement("ul");

  // Loop through the `info` array and create a list item for each day
  for (let i = 0; i < 7; i++) {
    let li = document.createElement("li");

    li.innerText = info[i].day + ": " + info[i].open + " - " + info[i].close;

    ul.appendChild(li);
  }
  hoursCard.appendChild(ul);
  hoursCard.classList.add("card");
  infoCards.append(hoursCard);

  return hoursCard;
}

function createMenuList(currentPage, allMenus) {
  if (currentPage === undefined) {
    return;
  } else if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
    // create the card divs and elements for the menu
    const foodCard = document.createElement("div"),
      foodCardH1 = document.createElement("h1"),
      drinksCard = document.createElement("div"),
      drinksCardH1 = document.createElement("h1"),
      cakeCard = document.createElement("div"),
      cakeCardH1 = document.createElement("h1");

    // add the correct class to each div
    foodCard.classList.add("card");
    foodCardH1.classList.add("card-h1");
    drinksCard.classList.add("card");
    drinksCardH1.classList.add("card-h1");
    cakeCard.classList.add("card");
    cakeCardH1.classList.add("card-h1");

    // let ul = document.createElement("ul");

    // loop through each menu array and add the info to a new card
    for (let i = 0; i < allMenus.length; i++) {
      let menu = allMenus[i];
      let headingText;
      let ul = document.createElement("ul");
      let menuCard = document.createElement("div");
      let menuCardh1 = document.createElement("h1");
      menuCard.classList.add("card");
      menuCardh1.classList.add("card-h1");

      if (i === 0) {
        headingText = "Breakfast";
      } else if (i === 1) {
        headingText = "Drinks";
      } else if (i === 2) {
        headingText = "Desserts";
      }

      for (let j = 0; j < 3; j++) {
        let currentMenu = menu[j];

        let li = document.createElement("li");

        li.innerText = currentMenu.price + " - " + currentMenu.item;
        menuCardh1.innerText = headingText;
        menuCard.append(menuCardh1);
        ul.append(li);
        menuCard.appendChild(ul);
        infoCards.append(menuCard);
      }
    }
  } else if (currentPage === "menu") {
    return;
  }
}

// // create the card divs and elements for the menu
// const foodCard = document.createElement("div"),
//   foodCardH1 = document.createElement("h1"),
//   drinksCard = document.createElement("div"),
//   drinksCardH1 = document.createElement("h1"),
//   cakeCard = document.createElement("div"),
//   cakeCardH1 = document.createElement("h1");

// // add the correct class to each div
// foodCard.classList.add("card");
// foodCardH1.classList.add("card-h1");
// drinksCard.classList.add("card");
// drinksCardH1.classList.add("card-h1");
// cakeCard.classList.add("card");
// cakeCardH1.classList.add("card-h1");

// // let ul = document.createElement("ul");

// // loop through each menu array and add the info to a new card
// for (let i = 0; i < allMenus.length; i++) {
//   let menu = allMenus[i];
//   let headingText;
//   let ul = document.createElement("ul");
//   let menuCard = document.createElement("div");
//   let menuCardh1 = document.createElement("h1");
//   menuCard.classList.add("card");
//   menuCardh1.classList.add("card-h1");

//   if (i === 0) {
//     headingText = "Breakfast";
//   } else if (i === 1) {
//     headingText = "Drinks";
//   } else if (i === 2) {
//     headingText = "Desserts";
//   }

//   for (let j = 0; j < 3; j++) {
//     let currentMenu = menu[j];

//     let li = document.createElement("li");

//     li.innerText = currentMenu.price + " - " + currentMenu.item;
//     menuCardh1.innerText = headingText;
//     menuCard.append(menuCardh1);
//     ul.append(li);
//     menuCard.appendChild(ul);
//     infoCards.append(menuCard);
//     }
//   }
// }

function createContactPage() {}

export { createHoursList, createMenuList, checkPageDivs, createHomePage };

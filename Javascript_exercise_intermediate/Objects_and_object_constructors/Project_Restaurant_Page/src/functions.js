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

function createMenuList(menuFood, menuDrinks, menuCakes) {}

export { createHoursList, createMenuList };

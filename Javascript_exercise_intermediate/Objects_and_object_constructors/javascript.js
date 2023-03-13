// import { doc } from "prettier";

// }
const cardContainer = document.getElementById("cardContainer");
const form = document.getElementById("bookForm");
const submitButton = document.getElementById("submitButton");
const testVariable = document.getElementsByClassName("test");
const formValues = {};
const deleteButton = document.querySelectorAll(".deleteButton");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let book1 = new Book("Star Wars", "George Lucas", 200, false);

let book2 = new Book("GoT", "George RR Martin", 300, true);

// function to create a new card with the new instance of Book has been
// submitted.
// another way is the use insertAdjacentHTML or document fragments
function addBookToLibrary(formValues) {
  // create new div
  let newCardDiv = document.createElement("div");

  // create the new ul element
  const newUl = document.createElement("ul");

  // create the new li elements
  const newLi1 = document.createElement("li");
  const newLi2 = document.createElement("li");
  const newLi3 = document.createElement("li");
  const newLi4 = document.createElement("li");
  // then give each list element the correct class
  newLi1.classList.add("title");
  newLi2.classList.add("author");
  newLi3.classList.add("pages");
  newLi4.classList.add("isRead");

  // create the text nodes for the li elements
  const li1Text = document.createTextNode(formValues.title);
  const li2Text = document.createTextNode(formValues.author);
  const li3Text = document.createTextNode(formValues.pages);
  const li4Text = document.createTextNode(formValues.isRead);

  // append text nodes to li elements
  newLi1.appendChild(li1Text);
  newLi2.appendChild(li2Text);
  newLi3.appendChild(li3Text);
  newLi4.appendChild(li4Text);

  // append li elements to the ul element
  newUl.appendChild(newLi1);
  newUl.appendChild(newLi2);
  newUl.appendChild(newLi3);
  newUl.appendChild(newLi4);

  // append ul element to the div element
  newCardDiv.appendChild(newUl);

  newCardDiv.classList.add("card");

  // create and assign the delete and change status button to the div
  const newDeleteButton = document.createElement("button");
  const newChangeStatusButton = document.createElement("button");

  // set the innter text of the button
  newDeleteButton.innerText = "Delete Book";
  newChangeStatusButton.innerText = "Change Status";

  // set the class of the 2 new buttons
  newDeleteButton.classList.add("deleteButton");
  newChangeStatusButton.classList.add("changeStatus");

  newCardDiv.appendChild(newDeleteButton);
  newCardDiv.appendChild(newChangeStatusButton);

  // append newCardDiv to the container div
  cardContainer.appendChild(newCardDiv);
}

// event listener function or on submit when to create the Book

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  // creates an object of the from the form data and a blank object
  // for it to go into.
  const formData = new FormData(form);
  //   const formValues = {};

  // loop
  for (let [key, value] of formData.entries()) {
    formValues[key] = value;
  }

  console.log(formValues);

  addBookToLibrary(formValues);
});

// function to delete the div a button is in
// querySelectorAll is used to select all the buttons.
// then loop through all the button to add an event listener.
// when the button is clicked it accesses the parent div using .parentNode
// and then .remove to remove the div.
// deleteButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     const cardDiv = button.parentNode;
//     cardDiv.remove();
//   });
// });

// does the above but works with dynmaically generated cards
// adds event listener to the cardContainer and if the event
// clicks on the target which is the button it removed the parent div
cardContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (target.matches("button") && target.classList.contains("deleteButton")) {
    console.log(e);
    const cardDiv = target.parentNode;
    cardDiv.remove();
  }

  if (target.matches("button") && target.classList.contains("changeStatus")) {
    updateReadStatus(target);
  }
});

// function to change the read status
function updateReadStatus(button) {
  const dropDown = button.parentNode.querySelector(".isRead");
  const selectedValue = dropDown.textContent;

  if (selectedValue === "Yes") {
    dropDown.innerText = "No";
    console.log(dropDown);
  } else {
    dropDown.innerText = "Yes";
  }
}

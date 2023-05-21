// using prmomise

// let myPromise = new Promise((resolve, reject) => {
//   let num = Math.floor(Math.random() * 10) + 1;
//   console.log(num);
//   if (num < 5) {
//     resolve("you guessed correctly");
//   } else {
//     reject("better luck next time");
//   }
// });

// function handleSuccess(goodNews) {
//   console.log(goodNews);
// }

// function handleFailure(badNews) {
//   console.log(badNews);
// }

// // invoke the prmise and *then* pass in our resolve and reject functions
// myPromise.then(handleSuccess, handleFailure);

// using async
// async returns a promise when it used to makea  function
// async function randomResponse() {
//   let message = "";
//   let num = Math.floor(Math.random() * 10) + 1;
//   if (num < 5) {
//     message = await "you guessed correctly";
//     console.log(message);
//   } else {
//     message = await "better luck next time";
//     console.log(message);
//   }
// }

// randomResponse();

// const arrayOfFruits = ["banana", "strawberry", "papaya"];

// arrayOfFruits.forEach(async (fruit) => {
//   let message = "would you like a" + fruit + "?";
//   console.log(message);
// });

const img = document.querySelector("img");

async function getCats() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=vPRFnFQO0KOSXXsIaXT6RonXysQQLkTv&s=cats",
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}

getCats();

// When a function is declared with async, it automatically returns a promise;
// returning in an async function is the same as resolving a promise. Likewise,
// throwing an error will reject the promise.

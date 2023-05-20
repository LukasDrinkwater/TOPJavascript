// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("Failed");
//   }
// });

// // then is when it has resolved
// p.then((message) => {
//   console.log("This is in the then" + message);
// //   catch is when it has rejected/failed
// }).catch((message) => {
//   console.log("this is in the catch" + message);
// });

const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallBack(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching cat meme",
//       message: "webDevSimplified < cat",
//     });
//   } else {
//     callback("thumbs up and subscribe");
//   }
// }

// watchTutorialCallBack(
//   (message) => {
//     console.log("success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// these are the above but using Promise .then .catch resolve and reject
// which the better way instead of callbacks

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       resolve({
//         name: "User left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       resolve({
//         name: "User watching cat meme",
//         message: "webDevSimplified < cat",
//       });
//     } else {
//       reject("thumbs up and subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("success: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//     console.log(error);
//   });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("video 1 recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("video 2 recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("video 3 recorded");
});

// .all waits for them all to complete
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages); // messages is the message from the resolve
  }
);

// .race returns from the first one to finish and doesnt wait for them to all
// finish
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message); //it only returns the first one to finish
  }
);

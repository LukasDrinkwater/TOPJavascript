let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("good to go!");
  }, 1000);

  //   setTimeout(() => {
  //     reject("its failed");
  //   }, 500);
});

// myPromise
//   .then((res) => {
//     // if it resolves do this
//     console.log(res);
//   })
//   .catch((err) => {
//     // if its rejected do this
//     console.log(err);
//   });

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("promise 2 ");
    reject("promise 2 reject");
  }, 1500);
});

//promise.all only do the .then if all the promises are resolved
// if ones is rejected it doesnt work
Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

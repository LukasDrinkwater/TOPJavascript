// api request using async and try/catch method.

const img = document.querySelector("img");

async function getGifs() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=vPRFnFQO0KOSXXsIaXT6RonXysQQLkTv&s=cats",
      { mode: "cors" }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}

getGifs();

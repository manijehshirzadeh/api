console.log("Hello world");
let apiKey = "caf6e060";

function convertToJSObject(res) {
  console.log(res);
  return res.json();
}

function handelData(data) {
  let poster = data.poster;
  let title = data.title;
  let plot = data.plot;

  let resultsDiv = document.querySelector("#results");
  let markup = `
  <h2>${title}</h2>;
  <img src="${poster}"
  <p>${plot}</p>
  `;
  resultsDiv.innerHTML = markup;
}

function requestMovieDetails(title) {
  const url = "http://www.omdbapi.com/";
  const apiKey = "caf6e060";
}

fetch(`?t=inspection&apikey=${apiKey}&plot=full`)
  .then(convertToJSObject)
  .then(handelData);

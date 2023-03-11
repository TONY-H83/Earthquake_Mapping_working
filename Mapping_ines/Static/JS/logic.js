// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6872, -97.3301], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6152, -122.3899],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6417, -73.78096],
  [36.5298, -87.3595]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  dashArray: '10, 5',
  color: "blue",
  weight: 4,
  opacity: .5
}).addTo(map);

var startMarker = L.marker([37.6152, -122.3899]).addTo(map);

startMarker.bindPopup("<b>Start</b>").openPopup();

var marker = L.marker([36.5298, -87.3595]).addTo(map);

marker.bindPopup("<b>Home</b>").openPopup();

  // Get data from cities.js
let cityData = cities;



// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//     //fillColor: 'yellow',
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//adding comment to test branch
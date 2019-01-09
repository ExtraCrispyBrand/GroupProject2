let latitude = 41.9148;
let longitude = 87.6251;
// let weatherTime = 1540148070;

//Dark Sky Api Format
//Needs to be lat , long , Unix time (this includes both date and time in its value)
//Dark Sky Api Format
//Needs to be lat , long , Unix time (this includes both date and time in its value)
// https://cors-anywhere.herokuapp.com/

//need to find how to put apikey into .env
let apiKey = process.env.DARKSKYAPIKEY;

let url = "https://api.darksky.net/forecast/";
let lati = latitude;
let longi = longitude;

let darkSkyApiCall = url + apiKey + "/" + lati + "," + longi;

//Run the Weather Api

$.ajax({
  type: "GET",
  url: darkSkyApiCall
}).then(function(response) {
  //log the queryURL
  //log the result and specific paramters

  //variables to pass onto the tournament dashboard
  let temp = response.currently.temperature + "°F";

  let precipProbability = response.currently.precipProbability * 100 + "%";
});

//need to find a way to feed this into the css file so that we can submit without the api key. Also need to find how to put api key into a .env
let mapurl =
  "https://maps.googleapis.com/maps/api/staticmap?center=North+Avenue+Beach,Chicago,IL&zoom=13&size=400x200&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C41.9148113,-87.6251085&key=";
let mapapi = process.env.GOOGLEMAPSAPIKEY;

let entiremapurl = mapurl + mapapi;



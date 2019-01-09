

    


//weather 

let latitude = 41.9148;
let longitude = 87.6251;
let weatherTime = 1540148070;

//Dark Sky Api Format
//Needs to be lat , long , Unix time (this includes both date and time in its value)
//Dark Sky Api Format
      //Needs to be lat , long , Unix time (this includes both date and time in its value)
      // https://cors-anywhere.herokuapp.com/
      let apiKey = "1408b38a9701141fa75c8f041fca27e8",
        url = "https://api.darksky.net/forecast/",
        lati = latitude,
        longi = longitude,
        
        dark_Sky_api_call =
          url + apiKey + "/" + lati + "," + longi;

      //Run the Weather Api

      $.ajax({
        type: "GET",
        url: dark_Sky_api_call
      }).then(function(response) {
        //log the queryURL
        //log the result and specific paramters


        //variables to pass onto the tournament dashboard
        let temp = response.currently.temperature + "°F";


        let precipProbability =
          response.currently.precipProbability * 100 + "%";

        

        


        
//            // weather
//            https://api.darksky.net/forecast/1408b38a9701141fa75c8f041fca27e8/41.9148,87.6251
        
        
//         // map
//         https://maps.googleapis.com/maps/api/staticmap?center=North+Avenue+Beach,Chicago,IL&zoom=13&size=600x300&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C41.9148113,-87.6251085&key=AIzaSyD_kTgSDnPeXBLWL14uattTiBX4ksgaGS8
        
// //charting 



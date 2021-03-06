// weather


// This is our API key
    var APIKey = "ab689f1d5c07c4c51644a38ba8be3f81";
    // Here we are building the URL we need to query the database
    var queryURL = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?" +
      "q=Newburgh,NewYork&units=imperial&appid=" + APIKey;
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
        // Transfer content to HTML
        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $("#wind").html("Wind Speed: " + response.wind.speed);
        $("#humidity").html("Humidity: " + response.main.humidity);
        $("#temp").html("Temperature (F): " + response.main.temp);
        $("#tempMax").html("Temp max: " + response.main.temp_max);
        $("#tempMin").html("Temp min: " + response.main.temp_min);
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temp (F): " + response.main.temp);
        console.log("Hi: " + response.main.temp_max);
        console.log("Low: " + response.main.temp_min);


      });
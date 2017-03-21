// YOUR SCRIPTS GO HERE
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})

$.simpleWeather({
    location: 'spokane',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#one .temp').text(weather.temp);
      $('#one .city').text(weather.city);
      $('#one img').attr('src', weather.image);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

$.simpleWeather({
    location: 'kingman',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#two .temp').text(weather.temp);
      $('#two .city').text(weather.city);
      $('#two img').attr('src', weather.image);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


//Geo Location
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

//Get Weather
var getWeather = function(location){
  $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#three .temp').text(weather.temp);
      $('#three .city').text(weather.city);
      $('#three img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
  
  
}
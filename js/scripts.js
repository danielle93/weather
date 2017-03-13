// YOUR SCRIPTS GO HERE
$.simpleWeather({
  location: 'Cheney',
  
  unit: 'f',
  
  success: function(weather){
            // Check for weather
            console.log(weather);

            // Display Weather
            $('.temp').text(weather.temp);

            //Display City
            $('.city').text(weather.city);

            //Display State
            $('.state').text(weather.region);
    
            //Image
            $('.image img').attr('src', weather.image);

          },
  
  
  error: function(error) {
    console.log('Look outside.');
  },
  
});
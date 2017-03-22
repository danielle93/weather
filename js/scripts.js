// YOUR SCRIPTS GO HERE
document.requestFullscreen();

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})


//Geo Location
// Get and store Geo Location lat/long coordinates

            if ('geolocation' in navigator) {
            
               $('.geo').show();
            
            } else {
              
              $('.geo').hide();
              $('.geo').prepend('<p>Geolocation Not Supported.</p>');
            
            }
            
            // On load, Get Geolocation, Call Weather Function
            $('.geo').ready(function () {
                  
                //load weather using your lat/long coordinates
                navigator.geolocation.getCurrentPosition(function (position) {
                  
                  // Check lat/long coordinates
                  var lat = position.coords.latitude;
                  var long = position.coords.longitude;
                  
                  $('#loading').hide();
                  console.log(lat, long);
                  
                  // Send to SimpleWeather
                  getWeather(lat + ',' + long);
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
                //    $.simpleWeather({
                //    location: 'Spokane',
                //    unit: 'f',
                //    success: function(weather) {
                //      // Entire weather object
                //      console.log(weather);
      
      // Display Data
      $('#one .temp').text(weather.temp);
      $('#one .city').text(weather.city);
      $('#one i').addClass( 'icon-' + weather.code );
      
      // Get Condition Code
      console.log(weather.code);
      console.log(weather.currently);
      
      if (weather.code >= 19 && weather.code <= 23 || weather.code == 26 || weather.code == 28 || weather.code == 30 || weather.code == 44) {
         $('body').addClass('cloudy');
      }
        
      if (weather.code == 23 || weather.code == 24) {
         $('body').addClass('windy');
      }
        
      if (weather.code >= 30 && weather.code <= 36) {
         $('body').addClass('sunny');
      }
          
      if (weather.code == 36)  {
         $('body').addClass('hot');
            
      }
      
      if (weather.code == 35 || weather.code >= 12 && weather.code <= 19 || weather.code == 7 || weather.code >= 40 && weather.code <= 44 || weather.code == 46) {
         $('body').addClass('snow');
      }
                  
      if (weather.code == 25) {
         $('body').addClass('cold');
      }
                  
      if (weather.code == 39 || weather.code == 40 || weather.code >= 5 && weather.code <= 13) {
         $('body').addClass('rainy');
         $('.currently').text('Water falling from the Hecking Sky! HECK!');
           
      }

      if (weather.code == 3 || weather.code == 4 || weather.code == 37 || weather.code == 38 || weather.code == 45 || weather.code == 47) {
         $('body').addClass('thunderstorms');
      }
      
      if (weather.code >= 0 && weather.code <= 2) {
         $('body').addClass('severe');
      }
      
      if (weather.code == 27 || weather.code == 29 || weather.code == 31 || weather.code == 33) {
         $('body').addClass('night');
      }
    
        
// Current Conditional Text
        
//    if (weather.currently == 'Scattered Showers') {
//        $('.currently').text('Water falling from the Hecking Sky! HECK!');
//      }
//      
        
        },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go do a heckin look outside.');
    }
  
  });
}

function hideAddressBar() {
  if(!window.location.hash) {
    if(document.height < window.outerHeight)
      document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){ 
        window.scrollTo(0, 1); 
        document.body.style.height = 'auto'; 
      }, 50 );
  }
}

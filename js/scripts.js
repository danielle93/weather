// YOUR SCRIPTS GO HERE
$('section').show();
$('div').show();
$('div').addClass('bg');
$('#temp').hide();


//Toggle Drawer
$('.toggle-drawer').click( function() {
    
        $('aside').toggleClass('drawer');
     
});


//-----------------------------------------------------Current Location Weather-----------------------------------------------------
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


//-----------------------------------------------------Get Current Location Weather--------------------------------------------------
    var getWeather = function (location) {
    $.simpleWeather({
        location: location
        , unit: 'f'
        , success: function (weather) {
            // Entire weather object
            console.log(weather);
            // Display Data
            $('#temp').show();
            $('#one .temp').text(weather.temp);
            $('#one .city').text(weather.city);
            $('#one .condition').text(weather.text);
            $('#one i').addClass('icon-' + weather.code);
            // Get Condition Code
            console.log(weather.code);
            
            if (weather.code >= 18 && weather.code <= 23 || weather.code === 26 || weather.code === 28 || weather.code === 44) {
                $('section').addClass('cloudy');
//                $('.currently').text('Just a bunch of heckin clouds in the sky.');
            }
            if (weather.code === 23 || weather.code === 24) {
                $('section').addClass('windy');
//                $('.currently').text('Wind. Heck. Wind is not frend.');

            }
            if (weather.code === 34 || weather.code === 32 ) {
                $('section').addClass('sunny');
//                $('.currently').text('Soak up that sun, frend.');

            }
            if (weather.code === 36) {
                $('section').addClass('hot');
//                $('.currently').text('Heckin hot!');
            }
            if (weather.code === 35 || weather.code >= 12 && weather.code <= 19 || weather.code === 7 || weather.code >= 40 && weather.code <= 44 || weather.code === 46) {
                $('section').addClass('Snow');
//                $('.currently').text('Heckin snow doggo');

            }
            if (weather.code === 25) {
                $('section').addClass('cold');
//                $('.currently').text('Stay warm pupper!');

            }
            if (weather.text="Scattered Showers" || weather.code === 39 || weather.code === 40 || weather.code >= 4 && weather.code <= 13) {
                $('section').addClass('rainy');
//                $('.currently').text('Water falling from the hecking sky?!');
            }
            if (weather.code === 3 || weather.code === 4 || weather.code === 37 || weather.code === 38 || weather.code === 45 || weather.code === 47) {
                $('section').addClass('thunderstorms');
//                $('.currently').text('Thunderstorms doin a<br>heckin spook!');

            }
            if (weather.code >= 0 && weather.code <= 2) {
                $('section').addClass('severe');
//                $('.currently').text('Severe weather doin me a heck concern');
            }
            if (weather.code === 27 || weather.code === 29 || weather.code === 31 || weather.code === 33) {
                $('section').addClass('night');
//                $('.currently').text('Heck why u still up frend? Go do a heckin sleep!');
            }
            
            if (weather.code === 29 || weather.code === 30){
                $('section').addClass('partlyCloudy');
//                $('.currently').text('Clouds doin the sun a heckin bamboozle.');
            }
        }
        , error: function (error) {
            // Show if weather cannot be retreived
            console.log('Go do a heckin look outside.');
        }
    });
}


//---------------------Spokane Weather-------------------------
    $.simpleWeather({
    location: 'Spokane'
    , unit: 'f'
    , success: function (weather) {
        // Entire weather object
        console.log(weather);
        // Display Data
        $('#temp').show();
        $('#five .temp').text(weather.temp);
        $('#five .city').text(weather.city);
        $('#five .condition').text(weather.text);
        $('#five i').addClass('icon-' + weather.code);
        // Get Condition Code
        console.log(weather.code);
        console.log(weather.text);

        
    }
    , error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }
});

//---------------------Ventura Weather-------------------------
    $.simpleWeather({
    location: 'Ventura'
    , unit: 'f'
    , success: function (weather) {
        // Entire weather object
        console.log(weather);
        // Display Data
        $('#temp').show();
        $('#four .temp').text(weather.temp);
        $('#four .city').text(weather.city);
        $('#four .condition').text(weather.text);
        $('#four i').addClass('icon-' + weather.code);
        // Get Condition Code
        console.log(weather.code);
        console.log(weather.text);

        
    }
    , error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }
});

//---------------------Kingman Forecast-------------------------
    $.simpleWeather({
    location: 'Kingman'
    , unit: 'f'
    , success: function (weather) {
        // Entire weather object
        console.log(weather);
        // Display Data
        $('#temp').show();
        $('#three .temp').text(weather.temp);
        $('#three .city').text(weather.city);
        $('#three .condition').text(weather.text);
        $('#three i').addClass('icon-' + weather.code);

        // Get Condition Code
        console.log(weather.code);
        console.log(weather.text);
        
    }
    , error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }
});
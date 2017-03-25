// YOUR SCRIPTS GO HERE

//Toggle Drawer

$('.toggle-drawer').click( function() {
    
        $('aside').toggleClass('drawer');
     
});


//Geo Location
// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {
    $('.geo').show();
    
}
else {
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

//Get Current Location Weather
var getWeather = function (location) {
    $.simpleWeather({
        location: location
        , unit: 'f'
        , success: function (weather) {
            // Entire weather object
            console.log(weather);
            // Display Data
            $('#one .temp').text(weather.temp);
            $('#one .city').text(weather.city);
            $('#one i').addClass('icon-' + weather.code);
            // Get Condition Code
            console.log(weather.code);
            console.log(weather.currently);
            if (weather.code >= 19 && weather.code <= 23 || weather.code == 26 || weather.code == 28 || weather.code == 44) {
                $('body').addClass('cloudy');
                $('.currently').text('Just a bunch of heckin clouds in the sky.');
            }
            if (weather.code == 23 || weather.code == 24) {
                $('body').addClass('windy');
                $('.currently').text('Wind. Heck. Wind is not frend.');

            }
            if (weather.code >= 30 && weather.code <= 36) {
                $('body').addClass('sunny');
                $('.currently').text('Heck. So beautiful. Soak up that sun, frend.');

            }
            if (weather.code == 36) {
                $('body').addClass('hot');
                $('.currently').text('Heckin hot!');
            }
            if (weather.code == 35 || weather.code >= 12 && weather.code <= 19 || weather.code == 7 || weather.code >= 40 && weather.code <= 44 || weather.code == 46) {
                $('body').addClass('Snow');
                $('.currently').text('Snowing');

            }
            if (weather.code == 25) {
                $('body').addClass('cold');
                $('.currently').text('Cold as heck!');

            }
            if (weather.code == 39 || weather.code == 40 || weather.code >= 5 && weather.code <= 13) {
                $('body').addClass('rainy');
                $('.currently').text('Water falling from the hecking sky?!');
            }
            if (weather.code == 3 || weather.code == 4 || weather.code == 37 || weather.code == 38 || weather.code == 45 || weather.code == 47) {
                $('body').addClass('thunderstorms');
                $('.currently').text('Thunderstorms doin a<br>heckin spook!');

            }
            if (weather.code >= 0 && weather.code <= 2) {
                $('body').addClass('severe');
                $('.currently').text('Severe weather doin me a heck concern');
            }
            if (weather.code == 27 || weather.code == 29 || weather.code == 31 || weather.code == 33) {
                $('body').addClass('night');
                $('.currently').text('Fren why u awake? Heckin do a sleep!');
            }
            
            if (weather.code == 29 || weather.code == 30){
                $('body').addClass('partlyCloudy');
                $('.currently').text('Clouds doin the sun a heckin bamboozle.');
            }
        }
        , error: function (error) {
            // Show if weather cannot be retreived
            console.log('Go do a heckin look outside.');
        }
    });
}

//Tomorrow Forecast
$.simpleWeather({
    location: 'Spokane'
    , unit: 'f'
    , success: function (weather) {
        // Entire weather object
        console.log(weather);
        // Display Data
        $('#four .temp').text(weather.temp);
        $('#four .city').text(weather.city);
        $('#four i').addClass('icon-' + weather.code);
        // Get Condition Code
        console.log(weather.code);
        console.log(weather.currently);
        if (weather.code >= 19 && weather.code <= 23 || weather.code == 26 || weather.code == 28 || weather.code == 30 || weather.code == 44) {
            $('body').addClass('cloudy');
            $('.currently').text('Depressing & grey as heck');
        }
        if (weather.code == 23 || weather.code == 24) {
            $('body').addClass('windy');
        }
        if (weather.code >= 30 && weather.code <= 36) {
            $('body').addClass('sunny');
        }
        if (weather.code == 36) {
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
    }
    , error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }
});




    //Spokane Weather
$.simpleWeather({
    location: 'Spokane'
    , unit: 'f'
    , success: function (weather) {
        // Entire weather object
        console.log(weather);
        // Display Data
        $('#four .temp').text(weather.temp);
        $('#four .city').text(weather.city);
        $('#four i').addClass('icon-' + weather.code);
        // Get Condition Code
        console.log(weather.code);
        console.log(weather.currently);
        if (weather.code >= 19 && weather.code <= 23 || weather.code == 26 || weather.code == 28 || weather.code == 30 || weather.code == 44) {
            $('body').addClass('cloudy');
            $('.currently').text('Depressing & grey as heck');
        }
        if (weather.code == 23 || weather.code == 24) {
            $('body').addClass('windy');
        }
        if (weather.code >= 30 && weather.code <= 36) {
            $('body').addClass('sunny');
        }
        if (weather.code == 36) {
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
            $('.currently').text('Water falling from the hecking sky! The Heck?!?!');
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
    }
    , error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }
});

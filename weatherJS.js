$(document).ready(function() {
    var weatherPic;
    var lat;
    var lon;
    var locationAPI="https://ipinfo.io/json";
    var location;
  
    //Weather: Dark Sky, Apixu, or Weather Underground
    $.getJSON(locationAPI,function(data2){
      location= data2.loc.split(",");
      lat=location[0];
      lon=location[1];
       var api="https://api.wunderground.com/api/c0262ee30e7c30c6"+ "/conditions/q/" + lat + "," + lon + ".json"; 
      //https://api.wunderground.com/api/c0262ee30e7c30c6/conditions/q/45.5076,-122.4307.json
  
      $.getJSON(api,function(data){
        var type=data.current_observation.weather;
        var city=data.current_observation.display_location.city + ", " + data.current_observation.display_location.state;
        var tempFar=data.current_observation.temp_f + "&#176;" + "F";
        var tempCel=data.current_observation.temp_c + "&#176;" + "C";
        
        $(".city").html(city);
        $(".type").html(type);
        $(".temperature").html(tempFar);
      
      //https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary&_ga=2.107369538.1958219686.1498710252-1057868763.1498710252  
        //change background pics
    var code = data.current_observation.icon;  
      if (code === "tstorms" || code === "chancetstorms") {// weatherPic = backgroundImg.thunder; 
        $("body").css("background-image", "url(https://static.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg)"); 
      } else if (code === "rain" || code === "sleet" || code === "chancesleet" || code === "chancerain") { //weatherPic = backgroundImg.rain;
         $("body").css("background-image", "url(https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg)");
      } else if (code === "snow"  || code === "flurries" || code === "chancesnow" || code === "chanceflurries") {// weatherPic = backgroundImg.snow;
         $("body").css("background-image", "url(https://static.pexels.com/photos/235621/pexels-photo-235621.jpeg)");
      } else if (code === "fog" || code === "hazy") {// weatherPic = backgroundImg.mist;
        $("body").css("background-image", "url(https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg)");
      } else if (code==="clear" || code === "partlysunny" || code === "mostlysunny") {// weatherPic = backgroundImg.clear;
        $("body").css("background-image", "url(https://static.pexels.com/photos/353140/pexels-photo-353140.jpeg)");
      } else if (code==="cloudy" || code === "partlycloudy" || code === "mostlycloudy") {// weatherPic = backgroundImg.clouds;
         $("body").css("background-image", "url(https://static.pexels.com/photos/273280/pexels-photo-273280.jpeg)");
      } else if (code === "unknown" ) {//  weatherPic = backgroundImg.extreme;
        $("body").css("background-image", "url(https://i.ytimg.com/vi/EinzBoVnmRs/maxresdefault.jpg)");
      } else {// weatherPic = backgroundImg.default;
       $("body").css("background-image", "url(https://static.pexels.com/photos/247528/pexels-photo-247528.jpeg)");
      }
        
        //click on radio button to toggle
      $('#far').on('click', function(){
                  $(".temperature").html(tempFar);
      });
      $('#cel').on('click', function(){
                  $(".temperature").html(tempCel);
      });
        
        //click on temp to toggle
        var tempSwap=false
        $(".temperature").click(function(){
        if(tempSwap===false){
          $(".temperature").html(tempCel);
          tempSwap=true;
        }else{
          $(".temperature").html(tempFar);
          tempSwap=false;
        }
          
        });
    });
    });
  
    });
  //My solution was inspired by CodingTutorials360
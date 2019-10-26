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
      var apiKey="d4e9ed0b810e73c1c9f8bf217231a27f";
      var api="http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + apiKey;
  
      $.getJSON(api,function(data){
        var type=data.weather.main;
        var city=data.name;
        var tempKel=data.main.temp;
        var tempFar= ((tempKel*(9/5)-459.67).toFixed(1)) + "&#176;" + "F";
        var tempCel= ((tempKel-273).toFixed(1)) + "&#176;" + "C";
        //https://www.youtube.com/watch?v=aLKJhOmBjBw&t=83s
        $(".city").html(city);
        $(".type").html(type);
        $(".temperature").html(tempFar);
      
        //change background pics
      /*var code = data.current_observation.icon;  
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
      }*/
        
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
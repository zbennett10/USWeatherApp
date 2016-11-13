/// <reference path="../Scripts/jquery-3.1.1.min.js" />
/// <reference path="../Scripts/jquery-3.1.1.intellisense.js" />

$(document).ready(function () {
    var weatherjson;
    var cityname;
    var F;
    var C;

    $("#submitbutton").click(function () {
        cityname = $("input:text").val();
        //cityname = cityname.replace(/\s+/g, '');

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "," + "US" + "&APPID=156ce1f2ff11af0169f79b186098b7a6", function (json) {
            $("#location").html(JSON.stringify(json.name));



            var temperature = JSON.stringify(json.main["temp"]);

            F = Math.round(((temperature - 273.15) * 1.8) + 32);

            C = Math.round(((F) - 32) * (5 / 9));

            $("#degreechanger").mouseenter(function () {
                $("#temp").html(C);
                $("#degreechanger").attr("src", "https://cdn1.iconfinder.com/data/icons/weather-vol-03/48/thermometer-temperature-reading-degree-celsius-centigrade-512.png");
            });

            $("#degreechanger").mouseleave(function () {
                $("#temp").html(F);
                $("#degreechanger").attr("src", "https://cdn1.iconfinder.com/data/icons/weather-21/96/Fahrenheit-512.png");
            });


            $("#temp").html(F);


            var weatherdesc = JSON.stringify(json.weather[0]["main"]);

            if (weatherdesc === '"Clouds"') {

                if (JSON.stringify(json.weather[0]["description"]) === '"broken clouds"') {
                    $("i").attr("class", "wi wi-day-cloudy");
                }

                else {
                    $("i").attr("class", "wi wi-cloudy");
                }
            }

            else if (weatherdesc === '"Clear"') {
                $("i").attr("class", "wi wi-day-sunny");
            }

            else if (weatherdesc === '"Rain"') {
                $("i").attr("class", "wi wi-night-rain");
            }

            else {
                $("i").attr("class", "wi wi-day-cloudy");
            }




        });

    });








});

window.addEventListener("load", () => {

   var searchBtn = document.getElementById("search-button");
   var searching = document.getElementById("searchValue");


    searchBtn.addEventListener("click", () => {
            var fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searching.value}&appid=7d96cc759a2a1cb81c037ea853a85826&units=imperial`
            fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                var tileIndex = 1;
                for (var i = 0; i < data.list.length; i++){
                    if (data.list[i].dt_txt.includes('15:00:00')) {
                        var date = document.getElementById("date"+ tileIndex);
                        date.textContent = new Date(data.list[i].dt_txt).toLocaleDateString();
                        var humidity = document.getElementById("humidity"+ tileIndex);
                        humidity.textContent = "Humidity: " + data.list[i].main.humidity + " %";
                        var windSpeed = document.getElementById("windSpeed"+ tileIndex);
                        windSpeed.textContent = "Wind Speed: " + data.list[i].wind.speed + " MPH";
                        var temp = document.getElementById("temp"+ tileIndex);
                        temp.textContent = "Temperature: " + data.list[i].main.temp + " °F";
                        var img = document.getElementById("img" + tileIndex);
                        img.setAttribute("src","https://openweathermap.org/img/w/"+ data.list[i].weather[0].icon+".png");
                        tileIndex++;
                    }
                }
            })
    })

    searchBtn.addEventListener("click", () => {
        var fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searching.value}&appid=7d96cc759a2a1cb81c037ea853a85826&units=imperial`
        fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            var titleToday = document.getElementById("titleToday");
                titleToday.textContent =`${data.name} (${new Date().toLocaleDateString()})`;
            var todayIcon = document.getElementById("todayIcon");
                todayIcon.setAttribute("src","https://openweathermap.org/img/w/"+ data.weather[0].icon+ ".png");
            var windSpeedToday = document.getElementById("windSpeedToday");
                windSpeedToday.textContent = "Wind Speed: " + data.wind.speed + " MPH";
            var humidityToday = document.getElementById("humidityToday");
                humidityToday.textContent = "Humidity: " + data.wind.speed + " %";
            var tempToday = document.getElementById("tempToday");
                tempToday.textContent = "Temperature: " + data.main.temp + " °F";   
        })
    })
    
    $("#search-button").on("click", function(){
        localStorage.clear();
        cityName = $("#searchValue").val().trim()
        localStorage.setItem("searchValue", cityName)
        $("#history").html(" ")
    })

    function cities(){

        var lastcity = localStorage.getItem("searchValue")
        $("#searchValue").val(lastcity)
        $("#history").html(lastcity)
        //var textCity = document.getElementById("searchValueList");
        //textCity.textContent = listItemCity;
        //listItemCity.addEventListener("click", function(){
         //   $("#searchValue").appendChild(listItemCity);
        //})
    }
        cities()

    
})
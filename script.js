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
                        humidity.textContent = "Humidity: " + data.list[i].main.humidity + "%";
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
            
            
        })
    })

})
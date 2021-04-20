
window.addEventListener("load", () => {

   
    var searchBtn = document.getElementById("search-button");

    searchBtn.addEventListener("click", () => {
        update()
    })

})
var searching = document.getElementById("searchValue");
function update(){
    var endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${searching.value}&appid=7d96cc759a2a1cb81c037ea853a85826&units=imperial`
        fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
            
        })
};

for(var i = 0; i < data.list.length; i++){

    if (data.list[i].dt_txt.indexOf('15:00:00') !== -1){


}
}


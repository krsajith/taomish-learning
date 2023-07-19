let cityContent= document.getElementById("city-name");
let displayArea= document.querySelector("#weather");
let formText= document.getElementById("formid");
let API_KEY= '2fa73590fd8b5a4c6e68098ad5625395';


async function getWeather(city) {
    displayArea.innerHTML= `<p> loading... </p>`;
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response= await fetch(url);
    let data= await response.json();
    return showWeather(data);
}

let showWeather= ((data) => {
    if( data.code === 404){
        displayArea.innerHTML=("city not foound");
        return;
    }
        displayArea.innerHTML= `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png""> 
        <div><h2>${data.main.temp} ℃</h2>
        <h3>${data.weather[0].main}</h4></div> `
});

formText.addEventListener("submit",(event) => {
    
    getWeather(cityContent.value);
    event.preventDefault();
})

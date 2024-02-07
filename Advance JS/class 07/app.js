let API_KEY = `******************************************`;     
   
let WeatherImage = `https://openweathermap.org/img/wn/10d@2x.png`   

let getWeather = async (city)=>           
{        
    weather.innerHTML = `<div class="spinner-grow text-success" role="status">     
    <span class="visually-hidden">Loading...</span>      
  </div>`  
             
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;     

    let response = await fetch(url);   
   
    let data = await response.json();     
   
    console.log(data);
   
    return showWeather(data)
}   

let showWeather = (getData)=>{

    if(getData.cod == "404"){
        Swal.fire({
            icon: "error",
            title: "Bad input..",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        
    }

    else if (getData.cod == "400")
    {
        Swal.fire({
            icon: "error",
            title: "Enter input Field",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    else
    {
        let weather = document.getElementById("weather");
        
        weather.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${getData.weather[0].icon}@2x.png" alt="">
        <div>
            <h2>${getData.main.temp} C</h2>
            <h2>${getData.weather[0].main}</h2>
            </div>
            `
        }
}

function getValue(){
    let input = document.getElementById("search");
    getWeather(input.value)
}

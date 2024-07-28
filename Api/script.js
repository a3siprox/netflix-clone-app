// script.js
const apiKey = "f34d2929209f218564cfc64918b0b0ad"; // replace with your API key
const city = "Addis Ababa"; // replace with your city
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
'http://api.openweathermap.org/data/2.5/weather?q=london&appid=f34d2929209f218564cfc64918b0b0ad'

http: fetch(url)
	.then((response) => response.json())
	.then((data) => {
		const weatherData = document.getElementById("weather-data");
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		weatherData.innerHTML = `
            <h2>Current Weather in ${city}</h2>
            <img src='${iconUrl}'/>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
	})
	.catch((error) => console.error("Error:", error));

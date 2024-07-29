// script.js
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

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

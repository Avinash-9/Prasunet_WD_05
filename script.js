document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const apiKey = '6f0dadf5107dd1988382a39b4aa1d718'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Error fetching the weather data');
    }
}

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found');
        return;
    }

    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>${data.weather[0].description}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} m/s</p>
    `;
}

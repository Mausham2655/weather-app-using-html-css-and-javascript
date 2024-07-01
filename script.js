async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = '<p>An error occurred. Please try again.</p>';
    }
}

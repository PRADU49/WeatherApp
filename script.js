// https://geocoding-api.open-meteo.com/v1/search?name=Delhi


// https://api.open-meteo.com/v1/forecast?latitude=28.6519&longitude=77.2315&current_weather=true

const btn = document.getElementById('btn');
const output = document.getElementById('data');

btn.addEventListener("click", async () => {
    const city = document.getElementById('city').value;

    try {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        const geoData = await geoRes.json();

        const lat = geoData.results[0].latitude;
        const log = geoData.results[0].longitude;

        const weather = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&current_weather=true`
        );

        const weatherJSONData = await weather.json();

        const temp = weatherJSONData.current_weather.temperature;
        const wind = weatherJSONData.current_weather.windspeed;

        output.innerHTML += `<p>${city.charAt(0).toUpperCase() + city.slice(1)} Temperature ${temp}°C</p>
        <br> <p>${city.charAt(0).toUpperCase() + city.slice(1)} Wind Speed ${wind}km/h</p> <br>`

    } catch (error) {
        
    };
});
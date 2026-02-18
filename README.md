# 🌦️ Weather App

A simple and responsive Weather Application built using **HTML, CSS, and JavaScript** that fetches real-time weather data using the **Open-Meteo API**.

---

## Live Demo

https://pradu49.github.io/WeatherApp/

## 📌 Features

- 🌍 Search weather by city name  
- 🌡️ Displays current temperature  
- 💨 Shows wind speed  
- 🎨 Clean and modern UI  
- ⚡ Real-time API data fetching using `fetch()`  
- 🛡️ Basic error handling  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Open-Meteo Geocoding API  
- Open-Meteo Weather Forecast API  

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html      # Main HTML structure
├── style.css       # Styling file
└── script.js       # JavaScript logic and API calls
```

---

## 🚀 How It Works

1. User enters a city name.
2. The app fetches latitude and longitude using the **Geocoding API**.
3. It then fetches current weather data using the **Weather Forecast API**.
4. Temperature and wind speed are displayed on the screen.

---

## 🔗 API Endpoints Used

### Geocoding API
```text
https://geocoding-api.open-meteo.com/v1/search?name=CITY_NAME
```

### Weather API
```text
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
```

---

## ▶️ How to Run the Project

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Enter a city name.
4. Click **"Know Weather"**.
5. View the weather details instantly.

---

## ⚠️ Error Handling

If something goes wrong (e.g., invalid city name or network issue), the app displays:

```text
Something is wrong please try again!
```

---

## 🎯 Future Improvements

- Add weather icons 🌤️  
- Show humidity and pressure  
- Add 5-day forecast  
- Improve UI animations  
- Add loading spinner  

---

## 📄 License

This project is open-source and free to use for learning purposes.

---

### 👨‍💻 Author

Developed by PRADYUMNA
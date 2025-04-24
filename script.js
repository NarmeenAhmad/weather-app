const apiKey = "7b8af4111886d49e75fd3ea469d9f775"; // your actual key

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        alert("City not found 😢");
        return;
    }

    const data = await response.json();
    document.getElementById("weatherBox").classList.remove("hidden"); // Corrected ID
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp} °C`;
    document.getElementById("condition").textContent = `☁️ ${data.weather[0].main}`;

}

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city !== "") getWeather(city);
});
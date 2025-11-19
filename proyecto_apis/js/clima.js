const API_KEY = 'c1333a71adfe21e0c656c5d9a8bfee16'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('buscar-clima-btn').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudad-input').value.trim();
    if (!ciudad) {
        alert("Por favor, ingresa una ciudad.");
        return;
    }

    const url = `${BASE_URL}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('temp').textContent = `${data.main.temp}°C`;
            document.getElementById('humedad').textContent = `${data.main.humidity}%`;
            document.getElementById('descripcion').textContent = data.weather[0].description;
        } else {
            alert(`Error al buscar clima: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert("Hubo un error al conectar con el servicio del clima.");
    }
});
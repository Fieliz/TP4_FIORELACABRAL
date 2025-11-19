const BASE_URL = 'https://restcountries.com/v3.1/name/';

document.getElementById('buscar-pais-btn').addEventListener('click', async () => {
    const paisNombre = document.getElementById('pais-input').value.trim();
    if (!paisNombre) {
        alert("Por favor, ingresa el nombre de un país.");
        return;
    }

    const url = `${BASE_URL}${paisNombre}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.length > 0) {
            const pais = data[0]; // Usamos el primer resultado
            document.getElementById('pais-nombre').textContent = pais.name.common;
            document.getElementById('pais-capital').textContent = pais.capital ? pais.capital[0] : 'N/A';
            document.getElementById('pais-poblacion').textContent = pais.population.toLocaleString();
            document.getElementById('pais-bandera').src = pais.flags.svg;
        } else {
            alert(`No se encontró el país: ${paisNombre}`);
        }
    } catch (error) {
        console.error('Error fetching country:', error);
        alert("Hubo un error al conectar con el servicio de países.");
    }
});
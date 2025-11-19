const BASE_URL = 'https://rickandmortyapi.com/api/character/';

document.getElementById('buscar-rick-btn').addEventListener('click', async () => {
    const id = document.getElementById('rick-input').value.trim();
    if (!id || isNaN(id) || id <= 0) {
        alert("Por favor, ingresa un ID válido (número positivo).");
        return;
    }

    const url = `${BASE_URL}${id}`;

    try {
        const response = await fetch(url);
        
        if (response.status === 404) {
            alert(`No se encontró el personaje con ID: ${id}`);
            return;
        }

        const data = await response.json();

        document.getElementById('rick-nombre').textContent = data.name;
        document.getElementById('rick-imagen').src = data.image;
        document.getElementById('rick-estado').textContent = data.status;
        document.getElementById('rick-especie').textContent = data.species;

    } catch (error) {
        console.error('Error fetching Rick & Morty character:', error);
        alert("Hubo un error al conectar con el servicio de Rick & Morty.");
    }
});
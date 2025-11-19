const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('buscar-pokemon-btn').addEventListener('click', async () => {
    const query = document.getElementById('pokemon-input').value.trim().toLowerCase();
    if (!query) {
        alert("Por favor, ingresa un nombre o ID de Pokémon.");
        return;
    }

    const url = `${BASE_URL}${query}`;

    try {
        const response = await fetch(url);
        
        if (response.status === 404) {
            alert(`No se encontró el Pokémon con el nombre/ID: ${query}`);
            return;
        }

        const data = await response.json();

        // Obtener tipos
        const tipos = data.types.map(t => t.type.name).join(', ');
        // El peso en la API está en hectogramos (hg), se convierte a kg
        const pesoKg = data.weight / 10; 

        document.getElementById('poke-nombre').textContent = data.name.toUpperCase();
        document.getElementById('poke-imagen').src = data.sprites.front_default;
        document.getElementById('poke-tipo').textContent = tipos;
        document.getElementById('poke-peso').textContent = `${pesoKg} kg`;

    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        alert("Hubo un error al conectar con el servicio de Pokémon.");
    }
});
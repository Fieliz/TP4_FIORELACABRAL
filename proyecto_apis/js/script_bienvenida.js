// Función para obtener el nombre de usuario
function obtenerNombreUsuario() {
    let nombre = localStorage.getItem('usuarioNombre');
    let apellido = localStorage.getItem('usuarioApellido');

    if (!nombre || !apellido) {
        // Mensaje de bienvenida inicial
        alert("¡Bienvenido/a a nuestro proyecto de APIs!");

        // Preguntar por nombre y apellido
        nombre = prompt("Por favor, ingresa tu Nombre:");
        apellido = prompt("Ahora, ingresa tu Apellido:");

        // Guardar en el almacenamiento local para no preguntar cada vez
        if (nombre && apellido) {
            localStorage.setItem('usuarioNombre', nombre);
            localStorage.setItem('usuarioApellido', apellido);
        }
    }

    return { nombre, apellido };
}

// Función para mostrar el mensaje en el HTML
function mostrarBienvenida() {
    const { nombre, apellido } = obtenerNombreUsuario();
    const bienvenidaContainer = document.getElementById('bienvenida-container');

    if (nombre && apellido) {
        bienvenidaContainer.innerHTML = `
            <h2>👋 ¡Hola, **${nombre} ${apellido}**!</h2>
            <p>Selecciona una API para comenzar a explorar sus datos.</p>
        `;
    } else {
        bienvenidaContainer.innerHTML = `
            <h2>👋 ¡Hola!</h2>
            <p>Para personalizar tu experiencia, actualiza la página y completa tu nombre.</p>
        `;
    }
}

// Ejecutar al cargar la página
window.onload = mostrarBienvenida;
function manejarLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value;
    const mensajeDiv = document.getElementById('mensaje');

    // Validaciones simples
    if (!usuario || !contrasena) {
        mostrarMensaje('Por favor completa todos los campos', 'error');
        return;
    }

    if (contrasena.length < 6) {
        mostrarMensaje('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }

    // Si pasa las validaciones
    mostrarMensaje(`¡Bienvenido ${usuario}! Iniciando sesión...`, 'exito');

    // Limpiar campos después de 2 segundos
    setTimeout(() => {
        document.getElementById('formLogin').reset();
        document.getElementById('usuario').focus();
    }, 2000);
}

function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.className = 'mensaje ' + tipo;

    // Desvanecerse después de 3 segundos
    setTimeout(() => {
        mensajeDiv.classList.remove(tipo);
    }, 3000);
}

// Permitir envío con Enter
document.getElementById('formLogin').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        manejarLogin(e);
    }
});
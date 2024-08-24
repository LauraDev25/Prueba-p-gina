document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Mostrar el mensaje de confirmación
    document.getElementById('confirmation-message').style.display = 'block';

    // Opcional: limpiar el formulario después de enviar
    this.reset();
});
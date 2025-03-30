function validarFormulario() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    alert('Inicio de sesión exitoso');
    return true;
}
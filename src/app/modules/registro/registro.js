function validarPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmar-password').value;
    const mensajeError = document.getElementById('mensajeError');
    
    if (password !== confirmPassword && confirmPassword !== '') {
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
}

function validarFormulario() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmar-password').value;
    
    if (password !== confirmPassword) {
        alert('¡Las contraseñas no coinciden!');
        return false;
    }
    alert('Registro exitoso');
    return true;
}
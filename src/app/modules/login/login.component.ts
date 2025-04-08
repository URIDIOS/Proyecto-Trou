import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../Service/auth.service';
import { LoginRequest } from '../../Service/login';

@Component({
  selector: 'app-login',
  standalone: true, // <-- Importante si usas componentes independientes
  imports: [CommonModule], // <-- Aquí agregas CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(email: string, password: string) {
    if (!email || !password) {
      this.errorMessage = 'Por favor, ingresa tu correo y contraseña.';
      return;
    }
  
    const credentials: LoginRequest = {
      email: email,
      contraseña: password
    };
  
    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log('Respuesta del servidor:', res);  
        if (res.isSuccess) {
          console.log('Inicio de sesión exitoso, redirigiendo a /menu...');
          this.router.navigate(['/menu']);  
        } else {
          console.log('Error de autenticación:', res.message);
          this.errorMessage = res.message || 'Correo o contraseña incorrectos';
        }
      },
      error: (err) => {
        console.error('Error al autenticar:', err);
        this.errorMessage = 'Error al conectar con el servidor';
      }
    });
  }
  
  

  RedirecRegistro() {
    this.router.navigate(['/registro']);
  }

  RedirecContrasena() {
    this.router.navigate(['/password-recovery']);
  }

}
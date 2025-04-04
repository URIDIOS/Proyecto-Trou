import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private registroService: RegistroService) {}

  registrarUsuario() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoRegistro = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.registroService.createRegistro(nuevoRegistro).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        this.RedirecMenu();
      },
      error: (error) => {
        console.log(nuevoRegistro)
        console.error('Error al registrar:', error);
        alert('Hubo un error al registrar. Revisa los datos o la conexión.');
      }
    });
  }

  RedirecLogin() {
    this.router.navigate(['/login']);
  }

  RedirecMenu() {
    this.router.navigate(['/menu']);
  }
}

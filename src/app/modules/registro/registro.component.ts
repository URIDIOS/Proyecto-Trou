import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Service/usuario.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../api';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent implements OnInit {
  

  private usuarioService = inject(UsuarioService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formUsuario : FormGroup;

  constructor() {
    this.formUsuario = this.formBuild.group({
      nombre: ['', Validators.required],   
      correo: ['', [Validators.required, Validators.email]],   
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  guardar() {
    if (this.formUsuario.invalid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const objeto: Usuario = {
      _id: 0, // Set `_id` dynamically if needed
      nombre: this.formUsuario.value.nombre,
      correo: this.formUsuario.value.correo,
      contraseña: this.formUsuario.value.contraseña,
    };

    console.log("Objeto a guardar:", objeto); // Debugging

    this.usuarioService.crear(objeto).subscribe({
      next: (data) => {
        if (data.isRuccess) {
          this.router.navigate(['/login']);
        } else {
          alert("Error al registrar");
        }
      },
      error: (err) => {
        console.error("Error en el registro:", err.message);
      }
    });
  }

  RedirecLogin(){
    this.router.navigate(['/login']) //redirecciona al home
  }  
}

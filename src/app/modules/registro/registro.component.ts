import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Service/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../api';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent implements OnInit {
  
  @Input('id') _id!: number; 
  private usuarioService = inject(UsuarioService);
  public formBuild = inject(FormBuilder);

  public formUsuario:FormGroup = this.formBuild.group({
    nombre:[''],
    correo:[''],   
    contraseña:[''],
  })

  ngOnInit(): void {
  }

  guardar(){
    const objeto : Usuario={
      _id : this._id,
      nombre : this.formUsuario.value.nombre,
      correo : this.formUsuario.value.correo,
      contraseña : this.formUsuario.value.contraseña ,
    }
    if(this._id == 0){
      this.usuarioService.crear(objeto).subscribe({
        next:(data)=>{
          if(data.isRuccess){
            this.router.navigate(['/login'])
          }
          else{
            alert("Error al registrar")
          }
        },
        error:(err)=>{
          console.log(err.message)
        }
      })
    }
    else{
      this.usuarioService.edittar(objeto).subscribe({
        next:(data)=>{
          if(data.isRuccess){
            this.router.navigate(['/login'])
          }
          else{
            alert("Error al editar")
          }
        },
        error:(err)=>{
          console.log(err.message)
        }
      })
    }
  }

  constructor(private router:Router){}

  RedirecLogin(){
    this.router.navigate(['/login']) //redirecciona al home
  }  
}

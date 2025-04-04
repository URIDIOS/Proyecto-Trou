import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
=======
import { UsuarioService } from '../../Service/usuario.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
>>>>>>> 19e12fe (Registro Funcional)
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

<<<<<<< HEAD
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
=======
export class RegistroComponent implements OnInit {
  
  @Input('id') _id!: number; 
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

  guardar(){
     const objeto : Usuario={
       _id : this._id,
       nombre : this.formUsuario.value.nombre,
       correo : this.formUsuario.value.correo,
       contraseña : this.formUsuario.value.contraseña ,
     }
     if(this._id == null){
       this.usuarioService.crear(objeto).subscribe({
         next:(data)=>{
           if(data.isRuccess){
             this.router.navigate(['/login'])
           }
           else{
            this.router.navigate(['/login'])
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
>>>>>>> 19e12fe (Registro Funcional)

  RedirecLogin() {
    this.router.navigate(['/login']);
  }

  RedirecMenu() {
    this.router.navigate(['/menu']);
  }
}

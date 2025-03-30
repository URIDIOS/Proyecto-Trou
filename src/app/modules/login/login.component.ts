import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router : Router){}

  RedirecMenu(){
    this.router.navigate(['/menu'])
  }  
  RedirecRegistro(){
    this.router.navigate(['/registro'])
  } 
  RedirecContrasena(){
    this.router.navigate(['/password-recovery'])
  } 

}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css'],
  imports : [RouterLink]
})
export class PasswordRecoveryComponent {
  
    constructor(private router : Router){

    }
    navigateToLogin() {
      this.router.navigateByUrl("login");  // navegacion al login
    }

}

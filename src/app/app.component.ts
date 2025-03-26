import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistroComponent } from './modules/registro/registro.component';
import { MenuComponent } from './modules/menu/menu.component';
import { PasswordRecoveryComponent } from './modules/password-recovery/password-recovery.component';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RegistroComponent,MenuComponent,PasswordRecoveryComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trou';
}

import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [

    { path: 'registro', component: RegistroComponent },

    { path: 'password-recovery', component: PasswordRecoveryComponent},

    { path: 'login', component: LoginComponent },

    { path: 'menu', component: MenuComponent }

];

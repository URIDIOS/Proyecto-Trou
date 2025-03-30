import { Routes } from '@angular/router';
import { RegistroComponent } from './modules/registro/registro.component';
import { PasswordRecoveryComponent } from './modules/password-recovery/password-recovery.component';
import { LoginComponent } from './modules/login/login.component';
import { MenuComponent } from './modules/menu/menu.component';

export const routes: Routes = [

    { path: '', component: LoginComponent },

    { path: 'registro', component: RegistroComponent },

    { path: 'password-recovery', component: PasswordRecoveryComponent},

    { path: 'login', component: LoginComponent },

    { path: 'menu', component: MenuComponent }

];

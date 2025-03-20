import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ChartComponent,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  username: string = "Administrador";
  msgestado: string = "Abrir";

  estado: boolean = false;  

  checkbutton(){
    if (this.estado == true){
      this.estado = false;
      this.msgestado = "Cerrar";
    }
    else
    {
      this.estado = true;
      this.msgestado = "Abrir";
    }
  }
}

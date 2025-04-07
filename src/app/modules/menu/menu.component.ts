import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ChartComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  username: string = "Miguel Octavio";
  msgestado: string = "Abrir";

  constructor(private router : Router){}

  RedirecHistorial(){
    this.router.navigate(['/historial'])
  }  

}

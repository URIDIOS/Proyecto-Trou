import { Component, OnInit } from '@angular/core';

import { Chart, Colors, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{
  public config: any = {   

        //'rgb(8, 51, 129)',
        //'rgb(20, 192, 155)',
        //'rgb(19, 138, 35)',
        //'rgb(83, 226, 47)',
        //'rgb(245, 255, 105)',
        //'rgb(240, 161, 42)',
        //'rgb(194, 16, 16)'
      
    type: 'bar',
    data: {
      labels: ['Lundi', 'Mardi', 'Mercedi', 'Juedi', 
        'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [{
        label: 'Mai, Semaine 1',        
        data: [7,5,3,2,6,11,2],
        backgroundColor: [
          'rgb(20, 192, 155)'
        ],            
        hoverOffset: 10
      },
      {
        label: 'Mai, Semaine 2',        
        data: [5,8,9,11,12,5,3],
        backgroundColor: [
          'rgb(19, 138, 35)'
        ],            
        hoverOffset: 10
      },
      {
        label: 'Mai, Semaine 3',        
        data: [9,6,4,3,4,9,12],
        backgroundColor: [
          'rgb(240, 161, 42)'
        ],            
        hoverOffset: 10
      }]
    }
  };
  
chart: any;
ngOnInit(): void {
  this.chart = new Chart('MyChart', this.config)
}
}

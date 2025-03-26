import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{
  public config: any = {
    type: 'doughnut',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'],
      datasets: [{
        label: 'My First Dataset',
        data: [2, 3, 4, 4, 7, 3, 9, 3, 1, 11, 7, 3],
        backgroundColor: [
          'rgb(187, 33, 79)',
          'rgb(138, 17, 108)',
          'rgb(74, 5, 92)',
          'rgb(8, 51, 129)',
          'rgb(20, 192, 155)',
          'rgb(19, 138, 35)',
          'rgb(83, 226, 47)',
          'rgb(245, 255, 105)',
          'rgb(247, 215, 37)',
          'rgb(240, 161, 42)',
          'rgb(202, 102, 9)',
          'rgb(194, 16, 16)'
        ],
        hoverOffset: 4
      }]
    }
  };
  
chart: any;
ngOnInit(): void {
  this.chart = new Chart('MyChart', this.config)
}
}

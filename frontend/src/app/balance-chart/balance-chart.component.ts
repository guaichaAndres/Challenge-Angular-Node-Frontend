import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrls: ['./balance-chart.component.css']
})
export class BalanceChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Lun', 'Mar', 'Jue', 'Vier', 'Sab', 'Dom' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55 ], label: 'Egresos' },
      { data: [ 28, 48, 40, 19, 86, 27 ], label: 'Ingresos' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

}

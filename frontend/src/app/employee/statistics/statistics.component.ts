import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  

  // barchart
  public barChartLabels = ['2015', '2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [22, 15, 16, 16, 14], label: 'Resolved NCs'},
  ];

  /*//doughnut
  public doughnutChartLabels = ['NCs Q1', 'NCs Q2', 'NCs Q3', 'NCs Q4'];
  public doughnutChartData = [2, 4, 4, 1];
  public doughnutChartType = 'doughnut';*/

  //radar
  public radarChartLabels = ['Selection', 'Finishing', 'Repair', 'Override', 'Alternative use', 'Utilization', 'Return', 'Scarting'];
  public radarChartData = [
    {data: [1, 1, 2, 3, 2, 4, 1, 2], label: '2018'},
    {data: [1, 2, 3, 1, 2, 3, 1, 1], label: '2019'}
  ];
  public radarChartType = 'radar';

  //pie
  public pieChartLabels = ['NCs Q1', 'NCs Q2', 'NCs Q3', 'NCs Q4'];
  public pieChartData = [3, 5, 2, 4];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}

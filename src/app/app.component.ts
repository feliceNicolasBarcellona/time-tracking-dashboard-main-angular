import { Component, OnInit } from '@angular/core';
import { Data, Timeframes } from 'src/model/data';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: Data[] = [];
  selectedPeriod: string = 'Weekly';
  periodLabel: string = 'Week';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res) => (this.data = res));
  }

  setActive(period: string): void {
    this.selectedPeriod = period;

    switch (period) {
      case 'Daily':
        this.periodLabel = 'Day';
        break;
      case 'Weekly':
        this.periodLabel = 'Week';
        break;
      default:
        this.periodLabel = 'Month';
        break;
    }
  }
}

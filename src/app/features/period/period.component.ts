import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent {
  @Input() selectedPeriod: string | null = null;
  @Output() setActive: EventEmitter<string> =  new EventEmitter()
}

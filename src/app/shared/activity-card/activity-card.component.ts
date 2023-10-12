import { Component, Input } from '@angular/core';
import { Item } from 'src/model/data';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {
  @Input() selectedPeriod: string | null = null
  @Input() item: Item | null = null
  @Input() periodLabel: string | null = null
}

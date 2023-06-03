import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-status',
  templateUrl: './chip-status.component.html',
  styleUrls: ['./chip-status.component.scss']
})
export class ChipStatusComponent {
  @Input() status: string;

  

}

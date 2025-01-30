import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardComponent } from './grid-card/grid-card.component';
import { Property } from '../../../models/property.model';

@Component({
  imports: [CommonModule, GridCardComponent],
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
})
export class GridViewComponent {
  @Input() properties: Property[] = [];
}

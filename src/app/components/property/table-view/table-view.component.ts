import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Property } from '../../../models/property.model';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent {
  @Input() properties: Property[] = [];
}

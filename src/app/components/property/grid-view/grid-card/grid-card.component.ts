import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Property } from '../../../../models/property.model';
import { PropertyTagsComponent } from './property-tags/property-tags.component';
import { PercentageBoxComponent } from './percentage-box/percentage-box.component';
@Component({
  selector: 'app-grid-card',
  imports: [RouterLink, PropertyTagsComponent, PercentageBoxComponent],
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css',
})
export class GridCardComponent {
  @Input() property: Property = {} as Property;
}

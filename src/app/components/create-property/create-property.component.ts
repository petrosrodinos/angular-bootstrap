import { Component, input } from '@angular/core';
import { PropertyFormsComponent } from './property-forms/property-forms.component';
import { Property } from '../../models/property.model';
import { PropertyPanelsComponent } from './property-panels/property-panels.component';
import { PropertyPreviewComponent } from './property-preview/property-preview.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-property',
  imports: [
    PropertyFormsComponent,
    PropertyPanelsComponent,
    PropertyPreviewComponent,
    RouterLink,
  ],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css',
})
export class CreatePropertyComponent {
  property = input<Property | null>(null);
}

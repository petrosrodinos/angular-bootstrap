import { Component, input } from '@angular/core';
import { PropertyFormsComponent } from './property-forms/property-forms.component';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-create-property',
  imports: [PropertyFormsComponent],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css',
})
export class CreatePropertyComponent {
  property = input<Property | null>(null);
}

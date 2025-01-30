import { Component, input, effect } from '@angular/core';
import { Property } from '../../../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-preview',
  imports: [CommonModule],
  templateUrl: './property-preview.component.html',
  styleUrl: './property-preview.component.css',
})
export class PropertyPreviewComponent {
  property = input<Property | null>(null);
}

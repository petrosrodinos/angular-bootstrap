import { Component, input, effect } from '@angular/core';
import { Property } from '../../../models/property.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PropertyStoreService } from '../../../stores/property-store/property-store.service';

@Component({
  selector: 'app-property-preview',
  imports: [CommonModule],
  templateUrl: './property-preview.component.html',
  styleUrl: './property-preview.component.css',
})
export class PropertyPreviewComponent {
  property$: Observable<Partial<Property>>;

  constructor(private propertyStore: PropertyStoreService) {
    this.property$ = this.propertyStore.property$;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-property-panels',
  templateUrl: './property-panels.component.html',
  styleUrls: ['./property-panels.component.css'],
})
export class PropertyPanelsComponent {
  panels = [
    { id: 'listing-details', name: 'Listing details' },
    { id: 'property-info', name: 'Property Info' },
    { id: 'location', name: 'Location' },
    { id: 'media', name: 'Media' },
    { id: 'check-in-check-out', name: 'Check-in & Check-out' },
    { id: 'amenities-appliances', name: 'Amenities & Appliances' },
    { id: 'points-of-interest', name: 'Points of interest' },
  ];

  selectedPanelId: string | null = 'listing-details';

  selectPanel(id: string) {
    this.selectedPanelId = id;
  }
}

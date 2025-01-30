import { Component, signal, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property/property.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from '../../components/property/table-view/table-view.component';
import { GridViewComponent } from '../../components/property/grid-view/grid-view.component';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../components/ui/spinner/spinner.component';
import { CardViewType } from '../../models/card-view.type';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-properties',
  imports: [
    TooltipModule,
    NgIf,
    CommonModule,
    GridViewComponent,
    TableViewComponent,
    RouterLink,
    SpinnerComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent implements OnInit {
  properties = signal<Property[]>([]);
  loading = signal<boolean>(true);
  viewMode: CardViewType = 'grid';

  constructor(private propertyService: PropertyService) {}

  async ngOnInit() {
    this.propertyService.getProperties().subscribe({
      next: (data) => {
        this.properties.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching properties:', err);
        this.loading.set(false);
      },
    });
  }

  toggleView(mode: CardViewType) {
    this.viewMode = mode;
  }
}

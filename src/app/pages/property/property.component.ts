import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property/property.service';
import { SpinnerComponent } from '../../components/ui/spinner/spinner.component';
import { Property } from '../../models/property.model';
import { CreatePropertyComponent } from '../../components/create-property/create-property.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CreatePropertyComponent, SpinnerComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  property = signal<Property | null>(null);
  loading = signal<boolean>(true);

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    const propertyId = this.activatedRoute.snapshot.params['id'];
    this.propertyService.getProperty(propertyId).subscribe({
      next: (property) => {
        console.log('property', property);
        this.property.set(property);
        this.loading.set(false);
      },
      error: (error) => {
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}

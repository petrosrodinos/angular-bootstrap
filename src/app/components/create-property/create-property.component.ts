import { Component, input, effect } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PropertyService } from '../../services/property/property.service';
import { catchError, tap, throwError } from 'rxjs';
import { SpinnerComponent } from '../../components/ui/spinner/spinner.component';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-create-property',
  imports: [NgIf, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css',
})
export class CreatePropertyComponent {
  propertyForm: FormGroup;
  property = input<Property | null>(null);
  loading = false;

  constructor(private propertyService: PropertyService) {
    this.propertyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });

    effect(() => {
      if (this.property()) {
        this.propertyForm.patchValue({
          name: this.property()!.name,
          description: this.property()!.description,
          image: this.property()!.image,
          city: this.property()!.city,
          state: this.property()!.state,
          country: this.property()!.country,
        });
      }
    });
  }

  handlePropertyFormSubmit() {
    this.loading = true;
    if (this.property()) {
      this.handleEditProperty();
    } else {
      this.handleCreateProperty();
    }
  }

  handleCreateProperty() {
    if (this.propertyForm.valid) {
      this.propertyService
        .createProperty(this.propertyForm.value)
        .pipe(
          tap(() => {
            this.propertyForm.reset();
            this.loading = false;
            alert('Property created successfully!');
          }),
          catchError((error) => {
            console.error('Error creating property:', error);
            this.loading = false;

            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }

  handleEditProperty() {
    if (this.propertyForm.valid && this.property()) {
      this.propertyService
        .updateProperty(this.property()!.id, this.propertyForm.value)
        .pipe(
          tap(() => {
            this.loading = false;
            alert('Property edited successfully!');
          }),
          catchError((error) => {
            console.error('Error editing property:', error);
            this.loading = false;
            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }
}

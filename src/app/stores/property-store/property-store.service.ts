import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyStoreService {
  private propertySubject = new BehaviorSubject<Partial<Property>>({});
  property$ = this.propertySubject.asObservable();

  updateProperty(property: Partial<Property>) {
    this.propertySubject.next({ ...this.propertySubject.value, ...property });
  }

  resetProperty() {
    this.propertySubject.next({});
  }
}

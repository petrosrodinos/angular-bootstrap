import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import {
  Property,
  NewProperty,
  UpdateProperty,
} from '../../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  http = inject(HttpClient);

  apiUrl = environment.apiUrl;

  getProperties() {
    const url = `${this.apiUrl}/properties`;
    const data = this.http.get<Property[]>(url);
    return data;
  }

  createProperty(property: NewProperty) {
    const url = `${this.apiUrl}/properties`;
    return this.http.post<Property>(url, property);
  }

  getProperty(id: string) {
    const url = `${this.apiUrl}/properties/${id}`;
    return this.http.get<Property>(url);
  }

  updateProperty(id: string, property: UpdateProperty) {
    const url = `${this.apiUrl}/properties/${id}`;
    return this.http.put<Property>(url, property);
  }
}

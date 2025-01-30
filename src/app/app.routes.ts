import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/properties/properties.component').then(
        (m) => m.PropertiesComponent
      ),
  },
  {
    path: 'properties',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/properties/properties.component').then(
        (m) => m.PropertiesComponent
      ),
  },
  {
    path: 'property/:id',
    loadComponent: () =>
      import('./pages/property/property.component').then(
        (m) => m.PropertyComponent
      ),
  },
  {
    path: 'properties/new',
    loadComponent: () =>
      import('./pages/new-property/new-property.component').then(
        (m) => m.NewPropertyComponent
      ),
  },
];

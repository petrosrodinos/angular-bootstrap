import { Component } from '@angular/core';
import { CreatePropertyComponent } from '../../components/create-property/create-property.component';
@Component({
  selector: 'app-new-property',
  imports: [CreatePropertyComponent],
  templateUrl: './new-property.component.html',
  styleUrl: './new-property.component.css',
})
export class NewPropertyComponent {
  constructor() {}
}

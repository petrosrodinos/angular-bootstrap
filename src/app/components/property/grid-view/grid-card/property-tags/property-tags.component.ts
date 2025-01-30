import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-property-tags',
  templateUrl: './property-tags.component.html',
  styleUrls: ['./property-tags.component.css'],
})
export class PropertyTagsComponent {
  @Input() tags: string[] = [];
}

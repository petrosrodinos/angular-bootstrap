import { Component, input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  loading = input<boolean>(false);
}

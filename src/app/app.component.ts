import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tourmie-test';
}

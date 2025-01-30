import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-percentage-box',
  templateUrl: './percentage-box.component.html',
  styleUrls: ['./percentage-box.component.css'],
})
export class PercentageBoxComponent implements OnInit {
  @Input() percentage!: string;
  boxColor: string = 'bg-success';

  constructor() {}

  ngOnInit(): void {
    if (!this.percentage) {
      this.percentage = (Math.floor(Math.random() * 100) + 1).toString();
    }
    this.setBoxColor();
  }

  setBoxColor() {
    const value = parseFloat(this.percentage);

    if (value >= 0 && value <= 30) {
      this.boxColor = 'bg-danger';
    } else if (value > 30 && value <= 60) {
      this.boxColor = 'bg-warning';
    } else if (value > 60 && value <= 75) {
      this.boxColor = 'bg-orange';
    } else if (value > 75 && value <= 100) {
      this.boxColor = 'bg-success';
    }
  }
}

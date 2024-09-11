
import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html'
})
export class TemperaturaComponent {
  celsius: number = 0;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html'
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string = '';

  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      this.classificacao = 'Peso normal';
    } else if (this.imc >= 25 && this.imc < 29.9) {
      this.classificacao = 'Sobrepeso';
    } else if (this.imc >= 30 && this.imc < 34.9) {
      this.classificacao = 'Obesidade grau I';
    } else if (this.imc >= 35 && this.imc < 39.9) {
      this.classificacao = 'Obesidade grau II';
    } else {
      this.classificacao = 'Obesidade grau III';
    }
  }
}

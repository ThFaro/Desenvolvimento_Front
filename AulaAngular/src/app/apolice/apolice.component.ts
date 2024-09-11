import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html'
})
export class ApoliceComponent {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number = 0;
  valorAutomovel: number = 0;
  apolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.apolice = this.idade <= 25 ? this.valorAutomovel * 0.15 : this.valorAutomovel * 0.10;
    } else {
      this.apolice = this.valorAutomovel * 0.08;
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { ImcComponent } from './imc/imc.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceComponent,
    TemperaturaComponent,
    ImcComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

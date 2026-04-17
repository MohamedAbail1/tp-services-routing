import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeProduit } from "./liste-produit/liste-produit";
import { ServiceProduit } from './services/service-produit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-services-routing');

}

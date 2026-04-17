import { Component, inject } from '@angular/core';
import { ServiceProduit } from '../services/service-produit';
import { Produit } from '../models/Produit';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-liste-produit',
  standalone: true,
  templateUrl: './liste-produit.html',
  imports: [RouterLink]
})
export class ListeProduit {

   // injection du service
  service = inject(ServiceProduit);

  products: Produit[] = this.service.getProduits();

  supprimer(id:number){
    this.service.deleteProduit(id);
    this.products=this.service.getProduits(); // refresh 
  }

  ajouter(){

    const newProduit: Produit = {
      id: 99,
      nom: 'Nouveau produit',
      description: 'test',
      prix: 100,
      quantite: 1
    };
    this.service.addProduit(newProduit);
    this.products = this.service.getProduits(); //refresh 

  }

}
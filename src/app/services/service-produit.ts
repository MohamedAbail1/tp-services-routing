import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit';

@Injectable({
  providedIn: 'root',  // crée une seule instance globale
})
export class ServiceProduit {

  products: Produit[] = [
    { id: 1, nom: 'Ordinateur portable', description: 'HP i5', prix: 3000, quantite: 10 },
    { id: 2, nom: 'Souris sans fil', description: 'Logitech', prix: 100, quantite: 50 },
    { id: 3, nom: 'Clavier mécanique', description: 'Gaming LED', prix: 200, quantite: 20 },
    { id: 4, nom: 'Écran 4K', description: 'Samsung', prix: 4000, quantite: 10 }
  ];

  getProduits(): Produit[] {
    return this.products;
  }

  addProduit(p:Produit){
    this.products.push(p)
  }
  deleteProduit(id:number){
    this.products = this.products.filter(p => p.id !== id)
  }

}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProduit } from '../../services/service-produit';
import { Produit } from '../../models/Produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  imports: [ CommonModule],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit {

  
  private route = inject(ActivatedRoute);
  private service = inject(ServiceProduit);

  produit?: Produit;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produit = this.service.getProduits()
      .find(p => p.id === id);
  }
}

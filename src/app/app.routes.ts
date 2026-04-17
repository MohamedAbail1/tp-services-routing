import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListeProduit } from './liste-produit/liste-produit';
import { NotFound } from './not-found/not-found';
import { DetailProduit } from './produit/detail-produit/detail-produit';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'produits', component: ListeProduit },
  { path: 'produit/:id', component: DetailProduit },
  { path: '**', component: NotFound }
];

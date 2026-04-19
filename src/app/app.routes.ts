import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListeProduit } from './liste-produit/liste-produit';
import { NotFound } from './not-found/not-found';
import { DetailProduit } from './produit/detail-produit/detail-produit';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'produits', component: ListeProduit , canActivate : [authGuard] },
  { path: 'produit/:id', component: DetailProduit , canActivate : [authGuard]},
  { path: '**', component: NotFound }
];

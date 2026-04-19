import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
    imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router : Router) {}

  login() {
    if (this.email === 'admin@shop.com' && this.password === '1234') {
      localStorage.setItem('token','12345');
      this.router.navigate(['/produits']);
    } else {
      this.error = 'Email ou mot de passe incorrect';
    }
  }
}

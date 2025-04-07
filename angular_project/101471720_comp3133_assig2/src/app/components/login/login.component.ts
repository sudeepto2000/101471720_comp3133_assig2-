import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphQLService } from '../../services/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: GraphQLService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.error = 'All fields are required.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        alert('Login Successfully!');
        this.router.navigate(['/']);
      },
      error: () => {
        this.error = 'Invalid credentials.';
      },
    });
  }
}

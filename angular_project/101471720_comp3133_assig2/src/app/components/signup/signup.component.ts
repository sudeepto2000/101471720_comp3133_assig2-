import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphQLService } from '../../services/graphql.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private graphqlService: GraphQLService, private router: Router) {}

  onSignup() {
    if (!this.username || !this.email || !this.password) {
      this.error = 'All fields are required.';
      return;
    }

    this.graphqlService
      .signup(this.username, this.email, this.password)
      .subscribe({
        next: (res) => {
          alert('User registration successfully!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.error = 'Signup failed. Try again.';
        },
      });
  }
}

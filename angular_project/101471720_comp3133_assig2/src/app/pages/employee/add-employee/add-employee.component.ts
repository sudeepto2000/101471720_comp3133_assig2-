import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphQLService } from '../../../services/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  designation = '';
  salary!: number;
  date_of_joining = '';
  department = '';
  employee_photo = '';
  error = '';

  constructor(private gqlService: GraphQLService, private router: Router) {}

  onAdd() {
    if (
      !this.first_name ||
      !this.last_name ||
      !this.email ||
      !this.gender ||
      !this.designation
    ) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    this.gqlService
      .addEmployee(
        this.first_name,
        this.last_name,
        this.email,
        this.gender,
        this.designation,
        this.salary,
        this.date_of_joining,
        this.department,
        this.employee_photo
      )
      .subscribe({
        next: () => {
          alert('Employee added successfully!');
          this.router.navigate(['/']);
        },
        error: () => (this.error = 'Failed to add employee.'),
      });
  }
}

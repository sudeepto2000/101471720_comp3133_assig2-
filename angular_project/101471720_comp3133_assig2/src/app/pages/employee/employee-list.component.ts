import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GraphQLService } from '../../services/graphql.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  selectedEmployee: any = null;
  viewMode = false;
  editMode = false;
  error = '';
  success = '';

  constructor(private gqlService: GraphQLService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.gqlService.getAllEmployees().subscribe((res: any) => {
      this.employees = res.data.getAllEmployees;
    });
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.gqlService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  viewEmployee(id: string) {
    this.router.navigate(['/view-employee', id]);
  }

  updateEmployee(id: string) {
    this.router.navigate(['/update-employee', id]);
  }
}

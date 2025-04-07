import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GraphQLService } from '../../../services/graphql.service';

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css',

})
export class EmployeeUpdateComponent implements OnInit {
  employee: any = {};
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private gqlService: GraphQLService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.gqlService.getEmployeeById(this.id).subscribe((res: any) => {
        this.employee = { ...res.data.getEmployeeById };
      });
    }
  }

  updateEmployee() {
    if (this.id) {
      const updatedEmployee = {
        ...this.employee, 
        id: this.id,
      };

      this.gqlService.updateEmployee(updatedEmployee).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

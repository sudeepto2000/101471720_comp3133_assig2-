import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GraphQLService } from '../../../services/graphql.service';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css',

})
export class EmployeeViewComponent implements OnInit {
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private gqlService: GraphQLService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gqlService.getEmployeeById(id).subscribe((res: any) => {
        this.employee = res.data.getEmployeeById;
      });
    }
  }
}

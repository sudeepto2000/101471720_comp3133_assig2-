import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeListComponent } from '../app/pages/employee/employee-list.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EmployeeViewComponent } from '../app/pages/employee/employee-view/employee-view.component';
import { EmployeeUpdateComponent } from '../app/pages/employee/employee-update/employee-update.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: EmployeeListComponent, canActivate: [AuthGuard] },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-employee/:id',
    component: EmployeeViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-employee/:id',
    component: EmployeeUpdateComponent,
    canActivate: [AuthGuard],
  },
];

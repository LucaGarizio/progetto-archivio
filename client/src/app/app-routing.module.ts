import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

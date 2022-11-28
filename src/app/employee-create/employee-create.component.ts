import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from "@angular/router";
import { Employee } from "../shared/employee";

@Component({
  template: `
    <div class="container-fluid">
      <div class="col-md-12">
        <h3 class="mb-3 text-center">Create Employee</h3>
        <div class="mb-4">
          <input
            type="text"
            [(ngModel)]="employee.name"
            class="form-control"
            placeholder="Name">
        </div>

        <div class="mb-4">
          <input
            type="text"
            [(ngModel)]="employee.email"
            class="form-control"
            placeholder="Email">
        </div>

        <div class="mb-4">
          <input
            type="text"
            [(ngModel)]="employee.phone"
            class="form-control"
            placeholder="Phone">
        </div>

        <div class="mb-3">
          <button class="btn btn-success btn-lg btn-block" (click)="addEmployee()">Create Employee</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: Partial<Employee> = {};

  constructor(public restApi: RestApiService, public router: Router) { }

  addEmployee() {
    this.restApi.createEmployee(this.employee as Employee)
      .subscribe(data => {
        this.router.navigate(['/employees-list'])
      })
  }
}

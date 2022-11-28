import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from "@angular/router";
import { Employee } from "../shared/employee";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails: Employee = {id: undefined, name: '', email: '', phone: null}

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() { }

  addEmployee(employee: Employee) {
    this.restApi.createEmployee(this.employeeDetails)
      .subscribe(data => {
        this.router.navigate(['/employees-list'])
      })
  }
}

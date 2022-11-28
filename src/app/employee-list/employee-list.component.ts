import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import {Employee} from "../shared/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadEmployeesList()
  }

  loadEmployeesList() {
    return this.restApi.getEmployees()
      .subscribe(data => {
        // @ts-ignore
        this.employees = data
        console.log(this.employees)
      })
  }

  deleteEmployee(id: number) {
    if (window.confirm('Delete employee ?')) {
      this.restApi.deleteEmployeeById(id)
        .subscribe(data => {
          this.loadEmployeesList()
        })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee } from "../shared/employee";
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id']
  employee: Employee = {email: "", id: 0, name: ""}

  constructor(public restApi: RestApiService,
              public actRoute: ActivatedRoute,
              public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getEmployeeById(this.id)
      .subscribe(data => {
        this.employee = data
      })
  }

  updateEmployee() {
    if (window.confirm('Edit employee ?')) {
      this.restApi.updateEmployeeById(this.id, this.employee)
        .subscribe(data => {
          this.router.navigate(['/employees-list'])
        })
    }
  }
}

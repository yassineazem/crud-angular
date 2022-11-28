import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditComponent } from './employee-edit.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";

describe('EmployeeEditComponent', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ],
      declarations: [ EmployeeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

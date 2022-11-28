import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateComponent } from './employee-create.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";

describe('EmployeeCreateComponent', () => {
  let component: EmployeeCreateComponent;
  let fixture: ComponentFixture<EmployeeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ],
      declarations: [ EmployeeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

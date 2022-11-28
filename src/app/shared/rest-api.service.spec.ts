import { TestBed } from '@angular/core/testing';
import { RestApiService } from './rest-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Employee} from "./employee";

describe('RestApiService',
  () => {

    beforeEach(() => TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ RestApiService, {
        provide: "url",
        useValue: "apiUrl"
      }]
    }));

    let service: RestApiService;
    let httpTestingController: HttpTestingController;

    const mockData: Employee[] = [
        {
          "id": 34,
          "name": "Lea",
          "email": "lea@lea.fr"
        },
        {
          "id": 23,
          "name": "Toto",
          "email": "toto@toto.fr"
        }
      ];

    beforeEach(() => {
      service = TestBed.inject(RestApiService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('getEmployees() should make a GET HTTP request and return all data items ',  () => {
      service.getEmployees().subscribe(res => {
        return expect(res).toEqual(mockData);
      })
      const req = httpTestingController.expectOne('http://localhost:3000/employees');
      req.flush(mockData);
      expect(req.request.method).toBe('GET');
    });
  });

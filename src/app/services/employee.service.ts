/**
 * Created by sneelapala on 9/26/2017.
 */

import { Injectable } from "@angular/core";
import { Employee } from "../shared/type/employee.type";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  private employees: Array<Employee> = [];

  private _employeesSubject = new BehaviorSubject(this.employees);
  public employeesObservable: Observable<Array<Employee>> = this._employeesSubject.asObservable();

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this._employeesSubject.next(this.employees);
  }

  deleteEmployeeRecord(index) {
    this.employees.splice(index, 1);
    this._employeesSubject.next(this.employees);
  }

  constructor(private http: HttpClient) {
    /*this.http.get('./employees.json').subscribe(data => {
     // Read the result field from the JSON response.
     this.employees = data['results'];
     });*/

    this.http
      .get<any>('/assets/data/employees.json')
      .subscribe(data => {
        console.log('em is', data)
        this.employees = data;
        this._employeesSubject.next(data);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/type/employee.type';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {EditFormComponent} from './edit-form/edit-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees = [];
  constructor(private dialog: MatDialog, private empService: EmployeeService){}

  ngOnInit() {
    this.empService.employeesObservable.subscribe(emps => {
      this.employees = emps;
    });
  }
  
  showAddEmployeePopup() {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '400px',
      height: '600px',
    });
  }

  deleteEmployee(index) {
    this.empService.deleteEmployeeRecord(index);
  }
}




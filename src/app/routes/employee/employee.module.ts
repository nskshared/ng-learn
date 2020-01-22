import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EmployeeComponent} from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import { EditFormComponent } from './edit-form/edit-form.component';
import {SkillPipe} from './pipe/skill.pipe';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatIconModule } from '@angular/material';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    CdkTableModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    EmployeeRoutingModule
  ],
  declarations:[EmployeeComponent, EditFormComponent, SkillPipe],
  exports:[EmployeeComponent],
  providers:[]
})
export class EmployeeModule {

}

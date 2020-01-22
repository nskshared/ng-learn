
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {EmployeeService} from './services/employee.service';
import {RoutesModule} from './routes/routes.module';
import {EmployeeModule} from './routes/employee/employee.module';
import {SharedModule} from './routes/common/common.module';
import {EditFormComponent} from './routes/employee/edit-form/edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations:[
    AppComponent,
    LayoutComponent
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    SharedModule,
    EmployeeModule,
    RoutesModule,
    BrowserAnimationsModule,
  ],
  entryComponents:[EditFormComponent],
  providers:[EmployeeService],
  bootstrap:[AppComponent]
})
export class AppModule {
}

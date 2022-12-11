import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    EmployeeComponent
  ]
})
export class SharedModule { }

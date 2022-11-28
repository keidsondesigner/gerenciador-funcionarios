import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ViewsModule { }

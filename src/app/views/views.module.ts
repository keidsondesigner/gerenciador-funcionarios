import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './views.component';


@NgModule({
  declarations: [
    ViewsComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
  ]
})
export class ViewsModule { }

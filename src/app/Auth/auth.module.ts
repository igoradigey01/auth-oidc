import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CompanyComponent } from './../company/company.component';
import { LazyServiceModule} from './../shared/sevices/lazy-service.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


@NgModule({
  declarations: [
    AuthComponent,
    CompanyComponent,
    AuthCallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LazyServiceModule
  ],
  exports:[
    AuthComponent,
    CompanyComponent
  ]
})
export class AuthModule { }

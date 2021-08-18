import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CompanyComponent } from './../company/company.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'company', component: CompanyComponent },
  { path:'auth-callback',component:AuthCallbackComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

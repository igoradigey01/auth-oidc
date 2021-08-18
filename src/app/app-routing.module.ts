import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent } from './error-pages/not-found/not-found.component';
import {MenyComponent} from './meny/meny.component'

const routes: Routes = [


  { path: 'lazy-Auth', loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: HomeComponent },
  
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

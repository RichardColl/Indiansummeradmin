import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndiansummeradminComponent } from './indiansummeradmin/indiansummeradmin.component';


const routes: Routes = [
                         {
                           path: '',
                           component: IndiansummeradminComponent

                         }


                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

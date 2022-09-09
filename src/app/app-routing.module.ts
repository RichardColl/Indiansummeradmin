import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateartistformComponent } from './createartistform/createartistform.component';
import { LoginComponent } from './login/login.component';
import { DisplayeditartistlistComponent } from './displayeditartistlist/displayeditartistlist.component';
import { EditartistformComponent } from './editartistform/editartistform.component';
import { EditmusicreleaseformComponent } from './editmusicreleaseform/editmusicreleaseform.component';
import { IndiansummeradminComponent } from './indiansummeradmin/indiansummeradmin.component';
import { DisplayededitmusicreleaselistComponent } from './displayededitmusicreleaselist/displayededitmusicreleaselist.component';
import { ArtistconnectionsComponent } from './artistconnections/artistconnections.component';

const routes: Routes = [
                         {
                           path: '',
                           component: IndiansummeradminComponent

                         }
                          , {
                           path: 'home',
                           component: IndiansummeradminComponent

                         }

                         , {
                                                      path: 'createartistform',
                                                      component: CreateartistformComponent

                                                   }, {
                                                      path: 'indiansummeradmin',
                                                      component: IndiansummeradminComponent

                                                   }, {
                                                      path: 'login',
                                                      component: LoginComponent

                                                   }, {
                                                       path: 'displayeditartistlist',
                                                       component: DisplayeditartistlistComponent

                                                    }, {
                                                       path: 'artistconnectionscomponent',
                                                       component: ArtistconnectionsComponent

                                                    }, {
                                                       path: 'displayededitmusicreleaselist',
                                                       component: DisplayededitmusicreleaselistComponent

                                                   }, {
                                                      path: 'editartistform/:artistid',
                                                      component: EditartistformComponent

                                                   }, {
                                                       path: 'editmusicreleaseform/:id',
                                                       component: EditmusicreleaseformComponent

                                                   }

                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

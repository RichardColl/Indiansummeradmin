import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateartistformComponent } from './createartistform/createartistform.component';
import { CreatemusicreleaseComponent } from './createmusicrelease/createmusicrelease.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';
import { DisplayeditartistlistComponent } from './displayeditartistlist/displayeditartistlist.component';
import { EditartistformComponent } from './editartistform/editartistform.component';
import { EditmusicreleaseformComponent } from './editmusicreleaseform/editmusicreleaseform.component';
import { IndiansummeradminComponent } from './indiansummeradmin/indiansummeradmin.component';
import { DisplayededitmusicreleaselistComponent } from './displayededitmusicreleaselist/displayededitmusicreleaselist.component';
import { ArtistconnectionsComponent } from './artistconnections/artistconnections.component';
import { MusicreleasescontainerComponent } from './musicreleasescontainer/musicreleasescontainer.component';


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
                                                      path: 'createmusicreleaseform',
                                                      component: CreatemusicreleaseComponent
                                                   }, {
                                                      path: 'createmusicreleaseformfrombarcode',
                                                            component: ChatbotComponent

                                                   }, {
                                                      path: 'showmusicreleasescontainer',
                                                             component: MusicreleasescontainerComponent

                                                   }, {
                                                      path: 'login',
                                                      component: LoginComponent

                                                   }, {
                                                       path: 'displayeditartistlist',
                                                       component: DisplayeditartistlistComponent

                                                    }, {
                                                       path: 'artistconnectionscomponent/:artistid',
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

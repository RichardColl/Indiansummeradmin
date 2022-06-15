import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './shared/login/login.service';
import { MusicreleaseService } from './shared/musicrelease/musicrelease.service';
import { ArtistService } from './shared/artist/artist.service';

import { IndiansummeradminComponent } from './indiansummeradmin/indiansummeradmin.component';
import { DisplayeditartistlistComponent } from './displayeditartistlist/displayeditartistlist.component';
import { DisplayededitmusicreleaselistComponent } from './displayededitmusicreleaselist/displayededitmusicreleaselist.component';
import { CreateartistformComponent } from './createartistform/createartistform.component';
import { EditartistformComponent } from './editartistform/editartistform.component';
import { EditmusicreleaseformComponent } from './editmusicreleaseform/editmusicreleaseform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndiansummeradminComponent,
    DisplayeditartistlistComponent,
    DisplayededitmusicreleaselistComponent,
    CreateartistformComponent,
    EditartistformComponent,
    EditmusicreleaseformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatToolbarModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, MusicreleaseService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

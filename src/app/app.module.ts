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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

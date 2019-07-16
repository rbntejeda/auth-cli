import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TrabajadorAdminComponent } from './trabajador/trabajador-admin/trabajador-admin.component';
import { TrabajadorViewComponent } from './trabajador/trabajador-view/trabajador-view.component';
import { Error404Component } from './page/error404/error404.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    TrabajadorAdminComponent,
    TrabajadorViewComponent,
    Error404Component,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbCollapseModule,
    NgbModalModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/students/add/add.component';
import { ListComponent } from './components/students/list/list.component';
import { NavigationBarComponent } from './components/students/navigation-bar/navigation-bar.component';
import { EditComponent } from './components/students/edit/edit.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CareerListComponent } from './components/careers/career-list/career-list.component';
import { CareerAddComponent } from './components/careers/career-add/career-add.component';

import { faUserEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component'
import { AuthRequestInterceptorService } from './guard/auth-request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    NavigationBarComponent,
    EditComponent,
    PageNotFoundComponent,
    CareerListComponent,
    CareerAddComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ 
    {
      provide : HTTP_INTERCEPTORS, 
      useClass : AuthRequestInterceptorService, 
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(faIconLibrary : FaIconLibrary) {
    faIconLibrary.addIcons(faUserEdit, faUserMinus);
  }
 }

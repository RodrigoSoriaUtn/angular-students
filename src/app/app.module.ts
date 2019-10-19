import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/students/add/add.component';
import { ListComponent } from './components/students/list/list.component';
import { NavigationBarComponent } from './components/students/navigation-bar/navigation-bar.component';
import { EditComponent } from './components/students/edit/edit.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CareerListComponent } from './components/careers/career-list/career-list.component';
import { CareerAddComponent } from './components/careers/career-add/career-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    NavigationBarComponent,
    EditComponent,
    PageNotFoundComponent,
    CareerListComponent,
    CareerAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

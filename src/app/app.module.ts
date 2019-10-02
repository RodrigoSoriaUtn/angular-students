import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/students/add/add.component';
import { ListComponent } from './components/students/list/list.component';
import { NavigationBarComponent } from './components/students/navigation-bar/navigation-bar.component';
import { EditComponent } from './components/students/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    AddComponent,
    ListComponent,
    NavigationBarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

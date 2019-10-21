import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';
import { EditComponent } from './components/students/edit/edit.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CareerListComponent } from './components/careers/career-list/career-list.component';
import { CareerAddComponent } from './components/careers/career-add/career-add.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';


const routes: Routes = [
  {path:"", component:SignInComponent, pathMatch:"full"},
  {path:"students/add", component:AddComponent},
  {path:"students/list", component:ListComponent},
  {path:"students/edit/:id", component:EditComponent},
  {path:"careers/list", component:CareerListComponent},
  {path:"careers/add", component:CareerAddComponent},
  {path:"careers", component:CareerListComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

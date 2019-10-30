import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';
import { EditComponent } from './components/students/edit/edit.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CareerListComponent } from './components/careers/career-list/career-list.component';
import { CareerAddComponent } from './components/careers/career-add/career-add.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"", component : SignInComponent, pathMatch : "full"},
  {path:"signup", component : SignUpComponent, pathMatch : "full"},
  {path:"students/add", component : AddComponent, canActivate : [AuthGuard]}, // TODO : find a way to make a validation per "parent" url
  {path:"students", component : ListComponent, canActivate : [AuthGuard], pathMatch : "full"},
  {path:"students/list", component : ListComponent, canActivate : [AuthGuard]},
  {path:"students/edit/:id", component : EditComponent, canActivate : [AuthGuard]},
  {path:"careers/list", component : CareerListComponent, canActivate : [AuthGuard]},
  {path:"careers/add", component : CareerAddComponent, canActivate : [AuthGuard]},
  {path:"careers", component : CareerListComponent, canActivate : [AuthGuard], pathMatch : "full"},
  {path:"**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

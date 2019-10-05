import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';
import { EditComponent } from './components/students/edit/edit.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"", component:ListComponent, pathMatch:"full"},
  {path:"add", component:AddComponent},
  {path:"list", component:ListComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';
import { EditComponent } from './components/students/edit/edit.component';


const routes: Routes = [
  {path:"", component:ListComponent, pathMatch:"full"},
  {path:"add", component:AddComponent},
  {path:"list", component:ListComponent},
  {path:"edit", component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

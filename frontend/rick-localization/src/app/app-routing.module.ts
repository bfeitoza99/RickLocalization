import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './rick/list/list.component';


const routes: Routes = [
  {
  path: "",
  redirectTo: "Rick",
  pathMatch: "full",
}, 
{
  path: "Rick",
  component: ListComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './rick/details/details.component';
import { ListComponent } from './rick/list/list.component';
import { NavigationHistoryComponent } from './rick/navigation-history/navigation-history.component';


const routes: Routes = [
  {
  path: "",
  redirectTo: "rick",
  pathMatch: "full",
}, 
{
  path: "rick",
  component: ListComponent
},
{
  path: "rick/details/:id",
  component: DetailsComponent
},
{
  path: "rick/navigation-history/:id",
  component: NavigationHistoryComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

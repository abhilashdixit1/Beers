import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BeersComponent } from "./beers/beers.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "beers",
    component: BeersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

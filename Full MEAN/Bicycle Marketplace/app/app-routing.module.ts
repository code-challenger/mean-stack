import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MainComponent } from "./main//main.component";
import { ManagerComponent } from "./manager/manager.component";
import { BrowseComponent } from "./manager/browse/browse.component";
import { ListingsComponent } from "./manager/listings/listings.component";

const routes: Routes = [
  {path: "", pathMatch:"full", component: MainComponent},
  {path:"manager", component: ManagerComponent, children:[
    {path:"browse", component: BrowseComponent},
    {path:"listings", component: ListingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

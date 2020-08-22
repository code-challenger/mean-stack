import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ManagerComponent } from './manager/manager.component';
import { BrowseComponent } from './manager/browse/browse.component';
import { ListingsComponent } from './manager/listings/listings.component';
import { UserService } from './user.service';
import { BicycleService } from './bicycle.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ManagerComponent,
    BrowseComponent,
    ListingsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

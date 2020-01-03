import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MnFullpageModule } from 'ngx-fullpage';

import { SharedModule } from './shared/app-shared.module';
import { RootComponent } from './root.component';
import { CategoryListComponent } from './category/list/app-category-list.component';
import { CategoryDetailComponent } from './category/detail/app-category-detail.component';
import { DataStoreService } from './category/data-store.service';

@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    CategoryListComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,

    MnFullpageModule.forRoot()
  ],
  providers: [DataStoreService],
  bootstrap: [RootComponent]
})
export class AppModule { }


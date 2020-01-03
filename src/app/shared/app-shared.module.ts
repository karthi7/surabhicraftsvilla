import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Filter } from './filter/filter.component';
import { ScrollTopComponent } from './scroll/scroll-top.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnderConstruction } from './under-construction/under-construction';

@NgModule({
  declarations: [
    Filter,
    ScrollTopComponent,
    PageNotFoundComponent,
    UnderConstruction
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  exports:[ 
    Filter,
    ScrollTopComponent,
    PageNotFoundComponent,
    UnderConstruction,
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,    
    MatTabsModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }

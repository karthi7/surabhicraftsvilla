import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { CategoryDetailComponent } from './category/detail/app-category-detail.component';
import { UnderConstruction } from './shared/under-construction/under-construction';


const appRoutes: Routes = [
  { path: '', redirectTo: '/under-construction', pathMatch: 'full'},
  { path: 'home', component: AppComponent},
  { path: 'under-construction', component: UnderConstruction},
  { path: 'category/:id/detail', component: CategoryDetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class AppModule { }

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

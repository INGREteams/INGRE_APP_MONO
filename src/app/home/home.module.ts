import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from '../shared/pipe/search-filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: [SharedModule]
})
export class HomeModule { }

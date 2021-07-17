import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SortSearchComponent} from './component/sort-search/sort-search.component';

const routes: Routes = [
  {path:"",component:SortSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

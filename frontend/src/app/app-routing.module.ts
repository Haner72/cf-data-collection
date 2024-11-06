import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home.component'; 
import { DataInsertion } from './data-insertion/data-insertion.component'; 
import { Thanks } from './thanks/thanks.component';
import { Collection } from './collection/collection.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'data-insertion', component: DataInsertion },
  { path: 'thanks', component: Thanks },
  { path: 'collection', component: Collection },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

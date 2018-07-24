import { RouterModule, Routes } from '@angular/router';

import {
  CatalogoComponent,
  DetailMovieComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'movie/:id', component: DetailMovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });

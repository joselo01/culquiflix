import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpModule }  from "@angular/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';


//rutas

import { app_routing }  from "./app.routes";

//services
import { PeliculasService } from './services/peliculas.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogoComponent,
    DialogComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    app_routing,
    NgbModule.forRoot()

  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

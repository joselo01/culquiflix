import { Component} from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { PeliculasService }  from "../../services/peliculas.service";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styles: []
})
export class DetailMovieComponent {
  
  movie:any = undefined;

  constructor ( private route:ActivatedRoute,
                private _ps: PeliculasService) {
    route.params.subscribe( parametros=>{

      _ps.cargar_movie(parametros ['id'])
        .subscribe(res => {

          this.movie = res.json();
        });
    })

  }



}

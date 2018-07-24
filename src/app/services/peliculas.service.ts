import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeliculasService {

  results:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http) {
    this.carga_movies();
  }

  public carga_movies() {

    this.cargando = true;
    let current = this;
    current.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=041a697538db4c29730095424a6df704&language=en-US')
    .subscribe(res1 =>{
      let generos = res1.json().genres;
      let i = 0;
    current.http.get("https://api.themoviedb.org/3/discover/movie?api_key=041a697538db4c29730095424a6df704&primary_release_date.gte=2018-06-28&primary_release_date.lte=2018-07-19")
    .subscribe(res => {
          current.cargando = false;
          current.results = res.json().results;

          current.results.forEach(eachObj => {
          let array_genre = [];
          eachObj.genre_ids.forEach(data =>{
            generos.forEach(gen=>{
              if (gen.id == data) {
                array_genre.push(gen)
              }
            })
          });

          current.results[i].genre_all = array_genre;

          i++;
        });
        })
    })

    }

    public cargar_movie(id:string){
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=041a697538db4c29730095424a6df704&language=en-US`)

    }
}

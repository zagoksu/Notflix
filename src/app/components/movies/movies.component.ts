import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
// import { Movie } from 'movies.json';
// import { movies } from './mock-movies';
 
declare var require: any;


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any;
  movieSubscription:any;

  constructor(private movieService: MovieService) {
    this.movieSubscription = this.movieService.getMovies();
  }

//  movies: IMovie[] = [];

  // movies: Movie[];

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit(): void {
    this.movieSubscription = this.movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
  })
}

}

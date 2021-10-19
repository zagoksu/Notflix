import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie';
import { movies } from '../movies/mock-movies';
 
declare var require: any;


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }
  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  movies: Movie[];

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }


}

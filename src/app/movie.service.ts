import { Injectable } from '@angular/core';
import { Movie } from '../app/movie/movie';
import { movies } from '../app/movies/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return movies;
  }
}

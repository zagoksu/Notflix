import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../models/movie";
import {Subscription} from "rxjs";

declare var require: any;


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {
  }

  filteredMovies: IMovie[] = [];
  private _listFilter: string = '';
  errorMessage: string = '';
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredMovies = this.performFilter(value);
  }
  movies: IMovie[] = [];

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.name.toLocaleLowerCase().includes(filterBy)
    );
  }


  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

}

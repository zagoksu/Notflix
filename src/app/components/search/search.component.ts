import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {IMovie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private movieService: MovieService) {
  }

  @Output() filterEvent = new EventEmitter();
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
    this.filterEvent.emit(this.filteredMovies)
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

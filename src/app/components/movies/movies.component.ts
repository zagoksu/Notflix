import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieService} from '../../services/movie.service';
// import { Movie } from 'movies.json';
// import { movies } from './mock-movies';

declare var require: any;


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movies: any;
  @Output() movieIdEvent = new EventEmitter();
  movieSubscription: any;

  constructor(private movieService: MovieService) {
    this.movieSubscription = this.movieService.getMovies();
  }

//  movies: IMovie[] = [];

  // movies: Movie[];


  ngOnInit(): void {
    this.movieSubscription = this.movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
      })
  }

  onClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.movieIdEvent.emit(value)
    console.log(value)
  }

}

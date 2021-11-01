import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {IMovie} from "../../models/movie";
import {MovieModel} from "../../models/movieModel";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  errorMessage: string = '';
  @Output() saveEvent = new EventEmitter();
  isSuccess: boolean = false;
  sub!: Subscription;
  submitted = false;
  movies: IMovie[] = [];
  model = new MovieModel("", "", 0, "", "", 0, "");

  constructor(private movieService: MovieService) {
  }


  onSubmit() {
    this.submitted = true;
    this.model.id = this.movies.length + 1;
    this.movieService.addMovie(this.model);
    this.isSuccess = true
  }


  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: movies => {
        this.movies = movies;
        console.log(this.movies)
      },
      error: err => this.errorMessage = err
    });
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}

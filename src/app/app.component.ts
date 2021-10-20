import {Component} from '@angular/core';
import {IMovie} from "./models/movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filteredMovies: IMovie[] = [];
  movieId: number = 0;

  performedFilter(value: IMovie[]) {
    this.filteredMovies = value;
  }

  sendMovieId(value: number) {
    this.movieId = value;
  }

  title = 'Notflix';
  sticky: boolean = false;
  headerBGUrl: string = 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg';
}

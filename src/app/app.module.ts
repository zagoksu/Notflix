import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {AddComponent} from './components/add/add.component';
import {RateMovieComponent} from './components/rate-movie/rate-movie.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {VideoPlayerComponent} from "./components/video-player/video-player.component";
import {SafePipe} from "./services/SafePipe";

import {LoginComponent} from './components/login/login.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from "./components/modal/modal.component";
import {NgbdRatingConfig} from './components/rating/rating.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddMovieModalComponent } from './components/add-movie-modal/add-movie-modal.component';
import { MovieDetailModalComponent } from './components/movie-detail-modal/movie-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    RateMovieComponent,
    MovieComponent,
    MoviesComponent,
    VideoPlayerComponent,
    SafePipe,
    LoginComponent,
    ModalComponent,
    NgbdRatingConfig,
    AddMovieComponent,
    AddMovieModalComponent,
    MovieDetailModalComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

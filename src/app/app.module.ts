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
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    RateMovieComponent,
    MovieComponent,
    MoviesComponent,
    VideoPlayerComponent,
    SafePipe
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

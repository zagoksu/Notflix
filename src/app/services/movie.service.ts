import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IMovie} from 'src/app/models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  //private movieUrl = 'api/movies.json';
  private movieUrl = 'http://localhost:8090/api/movie'

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl + "/all").pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addMovie(movie: IMovie) {
    console.log(movie);
    this.http.post(this.movieUrl, movie).subscribe((data) => {
    })

  }

  updateRate(movie: IMovie) {
    this.http.put(this.movieUrl, movie).subscribe((data) => {
    })
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

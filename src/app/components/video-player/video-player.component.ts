import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../models/movie";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  movie: IMovie = {
    "id": 1,
    "name": "John Wick",
    "description": "Nice movie",
    "genre": "Action",
    "rating": 3,
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=2AUmvWm5ZDQ"
  };

  constructor() {
  }

  onRatingClicked(message: string): void {
    console.log('Movie : ' + message);
    console.log(this.movie.rating)
  }

  ngOnInit(): void {
  }

}

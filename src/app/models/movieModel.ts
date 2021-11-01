import {IMovie} from "./movie";

export class MovieModel implements IMovie{
  description: string;
  genre: string;
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  videoUrl: string;


  constructor(description: string, genre: string, id: number, imageUrl: string, name: string, rating: number, videoUrl: string) {
    this.description = description;
    this.genre = genre;
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.rating = rating;
    this.videoUrl = videoUrl;
  }
}

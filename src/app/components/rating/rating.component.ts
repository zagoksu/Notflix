import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class NgbdRatingConfig {
  @Input() currentRate: number = 0;
  @Output() ratingClicked: EventEmitter<number> =
    new EventEmitter<number>();


  constructor(config: NgbRatingConfig,private movieService:MovieService) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    //config.readonly = true;
  }

  onClick(): void {
    this.ratingClicked.emit(this.currentRate);
  }
}



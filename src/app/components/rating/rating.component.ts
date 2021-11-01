import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class NgbdRatingConfig {
  @Input() currentRate: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();


  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    //config.readonly = true;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.currentRate} was clicked!`);
  }
}



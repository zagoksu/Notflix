import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent{
  @Input() m:any;

  constructor() { }

  ngOnInit(): void {
  }

}

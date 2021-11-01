import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder) { }  
  AddMovies!: FormGroup;
  submitted:boolean = false;
  Movies:any = [{}]
  data:any = {};
  movieurl:string= '';
  ngOnInit(): void {
    this.Movies.pop();
    this.AddMovies = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      genre: ['', Validators.required],
      link: ['', Validators.required],
      movieurl:['',Validators.required]
    });
  }
  get valdationFormControl() {
    return this.AddMovies.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.AddMovies.valid) {
     this.data  = {
      imageUrl: this.AddMovies.get('link')?.value,
      name:this.AddMovies.get('name')?.value,
      description:this.AddMovies.get('description')?.value,
      movieurl:this.AddMovies.get('movieurl')?.value
     }
      this.Movies.push(this.data)
    //  var s = this.AddMovies.get('name')?.value;
      this.AddMovies.reset()
    }
  }
  ShowMovie(movieurl:any){
  this.movieurl = movieurl
  }
}

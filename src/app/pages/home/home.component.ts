import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideShowImagesPaths: string[] = [
    'assets/images/home-slides/1.jpg',
    'assets/images/home-slides/2.jpg',
    'assets/images/home-slides/3.jpg',
    'assets/images/home-slides/4.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

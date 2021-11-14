import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abbruch-entkernung',
  templateUrl: './abbruch-entkernung.component.html',
  styleUrls: ['./abbruch-entkernung.component.scss']
})
export class AbbruchEntkernungComponent implements OnInit {
  collagePhotos: any[] = [
    { url: 'assets/images/home-slides/1.jpg', alt: '' },
    { url: 'assets/images/home-slides/2.jpg', alt: '' },
    { url: 'assets/images/home-slides/1.jpg', alt: '' },
    { url: 'assets/images/home-slides/2.jpg', alt: '' },
    { url: 'assets/images/home-slides/1.jpg', alt: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

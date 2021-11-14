import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trockenbau',
  templateUrl: './trockenbau.component.html',
  styleUrls: ['./trockenbau.component.scss']
})
export class TrockenbauComponent implements OnInit {
  collagePhotos: any[] = [
    { url: 'assets/images/collages/trockenbau/photo1.jpg', alt: '' },
    { url: 'assets/images/collages/trockenbau/photo2.jpg', alt: '' },
    { url: 'assets/images/collages/trockenbau/photo3.jpg', alt: '' },
    { url: 'assets/images/collages/trockenbau/photo4.jpg', alt: '' },
    { url: 'assets/images/collages/trockenbau/photo5.jpg', alt: '' },
    { url: 'assets/images/collages/trockenbau/photo6.jpg', alt: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

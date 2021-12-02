import { Component, OnInit } from '@angular/core';
import { paths } from 'src/app/app-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private paths = paths;
  public services: any[] = [];
  public index: number = 0;

  slideShowImagesPaths: string[] = [
    'assets/images/home-slides/1.jpg',
    'assets/images/home-slides/2.jpg',
    'assets/images/home-slides/3.jpg',
    'assets/images/home-slides/4.jpg',
  ]
  constructor() { }

  ngOnInit() {
    this.services = [
    {
      title: 'Altbausanierung',
      path: paths.altbausanierung,
      exact: true,
      img: 'assets/images/home-services/altbausanierung.jpg'
    },
    {
      title: 'Trockenbau',
      path: paths.trockenbau,
      exact: true,
      img: 'assets/images/home-services/trockenbau.jpg'
    },
    {
      title: 'Abbruch/Entkernung',
      path: paths.abbruch,
      exact: true,
      img: 'assets/images/home-services/abbruch.jpg'
    },
    {
      title: 'Schadstoffsanierung',
      path: paths.schadstoffsanierung,
      exact: true,
      img: 'assets/images/home-services/schadstoffsanierung.jpg'
    },
    {
      title: 'Möbelmontage',
      path: paths.mobelmontage,
      exact: true,
      img: 'assets/images/home-services/mobelmontage.jpg'
    }
]
  }

}

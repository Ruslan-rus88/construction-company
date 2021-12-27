import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  public img: any = {
    imgUrl: 'assets/images/career.jpg',
    imgAlt: 'career in Barho bauservice',
  }
  public title: string = 'Starten Sie Ihre Karriere bei Barho Bauservice'

  constructor() { }

  ngOnInit(): void {
  }

}

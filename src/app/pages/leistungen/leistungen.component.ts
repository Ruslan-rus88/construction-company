import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.scss']
})
export class LeistungenComponent implements OnInit {
  private angle: number = 55;
  private interval: any;

  public cards = [
    {
      title: 'Abbruch',
      imgUrl: 'assets/images/home-services/abbruch.jpg',
      imgAlt: '',
      path: 'abbruch-entkernung',
      exact: true,
    },
    {
      title: 'Altbausanierung',
      imgUrl: 'assets/images/home-services/altbausanierung.jpg',
      imgAlt: '',
      path: 'altbausanierung',
      exact: true,
    },
    {
      title: 'Möbelmontage',
      imgUrl: 'assets/images/home-services/mobelmontage.jpg',
      imgAlt: '',
      path: 'mobelmontage',
      exact: true,
    },
    {
      title: 'Schadstoffsanierung',
      imgUrl: 'assets/images/home-services/schadstoffsanierung.jpg',
      imgAlt: '',
      path: 'schadstoffsanierung',
      exact: true,
    },
    {
      title: 'Trockenbau',
      imgUrl: 'assets/images/home-services/trockenbau.jpg',
      imgAlt: '',
      path: 'trockenbau',
      exact: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.angle = 55;
  }

  getCardTransformStyle(i: number) {
    return `rotateX(8deg) rotateY(${72 * i + this.angle}deg)`;
  }

  getZIndex(i: number) {
    const modifiedAngle = (72 * i + this.angle) % 360
    return modifiedAngle < 180
          ? Math.abs(modifiedAngle - 90) <= 72
              ? '5'
              :  '4'
          : modifiedAngle === 180
              ? '3'
              : Math.abs(modifiedAngle - 270) <= 72
                  ? '1'
                  : '2'
  }

  rotate(type: string) {
    this.interval = window.setInterval(() => {
      this.angle = type === 'inc' ? this.angle + 20 : this.angle - 20;
    }, 600);
    window.setInterval(this.interval);
  }

  clearInterval() {
    window.clearInterval(this.interval);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  public cardsArray: number[] = Array(25).fill(1)
  private interval: any;
  public index: number = 0
  public showTitle: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.interval = window.setInterval(() => {
      document.querySelectorAll('.career__img-card')[this.index].classList.add('career__img-card--rotate')
      this.index++;
      console.log(this.index);
      if (this.index === 25) {
        this.showTitle = true;
        window.clearInterval(this.interval);
      }
     }, 100);
  }

}

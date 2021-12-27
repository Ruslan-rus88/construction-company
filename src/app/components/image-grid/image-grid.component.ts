import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  @Input() img: {imgUrl: string, imgAlt: string} = {imgUrl: '', imgAlt: ''};
  @Input() rows: number = 0;
  @Input() columns: number = 0;
  @Input() milliSeconds: number = 0;
  @Input() title: string = '';

  public cardsArray: number[] = [];
  private interval: any;
  public index: number = 0;
  public showTitle: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cardsArray = Array(this.rows * this.columns);
    this.interval = window.setInterval(() => {
      document.querySelectorAll('.img-card')[this.index].classList.add('img-card-rotate');
      this.index++;
      if (this.index === this.rows * this.columns) {
        this.cardsArray = [];
        this.showTitle = true;
        window.clearInterval(this.interval);
      }
     }, this.milliSeconds);
  }
}

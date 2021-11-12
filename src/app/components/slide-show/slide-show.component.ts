import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  @Input() images: string[] = [];
  interval: any;
  index = 0;

  constructor() { }


  ngOnInit(): void {
    this.interval = window.setInterval(() => { this.setIndex() }, 3000)
  }

  setIndex() {
    this.index = this.index < this.images.length - 1 ? this.index + 1 : 0      
  }

  onSelectImg(i: number) {
    window.clearInterval(this.interval);
    this.index = i;
    this.interval = window.setInterval(() => { this.setIndex() }, 3000);
  }

  test() {
    console.log(1);
    
  }
}

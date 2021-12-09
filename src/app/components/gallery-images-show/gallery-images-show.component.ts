import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-images-show',
  templateUrl: './gallery-images-show.component.html',
  styleUrls: ['./gallery-images-show.component.scss']
})
export class GalleryImagesShowComponent implements OnInit {
  @Input() project: any;
  @Output() closeGalleryImagesShow = new EventEmitter<void>();
  public activeImg: string = '';
  public activeImgIndex: number = 0;
  interval: any;
  index = 0;

  constructor() { }

  ngOnInit(): void {
    this.activeImg = this.project.images[0];
    console.log(this.project);
    this.interval = window.setInterval(() => { this.setIndex() }, 3000)
  }

  setIndex() {
    this.index = this.index < this.project.images.length - 1 ? this.index + 1 : 0      
  }

  onSelectImg(i: number) {
    window.clearInterval(this.interval);
    this.index = i;
    this.interval = window.setInterval(() => { this.setIndex() }, 3000);
  }

  onClose() {
    this.closeGalleryImagesShow.emit();
  }
}

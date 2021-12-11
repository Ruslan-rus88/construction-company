import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-images-show',
  templateUrl: './gallery-images-show.component.html',
  styleUrls: ['./gallery-images-show.component.scss']
})
export class GalleryImagesShowComponent implements OnInit {
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == 'ArrowRight'){
      if (!this.displayCollection) {
        this.nextImage();
      }
    }
    else if(event.key == 'ArrowLeft'){
      if (!this.displayCollection) {
        this.prevImage();
      }
    }
    else if(event.key == 'Escape'){
      this.onClose();
    }
  }

  @Input() project: any;
  @Output() closeGalleryImagesShow = new EventEmitter<void>();
  public activeImg: string = '';
  public activeImgIndex: number = 0;
  public play: boolean = false;
  public displayCollection: boolean = false;
  interval: any;
  index = 0;

  constructor() { }

  ngOnInit(): void {
    this.activeImg = this.project.images[0];
    console.log(this.project);
    // this.startSlideShow();

    // this.interval = window.setInterval(() => { this.setIndex() }, 3000)
  }

  setIndex() {
    this.index = this.index < this.project.images.length - 1 ? this.index + 1 : 0;
  }

  onSelectImg(i: number) {
    window.clearInterval(this.interval);
    this.index = i;
    // this.interval = window.setInterval(() => { this.setIndex() }, 3000);
    this.startSlideShow();

  }

  onClose() {
    this.closeGalleryImagesShow.emit();
  }

  playSlideshow() {
    if (this.displayCollection) {
      return;
    }
    if (this.play) {
      window.clearInterval(this.interval);
    } else {
      this.startSlideShow();
    }
    this.play = !this.play;
  }

  startSlideShow() {
    this.interval = window.setInterval(() => { this.setIndex() }, 3000);
  }

  nextImage() {
    this.play = false;
    if (this.interval) window.clearInterval(this.interval);
    this.index = this.index < this.project.images.length - 1 ? this.index + 1 : 0;
  }

  prevImage() {
    this.play = false;
    if (this.interval) window.clearInterval(this.interval);
    this.index = this.index > 0 ? this.index - 1 : this.project.images.length - 1;
  }

  displayAll() {

  }

  showCollection() {
    this.displayCollection = true;
    this.play = false;
    window.clearInterval(this.interval);
  }

  onClickCollectionImage(index: number) {
    this.index = index;
    this.displayCollection = false;
  }
}

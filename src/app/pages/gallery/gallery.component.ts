import { Component, OnInit } from '@angular/core';
import { projectsData } from './gallery-projects';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public projects = projectsData;
  public activeProjectIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  closeGalleryImagesShow() {
    this.activeProjectIndex = -1;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-collage',
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss']
})
export class PhotoCollageComponent implements OnInit {
  @Input() photos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayScrollBtn: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    this.displayScrollBtn = window.scrollY > 0 ? true : false; 
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

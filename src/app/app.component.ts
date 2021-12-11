import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {
    router.events.subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

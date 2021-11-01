import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { navRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck {
  showFirstNavList: boolean = false;
  showSecondNavList: boolean = false;
  navRoutes = navRoutes;

  constructor() { }

  ngOnInit(): void {
    console.log(window);

  }

  ngOnChanges() {
    console.log(window);
    console.log(1);
    
  }

  ngDoCheck() {
    console.log(2);
    
  }
}

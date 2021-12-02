import { Component, OnInit } from '@angular/core';
import { navRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showFirstNavList: boolean = false;
  public showSecondNavList: boolean = false;
  public navRoutes = navRoutes;

  constructor() { }

  ngOnInit(): void {
  }
}

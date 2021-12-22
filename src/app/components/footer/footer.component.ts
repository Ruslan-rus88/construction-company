import { Component, OnInit } from '@angular/core';
import { footerRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerRoutes = footerRoutes;
  
  constructor() { }

  ngOnInit(): void {    
  }

}

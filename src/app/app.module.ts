import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { AbbruchEntkernungComponent } from './pages/services/abbruch-entkernung/abbruch-entkernung.component';
import { TrockenbauComponent } from './pages/services/trockenbau/trockenbau.component';
import { PhotoCollageComponent } from './components/photo-collage/photo-collage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactsComponent,
    ServicesComponent,
    CareerComponent,
    HeaderComponent,
    AbbruchEntkernungComponent,
    SlideShowComponent,
    TrockenbauComponent,
    PhotoCollageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

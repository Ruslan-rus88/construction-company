import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LeistungenComponent } from './pages/leistungen/leistungen.component';
import { CareerComponent } from './pages/career/career.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { AbbruchEntkernungComponent } from './pages/leistungen/abbruch-entkernung/abbruch-entkernung.component';
import { TrockenbauComponent } from './pages/leistungen/trockenbau/trockenbau.component';
import { PhotoCollageComponent } from './components/photo-collage/photo-collage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SchadstoffsanierungComponent } from './pages/leistungen/schadstoffsanierung/schadstoffsanierung.component';
import { MobelmontageComponent } from './pages/leistungen/mobelmontage/mobelmontage.component';
import { AltbausanierungComponent } from './pages/leistungen/altbausanierung/altbausanierung.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryImagesShowComponent } from './components/gallery-images-show/gallery-images-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactsComponent,
    LeistungenComponent,
    CareerComponent,
    HeaderComponent,
    AbbruchEntkernungComponent,
    SlideShowComponent,
    TrockenbauComponent,
    PhotoCollageComponent,
    FooterComponent,
    SchadstoffsanierungComponent,
    MobelmontageComponent,
    AltbausanierungComponent,
    GalleryComponent,
    GalleryImagesShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

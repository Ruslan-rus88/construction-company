import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './app-routes';
import { CareerComponent } from './pages/career/career.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CookieRichtlinieComponent } from './pages/cookie-richtlinie/cookie-richtlinie.component';
import { DatenschutzerklarungComponent } from './pages/datenschutzerklarung/datenschutzerklarung.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { AbbruchEntkernungComponent } from './pages/leistungen/abbruch-entkernung/abbruch-entkernung.component';
import { AltbausanierungComponent } from './pages/leistungen/altbausanierung/altbausanierung.component';
import { LeistungenComponent } from './pages/leistungen/leistungen.component';
import { MobelmontageComponent } from './pages/leistungen/mobelmontage/mobelmontage.component';
import { SchadstoffsanierungComponent } from './pages/leistungen/schadstoffsanierung/schadstoffsanierung.component';
import { TrockenbauComponent } from './pages/leistungen/trockenbau/trockenbau.component';

const routes: Routes = [
  { path: paths.home, component: HomeComponent },
  { path: paths.leistungen, component: LeistungenComponent },

  // update later
  { path: paths.altbausanierung, component: AltbausanierungComponent },
  { path: paths.trockenbau, component: TrockenbauComponent },
  { path: paths.abbruch, component: AbbruchEntkernungComponent },
  { path: paths.schadstoffsanierung, component: SchadstoffsanierungComponent },
  { path: paths.mobelmontage, component: MobelmontageComponent },

  { path: paths.referenzen, component: GalleryComponent },
  { path: paths.karriere, component: CareerComponent },
  { path: paths.kontakt, component: ContactsComponent },
  { path: paths.impressum, component: ImpressumComponent },
  { path: paths.datenschutzerklarung, component: DatenschutzerklarungComponent },
  { path: paths.cookie_richtlinie, component: CookieRichtlinieComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

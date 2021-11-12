import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './app-routes';
import { CareerComponent } from './pages/career/career.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { AbbruchEntkernungComponent } from './pages/services/abbruch-entkernung/abbruch-entkernung.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrockenbauComponent } from './pages/services/trockenbau/trockenbau.component';

const routes: Routes = [
  { path: paths.home, component: HomeComponent },
  { path: paths.Leistungen, component: ServicesComponent },

  // update later
  { path: paths.trockenbau, component: TrockenbauComponent },
  { path: paths.abbruch, component: AbbruchEntkernungComponent },
  { path: paths.schadstoffsanierung, component: ServicesComponent },
  { path: paths.gartenpflegearbeiten, component: ServicesComponent },

  { path: paths.Karriere, component: CareerComponent },
  { path: paths.Kontakt, component: ContactsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

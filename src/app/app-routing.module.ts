import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './app-routes';
import { DestroyComponent } from './components/destroy/destroy.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: paths.home, component: HomeComponent },
  { path: paths.Leistungen, component: ServicesComponent },

  // update later
  { path: paths.trockenbau, component: ServicesComponent },
  { path: paths.abbruch, component: DestroyComponent },
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

//app.routes.ts
import { Routes, RouterModule } from '@angular/router';
//import { AuthenticationGuardService } from './services/authentication-guard.service';
import { DeckComponent } from './components/deck/deck.component';
//import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'decks', pathMatch: 'full'  },
  { path: 'decks', component: DeckComponent },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthenticationGuardService] }
];

export const RoutingModule = RouterModule.forRoot(routes, {useHash: true});
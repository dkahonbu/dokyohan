import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BeltingComponent } from './components/events-details/belting/belting.component';
import { BatangPinoyComponent } from './components/events-details/batang-pinoy/batang-pinoy.component';
import { fourthMayorsCupComponent } from './components/events-details/fourth-mayors-cup/fourth-mayors-cup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'our-teams', component: TeamsComponent },
  { path: 'belting-ceremony', component: BeltingComponent },
  { path: 'batang-pinoy', component: BatangPinoyComponent },
  { path: 'fourth-mayors-cup', component: fourthMayorsCupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

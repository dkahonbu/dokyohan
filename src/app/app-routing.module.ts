import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'our-teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

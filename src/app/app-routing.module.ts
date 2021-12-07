import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full'},
  {
    path:'episodios',
    component: EpisodiosComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'personajes',
    component: PersonajesComponent,
    canActivate:[AuthGuard]
  },
  { path: 'character/:id', component: DetalleComponent,
  canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

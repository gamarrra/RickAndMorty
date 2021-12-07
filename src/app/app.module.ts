import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [AppComponent, HomeComponent, AuthenticationButtonComponent, EpisodiosComponent, PersonajesComponent, DetalleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    Ng2SearchPipeModule,
    OrderModule,
    AuthModule.forRoot({
      ...env.auth,
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

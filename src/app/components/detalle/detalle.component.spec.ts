import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';

import { DetalleComponent } from './detalle.component';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientModule,
            AuthModule.forRoot({
              domain:"dev-oanb8k0r.us.auth0.com",
              clientId:"iuAIGA1cUji3CDjzwwqA25j1JA3BxfJ9"
            })
        ],
        providers: [CharactersService,EpisodesService],
        declarations: [DetalleComponent]
    })
        .compileComponents();

}); 

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
});

it('Comprueba si el metodo getPersonaje existe', () => {
  expect(component.getPersonaje).toBeDefined();
});


});

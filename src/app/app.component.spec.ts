import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
      providers: [AppComponent],
      declarations: [AppComponent]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
});


  it('Deberia crear la app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deberia tener un titulo 'authcero'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('authcero');
  });

  it('Deberia tener un <nav>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
        const element = fixture.nativeElement;
    const navElement = element.querySelector('nav');
    expect(navElement).not.toBeNull();
    expect(navElement.className).toContain('navbar');
  });

  it('Debe enlazar una imagen jpeg', () => {
    const busquedaImg = fixture.debugElement.nativeElement.querySelector('img');
    expect(busquedaImg.getAttribute('src')).toContain('.jpg');
    });

});


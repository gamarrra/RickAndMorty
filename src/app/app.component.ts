import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authcero';
  characterPage = 1;
  characterNameSearch = "";

  constructor(public auth:AuthService,private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params.fromPage)  {
        let cPageNum = Number(params.fromPage);
        if (!Number.isNaN(cPageNum)) {
          this.characterPage = cPageNum;
        }
      }
      if (params.nameSearch) { this.characterNameSearch = params.nameSearch; }
    });

  }

  loginWithRedirect():void{
    this.auth.loginWithRedirect();
 }

 logout():void{
  this.auth.logout()
}
}

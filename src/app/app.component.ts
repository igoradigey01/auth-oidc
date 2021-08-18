import { Component, OnInit } from '@angular/core';
import { Title ,Meta}     from '@angular/platform-browser';
import { AuthService } from './shared/sevices/auth.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'auth-oidc';
  public userAuthenticated = false;

  constructor(
    private titleService:Title,
    private meta: Meta,
    private router: Router,
    private route:ActivatedRoute,
    private _authService: AuthService

    ) {
      this._authService.loginChanged
      .subscribe(userAuthenticated => {
        this.userAuthenticated = userAuthenticated;
      })

    }


  ngOnInit(): void {
    this.titleService.setTitle( "auth-oidc-x01")
    this.meta.addTag({ name: 'description', content: 'How to use Angular 12 meta service' });
  //  this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' },true);
    this.meta.addTag({ name: 'author', content: 'X-01' });
    this.meta.addTag(  {name: 'keywords', content: 'Angular, Meta Service,X-01'});
  }
  // зaгрузить lazy any page( test)
  LoadAuthLazy(){

    this.router.navigate(['lazy-Auth','auth'], {relativeTo: this.route})
  }
}

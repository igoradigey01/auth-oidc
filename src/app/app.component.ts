import { Component, OnInit } from '@angular/core';
import { Title ,Meta}     from '@angular/platform-browser';



import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-oidc';

  constructor(
    private titleService:Title,
    private meta: Meta,
    private router: Router,
    private route:ActivatedRoute

    ) {


    }


  ngOnInit(): void {
    this.titleService.setTitle( "newTitle-My")
    this.meta.addTag({ name: 'description', content: 'How to use Angular 12 meta service' });
  //  this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' },true);
    this.meta.addTag({ name: 'author', content: 'X-01' });
    this.meta.addTag(  {name: 'keywords', content: 'Angular, Meta Service,X-01'});
  }

  LoadAuthLazy(){

    this.router.navigate(['lazy-Auth','auth'], {relativeTo: this.route})
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/sevices/auth.service'

@Component({
  selector: 'app-meny',
  templateUrl: './meny.component.html',
  styleUrls: ['./meny.component.scss']
})
export class MenyComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public login = () => {
    this._authService.login();
  }
}

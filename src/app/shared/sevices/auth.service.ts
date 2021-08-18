import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';
import { Constants } from '../constants';
import { Subject } from 'rxjs';
import{ LazyServiceModule} from './lazy-service.module'

@Injectable({
  providedIn: LazyServiceModule
})
export class AuthService {

  private _userManager: UserManager;
  private _user?: User|null;
  private _loginChangedSubject = new Subject<boolean>();




  constructor() {
    this._userManager = new UserManager(this.idpSettings);
  }

  public loginChanged = this._loginChangedSubject.asObservable();

  public login = () => {
    return this._userManager.signinRedirect();
  }

  public isAuthenticated = (): Promise<boolean> => {
    return this._userManager.getUser()
    .then(user => {
      if(this._user !== user){
        this._loginChangedSubject.next(this.checkUser(user));
      }

      this._user = user;

      return this.checkUser(user);
    })

  }

  private checkUser = (user : User|null): boolean => {

    return !!user && !user.expired;
  }

  private get idpSettings() : UserManagerSettings {
    return {
      authority: Constants.idpAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}/signin-callback`,
      response_type: "code",
      post_logout_redirect_uri: `${Constants.clientRoot}/signout-callback`
    }
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthneticated = true;
  private _userId = 'abc';

  get userIsAuthenticated(){
    return this._userIsAuthneticated;
  }

  get userId(){
    return this._userId;
  }

  constructor() { }

  login(){
    this._userIsAuthneticated = true;
  }

  logout(){
    this._userIsAuthneticated = false;
  }
}

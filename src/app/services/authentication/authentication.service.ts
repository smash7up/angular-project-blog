import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(pseudo: string, password: string) {
    if (pseudo === "Dylan" && password === "123456789") {
      sessionStorage.setItem('pseudo', pseudo)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('pseudo')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('pseudo')
  }
}
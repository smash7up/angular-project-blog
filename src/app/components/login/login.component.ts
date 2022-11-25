import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pseudo = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    public loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.pseudo, this.password)
    ) {
      this.router.navigate(['/'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
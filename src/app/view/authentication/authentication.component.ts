import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {getToken} from '../../utils';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  goodEmail = 'huutai.tran33@gmail.com';
  goodPassword = 'Password33';

  email = '';
  password = '';
  rememberme = false;
  error = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (getToken() === null) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  submit(): any {
    if (this.email === this.goodEmail && this.password === this.goodPassword) {
      this.router.navigateByUrl('/double_authentication');
    } else {
      this.error = 'Identifiants incorrects. Veuillez réessayer.';
    }
  }

}

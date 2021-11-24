import { Component, OnInit } from '@angular/core';
import {getToken, saveToken} from '../../utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-double-authentication',
  templateUrl: './double-authentication.component.html',
  styleUrls: ['./double-authentication.component.css']
})
export class DoubleAuthenticationComponent implements OnInit {

  goodPassword = 'GOODPASSWORD';

  password = '';
  error = '';
  redirectHere = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  submit(): any {
    if (this.password === this.goodPassword) {
      saveToken('TOOOOOOOKEEEEEEN');
      this.router.navigateByUrl('/home');
    }
    this.error = 'Code incorrect. Veuillez réessayer.';
  }
}

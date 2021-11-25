import { Component, OnInit } from '@angular/core';
import {getToken, saveToken} from '../../utils';
import {Router} from '@angular/router';
import {PasswordService} from '../../service/password.service';

@Component({
  selector: 'app-double-authentication',
  templateUrl: './double-authentication.component.html',
  styleUrls: ['./double-authentication.component.css']
})
export class DoubleAuthenticationComponent implements OnInit {

  goodPassword = '';

  password = '';
  error = '';
  redirectHere = false;

  constructor(private router: Router,
              private passwordService: PasswordService
  ) { }

  ngOnInit(): void {
    this.passwordService.getPassword().subscribe(data => {
      this.goodPassword = data.password;
      console.log(this.goodPassword);
    });
  }

  submit(): any {
    if (this.password === this.goodPassword) {
      saveToken('TOOOOOOOKEEEEEEN');
      this.router.navigateByUrl('/home');
    }
    this.error = 'Code incorrect. Veuillez réessayer.';
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {getToken, logout} from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (getToken() === null) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  logout(): any {
    logout();
    this.router.navigateByUrl('/login');
  }

}

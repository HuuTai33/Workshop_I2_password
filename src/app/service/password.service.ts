import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private passwordUrl = environment.api_url;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPassword(): Observable<any> {
    return this.httpClient
      .get(this.passwordUrl + 'createPassword/18')
      .pipe(map((data) => data as any), catchError((err: any) => err.code === 404 ? [] : throwError(err)));
  }

}

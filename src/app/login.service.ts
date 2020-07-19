import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginViewModel } from 'src/app/login-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) {
  }

  readonly API_URL:string = '//localhost:8080/authenticate';

  currentUsername: string = null;

  public doLogin(loginViewModel : LoginViewModel) : Observable<any> {
    return this.httpClient.post<any>(this.API_URL, loginViewModel, { responseType: "json" })
    .pipe(map(user => {
      if(user) {
        this.currentUsername = user.username;
      }
      return user;
    }));
  }

  public doLogout() {
    this.currentUsername = null;
  }
}

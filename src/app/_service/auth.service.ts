import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private resource = 'auth';

  constructor(
    private http: HttpClient,
  ) { }

  private _session: any;

  onLoginSuccess: EventEmitter<any> = new EventEmitter();
  onLoginFail: EventEmitter<any> = new EventEmitter();

  Login({ username, password }) {
    var form = {
      username,
      password,
      grant_type: "password",
      client_id: environment.client.name,
      client_secret: environment.client.secret
    };

    return this.http.post<any>(`${environment.endpoint}/${this.resource}/token`, form).pipe(map(response => {
      console.log(response)
      response.expire = (response.expire_in * 1000) + Date.now();
      this._session = response;
      sessionStorage[environment.client.name] = JSON.stringify(response);
      return response;
    }));
  }

  Logout() {
    delete sessionStorage[environment.client.name];
  }

  isExpire(): boolean {
    var session = this.getSession();
    if (session) {
      return Date.now() > session.expire;
    }
    else {
      return true;
    }
  }

  getSession() {
    if (this._session) {
      return this._session;
    }
    else if (sessionStorage[environment.client.name]) {
      this._session = JSON.parse(sessionStorage[environment.client.name]);
      return this._session;
    }
  }

  getScope() {
    var session = this.getSession();
    if (session) {
      return session.scope
    }
  }

  getToken() {
    var session = this.getSession();
    if (session) {
      var [type, content, sign] = session.token.split('.');
      return { type: JSON.parse(atob(type)), content: JSON.parse(atob(content)), sign }
    }
  }

  getSecondForExpire() {
    var session = this.getSession();
    if (session) {
      return session.expire - Date.now();
    } else {
      return 0;
    }
  }
}

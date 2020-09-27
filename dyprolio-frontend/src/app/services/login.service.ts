import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(login_obj) {
    return this.http.post('http://localhost:8000/api/secure/login', login_obj);
  }

  setSession(obj) {
    localStorage.setItem('token', obj['token']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!(token)) {
      return false;
    } else {
      return true;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

}

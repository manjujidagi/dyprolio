import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public page = 'login';
  public username = '';
  public password = '';

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    const login_obj = {
      'username' : this.username,
      'password' : this.password
    };

    this._loginService.postLogin(login_obj).subscribe({
      next: (data) => {
        this._loginService.setSession(data);
        this.router.navigate(['/data-management']);
      },
      error: (error) => {
        if (error.status === 401) {
          Swal.fire({
            title: 'Authentication Failed',
            text: error.error.error_detail,
            icon: 'error'
          });
        } else {
          Swal.fire({
            title: error.statusText,
            text: error.error.error_detail,
            icon: 'error'
          });
        }
      }
    });
  }

}

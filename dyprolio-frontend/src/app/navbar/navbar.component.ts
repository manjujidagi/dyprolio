import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  // public sidebarOpened = false;
  public navbarOpened = false;
  public isLoggedIn = false;

  @Input() public active = null;

  // toggleOffcanvas() {
  //   this.sidebarOpened = !this.sidebarOpened;
  //   if (this.sidebarOpened) {
  //     document.querySelector('.sidebar-offcanvas').classList.add('active');
  //   } else {
  //     document.querySelector('.sidebar-offcanvas').classList.remove('active');
  //   }
  // }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
    if (this.navbarOpened) {
      document.querySelector('.navbar-toggler-button').setAttribute('aria-expanded', 'true');
      document.querySelector('.navbar-toggler-button').classList.remove('collapsed');
      document.querySelector('#navbarSupportedContent').classList.add('show');
    } else {
      document.querySelector('.navbar-toggler-button').setAttribute('aria-expanded', 'false');
      document.querySelector('.navbar-toggler-button').classList.add('collapsed');
      document.querySelector('#navbarSupportedContent').classList.remove('show');
    }

  }

  constructor(config: NgbDropdownConfig, private router: Router, private _loginService: LoginService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.isLoggedIn = this._loginService.isLoggedIn();
  }

  logout() {
    this._loginService.logout();
    this.router.navigate(['/']);
  }

}

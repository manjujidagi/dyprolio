import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit {

  public page = 'data-management';
  public products = null;

  constructor(
    private router: Router,
    private _loginService: LoginService,
    private _productService: ProductService,
    private LocalStorage: LocalStorageService
  ) { }

  ngOnInit() {
    if (!(this._loginService.isLoggedIn())) {
      this.router.navigate(['/']);
    }

    this._productService.getAllProducts();
    this.LocalStorage.observe('products')
      .subscribe((data) => {
        this.products = data;
      });

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private _loginService: LoginService, private LocalStorage: LocalStorageService) { }

  getProducts() {
    return [
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      },
      {
        'id' : '123789',
        'name' : 'iPhone 6s',
        'image_link' : 'iphone6s.JPG',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is very good phone'
      }
    ];
  }

  getTopBannerProducts() {
    return [
      {
        'id' : '237465',
        'name' : 'Short Frock',
        'image_link' : 'dress-banner.png',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is good dress'
      },
      {
        'id' : '237466',
        'name' : 'Blazer',
        'image_link' : 'clothes.jpg',
        'price' : '25000',
        'discounted_price' : '22500',
        'description' : 'This is good blazer'
      }
    ];
  }

  getAllProducts() {
    // return this.http.get<any>('http://localhost:8000/api/products/');
    this.http.get<any>('http://localhost:8000/api/products/')
      .subscribe((data) => {
        this.LocalStorage.store('products', data);
      });
  }

  addProduct(product_obj) {
    const headers_obj = {
      'Authorization' : this._loginService.getToken()
    };

    return this.http.post('http://localhost:8000/api/products/', product_obj, {
      'headers' : headers_obj
    });
  }

  replaceProduct(id, product_obj) {
    const headers_obj = {
      'Authorization' : this._loginService.getToken()
    };

    return this.http.put('http://localhost:8000/api/products/' + id + '/', product_obj, {
      'headers' : headers_obj
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-top-banner',
  templateUrl: './product-top-banner.component.html',
  styleUrls: ['./product-top-banner.component.scss']
})
export class ProductTopBannerComponent implements OnInit {

  public top_banner_products = [];
  @Input() public featuredOnly = null;

  constructor(private _productService: ProductService, config: NgbCarouselConfig, private LocalStorage: LocalStorageService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this._productService.getAllProducts();
    this.LocalStorage.observe('products')
      .subscribe((data) => {
        if (this.featuredOnly) {
          this.top_banner_products = this.getFeaturedBannerProducts(data);
        } else {
          this.top_banner_products = this.getBannerProducts(data);
        }
      });
  }

  getFeaturedBannerProducts(data) {
    const featuredBannerProducts = [];
    for (let i = 0; i < data.length; i++) {
      const product_images = data[i]['product_images'];
      for (let j = 0; j < product_images.length; j++) {
        if (product_images[j]['featured'] && product_images[j]['banner']) {
          featuredBannerProducts.push(product_images[j]);
        }
      }
    }
    return featuredBannerProducts;
  }

  getBannerProducts(data) {
    const featuredBannerProducts = [];
    for (let i = 0; i < data.length; i++) {
      const product_images = data[i]['product_images'];
      for (let j = 0; j < product_images.length; j++) {
        if (product_images[j]['banner']) {
          featuredBannerProducts.push(product_images[j]);
        }
      }
    }
    return featuredBannerProducts;
  }

}

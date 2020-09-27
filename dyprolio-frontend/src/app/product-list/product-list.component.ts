import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = [];
  public showModal = false;
  public selectedProduct = null;

  @Input() public featuredOnly = null;

  constructor(private _productService: ProductService, private modalService: NgbModal, private LocalStorage: LocalStorageService) { }

  ngOnInit() {
    this._productService.getAllProducts();
    this.LocalStorage.observe('products')
      .subscribe((data) => {
        if (this.featuredOnly) {
          this.products = this.getFeaturedProducts(data);
        } else {
          this.products = data;
        }
      });
  }

  showBig(content, prod) {
    this.selectedProduct = prod;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  getFeaturedProducts(data) {
    const featuredProducts = [];
    let featureCount = 0;
    for (let i = 0; i < data.length; i++) {
      const product_images = data[i]['product_images'];
      const featured_images = [];
      for (let j = 0; j < product_images.length; j++) {
        if (product_images[j]['featured'] && !product_images[j]['banner']) {
          featured_images.push(product_images[j]);
        }
      }

      if (featured_images.length > 0) {
        featuredProducts.push(data[i]);
        featuredProducts[featureCount]['product_images'] = featured_images;
        featureCount += 1;
      }
    }
    return featuredProducts;
  }

}

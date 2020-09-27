import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-management-add-product',
  templateUrl: './data-management-add-product.component.html',
  styleUrls: ['./data-management-add-product.component.scss']
})
export class DataManagementAddProductComponent implements OnInit {

  public product_name = '';
  public product_description = '';
  public price = '';
  public discounted_price = '';
  public product_images = [];


  constructor(private modalService: NgbModal, private _productService: ProductService) { }

  ngOnInit() {
  }

  showAddProductModal(content) {
    this.modalService.open(content);
  }

  addImage() {
    this.product_images.push({
      'image' : null,
      'banner' : false,
      'featured' : false
    });
  }

  fileChanged(event, idx) {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.product_images[idx].image = e.target.result;
    };
    reader.readAsDataURL(image);
  }

  addProduct() {

    const product_obj = {
      'product_name' : this.product_name,
      'product_description': this.product_description,
      'price' : this.price,
      'discounted_price' : this.discounted_price,
      'product_images' : this.product_images
    };

    this._productService.addProduct(product_obj).subscribe({
      next: (data) => {
        this._productService.getAllProducts();
        Swal.fire({
          title: 'Success',
          text: 'Adding Product Successful',
          icon: 'success'
        });
        this.modalService.dismissAll();
      },
      error: (error) => {
        Swal.fire({
          title: error.statusText,
          text: error.error.error_detail,
          icon: 'error'
        });
      }
    });
  }

}

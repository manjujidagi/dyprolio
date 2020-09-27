import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-management-edit-product',
  templateUrl: './data-management-edit-product.component.html',
  styleUrls: ['./data-management-edit-product.component.scss']
})
export class DataManagementEditProductComponent implements OnInit {

  @Input() public selectedProduct = null;

  public id = null;
  public product_name = '';
  public product_description = '';
  public price = '';
  public discounted_price = '';
  public product_images = [];

  constructor(private modalService: NgbModal, private _productService: ProductService) { }

  ngOnInit(): void {
    if (this.selectedProduct) {
      this.id = this.selectedProduct.id;
      this.product_name = this.selectedProduct.product_name;
      this.product_description = this.selectedProduct.product_description;
      this.price = this.selectedProduct.price;
      this.discounted_price = this.selectedProduct.discounted_price;
      this.product_images = [].concat(this.selectedProduct.product_images);
    }
  }

  showEditProductModal(content) {
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

  editProduct() {
    const product_obj = {
      'product_name' : this.product_name,
      'product_description': this.product_description,
      'price' : this.price,
      'discounted_price' : this.discounted_price,
      'product_images' : this.product_images
    };

    this._productService.replaceProduct(this.id, product_obj).subscribe({
      next: (data) => {
        this._productService.getAllProducts();
        Swal.fire({
          title: 'Success',
          text: 'Product Details Updating Successful',
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

  deleteImage(idx) {
    this.product_images.splice(idx, 1);
  }

}

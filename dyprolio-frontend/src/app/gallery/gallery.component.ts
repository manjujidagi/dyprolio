import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public page = 'gallery';
  public featuredOnly = false;

  constructor() { }

  ngOnInit() {
  }

}
